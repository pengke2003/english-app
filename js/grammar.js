/**
 * 初中英语语法库
 * 字段：title(标题), grade(年级), summary(简述), points(要点数组), examples(例句数组)
 * 另含 GRAMMAR_QUIZ：语法挑战用选择题
 */
const GRAMMAR = [
  {
    title: "1. 名词 (Noun)",
    grade: 7,
    summary: "表示人、事物、地点或抽象概念的词。分可数与不可数名词。",
    points: [
      "可数名词：有单复数之分，可用 a/an/数字修饰。如：a book, two apples。",
      "不可数名词：不能直接用数字修饰，需用量词。如：a glass of water, two pieces of bread。",
      "复数变化规则：一般加 s（book→books）；s/x/sh/ch 结尾加 es（bus→buses）；辅音+y 变 ies（city→cities）；f/fe 变 ves（leaf→leaves）；不规则（man→men, child→children, foot→feet）。",
      "名词所有格：单数加 's（Tom's book）；复数 s 结尾加 '（the students' books）。"
    ],
    examples: [
      "I have two cats and a dog.",
      "There is some water in the glass.",
      "This is my mother's car.",
      "The children are playing in the park."
    ]
  },
  {
    title: "2. 代词 (Pronoun)",
    grade: 7,
    summary: "代替名词的词。包括人称代词、物主代词、指示代词、反身代词等。",
    points: [
      "人称代词主格：I, you, he, she, it, we, they（作主语）。",
      "人称代词宾格：me, you, him, her, it, us, them（作宾语）。",
      "形容词性物主代词：my, your, his, her, its, our, their（后接名词）。",
      "名词性物主代词：mine, yours, his, hers, its, ours, theirs（单独使用）。",
      "反身代词：myself, yourself, himself, herself, itself, ourselves, yourselves, themselves。"
    ],
    examples: [
      "She is my friend. I like her.",
      "This book is mine, not yours.",
      "He did the homework by himself.",
      "They are students. We help them."
    ]
  },
  {
    title: "3. 冠词 (Article)",
    grade: 7,
    summary: "a/an/the 是用在名词前的限定词，分为不定冠词和定冠词。",
    points: [
      "a 用在辅音音素开头的单数可数名词前：a book, a university。",
      "an 用在元音音素开头的单数可数名词前：an apple, an hour。",
      "the 表示特指：the sun, the boy in red。",
      "零冠词：球类运动、三餐、语言、学科前不加冠词：play football, have breakfast。",
      "固定搭配：in the morning, go to school, at home。"
    ],
    examples: [
      "There is an orange on the table.",
      "I play the piano after dinner.",
      "She is a university student.",
      "The sun rises in the east."
    ]
  },
  {
    title: "4. 数词 (Numeral)",
    grade: 7,
    summary: "表示数量或顺序的词。分为基数词和序数词。",
    points: [
      "基数词：one, two, three... 表示数量。",
      "序数词：first, second, third... 表示顺序，前面通常加 the。",
      "序数词变化：一般加 th（four→fourth）；特殊：first, second, third, fifth, eighth, ninth, twelfth。",
      "表达日期：July 1st, the first of July。",
      "表达年龄：a 12-year-old boy，at the age of 12。"
    ],
    examples: [
      "Today is March the eighth.",
      "He is the first one to come.",
      "There are thirty-one days in July.",
      "My sister is a five-year-old girl."
    ]
  },
  {
    title: "5. 介词 (Preposition)",
    grade: 7,
    summary: "表示名词或代词与其它词之间关系的词。常见有时间、地点、方位介词。",
    points: [
      "时间介词：at（具体时刻 at 7:00）；on（某天 on Monday）；in（年月季 in 2020, in May）。",
      "地点介词：at（小地点 at the bus stop）；in（大地点 in Beijing）；on（表面上 on the table）。",
      "方位介词：above, below, behind, in front of, next to, between, among。",
      "固定搭配：good at, afraid of, interested in, look for, listen to。"
    ],
    examples: [
      "I was born in 2010.",
      "The cat is under the table.",
      "We have a meeting on Friday.",
      "She is good at math."
    ]
  },
  {
    title: "6. 形容词和副词 (Adj. & Adv.)",
    grade: 7,
    summary: "形容词修饰名词；副词修饰动词、形容词或其他副词。都有比较级和最高级。",
    points: [
      "形容词用法：修饰名词（a beautiful girl）；系动词后作表语（is happy）。",
      "副词用法：修饰动词（run quickly）；修饰形容词（very good）。",
      "比较级：短词加 er（tall→taller）；以 y 结尾变 ier（happy→happier）；多音节加 more（more beautiful）。",
      "最高级：短词加 est（tallest）；多音节加 most（most beautiful）。",
      "不规则：good/well→better→best；bad→worse→worst；many→more→most。"
    ],
    examples: [
      "Tom is taller than Mike.",
      "She runs faster than me.",
      "This is the most beautiful flower.",
      "He is the best student in our class."
    ]
  },
  {
    title: "7. 一般现在时 (Simple Present)",
    grade: 7,
    summary: "表示经常性、习惯性的动作或客观真理。主语第三人称单数时动词加 s/es。",
    points: [
      "用法：经常性动作（I go to school every day）；客观真理（The earth goes round the sun）。",
      "动词变化：第三人称单数加 s（likes）；o/s/x/sh/ch 加 es（goes, watches）；辅音+y 变 ies（studies）。",
      "时间状语：always, usually, often, sometimes, every day, on Sundays。",
      "否定：don't / doesn't + 动词原形。",
      "疑问：Do / Does + 主语 + 动词原形？"
    ],
    examples: [
      "He often plays football after school.",
      "The sun rises in the east.",
      "She doesn't like apples.",
      "Do you speak English?"
    ]
  },
  {
    title: "8. 一般过去时 (Simple Past)",
    grade: 8,
    summary: "表示过去某个时间发生的动作或状态。动词用过去式。",
    points: [
      "规则动词加 ed：work→worked；e 结尾加 d（like→liked）；辅音+y 变 ied（study→studied）。",
      "不规则动词：go→went, see→saw, have→had, do→did, come→came。",
      "时间状语：yesterday, last week, in 2010, two days ago。",
      "否定：didn't + 动词原形。",
      "疑问：Did + 主语 + 动词原形？"
    ],
    examples: [
      "I visited my grandma last weekend.",
      "He didn't go to school yesterday.",
      "Did you watch TV last night?",
      "They were happy at the party."
    ]
  },
  {
    title: "9. 一般将来时 (Simple Future)",
    grade: 8,
    summary: "表示将来某个时间要发生的动作。结构：will / be going to + 动词原形。",
    points: [
      "will + 动词原形：表示将来的预测或临时决定。如：It will rain tomorrow.",
      "be going to + 动词原形：表示计划、打算。如：I am going to visit Paris.",
      "时间状语：tomorrow, next week, in the future, soon。",
      "否定：won't / am not going to。",
      "疑问：Will / Are you going to...?"
    ],
    examples: [
      "I will call you later.",
      "She is going to buy a new bike.",
      "They won't come to the party.",
      "Are you going to study abroad?"
    ]
  },
  {
    title: "10. 现在进行时 (Present Continuous)",
    grade: 8,
    summary: "表示现在正在进行的动作。结构：am/is/are + doing。",
    points: [
      "构成：be 动词 + 动词 ing。",
      "动词 ing 变化：一般加 ing（reading）；e 结尾去 e（writing）；重读闭音节双写末尾辅音（running, swimming）。",
      "时间状语：now, right now, at the moment, look!, listen!。",
      "否定：am/is/are not + doing。",
      "疑问：Am/Is/Are + 主语 + doing？"
    ],
    examples: [
      "Look! The boys are playing football.",
      "I am doing my homework now.",
      "She isn't watching TV at the moment.",
      "Are they having dinner?"
    ]
  },
  {
    title: "11. 过去进行时 (Past Continuous)",
    grade: 8,
    summary: "表示过去某时刻正在进行的动作。结构：was/were + doing。",
    points: [
      "构成：was/were + 动词 ing。was 用于 I/he/she/it，were 用于 you/we/they。",
      "时间状语：at 8:00 yesterday, this time last week, when/while...",
      "常与一般过去时配合：I was reading when he came in.",
      "否定：wasn't/weren't + doing。",
      "疑问：Was/Were + 主语 + doing？"
    ],
    examples: [
      "I was cooking at 6:00 yesterday.",
      "They were playing when it rained.",
      "She wasn't sleeping at that time.",
      "Were you studying at 9 pm?"
    ]
  },
  {
    title: "12. 现在完成时 (Present Perfect)",
    grade: 9,
    summary: "表示过去发生并对现在有影响，或从过去持续到现在的动作。结构：have/has + done。",
    points: [
      "构成：have/has + 动词过去分词。",
      "过去分词规则：与过去式相同（worked）；不规则需记忆（gone, seen, done）。",
      "用法：已完成对现在有影响（I have lost my key.）；经验（I have been to Beijing.）。",
      "时间状语：already, yet, just, ever, never, since, for。",
      "have been to（去过，已回） vs have gone to（去了，未回）。"
    ],
    examples: [
      "I have finished my homework.",
      "She has lived here for ten years.",
      "Have you ever been to Shanghai?",
      "He has just left."
    ]
  },
  {
    title: "13. 过去完成时 (Past Perfect)",
    grade: 9,
    summary: "表示在过去某时间或某动作之前已经完成的动作（过去的过去）。结构：had + done。",
    points: [
      "构成：had + 过去分词。",
      "用法：过去的过去。常与 by the time, before, after, when 连用。",
      "By the time he arrived, the train had left.",
      "否定：had not (hadn't) + done。",
      "疑问：Had + 主语 + done？"
    ],
    examples: [
      "When I got there, the movie had started.",
      "She had cleaned the room before I came.",
      "He hadn't finished his work by 8 pm.",
      "Had you eaten before he called?"
    ]
  },
  {
    title: "14. 被动语态 (Passive Voice)",
    grade: 9,
    summary: "表示主语是动作的承受者。结构：be + done（及物动词才有被动）。",
    points: [
      "构成：be + 过去分词。时态变化在 be 上体现。",
      "一般现在时：am/is/are + done。如：English is spoken in Canada.",
      "一般过去时：was/were + done。如：The house was built in 1990.",
      "一般将来时：will be + done。如：The bridge will be built next year。",
      "含情态动词：can/must + be + done。如：It must be done at once.",
      "带双宾语：give sb sth → sb is given sth / sth is given to sb。"
    ],
    examples: [
      "The letter was written by Tom.",
      "Trees are planted in spring.",
      "The work will be finished soon.",
      "This problem must be solved."
    ]
  },
  {
    title: "15. 情态动词 (Modal Verbs)",
    grade: 8,
    summary: "表示能力、许可、必须、推测等意义。后接动词原形。",
    points: [
      "can/could：能力、许可（Can you swim? Yes, I can.）。",
      "may/might：许可、推测（May I come in? It may rain.）。",
      "must：必须、肯定推测（You must finish it. He must be at home.）。",
      "should/ought to：应该（You should study hard.）。",
      "have to：不得不（客观需要，I have to go now.）。",
      "need/dare：需要/敢于。"
    ],
    examples: [
      "You must be tired after the trip.",
      "Can I borrow your pen?",
      "We should help each other.",
      "He might be at the library."
    ]
  },
  {
    title: "16. 不定式 (Infinitive)",
    grade: 8,
    summary: "to + 动词原形。可作主语、宾语、宾补、定语、状语等。",
    points: [
      "作宾语：want/decide/hope/agree + to do。如：I want to go home.",
      "作宾补：ask/tell/want sb to do。如：He asked me to help him.",
      "作目的状语：I came here to learn English.",
      "作主语：To learn English is important. (= It is important to learn English.)",
      "省略 to：make/let/have sb do；had better do；why not do。"
    ],
    examples: [
      "She decided to buy a new car.",
      "The teacher told us to read the book.",
      "I went to the shop to buy some milk.",
      "Let me help you with the box."
    ]
  },
  {
    title: "17. 宾语从句 (Object Clause)",
    grade: 9,
    summary: "在复合句中作宾语的从句。引导词、语序、时态是三大考点。",
    points: [
      "引导词：that（陈述句，可省略）；if/whether（一般疑问句）；wh- 词（特殊疑问句）。",
      "语序：宾语从句必须用陈述语序（主语 + 谓语）。",
      "时态呼应：主句现在时，从句按实际情况；主句过去时，从句改为相应过去时态。",
      "I don't know if he will come.",
      "Could you tell me where the post office is?"
    ],
    examples: [
      "He said (that) he was tired.",
      "I wonder if she likes apples.",
      "Do you know where he lives?",
      "She asked what time it was."
    ]
  },
  {
    title: "18. 定语从句 (Attributive Clause)",
    grade: 9,
    summary: "修饰名词或代词的从句，被修饰的词叫先行词。关系词在从句中作成分。",
    points: [
      "关系代词：who（人，主格）；whom（人，宾格）；whose（所属）；which（物）；that（人或物）。",
      "关系副词：when（时间）；where（地点）；why（原因）。",
      "只能用 that：先行词被最高级、序数词、the only、everything 等修饰时。",
      "只能用 which：逗号后非限制性定语从句。",
      "The book that/which I bought is interesting."
    ],
    examples: [
      "The man who is talking is my teacher.",
      "This is the house where I lived.",
      "I know the boy whose father is a doctor.",
      "The movie that we saw was great."
    ]
  },
  {
    title: "19. 状语从句 (Adverbial Clause)",
    grade: 9,
    summary: "在复合句中作状语的从句，修饰主句。分为时间、条件、原因、结果、目的、让步等。",
    points: [
      "时间状语从句：when, while, as, before, after, until, as soon as。",
      "条件状语从句：if, unless (= if not), as long as。主将从现。",
      "原因状语从句：because, since, as。",
      "结果状语从句：so...that, such...that。",
      "目的状语从句：so that, in order that。",
      "让步状语从句：though/although, even if, no matter what。"
    ],
    examples: [
      "When I got home, Mom was cooking.",
      "If it rains tomorrow, we'll stay at home.",
      "He didn't go to school because he was ill.",
      "It was so cold that the river froze."
    ]
  },
  {
    title: "20. 主谓一致 & 特殊句型",
    grade: 9,
    summary: "主语和谓语在人称和数上保持一致。以及 there be、感叹句、反意疑问等特殊句型。",
    points: [
      "主谓一致：就近原则（There is a book and two pens.）；意义一致（The news is exciting.）。",
      "there be 句型：There is/are + 某物 + 某地（就近原则）。",
      "感叹句：What + (a/an) + adj. + n. + 主谓！How + adj./adv. + 主谓！",
      "反意疑问句：前肯后否，前否后肯（He is a teacher, isn't he?）。",
      "直接引语变间接引语：人称、时态、指示词相应变化。"
    ],
    examples: [
      "There is a pen and two books on the desk.",
      "What a beautiful day it is!",
      "How fast he runs!",
      "You can swim, can't you?",
      "She said, 'I am happy.' → She said she was happy."
    ]
  }
];

