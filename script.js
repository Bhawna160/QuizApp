// Application State
let currentSection = "home";
let currentQuiz = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let quizScore = 0;
let selectedTopic = null;
let quizTimer = null;
let timeRemaining = 900; // 15 minutes in seconds
let quizStartTime = null;

// Initialize the application
document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
  setupEventListeners();
  updateHomeStats();
  loadScores();
});

// Initialize application
function initializeApp() {
  showSection("home");
  populateNotesSection();
  populateQuizTopics();
  populateTopicFilter();
}

// Setup event listeners
function setupEventListeners() {
  // Navigation
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const section = this.dataset.section;
      showSection(section);
      updateActiveNav(this);
    });
  });

  // Home page actions
  document.querySelectorAll("[data-action]").forEach((btn) => {
    btn.addEventListener("click", function () {
      const action = this.dataset.action;
      if (action === "goto-notes") {
        showSection("notes");
      } else if (action === "goto-quiz") {
        showSection("quiz");
      }
    });
  });

  // Topic filter
  document
    .getElementById("topic-filter")
    .addEventListener("change", function () {
      filterNotes(this.value);
    });

  // Quiz setup
  document.getElementById("start-quiz").addEventListener("click", startQuiz);

  // Quiz controls
  document.getElementById("submit-quiz").addEventListener("click", submitQuiz);
  document
    .getElementById("next-question")
    .addEventListener("click", nextQuestion);
  document.getElementById("finish-quiz").addEventListener("click", finishQuiz);
  document.getElementById("retake-quiz").addEventListener("click", retakeQuiz);
  document.getElementById("new-quiz").addEventListener("click", setupNewQuiz);

  // Scores
  document
    .getElementById("clear-scores")
    .addEventListener("click", clearScores);

  // Alert system
  document
    .getElementById("alert-confirm")
    .addEventListener("click", function () {
      hideAlert();
      if (window.alertCallback) {
        window.alertCallback(true);
        window.alertCallback = null;
      }
    });

  document
    .getElementById("alert-cancel")
    .addEventListener("click", function () {
      hideAlert();
      if (window.alertCallback) {
        window.alertCallback(false);
        window.alertCallback = null;
      }
    });
}

// Custom Alert System
function showAlert(title, message, type = "info", showCancel = false) {
  return new Promise((resolve) => {
    const overlay = document.getElementById("alert-overlay");
    const titleEl = document.getElementById("alert-title");
    const messageEl = document.getElementById("alert-message");
    const iconEl = document.getElementById("alert-icon");
    const confirmBtn = document.getElementById("alert-confirm");
    const cancelBtn = document.getElementById("alert-cancel");

    titleEl.textContent = title;
    messageEl.textContent = message;

    // Set icon based on type
    iconEl.className = `alert-icon ${type}`;
    switch (type) {
      case "success":
        iconEl.textContent = "✓";
        break;
      case "warning":
        iconEl.textContent = "⚠️";
        break;
      case "error":
        iconEl.textContent = "✕";
        break;
      default:
        iconEl.textContent = "ℹ️";
    }

    if (showCancel) {
      cancelBtn.classList.remove("hidden");
    } else {
      cancelBtn.classList.add("hidden");
    }

    overlay.classList.remove("hidden");

    window.alertCallback = resolve;
  });
}

function hideAlert() {
  document.getElementById("alert-overlay").classList.add("hidden");
}

// Navigation functions
function showSection(sectionName) {
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.remove("active");
  });
  document.getElementById(sectionName).classList.add("active");
  currentSection = sectionName;

  // Update navigation
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.remove("active");
    if (btn.dataset.section === sectionName) {
      btn.classList.add("active");
    }
  });
}

function updateActiveNav(activeBtn) {
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  activeBtn.classList.add("active");
}

// Home page functions
function updateHomeStats() {
  const totalTopics = Object.keys(studyData).length;
  // Since we use 5 questions per topic in quizzes
  const totalQuizQuestions = totalTopics * 20;

  document.getElementById("total-topics").textContent = totalTopics;
  document.getElementById("total-questions").textContent = totalQuizQuestions;

  // Update best score
  const scores = getStoredScores();
  const bestScore =
    scores.length > 0 ? Math.max(...scores.map((s) => s.percentage)) : 0;

  document.getElementById("best-score").textContent = bestScore + "%";
}

// Notes section functions
function populateNotesSection() {
  const notesContainer = document.getElementById("notes-container");
  notesContainer.innerHTML = "";

  Object.values(studyData).forEach((topicData) => {
    topicData.notes.forEach((note) => {
      const noteCard = createNoteCard(note, topicData.topic);
      notesContainer.appendChild(noteCard);
    });
  });
}

