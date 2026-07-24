/**
 * 初中英语词库数据 (扩充版)
 * 总计 4011 词 (无重复)
 * CORE: 含完整音标和例句的核心词
 * EXTRA: 紧凑格式 [en, cn, grade]
 */
const WORDS_CORE = [
  {
    "en": "hello",
    "phonetic": "/həˈləʊ/",
    "pos": "int.",
    "cn": "你好",
    "example": "Hello, everyone!",
    "grade": 7
  },
  {
    "en": "good",
    "phonetic": "/ɡʊd/",
    "pos": "adj.",
    "cn": "好的",
    "example": "He is a good student.",
    "grade": 7
  },
  {
    "en": "morning",
    "phonetic": "/ˈmɔːnɪŋ/",
    "pos": "n.",
    "cn": "早晨；上午",
    "example": "Good morning, teacher!",
    "grade": 7
  },
  {
    "en": "name",
    "phonetic": "/neɪm/",
    "pos": "n.",
    "cn": "名字",
    "example": "My name is Li Ming.",
    "grade": 7
  },
  {
    "en": "this",
    "phonetic": "/ðɪs/",
    "pos": "pron.",
    "cn": "这；这个",
    "example": "This is my friend.",
    "grade": 7
  },
  {
    "en": "meet",
    "phonetic": "/miːt/",
    "pos": "v.",
    "cn": "遇见；相逢",
    "example": "Nice to meet you.",
    "grade": 7
  },
  {
    "en": "too",
    "phonetic": "/tuː/",
    "pos": "adv.",
    "cn": "也；太",
    "example": "I like apples, too.",
    "grade": 7
  },
  {
    "en": "thank",
    "phonetic": "/θæŋk/",
    "pos": "v.",
    "cn": "谢谢",
    "example": "Thank you very much.",
    "grade": 7
  },
  {
    "en": "teacher",
    "phonetic": "/ˈtiːtʃə/",
    "pos": "n.",
    "cn": "老师",
    "example": "Our teacher is kind.",
    "grade": 7
  },
  {
    "en": "friend",
    "phonetic": "/frend/",
    "pos": "n.",
    "cn": "朋友",
    "example": "She is my best friend.",
    "grade": 7
  },
  {
    "en": "school",
    "phonetic": "/skuːl/",
    "pos": "n.",
    "cn": "学校",
    "example": "I go to school by bus.",
    "grade": 7
  },
  {
    "en": "student",
    "phonetic": "/ˈstjuːdnt/",
    "pos": "n.",
    "cn": "学生",
    "example": "He is a new student.",
    "grade": 7
  },
  {
    "en": "book",
    "phonetic": "/bʊk/",
    "pos": "n.",
    "cn": "书；本子",
    "example": "This book is interesting.",
    "grade": 7
  },
  {
    "en": "pen",
    "phonetic": "/pen/",
    "pos": "n.",
    "cn": "钢笔",
    "example": "I have a blue pen.",
    "grade": 7
  },
  {
    "en": "pencil",
    "phonetic": "/ˈpensl/",
    "pos": "n.",
    "cn": "铅笔",
    "example": "My pencil is broken.",
    "grade": 7
  },
  {
    "en": "bag",
    "phonetic": "/bæɡ/",
    "pos": "n.",
    "cn": "书包；袋子",
    "example": "My bag is heavy.",
    "grade": 7
  },
  {
    "en": "class",
    "phonetic": "/klɑːs/",
    "pos": "n.",
    "cn": "班级；课",
    "example": "We have English class.",
    "grade": 7
  },
  {
    "en": "grade",
    "phonetic": "/ɡreɪd/",
    "pos": "n.",
    "cn": "年级",
    "example": "I am in Grade Seven.",
    "grade": 7
  },
  {
    "en": "father",
    "phonetic": "/ˈfɑːðə/",
    "pos": "n.",
    "cn": "父亲",
    "example": "My father is a doctor.",
    "grade": 7
  },
  {
    "en": "mother",
    "phonetic": "/ˈmʌðə/",
    "pos": "n.",
    "cn": "母亲",
    "example": "Her mother cooks well.",
    "grade": 7
  },
  {
    "en": "brother",
    "phonetic": "/ˈbrʌðə/",
    "pos": "n.",
    "cn": "哥哥；弟弟",
    "example": "My brother is tall.",
    "grade": 7
  },
  {
    "en": "sister",
    "phonetic": "/ˈsɪstə/",
    "pos": "n.",
    "cn": "姐姐；妹妹",
    "example": "His sister is cute.",
    "grade": 7
  },
  {
    "en": "family",
    "phonetic": "/ˈfæməli/",
    "pos": "n.",
    "cn": "家庭",
    "example": "I love my family.",
    "grade": 7
  },
  {
    "en": "apple",
    "phonetic": "/ˈæpl/",
    "pos": "n.",
    "cn": "苹果",
    "example": "An apple a day is good.",
    "grade": 7
  },
  {
    "en": "banana",
    "phonetic": "/bəˈnɑːnə/",
    "pos": "n.",
    "cn": "香蕉",
    "example": "I like bananas.",
    "grade": 7
  },
  {
    "en": "orange",
    "phonetic": "/ˈɒrɪndʒ/",
    "pos": "n.",
    "cn": "橙子；橙色",
    "example": "The orange is sweet.",
    "grade": 7
  },
  {
    "en": "color",
    "phonetic": "/ˈkʌlə/",
    "pos": "n.",
    "cn": "颜色",
    "example": "What color is it?",
    "grade": 7
  },
  {
    "en": "red",
    "phonetic": "/red/",
    "pos": "adj.",
    "cn": "红色的",
    "example": "The rose is red.",
    "grade": 7
  },
  {
    "en": "blue",
    "phonetic": "/bluː/",
    "pos": "adj.",
    "cn": "蓝色的",
    "example": "The sky is blue.",
    "grade": 7
  },
  {
    "en": "yellow",
    "phonetic": "/ˈjeləʊ/",
    "pos": "adj.",
    "cn": "黄色的",
    "example": "The banana is yellow.",
    "grade": 7
  },
  {
    "en": "green",
    "phonetic": "/ɡriːn/",
    "pos": "adj.",
    "cn": "绿色的",
    "example": "The tree is green.",
    "grade": 7
  },
  {
    "en": "black",
    "phonetic": "/blæk/",
    "pos": "adj.",
    "cn": "黑色的",
    "example": "My hair is black.",
    "grade": 7
  },
  {
    "en": "white",
    "phonetic": "/waɪt/",
    "pos": "adj.",
    "cn": "白色的",
    "example": "The cloud is white.",
    "grade": 7
  },
  {
    "en": "small",
    "phonetic": "/smɔːl/",
    "pos": "adj.",
    "cn": "小的",
    "example": "The cat is small.",
    "grade": 7
  },
  {
    "en": "big",
    "phonetic": "/bɪɡ/",
    "pos": "adj.",
    "cn": "大的",
    "example": "The elephant is big.",
    "grade": 7
  },
  {
    "en": "long",
    "phonetic": "/lɒŋ/",
    "pos": "adj.",
    "cn": "长的",
    "example": "Her hair is long.",
    "grade": 7
  },
  {
    "en": "short",
    "phonetic": "/ʃɔːt/",
    "pos": "adj.",
    "cn": "短的；矮的",
    "example": "He is short.",
    "grade": 7
  },
  {
    "en": "happy",
    "phonetic": "/ˈhæpi/",
    "pos": "adj.",
    "cn": "高兴的",
    "example": "I am happy today.",
    "grade": 7
  },
  {
    "en": "sad",
    "phonetic": "/sæd/",
    "pos": "adj.",
    "cn": "悲伤的",
    "example": "Don't be sad.",
    "grade": 7
  },
  {
    "en": "new",
    "phonetic": "/njuː/",
    "pos": "adj.",
    "cn": "新的",
    "example": "I have a new bike.",
    "grade": 7
  },
  {
    "en": "old",
    "phonetic": "/əʊld/",
    "pos": "adj.",
    "cn": "旧的；老的",
    "example": "This house is old.",
    "grade": 7
  },
  {
    "en": "cat",
    "phonetic": "/kæt/",
    "pos": "n.",
    "cn": "猫",
    "example": "The cat is sleeping.",
    "grade": 7
  },
  {
    "en": "dog",
    "phonetic": "/dɒɡ/",
    "pos": "n.",
    "cn": "狗",
    "example": "His dog is clever.",
    "grade": 7
  },
  {
    "en": "bird",
    "phonetic": "/bɜːd/",
    "pos": "n.",
    "cn": "鸟",
    "example": "The bird can fly.",
    "grade": 7
  },
  {
    "en": "fish",
    "phonetic": "/fɪʃ/",
    "pos": "n.",
    "cn": "鱼",
    "example": "I like eating fish.",
    "grade": 7
  },
  {
    "en": "have",
    "phonetic": "/hæv/",
    "pos": "v.",
    "cn": "有；拥有",
    "example": "I have a pen.",
    "grade": 7
  },
  {
    "en": "has",
    "phonetic": "/hæz/",
    "pos": "v.",
    "cn": "有(第三人称)",
    "example": "He has a car.",
    "grade": 7
  },
  {
    "en": "do",
    "phonetic": "/duː/",
    "pos": "v.",
    "cn": "做；干",
    "example": "What do you do?",
    "grade": 7
  },
  {
    "en": "go",
    "phonetic": "/ɡəʊ/",
    "pos": "v.",
    "cn": "去",
    "example": "I go to school.",
    "grade": 7
  },
  {
    "en": "come",
    "phonetic": "/kʌm/",
    "pos": "v.",
    "cn": "来",
    "example": "Come here, please.",
    "grade": 7
  },
  {
    "en": "see",
    "phonetic": "/siː/",
    "pos": "v.",
    "cn": "看见",
    "example": "I see a bird.",
    "grade": 7
  },
  {
    "en": "look",
    "phonetic": "/lʊk/",
    "pos": "v.",
    "cn": "看",
    "example": "Look at the sky.",
    "grade": 7
  },
  {
    "en": "play",
    "phonetic": "/pleɪ/",
    "pos": "v.",
    "cn": "玩；演奏",
    "example": "Let's play football.",
    "grade": 7
  },
  {
    "en": "like",
    "phonetic": "/laɪk/",
    "pos": "v.",
    "cn": "喜欢",
    "example": "I like music.",
    "grade": 7
  },
  {
    "en": "love",
    "phonetic": "/lʌv/",
    "pos": "v.",
    "cn": "爱；热爱",
    "example": "I love my mom.",
    "grade": 7
  },
  {
    "en": "eat",
    "phonetic": "/iːt/",
    "pos": "v.",
    "cn": "吃",
    "example": "I eat breakfast.",
    "grade": 7
  },
  {
    "en": "drink",
    "phonetic": "/drɪŋk/",
    "pos": "v.",
    "cn": "喝",
    "example": "Drink some water.",
    "grade": 7
  },
  {
    "en": "run",
    "phonetic": "/rʌn/",
    "pos": "v.",
    "cn": "跑",
    "example": "He runs fast.",
    "grade": 7
  },
  {
    "en": "walk",
    "phonetic": "/wɔːk/",
    "pos": "v.",
    "cn": "走；散步",
    "example": "We walk to school.",
    "grade": 7
  },
  {
    "en": "sing",
    "phonetic": "/sɪŋ/",
    "pos": "v.",
    "cn": "唱歌",
    "example": "She sings well.",
    "grade": 7
  },
  {
    "en": "dance",
    "phonetic": "/dɑːns/",
    "pos": "v.",
    "cn": "跳舞",
    "example": "They dance happily.",
    "grade": 7
  },
  {
    "en": "read",
    "phonetic": "/riːd/",
    "pos": "v.",
    "cn": "读",
    "example": "I read books every day.",
    "grade": 7
  },
  {
    "en": "write",
    "phonetic": "/raɪt/",
    "pos": "v.",
    "cn": "写",
    "example": "Write your name here.",
    "grade": 7
  },
  {
    "en": "help",
    "phonetic": "/help/",
    "pos": "v.",
    "cn": "帮助",
    "example": "Can you help me?",
    "grade": 7
  },
  {
    "en": "want",
    "phonetic": "/wɒnt/",
    "pos": "v.",
    "cn": "想要",
    "example": "I want an apple.",
    "grade": 7
  },
  {
    "en": "need",
    "phonetic": "/niːd/",
    "pos": "v.",
    "cn": "需要",
    "example": "I need some help.",
    "grade": 7
  },
  {
    "en": "buy",
    "phonetic": "/baɪ/",
    "pos": "v.",
    "cn": "买",
    "example": "I buy a book.",
    "grade": 7
  },
  {
    "en": "time",
    "phonetic": "/taɪm/",
    "pos": "n.",
    "cn": "时间",
    "example": "What time is it?",
    "grade": 7
  },
  {
    "en": "day",
    "phonetic": "/deɪ/",
    "pos": "n.",
    "cn": "天；日子",
    "example": "Have a good day!",
    "grade": 7
  },
  {
    "en": "week",
    "phonetic": "/wiːk/",
    "pos": "n.",
    "cn": "星期；周",
    "example": "See you next week.",
    "grade": 7
  },
  {
    "en": "year",
    "phonetic": "/jɪə/",
    "pos": "n.",
    "cn": "年",
    "example": "Happy New Year!",
    "grade": 7
  },
  {
    "en": "today",
    "phonetic": "/təˈdeɪ/",
    "pos": "adv.",
    "cn": "今天",
    "example": "Today is sunny.",
    "grade": 7
  },
  {
    "en": "now",
    "phonetic": "/naʊ/",
    "pos": "adv.",
    "cn": "现在",
    "example": "I am busy now.",
    "grade": 7
  },
  {
    "en": "here",
    "phonetic": "/hɪə/",
    "pos": "adv.",
    "cn": "这里",
    "example": "Come here.",
    "grade": 7
  },
  {
    "en": "there",
    "phonetic": "/ðeə/",
    "pos": "adv.",
    "cn": "那里",
    "example": "He is over there.",
    "grade": 7
  },
  {
    "en": "home",
    "phonetic": "/həʊm/",
    "pos": "n.",
    "cn": "家",
    "example": "I go home at 5.",
    "grade": 7
  },
  {
    "en": "room",
    "phonetic": "/ruːm/",
    "pos": "n.",
    "cn": "房间",
    "example": "My room is clean.",
    "grade": 7
  },
  {
    "en": "water",
    "phonetic": "/ˈwɔːtə/",
    "pos": "n.",
    "cn": "水",
    "example": "I drink water.",
    "grade": 7
  },
  {
    "en": "milk",
    "phonetic": "/mɪlk/",
    "pos": "n.",
    "cn": "牛奶",
    "example": "I drink milk.",
    "grade": 7
  },
  {
    "en": "bread",
    "phonetic": "/bred/",
    "pos": "n.",
    "cn": "面包",
    "example": "I eat bread.",
    "grade": 7
  },
  {
    "en": "egg",
    "phonetic": "/eɡ/",
    "pos": "n.",
    "cn": "鸡蛋",
    "example": "I eat an egg.",
    "grade": 7
  },
  {
    "en": "rice",
    "phonetic": "/raɪs/",
    "pos": "n.",
    "cn": "米饭",
    "example": "I like rice.",
    "grade": 7
  },
  {
    "en": "food",
    "phonetic": "/fuːd/",
    "pos": "n.",
    "cn": "食物",
    "example": "The food is good.",
    "grade": 7
  },
  {
    "en": "car",
    "phonetic": "/kɑː/",
    "pos": "n.",
    "cn": "汽车",
    "example": "His car is fast.",
    "grade": 7
  },
  {
    "en": "bus",
    "phonetic": "/bʌs/",
    "pos": "n.",
    "cn": "公共汽车",
    "example": "I take the bus.",
    "grade": 7
  },
  {
    "en": "boy",
    "phonetic": "/bɔɪ/",
    "pos": "n.",
    "cn": "男孩",
    "example": "The boy is playing.",
    "grade": 7
  },
  {
    "en": "girl",
    "phonetic": "/ɡɜːl/",
    "pos": "n.",
    "cn": "女孩",
    "example": "The girl is singing.",
    "grade": 7
  },
  {
    "en": "man",
    "phonetic": "/mæn/",
    "pos": "n.",
    "cn": "男人",
    "example": "The man is tall.",
    "grade": 7
  },
  {
    "en": "woman",
    "phonetic": "/ˈwʊmən/",
    "pos": "n.",
    "cn": "女人",
    "example": "The woman is kind.",
    "grade": 7
  },
  {
    "en": "sun",
    "phonetic": "/sʌn/",
    "pos": "n.",
    "cn": "太阳",
    "example": "The sun is bright.",
    "grade": 7
  },
  {
    "en": "moon",
    "phonetic": "/muːn/",
    "pos": "n.",
    "cn": "月亮",
    "example": "The moon is round.",
    "grade": 7
  },
  {
    "en": "star",
    "phonetic": "/stɑː/",
    "pos": "n.",
    "cn": "星星",
    "example": "The stars shine.",
    "grade": 7
  },
  {
    "en": "sky",
    "phonetic": "/skaɪ/",
    "pos": "n.",
    "cn": "天空",
    "example": "The sky is blue.",
    "grade": 7
  },
  {
    "en": "tree",
    "phonetic": "/triː/",
    "pos": "n.",
    "cn": "树",
    "example": "The tree is tall.",
    "grade": 7
  },
  {
    "en": "flower",
    "phonetic": "/ˈflaʊə/",
    "pos": "n.",
    "cn": "花",
    "example": "The flower is beautiful.",
    "grade": 7
  },
  {
    "en": "park",
    "phonetic": "/pɑːk/",
    "pos": "n.",
    "cn": "公园",
    "example": "We play in the park.",
    "grade": 7
  },
  {
    "en": "city",
    "phonetic": "/ˈsɪti/",
    "pos": "n.",
    "cn": "城市",
    "example": "Beijing is a big city.",
    "grade": 7
  },
  {
    "en": "music",
    "phonetic": "/ˈmjuːzɪk/",
    "pos": "n.",
    "cn": "音乐",
    "example": "I love music.",
    "grade": 7
  },
  {
    "en": "song",
    "phonetic": "/sɒŋ/",
    "pos": "n.",
    "cn": "歌曲",
    "example": "Sing a song.",
    "grade": 7
  },
  {
    "en": "game",
    "phonetic": "/ɡeɪm/",
    "pos": "n.",
    "cn": "游戏",
    "example": "Let's play a game.",
    "grade": 7
  },
  {
    "en": "football",
    "phonetic": "/ˈfʊtbɔːl/",
    "pos": "n.",
    "cn": "足球",
    "example": "Play football.",
    "grade": 7
  },
  {
    "en": "think",
    "phonetic": "/θɪŋk/",
    "pos": "v.",
    "cn": "想；认为",
    "example": "I think so.",
    "grade": 7
  },
  {
    "en": "know",
    "phonetic": "/nəʊ/",
    "pos": "v.",
    "cn": "知道",
    "example": "I know the answer.",
    "grade": 7
  },
  {
    "en": "say",
    "phonetic": "/seɪ/",
    "pos": "v.",
    "cn": "说",
    "example": "What did he say?",
    "grade": 7
  },
  {
    "en": "tell",
    "phonetic": "/tel/",
    "pos": "v.",
    "cn": "告诉",
    "example": "Tell me a story.",
    "grade": 7
  },
  {
    "en": "ask",
    "phonetic": "/ɑːsk/",
    "pos": "v.",
    "cn": "问",
    "example": "May I ask a question?",
    "grade": 7
  },
  {
    "en": "answer",
    "phonetic": "/ˈɑːnsə/",
    "pos": "n.",
    "cn": "回答",
    "example": "Answer the question.",
    "grade": 7
  },
  {
    "en": "work",
    "phonetic": "/wɜːk/",
    "pos": "n.",
    "cn": "工作",
    "example": "I work hard.",
    "grade": 7
  },
  {
    "en": "doctor",
    "phonetic": "/ˈdɒktə/",
    "pos": "n.",
    "cn": "医生",
    "example": "The doctor is kind.",
    "grade": 7
  },
  {
    "en": "open",
    "phonetic": "/ˈəʊpən/",
    "pos": "v.",
    "cn": "打开",
    "example": "Open the book.",
    "grade": 7
  },
  {
    "en": "close",
    "phonetic": "/kləʊz/",
    "pos": "v.",
    "cn": "关闭",
    "example": "Close the door.",
    "grade": 7
  },
  {
    "en": "put",
    "phonetic": "/pʊt/",
    "pos": "v.",
    "cn": "放",
    "example": "Put it here.",
    "grade": 7
  },
  {
    "en": "take",
    "phonetic": "/teɪk/",
    "pos": "v.",
    "cn": "拿；带",
    "example": "Take this book.",
    "grade": 7
  },
  {
    "en": "give",
    "phonetic": "/ɡɪv/",
    "pos": "v.",
    "cn": "给",
    "example": "Give me a pen.",
    "grade": 7
  },
  {
    "en": "make",
    "phonetic": "/meɪk/",
    "pos": "v.",
    "cn": "制作",
    "example": "Make a cake.",
    "grade": 7
  },
  {
    "en": "because",
    "phonetic": "/bɪˈkɒz/",
    "pos": "conj.",
    "cn": "因为",
    "example": "I'm happy because I won.",
    "grade": 7
  },
  {
    "en": "what",
    "phonetic": "/wɒt/",
    "pos": "pron.",
    "cn": "什么",
    "example": "What is this?",
    "grade": 7
  },
  {
    "en": "who",
    "phonetic": "/huː/",
    "pos": "pron.",
    "cn": "谁",
    "example": "Who is he?",
    "grade": 7
  },
  {
    "en": "where",
    "phonetic": "/weə/",
    "pos": "adv.",
    "cn": "哪里",
    "example": "Where are you?",
    "grade": 7
  },
  {
    "en": "when",
    "phonetic": "/wen/",
    "pos": "adv.",
    "cn": "什么时候",
    "example": "When do you go?",
    "grade": 7
  },
  {
    "en": "why",
    "phonetic": "/waɪ/",
    "pos": "adv.",
    "cn": "为什么",
    "example": "Why are you sad?",
    "grade": 7
  },
  {
    "en": "how",
    "phonetic": "/haʊ/",
    "pos": "adv.",
    "cn": "怎样",
    "example": "How are you?",
    "grade": 7
  },
  {
    "en": "many",
    "phonetic": "/ˈmeni/",
    "pos": "adj.",
    "cn": "许多",
    "example": "How many apples?",
    "grade": 7
  },
  {
    "en": "much",
    "phonetic": "/mʌtʃ/",
    "pos": "adj.",
    "cn": "许多",
    "example": "How much water?",
    "grade": 7
  },
  {
    "en": "some",
    "phonetic": "/sʌm/",
    "pos": "adj.",
    "cn": "一些",
    "example": "Some students are here.",
    "grade": 7
  },
  {
    "en": "any",
    "phonetic": "/ˈeni/",
    "pos": "adj.",
    "cn": "一些；任何",
    "example": "Do you have any money?",
    "grade": 7
  },
  {
    "en": "please",
    "phonetic": "/pliːz/",
    "pos": "adv.",
    "cn": "请",
    "example": "Sit down, please.",
    "grade": 7
  },
  {
    "en": "sorry",
    "phonetic": "/ˈsɒri/",
    "pos": "adj.",
    "cn": "对不起的",
    "example": "I'm sorry.",
    "grade": 7
  },
  {
    "en": "welcome",
    "phonetic": "/ˈwelkəm/",
    "pos": "int.",
    "cn": "欢迎",
    "example": "Welcome to China.",
    "grade": 7
  },
  {
    "en": "nice",
    "phonetic": "/naɪs/",
    "pos": "adj.",
    "cn": "好的；美好的",
    "example": "Nice to meet you.",
    "grade": 7
  },
  {
    "en": "beautiful",
    "phonetic": "/ˈbjuːtɪfl/",
    "pos": "adj.",
    "cn": "美丽的",
    "example": "A beautiful flower.",
    "grade": 7
  },
  {
    "en": "hot",
    "phonetic": "/hɒt/",
    "pos": "adj.",
    "cn": "热的",
    "example": "The water is hot.",
    "grade": 7
  },
  {
    "en": "cold",
    "phonetic": "/kəʊld/",
    "pos": "adj.",
    "cn": "冷的",
    "example": "It is cold today.",
    "grade": 7
  },
  {
    "en": "spring",
    "phonetic": "/sprɪŋ/",
    "pos": "n.",
    "cn": "春天",
    "example": "Spring is warm.",
    "grade": 7
  },
  {
    "en": "summer",
    "phonetic": "/ˈsʌmə/",
    "pos": "n.",
    "cn": "夏天",
    "example": "Summer is hot.",
    "grade": 7
  },
  {
    "en": "autumn",
    "phonetic": "/ˈɔːtəm/",
    "pos": "n.",
    "cn": "秋天",
    "example": "Autumn is cool.",
    "grade": 7
  },
  {
    "en": "winter",
    "phonetic": "/ˈwɪntə/",
    "pos": "n.",
    "cn": "冬天",
    "example": "Winter is cold.",
    "grade": 7
  },
  {
    "en": "sunny",
    "phonetic": "/ˈsʌni/",
    "pos": "adj.",
    "cn": "晴朗的",
    "example": "It's a sunny day.",
    "grade": 7
  },
  {
    "en": "rainy",
    "phonetic": "/ˈreɪni/",
    "pos": "adj.",
    "cn": "下雨的",
    "example": "It's a rainy day.",
    "grade": 7
  },
  {
    "en": "windy",
    "phonetic": "/ˈwɪndi/",
    "pos": "adj.",
    "cn": "有风的",
    "example": "It's windy today.",
    "grade": 7
  },
  {
    "en": "cloudy",
    "phonetic": "/ˈklaʊdi/",
    "pos": "adj.",
    "cn": "多云的",
    "example": "It's cloudy.",
    "grade": 7
  },
  {
    "en": "Monday",
    "phonetic": "/ˈmʌndeɪ/",
    "pos": "n.",
    "cn": "星期一",
    "example": "Today is Monday.",
    "grade": 7
  },
  {
    "en": "Tuesday",
    "phonetic": "/ˈtjuːzdeɪ/",
    "pos": "n.",
    "cn": "星期二",
    "example": "See you Tuesday.",
    "grade": 7
  },
  {
    "en": "Wednesday",
    "phonetic": "/ˈwenzdeɪ/",
    "pos": "n.",
    "cn": "星期三",
    "example": "Wednesday is busy.",
    "grade": 7
  },
  {
    "en": "Thursday",
    "phonetic": "/ˈθɜːzdeɪ/",
    "pos": "n.",
    "cn": "星期四",
    "example": "Thursday is free.",
    "grade": 7
  },
  {
    "en": "Friday",
    "phonetic": "/ˈfraɪdeɪ/",
    "pos": "n.",
    "cn": "星期五",
    "example": "Friday is happy.",
    "grade": 7
  },
  {
    "en": "Saturday",
    "phonetic": "/ˈsætədeɪ/",
    "pos": "n.",
    "cn": "星期六",
    "example": "Saturday is fun.",
    "grade": 7
  },
  {
    "en": "Sunday",
    "phonetic": "/ˈsʌndeɪ/",
    "pos": "n.",
    "cn": "星期日",
    "example": "Sunday is rest.",
    "grade": 7
  }
];