/**
 * 语法挑战题库（选择题）
 * 字段：q(题干), options(选项数组), answer(正确答案索引 0-3), explain(解析), grade
 */
const GRAMMAR_QUIZ = [
  {q:"Look! The boys ___ football on the playground.",options:["play","plays","are playing","played"],answer:2,explain:"Look! 提示现在进行时，结构 be+doing。",grade:7},
  {q:"My sister ___ to school every day.",options:["go","goes","going","went"],answer:1,explain:"every day 表示一般现在时，第三人称单数加 es。",grade:7},
  {q:"There ___ an apple and two bananas on the table.",options:["is","are","was","were"],answer:0,explain:"There be 就近原则，离 be 最近的是单数 apple。",grade:7},
  {q:"___ English book is this? It's mine.",options:["Who","Whose","What","Which"],answer:1,explain:"问所属关系用 whose。",grade:7},
  {q:"I have two ___ and some ___ in my bag.",options:["pen, pencil","pens, pencils","pens, pencil","pen, pencils"],answer:1,explain:"two 后接复数，some 后可数名词也用复数。",grade:7},
  {q:"Tom is ___ than Mike.",options:["tall","taller","tallest","the tallest"],answer:1,explain:"than 提示比较级，tall→taller。",grade:7},
  {q:"She is ___ girl in our class.",options:["tall","taller","tallest","the tallest"],answer:3,explain:"in our class 范围提示最高级，加 the。",grade:7},
  {q:"___ do you go to school? By bus.",options:["What","How","When","Where"],answer:1,explain:"问交通方式用 How。",grade:7},
  {q:"He ___ his homework yesterday evening.",options:["do","does","did","doing"],answer:2,explain:"yesterday evening 提示一般过去时。",grade:8},
  {q:"They ___ a party next Saturday.",options:["have","had","will have","are having"],answer:2,explain:"next Saturday 提示一般将来时。",grade:8},
  {q:"I ___ TV when he came in.",options:["watch","watched","was watching","am watching"],answer:2,explain:"when 从句过去时，主句用过去进行时。",grade:8},
  {q:"She ___ her keys, so she can't open the door.",options:["loses","lost","has lost","is losing"],answer:2,explain:"丢了钥匙对现在的影响，用现在完成时。",grade:8},
  {q:"You ___ stop when the traffic light is red.",options:["can","may","must","need"],answer:2,explain:"红灯必须停，用 must。",grade:8},
  {q:"The teacher told us ___ in class.",options:["not talk","don't talk","not to talk","to not talk"],answer:2,explain:"tell sb not to do sth。",grade:8},
  {q:"He decided ___ a new computer.",options:["buy","buying","to buy","bought"],answer:2,explain:"decide to do sth。",grade:8},
  {q:"This song is ___ than that one.",options:["popular","more popular","most popular","the most popular"],answer:1,explain:"than 提示比较级，多音节词加 more。",grade:8},
  {q:"The classroom ___ every day.",options:["cleans","cleaned","is cleaned","is cleaning"],answer:2,explain:"教室被打扫，被动语态 be+done。",grade:8},
  {q:"I have lived here ___ 2010.",options:["for","in","since","from"],answer:2,explain:"加时间点用 since，加段时间用 for。",grade:8},
  {q:"Could you tell me ___?",options:["where is the post office","where the post office is","where was the post office","the post office is where"],answer:1,explain:"宾语从句用陈述语序。",grade:9},
  {q:"Do you know the man ___ is talking to our teacher?",options:["who","which","whose","whom"],answer:0,explain:"先行词是人，从句缺主语用 who。",grade:9},
  {q:"This is the house ___ I lived last year.",options:["which","that","where","who"],answer:2,explain:"先行词是地点，从句不缺主宾，用关系副词 where。",grade:9},
  {q:"He didn't go to school ___ he was ill.",options:["so","but","because","if"],answer:2,explain:"表原因用 because。",grade:9},
  {q:"___ it rains tomorrow, we'll stay at home.",options:["When","If","Because","Though"],answer:1,explain:"if 引导条件状语从句，主将从现。",grade:9},
  {q:"The book ___ by him last year.",options:["writes","wrote","was written","is written"],answer:2,explain:"书被写，过去时的被动 was+done。",grade:9},
  {q:"By the time I got there, the train ___.",options:["left","has left","had left","leaves"],answer:2,explain:"过去的过去，用过去完成时。",grade:9},
  {q:"I don't know ___ he will come or not.",options:["that","what","if","whether"],answer:3,explain:"or not 提示用 whether。",grade:9},
  {q:"He is ___ a clever boy ___ everyone likes him.",options:["so, that","such, that","too, to","very, that"],answer:1,explain:"such+a+adj.+n.+that 结构。",grade:9},
  {q:"The work ___ in two days.",options:["finishes","finished","will be finished","is finished"],answer:2,explain:"in two days 提示将来时被动。",grade:9},
  {q:"___ beautiful the flower is!",options:["What","What a","How","How a"],answer:2,explain:"How + adj. + 主谓。",grade:9},
  {q:"She has never been to Beijing, ___?",options:["has she","hasn't she","does she","doesn't she"],answer:0,explain:"前否后肯，never 是否定词，反问用 has she。",grade:9},
  {q:"English ___ in many countries around the world.",options:["speaks","spoke","is spoken","is speaking"],answer:2,explain:"英语被说，一般现在时被动。",grade:9},
  {q:"He asked me ___ I had finished the work.",options:["that","what","if","which"],answer:2,explain:"一般疑问句变宾语从句用 if/whether。",grade:9},
  {q:"___ nice weather it is today!",options:["What","What a","How","How a"],answer:0,explain:"weather 不可数，用 What + adj. + n.。",grade:9},
  {q:"Neither he nor I ___ a student.",options:["is","am","are","be"],answer:1,explain:"neither...nor 就近原则，靠近 I 用 am。",grade:9},
  {q:"The number of students in our school ___ over 1000.",options:["is","are","has","have"],answer:0,explain:"the number of... 作主语，谓语用单数。",grade:9}
];

if (typeof window !== 'undefined') {
  window.GRAMMAR = GRAMMAR;
  window.GRAMMAR_QUIZ = GRAMMAR_QUIZ;
}