function createNoteCard(note, topic) {
  const card = document.createElement("div");
  card.className = "note-card";
  card.dataset.topic = topic;
  card.dataset.title = note.title.toLowerCase();
  card.dataset.content = note.content.toLowerCase();

  // Extract keywords from content
  const keywords = extractKeywords(note.content);

  // Format content for better presentation
  const formattedContent = formatNoteContent(note.content);

  card.innerHTML = `
        <h3>${note.title}</h3>
        <div class="note-content">${formattedContent}</div>
        <div class="note-keywords">
            ${keywords
              .map((keyword) => `<span class="keyword">${keyword}</span>`)
              .join("")}
        </div>
    `;

  return card;
}

function formatNoteContent(content) {
  // Better formatting for note content
  return content
    .replace(/•/g, "•")
    .replace(/\n  - /g, "\n    • ")
    .replace(/\n• /g, "\n• ")
    .replace(/\n\n/g, "\n\n")
    .replace(/([A-Z][a-z]+ [A-Z][a-z]+:)/g, "<strong>$1</strong>")
    .replace(/(\d+NF|\d+\w+)/g, "<strong>$1</strong>")
    .replace(
      /(ACID|TCP|UDP|OSI|HTTP|SQL|DDL|DML|PCB|FCFS|FIFO|LIFO)/g,
      "<strong>$1</strong>"
    );
}

function populateTopicFilter() {
  const filter = document.getElementById("topic-filter");
  const currentValue = filter.value;

  // Clear existing options except "All Topics"
  filter.innerHTML = '<option value="all">All Subjects</option>';

  Object.keys(studyData).forEach((topic) => {
    const option = document.createElement("option");
    option.value = topic;
    option.textContent = topic;
    filter.appendChild(option);
  });

  filter.value = currentValue;
}