const WORDS_EXTRA = [["hi","嗨",7],["fine","好的",7],["great","伟大的",7],["OK","好的",7],["map","地图",7],["ruler","尺子",7],["eraser","橡皮",7],["chair","椅子",7],["table","桌子",7],["door","门",7],["window","窗户",7],["bed","床",7],["box","盒子",7],["shirt","衬衫",7],["shoe","鞋",7],["hat","帽子",7],["ball","球",7],["bike","自行车",7],["train","火车",7],["plane","飞机",7],["baby","婴儿",7],["child","孩子",7],["people","人们",7],["parent","父母",7],["grandfather","祖父",7],["grandmother","祖母",7],["night","夜晚",7],["afternoon","下午",7],["evening","晚上",7],["mountain","山",7],["river","河",7],["country","国家",7],["world","世界",7],["picture","图片",7],["photo","照片",7],["sport","运动",7],["basketball","篮球",7],["swim","游泳",7],["jump","跳",7],["fly","飞",7],["thing","事情",7],["way","方法",7],["place","地方",7],["job","工作",7],["nurse","护士",7],["farmer","农民",7],["driver","司机",7],["cook","烹饪",7],["let","让",7],["and","和",7],["or","或者",7],["but","但是",7],["if","如果",7],["so","所以",7],["which","哪个",7],["all","全部",7],["every","每个",7],["very","非常",7],["goodbye","再见",7],["bye","再见",7],["well","好地",7],["smart","聪明的",7],["kind","善良的",7],["funny","有趣的",7],["warm","温暖的",7],["cool","凉爽的",7],["snowy","下雪的",7],["ability","能力",8],["able","能够的",8],["about","关于",8],["above","在...上方",8],["accept","接受",8],["across","横过",8],["action","行动",8],["active","积极的",8],["activity","活动",8],["advice","建议",8],["afraid","害怕的",8],["after","在...之后",8],["again","再次",8],["against","反对",8],["age","年龄",8],["ago","以前",8],["agree","同意",8],["air","空气",8],["airport","机场",8],["alive","活着的",8],["allow","允许",8],["almost","几乎",8],["alone","单独的",8],["along","沿着",8],["already","已经",8],["also","也",8],["although","尽管",8],["always","总是",8],["among","在...之中",8],["angry","生气的",8],["animal","动物",8],["another","另一个",8],["anyone","任何人",8],["anything","任何事",8],["anywhere","任何地方",8],["apply","申请",8],["area","地区",8],["arm","手臂",8],["army","军队",8],["around","周围",8],["arrive","到达",8],["art","艺术",8],["article","文章",8],["artist","艺术家",8],["asleep","睡着的",8],["attention","注意",8],["aunt","姑母",8],["available","可获得的",8],["awake","醒着的",8],["away","离开",8],["background","背景",8],["bad","坏的",8],["badly","坏地",8],["balance","平衡",8],["bank","银行",8],["base","基础",8],["basic","基本的",8],["basket","篮子",8],["bath","洗澡",8],["bathroom","浴室",8],["beach","海滩",8],["bear","熊",8],["beat","打败",8],["become","变成",8],["bedroom","卧室",8],["beef","牛肉",8],["before","在...之前",8],["begin","开始",8],["beginning","开始",8],["behind","在...后面",8],["believe","相信",8],["bell","铃",8],["belong","属于",8],["below","在...下面",8],["beside","在...旁边",8],["best","最好的",8],["better","更好的",8],["between","在...之间",8],["beyond","超过",8],["bill","账单",8],["birth","出生",8],["birthday","生日",8],["bit","一点",8],["blackboard","黑板",8],["block","街区",8],["blood","血",8],["blow","吹",8],["board","木板",8],["boat","船",8],["body","身体",8],["boil","煮沸",8],["bookshop","书店",8],["bored","厌倦的",8],["boring","无聊的",8],["born","出生",8],["borrow","借",8],["boss","老板",8],["both","两者",8],["bottle","瓶子",8],["bottom","底部",8],["bowl","碗",8],["brain","大脑",8],["brave","勇敢的",8],["break","打破",8],["breakfast","早餐",8],["breathe","呼吸",8],["bridge","桥",8],["bright","明亮的",8],["bring","带来",8],["broad","宽广的",8],["broken","破碎的",8],["brown","棕色的",8],["brush","刷子",8],["build","建造",8],["building","建筑物",8],["business","生意",8],["busy","忙碌的",8],["butter","黄油",8],["button","按钮",8],["cabbage","卷心菜",8],["cage","笼子",8],["cake","蛋糕",8],["call","呼叫",8],["camera","照相机",8],["camp","露营",8],["can","能",8],["candle","蜡烛",8],["candy","糖果",8],["cap","帽子",8],["capital","首都",8],["captain","队长",8],["card","卡片",8],["care","关心",8],["careful","小心的",8],["careless","粗心的",8],["carrot","胡萝卜",8],["carry","携带",8],["cartoon","卡通",8],["case","情况",8],["cash","现金",8],["catch","抓住",8],["cause","原因",8],["celebrate","庆祝",8],["century","世纪",8],["certain","确定的",8],["certainly","当然",8],["chance","机会",8],["change","改变",8],["channel","频道",8],["cheap","便宜的",8],["check","检查",8],["cheer","欢呼",8],["cheese","奶酪",8],["chess","象棋",8],["chicken","鸡肉",8],["children","孩子们",8],["Chinese","中文",8],["chocolate","巧克力",8],["choice","选择",8],["choose","选择",8],["chopsticks","筷子",8],["Christmas","圣诞节",8],["church","教堂",8],["cinema","电影院",8],["circle","圆圈",8],["classmate","同学",8],["classroom","教室",8],["clean","干净的",8],["clear","清楚的",8],["clever","聪明的",8],["click","点击",8],["climate","气候",8],["climb","爬",8],["clock","钟",8],["cloud","云",8],["club","俱乐部",8],["coach","教练",8],["coat","外套",8],["coffee","咖啡",8],["coin","硬币",8],["collect","收集",8],["college","大学",8],["comfortable","舒适的",8],["common","常见的",8],["company","公司",8],["compare","比较",8],["complete","完成",8],["computer","电脑",8],["concert","音乐会",8],["condition","条件",8],["confident","自信的",8],["connect","连接",8],["consider","考虑",8],["continue","继续",8],["control","控制",8],["convenient","方便的",8],["conversation","对话",8],["cooker","炊具",8],["cookie","饼干",8],["copy","复制",8],["corn","玉米",8],["corner","角落",8],["correct","正确的",8],["cost","花费",8],["cotton","棉花",8],["cough","咳嗽",8],["could","能",8],["count","数",8],["countryside","乡村",8],["course","课程",8],["cousin","表亲",8],["cover","覆盖",8],["cow","母牛",8],["crazy","疯狂的",8],["cream","奶油",8],["create","创造",8],["cross","穿过",8],["cry","哭",8],["culture","文化",8],["cup","杯子",8],["cure","治愈",8],["curious","好奇的",8],["custom","习俗",8],["customer","顾客",8],["cut","切",8],["daily","每日的",8],["danger","危险",8],["dangerous","危险的",8],["dare","敢",8],["dark","黑暗的",8],["date","日期",8],["daughter","女儿",8],["dead","死的",8],["deaf","聋的",8],["deal","处理",8],["dear","亲爱的",8],["death","死亡",8],["December","十二月",8],["decide","决定",8],["decision","决定",8],["deep","深的",8],["deer","鹿",8],["delicious","美味的",8],["describe","描述",8],["desk","书桌",8],["develop","发展",8],["dialogue","对话",8],["diary","日记",8],["dictionary","字典",8],["die","死",8],["difference","不同",8],["different","不同的",8],["difficult","困难的",8],["dig","挖",8],["dining","进餐",8],["dinner","晚餐",8],["dirty","脏的",8],["discover","发现",8],["discuss","讨论",8],["disease","疾病",8],["dish","盘子",8],["divide","分开",8],["document","文件",8],["doll","娃娃",8],["dollar","美元",8],["double","双倍的",8],["doubt","怀疑",8],["down","向下",8],["downstairs","楼下",8],["dozen","一打",8],["draw","画",8],["dream","梦想",8],["dress","连衣裙",8],["drive","驾驶",8],["drop","落下",8],["drug","药",8],["drum","鼓",8],["dry","干的",8],["duck","鸭子",8],["dumpling","饺子",8],["during","在...期间",8],["duty","责任",8],["each","每个",8],["ear","耳朵",8],["early","早地",8],["earth","地球",8],["east","东方",8],["easy","容易的",8],["education","教育",8],["effect","影响",8],["effort","努力",8],["eighteen","十八",8],["eighty","八十",8],["either","任一",8],["elder","年长的",8],["electric","电的",8],["elephant","大象",8],["eleven","十一",8],["else","其他的",8],["e-mail","电子邮件",8],["empty","空的",8],["end","结束",8],["enemy","敌人",8],["energy","能量",8],["engineer","工程师",8],["England","英国",8],["English","英语",8],["enjoy","享受",8],["enough","足够的",8],["enter","进入",8],["environment","环境",8],["especially","特别地",8],["Europe","欧洲",8],["European","欧洲的",8],["even","甚至",8],["event","事件",8],["ever","曾经",8],["everybody","每人",8],["everyday","日常的",8],["everyone","每人",8],["everything","一切",8],["everywhere","到处",8],["exact","确切的",8],["exam","考试",8],["examine","检查",8],["example","例子",8],["excellent","优秀的",8],["except","除...之外",8],["excited","兴奋的",8],["exciting","令人兴奋的",8],["excuse","原谅",8],["exercise","锻炼",8],["exhibit","展览",8],["exist","存在",8],["expect","期待",8],["expensive","昂贵的",8],["experience","经验",8],["experiment","实验",8],["explain","解释",8],["express","表达",8],["eye","眼睛",8],["face","脸",8],["fact","事实",8],["factory","工厂",8],["fail","失败",8],["fair","公平的",8],["fall","落下",8],["famous","著名的",8],["fan","粉丝",8],["far","远的",8],["farm","农场",8],["fast","快的",8],["fat","胖的",8],["favorite","最喜欢的",8],["fear","害怕",8],["February","二月",8],["feed","喂养",8],["feel","感觉",8],["festival","节日",8],["fever","发烧",8],["few","很少的",8],["field","田野",8],["fifteen","十五",8],["fifty","五十",8],["fight","战斗",8],["fill","装满",8],["film","电影",8],["final","最后的",8],["find","找到",8],["finger","手指",8],["finish","完成",8],["fire","火",8],["fireman","消防员",8],["first","第一",8],["fit","适合",8],["five","五",8],["fix","修理",8],["flag","旗帜",8],["flat","平的",8],["flight","飞行",8],["floor","地板",8],["focus","集中",8],["follow","跟随",8],["foot","脚",8],["for","为了",8],["force","力量",8],["foreign","外国的",8],["forest","森林",8],["forever","永远",8],["forget","忘记",8],["fork","叉子",8],["form","形式",8],["forty","四十",8],["forward","向前",8],["achieve","实现",9],["achievement","成就",9],["actual","实际的",9],["actually","实际上",9],["adapt","适应",9],["address","地址",9],["admire","钦佩",9],["admit","承认",9],["adopt","采用",9],["adult","成年人",9],["advance","前进",9],["advantage","优势",9],["adventure","冒险",9],["advertise","做广告",9],["afford","负担得起",9],["agent","代理人",9],["aim","目的",9],["alarm","警报",9],["ancient","古代的",9],["announce","宣布",9],["anxious","焦虑的",9],["apologize","道歉",9],["appear","出现",9],["appearance","外貌",9],["appetite","食欲",9],["applaud","鼓掌",9],["appoint","任命",9],["appreciate","欣赏",9],["approach","接近",9],["appropriate","合适的",9],["approve","批准",9],["argue","争论",9],["arise","出现",9],["arrange","安排",9],["arrival","到达",9],["arrow","箭",9],["ashamed","羞愧的",9],["aside","在旁边",9],["assign","分配",9],["assist","协助",9],["associate","联系",9],["assume","假设",9],["athlete","运动员",9],["atmosphere","气氛",9],["attach","附上",9],["attack","攻击",9],["attempt","尝试",9],["attend","出席",9],["attitude","态度",9],["attract","吸引",9],["audience","观众",9],["author","作者",9],["authority","权威",9],["automatic","自动的",9],["average","平均的",9],["avoid","避免",9],["award","奖",9],["aware","意识到的",9],["band","乐队",9],["bargain","讨价还价",9],["barrier","障碍",9],["basis","基础",9],["battery","电池",9],["bay","海湾",9],["beam","光束",9],["bean","豆",9],["beard","胡须",9],["behave","表现",9],["behavior","行为",9],["belief","信念",9],["benefit","利益",9],["besides","此外",9],["bet","打赌",9],["bias","偏见",9],["billion","十亿",9],["biology","生物学",9],["blade","刀片",9],["blank","空白的",9],["blanket","毯子",9],["blast","爆炸",9],["bleed","流血",9],["blend","混合",9],["bless","祝福",9],["blind","盲的",9],["bloom","开花",9],["boost","提升",9],["border","边界",9],["bore","钻孔",9],["bother","打扰",9],["bounce","弹跳",9],["bound","必然的",9],["boundary","边界",9],["brake","刹车",9],["brand","品牌",9],["breed","繁殖",9],["brick","砖",9],["brief","简短的",9],["brilliant","辉煌的",9],["bubble","气泡",9],["budget","预算",9],["bulk","大量",9],["bullet","子弹",9],["bundle","捆",9],["bureau","局",9],["burst","爆发",9],["cabin","小屋",9],["cable","缆绳",9],["calculate","计算",9],["calendar","日历",9],["calm","平静的",9],["campaign","运动",9],["cancel","取消",9],["candidate","候选人",9],["capable","有能力的",9],["capacity","容量",9],["capture","捕获",9],["carbon","碳",9],["career","职业",9],["cargo","货物",9],["carpet","地毯",9],["category","类别",9],["cattle","牛",9],["ceremony","仪式",9],["chain","链条",9],["challenge","挑战",9],["chamber","房间",9],["champion","冠军",9],["chapter","章",9],["character","性格",9],["charge","收费",9],["charity","慈善",9],["chart","图表",9],["chase","追逐",9],["chemical","化学的",9],["chest","胸部",9],["chew","咀嚼",9],["chief","主要的",9],["childhood","童年",9],["chip","芯片",9],["citizen","公民",9],["civil","公民的",9],["claim","声称",9],["clarify","澄清",9],["classic","经典的",9],["clinic","诊所",9],["cloth","布",9],["clue","线索",9],["cluster","群",9],["coast","海岸",9],["code","代码",9],["collapse","倒塌",9],["colleague","同事",9],["colony","殖民地",9],["combine","结合",9],["comedy","喜剧",9],["comfort","安慰",9],["command","命令",9],["comment","评论",9],["commerce","商业",9],["commission","佣金",9],["committee","委员会",9],["communicate","交流",9],["community","社区",9],["companion","同伴",9],["compete","竞争",9],["complain","抱怨",9],["complex","复杂的",9],["compose","组成",9],["concept","概念",9],["concern","关心",9],["conclude","得出结论",9],["concrete","具体的",9],["conduct","进行",9],["conference","会议",9],["confidence","信心",9],["confirm","确认",9],["conflict","冲突",9],["confuse","使困惑",9],["congratulate","祝贺",9],["congress","国会",9],["conscious","有意识的",9],["consequence","后果",9],["consist","组成",9],["constant","不断的",9],["constitute","构成",9],["construct","建造",9],["consult","咨询",9],["consume","消耗",9],["contact","接触",9],["contain","包含",9],["contest","比赛",9],["context","上下文",9],["contract","合同",9],["contradict","反驳",9],["contrast","对比",9],["contribute","贡献",9],["convince","说服",9],["cooperate","合作",9],["cope","应对",9],["core","核心",9],["corporate","公司的",9],["corridor","走廊",9],["council","委员会",9],["counter","柜台",9],["county","县",9],["couple","夫妇",9],["courage","勇气",9],["court","法庭",9],["crack","裂缝",9],["craft","手艺",9],["crash","坠毁",9],["craw","爬行",9],["credit","信用",9],["crew","全体人员",9],["crime","犯罪",9],["crisis","危机",9],["criticize","批评",9],["crowd","人群",9],["crucial","关键的",9],["crystal","水晶",9],["cube","立方体",9],["currency","货币",9],["current","当前的",9],["curtain","窗帘",9],["curve","曲线",9],["cycle","循环",9],["damage","损害",9],["damp","潮湿的",9],["data","数据",9],["deadline","截止日期",9],["debate","辩论",9],["decade","十年",9],["declare","宣布",9],["decline","下降",9],["decorate","装饰",9],["decrease","减少",9],["defeat","击败",9],["defend","保卫",9],["define","定义",9],["degree","程度",9],["delay","延迟",9],["deliver","递送",9],["demand","要求",9],["department","部门",9],["depend","依赖",9],["deposit","存款",9],["depress","使沮丧",9],["depth","深度",9],["desert","沙漠",9],["deserve","应得",9],["design","设计",9],["desire","渴望",9],["detail","细节",9],["detect","察觉",9],["determine","决定",9],["device","设备",9],["devote","奉献",9],["diet","饮食",9],["dignity","尊严",9],["dimension","维度",9],["dip","蘸",9],["diploma","文凭",9],["direct","直接的",9],["director","导演",9],["dirt","灰尘",9],["disable","使残疾",9],["disadvantage","劣势",9],["disagree","不同意",9],["disappear","消失",9],["disappoint","使失望",9],["disaster","灾难",9],["discipline","纪律",9],["discount","折扣",9],["distance","距离",9],["distant","遥远的",9],["distinguish","区分",9],["distribute","分发",9],["district","地区",9],["disturb","打扰",9],["diverse","多样的",9],["divorce","离婚",9],["domestic","国内的",9],["dominate","统治",9],["donate","捐赠",9],["downtown","市中心",9],["draft","草稿",9],["drag","拖",9],["drama","戏剧",9],["dramatic","戏剧性的",9],["drawback","缺点",9],["dread","恐惧",9],["drift","漂流",9],["drill","钻孔",9],["drown","淹死",9],["duration","持续时间",9],["dwelling","住所",9],["a","一(个)",7],["back","回来",7],["be","是",7],["by","通过",7],["China","中国",7],["clothes","衣服",7],["cute","可爱的",7],["eight","八",7],["email","邮件",7],["four","四",7],["free","空闲的",7],["from","从",7],["front","前面",7],["fruit","水果",7],["fun","乐趣",7],["get","得到",7],["glad","高兴的",7],["glass","玻璃杯",7],["guess","猜",7],["hair","头发",7],["half","一半",7],["hand","手",7],["hard","困难的",7],["he","他",7],["head","头",7],["health","健康",7],["hear","听见",7],["her","她的",7],["high","高的",7],["him","他",7],["his","他的",7],["hold","拿着",7],["holiday","假日",7],["homework","作业",7],["hope","希望",7],["horse","马",7],["hospital","医院",7],["hotel","酒店",7],["hour","小时",7],["house","房子",7],["hundred","百",7],["hungry","饿的",7],["hurry","匆忙",7],["hurt","受伤",7],["husband","丈夫",7],["I","我",7],["ice","冰",7],["idea","主意",7],["in","在...里",7],["interesting","有趣的",7],["it","它",7],["its","它的",7],["jacket","夹克",7],["juice","果汁",7],["just","刚刚",7],["keep","保持",7],["key","钥匙",7],["king","国王",7],["kitchen","厨房",7],["kite","风筝",7],["lady","女士",7],["lake","湖",7],["land","陆地",7],["language","语言",7],["late","迟的",7],["laugh","笑",7],["learn","学习",7],["left","左",7],["leg","腿",7],["lesson","课",7],["letter","信",7],["library","图书馆",7],["lie","躺",7],["life","生活",7],["light","灯",7],["line","线",7],["listen","听",7],["little","小的",7],["live","居住",7],["lot","很多",7],["lunch","午餐",7],["match","比赛",7],["math","数学",7],["may","可以",7],["me","我",7],["meal","一餐",7],["meat","肉",7],["mind","介意",7],["mine","我的",7],["minute","分钟",7],["Miss","小姐",7],["model","模型",7],["money","钱",7],["month","月",7],["mouse","老鼠",7],["mouth","嘴",7],["move","移动",7],["movie","电影",7],["Mr","先生",7],["Mrs","夫人",7],["must","必须",7],["my","我的",7],["near","近的",7],["never","从不",7],["news","新闻",7],["next","下一个",7],["nine","九",7],["no","不",7],["noodle","面条",7],["noon","中午",7],["nose","鼻子",7],["not","不",7],["notebook","笔记本",7],["number","数字",7],["of","的",7],["off","关",7],["office","办公室",7],["often","经常",7],["oil","油",7],["on","在...上",7],["once","一次",7],["one","一",7],["only","只",7],["our","我们的",7],["out","外面",7],["over","结束",7],["own","自己的",7],["page","页",7],["paint","画",7],["pair","一对",7],["panda","熊猫",7],["party","聚会",7],["pass","传递",7],["past","过去",7],["piano","钢琴",7],["piece","片",7],["pig","猪",7],["plan","计划",7],["plant","植物",7],["point","指向",7],["police","警察",7],["poor","穷的",7],["pork","猪肉",7],["possible","可能的",7],["post","邮寄",7],["potato","土豆",7],["practice","练习",7],["present","礼物",7],["pretty","漂亮的",7],["question","问题",7],["quick","快的",7],["quiet","安静的",7],["quite","相当",7],["radio","收音机",7],["rain","雨",7],["ready","准备好的",7],["really","真正地",7],["remember","记得",7],["rest","休息",7],["rich","富的",7],["ride","骑",7],["right","对的",7],["ring","戒指",7],["road","路",7],["safe","安全的",7],["salad","沙拉",7],["same","相同的",7],["sea","海",7],["seat","座位",7],["sell","卖",7],["send","发送",7],["she","她",7],["sheep","羊",7],["shine","照耀",7],["ship","船",7],["shop","商店",7],["show","展示",7],["sick","病的",7],["side","边",7],["sir","先生",7],["sit","坐",7],["six","六",7],["skate","滑冰",7],["ski","滑雪",7],["skirt","裙子",7],["sleep","睡觉",7],["slow","慢的",7],["smell","闻",7],["smile","微笑",7],["snow","雪",7],["sock","袜子",7],["sofa","沙发",7],["son","儿子",7],["soon","很快",7],["sound","声音",7],["soup","汤",7],["south","南",7],["speak","说",7],["spell","拼写",7],["spend","花费",7],["stamp","邮票",7],["stand","站",7],["start","开始",7],["station","车站",7],["stay","停留",7],["still","仍然",7],["stop","停止",7],["store","商店",7],["story","故事",7],["study","学习",7],["subject","科目",7],["such","这样的",7],["sugar","糖",7],["super","超级的",7],["sure","确信的",7],["sweet","甜的",7],["talk","谈话",7],["tall","高的",7],["taxi","出租车",7],["tea","茶",7],["teach","教",7],["team","队",7],["ten","十",7],["tennis","网球",7],["term","学期",7],["test","测试",7],["than","比",7],["that","那个",7],["their","他们的",7],["them","他们",7],["then","然后",7],["these","这些",7],["they","他们",7],["third","第三",7],["thirsty","渴的",7],["thirteen","十三",7],["those","那些",7],["three","三",7],["ticket","票",7],["tiger","老虎",7],["tired","累的",7],["to","到",7],["together","一起",7],["tomato","西红柿",7],["tomorrow","明天",7],["tonight","今晚",7],["tooth","牙齿",7],["tour","旅游",7],["town","城镇",7],["toy","玩具",7],["travel","旅行",7],["trip","旅行",7],["trouble","麻烦",7],["truck","卡车",7],["true","真实的",7],["try","尝试",7],["turn","转",7],["TV","电视",7],["twelve","十二",7],["twenty","二十",7],["two","二",7],["uncle","叔叔",7],["under","在...下",7],["up","向上",7],["us","我们",7],["use","使用",7],["usually","通常",7],["visit","拜访",7],["wait","等待",7],["wake","醒来",7],["wall","墙",7],["wash","洗",7],["watch","手表",7],["we","我们",7],["wear","穿",7],["weather","天气",7],["weekend","周末",7],["west","西",7],["while","当...时",7],["whose","谁的",7],["wife","妻子",7],["wild","野生的",7],["will","将",7],["wind","风",7],["wish","希望",7],["with","和",7],["wonderful","精彩的",7],["word","单词",7],["worker","工人",7],["worry","担心",7],["wrong","错的",7],["yes","是",7],["yet","还",7],["you","你",7],["young","年轻的",7],["your","你的",7],["zero","零",7],["zoo","动物园",7],["abroad","在国外",8],["absent","缺席的",8],["accident","事故",8],["act","行动",8],["add","增加",8],["Africa","非洲",8],["African","非洲的",8],["agreement","协议",8],["ahead","在前面",8],["altogether","总共",8],["America","美国",8],["American","美国的",8],["amusing","有趣的",8],["anger","愤怒",8],["apart","分开",8],["apartment","公寓",8],["April","四月",8],["as","作为",8],["Asia","亚洲",8],["Asian","亚洲的",8],["assistant","助手",8],["astronaut","宇航员",8],["at","在",8],["August","八月",8],["Australia","澳大利亚",8],["Australian","澳洲的",8],["avenue","大街",8],["awful","可怕的",8],["backpack","背包",8],["badminton","羽毛球",8],["baggage","行李",8],["bake","烤",8],["balloon","气球",8],["bamboo","竹子",8],["bar","酒吧",8],["bare","赤裸的",8],["baseball","棒球",8],["battle","战斗",8],["beauty","美",8],["bee","蜜蜂",8],["beer","啤酒",8],["being","存在",8],["Belgium","比利时",8],["belt","腰带",8],["bench","长凳",8],["bend","弯曲",8],["bicycle","自行车",8],["biscuit","饼干",8],["bite","咬",8],["blame","责备",8],["blouse","女衬衫",8],["bomb","炸弹",8],["bone","骨头",8],["boot","靴子",8],["boyfriend","男友",8],["branch","树枝",8],["Britain","英国",8],["British","英国的",8],["broadcast","广播",8],["bucket","桶",8],["bulb","灯泡",8],["bull","公牛",8],["bunch","束",8],["burden","负担",8],["burn","燃烧",8],["bury","埋葬",8],["bush","灌木",8],["butcher","屠夫",8],["butterfly","蝴蝶",8],["cafe","咖啡馆",8],["camel","骆驼",8],["Canada","加拿大",8],["Canadian","加拿大的",8],["canal","运河",8],["cart","手推车",8],["cassette","磁带",8],["castle","城堡",8],["catalogue","目录",8],["cave","洞穴",8],["ceiling","天花板",8],["cell","细胞",8],["cent","分",8],["center","中心",8],["chalk","粉笔",8],["chat","聊天",8],["cheat","欺骗",8],["cheek","脸颊",8],["chemist","化学家",8],["chemistry","化学",8],["cherry","樱桃",8],["chips","薯条",8],["clap","鼓掌",8],["clerk","职员",8],["client","客户",8],["coal","煤",8],["cock","公鸡",8],["Coke","可乐",8],["comb","梳子",8],["costume","服装",8],["cottage","村舍",8],["couch","沙发",8],["crop","庄稼",8],["crown","王冠",8],["cruel","残忍的",8],["cucumber","黄瓜",8],["cushion","垫子",8],["dentist","牙医",8],["dessert","甜点",8],["destroy","破坏",8],["diagram","图表",8],["direction","方向",8],["discussion","讨论",8],["display","展示",8],["dive","潜水",8],["dizzy","眩晕的",8],["does","做",8],["dot","点",8],["download","下载",8],["due","到期的",8],["dull","无聊的",8],["dust","灰尘",8],["DVD","影碟",8],["eager","渴望的",8],["earn","赚取",8],["earthquake","地震",8],["economic","经济的",8],["edge","边缘",8],["edit","编辑",8],["elect","选举",8],["electricity","电",8],["elevator","电梯",8],["embarrassed","尴尬的",8],["emergency","紧急情况",8],["emotion","情感",8],["emperor","皇帝",8],["employ","雇佣",8],["encourage","鼓励",8],["engine","引擎",8],["enjoyable","令人愉快的",8],["entire","整个的",8],["entrance","入口",8],["envelope","信封",8],["equal","平等的",8],["equipment","设备",8],["error","错误",8],["escape","逃跑",8],["eve","前夕",8],["evidence","证据",8],["execute","执行",8],["exit","出口",8],["expert","专家",8],["explode","爆炸",8],["explore","探索",8],["extra","额外的",8],["extreme","极端的",8],["false","错误的",8],["familiar","熟悉的",8],["fashion","时尚",8],["fate","命运",8],["fault","错误",8],["feast","盛宴",8],["fee","费用",8],["feeling","感觉",8],["fellow","伙伴",8],["female","女性的",8],["fence","栅栏",8],["fetch","取来",8],["figure","数字",8],["file","文件",8],["firm","坚固的",8],["flame","火焰",8],["flash","闪光",8],["flashlight","手电筒",8],["flood","洪水",8],["flour","面粉",8],["flow","流动",8],["flu","流感",8],["fog","雾",8],["fold","折叠",8],["following","接下来的",8],["fond","喜爱的",8],["fool","傻瓜",8],["foolish","愚蠢的",8],["foreigner","外国人",8],["former","以前的",8],["fort","堡垒",8],["fortune","财富",8],["fountain","喷泉",8],["fox","狐狸",8],["fragile","易碎的",8],["freedom","自由",8],["freeze","冻结",8],["fresh","新鲜的",8],["fridge","冰箱",8],["friendly","友好的",8],["friendship","友谊",8],["frighten","惊吓",8],["frost","霜",8],["frown","皱眉",8],["fry","油炸",8],["fuel","燃料",8],["full","满的",8],["function","功能",8],["fur","毛皮",8],["furniture","家具",8],["further","更远的",8],["future","未来",8],["abandon","放弃",9],["abolish","废除",9],["absolute","绝对的",9],["absorb","吸收",9],["abstract","抽象的",9],["absurd","荒谬的",9],["abundant","丰富的",9],["abuse","滥用",9],["academic","学术的",9],["accelerate","加速",9],["access","接近",9],["accommodate","容纳",9],["accompany","陪伴",9],["accomplish","完成",9],["account","账户",9],["accurate","准确的",9],["accuse","指控",9],["acid","酸",9],["acknowledge","承认",9],["acquaintance","熟人",9],["acquire","获得",9],["acre","英亩",9],["actor","演员",9],["actress","女演员",9],["addition","增加",9],["adequate","足够的",9],["adjust","调整",9],["administration","管理",9],["advanced","高级的",9],["affair","事务",9],["affect","影响",9],["afterward","后来",9],["agency","代理处",9],["aggressive","好斗的",9],["agriculture","农业",9],["aid","援助",9],["aircraft","飞机",9],["airline","航空公司",9],["airplane","飞机",9],["album","相册",9],["alcohol","酒精",9],["alike","相似的",9],["aloud","出声地",9],["alphabet","字母表",9],["alternative","替代的",9],["aluminum","铝",9],["amaze","使惊讶",9],["ambassador","大使",9],["ambition","雄心",9],["ambulance","救护车",9],["amount","数量",9],["amuse","娱乐",9],["angle","角度",9],["ankle","脚踝",9],["anniversary","周年",9],["annoy","使烦恼",9],["annual","每年的",9],["ant","蚂蚁",9],["Antarctic","南极的",9],["anxiety","焦虑",9],["anybody","任何人",9],["anyway","无论如何",9],["apology","道歉",9],["app","应用",9],["apparatus","设备",9],["application","申请",9],["approval","批准",9],["approximately","大约",9],["Arab","阿拉伯的",9],["Arabic","阿拉伯语",9],["arch","拱门",9],["architect","建筑师",9],["architecture","建筑",9],["Arctic","北极的",9],["are","是",9],["argument","争论",9],["armchair","扶手椅",9],["arrest","逮捕",9],["artificial","人工的",9],["ash","灰烬",9],["aspect","方面",9],["assemble","集合",9],["astronomer","天文学家",9],["astronomy","天文学",9],["Atlantic","大西洋的",9],["atom","原子",9],["attraction","吸引力",9],["attractive","迷人的",9],["autobiography","自传",9],["awkward","尴尬的",9],["backwards","向后",9],["bacon","培根",9],["bacteria","细菌",9],["badge","徽章",9],["bakery","面包店",9],["balcony","阳台",9],["bald","秃的",9],["ballet","芭蕾",9],["bandage","绷带",9],["bang","砰",9],["barbecue","烧烤",9],["barber","理发师",9],["bark","吠",9],["basin","盆地",9],["bat","蝙蝠",9],["beg","乞求",9],["beneath","在...之下",9],["Bible","圣经",9],["bingo","宾果",9],["biography","传记",9],["birthplace","出生地",9],["bitter","苦的",9],["blog","博客",9],["bold","大胆的",9],["bond","纽带",9],["boom","繁荣",9],["bow","鞠躬",9],["bravery","勇敢",9],["breast","胸部",9],["breath","呼吸",9],["bride","新娘",9],["Buddhism","佛教",9],["buffet","自助餐",9],["bug","虫子",9],["burger","汉堡",9],["businessman","商人",9],["cab","出租车",9],["cafeteria","自助餐厅",9],["calculator","计算器",9],["cancer","癌症",9],["canoe","独木舟",9],["carriage","马车",9],["carrier","载体",9],["casual","随意的",9],["catalog","目录",9],["caution","谨慎",9],["CD","光盘",9],["celebration","庆祝",9],["cellphone","手机",9],["central","中央的",9],["certificate","证书",9],["chairman","主席",9],["charm","魅力",9],["cheerful","愉快的",9],["chef","主厨",9],["chorus","合唱",9],["Christian","基督教的",9],["cigar","雪茄",9],["cigarette","香烟",9],["circuit","电路",9],["civilization","文明",9],["clarinet","单簧管",9],["classical","古典的",9],["clay","黏土",9],["cliff","悬崖",9],["clothing","服装",9],["cocktail","鸡尾酒",9],["cocoa","可可",9],["coconut","椰子",9],["collar","领子",9],["collection","收藏",9],["commercial","商业的",9],["commit","犯(罪)",9],["communication","交流",9],["comparison","比较",9],["competition","竞争",9],["competitor","竞争者",9],["complicated","复杂的",9],["composer","作曲家",9],["composition","作文",9],["compound","化合物",9],["comprehend","理解",9],["conceal","隐藏",9],["concentrate","集中",9],["conclusion","结论",9],["conductor","指挥",9],["conjunction","连词",9],["connection","连接",9],["conquer","征服",9],["conservation","保护",9],["constantly","不断地",9],["construction","建设",9],["container","容器",9],["contemporary","当代的",9],["content","内容",9],["continent","大陆",9],["continuous","持续的",9],["contribution","贡献",9],["copper","铜",9],["cord","绳索",9],["corporation","公司",9],["correspond","通信",9],["countable","可数的",9],["coward","懦夫",9],["cowboy","牛仔",9],["crate","板条箱",9],["crayon","蜡笔",9],["creation","创造",9],["creative","有创造力的",9],["creature","生物",9],["criminal","罪犯",9],["critic","批评家",9],["critical","关键的",9],["crossing","十字路口",9],["crow","乌鸦",9],["crowded","拥挤的",9],["cuisine","烹饪",9],["cupboard","橱柜",9],["curiosity","好奇心",9],["customs","海关",9],["darkness","黑暗",9],["database","数据库",9],["dawn","黎明",9],["debt","债务",9],["deed","行为",9],["deeply","深深地",9],["defence","防御",9],["definite","明确的",9],["delete","删除",9],["deliberately","故意地",9],["delicate","精致的",9],["delight","高兴",9],["delivery","递送",9],["democracy","民主",9],["demonstrate","证明",9],["deny","否认",9],["depart","离开",9],["departure","离开",9],["description","描述",9],["desperate","绝望的",9],["despite","尽管",9],["destination","目的地",9],["destruction","破坏",9],["detective","侦探",9],["determination","决心",9],["development","发展",9],["dial","拨号",9],["diamond","钻石",9],["differ","不同",9],["difficulty","困难",9],["digital","数字的",9],["dine","就餐",9],["disabled","残疾的",9],["disco","迪斯科",9],["discovery","发现",9],["discrimination","歧视",9],["disk","磁盘",9],["dislike","不喜欢",9],["dismiss","解散",9],["distinct","明显的",9],["division","划分",9],["documentary","纪录片",9],["dolphin","海豚",9],["donkey","驴",9],["dormitory","宿舍",9],["dose","剂量",9],["doughnut","甜甜圈",9],["dragon","龙",9],["drawer","抽屉",9],["drawing","图画",9],["dressing","调料",9],["drunk","醉的",9],["dynamic","动态的",9],["eagle","鹰",8],["earnest","认真的",8],["ease","轻松",8],["echo","回声",8],["edition","版本",8],["editor","编辑",8],["educate","教育",8],["effective","有效的",8],["efficient","高效的",8],["elbow","手肘",8],["elderly","年长的",8],["election","选举",8],["electronic","电子的",8],["elegant","优雅的",8],["element","元素",8],["embarrass","使尴尬",8],["embassy","大使馆",8],["embrace","拥抱",8],["emerge","出现",8],["emotional","情感的",8],["emphasis","强调",8],["empire","帝国",8],["employee","雇员",8],["employer","雇主",8],["enable","使能够",8],["enclosure","围场",8],["encounter","偶遇",8],["encyclopedia","百科全书",8],["endless","无尽的",8],["endurance","耐力",8],["energetic","精力充沛的",8],["enforce","执行",8],["engage","参与",8],["engineering","工程",8],["enlarge","扩大",8],["enormous","巨大的",8],["enrich","丰富",8],["ensure","确保",8],["enterprise","企业",8],["entertain","娱乐",8],["enthusiasm","热情",8],["entitle","给...权利",8],["entry","进入",8],["envy","嫉妒",8],["episode","片段",8],["equality","平等",8],["era","时代",8],["essay","论文",8],["essential","必要的",8],["establish","建立",8],["estate","地产",8],["estimate","估计",8],["evaluate","评估",8],["eventually","最终",8],["evident","明显的",8],["evil","邪恶的",8],["evolution","进化",8],["exaggerate","夸大",8],["examination","考试",8],["exceed","超过",8],["exception","例外",8],["exchange","交换",8],["excitement","兴奋",8],["exclaim","呼喊",8],["exclude","排除",8],["executive","主管",8],["exhaust","耗尽",8],["exhibition","展览",8],["existence","存在",8],["expand","扩展",8],["expectation","期待",8],["expense","花费",8],["explanation","解释",8],["exploit","开发",8],["explorer","探险家",8],["export","出口",8],["expose","暴露",8],["expression","表达",8],["extend","延伸",8],["extension","延伸",8],["extensive","广泛的",8],["extract","提取",8],["extraordinary","非凡的",8],["extremely","极其",8],["eyebrow","眉毛",8],["fable","寓言",8],["fabric","织物",8],["facility","设施",8],["factor","因素",8],["fade","褪色",8],["failure","失败",8],["faint","微弱的",8],["faith","信仰",8],["faithful","忠诚的",8],["fake","假的",8],["fame","名声",8],["famine","饥荒",8],["fancy","想象的",8],["fantastic","极好的",8],["fantasy","幻想",8],["fare","车费",8],["farewell","告别",8],["farmhouse","农舍",8],["fascinate","使着迷",8],["fashionable","时髦的",8],["fasten","系紧",8],["fatal","致命的",8],["favor","恩惠",8],["favorable","有利的",8],["fax","传真",8],["feather","羽毛",8],["feature","特征",8],["federal","联邦的",8],["feedback","反馈",8],["feudal","封建的",8],["fiber","纤维",8],["fiction","小说",8],["fierce","凶猛的",8],["fighter","战士",8],["filter","过滤",8],["finance","金融",8],["financial","金融的",8],["finding","发现",8],["fireplace","壁炉",8],["fist","拳头",8],["flavor","味道",8],["flee","逃跑",8],["fleet","舰队",8],["flesh","肉",8],["flexible","灵活的",8],["float","漂浮",8],["flock","群",8],["fluent","流利的",8],["fluid","流体",8],["flush","冲洗",8],["folk","民间的",8],["forbid","禁止",8],["forecast","预测",8],["forehead","前额",8],["forgive","原谅",8],["formal","正式的",8],["formula","公式",8],["forth","向前",8],["forum","论坛",8],["fossil","化石",8],["foster","培养",8],["found","建立",8],["foundation","基础",8],["founder","创始人",8],["fraction","分数",8],["fragment","碎片",8],["frame","框架",8],["framework","框架",8],["frank","坦率的",8],["fraud","欺诈",8],["freight","货运",8],["frequent","频繁的",8],["frequently","频繁地",8],["friction","摩擦",8],["frontier","边境",8],["frozen","冷冻的",8],["frustrate","使沮丧",8],["fulfill","实现",8],["fund","资金",8],["fundamental","基本的",8],["funeral","葬礼",8],["furnish","布置",8],["furthermore","此外",8],["fuss","大惊小怪",8],["garage","车库",8],["garbage","垃圾",8],["garlic","大蒜",8],["gas","气体",8],["gasoline","汽油",8],["gather","聚集",8],["gay","同性恋的",8],["gaze","凝视",8],["gear","齿轮",8],["gender","性别",8],["gene","基因",8],["general","一般的",8],["generally","通常",8],["generate","产生",8],["generation","一代",8],["generous","慷慨的",8],["genius","天才",8],["gentle","温柔的",8],["gentleman","绅士",8],["genuine","真正的",8],["geography","地理",8],["geometry","几何",8],["germ","细菌",8],["gesture","手势",8],["ghost","鬼",8],["giant","巨人",8],["gift","礼物",8],["gifted","有天赋的",8],["ginger","生姜",8],["glance","一瞥",8],["glare","怒视",8],["global","全球的",8],["globe","地球",8],["gloom","阴暗",8],["glorious","光荣的",8],["glory","荣耀",8],["glove","手套",8],["glue","胶水",8],["goal","目标",8],["golden","金色的",8],["golf","高尔夫",8],["goodness","善良",8],["goods","货物",8],["goose","鹅",8],["govern","统治",8],["government","政府",8],["grace","优雅",8],["gradual","逐渐的",8],["graduate","毕业",8],["grain","谷物",8],["gram","克",8],["grammar","语法",8],["grand","宏伟的",8],["grant","授予",8],["grape","葡萄",8],["graph","图表",8],["grasp","抓住",8],["grass","草",8],["grateful","感激的",8],["gravity","重力",8],["gray","灰色的",8],["greedy","贪婪的",8],["greenhouse","温室",8],["greet","问候",8],["grind","磨",8],["grocery","杂货店",8],["gross","总的",8],["ground","地面",8],["guarantee","保证",8],["guard","守卫",8],["guest","客人",8],["guidance","指导",8],["guide","导游",8],["guilty","有罪的",8],["gulf","海湾",8],["gum","口香糖",8],["gym","健身房",8],["habit","习惯",8],["haircut","理发",8],["hairdryer","吹风机",8],["hall","大厅",8],["halt","停止",8],["hamburger","汉堡",8],["hammer","锤子",8],["handbag","手提包",8],["handful","一把",8],["handicap","残疾",8],["handle","处理",8],["handsome","英俊的",8],["handwriting","笔迹",8],["handy","方便的",8],["hang","悬挂",8],["harbor","港口",8],["hardship","艰难",8],["hardware","硬件",8],["harm","伤害",8],["harmful","有害的",8],["harmony","和谐",8],["harvest","收获",8],["haste","匆忙",8],["hatred","仇恨",8],["haunted","闹鬼的",8],["headache","头痛",8],["headline","标题",8],["headmaster","校长",8],["headquarters","总部",8],["heal","治愈",8],["heap","堆",8],["hearing","听力",8],["heart","心",8],["heat","热",8],["heaven","天堂",8],["heavy","重的",8],["height","高度",8],["helicopter","直升机",8],["helmet","头盔",8],["helpful","有帮助的",8],["hen","母鸡",8],["hence","因此",8],["hero","英雄",8],["heroine","女英雄",8],["hesitate","犹豫",8],["hide","隐藏",8],["highway","公路",8],["hike","徒步",8],["hill","小山",8],["hint","暗示",8],["hip","臀部",8],["hire","雇佣",8],["historian","历史学家",8],["historic","历史性的",8],["historical","历史的",8],["hobby","爱好",8],["hollow","空的",8],["holy","神圣的",8],["honest","诚实的",8],["honey","蜂蜜",8],["honeymoon","蜜月",8],["honor","荣誉",8],["hook","钩子",8],["horizon","地平线",8],["horn","号角",8],["horrible","可怕的",8],["horror","恐惧",8],["horsepower","马力",8],["host","主人",8],["hostess","女主人",8],["hostile","敌对的",8],["hotdog","热狗",8],["household","家庭",8],["housework","家务",8],["humble","谦逊的",8],["humor","幽默",8],["humorous","幽默的",8],["hunger","饥饿",8],["hurricane","飓风",8],["hut","小屋",8],["hyphen","连字符",8],["iceberg","冰山",8],["ideal","理想的",8],["identical","相同的",8],["identify","识别",8],["identity","身份",8],["idiom","习语",8],["ignorant","无知的",8],["ignore","忽视",8],["illegal","非法的",8],["illusion","幻觉",8],["illustrate","说明",8],["image","形象",8],["imagination","想象",8],["imagine","想象",8],["imitate","模仿",8],["immense","巨大的",8],["impact","影响",8],["implement","实施",8],["implication","含义",8],["imply","暗示",8],["import","进口",8],["importance","重要性",8],["impose","强加",8],["impossible","不可能的",8],["impress","给...印象",8],["impression","印象",8],["impressive","令人印象深刻的",8],["improve","改善",8],["improvement","改善",8],["incident","事件",8],["include","包括",8],["income","收入",8],["increase","增加",8],["incredible","难以置信的",8],["indeed","确实",8],["independence","独立",8],["independent","独立的",8],["index","索引",8],["indicate","表明",8],["individual","个人的",8],["indoor","室内的",8],["induce","诱导",8],["industrial","工业的",8],["industry","工业",8],["inevitable","不可避免的",8],["infect","感染",8],["infer","推断",8],["influence","影响",8],["inform","通知",8],["informal","非正式的",8],["ingredient","成分",8],["initial","最初的",8],["initiative","主动",8],["injure","伤害",8],["injury","伤害",8],["ink","墨水",8],["inn","小旅馆",8],["inner","内部的",8],["innocent","无辜的",8],["inquire","询问",8],["inquiry","询问",8],["insect","昆虫",8],["insert","插入",8],["inside","里面",8],["insist","坚持",8],["inspect","检查",8],["inspire","激励",8],["install","安装",8],["instance","实例",8],["instant","立即的",8],["instead","代替",8],["instinct","本能",8],["institute","机构",8],["institution","机构",8],["instruct","指示",8],["instruction","指示",8],["instrument","工具",8],["insurance","保险",8],["intellectual","智力的",8],["intelligence","智力",8],["intelligent","聪明的",8],["intend","打算",8],["intense","强烈的",8],["intention","意图",8],["interact","互动",8],["interest","兴趣",8],["interfere","干涉",8],["intermediate","中级的",8],["international","国际的",8],["internet","互联网",8],["interpret","解释",8],["interrupt","打断",8],["interval","间隔",8],["interview","面试",8],["intimate","亲密的",8],["introduce","介绍",8],["introduction","介绍",8],["invade","入侵",8],["invent","发明",8],["invention","发明",8],["invest","投资",8],["investigate","调查",8],["investigation","调查",8],["invitation","邀请",8],["involve","涉及",8],["iron","铁",8],["island","岛",8],["issue","问题",8],["item","项目",8],["jail","监狱",8],["jam","果酱",8],["jar","罐子",8],["jazz","爵士乐",8],["jealous","嫉妒的",8],["jeans","牛仔裤",8],["jewel","珠宝",8],["jewelry","首饰",8],["jog","慢跑",8],["journal","日记",8],["journalist","记者",8],["journey","旅程",8],["joy","欢乐",8],["judge","判断",8],["judgment","判断",8],["jungle","丛林",8],["junior","初级的",8],["jury","陪审团",8],["justice","正义",8],["justify","证明...正当",8],["kerosene","煤油",8],["kettle","水壶",8],["keyboard","键盘",8],["kilogram","千克",8],["kilometer","千米",8],["kindergarten","幼儿园",8],["kindness","善良",8],["kingdom","王国",8],["kiosk","亭子",8],["kneel","跪",8],["knife","刀",8],["knit","编织",8],["knob","把手",8],["knock","敲",8],["knot","结",8],["label","标签",8],["labor","劳动",8],["lack","缺乏",8],["ladder","梯子",8],["lag","落后",8],["lamb","羊羔",8],["lamp","灯",8],["landlord","房东",8],["landscape","风景",8],["lane","小巷",8],["lantern","灯笼",8],["laptop","笔记本电脑",8],["largely","主要地",8],["laser","激光",8],["last","最后的",8],["lately","最近",8],["later","后来",8],["latter","后者",8],["laughable","可笑的",8],["launch","发射",8],["laundry","洗衣店",8],["lavatory","盥洗室",8],["law","法律",8],["lawn","草坪",8],["lawyer","律师",8],["layer","层",8],["layout","布局",8],["lazy","懒惰的",8],["lead","领导",8],["leader","领导者",8],["leadership","领导力",8],["leaf","叶子",8],["league","联盟",8],["leak","泄漏",8],["lean","倾斜",8],["leap","跳跃",8],["leather","皮革",8],["lecture","讲座",8],["legal","合法的",8],["legend","传说",8],["leisure","休闲",8],["lemon","柠檬",8],["length","长度",8],["lens","镜片",8],["less","更少",8],["level","水平",8],["liable","有责任的",8],["liberal","自由的",8],["liberty","自由",8],["librarian","图书管理员",8],["license","执照",8],["lid","盖子",8],["lifeboat","救生艇",8],["lifeguard","救生员",8],["lifestyle","生活方式",8],["lifetime","一生",8],["lightning","闪电",8],["likely","可能的",8],["limit","限制",8],["limited","有限的",8],["limp","跛行",8],["link","连接",8],["lion","狮子",8],["lip","嘴唇",8],["liquid","液体",8],["list","列表",8],["literary","文学的",8],["literature","文学",8],["litter","垃圾",8],["lively","活泼的",8],["load","装载",8],["loaf","一条(面包)",8],["loan","贷款",8],["local","当地的",8],["locate","位于",8],["location","位置",8],["lock","锁",8],["lodge","寄宿",8],["log","原木",8],["logic","逻辑",8],["logical","合逻辑的",8],["lonely","孤独的",8],["loose","松的",8],["lord","领主",8],["lorry","卡车",8],["lose","失去",8],["loss","损失",8],["lounge","休息室",8],["loyal","忠诚的",8],["lucky","幸运的",8],["luggage","行李",8],["lump","块",8],["lunar","月亮的",8],["luxury","奢侈",8],["machine","机器",8],["magazine","杂志",8],["magic","魔术",8],["magnet","磁铁",8],["magnificent","壮丽的",8],["mail","邮件",8],["mailbox","邮箱",8],["main","主要的",8],["mainly","主要地",8],["maintain","维持",8],["maintenance","维护",8],["major","主要的",8],["majority","多数",8],["male","男性的",8],["mall","商场",8],["manage","管理",8],["management","管理",8],["manager","经理",8],["mango","芒果",8],["manner","方式",8],["manual","手动的",8],["manufacture","制造",8],["manuscript","手稿",8],["marathon","马拉松",8],["march","行军",8],["margin","边缘",8],["marine","海洋的",8],["mark","标记",8],["market","市场",8],["marriage","婚姻",8],["married","已婚的",8],["marry","结婚",8],["marvelous","了不起的",8],["mask","面具",8],["mass","大量",8],["massive","大量的",8],["master","主人",8],["mat","垫子",8],["material","材料",8],["mathematics","数学",8],["mature","成熟的",8],["maximum","最大值",8],["mayor","市长",8],["maze","迷宫",8],["meaning","意义",8],["means","手段",8],["measure","测量",8],["mechanic","机械师",8],["mechanical","机械的",8],["medal","奖章",8],["media","媒体",8],["medical","医学的",8],["medicine","药",8],["medium","中等的",8],["melon","瓜",8],["melt","融化",8],["member","成员",8],["memorial","纪念的",8],["memory","记忆",8],["mend","修补",8],["mental","精神的",8],["mention","提到",8],["menu","菜单",8],["merchant","商人",8],["mercy","仁慈",8],["mere","仅仅的",8],["merely","仅仅",8],["merry","快乐的",8],["mess","混乱",8],["message","消息",8],["metal","金属",8],["method","方法",8],["microphone","麦克风",8],["microscope","显微镜",8],["microwave","微波",8],["middle","中间",8],["might","可能",8],["mild","温和的",8],["military","军事的",8],["mill","磨坊",8],["mineral","矿物",8],["minister","部长",8],["minor","次要的",8],["minority","少数",8],["miracle","奇迹",8],["mirror","镜子",8],["miserable","悲惨的",8],["modem","调制解调器",8],["modern","现代的",8],["modest","谦虚的",8],["modify","修改",8],["moist","潮湿的",8],["moment","时刻",8],["monitor","监视器",8],["monkey","猴子",8],["mood","心情",8],["moral","道德的",8],["moreover","此外",8],["mosquito","蚊子",8],["most","最多的",8],["motherland","祖国",8],["motion","运动",8],["motivate","激励",8],["motor","马达",8],["mount"," mounting",8],["moustache","小胡子",8],["mud","泥",8],["multiple","多重的",8],["muscle","肌肉",8],["museum","博物馆",8],["mushroom","蘑菇",8],["musician","音乐家",8],["mustard","芥末",8],["mystery","神秘",8],["myth","神话",8],["nail","指甲",9],["naked","赤裸的",9],["namely","即",9],["nap","小睡",9],["narrate","叙述",9],["narrow","狭窄的",9],["nasty","令人讨厌的",9],["nation","国家",9],["national","国家的",9],["native","本地的",9],["natural","自然的",9],["nature","自然",9],["naughty","淘气的",9],["navy","海军",9],["nearby","附近的",9],["neat","整洁的",9],["necessary","必要的",9],["neck","脖子",9],["necklace","项链",9],["needle","针",9],["negative","消极的",9],["neglect","忽视",9],["negotiate","谈判",9],["neighbor","邻居",9],["neighborhood","邻里",9],["neither","两者都不",9],["nephew","侄子",9],["nerve","神经",9],["nervous","紧张的",9],["net","网",9],["network","网络",9],["neutral","中立的",9],["nevertheless","然而",9],["newcomer","新来者",9],["nickel","镍",9],["niece","侄女",9],["nightmare","噩梦",9],["noble","高贵的",9],["nod","点头",9],["noise","噪音",9],["noisy","嘈杂的",9],["none","没有任何",9],["nonsense","胡说",9],["normal","正常的",9],["north","北方",9],["northeast","东北",9],["northern","北方的",9],["note","笔记",9],["nothing","没有什么",9],["notice","注意",9],["novel","小说",9],["nowadays","现今",9],["nowhere","任何地方都不",9],["nuclear","核的",9],["numerous","许多的",9],["nursery","托儿所",9],["nut","坚果",9],["obey","服从",9],["object","物体",9],["objection","反对",9],["objective","目标",9],["observe","观察",9],["obstacle","障碍",9],["obtain","获得",9],["obvious","明显的",9],["occasion","场合",9],["occupation","职业",9],["occupy","占领",9],["occur","发生",9],["ocean","海洋",9],["o'clock","点钟",9],["odd","奇怪的",9],["odor","气味",9],["offend","冒犯",9],["offer","提供",9],["officer","官员",9],["official","官方的",9],["offline","离线的",9],["omit","省略",9],["online","在线的",9],["opera","歌剧",9],["operate","操作",9],["operation","手术",9],["operator","操作员",9],["opinion","意见",9],["opportunity","机会",9],["oppose","反对",9],["opposite","相反的",9],["optimistic","乐观的",9],["option","选择",9],["oral","口头的",9],["orbit","轨道",9],["orchestra","管弦乐队",9],["order","命令",9],["ordinary","普通的",9],["organ","器官",9],["organic","有机的",9],["organization","组织",9],["organize","组织",9],["origin","起源",9],["original","原始的",9],["ornament","装饰",9],["ostrich","鸵鸟",9],["otherwise","否则",9],["ought","应该",9],["ounce","盎司",9],["outcome","结果",9],["outdoor","户外的",9],["outer","外部的",9],["outgoing","外向的",9],["outline","概述",9],["outlook","展望",9],["output","输出",9],["outside","外面",9],["outstanding","杰出的",9],["outward","向外的",9],["oval","椭圆形的",9],["oven","烤箱",9],["overall","全面的",9],["overcoat","大衣",9],["overcome","克服",9],["overhead","头顶的",9],["overlook","俯瞰",9],["overseas","海外的",9],["overweight","超重的",9],["owe","欠",9],["owner","所有者",9],["oxygen","氧气",9],["pace","步伐",9],["Pacific","太平洋的",9],["package","包裹",9],["packet","小包",9],["pain","疼痛",9],["painful","痛苦的",9],["painter","画家",9],["painting","绘画",9],["palace","宫殿",9],["pale","苍白的",9],["pan","平底锅",9],["panic","恐慌",9],["pants","裤子",9],["paper","纸",9],["parade","游行",9],["paragraph","段落",9],["parcel","包裹",9],["pardon","原谅",9],["parking","停车",9],["parliament","议会",9],["part","部分",9],["participate","参加",9],["particular","特别的",9],["particularly","特别地",9],["partly","部分地",9],["partner","伙伴",9],["part-time","兼职的",9],["passage","段落",9],["passenger","乘客",9],["passion","热情",9],["passionate","热情的",9],["passive","被动的",9],["passport","护照",9],["password","密码",9],["paste","粘贴",9],["path","小路",9],["patience","耐心",9],["patient","病人",9],["pattern","模式",9],["pause","暂停",9],["pavement","人行道",9],["paw","爪子",9],["pay","支付",9],["payment","支付",9],["pea","豌豆",9],["peace","和平",9],["peaceful","和平的",9],["peach","桃子",9],["peak","山峰",9],["peanut","花生",9],["pear","梨",9],["pearl","珍珠",9],["peasant","农民",9],["peer","同龄人",9],["pence","便士",9],["penguin","企鹅",9],["pension","养老金",9],["pepper","胡椒",9],["percent","百分之",9],["percentage","百分比",9],["perfect","完美的",9],["perform","表演",9],["performance","表演",9],["performer","表演者",9],["perhaps","也许",9],["period","时期",9],["permanent","永久的",9],["permission","许可",9],["permit","允许",9],["persist","坚持",9],["person","人",9],["personal","个人的",9],["personality","个性",9],["perspective","观点",9],["persuade","说服",9],["pet","宠物",9],["petrol","汽油",9],["phenomenon","现象",9],["philosophy","哲学",9],["phone","电话",9],["phrase","短语",9],["physical","身体的",9],["physician","医生",9],["physicist","物理学家",9],["physics","物理",9],["pick","挑选",9],["picnic","野餐",9],["pie","派",9],["pigeon","鸽子",9],["pile","堆",9],["pill","药丸",9],["pillow","枕头",9],["pilot","飞行员",9],["pin","大头针",9],["pine","松树",9],["pineapple","菠萝",9],["ping-pong","乒乓球",9],["pink","粉色的",9],["pioneer","先驱",9],["pipe","管子",9],["pity","遗憾",9],["pizza","披萨",9],["plain","平原",9],["planet","行星",9],["plastic","塑料",9],["plate","盘子",9],["platform","站台",9],["player","选手",9],["playground","操场",9],["pleasant","愉快的",9],["pleasure","快乐",9],["pledge","保证",9],["plenty","大量",9],["plot","情节",9],["plug","插头",9],["plus","加上",9],["pocket","口袋",9],["poem","诗",9],["poet","诗人",9],["poetry","诗歌",9],["poison","毒药",9],["poisonous","有毒的",9],["polar","极地的",9],["pole","杆",9],["policeman","警察",9],["policy","政策",9],["polish","擦亮",9],["polite","礼貌的",9],["political","政治的",9],["politics","政治",9],["pollute","污染",9],["pollution","污染",9],["pond","池塘",9],["pool","水池",9],["pop","流行的",9],["popular","受欢迎的",9],["popularity","流行",9],["population","人口",9],["porch","门廊",9],["port","港口",9],["porter","搬运工",9],["portion","部分",9],["portrait","肖像",9],["position","位置",9],["positive","积极的",9],["possess","拥有",9],["possession","财产",9],["possibility","可能性",9],["possibly","可能地",9],["postcard","明信片",9],["poster","海报",9],["postman","邮递员",9],["postpone","推迟",9],["pot","锅",9],["potential","潜在的",9],["pound","磅",9],["pour","倒",9],["poverty","贫穷",9],["powder","粉末",9],["power","力量",9],["powerful","强大的",9],["practical","实际的",9],["praise","赞扬",9],["pray","祈祷",9],["precious","珍贵的",9],["precise","精确的",9],["predict","预测",9],["prefer","更喜欢",9],["preference","偏爱",9],["pregnant","怀孕的",9],["prejudice","偏见",9],["preparation","准备",9],["prepare","准备",9],["preposition","介词",9],["presence","出席",9],["presentation","展示",9],["preserve","保护",9],["president","总统",9],["press","按",9],["pressure","压力",9],["pretend","假装",9],["prevent","阻止",9],["previous","以前的",9],["price","价格",9],["pride","骄傲",9],["priest","牧师",9],["primary","首要的",9],["prime","首要的",9],["prince","王子",9],["princess","公主",9],["principal","主要的",9],["principle","原则",9],["print","打印",9],["printer","打印机",9],["prior","在先的",9],["priority","优先",9],["prison","监狱",9],["prisoner","囚犯",9],["private","私人的",9],["prize","奖品",9],["probable","可能的",9],["probably","可能",9],["problem","问题",9],["procedure","程序",9],["process","过程",9],["produce","生产",9],["producer","生产者",9],["product","产品",9],["production","生产",9],["profession","职业",9],["professional","专业的",9],["professor","教授",9],["profile","简介",9],["profit","利润",9],["program","节目",9],["progress","进步",9],["prohibit","禁止",9],["project","项目",9],["promise","承诺",9],["promote","促进",9],["prompt","迅速的",9],["pronoun","代词",9],["pronounce","发音",9],["pronunciation","发音",9],["proof","证据",9],["proper","适当的",9],["property","财产",9],["proposal","提议",9],["propose","提议",9],["protect","保护",9],["protection","保护",9],["protein","蛋白质",9],["protest","抗议",9],["proud","骄傲的",9],["prove","证明",9],["provide","提供",9],["province","省",9],["psychology","心理学",9],["pub","酒馆",9],["public","公共的",9],["publish","出版",9],["pull","拉",9],["pulse","脉搏",9],["pump","泵",9],["punctual","准时的",9],["punish","惩罚",9],["punishment","惩罚",9],["pupil","学生",9],["pure","纯的",9],["purple","紫色的",9],["purpose","目的",9],["purse","钱包",9],["push","推",9],["puzzle","谜",9],["qualification","资格",9],["qualify","使具备资格",9],["quality","质量",9],["quantity","数量",9],["quarrel","争吵",9],["quarter","四分之一",9],["queen","女王",9],["queer","奇怪的",9],["quest","探索",9],["queue","排队",9],["quit","放弃",9],["quiver","颤抖",9],["quiz","测验",9],["quotation","引用",9],["quote","引用",9],["rabbit","兔子",9],["race","比赛",9],["racial","种族的",9],["rack","架子",9],["radar","雷达",9],["radiation","辐射",9],["rag","破布",9],["rail","铁轨",9],["railway","铁路",9],["rainbow","彩虹",9],["raise","举起",9],["range","范围",9],["rank","等级",9],["rapid","迅速的",9],["rare","稀有的",9],["rat","老鼠",9],["rate","比率",9],["rather","宁愿",9],["raw","生的",9],["ray","光线",9],["razor","剃刀",9],["reach","到达",9],["react","反应",9],["reaction","反应",9],["real","真实的",9],["reality","现实",9],["realize","意识到",9],["reason","原因",9],["reasonable","合理的",9],["recall","回忆",9],["receipt","收据",9],["receive","收到",9],["recent","最近的",9],["recently","最近",9],["recipe","食谱",9],["recite","背诵",9],["recognize","认出",9],["recommend","推荐",9],["record","记录",9],["recover","恢复",9],["recovery","恢复",9],["recreate","重建",9],["recycle","回收",9],["reduce","减少",9],["reduction","减少",9],["refer","参考",9],["reference","参考",9],["reflect","反映",9],["reflection","反射",9],["reform","改革",9],["refresh","使恢复",9],["refrigerator","冰箱",9],["refuge","避难",9],["refugee","难民",9],["refuse","拒绝",9],["regard","认为",9],["regardless","不管",9],["region","地区",9],["register","登记",9],["regret","后悔",9],["regular","规则的",9],["regularly","定期地",9],["regulate","管理",9],["reject","拒绝",9],["relate","有关",9],["relation","关系",9],["relationship","关系",9],["relative","亲戚",9],["relax","放松",9],["release","释放",9],["relevant","相关的",9],["reliable","可靠的",9],["relief","宽慰",9],["relieve","缓解",9],["religion","宗教",9],["religious","宗教的",9],["rely","依赖",9],["remain","保持",9],["remark","评论",9],["remarkable","非凡的",9],["remind","提醒",9],["remote","遥远的",9],["remove","移除",9],["rent","租",9],["repair","修理",9],["repeat","重复",9],["replace","取代",9],["reply","回复",9],["report","报告",9],["reporter","记者",9],["represent","代表",9],["representative","代表",9],["reputation","名声",9],["request","请求",9],["require","需要",9],["requirement","要求",9],["rescue","营救",9],["research","研究",9],["reservation","预订",9],["reserve","储备",9],["resident","居民",9],["resign","辞职",9],["resist","抵抗",9],["resolve","解决",9],["resource","资源",9],["respect","尊重",9],["respond","回应",9],["response","回应",9],["responsibility","责任",9],["responsible","负责的",9],["restaurant","餐厅",9],["restore","恢复",9],["restrict","限制",9],["result","结果",9],["retell","复述",9],["retire","退休",9],["return","返回",9],["reveal","揭露",9],["revenge","复仇",9],["review","复习",9],["revolution","革命",9],["reward","奖赏",9],["rhyme","押韵",9],["rhythm","节奏",9],["ribbon","丝带",9],["rid","摆脱",9],["ridge","山脊",9],["rifle","步枪",9],["rigid","僵硬的",9],["riot","暴乱",9],["ripe","成熟的",9],["rise","上升",9],["risk","风险",9],["rival","对手",9],["roar","咆哮",9],["roast","烤",9],["rob","抢劫",9],["robber","强盗",9],["robe","长袍",9],["robot","机器人",9],["rock","岩石",9],["rocket","火箭",9],["role","角色",9],["roll","滚动",9],["romantic","浪漫的",9],["roof","屋顶",9],["root","根",9],["rope","绳子",9],["rose","玫瑰",9],["rough","粗糙的",9],["round","圆的",9],["route","路线",9],["routine","常规",9],["row","排",9],["royal","皇家的",9],["rub","摩擦",9],["rubber","橡胶",9],["rude","粗鲁的",9],["rug","地毯",9],["ruin","毁灭",9],["rule","规则",9],["rumor","谣言",9],["runner","跑步者",9],["rural","农村的",9],["rush","冲",9],["sacrifice","牺牲",9],["saddle","马鞍",9],["sail","航行",9],["sailor","水手",9],["salary","薪水",9],["sale","出售",9],["salt","盐",9],["salty","咸的",9],["sample","样品",9],["sand","沙子",9],["sandwich","三明治",9],["satellite","卫星",9],["satisfaction","满意",9],["satisfy","使满意",9],["sauce","酱汁",9],["saucer","茶碟",9],["sausage","香肠",9],["save","拯救",9],["saving","储蓄",9],["scale","规模",9],["scan","扫描",9],["scar","伤疤",9],["scarce","稀少的",9],["scared","害怕的",9],["scarf","围巾",9],["scene","场景",9],["scenery","风景",9],["schedule","日程",9],["scheme","计划",9],["scholar","学者",9],["scholarship","奖学金",9],["schoolbag","书包",9],["science","科学",9],["scientific","科学的",9],["scientist","科学家",9],["scissors","剪刀",9],["scold","责骂",9],["scoop","勺子",9],["scope","范围",9],["score","得分",9],["Scotland","苏格兰",9],["scratch","抓",9],["scream","尖叫",9],["screen","屏幕",9],["screw","螺丝",9],["sculpture","雕塑",9],["seal","封印",9],["search","搜索",9],["season","季节",9],["second","第二",9],["secret","秘密",9],["secretary","秘书",9],["section","部分",9],["secure","安全的",9],["security","安全",9],["seed","种子",9],["seek","寻找",9],["seem","似乎",9],["seize","抓住",9],["seldom","很少",9],["select","选择",9],["selection","选择",9],["self","自己",9],["selfish","自私的",9],["semester","学期",9],["senior","高级的",9],["sense","感觉",9],["sensible","明智的",9],["sensitive","敏感的",9],["sentence","句子",9],["separate","分开的",9],["September","九月",9],["series","系列",9],["serious","严肃的",9],["servant","仆人",9],["serve","服务",9],["service","服务",9],["session","会议",9],["set","设置",9],["settle","解决",9],["settlement","解决",9],["seven","七",9],["severe","严重的",9],["sew","缝",9],["sex","性别",9],["shabby","破旧的",9],["shade","阴凉",9],["shadow","影子",9],["shake","摇动",9],["shall","将要",9],["shallow","浅的",9],["shame","羞耻",9],["shape","形状",9],["share","分享",9],["shark","鲨鱼",9],["sharp","锋利的",9],["shave","刮脸",9],["shed","棚",9],["sheet","床单",9],["shelf","架子",9],["shell","壳",9],["shelter","庇护",9],["shock","震惊",9],["shoot","射击",9],["shore","岸",9],["shortcoming","缺点",9],["shortly","不久",9],["shot","射击",9],["should","应该",9],["shoulder","肩膀",9],["shout","喊叫",9],["shower","淋浴",9],["shrink","收缩",9],["shut","关闭",9],["shuttle","梭子",9],["shy","害羞的",9],["sidewalk","人行道",9],["sigh","叹气",9],["sight","视觉",9],["sightseeing","观光",9],["sign","标志",9],["signal","信号",9],["signature","签名",9],["significance","意义",9],["significant","重要的",9],["silence","沉默",9],["silent","沉默的",9],["silk","丝绸",9],["silly","傻的",9],["silver","银",9],["similar","相似的",9],["simple","简单的",9],["simply","简单地",9],["since","自从",9],["sincere","真诚的",9],["single","单一的",9],["sink","下沉",9],["site","地点",9],["situation","情况",9],["size","尺寸",9],["skill","技能",9],["skilled","熟练的",9],["skin","皮肤",9],["skull","头骨",9],["skyscraper","摩天大楼",9],["slave","奴隶",9],["sleeve","袖子",9],["slice","薄片",9],["slide","滑动",9],["slight","轻微的",9],["slim","苗条的",9],["slip","滑倒",9],["slope","斜坡",9],["smog","烟雾",9],["smoke","烟",9],["smooth","光滑的",9],["snack","零食",9],["snake","蛇",9],["sneaker","运动鞋",9],["snowman","雪人",9],["soap","肥皂",9],["soccer","足球",9],["social","社会的",9],["society","社会",9],["soda","苏打",9],["soft","软的",9],["software","软件",9],["soil","土壤",9],["soldier","士兵",9],["solid","固体的",9],["solution","解决方案",9],["solve","解决",9],["somebody","某人",9],["someone","某人",9],["something","某事",9],["sometimes","有时",9],["somewhere","某地",9],["sore","疼痛的",9],["sort","种类",9],["soul","灵魂",9],["sour","酸的",9],["source","来源",9],["southern","南方的",9],["souvenir","纪念品",9],["space","空间",9],["spaceship","宇宙飞船",9],["spade","铲子",9],["Spain","西班牙",9],["spare","空闲的",9],["spark","火花",9],["sparrow","麻雀",9],["special","特别的",9],["specialist","专家",9],["speech","演讲",9],["speed","速度",9],["spider","蜘蛛",9],["spirit","精神",9],["spiritual","精神的",9],["spit","吐",9],["splash","溅",9],["split","分开",9],["spoil","溺爱",9],["sponsor","赞助",9],["spoon","勺子",9],["spot","斑点",9],["spread","传播",9],["spy","间谍",9],["square","广场",9],["stable","稳定的",9],["stadium","体育场",9],["staff","员工",9],["stage","舞台",9],["stair","楼梯",9],["standard","标准",9],["stare","凝视",9],["starve","挨饿",9],["state","状态",9],["statement","声明",9],["steady","稳定的",9],["steak","牛排",9],["steal","偷",9],["steam","蒸汽",9],["steel","钢",9],["steep","陡峭的",9],["step","步骤",9],["stick","棍子",9],["sticky","粘的",9],["stiff","僵硬的",9],["sting","刺",9],["stir","搅拌",9],["stocking","长袜",9],["stomach","胃",9],["stomachache","胃痛",9],["stone","石头",9],["storey","楼层",9],["storm","暴风雨",9],["stove","炉子",9],["straight","直的",9],["strait","海峡",9],["strange","奇怪的",9],["stranger","陌生人",9],["strategy","策略",9],["straw","稻草",9],["strawberry","草莓",9],["stream","小溪",9],["street","街道",9],["strength","力量",9],["strengthen","加强",9],["stress","压力",9],["stretch","伸展",9],["strict","严格的",9],["strike","罢工",9],["string","绳子",9],["strong","强壮的",9],["struggle","斗争",9],["studio","工作室",9],["stuff","东西",9],["stupid","愚蠢的",9],["style","风格",9],["submit","提交",9],["substance","物质",9],["suburb","郊区",9],["subway","地铁",9],["succeed","成功",9],["success","成功",9],["successful","成功的",9],["suck","吸",9],["sudden","突然的",9],["suddenly","突然",9],["suffer","遭受",9],["sufficient","足够的",9],["suggest","建议",9],["suggestion","建议",9],["suit","套装",9],["suitable","合适的",9],["suitcase","手提箱",9],["sum","总数",9],["summary","摘要",9],["sunlight","阳光",9],["sunrise","日出",9],["sunset","日落",9],["sunshine","阳光",9],["superior","优越的",9],["supermarket","超市",9],["supper","晚餐",9],["supply","供应",9],["support","支持",9],["suppose","假设",9],["surf","冲浪",9],["surface","表面",9],["surgeon","外科医生",9],["surgery","手术",9],["surprise","惊讶",9],["surround","包围",9],["survey","调查",9],["survival","生存",9],["survive","幸存",9],["suspect","怀疑",9],["swallow","吞咽",9],["swan","天鹅",9],["swap","交换",9],["swear","发誓",9],["sweat","汗水",9],["sweater","毛衣",9],["sweep","扫",9],["swell","膨胀",9],["swift","迅速的",9],["swing","摇摆",9],["switch","开关",9],["sword","剑",9],["syllable","音节",9],["symbol","象征",9],["sympathy","同情",9],["symphony","交响乐",9],["symptom","症状",9],["system","系统",9],["tablet","药片",9],["tag","标签",9],["tail","尾巴",9],["tailor","裁缝",9],["tale","故事",9],["talent","天赋",9],["tank","坦克",9],["tap","水龙头",9],["tape","磁带",9],["target","目标",9],["task","任务",9],["taste","味道",9],["tax","税",9],["tear","眼泪",9],["technical","技术的",9],["technique","技术",9],["technology","技术",9],["teenager","青少年",9],["telegram","电报",9],["telephone","电话",9],["telescope","望远镜",9],["television","电视",9],["temper","脾气",9],["temperature","温度",9],["temple","寺庙",9],["temporary","临时的",9],["tempt","诱惑",9],["tend","倾向于",9],["tendency","趋势",9],["tense","紧张的",9],["terrible","可怕的",9],["terrific","极好的",9],["terrify","使恐惧",9],["territory","领土",9],["terror","恐怖",9],["text","文本",9],["textbook","教科书",9],["the","这",9],["theater","剧院",9],["theft","盗窃",9],["theme","主题",9],["theory","理论",9],["therefore","因此",9],["thick","厚的",9],["thief","小偷",9],["thin","薄的",9],["thirst","口渴",9],["thirty","三十",9],["thorough","彻底的",9],["though","虽然",9],["thought","想法",9],["thousand","千",9],["thread","线",9],["threat","威胁",9],["threaten","威胁",9],["thrill","激动",9],["throat","喉咙",9],["through","通过",9],["throughout","遍及",9],["throw","扔",9],["thumb","拇指",9],["thunder","雷",9],["thus","因此",9],["tide","潮汐",9],["tidy","整洁的",9],["tie","系",9],["tight","紧的",9],["till","直到",9],["timetable","时刻表",9],["tiny","微小的",9],["tip","尖端",9],["tissue","纸巾",9],["title","标题",9],["toast","烤面包",9],["tobacco","烟草",9],["toe","脚趾",9],["toilet","厕所",9],["tomb","坟墓",9],["ton","吨",9],["tone","语调",9],["tongue","舌头",9],["tool","工具",9],["toothache","牙痛",9],["toothbrush","牙刷",9],["toothpaste","牙膏",9],["topic","话题",9],["torch","手电筒",9],["total","总的",9],["totally","完全",9],["touch","触摸",9],["tough","坚韧的",9],["tourism","旅游业",9],["tourist","游客",9],["toward","朝",9],["towel","毛巾",9],["tower","塔",9],["trace","痕迹",9],["track","轨道",9],["trade","贸易",9],["tradition","传统",9],["traditional","传统的",9],["traffic","交通",9],["tragedy","悲剧",9],["training","训练",9],["transfer","转移",9],["translate","翻译",9],["translation","翻译",9],["translator","翻译者",9],["transport","运输",9],["transportation","交通",9],["trap","陷阱",9],["trash","垃圾",9],["tray","托盘",9],["treasure","宝藏",9],["treat","对待",9],["treatment","治疗",9],["tremble","颤抖",9],["tremendous","巨大的",9],["trend","趋势",9],["trial","审判",9],["triangle","三角形",9],["trick","诡计",9],["triumph","胜利",9],["troops","军队",9],["tropical","热带的",9],["trousers","裤子",9],["truly","真正地",9],["trumpet","喇叭",9],["trust","信任",9],["truth","真相",9],["T-shirt","T恤",9],["tube","管子",9],["tunnel","隧道",9],["turkey","火鸡",9],["twentieth","第二十",9],["twice","两次",9],["twin","双胞胎",9],["twist","扭曲",9],["type","类型",9],["typewriter","打字机",9],["typhoon","台风",9],["typical","典型的",9],["ugly","丑陋的",9],["umbrella","雨伞",9],["unable","不能的",9],["undergo","经历",9],["underground","地下的",9],["underline","下划线",9],["understand","理解",9],["understanding","理解",9],["unfair","不公平的",9],["unfortunately","不幸地",9],["unhappy","不快乐的",9],["uniform","制服",9],["union","联盟",9],["unique","独特的",9],["unit","单位",9],["unite","团结",9],["universe","宇宙",9],["university","大学",9],["unknown","未知的",9],["unless","除非",9],["unlike","不像",9],["unlikely","不太可能的",9],["until","直到",9],["unusual","不寻常的",9],["update","更新",9],["upon","在...上",9],["upper","上面的",9],["upset","心烦的",9],["upstairs","楼上",9],["up-to-date","最新的",9],["urban","城市的",9],["urge","催促",9],["urgent","紧急的",9],["used","习惯的",9],["useful","有用的",9],["useless","无用的",9],["user","用户",9],["usual","通常的",9],["vacant","空的",9],["vacation","假期",9],["vacuum","真空",9],["vague","模糊的",9],["vain","徒劳的",9],["valid","有效的",9],["valley","山谷",9],["valuable","有价值的",9],["value","价值",9],["van","货车",9],["vanish","消失",9],["variety","多样性",9],["various","各种各样的",9],["vary","变化",9],["vast","广阔的",9],["vegetable","蔬菜",9],["vehicle","车辆",9],["venture","冒险",9],["verb","动词",9],["version","版本",9],["vest","背心",9],["via","通过",9],["vice","副的",9],["victim","受害者",9],["victory","胜利",9],["video","视频",9],["view","观点",9],["village","村庄",9],["violence","暴力",9],["violent","暴力的",9],["violin","小提琴",9],["virus","病毒",9],["visa","签证",9],["visible","可见的",9],["vision","视觉",9],["visitor","访客",9],["vital","至关重要的",9],["vivid","生动的",9],["vocabulary","词汇",9],["voice","声音",9],["volcano","火山",9],["volleyball","排球",9],["volume","音量",9],["voluntary","自愿的",9],["volunteer","志愿者",9],["vote","投票",9],["voyage","航行",9],["wage","工资",9],["waist","腰",9],["waiter","服务员",9],["waitress","女服务员",9],["wallet","钱包",9],["wander","漫游",9],["war","战争",9],["warn","警告",9],["waste","浪费",9],["waterfall","瀑布",9],["watermelon","西瓜",9],["wave","波浪",9],["weak","弱的",9],["weakness","弱点",9],["wealth","财富",9],["weapon","武器",9],["weave","编织",9],["web","网",9],["website","网站",9],["wedding","婚礼",9],["weed","杂草",9],["weekday","工作日",9],["weekly","每周的",9],["weep","哭泣",9],["weigh","称重",9],["weight","重量",9],["welfare","福利",9],["well-known","著名的",9],["western","西方的",9],["wet","湿的",9],["whale","鲸鱼",9],["wheat","小麦",9],["wheel","轮子",9],["whenever","每当",9],["wherever","无论哪里",9],["whether","是否",9],["whisper","低语",9],["whistle","口哨",9],["whole","整个的",9],["whom","谁",9],["wide","宽的",9],["widely","广泛地",9],["widespread","普遍的",9],["width","宽度",9],["wildlife","野生动物",9],["willing","愿意的",9],["win","赢",9],["wine","酒",9],["wing","翅膀",9],["winner","获胜者",9],["wipe","擦",9],["wire","电线",9],["wisdom","智慧",9],["wise","明智的",9],["withdraw","撤回",9],["within","在...内",9],["without","没有",9],["witness","目击者",9],["wolf","狼",9],["wonder","想知道",9],["wood","木头",9],["wooden","木制的",9],["woods","树林",9],["wool","羊毛",9],["workshop","车间",9],["worldwide","全世界的",9],["worm","蠕虫",9],["worried","担心的",9],["worse","更坏的",9],["worship","崇拜",9],["worst","最坏的",9],["worth","值得的",9],["worthwhile","值得的",9],["would","将",9],["wound","伤口",9],["wrap","包",9],["wrist","手腕",9],["writer","作家",9],["writing","写作",9],["X-ray","X光",9],["yard","院子",9],["yesterday","昨天",9],["yoga","瑜伽",9],["yogurt","酸奶",9],["youngster","年轻人",9],["youth","青春",9],["yummy","美味的",9],["zebra","斑马",9],["zip","拉链",9],["zone","区域",9],["zoom","缩放",9],["abide","遵守",8],["abound","充满",8],["abreast","并排",8],["abstain","戒除",8],["absurdly","荒谬地",8],["abundance","丰富",8],["accent","口音",8],["acceptance","接受",8],["accessory","配饰",8],["acclaim","欢呼",8],["accord","一致",8],["accordance","一致",8],["accordingly","因此",8],["accountant","会计",8],["accumulate","积累",8],["accuracy","准确",8],["accustomed","习惯的",8],["acquisition","获得",8],["acrobat","杂技演员",8],["acting","代理的",8],["activate","激活",8],["activist","活动家",8],["acute","急性的",8],["adaptable","适应力强的",8],["additional","额外的",8],["adhere","坚持",8],["adjacent","相邻的",8],["adjective","形容词",8],["administer","管理",8],["admirable","令人钦佩的",8],["admiral","海军上将",8],["admiration","钦佩",8],["admission","入场",8],["adolescent","青少年",8],["adore","崇拜",8],["adorn","装饰",8],["advancement","进步",8],["advent","到来",8],["adverb","副词",8],["adversary","对手",8],["adverse","不利的",8],["advertisement","广告",8],["advisable","明智的",8],["advise","建议",8],["advocate","提倡",8],["aerial","空中的",8],["aesthetic","审美的",8],["affection","感情",8],["affirmative","肯定的",8],["afloat","漂浮地",8],["agenda","议程",8],["aggravate","恶化",8],["aggregate","总计",8],["agitate","煽动",8],["agony","痛苦",8],["agreeable","令人愉快的",8],["airliner","客机",8],["airmail","航空邮件",8],["alert","警觉的",8],["algebra","代数",8],["alien","外星人",8],["alignment","列队",8],["alley","小巷",8],["alliance","联盟",8],["allocate","分配",8],["allowance","津贴",8],["alloy","合金",8],["alongside","在...旁边",8],["alpine","高山的",8],["alter","改变",8],["alternate","交替",8],["amateur","业余的",8],["amber","琥珀",8],["ambiguity","含糊",8],["amend","修正",8],["amid","在...中",8],["amongst","在...之中",8],["ample","充足的",8],["amplify","放大",8],["analogy","类比",8],["analyse","分析",8],["analysis","分析",8],["ancestor","祖先",8],["anchor","锚",8],["anecdote","轶事",8],["anguish","痛苦",8],["anonymous","匿名的",8],["antenna","触角",8],["anthem","颂歌",8],["anticipate","预期",8],["antique","古董",8],["anyhow","无论如何",8],["ape","猿",8],["apparent","明显的",8],["apparently","显然地",8],["appeal","呼吁",8],["appliance","器具",8],["applicable","适用的",8],["applicant","申请人",8],["apprehension","忧虑",8],["apricot","杏子",8],["apt","恰当的",8],["aquarium","水族馆",8],["arbitrary","武断的",8],["archaeology","考古学",8],["archive","档案",8],["arena","竞技场",8],["arithmetic","算术",8],["armor","盔甲",8],["arouse","唤起",8],["array","阵列",8],["artillery","大炮",8],["artisan","工匠",8],["artwork","艺术品",8],["ascend","上升",8],["ascertain","查明",8],["ashtray","烟灰缸",8],["aspiration","渴望",8],["assert","断言",8],["assess","评估",8],["asset","资产",8],["assimilate","吸收",8],["assistance","帮助",8],["association","协会",8],["assurance","保证",8],["asterisk","星号",8],["astonish","使惊讶",8],["atlas","地图集",8],["attain","达到",8],["attic","阁楼",8],["attire","服装",8],["attorney","律师",8],["attribute","归因于",8],["auction","拍卖",8],["audio","音频",8],["audit","审计",8],["augment","增加",8],["aurora","极光",8],["authentic","真正的",8],["automobile","汽车",8],["autonomous","自治的",8],["auxiliary","辅助的",8],["avail","有用",8],["avalanche","雪崩",8],["avenge","报仇",8],["aviation","航空",8],["awe","敬畏",8],["backbone","脊骨",8],["backup","备份",8],["baffle","使困惑",8],["ballot","投票",8],["ban","禁止",8],["bandit","强盗",8],["bankrupt","破产的",8],["banner","旗帜",8],["banquet","宴会",8],["barely","仅仅",8],["barn","谷仓",8],["barometer","气压计",8],["barricade","路障",8],["batch","一批",8],["battlefield","战场",8],["beacon","灯塔",8],["bead","珠子",8],["bearing","关系",8],["beast","野兽",8],["beverage","饮料",8],["beware","当心",8],["bewilder","使迷惑",8],["bid","出价",8],["billboard","广告牌",8],["binary","二进制的",8],["bishop","主教",8],["bizarre","古怪的",8],["blacksmith","铁匠",8],["blaze","火焰",8],["bleach","漂白",8],["blizzard","暴风雪",8],["blockade","封锁",8],["blossom","开花",8],["blueprint","蓝图",8],["blunder","愚蠢错误",8],["blunt","钝的",8],["blur","模糊",8],["boast","自夸",8],["bolt","螺栓",8],["bonus","奖金",8],["booklet","小册子",8],["bookmark","书签",8],["booming","繁荣的",8],["borderline","边界",8],["borough","自治市",8],["boulder","巨石",8],["bouquet","花束",8],["bourbon","波旁威士忌",8],["boutique","精品店",8],["brace","支撑",8],["bracket","括号",8],["brag","吹牛",8],["braid","编辫子",8],["brass","黄铜",8],["breach","违反",8],["breakdown","故障",8],["breakthrough","突破",8],["breeze","微风",8],["brew","酿造",8],["brigade","旅",8],["brink","边缘",8],["brisk","轻快的",8],["brochure","小册子",8],["bronze","青铜",8],["brood","一窝",8],["broom","扫帚",8],["browse","浏览",8],["bruise","瘀伤",8],["brunch","早午餐",8],["brutal","残忍的",8],["buckle","扣子",8],["buffalo","水牛",8],["buffer","缓冲",8],["bulletin","公告",8],["bully","欺凌",8],["bumper","保险杠",8],["bunk","铺位",8],["bureaucracy","官僚主义",8],["burglar","窃贼",8],["burner","燃烧器",8],["burrow","洞穴",8],["butler","管家",8],["buzz","嗡嗡声",8],["byte","字节",8],["cabinet","内阁",8],["cactus","仙人掌",8],["cadet","军校生",8],["calamity","灾难",8],["calcium","钙",8],["caliber","口径",8],["calorie","卡路里",8],["cane","手杖",8],["canine","犬的",8],["canopy","树冠",8],["canteen","食堂",8],["canvas","帆布",8],["canyon","峡谷",8],["cape","海角",8],["capsule","胶囊",8],["caption","标题",8],["carnival","狂欢节",8],["carpenter","木匠",8],["carve","雕刻",8],["cascade","小瀑布",8],["casino","赌场",8],["casket","棺材",8],["casualty","伤亡",8],["catastrophe","大灾难",8],["cater","提供饮食",8],["cathedral","大教堂",8],["cavalry","骑兵",8],["cavern","大洞穴",8],["cavity","腔",8],["cease","停止",8],["cedar","雪松",8],["celebrity","名人",8],["cellar","地窖",8],["cement","水泥",8],["cemetery","墓地",8],["censor","审查",8],["census","人口普查",8],["ceramic","陶瓷的",8],["cereal","谷类",8],["chancellor","总理",8],["chaos","混乱",8],["characteristic","特征",8],["checkout","结账",8],["cherish","珍爱",8],["chestnut","栗子",8],["chick","小鸡",8],["chimney","烟囱",8],["chivalry","骑士精神",8],["choir","唱诗班",8],["chord","和弦",8],["Christ","基督",8],["chronicle","编年史",8],["chuckle","轻笑",8],["cinder","煤渣",8],["circulate","循环",8],["circumstance","情况",8],["circus","马戏团",8],["cite","引用",8],["civilian","平民",8],["clamp","夹子",8],["clarity","清晰",8],["clash","冲突",8],["clasp","扣紧",8],["classify","分类",8],["clatter","咔嗒声",8],["cleanse","清洁",8],["clearance","清除",8],["clergy","神职人员",8],["climax","高潮",8],["cling","紧抓",8],["clip","夹子",8],["clockwise","顺时针",8],["clone","克隆",8],["closet","壁橱",8],["clumsy","笨拙的",8],["clutch","抓住",8],["coarse","粗糙的",8],["coastline","海岸线",8],["coating","涂层",8],["cobble","鹅卵石",8],["cobra","眼镜蛇",8],["coexist","共存",8],["cogent","有说服力的",8],["coil","线圈",8],["coincide","巧合",8],["collide","碰撞",8],["colloquial","口语的",8],["colonel","上校",8],["colonial","殖民的",8],["column","柱",8],["combat","战斗",8],["combination","结合",8],["comet","彗星",8],["comic","滑稽的",8],["commemorate","纪念",8],["commence","开始",8],["commend","表扬",8],["commodity","商品",8],["commonplace","平凡的",8],["commonsense","常识的",8],["communal","公共的",8],["communist","共产主义的",8],["compact","紧凑的",8],["comparable","可比较的",8],["compass","罗盘",8],["compassion","同情",8],["compatible","兼容的",8],["compel","强迫",8],["compensate","补偿",8],["competent","胜任的",8],["compile","编辑",8],["complaint","抱怨",8],["complement","补充",8],["complexion","肤色",8],["compliance","顺从",8],["complicate","使复杂",8],["compliment","赞美",8],["comply","遵从",8],["component","成分",8],["comprehensive","全面的",8],["comprise","包括",8],["compulsory","强制的",8],["compute","计算",8],["concave","凹的",8],["concede","让步",8],["conceive","构想",8],["concession","让步",8],["concise","简明的",8],["condemn","谴责",8],["condense","凝结",8],["condone","宽恕",8],["cone","圆锥",8],["confess","坦白",8],["confide","信赖",8],["confidential","机密的",8],["configuration","配置",8],["confine","限制",8],["confiscate","没收",8],["conform","遵从",8],["confound","使混乱",8],["confront","面对",8],["congenial","意气相投的",8],["congestion","拥挤",8],["conscience","良心",8],["consecutive","连续的",8],["consensus","共识",8],["consent","同意",8],["conservative","保守的",8],["conserve","保存",8],["considerable","相当大的",8],["console","控制台",8],["consolidate","巩固",8],["conspicuous","显眼的",8],["conspiracy","阴谋",8],["constitution","宪法",8],["consumer","消费者",8],["contagious","传染的",8],["contemplate","沉思",8],["contempt","轻蔑",8],["contend","竞争",8],["contingent","可能的",8],["continual","频繁的",8],["contrive","发明",8],["controversial","有争议的",8],["convenience","便利",8],["converge","汇聚",8],["conversion","转换",8],["convert","转变",8],["convey","传达",8],["convict","定罪",8],["conviction","定罪",8],["coordinate","协调",8],["copyright","版权",8],["cork","软木塞",8],["corps","军团",8],["corrode","腐蚀",8],["corrupt","腐败的",8],["cosmetic","化妆品",8],["cosmic","宇宙的",8],["counsel","忠告",8],["counterpart","对应物",8],["coupon","优惠券",8],["courteous","有礼貌的",8],["courtesy","礼貌",8],["coverage","覆盖范围",8],["cradle","摇篮",8],["craftsman","工匠",8],["cramp","抽筋",8],["crane","鹤",8],["crater","火山口",8],["crave","渴望",8],["crawl","爬行",8],["craze","狂热",8],["credential","证书",8],["credible","可信的",8],["creek","小溪",8],["creep","爬行",8],["crest","山顶",8],["cricket","蟋蟀",8],["crimson","深红的",8],["cripple","使跛",8],["crisp","脆的",8],["criterion","标准",8],["criticism","批评",8],["crocodile","鳄鱼",8],["crooked","弯曲的",8],["crossroad","交叉路",8],["crouch","蹲伏",8],["crude","粗糙的",8],["cruise","巡航",8],["crumb","面包屑",8],["crusade","十字军",8],["crush","压碎",8],["crust","外壳",8],["crutch","拐杖",8],["cub","幼兽",8],["cuckoo","布谷鸟",8],["cuddle","拥抱",8],["culminate","达到顶点",8],["cultivate","耕作",8],["cumbersome","笨重的",8],["cunning","狡猾的",8],["curator","馆长",8],["curb","抑制",8],["curl","卷发",8],["curriculum","课程",8],["curse","诅咒",8],["cursor","光标",8],["cutlery","餐具",8],["cyberspace","网络空间",8],["cyclone","旋风",8]];

if (typeof window !== "undefined") { window.WORDS = WORDS_CORE; }
