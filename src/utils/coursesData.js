// Course data
const firstYearCourses = [
  // الفصل الدراسي الأول
  {
    term: "term1",
    courseCode: "IT101",
    nameAr: "أساسيات تكنولوجيا المعلومات",
    name: "IT Fundamentals",
    credits: 3,
    prerequisites: [],
    isMandatory: true,
  },
  {
    term: "term1",
    courseCode: "MATH101",
    nameAr: "رياضيات 1",
    name: "Mathematics I",
    credits: 3,
    prerequisites: [],
    isMandatory: true,
  },
  {
    term: "term1",
    courseCode: "EE101",
    nameAr: "إلكترونيات",
    name: "Electronics",
    credits: 3,
    prerequisites: [],
    isMandatory: true,
  },
  {
    term: "term1",
    courseCode: "HUM111",
    nameAr: "لغة إنجليزية 1",
    name: "English Language I",
    credits: 2,
    prerequisites: [],
    isMandatory: true,
  },
  {
    term: "term1",
    courseCode: "HUM122",
    nameAr: "الملكية الفكرية",
    name: "Intellectual Property",
    credits: 1,
    prerequisites: [],
    isMandatory: false,
  },
  {
    term: "term1",
    courseCode: "HUM141",
    nameAr: "قوانين الحاسبات",
    name: "Computer Law",
    credits: 2,
    prerequisites: [],
    isMandatory: false,
  },
  {
    term: "term1",
    courseCode: "PHYS102",
    nameAr: "الفيزياء 2",
    name: "Physics II",
    credits: 3,
    prerequisites: [],
    isMandatory: false,
  },
  {
    term: "term1",
    courseCode: "HUM151",
    nameAr: "الرسم اليدوي",
    name: "Hand Drawing",
    credits: 2,
    prerequisites: [],
    isMandatory: false,
  },
  {
    term: "term1",
    courseCode: "HUM152",
    nameAr: "تاريخ الحوسبة",
    name: "History of Computing",
    credits: 2,
    prerequisites: [],
    isMandatory: false,
  },
  {
    term: "term1",
    courseCode: "HUM153",
    nameAr: "الثقافة الإسلامية",
    name: "Islamic Culture",
    credits: 1,
    prerequisites: [],
    isMandatory: false,
  },
  // الفصل الدراسي الثاني
  {
    term: "term2",
    courseCode: "CS141",
    nameAr: "أساسيات البرمجة",
    name: "Programming Fundamentals",
    credits: 3,
    prerequisites: ["IT101"],
    isMandatory: true,
  },
  {
    term: "term2",
    courseCode: "MATH102",
    nameAr: "رياضيات 2",
    name: "Mathematics II",
    credits: 3,
    prerequisites: ["MATH101"],
    isMandatory: true,
  },
  {
    term: "term2",
    courseCode: "PHYS101",
    nameAr: "الفيزياء 1",
    name: "Physics I",
    credits: 3,
    prerequisites: [],
    isMandatory: true,
  },
  {
    term: "term2",
    courseCode: "HUM121",
    nameAr: "أساليب الحوسبة الاجتماعية",
    name: "Social Context of Computing",
    credits: 1,
    prerequisites: [],
    isMandatory: true,
  },
  {
    term: "term2",
    courseCode: "HUM132",
    nameAr: "التواصل الشخصي",
    name: "Interpersonal Communication",
    credits: 2,
    prerequisites: [],
    isMandatory: true,
  },
  {
    term: "term2",
    courseCode: "EE102",
    nameAr: "الدوائر الرقمية",
    name: "Digital Circuits",
    credits: 3,
    prerequisites: ["EE101"],
    isMandatory: false,
  },
  {
    term: "term2",
    courseCode: "HUM112",
    nameAr: "لغة إنجليزية 2",
    name: "English Language II",
    credits: 2,
    prerequisites: ["HUM111"],
    isMandatory: false,
  },
  {
    term: "term2",
    courseCode: "HUM131",
    nameAr: "سلوكيات الهيئات",
    name: "Organizational Behavior",
    credits: 2,
    prerequisites: [],
    isMandatory: false,
  },
  {
    term: "term2",
    courseCode: "HUM133",
    nameAr: "اقتصاديات الحوسبة",
    name: "Computing Economics",
    credits: 2,
    prerequisites: [],
    isMandatory: false,
  },
  {
    term: "term2",
    courseCode: "HUM142",
    nameAr: "الخصوصية والحريات المدنية",
    name: "Privacy and Civil Liberties",
    credits: 1,
    prerequisites: [],
    isMandatory: false,
  },
  {
    term: "term2",
    courseCode: "HUM154",
    nameAr: "التفكير العلمي",
    name: "Scientific Thinking",
    credits: 1,
    prerequisites: [],
    isMandatory: false,
  },
];
const secondYearCourses = [
  // Term 1
  {
    term: "term1",
    courseCode: "CS201",
    nameAr: "هياكل متقطعة",
    name: "Discrete Structures",
    credits: 3,
    prerequisites: ["MATH102"],
    isMandatory: true,
  },
  {
    term: "term1",
    courseCode: "CS241",
    nameAr: "البرمجة الشيئية",
    name: "Object-Oriented Programming",
    credits: 3,
    prerequisites: ["CS141"],
    isMandatory: true,
  },
  {
    term: "term1",
    courseCode: "HUM232",
    nameAr: "الكتابة التقنية",
    name: "Technical Writing",
    credits: 2,
    prerequisites: ["HUM111"],
    isMandatory: true,
  },
  {
    term: "term1",
    courseCode: "IS221",
    nameAr: "إدارة المشروعات",
    name: "Project Management",
    credits: 2,
    prerequisites: ["IT101"],
    isMandatory: true,
  },
  {
    term: "term1",
    courseCode: "MATH201",
    nameAr: "رياضيات ٣",
    name: "Mathematics III",
    credits: 3,
    prerequisites: ["MATH102"],
    isMandatory: true,
  },
  {
    term: "term1",
    courseCode: "HUM231",
    nameAr: "إدارة الأعمال",
    name: "Business Administration",
    credits: 2,
    prerequisites: [],
    isMandatory: true,
  },
  {
    term: "term1",
    courseCode: "IS231",
    nameAr: "تحليل وتصميم النظم",
    name: "Systems Analysis and Design",
    credits: 3,
    prerequisites: ["IT101"],
    isMandatory: true,
  },
  {
    term: "term1",
    courseCode: "IS201",
    nameAr: "أساسيات نظم المعلومات",
    name: "Foundations of Information Systems",
    credits: 3,
    prerequisites: ["IT101"],
    isMandatory: true,
  },
  // Term 2
  {
    term: "term2",
    courseCode: "CS211",
    nameAr: "هياكل البيانات والخوارزميات",
    name: "Data Structures and Algorithms",
    credits: 3,
    prerequisites: ["CS241"],
    isMandatory: true,
  },
  {
    term: "term2",
    courseCode: "IS212",
    nameAr: "قواعد البيانات",
    name: "Databases",
    credits: 3,
    prerequisites: ["IS201"],
    isMandatory: true,
  },
  {
    term: "term2",
    courseCode: "HUM241",
    nameAr: "الحاسبات والأخلاقيات",
    name: "Computers and Ethics",
    credits: 1,
    prerequisites: [],
    isMandatory: true,
  },
  {
    term: "term2",
    courseCode: "IT251",
    nameAr: "تراسل البيانات",
    name: "Data Communications",
    credits: 3,
    prerequisites: ["IT101"],
    isMandatory: true,
  },
  {
    term: "term2",
    courseCode: "IT271",
    nameAr: "البرمجة العنكبوتية",
    name: "Web Programming",
    credits: 3,
    prerequisites: ["CS141", "IT251"],
    isMandatory: true,
  },
  {
    term: "term2",
    courseCode: "MATH202",
    nameAr: "الاحتمالات والإحصاء",
    name: "Probability and Statistics",
    credits: 2,
    prerequisites: ["MATH102"],
    isMandatory: true,
  },
  {
    term: "term2",
    courseCode: "EE201",
    nameAr: "معالجة الإشارات الرقمية",
    name: "Digital Signal Processing",
    credits: 3,
    prerequisites: ["MATH201"],
    isMandatory: true,
  },
  {
    term: "term2",
    courseCode: "IS211",
    nameAr: "تنظيم الملفات",
    name: "File Organization",
    credits: 3,
    prerequisites: ["CS241"],
    isMandatory: true,
  },
];
const thirdYearCourses = [
  // Term 1
  {
    term: "term1",
    department: "IS",
    courseCode: "CS301",
    nameAr: "بحوث عمليات",
    name: "Operation Research",
    credits: 3,
    prerequisites: ["CS201"],
    isMandatory: true,
  },
  {
    term: "term1",
    department: "IS",
    courseCode: "CS323",
    nameAr: "معماريات الحاسب ونظم التشغيل",
    name: "Computer Architecture and Operating Systems",
    credits: 3,
    prerequisites: ["IT101", "CS201"],
    isMandatory: true,
  },
  {
    term: "term1",
    department: "IS",
    courseCode: "MATH301",
    nameAr: "تحليل عددي",
    name: "Numerical Analysis",
    credits: 3,
    prerequisites: ["MATH102"],
    isMandatory: true,
  },
  {
    term: "term1",
    department: "IS",
    courseCode: "SE301",
    nameAr: "هندسة البرمجيات",
    name: "Software Engineering",
    credits: 3,
    prerequisites: ["CS211"],
    isMandatory: true,
  },
  {
    term: "term1",
    department: "IS",
    courseCode: "CS351",
    nameAr: "الرسم بالحاسب",
    name: "Computer Graphics",
    credits: 3,
    prerequisites: ["IT101", "CS201"],
    isMandatory: false,
  },
  {
    term: "term1",
    department: "IS",
    courseCode: "CS302",
    nameAr: "النمذجة والمحاكاة",
    name: "Simulation and Modeling",
    credits: 3,
    prerequisites: ["MATH202"],
    isMandatory: false,
  },
  {
    term: "term1",
    department: "IS",
    courseCode: "CS341",
    nameAr: "البرمجة المرئية",
    name: "Visual Programming",
    credits: 3,
    prerequisites: ["CS211"],
    isMandatory: false,
  },
  // Term 2
  {
    term: "term2",
    department: "IS",
    courseCode: "CS381",
    nameAr: "تطوير البرمجيات والممارسة المهنية",
    name: "Software Development and Professional Practice",
    credits: 3,
    prerequisites: ["CS211", "SE301"],
    isMandatory: true,
  },
  {
    term: "term2",
    department: "IS",
    courseCode: "IS311",
    nameAr: "نظم المعلومات الجغرافية",
    name: "Geographical Information Systems",
    credits: 3,
    prerequisites: ["IS201", "IS212"],
    isMandatory: true,
  },
  {
    term: "term2",
    department: "IS",
    courseCode: "IS341",
    nameAr: "نظم دعم اتخاذ القرار",
    name: "Decision Support Systems",
    credits: 3,
    prerequisites: ["IS201"],
    isMandatory: true,
  },
  {
    term: "term2",
    department: "IS",
    courseCode: "IS342",
    nameAr: "استراتيجية إدارة واكتساب نظم المعلومات",
    name: "IS Strategy Management and Acquisition",
    credits: 3,
    prerequisites: ["IS201"],
    isMandatory: true,
  },
  {
    term: "term2",
    department: "IS",
    courseCode: "IT351",
    nameAr: "شبكات الحاسب",
    name: "Computer Networks",
    credits: 3,
    prerequisites: ["IT251"],
    isMandatory: true,
  },
  {
    term: "term2",
    department: "IS",
    courseCode: "IT381",
    nameAr: "مقدمة في تكنولوجيا الوسائط المتعددة",
    name: "Introduction to Multimedia Technology",
    credits: 3,
    prerequisites: ["CS241"],
    isMandatory: false,
  },
  {
    term: "term2",
    department: "IS",
    courseCode: "IS321",
    nameAr: "إدارة المشروعات المتقدمة",
    name: "Advanced Project Management",
    credits: 3,
    prerequisites: ["IS221"],
    isMandatory: false,
  },
  // Term 1 CS
  {
    term: "term1",
    department: "CS",
    courseCode: "CS301",
    nameAr: "بحوث عمليات",
    name: "Operation Research",
    credits: 2,
    prerequisites: ["CS201"],
    isMandatory: true,
  },
  {
    term: "term1",
    department: "CS",
    courseCode: "MATH301",
    nameAr: "تحليل عددي",
    name: "Numerical Analysis",
    credits: 2,
    prerequisites: ["MATH102"],
    isMandatory: true,
  },
  {
    term: "term1",
    department: "CS",
    courseCode: "CS311",
    nameAr: "تصميم وتحليل الخوارزميات",
    name: "Algorithm Design and Analysis",
    credits: 3,
    prerequisites: ["CS211"],
    isMandatory: true,
  },
  {
    term: "term1",
    department: "CS",
    courseCode: "CS321",
    nameAr: "معماريات الحاسب",
    name: "Computer Architecture",
    credits: 3,
    prerequisites: ["CS141", "CS201"],
    isMandatory: true,
  },
  {
    term: "term1",
    department: "CS",
    courseCode: "CS351",
    nameAr: "الرسم بالحاسب",
    name: "Computer Graphics",
    credits: 3,
    prerequisites: ["IT101", "CS201"],
    isMandatory: true,
  },
  {
    term: "term1",
    department: "CS",
    courseCode: "SE301",
    nameAr: "هندسة البرمجيات",
    name: "Software Engineering",
    credits: 3,
    prerequisites: ["CS211"],
    isMandatory: true,
  },
  {
    term: "term1",
    department: "CS",
    courseCode: "CS302",
    nameAr: "النمذجة والمحاكاة",
    name: "Simulation and Modeling",
    credits: 2,
    prerequisites: ["MATH202"],
    isMandatory: false,
  },
  {
    term: "term1",
    department: "CS",
    courseCode: "CS341",
    nameAr: "البرمجة المرئية",
    name: "Visual Programming",
    credits: 2,
    prerequisites: ["CS211"],
    isMandatory: false,
  },
  // Term 2
  {
    term: "term2",
    department: "CS",
    courseCode: "CS322",
    nameAr: "نظم التشغيل",
    name: "Operating Systems",
    credits: 3,
    prerequisites: ["CS321"],
    isMandatory: true,
  },
  {
    term: "term2",
    department: "CS",
    courseCode: "CS342",
    nameAr: "نظرية الآليات و اللغات",
    name: "Automata and Language Theory",
    credits: 2,
    prerequisites: ["CS141", "CS201"],
    isMandatory: true,
  },
  {
    term: "term2",
    department: "CS",
    courseCode: "CS352",
    nameAr: "معالجة الصور",
    name: "Image Processing",
    credits: 3,
    prerequisites: ["CS211"],
    isMandatory: true,
  },
  {
    term: "term2",
    department: "CS",
    courseCode: "CS361",
    nameAr: "الذكاء الاصطناعي",
    name: "Artificial Intelligence",
    credits: 2,
    prerequisites: ["IT101", "CS201"],
    isMandatory: true,
  },
  {
    term: "term2",
    department: "CS",
    courseCode: "CS381",
    nameAr: "تطوير البرمجيات والممارسة المهنية",
    name: "Software Development and Professional Practice",
    credits: 3,
    prerequisites: ["CS211", "CS391"],
    isMandatory: true,
  },
  {
    term: "term2",
    department: "CS",
    courseCode: "IT351",
    nameAr: "شبكات الحاسب",
    name: "Computer Networks",
    credits: 3,
    prerequisites: ["IT251", "CS321"],
    isMandatory: true,
  },
  {
    term: "term2",
    department: "CS",
    courseCode: "IT381",
    nameAr: "مقدمة في تكنولوجيا الوسائط المتعددة",
    name: "Introduction to Multimedia Technology",
    credits: 2,
    prerequisites: ["CS241"],
    isMandatory: true,
  },
  {
    term: "term2",
    department: "CS",
    courseCode: "CS353",
    nameAr: "الرسم بالحاسب المتقدم",
    name: "Advanced Computer Graphics",
    credits: 2,
    prerequisites: ["CS351"],
    isMandatory: false,
  },
  // Term 1 IT
  {
    term: "term1",
    department: "IT",
    courseCode: "CS301",
    nameAr: "بحوث عمليات",
    name: "Operation Research",
    credits: 3,
    prerequisites: ["CS201"],
    isMandatory: true,
  },
  {
    term: "term1",
    department: "IT",
    courseCode: "SE301",
    nameAr: "هندسة البرمجيات",
    name: "Software Engineering",
    credits: 3,
    prerequisites: ["IS231"],
    isMandatory: true,
  },
  {
    term: "term1",
    department: "IT",
    courseCode: "CS321",
    nameAr: "معماريات الحاسب",
    name: "Computer Architecture",
    credits: 3,
    prerequisites: ["CS141", "CS201"],
    isMandatory: true,
  },
  {
    term: "term1",
    department: "IT",
    courseCode: "IT361",
    nameAr: "تدريب ميداني",
    name: "Field Training",
    credits: 3,
    prerequisites: ["IS221"],
    isMandatory: true,
  },
  {
    term: "term1",
    department: "IT",
    courseCode: "CS351",
    nameAr: "الرسم بالحاسب",
    name: "Computer Graphics",
    credits: 3,
    prerequisites: ["IT101", "CS201"],
    isMandatory: true,
  },
  {
    term: "term1",
    department: "IT",
    courseCode: "CS302",
    nameAr: "النمذجة والمحاكاة",
    name: "Simulation and Modeling",
    credits: 3,
    prerequisites: ["MATH202"],
    isMandatory: false,
  },
  {
    term: "term1",
    department: "IT",
    courseCode: "CS341",
    nameAr: "البرمجة المرئية",
    name: "Visual Programming",
    credits: 3,
    prerequisites: ["CS211"],
    isMandatory: false,
  },
  {
    term: "term1",
    department: "IT",
    courseCode: "MATH301",
    nameAr: "تحليل عددي",
    name: "Numerical Analysis",
    credits: 3,
    prerequisites: ["MATH102"],
    isMandatory: false,
  },
  // Term 2
  {
    term: "term2",
    department: "IT",
    courseCode: "CS322",
    nameAr: "نظم التشغيل",
    name: "Operating Systems",
    credits: 2,
    prerequisites: ["CS321"],
    isMandatory: true,
  },
  {
    term: "term2",
    department: "IT",
    courseCode: "CS352",
    nameAr: "معالجة الصور",
    name: "Image Processing",
    credits: 3,
    prerequisites: ["CS211"],
    isMandatory: true,
  },
  {
    term: "term2",
    department: "IT",
    courseCode: "CS381",
    nameAr: "تطوير البرمجيات والممارسة المهنية",
    name: "Software Development and Professional Practice",
    credits: 2,
    prerequisites: ["CS211", "SE301"],
    isMandatory: true,
  },
  {
    term: "term2",
    department: "IT",
    courseCode: "IT311",
    nameAr: "أمن الشبكات",
    name: "Network Security",
    credits: 3,
    prerequisites: ["IT351"],
    isMandatory: true,
  },
  {
    term: "term2",
    department: "IT",
    courseCode: "IT331",
    nameAr: "إدارة الشبكات",
    name: "Network Management",
    credits: 3,
    prerequisites: ["IT351"],
    isMandatory: true,
  },
  {
    term: "term2",
    department: "IT",
    courseCode: "IT351",
    nameAr: "شبكات الحاسب",
    name: "Computer Networks",
    credits: 3,
    prerequisites: ["IT251", "CS321"],
    isMandatory: true,
  },
  {
    term: "term2",
    department: "IT",
    courseCode: "IS321",
    nameAr: "إدارة المشروعات المتقدمة",
    name: "Advanced Project Management",
    credits: 2,
    prerequisites: ["IS221"],
    isMandatory: false,
  },
  {
    term: "term2",
    department: "IT",
    courseCode: "IT381",
    nameAr: "مقدمة في تكنولوجيا الوسائط المتعددة",
    name: "Introduction to Multimedia Technology",
    credits: 2,
    prerequisites: ["CS241"],
    isMandatory: false,
  },
];
const fourthYearCourses = [
  // Term 1 CS
  {
    term: "term1",
    department: "CS",
    courseCode: "CS481",
    nameAr: "مشروع التخرج ١",
    name: "Capstone Project I",
    credits: 3,
    prerequisites: ["CS381", "IS221"],
    isMandatory: true,
  },
  {
    term: "term1",
    department: "CS",
    courseCode: "CS471",
    nameAr: "مقدمة أمن الحاسب",
    name: "Introduction to Computer Security",
    credits: 3,
    prerequisites: ["CS211", "IT351"],
    isMandatory: true,
  },
  {
    term: "term1",
    department: "CS",
    courseCode: "CS431",
    nameAr: "الحسابات المتوازية",
    name: "Parallel Computation",
    credits: 3,
    prerequisites: ["CS311", "CS321"],
    isMandatory: true,
  },
  {
    term: "term1",
    department: "CS",
    courseCode: "CS442",
    nameAr: "تصميم لغات البرمجة",
    name: "Programming Language Design",
    credits: 3,
    prerequisites: ["CS211"],
    isMandatory: false,
  },
  {
    term: "term1",
    department: "CS",
    courseCode: "CS451",
    nameAr: "الحركة بالحاسب",
    name: "Computer Animation",
    credits: 3,
    prerequisites: ["CS352"],
    isMandatory: false,
  },
  {
    term: "term1",
    department: "CS",
    courseCode: "CS452",
    nameAr: "الرؤية بالحاسب",
    name: "Computer Vision",
    credits: 3,
    prerequisites: ["CS241", "PHYS102"],
    isMandatory: false,
  },
  {
    term: "term1",
    department: "CS",
    courseCode: "CS461",
    nameAr: "النظم الذكية",
    name: "Intelligent Systems",
    credits: 3,
    prerequisites: ["CS361"],
    isMandatory: false,
  },
  {
    term: "term1",
    department: "CS",
    courseCode: "CS462",
    nameAr: "تعلم الآلة",
    name: "Machine Learning",
    credits: 3,
    prerequisites: ["CS361"],
    isMandatory: false,
  },
  {
    term: "term1",
    department: "CS",
    courseCode: "CS463",
    nameAr: "التعرف بالنماذج",
    name: "Pattern Recognition",
    credits: 3,
    prerequisites: ["CS361"],
    isMandatory: false,
  },
  {
    term: "term1",
    department: "CS",
    courseCode: "CS421",
    nameAr: "نظم التشغيل المتقدمة",
    name: "Advanced Operating Systems",
    credits: 3,
    prerequisites: ["CS322"],
    isMandatory: false,
  },
  {
    term: "term1",
    department: "CS",
    courseCode: "IS411",
    nameAr: "قواعد البيانات المتقدمة",
    name: "Advanced Database",
    credits: 3,
    prerequisites: [],
    isMandatory: false,
  },
  // Term 2 CS
  {
    term: "term2",
    department: "CS",
    courseCode: "CS441",
    nameAr: "بناء المترجمات",
    name: "Compiler Construction",
    credits: 3,
    prerequisites: ["CS211", "CS342"],
    isMandatory: false,
  },
  {
    term: "term2",
    department: "CS",
    courseCode: "CS482",
    nameAr: "مشروع التخرج 2",
    name: "Capstone Project II",
    credits: 3,
    prerequisites: ["CS381", "IS221"],
    isMandatory: false,
  },
  {
    term: "term2",
    department: "CS",
    courseCode: "IS414",
    nameAr: "استخلاص البيانات وذكاءالاعمال",
    name: "Data Mining and Business Intelligence",
    credits: 3,
    prerequisites: [],
    isMandatory: false,
  },
  {
    term: "term2",
    department: "CS",
    courseCode: "CS472",
    nameAr: "التشفير",
    name: "Cryptography",
    credits: 3,
    prerequisites: ["CS211", "IT351"],
    isMandatory: false,
  },
  {
    term: "term2",
    department: "CS",
    courseCode: "SE422",
    nameAr: "ضمان جودة البرمجيات واختبارها",
    name: "Software Quality Assurance and Testing",
    credits: 3,
    prerequisites: ["SE301"],
    isMandatory: false,
  },
  {
    term: "term2",
    department: "CS",
    courseCode: "IS412",
    nameAr: "قواعد البيانات الموزعة والشيئية",
    name: "Distributed and Object Databases",
    credits: 3,
    prerequisites: ["IS212"],
    isMandatory: false,
  },
  {
    term: "term2",
    department: "CS",
    courseCode: "IT431",
    nameAr: "الحوسبة اللاسلكية والمحمولة",
    name: "Wireless and Mobile Computing",
    credits: 3,
    prerequisites: ["IT251"],
    isMandatory: false,
  },
  {
    term: "term2",
    department: "CS",
    courseCode: "IT432",
    nameAr: "برمجة الشبكات",
    name: "Network Programming",
    credits: 3,
    prerequisites: ["IT351"],
    isMandatory: false,
  },
  {
    term: "term2",
    department: "CS",
    courseCode: "IT431",
    nameAr: "الواقع الافتراضي",
    name: "Virtual Reality",
    credits: 3,
    prerequisites: [],
    isMandatory: false,
  },
  {
    term: "term2",
    department: "CS",
    courseCode: "CS422",
    nameAr: "معمارية الحاسب المتقدمة",
    name: "Advanced Computer Architecture",
    credits: 3,
    prerequisites: ["CS321"],
    isMandatory: false,
  },
  {
    term: "term2",
    department: "CS",
    courseCode: "CS423",
    nameAr: "الأنظمة المدمجة",
    name: "Embedded Systems",
    credits: 3,
    prerequisites: ["CS321"],
    isMandatory: false,
  },
  // Term 1 IS
  {
    term: "term1",
    department: "IS",
    courseCode: "IT411",
    nameAr: "ضمان المعلومات وحمايتها",
    name: "Information Assurance and Security",
    credits: 3,
    prerequisites: ["IT351"],
    isMandatory: true,
  },
  {
    term: "term1",
    department: "IS",
    courseCode: "IT441",
    nameAr: "المعمارية التكنولوجية للشركات",
    name: "Enterprise Architecture",
    credits: 3,
    prerequisites: ["IT351"],
    isMandatory: true,
  },
  {
    term: "term1",
    department: "IS",
    courseCode: "IS452",
    nameAr: "مشروع التخرج 1",
    name: "Capstone Project I",
    credits: 3,
    prerequisites: ["CS381", "IS221"],
    isMandatory: true,
  },
  {
    term: "term1",
    department: "IS",
    courseCode: "IS413",
    nameAr: "نظم المعلومات الشبكية",
    name: "Web Information Systems",
    credits: 3,
    prerequisites: ["IS201", "IT271"],
    isMandatory: false,
  },
  {
    term: "term1",
    department: "IS",
    courseCode: "IS414",
    nameAr: "استخلاص البيانات وذكاءالاعمال",
    name: "Data Mining and Business Intelligence",
    credits: 3,
    prerequisites: ["IS201"],
    isMandatory: false,
  },
  {
    term: "term1",
    department: "IS",
    courseCode: "IS416",
    nameAr: "معالجة المعاملات",
    name: "Transaction Processing",
    credits: 3,
    prerequisites: ["IS212"],
    isMandatory: false,
  },
  {
    term: "term1",
    department: "IS",
    courseCode: "IS411",
    nameAr: "قواعد البيانات المتقدمة",
    name: "Advanced Database",
    credits: 3,
    prerequisites: ["IS212"],
    isMandatory: false,
  },
  {
    term: "term1",
    department: "IS",
    courseCode: "IT471",
    nameAr: "التجارة الإلكترونية",
    name: "E-commerce",
    credits: 3,
    prerequisites: ["IT271"],
    isMandatory: false,
  },

  // Term 2 IS
  {
    term: "term2",
    department: "IS",
    courseCode: "IS412",
    nameAr: "قواعد البيانات الموزعة والشيئية",
    name: "Distributed and Object Databases",
    credits: 3,
    prerequisites: ["IS212"],
    isMandatory: true,
  },
  {
    term: "term2",
    department: "IS",
    courseCode: "IS453",
    nameAr: "مشروع التخرج 2",
    name: "Capstone Project II",
    credits: 3,
    prerequisites: ["CS381", "IS221"],
    isMandatory: true,
  },
  {
    term: "term2",
    department: "IS",
    courseCode: "IS415",
    nameAr: "إدارة قواعد البيانات",
    name: "Database Administration",
    credits: 3,
    prerequisites: ["IS212"],
    isMandatory: false,
  },
  {
    term: "term2",
    department: "IS",
    courseCode: "IS417",
    nameAr: "قواعد بيانات الوسائط المتعددة",
    name: "Multimedia Databases",
    credits: 3,
    prerequisites: ["IS212", "CS241"],
    isMandatory: false,
  },
  {
    term: "term2",
    department: "IS",
    courseCode: "IS441",
    nameAr: "ضمان جودة نظم المعلومات",
    name: "Quality Assurance of Information Systems",
    credits: 3,
    prerequisites: ["IS201"],
    isMandatory: false,
  },
  {
    term: "term2",
    department: "IS",
    courseCode: "IS442",
    nameAr: "تطوير تطبيقات نظم المعلومات",
    name: "IS Application Development",
    credits: 3,
    prerequisites: ["IS212", "IS413"],
    isMandatory: false,
  },
  {
    term: "term2",
    department: "IS",
    courseCode: "IS451",
    nameAr: "نظم المعلومات الاجتماعية",
    name: "Social Information Systems",
    credits: 3,
    prerequisites: ["IS413"],
    isMandatory: false,
  },
  {
    term: "term2",
    department: "IS",
    courseCode: "IT482",
    nameAr: "تفاعل الانسان و الحاسب",
    name: "Human Computer Interaction",
    credits: 3,
    prerequisites: ["CS341"],
    isMandatory: false,
  },
  // Term 1 IT
  {
    term: "term1",
    department: "IT",
    courseCode: "IT461",
    nameAr: "مشروع التخرج 1",
    name: "Capstone Project I",
    credits: 3,
    prerequisites: ["CS381", "IS221"],
    isMandatory: true,
  },
  {
    term: "term1",
    department: "IT",
    courseCode: "IT451",
    nameAr: "تحليل وتصميم الشبكات",
    name: "Network Analysis and Design",
    credits: 3,
    prerequisites: ["IT351", "MATH202"],
    isMandatory: true,
  },
  {
    term: "term1",
    department: "IT",
    courseCode: "IT441",
    nameAr: "المعمارية التكنولوجية للشركات",
    name: "Enterprise Architecture",
    credits: 3,
    prerequisites: ["IT351"],
    isMandatory: true,
  },
  {
    term: "term1",
    department: "IT",
    courseCode: "IT471",
    nameAr: "التجارة الإلكترونية",
    name: "E-commerce",
    credits: 3,
    prerequisites: ["IT271"],
    isMandatory: false,
  },
  {
    term: "term1",
    department: "IT",
    courseCode: "IT433",
    nameAr: "الأدلة الشرعية في الشبكات",
    name: "Network Forensics",
    credits: 3,
    prerequisites: ["IT351"],
    isMandatory: false,
  },
  {
    term: "term1",
    department: "IT",
    courseCode: "CS431",
    nameAr: "الحسابات المتوازية",
    name: "Parallel Computation",
    credits: 3,
    prerequisites: [],
    isMandatory: false,
  },
  {
    term: "term1",
    department: "IT",
    courseCode: "CS452",
    nameAr: "الرؤية بالحاسب",
    name: "Computer Vision",
    credits: 3,
    prerequisites: ["CS241", "PHYS102"],
    isMandatory: false,
  },
  {
    term: "term1",
    department: "IT",
    courseCode: "CS461",
    nameAr: "النظم الذكية",
    name: "Intelligent Systems",
    credits: 3,
    prerequisites: ["CS361"],
    isMandatory: false,
  },
  {
    term: "term1",
    department: "IT",
    courseCode: "IS411",
    nameAr: "قواعد البيانات المتقدمة",
    name: "Advanced Database",
    credits: 3,
    prerequisites: ["IS212"],
    isMandatory: false,
  },

  // Term 2 IT
  {
    term: "term2",
    department: "IT",
    courseCode: "IT431",
    nameAr: "الحوسبة اللاسلكية والمحمولة",
    name: "Wireless and Mobile Computing",
    credits: 3,
    prerequisites: ["IT251"],
    isMandatory: true,
  },
  {
    term: "term2",
    department: "IT",
    courseCode: "IT462",
    nameAr: "مشروع التخرج 2",
    name: "Capstone Project II",
    credits: 3,
    prerequisites: ["CS381", "IS221"],
    isMandatory: true,
  },
  {
    term: "term2",
    department: "IT",
    courseCode: "IT432",
    nameAr: "برمجة الشبكات",
    name: "Network Programming",
    credits: 3,
    prerequisites: ["IT351"],
    isMandatory: false,
  },
  {
    term: "term2",
    department: "IT",
    courseCode: "IT452",
    nameAr: "الأنظمة المدمجة الشبكية",
    name: "Networked Embedded Systems",
    credits: 3,
    prerequisites: ["IT351"],
    isMandatory: false,
  },
  {
    term: "term2",
    department: "IT",
    courseCode: "CS451",
    nameAr: "التحريك بالحاسب",
    name: "Computer Animation",
    credits: 3,
    prerequisites: [],
    isMandatory: false,
  },
  {
    term: "term2",
    department: "IT",
    courseCode: "IS412",
    nameAr: "قواعد البيانات الموزعة والشيئية",
    name: "Distributed and Object Databases",
    credits: 3,
    prerequisites: ["IS212"],
    isMandatory: false,
  },
  {
    term: "term2",
    department: "IT",
    courseCode: "IT482",
    nameAr: "الواقع الافتراضي",
    name: "Virtual Reality",
    credits: 3,
    prerequisites: [],
    isMandatory: false,
  },
  {
    term: "term2",
    department: "IT",
    courseCode: "CS422",
    nameAr: "معمارية الحاسب المتقدمة",
    name: "Advanced Computer Architecture",
    credits: 3,
    prerequisites: ["CE321"],
    isMandatory: false,
  },
  {
    term: "term2",
    department: "IT",
    courseCode: "CS423",
    nameAr: "الأنظمة المدمجة",
    name: "Embedded Systems",
    credits: 3,
    prerequisites: ["CS321"],
    isMandatory: false,
  },
];

export {
  firstYearCourses,
  secondYearCourses,
  thirdYearCourses,
  fourthYearCourses,
};