function filterNotes(selectedTopic) {
  const noteCards = document.querySelectorAll(".note-card");

  noteCards.forEach((card) => {
    if (selectedTopic === "all" || card.dataset.topic === selectedTopic) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function extractKeywords(content) {
  // Extract important technical terms and concepts for CS subjects
  const keywords = [];
  const patterns = [
    /\b(process|thread|memory|CPU|OS|scheduling|deadlock|PCB|virtual|paging|segmentation)\b/gi,
    /\b(SQL|database|ACID|normalization|index|table|query|JOIN|SELECT|PRIMARY|FOREIGN)\b/gi,
    /\b(TCP|UDP|OSI|IP|routing|protocol|network|HTTP|HTTPS|DNS|routing|gateway)\b/gi,
    /\b(Java|OOP|exception|thread|class|object|inheritance|polymorphism|encapsulation)\b/gi,
    /\b(algorithm|data|structure|heap|stack|queue|array|tree|graph|sorting)\b/gi,
  ];

  patterns.forEach((pattern) => {
    const matches = content.match(pattern);
    if (matches) {
      matches.forEach((match) => {
        const keyword = match.toLowerCase();
        if (!keywords.includes(keyword)) {
          keywords.push(keyword);
        }
      });
    }
  });

  return keywords.slice(0, 6); // Limit to 6 keywords
}

// Quiz section functions
function populateQuizTopics() {
  const topicsContainer = document.getElementById("topic-cards");
  topicsContainer.innerHTML = "";

  Object.keys(studyData).forEach((topic) => {
    const topicCard = createTopicCard(topic);
    topicsContainer.appendChild(topicCard);
  });
}

function createTopicCard(topic) {
  const card = document.createElement("div");
  card.className = "topic-card";
  card.dataset.topic = topic;

  const questionCount = studyData[topic].questions.length;

  card.innerHTML = `
        <h4>${topic}</h4>
        <p>${questionCount} questions available</p>
    `;

  card.addEventListener("click", function () {
    selectTopic(topic, card);
  });

  return card;
}

function selectTopic(topic, cardElement) {
  // Remove previous selection
  document.querySelectorAll(".topic-card").forEach((card) => {
    card.classList.remove("selected");
  });

  // Select current topic
  cardElement.classList.add("selected");
  selectedTopic = topic;
}

function startQuiz() {
  if (!selectedTopic) {
    showAlert(
      "Topic Selection Required",
      "Please select a topic before starting the quiz.",
      "warning"
    );
    return;
  }

  const availableQuestions = studyData[selectedTopic].questions;

  // Always use 5 questions (or all available if less than 5)
  const questionCount = Math.min(20, availableQuestions.length);

  // Shuffle and select questions
  const shuffledQuestions = [...availableQuestions].sort(
    () => Math.random() - 0.5
  );
  currentQuiz = shuffledQuestions.slice(0, questionCount);

  // Reset quiz state
  currentQuestionIndex = 0;
  userAnswers = [];
  quizScore = 0;
  timeRemaining = 900; // 15 minutes (for 20 questions)
  quizStartTime = Date.now();

  // Update total score display
  document.getElementById("total-score").textContent = currentQuiz.length;

  // Show quiz interface
  document.getElementById("quiz-setup").classList.add("hidden");
  document.getElementById("quiz-interface").classList.remove("hidden");
  document.getElementById("quiz-results").classList.add("hidden");

  // Start timer
  startTimer();

  // Update UI
  updateQuizProgress();
  showQuestion();
}

function startTimer() {
  updateTimerDisplay();
  quizTimer = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay();

    if (timeRemaining <= 0) {
      clearInterval(quizTimer);
      showAlert(
        "Time Up!",
        "Your time is up. The quiz will be submitted automatically.",
        "warning"
      );
      setTimeout(() => {
        finishQuiz();
      }, 2000);
    }
  }, 1000);
}

function updateTimerDisplay() {
  const timerEl = document.getElementById("timer");
  const timerDisplay = document.querySelector(".timer-display");
  const timeString = formatTime(timeRemaining);

  timerEl.textContent = timeString;

  // Change color based on time remaining
  if (timeRemaining <= 60) {
    timerDisplay.className = "timer-display danger";
  } else if (timeRemaining <= 300) {
    timerDisplay.className = "timer-display warning";
  } else {
    timerDisplay.className = "timer-display";
  }
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
}

function showQuestion() {
  const question = currentQuiz[currentQuestionIndex];
  const questionText = document.getElementById("question-text");
  const optionsContainer = document.getElementById("options-container");

  questionText.textContent = question.question;
  optionsContainer.innerHTML = "";

  question.options.forEach((option, index) => {
    const optionElement = document.createElement("div");
    optionElement.className = "option";
    optionElement.textContent = option;
    optionElement.dataset.index = index;

    optionElement.addEventListener("click", function () {
      selectOption(index, optionElement);
    });

    optionsContainer.appendChild(optionElement);
  });

  // Hide/show controls
  document.getElementById("next-question").classList.add("hidden");
  document.getElementById("finish-quiz").classList.add("hidden");
}

function selectOption(selectedIndex, optionElement) {
  const question = currentQuiz[currentQuestionIndex];
  const options = document.querySelectorAll(".option");

  // Remove previous selections
  options.forEach((opt) => {
    opt.classList.remove("selected", "correct", "incorrect");
    opt.style.pointerEvents = "none";
  });

  // Mark selection
  optionElement.classList.add("selected");

  // Show correct answer after a brief delay
  setTimeout(() => {
    options.forEach((opt, index) => {
      if (index === question.correct) {
        opt.classList.add("correct");
      } else if (
        index === selectedIndex &&
        selectedIndex !== question.correct
      ) {
        opt.classList.add("incorrect");
      }
    });

    // Store answer
    userAnswers[currentQuestionIndex] = selectedIndex;

    // Update score
    if (selectedIndex === question.correct) {
      quizScore++;
    }

    // Update current score display
    document.getElementById("current-score").textContent = quizScore;

    // Show next button or finish button
    if (currentQuestionIndex < currentQuiz.length - 1) {
      document.getElementById("next-question").classList.remove("hidden");
    } else {
      document.getElementById("finish-quiz").classList.remove("hidden");
    }

    updateQuizProgress();
  }, 500);
}

function nextQuestion() {
  currentQuestionIndex++;
  showQuestion();

  // Re-enable option clicks
  document.querySelectorAll(".option").forEach((opt) => {
    opt.style.pointerEvents = "auto";
  });
}

function updateQuizProgress() {
  const progress = ((currentQuestionIndex + 1) / currentQuiz.length) * 100;
  document.getElementById("progress-fill").style.width = progress + "%";
  document.getElementById("question-counter").textContent = `Question ${
    currentQuestionIndex + 1
  } of ${currentQuiz.length}`;
}

async function submitQuiz() {
  const confirmed = await showAlert(
    "Submit Quiz",
    "Are you sure you want to submit the quiz? This will end your current session.",
    "warning",
    true
  );

  if (confirmed) {
    finishQuiz();
  }
}

function finishQuiz() {
  // Stop timer
  if (quizTimer) {
    clearInterval(quizTimer);
  }

  // Calculate time taken
  const timeTaken = Math.round((Date.now() - quizStartTime) / 1000);

  // Calculate score based on total questions in quiz
  const percentage = Math.round((quizScore / currentQuiz.length) * 100);

  // Save score
  saveScore(
    selectedTopic,
    quizScore,
    currentQuiz.length,
    percentage,
    timeTaken
  );

  // Show results
  document.getElementById("quiz-interface").classList.add("hidden");
  document.getElementById("quiz-results").classList.remove("hidden");

  // Update results display
  document.getElementById("final-score").textContent = quizScore;
  document.getElementById("final-total").textContent = currentQuiz.length;
  document.getElementById("final-score-percentage").textContent =
    percentage + "%";
  document.getElementById("final-time").textContent = formatTime(timeTaken);

  // Performance message
  const performanceMessage = document.getElementById("performance-message");
  if (percentage >= 90) {
    performanceMessage.textContent =
      "Outstanding! You have excellent mastery of this topic! 🎉";
    performanceMessage.style.color = "#4facfe";
  } else if (percentage >= 75) {
    performanceMessage.textContent =
      "Great job! You have a solid understanding of the concepts. 👍";
    performanceMessage.style.color = "#667eea";
  } else if (percentage >= 60) {
    performanceMessage.textContent =
      "Good effort! Review the notes and try again to improve. 📚";
    performanceMessage.style.color = "#fa709a";
  } else {
    performanceMessage.textContent =
      "Keep practicing! Review the study materials and try again. 💪";
    performanceMessage.style.color = "#f5576c";
  }

  // Update home stats
  updateHomeStats();
}

function retakeQuiz() {
  // Reset quiz interface
  document.getElementById("quiz-results").classList.add("hidden");
  document.getElementById("quiz-setup").classList.remove("hidden");

  // Keep the same topic selected
  if (selectedTopic) {
    const topicCard = document.querySelector(`[data-topic="${selectedTopic}"]`);
    if (topicCard) {
      topicCard.classList.add("selected");
    }
  }
}

function setupNewQuiz() {
  // Reset everything
  selectedTopic = null;
  document.querySelectorAll(".topic-card").forEach((card) => {
    card.classList.remove("selected");
  });

  document.getElementById("quiz-results").classList.add("hidden");
  document.getElementById("quiz-setup").classList.remove("hidden");
}

function takeQuizFromNote(topic) {
  showSection("quiz");
  selectedTopic = topic;

  // Select the topic card
  setTimeout(() => {
    const topicCard = document.querySelector(`[data-topic="${topic}"]`);
    if (topicCard) {
      selectTopic(topic, topicCard);
    }
  }, 100);
}

// Score management functions
function saveScore(topic, score, total, percentage, timeTaken) {
  const scores = getStoredScores();
  const newScore = {
    topic: topic,
    score: score,
    total: total,
    percentage: percentage,
    timeTaken: timeTaken,
    date: new Date().toLocaleDateString(),
  };

  scores.push(newScore);
  localStorage.setItem("quizScores", JSON.stringify(scores));
}

function getStoredScores() {
  const scores = localStorage.getItem("quizScores");
  return scores ? JSON.parse(scores) : [];
}

function loadScores() {
  const scores = getStoredScores();
  const container = document.getElementById("scores-container");

  if (scores.length === 0) {
    container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">📊</div>
                <p>No quiz scores yet. Take a quiz to see your results here!</p>
            </div>
        `;
    return;
  }

  // Sort scores by date (newest first)
  scores.sort((a, b) => new Date(b.date) - new Date(a.date));

  container.innerHTML = scores
    .map(
      (score) => `
        <div class="score-item">
            <div class="score-header">
                <span class="score-topic">${score.topic}</span>
                <span class="score-percentage">${score.percentage}%</span>
            </div>
            <div class="score-details">
                <span>Score: ${score.score}/${score.total}</span>
              
                <span>Date: ${new Date(score.date).toLocaleDateString()}</span>
            </div>
        </div>
    `
    )
    .join("");
}

async function clearScores() {
  const confirmed = await showAlert(
    "Clear All Scores",
    "Are you sure you want to clear all your quiz scores? This action cannot be undone.",
    "warning",
    true
  );

  if (confirmed) {
    localStorage.removeItem("quizScores");
    loadScores();
    updateHomeStats();
    showAlert(
      "Success",
      "All scores have been cleared successfully.",
      "success"
    );
  }
}
