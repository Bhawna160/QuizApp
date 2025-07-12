// Study Notes Data
const studyData = {
    "Operating Systems": {
        topic: "Operating Systems",
        notes: [
            {
                title: "Process Management",
                content: `• A process is a program in execution consisting of program code, data, and Process Control Block (PCB)

• Process Scheduling determines which process runs next using algorithms:
  - Round Robin: Time-sharing with fixed time quantum
  - FCFS (First Come First Serve): Processes execute in arrival order
  - Priority Scheduling: Higher priority processes execute first

• Context Switching saves current process state and loads another process state

• Process States:
  - New: Process is being created
  - Ready: Process is waiting to be assigned to processor
  - Running: Instructions are being executed
  - Waiting: Process is waiting for some event to occur
  - Terminated: Process has finished execution

• Inter-Process Communication (IPC):
  - Shared Memory: Processes share memory region
  - Message Passing: Processes communicate via messages
  - Pipes: Unidirectional communication channel
  - Semaphores: Synchronization primitives`
            },
            {
                title: "Memory Management",
                content: `• Memory management handles efficient allocation and deallocation of main memory among processes

• Key Memory Management Techniques:
  - Paging: Divides memory into fixed-size frames and processes into pages
  - Eliminates external fragmentation
  - Page tables map virtual to physical addresses
  - Segmentation: Divides memory into variable-size segments (code, data, stack)

• Virtual Memory allows processes larger than physical memory using secondary storage

• Memory Allocation Strategies:
  - First Fit: Allocate first hole that is big enough
  - Best Fit: Allocate smallest hole that is big enough
  - Worst Fit: Allocate largest hole

• Page Replacement Algorithms:
  - FIFO: Replace oldest page
  - LRU: Replace least recently used page
  - Optimal: Replace page not used for longest time`
            },
            {
                title: "File Systems",
                content: `• File systems provide organized storage and retrieval of data on secondary storage devices

• File Organization Methods:
  - Sequential access: Tape-like reading from beginning
  - Direct access: Random access to any location
  - Indexed access: Using index blocks for fast access

• File Allocation Strategies:
  - Contiguous allocation: Files stored in consecutive blocks
    + Advantages: Fast access
    + Disadvantages: External fragmentation
  - Linked allocation: Files stored in linked blocks
    + Advantages: No external fragmentation
    + Disadvantages: Sequential access only
  - Indexed allocation: Uses index blocks
    + Advantages: Direct access, no external fragmentation
    + Disadvantages: Index block overhead

• Directory Structure:
  - Single-level directory
  - Two-level directory
  - Tree-structured directory
  - Acyclic-graph directory`
            },
            {
                title: "Deadlocks",
                content: `• Deadlock: Situation where processes wait indefinitely for resources held by other processes

• Four Necessary Conditions (Coffman Conditions):
  1. Mutual Exclusion: Resources cannot be shared
  2. Hold and Wait: Processes hold resources while waiting for others
  3. No Preemption: Resources cannot be forcibly taken away
  4. Circular Wait: Circular chain of processes waiting for resources

• Deadlock Handling Strategies:
  - Prevention: Eliminate one of the four conditions
  - Avoidance: Use algorithms like Banker's algorithm
  - Detection: Detect deadlocks and recover
  - Ignore: Ostrich algorithm (restart system)

• Banker's Algorithm:
  - Resource allocation algorithm
  - Ensures safe state before allocation
  - Avoids deadlock by simulating allocation`
            }
        ],
        questions: [
            {
                question: "What are the five states of a process?",
                options: ["New, Ready, Running, Waiting, Terminated", "Start, Load, Execute, Block, End", "Create, Schedule, Run, Sleep, Kill", "Init, Queue, Active, Pause, Stop"],
                correct: 0
            },
            {
                question: "Which memory management technique divides memory into fixed-size blocks?",
                options: ["Segmentation", "Paging", "Partitioning", "Swapping"],
                correct: 1
            },
            {
                question: "What is a Process Control Block (PCB)?",
                options: ["A hardware component", "A data structure storing process information", "A memory allocation unit", "A scheduling algorithm"],
                correct: 1
            },
            {
                question: "Which is NOT a condition for deadlock?",
                options: ["Mutual exclusion", "Hold and wait", "Preemption allowed", "Circular wait"],
                correct: 2
            },
            {
                question: "What does virtual memory allow?",
                options: ["Faster CPU processing", "Running programs larger than physical memory", "Better graphics rendering", "Network communication"],
                correct: 1
            },
            {
                question: "Which scheduling algorithm uses time quantum?",
                options: ["FCFS", "Round Robin", "Priority", "Shortest Job First"],
                correct: 1
            },
            {
                question: "What is external fragmentation?",
                options: ["Memory inside allocated blocks", "Unused memory between allocated blocks", "Memory at the end of RAM", "Corrupted memory sectors"],
                correct: 1
            },
            {
                question: "Which page replacement algorithm is optimal?",
                options: ["FIFO", "LRU", "Optimal", "Random"],
                correct: 2
            },
            {
                question: "What is the main advantage of indexed file allocation?",
                options: ["No external fragmentation", "Direct access capability", "Minimal overhead", "Simple implementation"],
                correct: 1
            },
            {
                question: "Which algorithm is used for deadlock avoidance?",
                options: ["Banker's algorithm", "Round Robin", "FCFS", "Priority scheduling"],
                correct: 0
            },
            {
                question: "What is context switching?",
                options: ["Changing user context", "Switching between processes", "Changing memory context", "Switching between threads"],
                correct: 1
            },
            {
                question: "Which memory allocation strategy allocates the largest available hole?",
                options: ["First Fit", "Best Fit", "Worst Fit", "Next Fit"],
                correct: 2
            },
            {
                question: "What is the main disadvantage of contiguous file allocation?",
                options: ["Slow access", "External fragmentation", "Complex implementation", "High overhead"],
                correct: 1
            },
            {
                question: "Which IPC mechanism uses shared memory region?",
                options: ["Message Passing", "Pipes", "Shared Memory", "Semaphores"],
                correct: 2
            },
            {
                question: "What is thrashing in virtual memory?",
                options: ["High CPU utilization", "Excessive page swapping", "Memory corruption", "Process starvation"],
                correct: 1
            },
            {
                question: "Which directory structure allows sharing of files?",
                options: ["Single-level", "Two-level", "Tree-structured", "Acyclic-graph"],
                correct: 3
            },
            {
                question: "What is a semaphore?",
                options: ["A scheduling algorithm", "A synchronization primitive", "A memory allocation unit", "A file system structure"],
                correct: 1
            },
            {
                question: "Which condition must be eliminated to prevent deadlock?",
                options: ["All four conditions", "At least one condition", "Circular wait only", "Mutual exclusion only"],
                correct: 1
            },
            {
                question: "What is the main advantage of segmentation?",
                options: ["Fixed size segments", "Logical division of programs", "No external fragmentation", "Simple implementation"],
                correct: 1
            },
            {
                question: "Which algorithm gives the best performance for page replacement?",
                options: ["FIFO", "LRU", "Optimal", "Random"],
                correct: 2
            }
        ]
    },
    "DBMS": {
        topic: "DBMS",
        notes: [
            {
                title: "Database Normalization",
                content: `• Database normalization organizes data to reduce redundancy and dependency

• Normal Forms:
  - 1NF (First Normal Form):
    + Eliminates repeating groups
    + Each table cell contains only atomic values
    + Each record is unique
  - 2NF (Second Normal Form):
    + Builds on 1NF
    + Removes partial dependencies
    + Non-key attributes fully dependent on entire primary key
  - 3NF (Third Normal Form):
    + Builds on 2NF
    + Eliminates transitive dependencies
    + Non-key attributes depend only on primary key
  - BCNF (Boyce-Codd Normal Form):
    + Stricter version of 3NF
    + Every determinant is a candidate key

• Benefits of Normalization:
  - Reduces data redundancy
  - Improves data integrity
  - Eliminates update anomalies
  - Saves storage space`
            },
            {
                title: "SQL Queries",
                content: `• SQL (Structured Query Language) is standard language for relational databases

• Data Definition Language (DDL):
  - CREATE: Create tables, databases, indexes
  - ALTER: Modify table structure
  - DROP: Delete tables, databases
  - TRUNCATE: Remove all records from table

• Data Manipulation Language (DML):
  - SELECT: Retrieve data (WHERE, ORDER BY, GROUP BY)
  - INSERT: Add new records
  - UPDATE: Modify existing data
  - DELETE: Remove records

• JOIN Operations:
  - INNER JOIN: Matching records from both tables
  - LEFT JOIN: All records from left table
  - RIGHT JOIN: All records from right table
  - FULL OUTER JOIN: All records from both tables
  - CROSS JOIN: Cartesian product

• Aggregate Functions:
  - COUNT(), SUM(), AVG(), MAX(), MIN()
  - GROUP BY: Group rows sharing property
  - HAVING: Filter groups (like WHERE for groups)`
            },
            {
                title: "ACID Properties",
                content: `• ACID properties ensure database transaction reliability and data integrity

• Atomicity:
  - Transactions are 'all-or-nothing'
  - Either all operations complete or none do
  - Failed transactions are rolled back
  - Ensures database consistency

• Consistency:
  - Database remains in valid state before and after transactions
  - All constraints, triggers, and rules satisfied
  - Data integrity maintained

• Isolation:
  - Concurrent transactions don't interfere
  - Isolation Levels:
    + READ UNCOMMITTED: Lowest isolation
    + READ COMMITTED: Prevents dirty reads
    + REPEATABLE READ: Prevents phantom reads
    + SERIALIZABLE: Highest isolation

• Durability:
  - Committed transactions permanently saved
  - Data survives system failures
  - Changes persist in non-volatile storage
  - Recovery mechanisms ensure durability`
            },
            {
                title: "Indexing",
                content: `• Database indexing improves query performance with faster access paths

• Types of Indexes:
  - Primary Index (Clustered):
    + Physically reorders table data
    + Only one per table
    + Usually on primary key
  - Secondary Index (Non-clustered):
    + Separate structure pointing to table rows
    + Multiple allowed per table
  - Composite Index: Spans multiple columns
  - Unique Index: Enforces uniqueness constraint
  - Partial Index: Indexes subset of rows

• Index Structures:
  - B-Tree: Balanced tree structure
  - Hash Index: Hash table for equality lookups
  - Bitmap Index: For low-cardinality data
  - Full-text Index: For text search

• Benefits vs Costs:
  - Benefits: Faster SELECT queries
  - Costs: Slower INSERT/UPDATE/DELETE operations
  - Storage overhead for index structures`
            }
        ],
        questions: [
            {
                question: "What does ACID stand for in database systems?",
                options: ["Atomicity, Consistency, Isolation, Durability", "Access, Control, Index, Data", "Add, Create, Insert, Delete", "Algorithm, Code, Implementation, Design"],
                correct: 0
            },
            {
                question: "Which normal form eliminates transitive dependencies?",
                options: ["1NF", "2NF", "3NF", "BCNF"],
                correct: 2
            },
            {
                question: "What SQL command is used to retrieve data from a database?",
                options: ["GET", "FETCH", "SELECT", "RETRIEVE"],
                correct: 2
            },
            {
                question: "Which type of index physically reorders table data?",
                options: ["Secondary index", "Primary index (clustered)", "Hash index", "Bitmap index"],
                correct: 1
            },
            {
                question: "What is the main purpose of database normalization?",
                options: ["Increase storage space", "Reduce data redundancy", "Improve security", "Speed up queries"],
                correct: 1
            },
            {
                question: "Which JOIN returns all records from both tables?",
                options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
                correct: 3
            },
            {
                question: "What does 1NF require?",
                options: ["Atomic values in cells", "No partial dependencies", "No transitive dependencies", "Every determinant is a candidate key"],
                correct: 0
            },
            {
                question: "Which SQL clause is used to filter groups?",
                options: ["WHERE", "HAVING", "GROUP BY", "ORDER BY"],
                correct: 1
            },
            {
                question: "What is a dirty read?",
                options: ["Reading committed data", "Reading uncommitted data", "Reading deleted data", "Reading encrypted data"],
                correct: 1
            },
            {
                question: "Which isolation level prevents phantom reads?",
                options: ["READ UNCOMMITTED", "READ COMMITTED", "REPEATABLE READ", "SERIALIZABLE"],
                correct: 3
            },
            {
                question: "What is the main advantage of B-Tree indexes?",
                options: ["Constant time lookup", "Balanced structure", "Small size", "Simple implementation"],
                correct: 1
            },
            {
                question: "Which DDL command removes all records from a table?",
                options: ["DELETE", "DROP", "TRUNCATE", "REMOVE"],
                correct: 2
            },
            {
                question: "What does BCNF require?",
                options: ["Atomic values", "No partial dependencies", "No transitive dependencies", "Every determinant is a candidate key"],
                correct: 3
            },
            {
                question: "Which aggregate function counts non-null values?",
                options: ["COUNT(*)", "COUNT(column)", "SUM()", "AVG()"],
                correct: 1
            },
            {
                question: "What is the main cost of indexing?",
                options: ["Slower SELECT queries", "Slower INSERT/UPDATE/DELETE operations", "Reduced storage", "Increased security"],
                correct: 1
            },
            {
                question: "Which JOIN type returns Cartesian product?",
                options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "CROSS JOIN"],
                correct: 3
            },
            {
                question: "What does durability ensure in ACID?",
                options: ["Data consistency", "Transaction isolation", "Data persistence", "Atomic operations"],
                correct: 2
            },
            {
                question: "Which normal form removes partial dependencies?",
                options: ["1NF", "2NF", "3NF", "BCNF"],
                correct: 1
            },
            {
                question: "What is a composite index?",
                options: ["Index on primary key", "Index on foreign key", "Index on multiple columns", "Index on unique values"],
                correct: 2
            },
            {
                question: "Which isolation level allows dirty reads?",
                options: ["READ UNCOMMITTED", "READ COMMITTED", "REPEATABLE READ", "SERIALIZABLE"],
                correct: 0
            }
        ]
    },
    "Computer Networks": {
        topic: "Computer Networks",
        notes: [
            {
                title: "OSI Model",
                content: `• OSI (Open Systems Interconnection) model: 7-layer conceptual framework

• Layer 1 - Physical:
  - Electrical signals, cables, connectors
  - Physical transmission media (copper, fiber optic)
  - Hubs, repeaters

• Layer 2 - Data Link:
  - Frame formatting
  - Error detection/correction
  - MAC addressing
  - Protocols: Ethernet, WiFi

• Layer 3 - Network:
  - Logical addressing (IP)
  - Routing and path determination
  - Routers operate here
  - Protocols: IP, ICMP, IGMP

• Layer 4 - Transport:
  - End-to-end communication
  - Port addressing
  - Protocols: TCP, UDP
  - Flow control, error recovery

• Layer 5 - Session:
  - Session establishment/termination
  - Dialog management
  - Synchronization

• Layer 6 - Presentation:
  - Data encryption/decryption
  - Compression
  - Format conversion

• Layer 7 - Application:
  - Network services to applications
  - Protocols: HTTP, FTP, SMTP, DNS`
            },
            {
                title: "TCP vs UDP",
                content: `• Transport layer protocols with different characteristics

• TCP (Transmission Control Protocol) Features:
  - Connection-oriented (3-way handshake: SYN, SYN-ACK, ACK)
  - Reliable delivery with acknowledgments
  - Error detection and correction
  - Flow control prevents receiver overflow
  - Congestion control adjusts transmission rate
  - In-order delivery guarantees
  - Full-duplex communication
  - Header size: 20+ bytes

• TCP Applications:
  - Web browsing (HTTP/HTTPS)
  - Email (SMTP)
  - File transfer (FTP)
  - Remote login (SSH)

• UDP (User Datagram Protocol) Features:
  - Connectionless protocol
  - No reliability guarantees
  - No flow control
  - No congestion control
  - Minimal overhead
  - Header size: 8 bytes
  - Faster than TCP

• UDP Applications:
  - DNS queries
  - Video streaming
  - Online gaming
  - DHCP
  - SNMP`
            },
            {
                title: "IP Addressing",
                content: `• IP addressing provides unique identification for network devices

• IPv4 (32-bit addresses):
  - Format: 4 octets (e.g., 192.168.1.1)
  - ~4.3 billion addresses total
  - Address Classes:
    + Class A (1-126): Large networks
    + Class B (128-191): Medium networks
    + Class C (192-223): Small networks
    + Class D: Multicast
    + Class E: Experimental

• Private IP Ranges (not routed on internet):
  - 10.0.0.0/8 (Class A)
  - 172.16.0.0/12 (Class B)
  - 192.168.0.0/16 (Class C)

• IPv6 (128-bit addresses):
  - Format: 8 groups of 4 hexadecimal digits
  - Example: 2001:0db8:85a3:0000:0000:8a2e:0370:7334
  - Virtually unlimited addresses
  - Built-in security features
  - Auto-configuration capabilities

• Subnetting:
  - Divides networks into smaller subnets
  - Improves network performance
  - Reduces broadcast domains
  - CIDR notation: IP/subnet mask`
            },
            {
                title: "Routing Protocols",
                content: `• Routing protocols determine optimal data transmission paths

• Interior Gateway Protocols (IGP) - within autonomous systems:
  - Distance Vector (RIP):
    + Uses hop count as metric
    + Exchanges routing tables with neighbors
    + Slow convergence, count-to-infinity problems
    + Maximum hop count: 15
  - Link State (OSPF):
    + Maintains complete network topology
    + Uses Dijkstra's algorithm
    + Faster convergence
    + Multiple metrics (bandwidth, delay)
    + Hierarchical design with areas

• Exterior Gateway Protocols (EGP) - between autonomous systems:
  - BGP (Border Gateway Protocol):
    + Path vector protocol
    + Uses AS path as metric
    + Policy-based routing
    + Slow convergence but stable

• Routing Metrics:
  - Hop count
  - Bandwidth
  - Delay
  - Reliability
  - Load
  - Cost

• Static vs Dynamic Routing:
  - Static: Manual configuration
  - Dynamic: Automatic updates using protocols`
            }
        ],
        questions: [
            {
                question: "How many layers does the OSI model have?",
                options: ["5", "6", "7", "8"],
                correct: 2
            },
            {
                question: "Which protocol is connection-oriented and reliable?",
                options: ["UDP", "TCP", "IP", "ICMP"],
                correct: 1
            },
            {
                question: "What is the size of an IPv4 address?",
                options: ["16 bits", "32 bits", "64 bits", "128 bits"],
                correct: 1
            },
            {
                question: "Which layer of OSI model handles routing?",
                options: ["Data Link", "Network", "Transport", "Session"],
                correct: 1
            },
            {
                question: "What does BGP stand for?",
                options: ["Basic Gateway Protocol", "Border Gateway Protocol", "Binary Gateway Protocol", "Broadcast Gateway Protocol"],
                correct: 1
            },
            {
                question: "Which layer handles MAC addressing?",
                options: ["Physical", "Data Link", "Network", "Transport"],
                correct: 1
            },
            {
                question: "What is the header size of UDP?",
                options: ["4 bytes", "8 bytes", "16 bytes", "20 bytes"],
                correct: 1
            },
            {
                question: "Which IP address class is used for multicast?",
                options: ["Class A", "Class B", "Class C", "Class D"],
                correct: 3
            },
            {
                question: "What is the maximum hop count for RIP?",
                options: ["10", "15", "20", "25"],
                correct: 1
            },
            {
                question: "Which protocol uses 3-way handshake?",
                options: ["UDP", "TCP", "IP", "ICMP"],
                correct: 1
            },
            {
                question: "What does OSPF use to calculate best path?",
                options: ["Hop count", "Bandwidth", "Dijkstra's algorithm", "Distance vector"],
                correct: 2
            },
            {
                question: "Which private IP range belongs to Class B?",
                options: ["10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16", "127.0.0.0/8"],
                correct: 1
            },
            {
                question: "What is the main advantage of IPv6 over IPv4?",
                options: ["Smaller headers", "Faster routing", "More addresses", "Better security"],
                correct: 2
            },
            {
                question: "Which layer provides end-to-end communication?",
                options: ["Network", "Transport", "Session", "Presentation"],
                correct: 1
            },
            {
                question: "What does CIDR notation represent?",
                options: ["IP address only", "Subnet mask only", "IP address and subnet mask", "Default gateway"],
                correct: 2
            },
            {
                question: "Which protocol is used for DNS queries?",
                options: ["TCP", "UDP", "HTTP", "FTP"],
                correct: 1
            },
            {
                question: "What is the main disadvantage of RIP?",
                options: ["High overhead", "Slow convergence", "Complex configuration", "Limited scalability"],
                correct: 1
            },
            {
                question: "Which layer handles data encryption?",
                options: ["Session", "Presentation", "Application", "Transport"],
                correct: 1
            },
            {
                question: "What is the purpose of subnetting?",
                options: ["Increase IP addresses", "Improve network performance", "Reduce security", "Simplify routing"],
                correct: 1
            },
            {
                question: "Which routing protocol is used between autonomous systems?",
                options: ["RIP", "OSPF", "BGP", "EIGRP"],
                correct: 2
            }
        ]
    },
    "Java": {
        topic: "Java",
        notes: [
            {
                title: "Object-Oriented Programming",
                content: `• Java built on four fundamental OOP principles

• Encapsulation:
  - Data hiding with private variables
  - Public getter/setter methods 
  - Access modifiers: private, protected, public, default
  - Benefits: Security, maintainability, flexibility

• Inheritance:
  - Code reuse through 'extends' keyword
  - Child classes inherit parent properties/methods
  - Method overriding for specific implementations
  - 'super' keyword accesses parent class
  - Single inheritance, multiple interface implementation

• Polymorphism:
  - Method overloading: Same name, different parameters
  - Method overriding: Same signature, different implementation
  - Runtime polymorphism through dynamic method dispatch
  - Compile-time polymorphism through overloading

• Abstraction:
  - Abstract classes: Cannot be instantiated
  - Abstract methods: Must be implemented by subclasses
  - Interfaces: Contract for implementing classes
  - Hides implementation details

• Benefits of OOP:
  - Code reusability
  - Modularity
  - Flexibility
  - Maintainability`
            },
            {
                title: "Exception Handling",
                content: `• Java exception handling provides robust error management

• Exception Hierarchy:
  - Throwable (root class)
    + Error: System-level problems (OutOfMemoryError)
    + Exception: Application-level problems

• Exception Types:
  - Checked exceptions: Compile-time checking required
    + IOException, FileNotFoundException
    + Must be handled or declared with throws
  - Unchecked exceptions: Runtime exceptions
    + NullPointerException, ArrayIndexOutOfBoundsException
    + Optional handling

• Exception Handling Keywords:
  - try: Block containing risky code
  - catch: Handle specific exceptions
  - finally: Always executes (cleanup code)
  - throw: Explicitly throw exception
  - throws: Declare exceptions method might throw

• Best Practices:
  - Catch specific exceptions
  - Use finally for cleanup
  - Don't catch and ignore exceptions
  - Create custom exceptions when needed
  - Log exceptions properly`
            },
            {
                title: "Collections Framework",
                content: `• Unified architecture for storing and manipulating object groups

• Core Interfaces:
  - Collection: Root interface
  - List: Ordered, allows duplicates
  - Set: No duplicates
  - Map: Key-value pairs
  - Queue: FIFO operations

• List Implementations:
  - ArrayList: Resizable arrays, fast random access
  - LinkedList: Doubly-linked, fast insertion/deletion
  - Vector: Synchronized ArrayList

• Set Implementations:
  - HashSet: Hash table, no order guarantee
  - LinkedHashSet: Maintains insertion order
  - TreeSet: Sorted set, implements NavigableSet

• Map Implementations:
  - HashMap: Hash table, allows null values
  - LinkedHashMap: Maintains insertion order
  - TreeMap: Sorted map, implements NavigableMap
  - Hashtable: Synchronized, no null values

• Queue Implementations:
  - PriorityQueue: Heap-based priority queue
  - ArrayDeque: Resizable array implementation

• Iterators:
  - Iterator: Forward-only traversal
  - ListIterator: Bidirectional traversal
  - Enhanced for loop (for-each)`
            },
            {
                title: "Multithreading",
                content: `• Concurrent execution of multiple threads within a single process

• Thread Creation:
  - Extending Thread class
  - Implementing Runnable interface
  - Using ExecutorService framework
  - Lambda expressions for simple tasks

• Thread Lifecycle:
  - New: Thread created but not started
  - Runnable: Thread ready to run
  - Running: Thread currently executing
  - Blocked: Thread waiting for resource
  - Terminated: Thread finished execution

• Synchronization:
  - synchronized keyword for methods/blocks
  - Prevents race conditions
  - Ensures thread safety
  - Object-level and class-level locking

• Inter-thread Communication:
  - wait(): Thread waits for notification
  - notify(): Wake up one waiting thread
  - notifyAll(): Wake up all waiting threads
  - Must be called within synchronized context

• Deadlock Prevention:
  - Avoid nested locks
  - Use timeout for lock acquisition
  - Maintain lock ordering
  - Use concurrent collections

• Thread Pool:
  - ExecutorService interface
  - ThreadPoolExecutor implementation
  - Reuses threads for efficiency
  - Better resource management`
            }
        ],
        questions: [
            {
                question: "Which is NOT a pillar of OOP?",
                options: ["Encapsulation", "Inheritance", "Polymorphism", "Compilation"],
                correct: 3
            },
            {
                question: "What keyword is used to prevent method overriding?",
                options: ["static", "final", "abstract", "private"],
                correct: 1
            },
            {
                question: "Which exception type must be handled or declared?",
                options: ["RuntimeException", "Error", "Checked Exception", "Unchecked Exception"],
                correct: 2
            },
            {
                question: "Which collection allows duplicates and maintains insertion order?",
                options: ["HashSet", "TreeSet", "ArrayList", "HashMap"],
                correct: 2
            },
            {
                question: "What is the root interface of Java Collections Framework?",
                options: ["List", "Set", "Collection", "Map"],
                correct: 2
            },
            {
                question: "Which keyword is used for thread synchronization?",
                options: ["volatile", "synchronized", "final", "static"],
                correct: 1
            },
            {
                question: "What does polymorphism allow?",
                options: ["Data hiding", "Code reuse", "Same interface, different implementations", "Memory management"],
                correct: 2
            },
            {
                question: "Which block always executes in exception handling?",
                options: ["try", "catch", "finally", "throw"],
                correct: 2
            },
            {
                question: "Which List implementation provides fastest random access?",
                options: ["ArrayList", "LinkedList", "Vector", "Stack"],
                correct: 0
            },
            {
                question: "What is the main advantage of using interfaces?",
                options: ["Code reuse", "Multiple inheritance", "Performance", "Memory efficiency"],
                correct: 1
            },
            {
                question: "Which method is used to start a thread?",
                options: ["run()", "start()", "execute()", "begin()"],
                correct: 1
            },
            {
                question: "What is encapsulation?",
                options: ["Code reuse", "Data hiding", "Method overriding", "Memory management"],
                correct: 1
            },
            {
                question: "Which collection maintains sorted order?",
                options: ["HashSet", "LinkedHashSet", "TreeSet", "ArrayList"],
                correct: 2
            },
            {
                question: "What happens when a thread calls wait()?",
                options: ["Thread terminates", "Thread sleeps", "Thread waits for notification", "Thread continues"],
                correct: 2
            },
            {
                question: "Which access modifier allows access within the same package?",
                options: ["private", "protected", "public", "default"],
                correct: 3
            },
            {
                question: "What is method overloading?",
                options: ["Same name, same parameters", "Same name, different parameters", "Different name, same parameters", "Different name, different parameters"],
                correct: 1
            },
            {
                question: "Which exception is thrown for array index out of bounds?",
                options: ["NullPointerException", "ArrayIndexOutOfBoundsException", "IndexOutOfBoundsException", "IllegalArgumentException"],
                correct: 1
            },
            {
                question: "What does the 'super' keyword refer to?",
                options: ["Current object", "Parent class", "Static context", "Final class"],
                correct: 1
            },
            {
                question: "Which collection interface represents key-value pairs?",
                options: ["List", "Set", "Map", "Queue"],
                correct: 2
            },
            {
                question: "What is the difference between ArrayList and Vector?",
                options: ["No difference", "Vector is synchronized", "ArrayList is synchronized", "Vector is faster"],
                correct: 1
            }
        ]
    }
};
