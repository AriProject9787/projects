const quizData = {
  personalityQuestions : [
    {question: "What is Arirama Selvam's dream career?",options: ["Software Developer", "Ethical Hacker", "Data Analyst", "AI Researcher"],answer: "Ethical Hacker"},
    {question: "What is Arirama Selvam's favorite programming language?",options: ["Python", "Java", "C++", "JavaScript"],answer: "JavaScript"},
    {question: "Which nickname does Arirama Selvam use online?",options: ["ByteMaster", "CodeWarrior", "HackZone", "TechNerd"],answer: "ByteMaster"},
    {question: "What is Arirama Selvam most passionate about?",options: ["Cooking", "Cybersecurity", "Gardening", "Music"],answer: "Cybersecurity"},
    {question: "Which language is Arirama Selvam learning for ethical hacking?",options: ["Java", "Python", "Go", "Ruby"],answer: "Python"},
    {question: "What is the name of Arirama Selvam’s best school friend?",options: ["Mathan", "Santhosh", "Linga Bharath", "Aswin"],answer: "Linga Bharath"},
    {question: "Which town is Arirama Selvam from?",options: ["Madurai", "Chennai", "Ottapidaram", "Coimbatore"],answer: "Ottapidaram"},
    {question: "What was the title of Arirama Selvam’s mini project?",options: ["Smart Cart", "GENZ REVOC - DIGI BITES", "CyberGuardian", "Code Tracker"],answer: "GENZ REVOC - DIGI BITES"},
    {question: "Which tool did Arirama use in his project for analytics?",options: ["Tableau", "G-Analytics", "Power BI", "Firebase"],answer: "G-Analytics"},
    {question: "Which platform did he use to store product data in his cake shop project?",options: ["MongoDB", "MySQL", "Firebase", "SQLite"],answer: "Firebase"},
    {question: "Which year is Arirama Selvam currently studying?",options: ["1st year", "2nd year", "3rd year", "Final year"],answer: "Final year"},
    {question: "What does 'Echo' refer to in Arirama's projects?",options: ["Voice Assistant Name", "Motherboard Name", "App Logo", "Custom Bot"],answer: "Voice Assistant Name"},
    {question: "Which course did Arirama complete from Novitech & Corizo?",options: ["Web Design", "Python Programming", "Cybersecurity", "Graphic Design"],answer: "Cybersecurity"},
    {question: "What is Arirama’s mother’s name?",options: ["Kalaivani", "Jesikka", "Malar", "Rani"],answer: "Kalai Vani"},
    {question: "What is Arirama’s father's name?",options: ["Mani", "Mariappan", "Arul", "Sundar"],answer: "Mariappan"},
    {question: "What is the name of Arirama’s sister?",options: ["Jesikka", "Sofia", "Nithya", "Revathi"],answer: "Jesikka"},
    {question: "what is Arirama Selvam DOB?",options:["08-07-2004","05-08-2004","07-06-2005","06-08-2004"],answer:"08-07-2004"}

],
    c: [
    { question: "What is the output of printf(\"%d\", 5 + 3);", options: ["53", "8", "35", "Error"], answer: "8" },
    { question: "Which header file is required for printf?", options: ["stdio.h", "stdlib.h", "conio.h", "math.h"], answer: "stdio.h" },
    { question: "Which loop is guaranteed to execute at least once?", options: ["for", "while", "do-while", "if"], answer: "do-while" },
    { question: "C is a __ language?", options: ["Object-oriented", "High-level", "Low-level", "Procedural"], answer: "Procedural" },
    { question: "What is the size of int in C?", options: ["2", "4", "8", "Depends on compiler"], answer: "Depends on compiler" },
    { question: "Which operator is used to allocate memory dynamically?", options: ["malloc", "calloc", "new", "free"], answer: "malloc" },
    { question: "What is the keyword used to define a macro?", options: ["macro", "#macro", "#define", "define"], answer: "#define" },
    { question: "Which of the following is not a storage class in C?", options: ["auto", "static", "public", "extern"], answer: "public" },
    { question: "What is the default return type of a function?", options: ["void", "int", "float", "char"], answer: "int" },
    { question: "Who developed C language?", options: ["Dennis Ritchie", "James Gosling", "Guido Rossum", "Bjarne Stroustrup"], answer: "Dennis Ritchie" },
  ],
    java: [
    { question: "Which keyword is used to inherit a class in Java?", options: ["implement", "extends", "inherits", "super"], answer: "extends" },
    { question: "Which method is the entry point in Java?", options: ["start()", "init()", "main()", "run()"], answer: "main()" },
    { question: "What is bytecode in Java?", options: ["Java source code", "Compiled Java code", "Machine code", "Assembly code"], answer: "Compiled Java code" },
    { question: "Java supports __ inheritance?", options: ["Single", "Multiple", "Hybrid", "Hierarchical"], answer: "Single" },
    { question: "Which keyword is used for exception handling?", options: ["catch", "try", "throw", "All of the above"], answer: "All of the above" },
    { question: "Java is platform __?", options: ["Dependent", "Independent", "Hybrid", "None"], answer: "Independent" },
    { question: "Which of these is not a Java feature?", options: ["Object-Oriented", "Portable", "Use of pointers", "Secure"], answer: "Use of pointers" },
    { question: "Java was developed by?", options: ["Microsoft", "Sun Microsystems", "IBM", "Apple"], answer: "Sun Microsystems" },
    { question: "Which keyword is used to create an object?", options: ["class", "new", "object", "this"], answer: "new" },
    { question: "Which function is used to print in Java?", options: ["print()", "System.out.print()", "echo()", "console.log()"], answer: "System.out.print()" },
  ],
    python: [
    { question: "What does the 'len()' function do in Python?", options: ["Returns the number of elements", "Returns length of string only", "Returns last element", "None"], answer: "Returns the number of elements" },
    { question: "Which of the following is a valid variable name in Python?", options: ["2var", "var_name", "var-name", "var name"], answer: "var_name" },
    { question: "How do you start a comment in Python?", options: ["//", "--", "#", "/*"], answer: "#" },
    { question: "What is the correct extension of a Python file?", options: [".pyth", ".pt", ".py", ".p"], answer: ".py" },
    { question: "What does 'print(type(10))' return?", options: ["<class 'float'>", "<class 'str'>", "<class 'int'>", "<class 'bool'>"], answer: "<class 'int'>" },
    { question: "Which of these is used to define a function in Python?", options: ["function", "def", "fun", "define"], answer: "def" },
    { question: "What is the output of: print(3 * 'ab')?", options: ["ab3", "ababab", "3ab", "Error"], answer: "ababab" },
    { question: "Which keyword is used for exception handling?", options: ["try", "except", "finally", "All of the above"], answer: "All of the above" },
    { question: "What is the output of: bool('False')?", options: ["False", "True", "0", "None"], answer: "True" },
    { question: "Which method is used to convert a string to lowercase?", options: ["lower()", "tolower()", "down()", "casefold()"], answer: "lower()" },
    { question: "What is the output of 10 // 3?", options: ["3.33", "3", "4", "Error"], answer: "3" },
    { question: "Which type is returned by input() in Python?", options: ["str", "int", "float", "bool"], answer: "str" },
    { question: "Which data structure is immutable?", options: ["List", "Tuple", "Set", "Dictionary"], answer: "Tuple" },
    { question: "What does the 'strip()' method do?", options: ["Trims whitespace", "Replaces characters", "Capitalizes text", "Removes symbols"], answer: "Trims whitespace" },
    { question: "How do you install a package using pip?", options: ["install pip package_name", "pip install package_name", "get package package_name", "python install package_name"], answer: "pip install package_name" },
    { question: "What is a lambda function?", options: ["Named function", "Anonymous function", "Loop", "Decorator"], answer: "Anonymous function" },
    { question: "Which module handles regular expressions in Python?", options: ["re", "regex", "pyre", "expr"], answer: "re" },
    { question: "How do you open a file in write mode?", options: ["open('file.txt', 'w')", "open('file.txt', 'r')", "open('file.txt', 'x')", "open('file.txt')"], answer: "open('file.txt', 'w')" },
    { question: "What will 'apple' in ['banana', 'apple', 'cherry'] return?", options: ["True", "False", "Error", "None"], answer: "True" },
    { question: "What is the output of bool([])?", options: ["True", "False", "None", "Error"], answer: "False" },
    { question: "What does the 'append()' method do in lists?", options: ["Adds item at end", "Deletes item", "Sorts list", "None"], answer: "Adds item at end" },
    { question: "Which keyword is used to exit a loop early?", options: ["exit", "stop", "break", "return"], answer: "break" },
    { question: "Which of the following can be used to handle exceptions?",options: ["if", "for", "try", "loop"],answer: "try"},
    { question: "What is the output of: print(type({}))?",options: ["<class 'list'>", "<class 'set'>", "<class 'tuple'>", "<class 'dict'>"],answer: "<class 'dict'>"},
    { question: "What does the 'map()' function do in Python?",options: ["Maps keys to values", "Applies a function to each element", "Creates a dictionary", "Filters a list"],answer: "Applies a function to each element"},
    { question: "What is the purpose of 'pass' statement?",options: ["Break loop", "End function", "Do nothing", "Skip iteration"],answer: "Do nothing"},
    { question: "Which operator is used for floor division?",options: ["/", "%", "//", "**"],answer: "//"},
    { question: "Which built-in function returns a sorted list?",options: ["sort()", "sorted()", "arrange()", "order()"],answer: "sorted()"},
    { question: "What does 'None' represent in Python?",options: ["Empty string", "Zero", "Null value", "False"],answer: "Null value"},
    { question: "Which keyword is used to define a class in Python?",options: ["def", "function", "class", "object"],answer: "class"},
    { question: "Which method is used to find the index of a substring?",options: ["locate()", "index()", "find()", "position()"],answer: "find()"},
    { question: "Which of the following data types is unordered?",options: ["List", "Tuple", "Set", "Dictionary"],answer: "Set"},
    { question: "What is the output of: print('A' > 'a')?",options: ["True", "False", "Error", "Depends on Python version"],answer: "False"},
    { question: "How do you convert a list to a tuple?",options: ["list()", "tuple()", "dict()", "set()"],answer: "tuple()"},
    { question: "Which keyword is used to import modules?",options: ["load", "require", "import", "include"],answer: "import"},
    { question: "What does 'continue' do in a loop?",options: ["Stops loop", "Skips current iteration", "Ends function", "Raises exception"],answer: "Skips current iteration"},
    { question: "Which of the following is a Boolean value?",options: ["'True'", "True", "'False'", "0"],answer: "True"}
     ],
    html: [
    { question: "What does HTML stand for?", options: ["HyperText Markup Language", "HighText Markup Language", "HyperText Machine Language", "None"], answer: "HyperText Markup Language" },
    { question: "Which tag is used to create a hyperlink?", options: ["<link>", "<a>", "<href>", "<url>"], answer: "<a>" },
    { question: "What is the correct HTML element for the largest heading?", options: ["<h1>", "<heading>", "<h6>", "<head>"], answer: "<h1>" },
    { question: "Which attribute is used to provide an alternative text for images?", options: ["alt", "src", "title", "text"], answer: "alt" },
    { question: "What does the <br> tag do?", options: ["Creates a line break", "Bold text", "Italic text", "None"], answer: "Creates a line break" },
    { question: "Which tag is used to define an unordered list?", options: ["<ul>", "<ol>", "<li>", "<list>"], answer: "<ul>" },
    { question: "What is the purpose of the <head> tag?", options: ["Contains metadata", "Displays content", "Defines styles", "None"], answer: "Contains metadata" },
    { question: "Which tag is used to create a table?", options: ["<table>", "<tab>", "<tr>", "<td>"], answer: "<table>" },
    { question: "What does the <title> tag define?", options: ["Page title in browser tab", "Main heading", "Footer text", "Header text"], answer: "Page title in browser tab" },
    { question: "Which attribute specifies the URL of a link?", options: ["href", "src", "link", "url"], answer: "href" },
    { question: "How do you create a checkbox in HTML?", options: ["<input type='checkbox'>", "<checkbox>", "<input type='check'>", "<check>"], answer: "<input type='checkbox'>" },
    { question: "What is the purpose of the <meta> tag?", options: ["Metadata about the document", "Defines styles", "Creates links", "None"], answer: "Metadata about the document" },
    { question: "Which tag is used to define a paragraph?", options
: ["<p>", "<para>", "<text>", "<paragraph>"], answer: "<p>" },
    { question: "What does the <img> tag do?", options: ["Displays an image", "Creates a link", "Defines a table", "None"], answer: "Displays an image" },
    { question: "Which tag is used to create a dropdown list?", options: ["<select>", "<dropdown>", "<list>", "<option>"], answer: "<select>" },
    { question: "What is the purpose of the <form> tag?", options: ["Collect user input", "Display content", "Create links", "None"], answer: "Collect user input" },
    { question: "How do you create a radio button in HTML?", options: ["<input type='radio'>", "<radio>", "<input type='button'>", "<button>"], answer: "<input type='radio'>" },
    { question: "Which tag is used to define a section in HTML5?", options: ["<section>", "<div>", "<article>", "<block>"], answer: "<section>" },
    { question: "What does the <footer> tag define?", options: ["Footer of the document", "Header of the document", "Main content", "Sidebar"], answer: "Footer of the document" }
  ],
    css: [
    { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"], answer: "Cascading Style Sheets" },
    { question: "Which property is used to change the background color in CSS?", options: ["bgcolor", "background-color", "color", "background"], answer: "background-color" },
    { question: "How do you select an element with id 'header' in CSS?", options: ["#header", ".header", "header", "*header"], answer: "#header" },
    { question: "Which property is used to change the font size?", options: ["font-size", "text-size", "font-style", "text-style"], answer: "font-size" },
    { question: "What is the correct syntax for adding a comment in CSS?", options: ["// comment", "<!-- comment -->", "/* comment */", "# comment"], answer: "/* comment */" },
    { question: "How do you apply a style to all <p> elements?", options: ["p { }", ".p { }", "#p { }", "<p> { }"], answer: "p { }" },
    { question: "Which property is used to set the text color?", options: ["text-color", "color", "font-color", "text-style"], answer: "color" },
    { question: "What does 'margin' do in CSS?", options: ["Sets space outside an element", "Sets space inside an element", "Changes font size", "None"], answer: "Sets space outside an element" },
    { question: "How do you link a CSS file to an HTML document?", options: ["<link rel='stylesheet' href='style.css'>", "<style src='style.css'>", "<css link='style.css'>", "<stylesheet href='style.css'>"], answer: "<link rel='stylesheet' href='style.css'>" },
    { question: "Which property is used to change the font family?", options: ["font-family", "font-type", "text-font", "typeface"], answer: "font-family" },
    { question: "What does 'display: none;' do?", options: ["Hides the element completely", "Shows the element as block", "Makes it invisible but takes space", "None"],
 answer: "Hides the element completely" },
    { question: "How do you center text in CSS?", options: ["text-align: center;", "align: center;", "center: text;", "text-center: true;"], answer: "text-align: center;" },
    { question: "Which property is used to add space inside an element?", options: ["padding", "margin", "space", "border"], answer: "padding" },
    { question: "What is the default value of 'position' property?", options: ["static", "relative", "absolute", "fixed"], answer: "static" },
    { question: "How do you change the font weight in CSS?", options: ["font-weight", "font-bold", "text-weight", "weight"], answer: "font-weight" },
    { question: "What does 'float' property do?", options: ["Positions an element to the left or right", "Changes font size", "Sets background color", "None"], answer: "Positions an element to the left or right" },
    { question: "How do you create a class selector in CSS?", options: [".classname { }", "#classname { }", "<classname> { }", "*classname { }"], answer: ".classname { }" },
    { question: "Which property is used to set the width of an element?", options: ["width", "element-width", "size", "length"], answer: "width" },
    { question: "What does 'z-index' control in CSS?", options: ["Stacking order of elements", "Font size", "Margin space", "Padding space"], answer: "Stacking order of elements" }
  ],
    hacking: [
    { question: "What is the primary goal of ethical hacking?", options: ["To steal data", "To test security", "To disrupt services", "To create malware"], answer: "To test security" },
    { question: "Which tool is commonly used for network scanning?", options: ["Nmap", "Wireshark", "Metasploit", "Burp Suite"], answer: "Nmap" },
    { question: "What does SQL injection target?", options: ["Web applications", "Network protocols", "Operating systems", "Hardware"], answer: "Web applications" },
    { question: "What is a DDoS attack?", options: ["Data theft", "Distributed Denial of Service", "Data destruction", "None"], answer: "Distributed Denial of Service" },
    { question: "Which protocol is commonly exploited in DDoS attacks?", options: ["HTTP", "FTP", "TCP", "UDP"], answer: "HTTP" },
    { question: "What is the purpose of a firewall?", options: ["To block unauthorized access", "To speed up network", "To encrypt data", "To monitor traffic"], answer: "To block unauthorized access" },
    { question: "Which of these is a common password cracking method?", options: ["Brute force", "Phishing", "Social engineering", "All of the above"], answer: "All of the above" },
    { question: "What is phishing?", options: ["Sending fake emails to steal data", "Hacking into networks", "Creating malware", "None"], answer: "Sending fake emails to steal data" },
    { question: "What does VPN stand for?", options: ["Virtual Private Network", "Virtual Public Network", "Virtual Protected Network", "None"], answer: "Virtual Private Network" },
    { question: "Which programming language is often used in web hacking?", options: ["Python", "JavaScript", "C++", "Java"], answer: "JavaScript" },
    { question: "What is the purpose of penetration testing?", options: ["To find vulnerabilities", "To exploit systems", "To create malware", "None"], answer: "To find vulnerabilities" },
    { question: "What does 'social engineering' refer to?", options: ["Manipulating people to gain information", "Hacking social media accounts", "Creating fake profiles", "None"], answer: "Manipulating people to gain information" },
    { question: "Which tool is used for web application security testing?", options: ["Burp Suite", "Nmap", "Wireshark", "Metasploit"], answer: "Burp Suite" },
    { question: "What is a zero-day exploit?", options: ["An exploit with no known patch", "An exploit that targets outdated software", "An exploit that requires user interaction", "None"], answer: "An exploit with no known patch" },
    { question: "What is the purpose of encryption?", options: ["To secure data transmission", "To speed up data transfer", "To compress files", "None"], answer: "To secure data transmission" }
  ],
    sql: [
    { question: "What does SQL stand for?", options: ["Structured Query Language", "Simple Query List", "Structured Question Language", "None"], answer: "Structured Query Language" },
    { question: "Which SQL statement is used to extract data from a database?", options: ["GET", "OPEN", "SELECT", "EXTRACT"], answer: "SELECT" },
    { question: "Which clause is used to filter results in SQL?", options: ["WHERE", "ORDER", "FROM", "GROUP"], answer: "WHERE" },
    { question: "What keyword is used to sort results in SQL?", options: ["SORT BY", "ORDER", "ORDER BY", "ARRANGE"], answer: "ORDER BY" },
    { question: "Which function is used to count rows in SQL?", options: ["SUM()", "COUNT()", "ROWCOUNT()", "TOTAL()"], answer: "COUNT()" },
    { question: "What is the default sort order of the ORDER BY clause?", options: ["ASC", "DESC", "NONE", "RANDOM"], answer: "ASC" },
    { question: "Which command is used to remove all records from a table?", options: ["DELETE", "REMOVE", "DROP", "ERASE"], answer: "DELETE" },
    { question: "Which SQL clause is used to group records?", options: ["GROUP BY", "COLLECT", "AGGREGATE", "SORT"], answer: "GROUP BY" },
    { question: "What does the HAVING clause do?", options: ["Filters grouped data", "Sorts records", "Limits results", "Deletes columns"], answer: "Filters grouped data" },
    { question: "Which operator is used for pattern matching in SQL?", options: ["LIKE", "MATCH", "FIND", "PATTERN"], answer: "LIKE" },
    { question: "What symbol is used as a wildcard for multiple characters in SQL LIKE clause?", options: ["_", "%", "*", "#"], answer: "%" },
    { question: "Which function returns the current date and time?", options: ["GETDATE()", "DATE()", "NOW()", "CURRENT()"], answer: "NOW()" },
    { question: "Which SQL keyword is used to prevent duplicate values?", options: ["UNIQUE", "DISTINCT", "DIFFERENT", "NO_DUPLICATES"], answer: "DISTINCT" },
    { question: "What is a primary key?", options: ["A unique identifier for rows", "A foreign key", "An index", "A join condition"], answer: "A unique identifier for rows" },
    { question: "Which SQL statement is used to add a new row?", options: ["INSERT INTO", "ADD ROW", "NEW RECORD", "UPDATE"], answer: "INSERT INTO" },
    { question: "What is the function of the JOIN clause?", options: ["Combines rows from tables", "Sorts results", "Deletes rows", "None"], answer: "Combines rows from tables" },
    { question: "What does the INNER JOIN keyword do?", options: ["Returns only matching rows", "Returns unmatched rows", "Deletes duplicates", "Sorts output"], answer: "Returns only matching rows" },
    { question: "Which SQL clause limits the number of rows returned?", options: ["LIMIT", "TOP", "ROWNUM", "COUNT"], answer: "LIMIT" },
    { question: "How do you rename a column in SQL?", options: ["AS", "RENAME TO", "CHANGE", "MODIFY"], answer: "AS" },
    { question: "What is the purpose of the ALTER TABLE command?", options: ["Modify table structure", "Insert data", "Select rows", "Export table"], answer: "Modify table structure" }
  ],
    javascript: [
    { question: "What does 'var' declare in JavaScript?", options: ["Variable", "Function", "Class", "Object"], answer: "Variable" },
    { question: "Which symbol is used for comments in JavaScript?", options: ["//", "#", "<!--", "/*"], answer: "//" },
    { question: "What is the output of 'console.log(typeof null)'?", options: ["'object'", "'null'", "'undefined'", "'number'"], answer: "'object'" },
    { question: "How do you create a function in JavaScript?", options: ["function myFunc()", "create myFunc()", "def myFunc()", "func myFunc()"], answer: "function myFunc()" },
    { question: "What does '=== ' check in JavaScript?", options: ["Value and type equality", "Only value equality", "Type only", "None"], answer: "Value and type equality" },
    { question: "Which method is used to parse a JSON string?", options: ["JSON.parse()", "JSON.stringify()", "JSON.decode()", "JSON.convert()"], answer: "JSON.parse()" },
    { question: "What is the purpose of 'let' keyword?", options: ["Block-scoped variable declaration", "Function declaration", "Global variable", "Constant declaration"], answer: "Block-scoped variable declaration" },
    { question: "How do you create an array in JavaScript?", options: ["[]", "<array>", "{}[]", "<arr>"], answer: "[]" },
    { question: "What does 'NaN' stand for?", options: ["Not a Number", "Null and Number", "Not a Null", "None"], answer: "Not a Number" },
    { question: "Which operator is used for concatenation?", options: ["+", "-", "*", "/"], answer: "+" },
    { question: "What is the output of '5 + null'?", options: ["5", "'null'", "'5null'", "'undefined'"], answer: "'5null'" },
    { question: "How do you define a constant in JavaScript?", options: ["const myVar = 10;", "let myVar = 10;", "var myVar = 10;", "#define myVar 10;"], answer: "const myVar = 10;" },
    { question: "What does 'this' refer to in JavaScript?", options: ["Global object", "Current function", "Parent object", "None"], answer: "Current function" }
    ],
    webdev: [
    { question: "What does HTML stand for?", options: ["HyperText Markup Language", "HighText Markup Language", "HyperText Machine Language", "None"], answer: "HyperText Markup Language" },
    { question: "Which tag is used to create a hyperlink?", options: ["<link>", "<a>", "<href>", "<url>"], answer: "<a>" },
    { question: "What is the correct HTML element for the largest heading?", options: ["<h1>", "<heading>", "<h6>", "<head>"], answer: "<h1>" },
    { question: "Which attribute is used to provide an alternative text for images?", options: ["alt", "src", "title", "text"], answer: "alt" },
    { question: "What does the <br> tag do?", options: ["Creates a line break", "Bold text", "Italic text", "None"], answer: "Creates a line break" },
    { question: "Which tag is used to define an unordered list?", options: ["<ul>", "<ol>", "<li>", "<list>"], answer: "<ul>" },
    { question: "What is the purpose of the <head> tag?", options: ["Contains metadata", "Displays content", "Defines styles", "None"], answer: "Contains metadata" },
    { question: "Which tag is used to create a table?", options: ["<table>", "<tab>", "<tr>", "<td>"], answer: "<table>" },
    { question: "What does the <title> tag define?", options: ["Page title in browser tab", "Main heading", "Footer text", "Header text"], answer: "Page title in browser tab" },
    { question: "Which attribute specifies the URL of a link?", options: ["href", "src", "link", "url"], answer: "href" },
    { question: "How do you create a checkbox in HTML?", options: ["<input type='checkbox'>", "<checkbox>", "<input type='check'>", "<check>"], answer: "<input type='checkbox'>" },
    { question: "What is the purpose of the <meta> tag?", options: ["Metadata about the document", "Defines styles", "Creates links", "None"], answer: "Metadata about the document" },
    { question: "Which tag is used to define a paragraph?", options: ["<p>", "<para>", "<text>", "<paragraph>"], answer: "<p>" },
    { question: "What does the <img> tag do?", options: ["Displays an image", "Creates a link", "Defines a table", "None"], answer: "Displays an image" },
    { question: "Which tag is used to create a dropdown list?", options: ["<select>", "<dropdown>", "<list>", "<option>"], answer: "<select>" },
    { question: "What is the purpose of the <form> tag?", options: ["Collect user input", "Display content", "Create links", "None"], answer: "Collect user input" },
    { question: "How do you create a radio button in HTML?", options: ["<input type='radio'>", "<radio>", "<input type='button'>", "<button>"], answer: "<input type='radio'>" },
    { question: "Which tag is used to define a section in HTML5?", options: ["<section>", "<div>", "<article>", "<block>"], answer: "<section>" },
    { question: "What does the <footer> tag define?", options: ["Footer of the document", "Header of the document", "Main content", "Sidebar"], answer: "Footer of the document" },
    { question: "What is the purpose of CSS in web development?", options: ["To style HTML elements", "To create server-side logic", "To manage databases", "To handle user input"], answer: "To style HTML elements" }
    ],
    cpp: [
        { question: "What does C++ stand for?", options: ["C Plus Plus", "C Programming Plus", "C Enhanced", "C Advanced"], answer: "C Plus Plus" },
        { question: "Which keyword is used to define a class in C++?", options: ["class", "struct", "object", "define"], answer: "class" },
        { question: "What is the output of 'cout << 5 + 3;'?", options: ["53", "8", "35", "Error"], answer: "8" },
        { question: "Which operator is used for pointer dereferencing?", options: ["*", "&", "->", "::"], answer: "*" },
        { question: "What is the purpose of the 'new' keyword in C++?", options: ["To allocate memory dynamically", "To create a class", "To define a function", "To declare a variable"], answer: "To allocate memory dynamically" },
        { question: "Which header file is required for input/output operations?", options: ["iostream", "stdio.h", "stdlib.h", "conio.h"], answer: "iostream" },
        { question: "What is the default access specifier for class members in C++?", options: ["public", "private", "protected", "none"], answer: "private" },
        { question: "Which function is used to read input from the user?", options: ["cin >>", "scanf()", "input()", "read()"], answer: "cin >>" },
        { question: "What does 'this' pointer refer to in C++?", options: ["Current object instance", "Previous object instance", "Global variable", "Function parameter"], answer: "Current object instance" },
        { question: "How do you declare a constant in C++?", options: ["const int x = 10;", "#define x 10;", "int const x = 10;", "<constant> x = 10;"], answer: "#define x 10;" },
        { question: "What is the purpose of the 'virtual' keyword in C++?", options: ["To create virtual functions", "To declare constants", "To define templates", "To handle exceptions"], answer: "To create virtual functions" },
        { question: "Which operator is used for member access in C++?", options: [".", "->", "::", "&"], answer: "." },
        { question: "What is the output of '5 == 5' in C++?", options: ["True", "False", "1", "0"], answer: "True" },
        { question: "Which keyword is used to handle exceptions in C++?", options: ["try", "catch", "throw", "All of the above"], answer: "All of the above" },
        { question: "What is the purpose of the 'static' keyword in C++?", options: ["To declare static variables", "To create classes", "To define functions", "To handle memory"], answer: "To declare static variables" },
        { question: "How do you create a constructor in C++?", options: ["ClassName()", "Constructor()", "new ClassName()", "create ClassName()"], answer: "ClassName()" },
        { question: "What is the purpose of the 'delete' keyword in C++?", options: ["To free dynamically allocated memory", "To delete a class", "To remove a function", "To clear variables"], answer: "To free dynamically allocated memory" },
        { question: "Which operator is used for type casting in C++?", options: ["static_cast", "dynamic_cast", "reinterpret_cast", "All of the above"], answer: "All of the above" },
        { question: "What is the purpose of the 'friend' keyword in C++?", options: ["To allow access to private members", "To create a class", "To define a function", "To handle exceptions"], answer: "To allow access to private members" },
        { question: "Which of the following is a valid C++ comment?", options: ["// This is a comment", "/* This is a comment */", "# This is a comment", "Both A and B"], answer: "Both A and B" }
    ],
    oops: [
    { question: "What does OOP stand for?", options: ["Object-Oriented Programming", "Object-Oriented Process", "Object-Oriented Protocol", "None"], answer: "Object-Oriented Programming" },
    { question: "Which of the following is a core concept of OOP?", options: ["Encapsulation", "Inheritance", "Polymorphism", "All of the above"], answer: "All of the above" },
    { question: "What is encapsulation in OOP?", options: ["Hiding data within a class", "Creating subclasses", "Overloading methods", "None"], answer: "Hiding data within a class" },
    { question: "What is inheritance in OOP?", options: ["Reusing code from another class", "Creating new objects", "Defining functions", "None"], answer: "Reusing code from another class" },
    { question: "What is polymorphism in OOP?", options: ["Ability to take many forms", "Creating multiple classes", "Defining variables", "None"], answer: "Ability to take many forms" },
    { question: "Which keyword is used to create a class in OOP?", options: ["class", "object", "define", "struct"], answer: "class" },
    { question: "What is a constructor in OOP?", options: ["A special method for initializing objects", "A function to delete objects", "A method to create classes", "None"], answer: "A special method for initializing objects" },
    { question: "What is a destructor in OOP?", options: ["A method called when an object is destroyed", "A function to create objects", "A method to initialize classes", "None"], answer: "A method called when an object is destroyed" },
    { question: "What is method overloading in OOP?", options: ["Defining multiple methods with the same name", "Creating multiple classes", "Defining variables", "None"], answer: "Defining multiple methods with the same name" },
    { question: "What is method overriding in OOP?", options: ["Redefining a method in a subclass", "Creating multiple classes", "Defining variables", "None"], answer: "Redefining a method in a subclass" },
    { question: "What is an abstract class in OOP?", options: ["A class that cannot be instantiated", "A class with no methods", "A class with only static methods", "None"], answer: "A class that cannot be instantiated" },
    { question: "What is an interface in OOP?", options: ["A contract for classes to implement", "A type of class", "A method to create objects", "None"], answer: "A contract for classes to implement" },
    { question: "What is the purpose of the 'this' keyword in OOP?", options: ["Refers to the current object", "Creates a new object", "Defines a class", "None"], answer: "Refers to the current object" },
    { question: "What is the purpose of the 'super' keyword in OOP?", options: ["Refers to the parent class", "Creates a new object", "Defines a class", "None"], answer: "Refers to the parent class" },
    { question: "What is the difference between a class and an object?", options: ["Class is a blueprint, object is an instance", "Class is an instance, object is a blueprint", "Both are the same", "None"], answer: "Class is a blueprint, object is an instance" },
    { question: "What is the purpose of access modifiers in OOP?", options: ["Control visibility of class members", "Create new classes", "Define methods", "None"], answer: "Control visibility of class members" },
    { question: "What is the purpose of the 'final' keyword in OOP?", options: ["To prevent method overriding", "To create a new class", "To define variables", "None"], answer: "To prevent method overriding" },
    { question: "What is the purpose of the 'static' keyword in OOP?", options: ["To define class-level members", "To create new objects", "To define methods", "None"], answer: "To define class-level members" },
    { question: "What is the purpose of the 'abstract' keyword in OOP?", options: ["To define abstract methods", "To create new objects", "To define classes", "None"], answer: "To define abstract methods" },
    { question: "What is the purpose of the 'implements' keyword in OOP?", options: ["To implement an interface", "To create a new class", "To define methods", "None"], answer: "To implement an interface" }
  ],
    cybersecurity: [
    { question: "What is the primary goal of cybersecurity?", options: ["To protect systems and data", "To create software", "To hack systems", "None"], answer: "To protect systems and data" },
    { question: "What does 'phishing' refer to in cybersecurity?", options: ["Deceptive emails to steal information", "Hacking into networks", "Creating malware", "None"], answer: "Deceptive emails to steal information" },
    { question: "Which of the following is a common cybersecurity threat?", options: ["Malware", "Phishing", "DDoS attacks", "All of the above"], answer: "All of the above" },
    { question: "What is a firewall?", options: ["A security system that monitors and controls network traffic", "A type of malware", "A programming language", "None"], answer: "A security system that monitors and controls network traffic" },
    { question: "What does 'encryption' do?", options: ["Converts data into a secure format", "Deletes data", "Creates backups", "None"], answer: "Converts data into a secure format" },
    { question: "What is a DDoS attack?", options: ["Distributed Denial of Service attack", "Data Destruction attack", "Direct Data attack", "None"], answer: "Distributed Denial of Service attack" },
    { question: "What is the purpose of an antivirus software?", options: ["To detect and remove malware", "To create software", "To hack systems", "None"], answer: "To detect and remove malware" },
    { question: "What is social engineering in cybersecurity?", options: ["Manipulating people to gain information", "Hacking into networks", "Creating malware", "None"], answer: "Manipulating people to gain information" },
    { question: "What is a VPN?", options: ["Virtual Private Network", "Virtual Public Network", "Virtual Protected Network", "None"], answer: "Virtual Private Network" },
    { question: "What does 'two-factor authentication' provide?", options: ["An extra layer of security", "Faster login", "More data storage", "None"], answer: "An extra layer of security" },
    { question: "What is the purpose of penetration testing?", options: ["To find vulnerabilities in systems", "To create software", "To hack systems", "None"], answer: "To find vulnerabilities in systems" },
    { question: "What is a zero-day exploit?", options: ["An exploit with no known patch available", "An exploit that targets outdated software", "An exploit that requires user interaction", "None"], answer: "An exploit with no known patch available" },
    { question: "What is the purpose of a security audit?", options: ["To assess the security posture of an organization", "To create software", "To hack systems", "None"], answer: "To assess the security posture of an organization" },
    { question: "What is ransomware?", options: ["Malware that encrypts files and demands payment for decryption", "Atype of antivirus", "A programming language", "None"], answer: "Malware that encrypts files and demands payment for decryption" },
    { question: "What is the purpose of a security policy?", options: ["To define security practices and procedures", "To create software", "To hack systems", "None"], answer: "To define security practices and procedures" },
    { question: "What is a botnet?", options: ["A network of infected devices controlled by an attacker", "A type of malware", "A programming language", "None"], answer: "A network of infected devices controlled by an attacker" },
    { question: "What is the purpose of data backup in cybersecurity?", options: ["To restore data in case of loss or corruption", "To create software", "To hack systems", "None"], answer: "To restore data in case of loss or corruption" },
    { question: "What is the purpose of a security incident response plan?", options: ["To outline steps to take during a security incident", "To create software", "To hack systems", "None"], answer: "To outline steps to take during a security incident" }
    ],
    networking: [
        { question: "What is a router?", options: ["A device that forwards data packets between computer networks", "A type of malware", "A programming language", "None"], answer: "A device that forwards data packets between computer networks" },
        { question: "What does 'IP' stand for?", options: ["Internet Protocol", "Internal Protocol", "Input Protocol", "None"], answer: "Internet Protocol" },
        { question: "What is the purpose of a subnet mask?", options: ["To divide an IP address into network and host portions", "To encrypt data", "To create backups", "None"], answer: "To divide an IP address into network and host portions" },
        { question: "What is a VPN?", options: ["Virtual Private Network", "Virtual Public Network", "Virtual Protected Network", "None"], answer: "Virtual Private Network" },
        { question: "What is the purpose of DNS?", options: ["To translate domain names into IP addresses", "To encrypt data", "To create backups", "None"], answer: "To translate domain names into IP addresses" },
        { question: "What is a firewall?", options: ["A security system that monitors and controls network traffic", "A type of malware", "A programming language", "None"], answer: "A security system that monitors and controls network traffic" },
        { question: "What is the purpose of NAT?", options: ["To translate private IP addresses to public IP addresses", "To encrypt data", "To create backups", "None"], answer: "To translate private IP addresses to public IP addresses" },
        { question: "What is a MAC address?", options: ["A unique identifier assigned to network interfaces", "A type of malware", "A programming language", "None"], answer: "A unique identifier assigned to network interfaces" },
        { question: "What is the purpose of DHCP?", options: ["To assign IP addresses to devices on a network", "To encrypt data", "To create backups", "None"], answer: "To assign IP addresses to devices on a network" },
        { question: "What is a proxy server?", options: ["An intermediary server that forwards requests and responses", "A type of malware", "A programming language", "None"], answer: "An intermediary server that forwards requests and responses" },
        { question: "What is the purpose of a network switch?", options: ["To connect devices within a local area network", "To encrypt data", "To create backups", "None"], answer: "To connect devices within a local area network" },
        { question: "What is the purpose of a network topology?", options: ["To define the layout and structure of a network", "To encrypt data", "To create backups", "None"], answer: "To define the layout and structure of a network" },
        { question: "What is the purpose of a network protocol?", options: ["To define rules for communication between devices", "To encrypt data", "To create backups", "None"], answer: "To define rules for communication between devices" },
        { question: "What is the purpose of a network gateway?", options: ["To connect different networks and translate protocols", "To encrypt data", "To create backups", "None"], answer: "To connect different networks and translate protocols" },
        { question: "What is the purpose of a network packet?", options: ["To encapsulate data for transmission over a network", "To encrypt data", "To create backups", "None"], answer: "To encapsulate data for transmission over a network" },
        { question: "What is the purpose of a network address?", options: ["To uniquely identify a device on a network", "To encrypt data", "To create backups", "None"], answer: "To uniquely identify a device on a network" },
        { question: "What is the purpose of a network bandwidth?", options: ["To measure the maximum data transfer rate of a network", "To encrypt data", "To create backups", "None"], answer: "To measure the maximum data transfer rate of a network" },
        { question: "What is the purpose of a network latency?", options: ["To measure the delay in data transmission over a network", "To encrypt data", "To create backups", "None"], answer: "To measure the delay in data transmission over a network" }
    ]

};

let currentCategory = "";
let currentIndex = 0;
let currentQuestions = [];
let score = 0;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startQuiz() {
  currentCategory = document.getElementById("category").value;
  if (!currentCategory || !quizData[currentCategory]) return alert("Select a valid category");

  currentQuestions = shuffleArray([...quizData[currentCategory]]).slice(0, 10);
  currentIndex = 0;
  score = 0;
  document.getElementById("quiz-box").classList.remove("hide");
  document.getElementById("result").classList.add("hide");
  showQuestion();
}

function showQuestion() {
  const q = currentQuestions[currentIndex];
  document.getElementById("question").textContent = `Q${currentIndex + 1}. ${q.question}`;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => {
      if (opt === q.answer) {
        score++;
        btn.classList.add("correct");
      } else {
        btn.classList.add("wrong");
        const correctBtn = [...optionsDiv.children].find(b => b.textContent === q.answer);
        if (correctBtn) correctBtn.classList.add("correct");
      }
      document.querySelectorAll('#options button').forEach(b => b.disabled = true);
    };
    optionsDiv.appendChild(btn);
  });
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < currentQuestions.length) {
    showQuestion();
  } else {
    document.getElementById("quiz-box").classList.add("hide");
    document.getElementById("result").classList.remove("hide");
    document.getElementById("result").textContent = `🎉 You scored ${score} out of ${currentQuestions.length}`;
  }
}