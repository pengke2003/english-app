/**
 * 初中英语词库数据 (ECDICT增强版)
 * 总计 4011 词
 * CORE: 含完整音标/词性/释义/例句的核心词
 * EXTRA: 紧凑格式 [en, cn, grade, pos?, phonetic?]
 * 词性/音标数据来源: ECDICT开源词典
 */
const WORDS_CORE = [
  {
    "en": "hello",
    "phonetic": "/hә'lәu/",
    "pos": "int.",
    "cn": "你好",
    "example": "Hello, everyone!",
    "grade": 7
  },
  {
    "en": "good",
    "phonetic": "/gud/",
    "pos": "n.",
    "cn": "好的",
    "example": "He is a good student.",
    "grade": 7
  },
  {
    "en": "morning",
    "phonetic": "/'mɒ:niŋ/",
    "pos": "n.",
    "cn": "早晨；上午",
    "example": "Good morning, teacher!",
    "grade": 7
  },
  {
    "en": "name",
    "phonetic": "/neim/",
    "pos": "n.",
    "cn": "名字",
    "example": "My name is Li Ming.",
    "grade": 7
  },
  {
    "en": "this",
    "phonetic": "/θis/",
    "pos": "pron.",
    "cn": "这；这个",
    "example": "This is my friend.",
    "grade": 7
  },
  {
    "en": "meet",
    "phonetic": "/mi:t/",
    "pos": "n.",
    "cn": "遇见；相逢",
    "example": "Nice to meet you.",
    "grade": 7
  },
  {
    "en": "too",
    "phonetic": "/tu:/",
    "pos": "adv.",
    "cn": "也；太",
    "example": "I like apples, too.",
    "grade": 7
  },
  {
    "en": "thank",
    "phonetic": "/θæŋk/",
    "pos": "n.",
    "cn": "谢谢",
    "example": "Thank you very much.",
    "grade": 7
  },
  {
    "en": "teacher",
    "phonetic": "/'ti:tʃә/",
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
    "phonetic": "/sku:l/",
    "pos": "n.",
    "cn": "学校",
    "example": "I go to school by bus.",
    "grade": 7
  },
  {
    "en": "student",
    "phonetic": "/'stju:dnt/",
    "pos": "n.",
    "cn": "学生",
    "example": "He is a new student.",
    "grade": 7
  },
  {
    "en": "book",
    "phonetic": "/buk/",
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
    "phonetic": "/'pensl/",
    "pos": "n.",
    "cn": "铅笔",
    "example": "My pencil is broken.",
    "grade": 7
  },
  {
    "en": "bag",
    "phonetic": "/bæg/",
    "pos": "n.",
    "cn": "书包；袋子",
    "example": "My bag is heavy.",
    "grade": 7
  },
  {
    "en": "class",
    "phonetic": "/klɑ:s/",
    "pos": "n.",
    "cn": "班级；课",
    "example": "We have English class.",
    "grade": 7
  },
  {
    "en": "grade",
    "phonetic": "/greid/",
    "pos": "n.",
    "cn": "年级",
    "example": "I am in Grade Seven.",
    "grade": 7
  },
  {
    "en": "father",
    "phonetic": "/'fɑ:ðә/",
    "pos": "n.",
    "cn": "父亲",
    "example": "My father is a doctor.",
    "grade": 7
  },
  {
    "en": "mother",
    "phonetic": "/'mʌðә/",
    "pos": "n.",
    "cn": "母亲",
    "example": "Her mother cooks well.",
    "grade": 7
  },
  {
    "en": "brother",
    "phonetic": "/'brʌðә/",
    "pos": "n.",
    "cn": "哥哥；弟弟",
    "example": "My brother is tall.",
    "grade": 7
  },
  {
    "en": "sister",
    "phonetic": "/'sistә/",
    "pos": "n.",
    "cn": "姐姐；妹妹",
    "example": "His sister is cute.",
    "grade": 7
  },
  {
    "en": "family",
    "phonetic": "/'fæmәli/",
    "pos": "n.",
    "cn": "家庭",
    "example": "I love my family.",
    "grade": 7
  },
  {
    "en": "apple",
    "phonetic": "/'æpl/",
    "pos": "n.",
    "cn": "苹果",
    "example": "An apple a day is good.",
    "grade": 7
  },
  {
    "en": "banana",
    "phonetic": "/bә'nɑ:nә/",
    "pos": "n.",
    "cn": "香蕉",
    "example": "I like bananas.",
    "grade": 7
  },
  {
    "en": "orange",
    "phonetic": "/'ɒ:rindʒ/",
    "pos": "n.",
    "cn": "橙子；橙色",
    "example": "The orange is sweet.",
    "grade": 7
  },
  {
    "en": "color",
    "phonetic": "/'kʌlә/",
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
    "phonetic": "/blu:/",
    "pos": "n.",
    "cn": "蓝色的",
    "example": "The sky is blue.",
    "grade": 7
  },
  {
    "en": "yellow",
    "phonetic": "/'jelәu/",
    "pos": "n.",
    "cn": "黄色的",
    "example": "The banana is yellow.",
    "grade": 7
  },
  {
    "en": "green",
    "phonetic": "/gri:n/",
    "pos": "n.",
    "cn": "绿色的",
    "example": "The tree is green.",
    "grade": 7
  },
  {
    "en": "black",
    "phonetic": "/blæk/",
    "pos": "n.",
    "cn": "黑色的",
    "example": "My hair is black.",
    "grade": 7
  },
  {
    "en": "white",
    "phonetic": "/hwait/",
    "pos": "n.",
    "cn": "白色的",
    "example": "The cloud is white.",
    "grade": 7
  },
  {
    "en": "small",
    "phonetic": "/smɒ:l/",
    "pos": "adj.",
    "cn": "小的",
    "example": "The cat is small.",
    "grade": 7
  },
  {
    "en": "big",
    "phonetic": "/big/",
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
    "phonetic": "/ʃɒ:t/",
    "pos": "adj.",
    "cn": "短的；矮的",
    "example": "He is short.",
    "grade": 7
  },
  {
    "en": "happy",
    "phonetic": "/'hæpi/",
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
    "phonetic": "/nju:/",
    "pos": "adj.",
    "cn": "新的",
    "example": "I have a new bike.",
    "grade": 7
  },
  {
    "en": "old",
    "phonetic": "/әuld/",
    "pos": "n.",
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
    "phonetic": "/dɒg/",
    "pos": "n.",
    "cn": "狗",
    "example": "His dog is clever.",
    "grade": 7
  },
  {
    "en": "bird",
    "phonetic": "/bә:d/",
    "pos": "n.",
    "cn": "鸟",
    "example": "The bird can fly.",
    "grade": 7
  },
  {
    "en": "fish",
    "phonetic": "/fiʃ/",
    "pos": "n.",
    "cn": "鱼",
    "example": "I like eating fish.",
    "grade": 7
  },
  {
    "en": "have",
    "phonetic": "/hæv/",
    "pos": "vt.",
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
    "phonetic": "/du:/",
    "pos": "v.",
    "cn": "做；干",
    "example": "What do you do?",
    "grade": 7
  },
  {
    "en": "go",
    "phonetic": "/gou/",
    "pos": "vi.",
    "cn": "去",
    "example": "I go to school.",
    "grade": 7
  },
  {
    "en": "come",
    "phonetic": "/kʌm/",
    "pos": "vi.",
    "cn": "来",
    "example": "Come here, please.",
    "grade": 7
  },
  {
    "en": "see",
    "phonetic": "/si:/",
    "pos": "vt.",
    "cn": "看见",
    "example": "I see a bird.",
    "grade": 7
  },
  {
    "en": "look",
    "phonetic": "/luk/",
    "pos": "n.",
    "cn": "看",
    "example": "Look at the sky.",
    "grade": 7
  },
  {
    "en": "play",
    "phonetic": "/plei/",
    "pos": "n.",
    "cn": "玩；演奏",
    "example": "Let's play football.",
    "grade": 7
  },
  {
    "en": "like",
    "phonetic": "/laik/",
    "pos": "v.",
    "cn": "喜欢",
    "example": "I like music.",
    "grade": 7
  },
  {
    "en": "love",
    "phonetic": "/lʌv/",
    "pos": "n.",
    "cn": "爱；热爱",
    "example": "I love my mom.",
    "grade": 7
  },
  {
    "en": "eat",
    "phonetic": "/i:t/",
    "pos": "v.",
    "cn": "吃",
    "example": "I eat breakfast.",
    "grade": 7
  },
  {
    "en": "drink",
    "phonetic": "/driŋk/",
    "pos": "n.",
    "cn": "喝",
    "example": "Drink some water.",
    "grade": 7
  },
  {
    "en": "run",
    "phonetic": "/rʌn/",
    "pos": "n.",
    "cn": "跑",
    "example": "He runs fast.",
    "grade": 7
  },
  {
    "en": "walk",
    "phonetic": "/wɒ:k/",
    "pos": "n.",
    "cn": "走；散步",
    "example": "We walk to school.",
    "grade": 7
  },
  {
    "en": "sing",
    "phonetic": "/siŋ/",
    "pos": "vi.",
    "cn": "唱歌",
    "example": "She sings well.",
    "grade": 7
  },
  {
    "en": "dance",
    "phonetic": "/dæns. dɑ:ns/",
    "pos": "n.",
    "cn": "跳舞",
    "example": "They dance happily.",
    "grade": 7
  },
  {
    "en": "read",
    "phonetic": "/ri:d/",
    "pos": "v.",
    "cn": "读",
    "example": "I read books every day.",
    "grade": 7
  },
  {
    "en": "write",
    "phonetic": "/rait/",
    "pos": "vt.",
    "cn": "写",
    "example": "Write your name here.",
    "grade": 7
  },
  {
    "en": "help",
    "phonetic": "/help/",
    "pos": "n.",
    "cn": "帮助",
    "example": "Can you help me?",
    "grade": 7
  },
  {
    "en": "want",
    "phonetic": "/wɒnt/",
    "pos": "n.",
    "cn": "想要",
    "example": "I want an apple.",
    "grade": 7
  },
  {
    "en": "need",
    "phonetic": "/ni:d/",
    "pos": "n.",
    "cn": "需要",
    "example": "I need some help.",
    "grade": 7
  },
  {
    "en": "buy",
    "phonetic": "/bai/",
    "pos": "vt.",
    "cn": "买",
    "example": "I buy a book.",
    "grade": 7
  },
  {
    "en": "time",
    "phonetic": "/taim/",
    "pos": "n.",
    "cn": "时间",
    "example": "What time is it?",
    "grade": 7
  },
  {
    "en": "day",
    "phonetic": "/dei/",
    "pos": "n.",
    "cn": "天；日子",
    "example": "Have a good day!",
    "grade": 7
  },
  {
    "en": "week",
    "phonetic": "/wi:k/",
    "pos": "n.",
    "cn": "星期；周",
    "example": "See you next week.",
    "grade": 7
  },
  {
    "en": "year",
    "phonetic": "/jiә/",
    "pos": "n.",
    "cn": "年",
    "example": "Happy New Year!",
    "grade": 7
  },
  {
    "en": "today",
    "phonetic": "/tә'dei/",
    "pos": "n.",
    "cn": "今天",
    "example": "Today is sunny.",
    "grade": 7
  },
  {
    "en": "now",
    "phonetic": "/nau/",
    "pos": "adv.",
    "cn": "现在",
    "example": "I am busy now.",
    "grade": 7
  },
  {
    "en": "here",
    "phonetic": "/hiә/",
    "pos": "adv.",
    "cn": "这里",
    "example": "Come here.",
    "grade": 7
  },
  {
    "en": "there",
    "phonetic": "/ðєә/",
    "pos": "adv.",
    "cn": "那里",
    "example": "He is over there.",
    "grade": 7
  },
  {
    "en": "home",
    "phonetic": "/hәum/",
    "pos": "n.",
    "cn": "家",
    "example": "I go home at 5.",
    "grade": 7
  },
  {
    "en": "room",
    "phonetic": "/ru:m/",
    "pos": "n.",
    "cn": "房间",
    "example": "My room is clean.",
    "grade": 7
  },
  {
    "en": "water",
    "phonetic": "/'wɒ:tә/",
    "pos": "n.",
    "cn": "水",
    "example": "I drink water.",
    "grade": 7
  },
  {
    "en": "milk",
    "phonetic": "/milk/",
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
    "phonetic": "/eg/",
    "pos": "n.",
    "cn": "鸡蛋",
    "example": "I eat an egg.",
    "grade": 7
  },
  {
    "en": "rice",
    "phonetic": "/rais/",
    "pos": "n.",
    "cn": "米饭",
    "example": "I like rice.",
    "grade": 7
  },
  {
    "en": "food",
    "phonetic": "/fu:d/",
    "pos": "n.",
    "cn": "食物",
    "example": "The food is good.",
    "grade": 7
  },
  {
    "en": "car",
    "phonetic": "/kɑ:/",
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
    "phonetic": "/bɒi/",
    "pos": "n.",
    "cn": "男孩",
    "example": "The boy is playing.",
    "grade": 7
  },
  {
    "en": "girl",
    "phonetic": "/gә:l/",
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
    "phonetic": "/'wumәn/",
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
    "phonetic": "/mu:n/",
    "pos": "n.",
    "cn": "月亮",
    "example": "The moon is round.",
    "grade": 7
  },
  {
    "en": "star",
    "phonetic": "/stɑ:/",
    "pos": "n.",
    "cn": "星星",
    "example": "The stars shine.",
    "grade": 7
  },
  {
    "en": "sky",
    "phonetic": "/skai/",
    "pos": "n.",
    "cn": "天空",
    "example": "The sky is blue.",
    "grade": 7
  },
  {
    "en": "tree",
    "phonetic": "/tri:/",
    "pos": "n.",
    "cn": "树",
    "example": "The tree is tall.",
    "grade": 7
  },
  {
    "en": "flower",
    "phonetic": "/'flauә/",
    "pos": "n.",
    "cn": "花",
    "example": "The flower is beautiful.",
    "grade": 7
  },
  {
    "en": "park",
    "phonetic": "/pɑ:k/",
    "pos": "n.",
    "cn": "公园",
    "example": "We play in the park.",
    "grade": 7
  },
  {
    "en": "city",
    "phonetic": "/'siti/",
    "pos": "n.",
    "cn": "城市",
    "example": "Beijing is a big city.",
    "grade": 7
  },
  {
    "en": "music",
    "phonetic": "/'mju:zik/",
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
    "phonetic": "/geim/",
    "pos": "n.",
    "cn": "游戏",
    "example": "Let's play a game.",
    "grade": 7
  },
  {
    "en": "football",
    "phonetic": "/'futbɒ:l/",
    "pos": "n.",
    "cn": "足球",
    "example": "Play football.",
    "grade": 7
  },
  {
    "en": "think",
    "phonetic": "/θiŋk/",
    "pos": "vt.",
    "cn": "想；认为",
    "example": "I think so.",
    "grade": 7
  },
  {
    "en": "know",
    "phonetic": "/nәu/",
    "pos": "v.",
    "cn": "知道",
    "example": "I know the answer.",
    "grade": 7
  },
  {
    "en": "say",
    "phonetic": "/sei/",
    "pos": "vt.",
    "cn": "说",
    "example": "What did he say?",
    "grade": 7
  },
  {
    "en": "tell",
    "phonetic": "/tel/",
    "pos": "vt.",
    "cn": "告诉",
    "example": "Tell me a story.",
    "grade": 7
  },
  {
    "en": "ask",
    "phonetic": "/ɑ:sk/",
    "pos": "vi.",
    "cn": "问",
    "example": "May I ask a question?",
    "grade": 7
  },
  {
    "en": "answer",
    "phonetic": "/'ɑ:nsә/",
    "pos": "n.",
    "cn": "回答",
    "example": "Answer the question.",
    "grade": 7
  },
  {
    "en": "work",
    "phonetic": "/wә:k/",
    "pos": "n.",
    "cn": "工作",
    "example": "I work hard.",
    "grade": 7
  },
  {
    "en": "doctor",
    "phonetic": "/'dɒktә/",
    "pos": "n.",
    "cn": "医生",
    "example": "The doctor is kind.",
    "grade": 7
  },
  {
    "en": "open",
    "phonetic": "/'әupәn/",
    "pos": "n.",
    "cn": "打开",
    "example": "Open the book.",
    "grade": 7
  },
  {
    "en": "close",
    "phonetic": "/klәuz/",
    "pos": "n.",
    "cn": "关闭",
    "example": "Close the door.",
    "grade": 7
  },
  {
    "en": "put",
    "phonetic": "/put/",
    "pos": "vt.",
    "cn": "放",
    "example": "Put it here.",
    "grade": 7
  },
  {
    "en": "take",
    "phonetic": "/teik/",
    "pos": "vt.",
    "cn": "拿；带",
    "example": "Take this book.",
    "grade": 7
  },
  {
    "en": "give",
    "phonetic": "/giv/",
    "pos": "n.",
    "cn": "给",
    "example": "Give me a pen.",
    "grade": 7
  },
  {
    "en": "make",
    "phonetic": "/meik/",
    "pos": "vt.",
    "cn": "制作",
    "example": "Make a cake.",
    "grade": 7
  },
  {
    "en": "because",
    "phonetic": "/bi'kɒ:z/",
    "pos": "conj.",
    "cn": "因为",
    "example": "I'm happy because I won.",
    "grade": 7
  },
  {
    "en": "what",
    "phonetic": "/hwɒt/",
    "pos": "pron.",
    "cn": "什么",
    "example": "What is this?",
    "grade": 7
  },
  {
    "en": "who",
    "phonetic": "/hu:/",
    "pos": "pron.",
    "cn": "谁",
    "example": "Who is he?",
    "grade": 7
  },
  {
    "en": "where",
    "phonetic": "/hwєә/",
    "pos": "adv.",
    "cn": "哪里",
    "example": "Where are you?",
    "grade": 7
  },
  {
    "en": "when",
    "phonetic": "/hwen/",
    "pos": "conj.",
    "cn": "什么时候",
    "example": "When do you go?",
    "grade": 7
  },
  {
    "en": "why",
    "phonetic": "/hwai/",
    "pos": "adv.",
    "cn": "为什么",
    "example": "Why are you sad?",
    "grade": 7
  },
  {
    "en": "how",
    "phonetic": "/hau/",
    "pos": "adv.",
    "cn": "怎样",
    "example": "How are you?",
    "grade": 7
  },
  {
    "en": "many",
    "phonetic": "/'meni/",
    "pos": "n.",
    "cn": "许多",
    "example": "How many apples?",
    "grade": 7
  },
  {
    "en": "much",
    "phonetic": "/mʌtʃ/",
    "pos": "n.",
    "cn": "许多",
    "example": "How much water?",
    "grade": 7
  },
  {
    "en": "some",
    "phonetic": "/sʌm/",
    "pos": "pron.",
    "cn": "一些",
    "example": "Some students are here.",
    "grade": 7
  },
  {
    "en": "any",
    "phonetic": "/'eni/",
    "pos": "adj.",
    "cn": "一些；任何",
    "example": "Do you have any money?",
    "grade": 7
  },
  {
    "en": "please",
    "phonetic": "/pli:z/",
    "pos": "adv.",
    "cn": "请",
    "example": "Sit down, please.",
    "grade": 7
  },
  {
    "en": "sorry",
    "phonetic": "/'sɒri/",
    "pos": "adj.",
    "cn": "对不起的",
    "example": "I'm sorry.",
    "grade": 7
  },
  {
    "en": "welcome",
    "phonetic": "/'welkәm/",
    "pos": "n.",
    "cn": "欢迎",
    "example": "Welcome to China.",
    "grade": 7
  },
  {
    "en": "nice",
    "phonetic": "/nais/",
    "pos": "adj.",
    "cn": "好的；美好的",
    "example": "Nice to meet you.",
    "grade": 7
  },
  {
    "en": "beautiful",
    "phonetic": "/'bju:tiful/",
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
    "phonetic": "/kәuld/",
    "pos": "n.",
    "cn": "冷的",
    "example": "It is cold today.",
    "grade": 7
  },
  {
    "en": "spring",
    "phonetic": "/spriŋ/",
    "pos": "n.",
    "cn": "春天",
    "example": "Spring is warm.",
    "grade": 7
  },
  {
    "en": "summer",
    "phonetic": "/'sʌmә/",
    "pos": "n.",
    "cn": "夏天",
    "example": "Summer is hot.",
    "grade": 7
  },
  {
    "en": "autumn",
    "phonetic": "/'ɒ:tәm/",
    "pos": "n.",
    "cn": "秋天",
    "example": "Autumn is cool.",
    "grade": 7
  },
  {
    "en": "winter",
    "phonetic": "/'wintә/",
    "pos": "n.",
    "cn": "冬天",
    "example": "Winter is cold.",
    "grade": 7
  },
  {
    "en": "sunny",
    "phonetic": "/'sʌni/",
    "pos": "adj.",
    "cn": "晴朗的",
    "example": "It's a sunny day.",
    "grade": 7
  },
  {
    "en": "rainy",
    "phonetic": "/'reini/",
    "pos": "adj.",
    "cn": "下雨的",
    "example": "It's a rainy day.",
    "grade": 7
  },
  {
    "en": "windy",
    "phonetic": "/'windi/",
    "pos": "adj.",
    "cn": "有风的",
    "example": "It's windy today.",
    "grade": 7
  },
  {
    "en": "cloudy",
    "phonetic": "/'klaudi/",
    "pos": "adj.",
    "cn": "多云的",
    "example": "It's cloudy.",
    "grade": 7
  },
  {
    "en": "Monday",
    "phonetic": "/'mʌndi/",
    "pos": "n.",
    "cn": "星期一",
    "example": "Today is Monday.",
    "grade": 7
  },
  {
    "en": "Tuesday",
    "phonetic": "/'tju:zdi/",
    "pos": "n.",
    "cn": "星期二",
    "example": "See you Tuesday.",
    "grade": 7
  },
  {
    "en": "Wednesday",
    "phonetic": "/'wenzdi/",
    "pos": "n.",
    "cn": "星期三",
    "example": "Wednesday is busy.",
    "grade": 7
  },
  {
    "en": "Thursday",
    "phonetic": "/'θә:zdi/",
    "pos": "n.",
    "cn": "星期四",
    "example": "Thursday is free.",
    "grade": 7
  },
  {
    "en": "Friday",
    "phonetic": "/'fraidi/",
    "pos": "n.",
    "cn": "星期五",
    "example": "Friday is happy.",
    "grade": 7
  },
  {
    "en": "Saturday",
    "phonetic": "/'sætәdi/",
    "pos": "n.",
    "cn": "星期六",
    "example": "Saturday is fun.",
    "grade": 7
  },
  {
    "en": "Sunday",
    "phonetic": "/'sʌndi/",
    "pos": "n.",
    "cn": "星期日",
    "example": "Sunday is rest.",
    "grade": 7
  }
];

const WORDS_EXTRA = [["hi","嗨",7,"","/hai/"],["fine","好的",7,"n.","/fain/"],["great","伟大的",7,"","/greit/"],["OK","好的",7,"","/'әu'kei/"],["map","地图",7,"n.","/mæp/"],["ruler","尺子",7,"n.","/'ru:lә/"],["eraser","橡皮",7,"n.","/i'reisә/"],["chair","椅子",7,"n.","/tʃєә/"],["table","桌子",7,"n.","/'teibl/"],["door","门",7,"n.","/dɒ:/"],["window","窗户",7,"n.","/'windәu/"],["bed","床",7,"n.","/bed/"],["box","盒子",7,"n.","/bɒks/"],["shirt","衬衫",7,"n.","/ʃә:t/"],["shoe","鞋",7,"n.","/ʃu:/"],["hat","帽子",7,"n.","/hæt/"],["ball","球",7,"n.","/bɒ:l/"],["bike","自行车",7,"n.","/baik/"],["train","火车",7,"n.","/trein/"],["plane","飞机",7,"n.","/plein/"],["baby","婴儿",7,"n.","/'beibi/"],["child","孩子",7,"n.","/tʃaild/"],["people","人们",7,"n.","/'pi:pl/"],["parent","父母",7,"n.","/'perәnt/"],["grandfather","祖父",7,"n.","/'grændfɑ:ðә/"],["grandmother","祖母",7,"n.","/'grændmʌðә/"],["night","夜晚",7,"n.","/nait/"],["afternoon","下午",7,"n.","/'ɑ:ftә'nu:n/"],["evening","晚上",7,"n.","/'i:vniŋ/"],["mountain","山",7,"n.","/'mauntin/"],["river","河",7,"n.","/'rivә/"],["country","国家",7,"n.","/'kʌntri/"],["world","世界",7,"n.","/wә:ld/"],["picture","图片",7,"n.","/'piktʃә/"],["photo","照片",7,"n.","/'fәutәu/"],["sport","运动",7,"n.","/spɒ:t/"],["basketball","篮球",7,"n.","/'bɑ:skitbɒ:l/"],["swim","游泳",7,"n.","/swim/"],["jump","跳",7,"n.","/dʒʌmp/"],["fly","飞",7,"n.","/flai/"],["thing","事情",7,"n.","/θiŋ/"],["way","方法",7,"n.","/wei/"],["place","地方",7,"n.","/pleis/"],["job","工作",7,"n.","/dʒɒb/"],["nurse","护士",7,"n.","/nә:s/"],["farmer","农民",7,"n.","/'fɑ:mә/"],["driver","司机",7,"n.","/'draivә/"],["cook","烹饪",7,"n.","/kuk/"],["let","让",7,"vt.","/let/"],["and","和",7,"conj.","/ænd/"],["or","或者",7,"conj.","/ɒ:/"],["but","但是",7,"prep.","/bʌt/"],["if","如果",7,"conj.","/if/"],["so","所以",7,"adv.","/sәu/"],["which","哪个",7,"pron.","/hwitʃ/"],["all","全部",7,"","/ɒ:l/"],["every","每个",7,"","/'evri/"],["very","非常",7,"","/'veri/"],["goodbye","再见",7,"","/gud'bai/"],["bye","再见",7,"","/bai/"],["well","好地",7,"n.","/wel/"],["smart","聪明的",7,"","/smɑ:t/"],["kind","善良的",7,"n.","/kaind/"],["funny","有趣的",7,"","/'fʌni/"],["warm","温暖的",7,"","/wɒ:m/"],["cool","凉爽的",7,"n.","/ku:l/"],["snowy","下雪的",7,"","/'snәui/"],["ability","能力",8,"n.","/ә'biliti/"],["able","能够的",8,"","/'eibl/"],["about","关于",8,"prep.","/ә'baut/"],["above","在...上方",8,"prep.","/ә'bʌv/"],["accept","接受",8,"vt.","/әk'sept/"],["across","横过",8,"prep.","/ә'krɒs/"],["action","行动",8,"n.","/'ækʃәn/"],["active","积极的",8,"","/'æktiv/"],["activity","活动",8,"n.","/æk'tiviti/"],["advice","建议",8,"n.","/әd'vais/"],["afraid","害怕的",8,"","/ә'freid/"],["after","在...之后",8,"prep.","/'ɑ:ftә/"],["again","再次",8,"adv.","/ә'gein/"],["against","反对",8,"prep.","/ә'geinst/"],["age","年龄",8,"n.","/eidʒ/"],["ago","以前",8,"adv.","/ә'gәu/"],["agree","同意",8,"vi.","/ә'gri:/"],["air","空气",8,"n.","/єә/"],["airport","机场",8,"n.","/'єәpɒ:t/"],["alive","活着的",8,"","/ә'laiv/"],["allow","允许",8,"vt.","/ә'lau/"],["almost","几乎",8,"adv.","/'ɒ:lmәust/"],["alone","单独的",8,"","/ә'lәun/"],["along","沿着",8,"adv.","/ә'lɒŋ/"],["already","已经",8,"adv.","/ɒ:l'redi/"],["also","也",8,"adv.","/'ɒ:lsәu/"],["although","尽管",8,"conj.","/ɒ:l'ðou/"],["always","总是",8,"adv.","/'ɒ:lweiz/"],["among","在...之中",8,"prep.","/ә'mʌŋ/"],["angry","生气的",8,"","/'æŋgri/"],["animal","动物",8,"n.","/'ænimәl/"],["another","另一个",8,"","/ә'nʌðә/"],["anyone","任何人",8,"pron.","/'eniwʌn/"],["anything","任何事",8,"pron.","/'eniθiŋ/"],["anywhere","任何地方",8,"adv.","/'enihwєә/"],["apply","申请",8,"vt.","/ә'plai/"],["area","地区",8,"n.","/'єәriә/"],["arm","手臂",8,"n.","/ɑ:m/"],["army","军队",8,"n.","/'ɑ:mi/"],["around","周围",8,"prep.","/ә'raund/"],["arrive","到达",8,"vi.","/ә'raiv/"],["art","艺术",8,"n.","/ɑ:t/"],["article","文章",8,"n.","/'ɑ:tikl/"],["artist","艺术家",8,"n.","/'ɑ:tist/"],["asleep","睡着的",8,"","/ә'sli:p/"],["attention","注意",8,"n.","/ә'tenʃәn/"],["aunt","姑母",8,"n.","/ɑ:nt/"],["available","可获得的",8,"","/ә'veilәbl/"],["awake","醒着的",8,"","/ә'weik/"],["away","离开",8,"adv.","/ә'wei/"],["background","背景",8,"n.","/'bækgraund/"],["bad","坏的",8,"","/bæd/"],["badly","坏地",8,"adv.","/'bædli/"],["balance","平衡",8,"n.","/'bælәns/"],["bank","银行",8,"n.","/bæŋk/"],["base","基础",8,"n.","/beis/"],["basic","基本的",8,"n.","/'beisik/"],["basket","篮子",8,"n.","/'bɑ:skit/"],["bath","洗澡",8,"n.","/bæθ.bɑ:θ/"],["bathroom","浴室",8,"n.","/'bɑ:θru:m/"],["beach","海滩",8,"n.","/bi:tʃ/"],["bear","熊",8,"n.","/bєә/"],["beat","打败",8,"n.","/bi:t/"],["become","变成",8,"vi.","/bi'kʌm/"],["bedroom","卧室",8,"n.","/'bedrum/"],["beef","牛肉",8,"n.","/bi:f/"],["before","在...之前",8,"prep.","/bi'fɒ:/"],["begin","开始",8,"v.","/bi'gin/"],["beginning","开始",8,"n.","/bi'giniŋ/"],["behind","在...后面",8,"adv.","/bi'haind/"],["believe","相信",8,"v.","/bi'li:v/"],["bell","铃",8,"n.","/bel/"],["belong","属于",8,"vi.","/bi'lɒŋ/"],["below","在...下面",8,"prep.","/bi'lәu/"],["beside","在...旁边",8,"prep.","/bi'said/"],["best","最好的",8,"","/best/"],["better","更好的",8,"","/'betә/"],["between","在...之间",8,"prep.","/bi'twi:n/"],["beyond","超过",8,"prep.","/bi'jɒnd/"],["bill","账单",8,"n.","/bil/"],["birth","出生",8,"n.","/bә:θ/"],["birthday","生日",8,"n.","/'bә:θdei/"],["bit","一点",8,"n.","/bit/"],["blackboard","黑板",8,"n.","/'blækbɒ:d/"],["block","街区",8,"n.","/blɒk/"],["blood","血",8,"n.","/blʌd/"],["blow","吹",8,"n.","/blәu/"],["board","木板",8,"n.","/bɒ:d/"],["boat","船",8,"n.","/bәut/"],["body","身体",8,"n.","/'bɒdi/"],["boil","煮沸",8,"n.","/bɒil/"],["bookshop","书店",8,"n.","/'bukʃɒp/"],["bored","厌倦的",8,"","/bored/"],["boring","无聊的",8,"","/'bɒ:riŋ/"],["born","出生",8,"","/bɒ:n/"],["borrow","借",8,"vt.","/'bɒrәu/"],["boss","老板",8,"n.","/bɒs/"],["both","两者",8,"","/bәuθ/"],["bottle","瓶子",8,"n.","/'bɒtl/"],["bottom","底部",8,"n.","/'bɒtәm/"],["bowl","碗",8,"n.","/bәul/"],["brain","大脑",8,"n.","/brein/"],["brave","勇敢的",8,"","/breiv/"],["break","打破",8,"n.","/breik/"],["breakfast","早餐",8,"n.","/'brekfәst/"],["breathe","呼吸",8,"vi.","/bri:ð/"],["bridge","桥",8,"n.","/bridʒ/"],["bright","明亮的",8,"","/brait/"],["bring","带来",8,"vt.","/briŋ/"],["broad","宽广的",8,"","/brɒ:d/"],["broken","破碎的",8,"","/'brәukәn/"],["brown","棕色的",8,"n.","/braun/"],["brush","刷子",8,"n.","/brʌʃ/"],["build","建造",8,"v.","/bild/"],["building","建筑物",8,"n.","/'bildiŋ/"],["business","生意",8,"n.","/'biznis/"],["busy","忙碌的",8,"","/'bizi/"],["butter","黄油",8,"n.","/'bʌtә/"],["button","按钮",8,"n.","/'bʌtәn/"],["cabbage","卷心菜",8,"n.","/'kæbidʒ/"],["cage","笼子",8,"n.","/keidʒ/"],["cake","蛋糕",8,"n.","/keik/"],["call","呼叫",8,"n.","/kɒ:l/"],["camera","照相机",8,"n.","/'kæmәrә/"],["camp","露营",8,"n.","/kæmp/"],["can","能",8,"vt.","/kæn/"],["candle","蜡烛",8,"n.","/'kændl/"],["candy","糖果",8,"n.","/'kændi/"],["cap","帽子",8,"n.","/kæp/"],["capital","首都",8,"n.","/'kæpitәl/"],["captain","队长",8,"n.","/'kæptin/"],["card","卡片",8,"n.","/kɑ:d/"],["care","关心",8,"n.","/kєә/"],["careful","小心的",8,"","/'kєәful/"],["careless","粗心的",8,"","/'kєәlis/"],["carrot","胡萝卜",8,"n.","/'kærәt/"],["carry","携带",8,"n.","/'kæri/"],["cartoon","卡通",8,"n.","/kɑ:'tu:n/"],["case","情况",8,"n.","/keis/"],["cash","现金",8,"n.","/kæʃ/"],["catch","抓住",8,"n.","/kætʃ/"],["cause","原因",8,"n.","/kɒ:z/"],["celebrate","庆祝",8,"v.","/'selibreit/"],["century","世纪",8,"n.","/'sentʃuri/"],["certain","确定的",8,"","/'sә:tәn/"],["certainly","当然",8,"adv.","/'sә:tәnli/"],["chance","机会",8,"n.","/tʃæns. tʃɑ:ns/"],["change","改变",8,"n.","/tʃeindʒ/"],["channel","频道",8,"n.","/'tʃænәl/"],["cheap","便宜的",8,"","/tʃi:p/"],["check","检查",8,"n.","/tʃek/"],["cheer","欢呼",8,"n.","/tʃiә/"],["cheese","奶酪",8,"n.","/tʃi:z/"],["chess","象棋",8,"n.","/tʃes/"],["chicken","鸡肉",8,"n.","/'tʃikin/"],["children","孩子们",8,"","/'tʃildrәn/"],["Chinese","中文",8,"n.","/tʃai'ni:z/"],["chocolate","巧克力",8,"n.","/'tʃɒkәlit/"],["choice","选择",8,"n.","/tʃɒis/"],["choose","选择",8,"vt.","/tʃu:z/"],["chopsticks","筷子",8,"n.","/'tʃɒpstiks/"],["Christmas","圣诞节",8,"n.","/'krismәs/"],["church","教堂",8,"n.","/tʃә:tʃ/"],["cinema","电影院",8,"n.","/'sinәmә/"],["circle","圆圈",8,"n.","/'sә:kl/"],["classmate","同学",8,"n.","/'klɑ:smeit/"],["classroom","教室",8,"n.","/'klɑ:sru:m/"],["clean","干净的",8,"","/kli:n/"],["clear","清楚的",8,"","/kliә/"],["clever","聪明的",8,"","/'klevә/"],["click","点击",8,"n.","/klik/"],["climate","气候",8,"n.","/'klaimit/"],["climb","爬",8,"v.","/klaim/"],["clock","钟",8,"n.","/klɒk/"],["cloud","云",8,"n.","/klaud/"],["club","俱乐部",8,"n.","/klʌb/"],["coach","教练",8,"n.","/kәutʃ/"],["coat","外套",8,"n.","/kәut/"],["coffee","咖啡",8,"n.","/'kɒfi/"],["coin","硬币",8,"n.","/kɒin/"],["collect","收集",8,"v.","/kә'lekt/"],["college","大学",8,"n.","/'kɒlidʒ/"],["comfortable","舒适的",8,"","/'kʌmfәtәbl/"],["common","常见的",8,"","/'kɒmәn/"],["company","公司",8,"n.","/'kʌmpәni/"],["compare","比较",8,"vt.","/kәm'pєә/"],["complete","完成",8,"","/kәm'pli:t/"],["computer","电脑",8,"n.","/kәm'pju:tә/"],["concert","音乐会",8,"n.","/'kɒnsәt/"],["condition","条件",8,"n.","/kәn'diʃәn/"],["confident","自信的",8,"","/'kɒnfidәnt/"],["connect","连接",8,"v.","/kә'nekt/"],["consider","考虑",8,"v.","/kәn'sidŋ/"],["continue","继续",8,"vi.","/kәn'tinju:/"],["control","控制",8,"n.","/kәn'trәul/"],["convenient","方便的",8,"","/kәn'vi:njәnt/"],["conversation","对话",8,"n.","/.kɒnvә'seiʃәn/"],["cooker","炊具",8,"n.","/'kukә/"],["cookie","饼干",8,"n.","/'kuki/"],["copy","复制",8,"n.","/'kɒpi/"],["corn","玉米",8,"n.","/kɒ:n/"],["corner","角落",8,"n.","/'kɒ:nә/"],["correct","正确的",8,"","/kә'rekt/"],["cost","花费",8,"n.","/kɒst/"],["cotton","棉花",8,"n.","/'kɒtn/"],["cough","咳嗽",8,"n.","/kɒf/"],["could","能",8,"aux.","/kud/"],["count","数",8,"vt.","/kaunt/"],["countryside","乡村",8,"n.","/'kʌntrisaid/"],["course","课程",8,"n.","/kɒ:s/"],["cousin","表亲",8,"n.","/'kʌzәn/"],["cover","覆盖",8,"n.","/'kʌvә/"],["cow","母牛",8,"n.","/kau/"],["crazy","疯狂的",8,"","/'kreizi/"],["cream","奶油",8,"n.","/kri:m/"],["create","创造",8,"vt.","/kri:'eit/"],["cross","穿过",8,"n.","/krɒs/"],["cry","哭",8,"n.","/krai/"],["culture","文化",8,"n.","/'kʌltʃә/"],["cup","杯子",8,"n.","/kʌp/"],["cure","治愈",8,"n.","/kjuә/"],["curious","好奇的",8,"","/'kjuәriәs/"],["custom","习俗",8,"n.","/'kʌstәm/"],["customer","顾客",8,"n.","/'kʌstәmә/"],["cut","切",8,"n.","/kʌt/"],["daily","每日的",8,"","/'deili/"],["danger","危险",8,"n.","/'deindʒә/"],["dangerous","危险的",8,"","/'deindʒәrәs/"],["dare","敢",8,"n.","/dєә/"],["dark","黑暗的",8,"n.","/dɑ:k/"],["date","日期",8,"n.","/deit/"],["daughter","女儿",8,"n.","/'dɒ:tә/"],["dead","死的",8,"","/ded/"],["deaf","聋的",8,"","/def/"],["deal","处理",8,"n.","/di:l/"],["dear","亲爱的",8,"n.","/'diә/"],["death","死亡",8,"n.","/deθ/"],["December","十二月",8,"n.","/di'sembә/"],["decide","决定",8,"v.","/di'said/"],["decision","决定",8,"n.","/di'siʒәn/"],["deep","深的",8,"","/di:p/"],["deer","鹿",8,"n.","/diә/"],["delicious","美味的",8,"","/di'liʃәs/"],["describe","描述",8,"vt.","/di'skraib/"],["desk","书桌",8,"n.","/desk/"],["develop","发展",8,"vt.","/di'velәp/"],["dialogue","对话",8,"n.","/'daiәlɒg/"],["diary","日记",8,"n.","/'daiәri/"],["dictionary","字典",8,"n.","/'dikʃәnәri/"],["die","死",8,"vi.","/dai/"],["difference","不同",8,"n.","/'difәrәns/"],["different","不同的",8,"","/'difәrәnt/"],["difficult","困难的",8,"","/'difikәlt/"],["dig","挖",8,"vt.","/dig/"],["dining","进餐",8,"n.","/'dainiŋ/"],["dinner","晚餐",8,"n.","/'dinә/"],["dirty","脏的",8,"","/'dә:ti/"],["discover","发现",8,"vt.","/dis'kʌvә/"],["discuss","讨论",8,"vt.","/dis'kʌs/"],["disease","疾病",8,"n.","/di'zi:z/"],["dish","盘子",8,"n.","/diʃ/"],["divide","分开",8,"vi.","/di'vaid/"],["document","文件",8,"n.","/'dɒkjumәnt/"],["doll","娃娃",8,"n.","/dɒl/"],["dollar","美元",8,"n.","/'dɒlә/"],["double","双倍的",8,"n.","/'dʌbl/"],["doubt","怀疑",8,"n.","/daut/"],["down","向下",8,"","/daun/"],["downstairs","楼下",8,"n.","/'daun'stєәz/"],["dozen","一打",8,"n.","/'dʌzn/"],["draw","画",8,"vi.","/drɒ:/"],["dream","梦想",8,"n.","/dri:m/"],["dress","连衣裙",8,"n.","/dres/"],["drive","驾驶",8,"n.","/draiv/"],["drop","落下",8,"n.","/drɒp/"],["drug","药",8,"n.","/drʌg/"],["drum","鼓",8,"n.","/drʌm/"],["dry","干的",8,"","/drai/"],["duck","鸭子",8,"n.","/dʌk/"],["dumpling","饺子",8,"n.","/'dʌmpliŋ/"],["during","在...期间",8,"prep.","/'djuәriŋ/"],["duty","责任",8,"n.","/'dju:ti/"],["each","每个",8,"","/i:tʃ/"],["ear","耳朵",8,"n.","/iә/"],["early","早地",8,"","/'ә:li/"],["earth","地球",8,"n.","/ә:θ/"],["east","东方",8,"n.","/i:st/"],["easy","容易的",8,"","/'i:zi/"],["education","教育",8,"n.","/.edju'keiʃәn/"],["effect","影响",8,"n.","/i'fekt/"],["effort","努力",8,"n.","/'efәt/"],["eighteen","十八",8,"num.","/'ei'ti:n/"],["eighty","八十",8,"num.","/'eiti/"],["either","任一",8,"","/'i:ðә/"],["elder","年长的",8,"n.","/'eldә/"],["electric","电的",8,"","/i'lektik/"],["elephant","大象",8,"n.","/'elifәnt/"],["eleven","十一",8,"num.","/i'levn/"],["else","其他的",8,"","/els/"],["e-mail","电子邮件",8,"","/'i:meil/"],["empty","空的",8,"","/'empti/"],["end","结束",8,"n.","/end/"],["enemy","敌人",8,"n.","/'enimi/"],["energy","能量",8,"n.","/'enәdʒi/"],["engineer","工程师",8,"n.","/.endʒi'niә/"],["England","英国",8,"n.","/'iŋglәnd/"],["English","英语",8,"n.","/'iŋgliʃ/"],["enjoy","享受",8,"vt.","/in'dʒɒi/"],["enough","足够的",8,"n.","/i'nʌf/"],["enter","进入",8,"vt.","/'entә/"],["environment","环境",8,"n.","/in'vairәnmәnt/"],["especially","特别地",8,"adv.","/i'speʃәli/"],["Europe","欧洲",8,"n.","/'juәrәp/"],["European","欧洲的",8,"n.","/.juәrә'pi:әn/"],["even","甚至",8,"","/'i:vәn/"],["event","事件",8,"n.","/i'vent/"],["ever","曾经",8,"adv.","/'evә/"],["everybody","每人",8,"pron.","/'evribɒdi/"],["everyday","日常的",8,"","/'evri'dei/"],["everyone","每人",8,"pron.","/'evriwʌn/"],["everything","一切",8,"pron.","/'evriθiŋ/"],["everywhere","到处",8,"adv.","/'evrihwєә/"],["exact","确切的",8,"","/ig'zækt/"],["exam","考试",8,"n.","/ig'zæm/"],["examine","检查",8,"v.","/ig'zæmin/"],["example","例子",8,"n.","/ig'zæmpl/"],["excellent","优秀的",8,"","/'ekslәnt/"],["except","除...之外",8,"vt.","/ik'sept/"],["excited","兴奋的",8,"","/ik'saitid/"],["exciting","令人兴奋的",8,"","/ik'saitiŋ/"],["excuse","原谅",8,"vt.","/ik'skju:z/"],["exercise","锻炼",8,"n.","/'eksәsaiz/"],["exhibit","展览",8,"n.","/ig'zibit/"],["exist","存在",8,"vi.","/ig'zist/"],["expect","期待",8,"vt.","/iks'pekt/"],["expensive","昂贵的",8,"","/ik'spensiv/"],["experience","经验",8,"n.","/ik'spiәriәns/"],["experiment","实验",8,"n.","/ik'sperimәnt/"],["explain","解释",8,"v.","/ik'splein/"],["express","表达",8,"n.","/ik'spres/"],["eye","眼睛",8,"n.","/ai/"],["face","脸",8,"n.","/feis/"],["fact","事实",8,"n.","/fækt/"],["factory","工厂",8,"n.","/'fæktәri/"],["fail","失败",8,"vi.","/feil/"],["fair","公平的",8,"n.","/fєә/"],["fall","落下",8,"n.","/fɒ:l/"],["famous","著名的",8,"","/'feimәs/"],["fan","粉丝",8,"n.","/fæn/"],["far","远的",8,"","/fɑ:/"],["farm","农场",8,"n.","/fɑ:m/"],["fast","快的",8,"","/fɑ:st/"],["fat","胖的",8,"n.","/fæt/"],["favorite","最喜欢的",8,"n.","/'feivәrit/"],["fear","害怕",8,"n.","/fiә/"],["February","二月",8,"n.","/'februәri/"],["feed","喂养",8,"n.","/fi:d/"],["feel","感觉",8,"vt.","/fi:l/"],["festival","节日",8,"","/'festәvәl/"],["fever","发烧",8,"n.","/'fi:vә/"],["few","很少的",8,"","/fju:/"],["field","田野",8,"n.","/fi:ld/"],["fifteen","十五",8,"num.","/'fif'ti:n/"],["fifty","五十",8,"num.","/'fifti/"],["fight","战斗",8,"n.","/fait/"],["fill","装满",8,"vt.","/fil/"],["film","电影",8,"n.","/film/"],["final","最后的",8,"n.","/'fainl/"],["find","找到",8,"vt.","/faind/"],["finger","手指",8,"n.","/'fiŋgә/"],["finish","完成",8,"n.","/'finiʃ/"],["fire","火",8,"n.","/'faiә/"],["fireman","消防员",8,"n.","/'faiәmәn/"],["first","第一",8,"adv.","/fә:st/"],["fit","适合",8,"n.","/fit/"],["five","五",8,"num.","/faiv/"],["fix","修理",8,"vt.","/fiks/"],["flag","旗帜",8,"n.","/flæg/"],["flat","平的",8,"","/flæt/"],["flight","飞行",8,"n.","/flait/"],["floor","地板",8,"n.","/flɒ:/"],["focus","集中",8,"n.","/'fәukәs/"],["follow","跟随",8,"vt.","/'fɒlәu/"],["foot","脚",8,"n.","/fut/"],["for","为了",8,"prep.","/fɒ:/"],["force","力量",8,"n.","/fɒ:s/"],["foreign","外国的",8,"","/'fɒ:rin/"],["forest","森林",8,"n.","/'fɒrist/"],["forever","永远",8,"adv.","/fә'revә/"],["forget","忘记",8,"vt.","/fә'get/"],["fork","叉子",8,"n.","/fɒ:k/"],["form","形式",8,"n.","/fɒ:m/"],["forty","四十",8,"num.","/'fɒ:ti/"],["forward","向前",8,"","/'fɒ:wәd/"],["achieve","实现",9,"vt.","/ә'tʃi:v/"],["achievement","成就",9,"n.","/ә'tʃi:vmәnt/"],["actual","实际的",9,"","/'æktʃuәl/"],["actually","实际上",9,"adv.","/'æktʃuәli/"],["adapt","适应",9,"vt.","/ә'dæpt/"],["address","地址",9,"n.","/ә'dres/"],["admire","钦佩",9,"vt.","/әd'maiә/"],["admit","承认",9,"vt.","/әd'mit/"],["adopt","采用",9,"vt.","/ә'dɒpt/"],["adult","成年人",9,"n.","/'ædʌlt/"],["advance","前进",9,"n.","/әd'vɑ:ns/"],["advantage","优势",9,"n.","/әd'vɑ:ntidʒ/"],["adventure","冒险",9,"n.","/әd'ventʃә/"],["advertise","做广告",9,"vt.","/'ædvәtaiz/"],["afford","负担得起",9,"vt.","/ә'fɒ:d/"],["agent","代理人",9,"n.","/'eidʒәnt/"],["aim","目的",9,"n.","/eim/"],["alarm","警报",9,"n.","/ә'lɑ:m/"],["ancient","古代的",9,"","/'einʃәnt/"],["announce","宣布",9,"vt.","/ә'nauns/"],["anxious","焦虑的",9,"","/'æŋʃәs/"],["apologize","道歉",9,"vi.","/ә'pɒlәdʒaiz/"],["appear","出现",9,"vi.","/ә'piә/"],["appearance","外貌",9,"n.","/ә'piәrәns/"],["appetite","食欲",9,"n.","/'æpitait/"],["applaud","鼓掌",9,"v.","/ә'plɒ:d/"],["appoint","任命",9,"vt.","/ә'pɒint/"],["appreciate","欣赏",9,"vt.","/ә'pri:ʃieit/"],["approach","接近",9,"n.","/ә'prәutʃ/"],["appropriate","合适的",9,"","/ә'prәupriәt/"],["approve","批准",9,"vt.","/ә'pru:v/"],["argue","争论",9,"vi.","/'ɑ:gju/"],["arise","出现",9,"vi.","/ә'raiz/"],["arrange","安排",9,"v.","/ә'reindʒ/"],["arrival","到达",9,"n.","/ә'raivl/"],["arrow","箭",9,"n.","/'ærәu/"],["ashamed","羞愧的",9,"","/ә'ʃeimd/"],["aside","在旁边",9,"n.","/ә'said/"],["assign","分配",9,"vt.","/ә'sain/"],["assist","协助",9,"n.","/ә'sist/"],["associate","联系",9,"n.","/ә'sәuʃieit/"],["assume","假设",9,"vt.","/ә'sju:m/"],["athlete","运动员",9,"n.","/'æθli:t/"],["atmosphere","气氛",9,"n.","/'ætmәsfiә/"],["attach","附上",9,"vt.","/ә'tætʃ/"],["attack","攻击",9,"n.","/ә'tæk/"],["attempt","尝试",9,"n.","/ә'tempt/"],["attend","出席",9,"vt.","/ә'tend/"],["attitude","态度",9,"n.","/'ætitju:d/"],["attract","吸引",9,"vt.","/ә'trækt/"],["audience","观众",9,"n.","/'ɒ:diәns/"],["author","作者",9,"n.","/'ɒ:θә/"],["authority","权威",9,"n.","/ɒ:'θɒriti/"],["automatic","自动的",9,"n.","/.ɒ:tә'mætik/"],["average","平均的",9,"n.","/'ævәridʒ/"],["avoid","避免",9,"vt.","/ә'vɒid/"],["award","奖",9,"n.","/ә'wɒ:d/"],["aware","意识到的",9,"","/ә'wєә/"],["band","乐队",9,"n.","/bænd/"],["bargain","讨价还价",9,"n.","/'bɑ:gin/"],["barrier","障碍",9,"n.","/'bæriә/"],["basis","基础",9,"n.","/'beisis/"],["battery","电池",9,"n.","/'bætәri/"],["bay","海湾",9,"n.","/bei/"],["beam","光束",9,"n.","/bi:m/"],["bean","豆",9,"n.","/bi:n/"],["beard","胡须",9,"n.","/biәd/"],["behave","表现",9,"vi.","/bi'heiv/"],["behavior","行为",9,"n.","/bi'heivjә/"],["belief","信念",9,"n.","/bi'li:f/"],["benefit","利益",9,"n.","/'benifit/"],["besides","此外",9,"prep.","/bi'saidz/"],["bet","打赌",9,"n.","/bet/"],["bias","偏见",9,"n.","/'baiәs/"],["billion","十亿",9,"num.","/'biljәn/"],["biology","生物学",9,"n.","/bai'ɒlәdʒi/"],["blade","刀片",9,"n.","/bleid/"],["blank","空白的",9,"n.","/blæŋk/"],["blanket","毯子",9,"n.","/'blæŋkit/"],["blast","爆炸",9,"n.","/blæst/"],["bleed","流血",9,"vi.","/bli:d/"],["blend","混合",9,"vt.","/blend/"],["bless","祝福",9,"vt.","/bles/"],["blind","盲的",9,"n.","/blaind/"],["bloom","开花",9,"n.","/blu:m/"],["boost","提升",9,"n.","/bu:st/"],["border","边界",9,"n.","/'bɒ:dә/"],["bore","钻孔",9,"n.","/bɒ:/"],["bother","打扰",9,"vt.","/'bɒðә/"],["bounce","弹跳",9,"n.","/bauns/"],["bound","必然的",9,"n.","/baund/"],["boundary","边界",9,"n.","/'baundri/"],["brake","刹车",9,"n.","/breik/"],["brand","品牌",9,"n.","/brænd/"],["breed","繁殖",9,"n.","/bri:d/"],["brick","砖",9,"n.","/brik/"],["brief","简短的",9,"n.","/bri:f/"],["brilliant","辉煌的",9,"","/'briljәnt/"],["bubble","气泡",9,"n.","/'bʌbl/"],["budget","预算",9,"n.","/'bʌdʒit/"],["bulk","大量",9,"n.","/bʌlk/"],["bullet","子弹",9,"n.","/'bulit/"],["bundle","捆",9,"n.","/'bʌndl/"],["bureau","局",9,"n.","/'bjuәrәu/"],["burst","爆发",9,"n.","/bә:st/"],["cabin","小屋",9,"n.","/'kæbin/"],["cable","缆绳",9,"n.","/'keibl/"],["calculate","计算",9,"v.","/'kælkjuleit/"],["calendar","日历",9,"n.","/'kælindә/"],["calm","平静的",9,"n.","/kɑ:m/"],["campaign","运动",9,"n.","/kæm'pein/"],["cancel","取消",9,"n.","/'kænsәl/"],["candidate","候选人",9,"n.","/'kændideit/"],["capable","有能力的",9,"","/'keipәbl/"],["capacity","容量",9,"n.","/kә'pæsiti/"],["capture","捕获",9,"n.","/'kæptʃә/"],["carbon","碳",9,"n.","/'kɑ:bәn/"],["career","职业",9,"n.","/kә'riә/"],["cargo","货物",9,"n.","/'kɑ:gәu/"],["carpet","地毯",9,"n.","/'kɑ:pit/"],["category","类别",9,"n.","/'kætigәri/"],["cattle","牛",9,"n.","/kætl/"],["ceremony","仪式",9,"n.","/'serimәni/"],["chain","链条",9,"n.","/tʃein/"],["challenge","挑战",9,"n.","/'tʃælindʒ/"],["chamber","房间",9,"n.","/'tʃeimbә/"],["champion","冠军",9,"n.","/'tʃæmpiәn/"],["chapter","章",9,"n.","/'tʃæptә/"],["character","性格",9,"n.","/'kærәktә/"],["charge","收费",9,"n.","/tʃɑ:dʒ/"],["charity","慈善",9,"n.","/'tʃæriti/"],["chart","图表",9,"n.","/tʃɑ:t/"],["chase","追逐",9,"n.","/tʃeis/"],["chemical","化学的",9,"n.","/'kemikl/"],["chest","胸部",9,"n.","/tʃest/"],["chew","咀嚼",9,"vt.","/tʃu:/"],["chief","主要的",9,"n.","/tʃi:f/"],["childhood","童年",9,"n.","/'tʃaildhud/"],["chip","芯片",9,"n.","/tʃip/"],["citizen","公民",9,"n.","/'sitizn/"],["civil","公民的",9,"","/'sivәl/"],["claim","声称",9,"n.","/kleim/"],["clarify","澄清",9,"vi.","/'klærifai/"],["classic","经典的",9,"n.","/'klæsik/"],["clinic","诊所",9,"n.","/'klinik/"],["cloth","布",9,"n.","/klɒ:θ. klɒθ/"],["clue","线索",9,"n.","/klu:/"],["cluster","群",9,"n.","/'klʌstә/"],["coast","海岸",9,"n.","/kәust/"],["code","代码",9,"n.","/kәud/"],["collapse","倒塌",9,"n.","/kә'læps/"],["colleague","同事",9,"n.","/'kɒli:g/"],["colony","殖民地",9,"n.","/'kɒlәni/"],["combine","结合",9,"v.","/kәm'bain/"],["comedy","喜剧",9,"n.","/'kɒmidi/"],["comfort","安慰",9,"n.","/'kʌmfәt/"],["command","命令",9,"n.","/kә'mɑ:nd/"],["comment","评论",9,"n.","/'kɒment/"],["commerce","商业",9,"n.","/'kɒmә:s/"],["commission","佣金",9,"n.","/kә'miʃәn/"],["committee","委员会",9,"n.","/kә'miti/"],["communicate","交流",9,"vt.","/kә'mju:nikeit/"],["community","社区",9,"n.","/kә'mju:niti/"],["companion","同伴",9,"n.","/kәm'pænjәn/"],["compete","竞争",9,"vi.","/kәm'pi:t/"],["complain","抱怨",9,"v.","/kәm'plein/"],["complex","复杂的",9,"n.","/kәm'pleks/"],["compose","组成",9,"vt.","/kәm'pәuz/"],["concept","概念",9,"n.","/'kɒnsept/"],["concern","关心",9,"n.","/kәn'sә:n/"],["conclude","得出结论",9,"vt.","/kәn'klu:d/"],["concrete","具体的",9,"n.","/'kɒnkri:t/"],["conduct","进行",9,"n.","/'kɔndʌkt, -dәkt/"],["conference","会议",9,"n.","/'kɒnfәrәns/"],["confidence","信心",9,"n.","/'kɒnfidәns/"],["confirm","确认",9,"vt.","/kәn'fә:m/"],["conflict","冲突",9,"n.","/'kɒnflikt/"],["confuse","使困惑",9,"vt.","/kәn'fju:z/"],["congratulate","祝贺",9,"vt.","/kәn'grætʃәleit/"],["congress","国会",9,"n.","/'kɒŋgres/"],["conscious","有意识的",9,"","/'kɒnʃәs/"],["consequence","后果",9,"n.","/'kɒnsikwәns/"],["consist","组成",9,"vi.","/kәn'sist/"],["constant","不断的",9,"n.","/'kɒnstәnt/"],["constitute","构成",9,"vt.","/kәn'stitjut/"],["construct","建造",9,"vt.","/kәn'strʌkt/"],["consult","咨询",9,"vi.","/kәn'sʌlt/"],["consume","消耗",9,"vt.","/kәn'sju:m/"],["contact","接触",9,"n.","/'kɒntækt/"],["contain","包含",9,"vt.","/kәn'tein/"],["contest","比赛",9,"n.","/'kɒntest/"],["context","上下文",9,"n.","/'kɒntekst/"],["contract","合同",9,"n.","/'kɒntrækt/"],["contradict","反驳",9,"vt.","/.kɒntrә'dikt/"],["contrast","对比",9,"n.","/kәn'træst/"],["contribute","贡献",9,"vt.","/kәn'tribju:t/"],["convince","说服",9,"vt.","/kәn'vins/"],["cooperate","合作",9,"vi.","/kәu'ɒpәreit/"],["cope","应对",9,"vi.","/kәup/"],["core","核心",9,"n.","/kɒ:/"],["corporate","公司的",9,"","/'kɒ:pәrit/"],["corridor","走廊",9,"n.","/'kɒridɒ:/"],["council","委员会",9,"n.","/'kaunsәl/"],["counter","柜台",9,"n.","/'kauntә/"],["county","县",9,"n.","/'kaunti/"],["couple","夫妇",9,"n.","/'kʌpl/"],["courage","勇气",9,"n.","/'kʌridʒ/"],["court","法庭",9,"n.","/kɒ:t/"],["crack","裂缝",9,"n.","/kræk/"],["craft","手艺",9,"n.","/kræft/"],["crash","坠毁",9,"n.","/kræʃ/"],["craw","爬行",9,"n.","/krɒ:/"],["credit","信用",9,"n.","/'kredit/"],["crew","全体人员",9,"n.","/kru:/"],["crime","犯罪",9,"n.","/kraim/"],["crisis","危机",9,"n.","/'kraisis/"],["criticize","批评",9,"v.","/'kritisaiz/"],["crowd","人群",9,"n.","/kraud/"],["crucial","关键的",9,"","/'kru:ʃәl/"],["crystal","水晶",9,"n.","/'kristl/"],["cube","立方体",9,"n.","/kju:b/"],["currency","货币",9,"n.","/'kʌrәnsi/"],["current","当前的",9,"n.","/'kʌrәnt/"],["curtain","窗帘",9,"n.","/'kә:tәn/"],["curve","曲线",9,"n.","/kә:v/"],["cycle","循环",9,"n.","/'saikl/"],["damage","损害",9,"n.","/'dæmidʒ/"],["damp","潮湿的",9,"n.","/dæmp/"],["data","数据",9,"","/'deitә/"],["deadline","截止日期",9,"n.","/'dedlain/"],["debate","辩论",9,"n.","/di'beit/"],["decade","十年",9,"n.","/'dekeid/"],["declare","宣布",9,"v.","/di'klєә/"],["decline","下降",9,"n.","/di'klain/"],["decorate","装饰",9,"v.","/'dekәreit/"],["decrease","减少",9,"n.","/'di:kri:s/"],["defeat","击败",9,"n.","/di'fi:t/"],["defend","保卫",9,"vt.","/di'fend/"],["define","定义",9,"vt.","/di'fain/"],["degree","程度",9,"n.","/di'gri:/"],["delay","延迟",9,"n.","/di'lei/"],["deliver","递送",9,"vt.","/di'livә/"],["demand","要求",9,"n.","/di'mɑ:nd/"],["department","部门",9,"n.","/di'pɑ:tmәnt/"],["depend","依赖",9,"vi.","/di'pend/"],["deposit","存款",9,"n.","/di'pɒzit/"],["depress","使沮丧",9,"vt.","/di'pres/"],["depth","深度",9,"n.","/depθ/"],["desert","沙漠",9,"n.","/'dezәt. di'sә:t/"],["deserve","应得",9,"vt.","/di'zә:v/"],["design","设计",9,"n.","/di'zain/"],["desire","渴望",9,"n.","/di'zaiә/"],["detail","细节",9,"n.","/'di:teil/"],["detect","察觉",9,"vt.","/di'tekt/"],["determine","决定",9,"v.","/di'tә:min/"],["device","设备",9,"n.","/di'vais/"],["devote","奉献",9,"vt.","/di'vәut/"],["diet","饮食",9,"n.","/'daiәt/"],["dignity","尊严",9,"n.","/'digniti/"],["dimension","维度",9,"n.","/dai'menʃәn/"],["dip","蘸",9,"v.","/dip/"],["diploma","文凭",9,"n.","/di'plәumә/"],["direct","直接的",9,"","/di'rekt/"],["director","导演",9,"n.","/di'rektә/"],["dirt","灰尘",9,"n.","/dә:t/"],["disable","使残疾",9,"vt.","/dis'eibl/"],["disadvantage","劣势",9,"n.","/.disәd'vɑ:ntidʒ/"],["disagree","不同意",9,"vi.","/.disә'gri:/"],["disappear","消失",9,"vi.","/.disә'piә/"],["disappoint","使失望",9,"vt.","/.disә'pɒint/"],["disaster","灾难",9,"n.","/di'zɑ:stә/"],["discipline","纪律",9,"n.","/'disiplin/"],["discount","折扣",9,"n.","/'diskaunt/"],["distance","距离",9,"n.","/'distәns/"],["distant","遥远的",9,"","/'distәnt/"],["distinguish","区分",9,"v.","/dis'tiŋgwiʃ/"],["distribute","分发",9,"vt.","/di'stribju:t/"],["district","地区",9,"n.","/'distrikt/"],["disturb","打扰",9,"vt.","/dis'tә:b/"],["diverse","多样的",9,"","/dai'vә:s/"],["divorce","离婚",9,"n.","/di'vɒ:s/"],["domestic","国内的",9,"","/dәu'mestik/"],["dominate","统治",9,"v.","/'dɒmineit/"],["donate","捐赠",9,"v.","/'dәuneit/"],["downtown","市中心",9,"n.","/'daun'taun/"],["draft","草稿",9,"n.","/dræft. drɑ:ft/"],["drag","拖",9,"n.","/dræg/"],["drama","戏剧",9,"n.","/'drɑ:mә/"],["dramatic","戏剧性的",9,"","/drә'mætik/"],["drawback","缺点",9,"n.","/'drɒ:bæk/"],["dread","恐惧",9,"n.","/dred/"],["drift","漂流",9,"n.","/drift/"],["drill","钻孔",9,"n.","/dril/"],["drown","淹死",9,"vi.","/draun/"],["duration","持续时间",9,"n.","/dju'reiʃәn/"],["dwelling","住所",9,"n.","/'dweliŋ/"],["a","一(个)",7,"","/ei/"],["back","回来",7,"","/bæk/"],["be","是",7,"v.","/bi:/"],["by","通过",7,"prep.","/bai/"],["China","中国",7,"n.","/'tʃainә/"],["clothes","衣服",7,"n.","/klәuðz/"],["cute","可爱的",7,"","/kju:t/"],["eight","八",7,"num.","/eit/"],["email","邮件",7,"n.","/'i:'meil/"],["four","四",7,"num.","/fɒ:/"],["free","空闲的",7,"","/fri:/"],["from","从",7,"prep.","/frɒm/"],["front","前面",7,"n.","/frʌnt/"],["fruit","水果",7,"n.","/fru:t/"],["fun","乐趣",7,"n.","/fʌn/"],["get","得到",7,"vt.","/get/"],["glad","高兴的",7,"","/glæd/"],["glass","玻璃杯",7,"n.","/glɑ:s/"],["guess","猜",7,"n.","/ges/"],["hair","头发",7,"n.","/hєә/"],["half","一半",7,"n.","/hɑ:f/"],["hand","手",7,"n.","/hænd/"],["hard","困难的",7,"","/hɑ:d/"],["he","他",7,"pron.","/hi:/"],["head","头",7,"n.","/hed/"],["health","健康",7,"n.","/'helθ/"],["hear","听见",7,"vt.","/hiә/"],["her","她的",7,"pron.","/hә:/"],["high","高的",7,"n.","/hai/"],["him","他",7,"pron.","/him/"],["his","他的",7,"pron.","/hiz/"],["hold","拿着",7,"n.","/hәuld/"],["holiday","假日",7,"n.","/'hɒlәdi/"],["homework","作业",7,"n.","/'hәumwә:k/"],["hope","希望",7,"n.","/hәup/"],["horse","马",7,"n.","/hɒ:s/"],["hospital","医院",7,"n.","/'hɒspitәl/"],["hotel","酒店",7,"n.","/hәu'tel/"],["hour","小时",7,"n.","/auә/"],["house","房子",7,"n.","/haus/"],["hundred","百",7,"n.","/'hʌndrәd/"],["hungry","饿的",7,"","/'hʌŋgi/"],["hurry","匆忙",7,"n.","/'hʌri/"],["hurt","受伤",7,"n.","/hә:t/"],["husband","丈夫",7,"n.","/'hʌzbәnd/"],["I","我",7,"pron.","/ai/"],["ice","冰",7,"n.","/ais/"],["idea","主意",7,"n.","/ai'diә/"],["in","在...里",7,"prep.","/in/"],["interesting","有趣的",7,"","/'intristiŋ/"],["it","它",7,"pron.","/it/"],["its","它的",7,"pron.","/its/"],["jacket","夹克",7,"n.","/'dʒækit/"],["juice","果汁",7,"n.","/dʒu:s/"],["just","刚刚",7,"","/dʒʌst/"],["keep","保持",7,"n.","/ki:p/"],["key","钥匙",7,"n.","/ki:/"],["king","国王",7,"n.","/kiŋ/"],["kitchen","厨房",7,"n.","/'kitʃin/"],["kite","风筝",7,"n.","/kait/"],["lady","女士",7,"n.","/'leidi/"],["lake","湖",7,"n.","/leik/"],["land","陆地",7,"n.","/lænd/"],["language","语言",7,"n.","/'læŋgwidʒ/"],["late","迟的",7,"","/leit/"],["laugh","笑",7,"n.","/lɑ:f/"],["learn","学习",7,"vt.","/lә:n/"],["left","左",7,"","/left/"],["leg","腿",7,"n.","/leg/"],["lesson","课",7,"n.","/'lesn/"],["letter","信",7,"n.","/'letә/"],["library","图书馆",7,"n.","/'laibrәri/"],["lie","躺",7,"n.","/lai/"],["life","生活",7,"n.","/laif/"],["light","灯",7,"n.","/lait/"],["line","线",7,"n.","/lain/"],["listen","听",7,"vi.","/'lisn/"],["little","小的",7,"n.","/'litl/"],["live","居住",7,"","/liv.laiv/"],["lot","很多",7,"n.","/lɒt/"],["lunch","午餐",7,"n.","/lʌntʃ/"],["match","比赛",7,"n.","/mætʃ/"],["math","数学",7,"n.","/mæθ/"],["may","可以",7,"n.","/mei/"],["me","我",7,"pron.","/mi:/"],["meal","一餐",7,"n.","/mi:l/"],["meat","肉",7,"n.","/mi:t/"],["mind","介意",7,"n.","/maind/"],["mine","我的",7,"n.","/main/"],["minute","分钟",7,"n.","/'minit. mai'nju:t/"],["Miss","小姐",7,"n.","/mis/"],["model","模型",7,"n.","/'mɒdәl/"],["money","钱",7,"n.","/'mʌni/"],["month","月",7,"n.","/mʌnθ/"],["mouse","老鼠",7,"n.","/maus/"],["mouth","嘴",7,"n.","/mauθ/"],["move","移动",7,"n.","/mu:v/"],["movie","电影",7,"n.","/'mu:vi/"],["Mr","先生",7,"","/'mistә(r)/"],["Mrs","夫人",7,"","/'misiz/"],["must","必须",7,"n.","/mʌst/"],["my","我的",7,"pron.","/mai/"],["near","近的",7,"","/niә/"],["never","从不",7,"adv.","/'nevә/"],["news","新闻",7,"n.","/nju:z/"],["next","下一个",7,"n.","/'nekst/"],["nine","九",7,"num.","/nain/"],["no","不",7,"n.","/nәu/"],["noodle","面条",7,"n.","/'nu:dl/"],["noon","中午",7,"n.","/nu:n/"],["nose","鼻子",7,"n.","/nәuz/"],["not","不",7,"adv.","/nɒt/"],["notebook","笔记本",7,"n.","/'nәutbuk/"],["number","数字",7,"n.","/'nʌmbә/"],["of","的",7,"prep.","/ɒv/"],["off","关",7,"","/ɒf/"],["office","办公室",7,"n.","/'ɒfis/"],["often","经常",7,"adv.","/'ɒ:fn/"],["oil","油",7,"n.","/ɒil/"],["on","在...上",7,"prep.","/ɒn/"],["once","一次",7,"adv.","/wʌns/"],["one","一",7,"n.","/wʌn/"],["only","只",7,"","/'әunli/"],["our","我们的",7,"pron.","/'auә/"],["out","外面",7,"","/aut/"],["over","结束",7,"adv.","/'әuvә/"],["own","自己的",7,"n.","/әun/"],["page","页",7,"n.","/peidʒ/"],["paint","画",7,"n.","/peint/"],["pair","一对",7,"n.","/pєә/"],["panda","熊猫",7,"n.","/'pændә/"],["party","聚会",7,"n.","/'pɑ:ti/"],["pass","传递",7,"n.","/pæs/"],["past","过去",7,"n.","/pɑ:st/"],["piano","钢琴",7,"n.","/pi'ɑ:nәu/"],["piece","片",7,"n.","/pi:s/"],["pig","猪",7,"n.","/pig/"],["plan","计划",7,"n.","/plæn/"],["plant","植物",7,"n.","/plænt. plɑ:nt/"],["point","指向",7,"n.","/pɒint/"],["police","警察",7,"n.","/pә'li:s/"],["poor","穷的",7,"","/puә. pɒ:/"],["pork","猪肉",7,"n.","/pɒ:k/"],["possible","可能的",7,"","/'pɒsәbl/"],["post","邮寄",7,"n.","/pәust/"],["potato","土豆",7,"n.","/pә'teitәu/"],["practice","练习",7,"n.","/'præktis/"],["present","礼物",7,"n.","/'preznt/"],["pretty","漂亮的",7,"","/'priti/"],["question","问题",7,"n.","/'kwestʃәn/"],["quick","快的",7,"","/kwik/"],["quiet","安静的",7,"n.","/'kwaiәt/"],["quite","相当",7,"adv.","/kwait/"],["radio","收音机",7,"n.","/'reidiәu/"],["rain","雨",7,"n.","/rein/"],["ready","准备好的",7,"n.","/'redi/"],["really","真正地",7,"adv.","/'riәli/"],["remember","记得",7,"vt.","/ri'membә/"],["rest","休息",7,"n.","/rest/"],["rich","富的",7,"","/ri:tʃ/"],["ride","骑",7,"n.","/raid/"],["right","对的",7,"n.","/rait/"],["ring","戒指",7,"n.","/riŋ/"],["road","路",7,"n.","/rәud/"],["safe","安全的",7,"n.","/seif/"],["salad","沙拉",7,"n.","/'sælәd/"],["same","相同的",7,"","/seim/"],["sea","海",7,"n.","/si:/"],["seat","座位",7,"n.","/si:t/"],["sell","卖",7,"vt.","/sel/"],["send","发送",7,"vt.","/send/"],["she","她",7,"pron.","/ʃi:/"],["sheep","羊",7,"n.","/ʃi:p/"],["shine","照耀",7,"n.","/ʃain/"],["ship","船",7,"n.","/ʃip/"],["shop","商店",7,"n.","/ʃɒp/"],["show","展示",7,"n.","/ʃәu/"],["sick","病的",7,"n.","/sik/"],["side","边",7,"n.","/said/"],["sir","先生",7,"n.","/sә:/"],["sit","坐",7,"vi.","/sit/"],["six","六",7,"num.","/siks/"],["skate","滑冰",7,"n.","/skeit/"],["ski","滑雪",7,"n.","/ski:/"],["skirt","裙子",7,"n.","/skә:t/"],["sleep","睡觉",7,"n.","/sli:p/"],["slow","慢的",7,"","/slәu/"],["smell","闻",7,"n.","/smel/"],["smile","微笑",7,"n.","/smail/"],["snow","雪",7,"n.","/snәu/"],["sock","袜子",7,"n.","/sɒk/"],["sofa","沙发",7,"n.","/'sәufә/"],["son","儿子",7,"n.","/sʌn/"],["soon","很快",7,"adv.","/su:n/"],["sound","声音",7,"n.","/saund/"],["soup","汤",7,"n.","/su:p/"],["south","南",7,"n.","/sauθ/"],["speak","说",7,"vi.","/spi:k/"],["spell","拼写",7,"n.","/spel/"],["spend","花费",7,"vt.","/spend/"],["stamp","邮票",7,"n.","/stæmp/"],["stand","站",7,"n.","/stænd/"],["start","开始",7,"n.","/stɑ:t/"],["station","车站",7,"n.","/'steiʃәn/"],["stay","停留",7,"n.","/stei/"],["still","仍然",7,"n.","/stil/"],["stop","停止",7,"n.","/stɒp/"],["store","商店",7,"n.","/stɒ:/"],["story","故事",7,"n.","/'stɒ:ri/"],["study","学习",7,"n.","/'stʌdi/"],["subject","科目",7,"n.","/'sʌbdʒekt/"],["such","这样的",7,"","/sʌtʃ/"],["sugar","糖",7,"n.","/'ʃugә/"],["super","超级的",7,"n.","/'sju:pә/"],["sure","确信的",7,"","/ʃuә/"],["sweet","甜的",7,"n.","/swi:t/"],["talk","谈话",7,"n.","/tɒ:k/"],["tall","高的",7,"","/tɒ:l/"],["taxi","出租车",7,"n.","/'tæksi/"],["tea","茶",7,"n.","/ti:/"],["teach","教",7,"vt.","/ti:tʃ/"],["team","队",7,"n.","/ti:m/"],["ten","十",7,"num.","/ten/"],["tennis","网球",7,"n.","/'tenis/"],["term","学期",7,"n.","/tә:m/"],["test","测试",7,"n.","/test/"],["than","比",7,"conj.","/ðæn/"],["that","那个",7,"","/ðæt/"],["their","他们的",7,"pron.","/ðєә/"],["them","他们",7,"pron.","/ðem/"],["then","然后",7,"adv.","/ðen/"],["these","这些",7,"pron.","/ði:z/"],["they","他们",7,"pron.","/ðei/"],["third","第三",7,"num.","/θә:d/"],["thirsty","渴的",7,"","/'θә:sti/"],["thirteen","十三",7,"num.","/'θә:'ti:n/"],["those","那些",7,"pron.","/ðәuz/"],["three","三",7,"num.","/θri:/"],["ticket","票",7,"n.","/'tikit/"],["tiger","老虎",7,"n.","/'taigә/"],["tired","累的",7,"","/taiәd/"],["to","到",7,"prep.","/tu:/"],["together","一起",7,"adv.","/tә'geðә/"],["tomato","西红柿",7,"n.","/tә'mɑ:tәu/"],["tomorrow","明天",7,"n.","/tә'mɒ:rәu/"],["tonight","今晚",7,"n.","/tә'nait/"],["tooth","牙齿",7,"n.","/tu:θ/"],["tour","旅游",7,"n.","/tuә/"],["town","城镇",7,"n.","/taun/"],["toy","玩具",7,"n.","/tɒi/"],["travel","旅行",7,"n.","/'trævl/"],["trip","旅行",7,"n.","/trip/"],["trouble","麻烦",7,"n.","/'trʌbl/"],["truck","卡车",7,"n.","/trʌk/"],["true","真实的",7,"","/tru:/"],["try","尝试",7,"n.","/trai/"],["turn","转",7,"n.","/tә:n/"],["TV","电视",7,"","/'ti:'vi:/"],["twelve","十二",7,"num.","/twelv/"],["twenty","二十",7,"num.","/'twenti/"],["two","二",7,"num.","/tu:/"],["uncle","叔叔",7,"n.","/ʌŋkl/"],["under","在...下",7,"prep.","/'ʌndә/"],["up","向上",7,"","/ʌp/"],["us","我们",7,"pron.","/ʌs/"],["use","使用",7,"n.","/ju:s/"],["usually","通常",7,"adv.","/'ju:ʒuәli/"],["visit","拜访",7,"n.","/'vizit/"],["wait","等待",7,"n.","/weit/"],["wake","醒来",7,"vt.","/weik/"],["wall","墙",7,"n.","/wɒ:l/"],["wash","洗",7,"n.","/wɒʃ/"],["watch","手表",7,"n.","/wɒtʃ/"],["we","我们",7,"pron.","/wi:/"],["wear","穿",7,"n.","/wєә/"],["weather","天气",7,"n.","/'weðә/"],["weekend","周末",7,"n.","/'wi:kend/"],["west","西",7,"n.","/west/"],["while","当...时",7,"n.","/hwail/"],["whose","谁的",7,"pron.","/hu:z/"],["wife","妻子",7,"n.","/waif/"],["wild","野生的",7,"n.","/waild/"],["will","将",7,"n.","/wil/"],["wind","风",7,"n.","/wind/"],["wish","希望",7,"n.","/wiʃ/"],["with","和",7,"prep.","/wið/"],["wonderful","精彩的",7,"","/'wʌndәful/"],["word","单词",7,"n.","/wә:d/"],["worker","工人",7,"n.","/'wә:kә/"],["worry","担心",7,"n.","/'wʌri/"],["wrong","错的",7,"","/rɒŋ/"],["yes","是",7,"adv.","/jes/"],["yet","还",7,"adv.","/jet/"],["you","你",7,"pron.","/ju:/"],["young","年轻的",7,"","/jʌŋ/"],["your","你的",7,"pron.","/juә/"],["zero","零",7,"n.","/'ziәrәu/"],["zoo","动物园",7,"n.","/zu:/"],["abroad","在国外",8,"adv.","/ә'brɒ:d/"],["absent","缺席的",8,"","/'æbsәnt/"],["accident","事故",8,"n.","/'æksidәnt/"],["act","行动",8,"n.","/ækt/"],["add","增加",8,"vt.","/æd/"],["Africa","非洲",8,"n.","/'æfrikә/"],["African","非洲的",8,"n.","/'æfrikәn/"],["agreement","协议",8,"n.","/ә'gri:mәnt/"],["ahead","在前面",8,"","/ә'hed/"],["altogether","总共",8,"adv.","/.ɒ:ltә'geðә/"],["America","美国",8,"n.","/ә'merikә/"],["American","美国的",8,"n.","/ә'merikәn/"],["amusing","有趣的",8,"","/ә'mju:ziŋ/"],["anger","愤怒",8,"n.","/'æŋgә/"],["apart","分开",8,"adv.","/ә'pɑ:t/"],["apartment","公寓",8,"n.","/ә'pɑ:tmәnt/"],["April","四月",8,"n.","/'eiprәl/"],["as","作为",8,"adv.","/æz/"],["Asia","亚洲",8,"n.","/'eiʒә/"],["Asian","亚洲的",8,"n.","/'eiʃәn/"],["assistant","助手",8,"n.","/ә'sistәnt/"],["astronaut","宇航员",8,"n.","/'æstrәnɒ:t/"],["at","在",8,"prep.","/æt/"],["August","八月",8,"n.","/ɒ:'gʌst. 'ɒ:gәst/"],["Australia","澳大利亚",8,"n.","/ɒ'streiljә/"],["Australian","澳洲的",8,"n.","/ɒ'streiljәn/"],["avenue","大街",8,"n.","/'ævәnju:/"],["awful","可怕的",8,"","/'ɒ:ful/"],["backpack","背包",8,"n.","/'bækpæk/"],["badminton","羽毛球",8,"n.","/'bædmintәn/"],["baggage","行李",8,"n.","/'bægidʒ/"],["bake","烤",8,"vt.","/beik/"],["balloon","气球",8,"n.","/bә'lu:n/"],["bamboo","竹子",8,"n.","/bæm'bu:/"],["bar","酒吧",8,"n.","/bɑ:/"],["bare","赤裸的",8,"","/bєә/"],["baseball","棒球",8,"n.","/'beisbɒ:l/"],["battle","战斗",8,"n.","/'bætl/"],["beauty","美",8,"n.","/'bju:ti/"],["bee","蜜蜂",8,"n.","/bi:/"],["beer","啤酒",8,"n.","/biә/"],["being","存在",8,"n.","/'bi:iŋ/"],["Belgium","比利时",8,"n.","/'beldʒәm/"],["belt","腰带",8,"n.","/belt/"],["bench","长凳",8,"n.","/bentʃ/"],["bend","弯曲",8,"vi.","/bend/"],["bicycle","自行车",8,"n.","/'baisikl/"],["biscuit","饼干",8,"n.","/'biskit/"],["bite","咬",8,"n.","/bait/"],["blame","责备",8,"n.","/bleim/"],["blouse","女衬衫",8,"n.","/blauz/"],["bomb","炸弹",8,"n.","/bɒm/"],["bone","骨头",8,"n.","/bәun/"],["boot","靴子",8,"n.","/bu:t/"],["boyfriend","男友",8,"n.","/'bɔifrend/"],["branch","树枝",8,"n.","/bræntʃ/"],["Britain","英国",8,"n.","/'britәn/"],["British","英国的",8,"","/'britiʃ/"],["broadcast","广播",8,"n.","/'brɒ:dkæst/"],["bucket","桶",8,"n.","/'bʌkit/"],["bulb","灯泡",8,"n.","/bʌlb/"],["bull","公牛",8,"n.","/bul/"],["bunch","束",8,"n.","/bʌntʃ/"],["burden","负担",8,"n.","/'bә:dn/"],["burn","燃烧",8,"vt.","/bә:n/"],["bury","埋葬",8,"vt.","/'beri/"],["bush","灌木",8,"n.","/buʃ/"],["butcher","屠夫",8,"n.","/'butʃә/"],["butterfly","蝴蝶",8,"n.","/'bʌtәflai/"],["cafe","咖啡馆",8,"n.","/kɑ:'fei/"],["camel","骆驼",8,"n.","/'kæml/"],["Canada","加拿大",8,"n.","/'kænәdә/"],["Canadian","加拿大的",8,"","/kә'neidiәn/"],["canal","运河",8,"n.","/kә'næl/"],["cart","手推车",8,"n.","/kɑ:t/"],["cassette","磁带",8,"n.","/kæ'set/"],["castle","城堡",8,"n.","/'kæsl. 'kɑ:sl/"],["catalogue","目录",8,"n.","/'kætәlɒg/"],["cave","洞穴",8,"n.","/keiv/"],["ceiling","天花板",8,"n.","/'si:liŋ/"],["cell","细胞",8,"n.","/sel/"],["cent","分",8,"n.","/sent/"],["center","中心",8,"n.","/'sentә/"],["chalk","粉笔",8,"n.","/tʃɒ:k/"],["chat","聊天",8,"n.","/tʃæt/"],["cheat","欺骗",8,"n.","/tʃi:t/"],["cheek","脸颊",8,"n.","/tʃi:k/"],["chemist","化学家",8,"n.","/'kemist/"],["chemistry","化学",8,"n.","/'kemistri/"],["cherry","樱桃",8,"n.","/'tʃeri/"],["chips","薯条",8,"n.","/tʃips/"],["clap","鼓掌",8,"n.","/klæp/"],["clerk","职员",8,"n.","/klә:k/"],["client","客户",8,"n.","/'klaiәnt/"],["coal","煤",8,"n.","/kәul/"],["cock","公鸡",8,"n.","/kɒk/"],["Coke","可乐",8,"n.","/kәuk/"],["comb","梳子",8,"n.","/kәum/"],["costume","服装",8,"n.","/'kɒstju:m/"],["cottage","村舍",8,"n.","/'kɒtidʒ/"],["couch","沙发",8,"n.","/kautʃ/"],["crop","庄稼",8,"n.","/krɒp/"],["crown","王冠",8,"n.","/kraun/"],["cruel","残忍的",8,"","/'kru:әl/"],["cucumber","黄瓜",8,"n.","/'kju:kәmbә/"],["cushion","垫子",8,"n.","/'kuʃәn/"],["dentist","牙医",8,"n.","/'dentist/"],["dessert","甜点",8,"n.","/di'zә:t/"],["destroy","破坏",8,"vt.","/di'strɒi/"],["diagram","图表",8,"n.","/'daiәɡræm/"],["direction","方向",8,"n.","/di'rekʃәn/"],["discussion","讨论",8,"n.","/dis'kʌʃәn/"],["display","展示",8,"n.","/dis'plei/"],["dive","潜水",8,"n.","/daiv/"],["dizzy","眩晕的",8,"","/'dizi/"],["does","做",8,"v.","/dʌz; dәz/"],["dot","点",8,"n.","/dɒt/"],["download","下载",8,"","/download/"],["due","到期的",8,"n.","/dju:/"],["dull","无聊的",8,"","/dʌl/"],["dust","灰尘",8,"n.","/dʌst/"],["DVD","影碟",8,"abbr.","/DVD/"],["eager","渴望的",8,"","/'i:gә/"],["earn","赚取",8,"vt.","/ә:n/"],["earthquake","地震",8,"n.","/'ә:θkweik/"],["economic","经济的",8,"","/.i:kә'nɒmik/"],["edge","边缘",8,"n.","/edʒ/"],["edit","编辑",8,"vt.","/'edit/"],["elect","选举",8,"n.","/i'lekt/"],["electricity","电",8,"n.","/.ilek'trisiti/"],["elevator","电梯",8,"n.","/'eliveitә/"],["embarrassed","尴尬的",8,"","/im'bærәst/"],["emergency","紧急情况",8,"n.","/i'mә:dʒәnsi/"],["emotion","情感",8,"n.","/i'mәuʃәn/"],["emperor","皇帝",8,"n.","/'empәrә/"],["employ","雇佣",8,"n.","/im'plɒi/"],["encourage","鼓励",8,"vt.","/in'kʌridʒ/"],["engine","引擎",8,"n.","/'endʒin/"],["enjoyable","令人愉快的",8,"","/in'dʒɒiәbl/"],["entire","整个的",8,"n.","/in'taiә/"],["entrance","入口",8,"n.","/'entrәns/"],["envelope","信封",8,"n.","/'envәlәup/"],["equal","平等的",8,"n.","/'i:kwәl/"],["equipment","设备",8,"n.","/i'kwipmәnt/"],["error","错误",8,"n.","/'erә/"],["escape","逃跑",8,"n.","/i'skeip/"],["eve","前夕",8,"n.","/i:v/"],["evidence","证据",8,"n.","/'evidәns/"],["execute","执行",8,"vt.","/'eksikju:t/"],["exit","出口",8,"n.","/'eksit/"],["expert","专家",8,"n.","/'ekspә:t/"],["explode","爆炸",8,"vi.","/ik'splәud/"],["explore","探索",8,"v.","/ik'splɒ:/"],["extra","额外的",8,"n.","/'ekstrә/"],["extreme","极端的",8,"n.","/ik'stri:m/"],["false","错误的",8,"","/fɒ:ls/"],["familiar","熟悉的",8,"","/fә'miljә/"],["fashion","时尚",8,"n.","/'fæʃәn/"],["fate","命运",8,"n.","/feit/"],["fault","错误",8,"n.","/fɒ:lt/"],["feast","盛宴",8,"n.","/fi:st/"],["fee","费用",8,"n.","/fi:/"],["feeling","感觉",8,"n.","/'fi:liŋ/"],["fellow","伙伴",8,"n.","/'felәu/"],["female","女性的",8,"n.","/'fi:meil/"],["fence","栅栏",8,"n.","/fens/"],["fetch","取来",8,"n.","/fetʃ/"],["figure","数字",8,"n.","/'figә/"],["file","文件",8,"n.","/fail/"],["firm","坚固的",8,"n.","/fә:m/"],["flame","火焰",8,"n.","/fleim/"],["flash","闪光",8,"n.","/flæʃ/"],["flashlight","手电筒",8,"n.","/'flæʃlait/"],["flood","洪水",8,"n.","/flʌd/"],["flour","面粉",8,"n.","/'flauә/"],["flow","流动",8,"n.","/flәu/"],["flu","流感",8,"n.","/flu:/"],["fog","雾",8,"n.","/fɒg/"],["fold","折叠",8,"n.","/fәuld/"],["following","接下来的",8,"n.","/'fɒlәuiŋ/"],["fond","喜爱的",8,"","/fɒnd/"],["fool","傻瓜",8,"n.","/fu:l/"],["foolish","愚蠢的",8,"","/'fu:liʃ/"],["foreigner","外国人",8,"n.","/'fɒ:rinә/"],["former","以前的",8,"","/'fɒ:mә/"],["fort","堡垒",8,"n.","/fɒ:t/"],["fortune","财富",8,"n.","/'fɒ:tʃәn/"],["fountain","喷泉",8,"n.","/'fauntin/"],["fox","狐狸",8,"n.","/fɒks/"],["fragile","易碎的",8,"","/'frædʒail/"],["freedom","自由",8,"n.","/'fri:dәm/"],["freeze","冻结",8,"vi.","/fri:z/"],["fresh","新鲜的",8,"","/freʃ/"],["fridge","冰箱",8,"n.","/fridʒ/"],["friendly","友好的",8,"","/'frendli/"],["friendship","友谊",8,"n.","/'frendʃip/"],["frighten","惊吓",8,"vt.","/'fraitn/"],["frost","霜",8,"n.","/frɒst/"],["frown","皱眉",8,"n.","/fraun/"],["fry","油炸",8,"n.","/frai/"],["fuel","燃料",8,"n.","/'fjuәl/"],["full","满的",8,"n.","/ful/"],["function","功能",8,"n.","/'fʌŋkʃәn/"],["fur","毛皮",8,"n.","/fә:/"],["furniture","家具",8,"n.","/'fәnitʃә/"],["further","更远的",8,"","/'fә:ðә/"],["future","未来",8,"n.","/'fju:tʃә/"],["abandon","放弃",9,"vt.","/ә'bændәn/"],["abolish","废除",9,"vt.","/ә'bɒliʃ/"],["absolute","绝对的",9,"","/'æbsәlu:t/"],["absorb","吸收",9,"vt.","/әb'sɒ:b/"],["abstract","抽象的",9,"","/'æbstrækt/"],["absurd","荒谬的",9,"","/әb'sә:d/"],["abundant","丰富的",9,"","/ә'bʌndәnt/"],["abuse","滥用",9,"n.","/ә'bju:s.ә'bju:z/"],["academic","学术的",9,"","/.ækә'demik/"],["accelerate","加速",9,"v.","/әk'selәreit/"],["access","接近",9,"n.","/'ækses/"],["accommodate","容纳",9,"vt.","/ә'kɒmәdeit/"],["accompany","陪伴",9,"vt.","/ә'kʌmpәni/"],["accomplish","完成",9,"vt.","/ә'kʌmpliʃ/"],["account","账户",9,"n.","/ә'kaunt/"],["accurate","准确的",9,"","/'ækjurәt/"],["accuse","指控",9,"vt.","/ә'kju:z/"],["acid","酸",9,"n.","/'æsid/"],["acknowledge","承认",9,"vt.","/әk'nɒlidʒ/"],["acquaintance","熟人",9,"n.","/ә'kweintәns/"],["acquire","获得",9,"vt.","/ә'kwaiә/"],["acre","英亩",9,"n.","/'eikә/"],["actor","演员",9,"n.","/'æktә/"],["actress","女演员",9,"n.","/'æktris/"],["addition","增加",9,"n.","/ә'diʃәn/"],["adequate","足够的",9,"","/'ædikwәt/"],["adjust","调整",9,"vt.","/ә'dʒʌst/"],["administration","管理",9,"n.","/әd.mini'streiʃәn/"],["advanced","高级的",9,"","/әd'vɑ:nst/"],["affair","事务",9,"n.","/ә'fєә/"],["affect","影响",9,"vt.","/ә'fekt/"],["afterward","后来",9,"adv.","/'ɑ:ftәwәd/"],["agency","代理处",9,"n.","/'eidʒәnsi/"],["aggressive","好斗的",9,"","/ә'gresiv/"],["agriculture","农业",9,"n.","/'ægrikʌltʃә/"],["aid","援助",9,"n.","/eid/"],["aircraft","飞机",9,"n.","/'єәkræft/"],["airline","航空公司",9,"n.","/'єәlain/"],["airplane","飞机",9,"n.","/'єәplein/"],["album","相册",9,"n.","/'ælbәm/"],["alcohol","酒精",9,"n.","/'ælkәhɒl/"],["alike","相似的",9,"","/ә'laik/"],["aloud","出声地",9,"adv.","/ә'laud/"],["alphabet","字母表",9,"n.","/'ælfәbit/"],["alternative","替代的",9,"n.","/ɒ:l'tә:nәtiv/"],["aluminum","铝",9,"n.","/ә'lu:minәm/"],["amaze","使惊讶",9,"vt.","/ә'meiz/"],["ambassador","大使",9,"n.","/æm'bæsәdә/"],["ambition","雄心",9,"n.","/æm'biʃәn/"],["ambulance","救护车",9,"n.","/'æmbjulәns/"],["amount","数量",9,"n.","/ә'maunt/"],["amuse","娱乐",9,"vt.","/ә'mju:z/"],["angle","角度",9,"n.","/'æŋgl/"],["ankle","脚踝",9,"n.","/'æŋkl/"],["anniversary","周年",9,"n.","/æni'vә:sәri/"],["annoy","使烦恼",9,"vt.","/ә'nɒi/"],["annual","每年的",9,"n.","/'ænjuәl/"],["ant","蚂蚁",9,"n.","/ænt/"],["Antarctic","南极的",9,"","/ænt'ɑ:ktik/"],["anxiety","焦虑",9,"n.","/æŋ'zaiәti/"],["anybody","任何人",9,"pron.","/'enibɒdi/"],["anyway","无论如何",9,"adv.","/'eniwei/"],["apology","道歉",9,"n.","/ә'pɒlәdʒi/"],["app","应用",9,"","/app/"],["apparatus","设备",9,"n.","/.æpә'reitәs/"],["application","申请",9,"n.","/.æpli'keiʃәn/"],["approval","批准",9,"n.","/ә'pru:vl/"],["approximately","大约",9,"adv.","/ә'prɒksimәtli/"],["Arab","阿拉伯的",9,"n.","/'ærәb/"],["Arabic","阿拉伯语",9,"n.","/'ærәbik/"],["arch","拱门",9,"n.","/ɑ:tʃ/"],["architect","建筑师",9,"n.","/'ɑ:kitekt/"],["architecture","建筑",9,"n.","/'ɑ:kitektʃә/"],["Arctic","北极的",9,"","/'ɑ:ktik/"],["are","是",9,"","/ɑ:/"],["argument","争论",9,"n.","/'ɑ:gjumәnt/"],["armchair","扶手椅",9,"n.","/.ɑ:m'tʃєә/"],["arrest","逮捕",9,"n.","/ә'rest/"],["artificial","人工的",9,"","/.ɑ:ti'fiʃәl/"],["ash","灰烬",9,"n.","/æʃ/"],["aspect","方面",9,"n.","/'æspekt/"],["assemble","集合",9,"vt.","/ә'sembl/"],["astronomer","天文学家",9,"n.","/ә'strɒnәmә/"],["astronomy","天文学",9,"n.","/ә'strɒnәmi/"],["Atlantic","大西洋的",9,"n.","/әt'læntik/"],["atom","原子",9,"n.","/'ætәm/"],["attraction","吸引力",9,"n.","/ә'trækʃәn/"],["attractive","迷人的",9,"","/ә'træktiv/"],["autobiography","自传",9,"n.","/.ɒ:tәubai'ɒgrәfi/"],["awkward","尴尬的",9,"","/'ɒ:kwәd/"],["backwards","向后",9,"adv.","/'bækwәdz/"],["bacon","培根",9,"n.","/'beikәn/"],["bacteria","细菌",9,"","/bæk'tiәriә/"],["badge","徽章",9,"n.","/bædʒ/"],["bakery","面包店",9,"n.","/'beikәri/"],["balcony","阳台",9,"n.","/'bælkәni/"],["bald","秃的",9,"","/bɒ:ld/"],["ballet","芭蕾",9,"n.","/'bælei/"],["bandage","绷带",9,"n.","/'bændidʒ/"],["bang","砰",9,"n.","/bæŋ/"],["barbecue","烧烤",9,"n.","/'bɑ:bikju:/"],["barber","理发师",9,"n.","/'bɑ:bә/"],["bark","吠",9,"n.","/bɑ:k/"],["basin","盆地",9,"n.","/'beisn/"],["bat","蝙蝠",9,"n.","/bæt/"],["beg","乞求",9,"v.","/beg/"],["beneath","在...之下",9,"prep.","/bi'ni:θ/"],["Bible","圣经",9,"n.","/'baibl/"],["bingo","宾果",9,"n.","/'biŋgәu/"],["biography","传记",9,"n.","/bai'ɒgrәfi/"],["birthplace","出生地",9,"n.","/'bә:θpleis/"],["bitter","苦的",9,"","/'bitә/"],["blog","博客",9,"n.","/blog/"],["bold","大胆的",9,"","/bәuld/"],["bond","纽带",9,"n.","/bɒnd/"],["boom","繁荣",9,"n.","/bu:m/"],["bow","鞠躬",9,"n.","/bәu.bau/"],["bravery","勇敢",9,"n.","/'breivәri/"],["breast","胸部",9,"n.","/brest/"],["breath","呼吸",9,"n.","/breθ/"],["bride","新娘",9,"n.","/braid/"],["Buddhism","佛教",9,"n.","/'budizm/"],["buffet","自助餐",9,"n.","/'bʌfit/"],["bug","虫子",9,"n.","/bʌg/"],["burger","汉堡",9,"n.","/'bә:ɡә/"],["businessman","商人",9,"n.","/'biznismæn/"],["cab","出租车",9,"n.","/kæb/"],["cafeteria","自助餐厅",9,"n.","/.kæfi'tiәriә/"],["calculator","计算器",9,"n.","/'kælkjuleitә/"],["cancer","癌症",9,"n.","/'kænsә/"],["canoe","独木舟",9,"n.","/kә'nu:/"],["carriage","马车",9,"n.","/'kæridʒ/"],["carrier","载体",9,"n.","/'kæriә/"],["casual","随意的",9,"","/'kæʒjuәl/"],["catalog","目录",9,"n.","/'kætәlɒg/"],["caution","谨慎",9,"n.","/'kɒ:ʃәn/"],["CD","光盘",9,"n.","/CD/"],["celebration","庆祝",9,"n.","/.seli'breiʃәn/"],["cellphone","手机",9,"n.","/'selfәun/"],["central","中央的",9,"","/'sentrәl/"],["certificate","证书",9,"n.","/sә'tifikeit/"],["chairman","主席",9,"n.","/'tʃєәmәn/"],["charm","魅力",9,"n.","/tʃɑ:m/"],["cheerful","愉快的",9,"","/'tʃiәful/"],["chef","主厨",9,"n.","/ʃef/"],["chorus","合唱",9,"n.","/'kɒ:rәs/"],["Christian","基督教的",9,"n.","/'kristʃәn/"],["cigar","雪茄",9,"n.","/si'gɑ:/"],["cigarette","香烟",9,"n.","/.sigә'ret/"],["circuit","电路",9,"n.","/'sә:kit/"],["civilization","文明",9,"n.","/si.vilai'zeiʃәn/"],["clarinet","单簧管",9,"n.","/klæri'net/"],["classical","古典的",9,"","/'klæsikl/"],["clay","黏土",9,"n.","/klei/"],["cliff","悬崖",9,"n.","/klif/"],["clothing","服装",9,"n.","/'klәuðiŋ/"],["cocktail","鸡尾酒",9,"n.","/'kɒkteil/"],["cocoa","可可",9,"n.","/'kәukәu/"],["coconut","椰子",9,"n.","/'kәukәnәt/"],["collar","领子",9,"n.","/'kɒlә/"],["collection","收藏",9,"n.","/kә'lekʃәn/"],["commercial","商业的",9,"","/kә'mә:ʃәl/"],["commit","犯(罪)",9,"vt.","/kә'mit/"],["communication","交流",9,"n.","/kә.mju:ni'keiʃәn/"],["comparison","比较",9,"n.","/kәm'pærisn/"],["competition","竞争",9,"n.","/.kɒmpi'tiʃәn/"],["competitor","竞争者",9,"n.","/kәm'petitә/"],["complicated","复杂的",9,"","/'kɒmplikeitid/"],["composer","作曲家",9,"n.","/kәm'pәuzә/"],["composition","作文",9,"n.","/kɒmpә'ziʃәn/"],["compound","化合物",9,"n.","/kәm'paund/"],["comprehend","理解",9,"vt.","/.kɒmpri'hend/"],["conceal","隐藏",9,"vt.","/kәn'si:l/"],["concentrate","集中",9,"n.","/'kɒnsәntreit/"],["conclusion","结论",9,"n.","/kәn'klu:ʒәn/"],["conductor","指挥",9,"n.","/kәn'dʌktә/"],["conjunction","连词",9,"n.","/kәn'dʒʌŋkʃәn/"],["connection","连接",9,"n.","/kә'nekʃәn/"],["conquer","征服",9,"vt.","/'kɒŋkә/"],["conservation","保护",9,"n.","/.kɒnsә'veiʃәn/"],["constantly","不断地",9,"adv.","/'kɒnstәntli/"],["construction","建设",9,"n.","/kәn'strʌkʃәn/"],["container","容器",9,"n.","/kәn'teinә/"],["contemporary","当代的",9,"n.","/kәn'tempәrәri/"],["content","内容",9,"n.","/kәn'tent/"],["continent","大陆",9,"n.","/'kɒntinәnt/"],["continuous","持续的",9,"","/kәn'tinjuәs/"],["contribution","贡献",9,"n.","/.kɒntri'bju:ʃәn/"],["copper","铜",9,"n.","/'kɒpә/"],["cord","绳索",9,"n.","/kɒ:d/"],["corporation","公司",9,"n.","/.kɒ:pә'reiʃәn/"],["correspond","通信",9,"vi.","/.kɒri'spɒnd/"],["countable","可数的",9,"","/'kauntәbl/"],["coward","懦夫",9,"n.","/'kauәd/"],["cowboy","牛仔",9,"n.","/'kaubɒi/"],["crate","板条箱",9,"n.","/kreit/"],["crayon","蜡笔",9,"n.","/'kreiәn/"],["creation","创造",9,"n.","/kri:'eiʃәn/"],["creative","有创造力的",9,"","/kri:'eitiv/"],["creature","生物",9,"n.","/'kri:tʃә/"],["criminal","罪犯",9,"n.","/'kriminәl/"],["critic","批评家",9,"n.","/'kritik/"],["critical","关键的",9,"","/'kritikәl/"],["crossing","十字路口",9,"n.","/'krɒsiŋ/"],["crow","乌鸦",9,"n.","/krәu/"],["crowded","拥挤的",9,"","/'kraudid/"],["cuisine","烹饪",9,"n.","/kwi:'zi:n/"],["cupboard","橱柜",9,"n.","/'kʌpbɒ:d/"],["curiosity","好奇心",9,"n.","/.kjuәri'ɒsiti/"],["customs","海关",9,"n.","/customs/"],["darkness","黑暗",9,"n.","/'dɑ:knis/"],["database","数据库",9,"n.","/'deitәbeis/"],["dawn","黎明",9,"n.","/dɒ:n/"],["debt","债务",9,"n.","/det/"],["deed","行为",9,"n.","/di:d/"],["deeply","深深地",9,"adv.","/'di:pli/"],["defence","防御",9,"n.","/di'fens/"],["definite","明确的",9,"","/'definit/"],["delete","删除",9,"vt.","/di'li:t/"],["deliberately","故意地",9,"adv.","/di'libәrәtli/"],["delicate","精致的",9,"","/'delikәt/"],["delight","高兴",9,"n.","/di'lait/"],["delivery","递送",9,"n.","/di'livәri/"],["democracy","民主",9,"n.","/di'mɒkrәsi/"],["demonstrate","证明",9,"vt.","/'demәnstreit/"],["deny","否认",9,"v.","/di'nai/"],["depart","离开",9,"vi.","/di'pɑ:t/"],["departure","离开",9,"n.","/di'pɑ:tʃә/"],["description","描述",9,"n.","/di'skripʃәn/"],["desperate","绝望的",9,"","/'despәrәt/"],["despite","尽管",9,"n.","/di'spait/"],["destination","目的地",9,"n.","/.desti'neiʃәn/"],["destruction","破坏",9,"n.","/di'strʌkʃәn/"],["detective","侦探",9,"n.","/di'tektiv/"],["determination","决心",9,"n.","/di.tә:mi'neiʃәn/"],["development","发展",9,"n.","/di'velәpmәnt/"],["dial","拨号",9,"n.","/'daiәl/"],["diamond","钻石",9,"n.","/'daiәmәnd/"],["differ","不同",9,"vi.","/'difә/"],["difficulty","困难",9,"n.","/'difikәlti/"],["digital","数字的",9,"","/'didʒitәl/"],["dine","就餐",9,"vi.","/dain/"],["disabled","残疾的",9,"","/dis'eibld/"],["disco","迪斯科",9,"n.","/'diskәu/"],["discovery","发现",9,"n.","/dis'kʌvәri/"],["discrimination","歧视",9,"n.","/dis.krimi'neiʃәn/"],["disk","磁盘",9,"n.","/disk/"],["dislike","不喜欢",9,"n.","/dis'laik/"],["dismiss","解散",9,"vt.","/dis'mis/"],["distinct","明显的",9,"","/dis'tiŋkt/"],["division","划分",9,"n.","/di'viʒәn/"],["documentary","纪录片",9,"n.","/.dɒkju'mentәri/"],["dolphin","海豚",9,"n.","/'dɒlfin/"],["donkey","驴",9,"n.","/'dɒŋki/"],["dormitory","宿舍",9,"n.","/'dɒ:mitәri/"],["dose","剂量",9,"n.","/dәus/"],["doughnut","甜甜圈",9,"n.","/'dәunʌt/"],["dragon","龙",9,"n.","/'drægәn/"],["drawer","抽屉",9,"n.","/'drɒ:ә/"],["drawing","图画",9,"n.","/'drɒ:iŋ/"],["dressing","调料",9,"n.","/'dresiŋ/"],["drunk","醉的",9,"","/drʌŋk/"],["dynamic","动态的",9,"","/dai'næmik/"],["eagle","鹰",8,"n.","/'i:gl/"],["earnest","认真的",8,"n.","/'ә:nist/"],["ease","轻松",8,"n.","/i:z/"],["echo","回声",8,"n.","/'ekәu/"],["edition","版本",8,"n.","/i'diʃәn/"],["editor","编辑",8,"n.","/'editә/"],["educate","教育",8,"vt.","/'edjukeit/"],["effective","有效的",8,"","/i'fektiv/"],["efficient","高效的",8,"","/i'fiʃәnt/"],["elbow","手肘",8,"n.","/'elbәu/"],["elderly","年长的",8,"","/'eldәli/"],["election","选举",8,"n.","/i'lekʃәn/"],["electronic","电子的",8,"","/.ilek'trɒnik/"],["elegant","优雅的",8,"","/'eligәnt/"],["element","元素",8,"n.","/'elimәnt/"],["embarrass","使尴尬",8,"vt.","/im'bærәs/"],["embassy","大使馆",8,"n.","/'embәsi/"],["embrace","拥抱",8,"n.","/im'breis/"],["emerge","出现",8,"vi.","/i'mә:dʒ/"],["emotional","情感的",8,"","/i'mәuʃәnәl/"],["emphasis","强调",8,"n.","/'emfәsis/"],["empire","帝国",8,"n.","/'empaiә/"],["employee","雇员",8,"n.","/.emplɒi'i:/"],["employer","雇主",8,"n.","/im'plɒiә/"],["enable","使能够",8,"vt.","/i'neibl/"],["enclosure","围场",8,"n.","/in'klәuʒә/"],["encounter","偶遇",8,"n.","/in'kauntә/"],["encyclopedia","百科全书",8,"n.","/in.saiklәu'pi:diә/"],["endless","无尽的",8,"","/'endlis/"],["endurance","耐力",8,"n.","/in'djuәrәns/"],["energetic","精力充沛的",8,"","/.enә'dʒetik/"],["enforce","执行",8,"vt.","/in'fɒ:s/"],["engage","参与",8,"vi.","/in'geidʒ/"],["engineering","工程",8,"n.","/.endʒi'niәriŋ/"],["enlarge","扩大",8,"vt.","/in'lɑ:dʒ/"],["enormous","巨大的",8,"","/i'nɒ:mәs/"],["enrich","丰富",8,"vt.","/in'ritʃ/"],["ensure","确保",8,"vt.","/in'ʃuә/"],["enterprise","企业",8,"n.","/'entәpraiz/"],["entertain","娱乐",8,"vt.","/.entә'tein/"],["enthusiasm","热情",8,"n.","/in'θju:ziæzәm/"],["entitle","给...权利",8,"vt.","/in'taitl/"],["entry","进入",8,"n.","/'entri/"],["envy","嫉妒",8,"n.","/'envi/"],["episode","片段",8,"n.","/'episәud/"],["equality","平等",8,"n.","/i:'kwɒliti/"],["era","时代",8,"n.","/'iәrә/"],["essay","论文",8,"n.","/'esei. e'sei/"],["essential","必要的",8,"n.","/i'senʃәl/"],["establish","建立",8,"vt.","/i'stæbliʃ/"],["estate","地产",8,"n.","/i'steit/"],["estimate","估计",8,"n.","/'estimeit/"],["evaluate","评估",8,"vt.","/i'væljueit/"],["eventually","最终",8,"adv.","/i'ventʃuәli/"],["evident","明显的",8,"","/'evidәnt/"],["evil","邪恶的",8,"n.","/'i:vl/"],["evolution","进化",8,"n.","/.i:vә'lu:ʃәn/"],["exaggerate","夸大",8,"v.","/ig'zædʒәreit/"],["examination","考试",8,"n.","/ig.zæmi'neiʃәn/"],["exceed","超过",8,"vt.","/ik'si:d/"],["exception","例外",8,"n.","/ik'sepʃәn/"],["exchange","交换",8,"n.","/iks'tʃeindʒ/"],["excitement","兴奋",8,"n.","/ik'saitmәnt/"],["exclaim","呼喊",8,"v.","/iks'kleim/"],["exclude","排除",8,"vt.","/iks'klu:d/"],["executive","主管",8,"n.","/ig'zekjutiv/"],["exhaust","耗尽",8,"n.","/ig'zɒ:st/"],["exhibition","展览",8,"n.","/.eksi'biʃәn/"],["existence","存在",8,"n.","/ig'zistәns/"],["expand","扩展",8,"vt.","/ik'spænd/"],["expectation","期待",8,"n.","/.ekspek'teiʃәn/"],["expense","花费",8,"n.","/ik'spens/"],["explanation","解释",8,"n.","/.eksplә'neiʃәn/"],["exploit","开发",8,"n.","/'eksplɒit/"],["explorer","探险家",8,"n.","/ik'splɒ:rә/"],["export","出口",8,"n.","/ik'spɒ:t/"],["expose","暴露",8,"vt.","/ik'spәuz/"],["expression","表达",8,"n.","/ik'spreʃәn/"],["extend","延伸",8,"v.","/ik'stend/"],["extension","延伸",8,"n.","/ik'stenʃәn/"],["extensive","广泛的",8,"","/ik'stensiv/"],["extract","提取",8,"n.","/ik'strækt/"],["extraordinary","非凡的",8,"","/ik'strɒ:dәnәri/"],["extremely","极其",8,"adv.","/ik'stri:mli/"],["eyebrow","眉毛",8,"n.","/'aibrau/"],["fable","寓言",8,"n.","/'feibl/"],["fabric","织物",8,"n.","/'fæbrik/"],["facility","设施",8,"n.","/fә'siliti/"],["factor","因素",8,"n.","/'fæktә/"],["fade","褪色",8,"vi.","/feid/"],["failure","失败",8,"n.","/'feiljә/"],["faint","微弱的",8,"n.","/feint/"],["faith","信仰",8,"n.","/feiθ/"],["faithful","忠诚的",8,"","/'feiθful/"],["fake","假的",8,"n.","/feik/"],["fame","名声",8,"n.","/feim/"],["famine","饥荒",8,"n.","/'fæmin/"],["fancy","想象的",8,"n.","/'fænsi/"],["fantastic","极好的",8,"","/fæn'tæstik/"],["fantasy","幻想",8,"n.","/'fæntәsi/"],["fare","车费",8,"n.","/fєә/"],["farewell","告别",8,"n.","/'fєә'wel/"],["farmhouse","农舍",8,"n.","/'fɑ:mhaus/"],["fascinate","使着迷",8,"vt.","/'fæsineit/"],["fashionable","时髦的",8,"","/'fæʃәnәbl/"],["fasten","系紧",8,"vt.","/'fɑ:sәn/"],["fatal","致命的",8,"","/'feitәl/"],["favor","恩惠",8,"n.","/'feivә/"],["favorable","有利的",8,"","/'feivәrәbl/"],["fax","传真",8,"n.","/fæks/"],["feather","羽毛",8,"n.","/'feðә/"],["feature","特征",8,"n.","/'fi:tʃә/"],["federal","联邦的",8,"","/'fedәrәl/"],["feedback","反馈",8,"n.","/'fi:dbæk/"],["feudal","封建的",8,"","/'fju:dәl/"],["fiber","纤维",8,"n.","/'faibә/"],["fiction","小说",8,"n.","/'fikʃәn/"],["fierce","凶猛的",8,"","/fiәs/"],["fighter","战士",8,"n.","/'faitә/"],["filter","过滤",8,"n.","/'filtә/"],["finance","金融",8,"n.","/fai'næns/"],["financial","金融的",8,"","/fai'nænʃәl/"],["finding","发现",8,"n.","/'faindiŋ/"],["fireplace","壁炉",8,"n.","/'faiәpleis/"],["fist","拳头",8,"n.","/fist/"],["flavor","味道",8,"n.","/'fleivә/"],["flee","逃跑",8,"vt.","/fli:/"],["fleet","舰队",8,"n.","/fli:t/"],["flesh","肉",8,"n.","/'fleʃ/"],["flexible","灵活的",8,"","/'fleksәbl/"],["float","漂浮",8,"n.","/flәut/"],["flock","群",8,"n.","/flɒk/"],["fluent","流利的",8,"","/'flu:әnt/"],["fluid","流体",8,"n.","/'flu:id/"],["flush","冲洗",8,"n.","/flʌʃ/"],["folk","民间的",8,"n.","/fәuk/"],["forbid","禁止",8,"vt.","/fә'bid/"],["forecast","预测",8,"n.","/'fɒ:kɑ:st/"],["forehead","前额",8,"n.","/'fɒ:rid/"],["forgive","原谅",8,"vt.","/fә'giv/"],["formal","正式的",8,"","/'fɒ:mәl/"],["formula","公式",8,"n.","/'fɒ:mjulә/"],["forth","向前",8,"adv.","/fɒ:θ/"],["forum","论坛",8,"n.","/'fɒ:rәm/"],["fossil","化石",8,"n.","/'fɒsәl/"],["foster","培养",8,"","/'fɒstә/"],["found","建立",8,"vt.","/faund/"],["foundation","基础",8,"n.","/faun'deiʃәn/"],["founder","创始人",8,"n.","/'faundә/"],["fraction","分数",8,"n.","/'frækʃәn/"],["fragment","碎片",8,"n.","/'frægmәnt/"],["frame","框架",8,"n.","/freim/"],["framework","框架",8,"n.","/'freimwә:k/"],["frank","坦率的",8,"","/fræŋk/"],["fraud","欺诈",8,"n.","/frɒ:d/"],["freight","货运",8,"n.","/'freit/"],["frequent","频繁的",8,"","/'fri:kwәnt/"],["frequently","频繁地",8,"adv.","/'fri:kwәntli/"],["friction","摩擦",8,"n.","/'frikʃәn/"],["frontier","边境",8,"n.","/'frʌntjә/"],["frozen","冷冻的",8,"","/'frәuzn/"],["frustrate","使沮丧",8,"vt.","/'frʌstreit/"],["fulfill","实现",8,"vt.","/ful'fil/"],["fund","资金",8,"n.","/fʌnd/"],["fundamental","基本的",8,"n.","/.fʌndә'mentәl/"],["funeral","葬礼",8,"n.","/'fju:nәrәl/"],["furnish","布置",8,"vt.","/'fә:niʃ/"],["furthermore","此外",8,"adv.","/'fә:ðә'mɒ:/"],["fuss","大惊小怪",8,"n.","/fʌs/"],["garage","车库",8,"n.","/gә'rɑ:ʒ. 'gærɑ:ʒ/"],["garbage","垃圾",8,"n.","/'gɑ:bidʒ/"],["garlic","大蒜",8,"n.","/'gɑ:lik/"],["gas","气体",8,"n.","/gæs/"],["gasoline","汽油",8,"n.","/'gæsәli:n/"],["gather","聚集",8,"n.","/'gæðә/"],["gay","同性恋的",8,"","/gei/"],["gaze","凝视",8,"n.","/geiz/"],["gear","齿轮",8,"n.","/giә/"],["gender","性别",8,"n.","/'dʒendә/"],["gene","基因",8,"n.","/dʒi:n/"],["general","一般的",8,"n.","/'dʒenәrәl/"],["generally","通常",8,"adv.","/'dʒenәrәli/"],["generate","产生",8,"vt.","/'dʒenәreit/"],["generation","一代",8,"n.","/.dʒenә'reiʃәn/"],["generous","慷慨的",8,"","/'dʒenәrәs/"],["genius","天才",8,"n.","/'dʒi:njәs/"],["gentle","温柔的",8,"","/'dʒentl/"],["gentleman","绅士",8,"n.","/'dʒentlmәn/"],["genuine","真正的",8,"","/'dʒenjuin/"],["geography","地理",8,"n.","/dʒi'ɒgrәfi/"],["geometry","几何",8,"n.","/dʒi'ɒmәtri/"],["germ","细菌",8,"n.","/dʒә:m/"],["gesture","手势",8,"n.","/'dʒestʃә/"],["ghost","鬼",8,"n.","/gәust/"],["giant","巨人",8,"n.","/'dʒaiәnt/"],["gift","礼物",8,"n.","/gift/"],["gifted","有天赋的",8,"","/'giftid/"],["ginger","生姜",8,"n.","/'dʒindʒә/"],["glance","一瞥",8,"n.","/'glɑ:ns/"],["glare","怒视",8,"n.","/glєә/"],["global","全球的",8,"","/'glәubl/"],["globe","地球",8,"n.","/glәub/"],["gloom","阴暗",8,"n.","/glu:m/"],["glorious","光荣的",8,"","/'glɒ:riәs/"],["glory","荣耀",8,"n.","/'glɒ:ri/"],["glove","手套",8,"n.","/glʌv/"],["glue","胶水",8,"n.","/glu:/"],["goal","目标",8,"n.","/gәul/"],["golden","金色的",8,"","/'gәuldn/"],["golf","高尔夫",8,"n.","/gɒlf/"],["goodness","善良",8,"n.","/'gudnis/"],["goods","货物",8,"n.","/guds/"],["goose","鹅",8,"n.","/gu:s/"],["govern","统治",8,"v.","/'gʌvәn/"],["government","政府",8,"n.","/'gʌvәnmәnt/"],["grace","优雅",8,"n.","/greis/"],["gradual","逐渐的",8,"","/'grædʒuәl/"],["graduate","毕业",8,"n.","/'grædʒueit/"],["grain","谷物",8,"n.","/grein/"],["gram","克",8,"n.","/græm/"],["grammar","语法",8,"n.","/'græmә/"],["grand","宏伟的",8,"","/grænd/"],["grant","授予",8,"n.","/grænt/"],["grape","葡萄",8,"n.","/greip/"],["graph","图表",8,"n.","/græf/"],["grasp","抓住",8,"n.","/græsp/"],["grass","草",8,"n.","/græs/"],["grateful","感激的",8,"","/'greitful/"],["gravity","重力",8,"n.","/'græviti/"],["gray","灰色的",8,"n.","/grei/"],["greedy","贪婪的",8,"","/'gri:di/"],["greenhouse","温室",8,"n.","/'gri:nhaus/"],["greet","问候",8,"vt.","/gri:t/"],["grind","磨",8,"n.","/graind/"],["grocery","杂货店",8,"n.","/'grәusәri/"],["gross","总的",8,"n.","/grәus/"],["ground","地面",8,"n.","/graund/"],["guarantee","保证",8,"n.","/.gærәn'ti:/"],["guard","守卫",8,"n.","/gɑ:d/"],["guest","客人",8,"n.","/gest/"],["guidance","指导",8,"n.","/'gaidns/"],["guide","导游",8,"n.","/gaid/"],["guilty","有罪的",8,"","/'gilti/"],["gulf","海湾",8,"n.","/gʌlf/"],["gum","口香糖",8,"n.","/gʌm/"],["gym","健身房",8,"n.","/dʒim/"],["habit","习惯",8,"n.","/'hæbit/"],["haircut","理发",8,"n.","/'hєәkʌt/"],["hairdryer","吹风机",8,"n.","/ˈheədraɪə(r)/"],["hall","大厅",8,"n.","/hɒ:l/"],["halt","停止",8,"n.","/hɒ:lt/"],["hamburger","汉堡",8,"n.","/'hæmbә:gә/"],["hammer","锤子",8,"n.","/'hæmә/"],["handbag","手提包",8,"n.","/'hændbæg/"],["handful","一把",8,"n.","/'hændful/"],["handicap","残疾",8,"n.","/'hændikæp/"],["handle","处理",8,"n.","/hændl/"],["handsome","英俊的",8,"","/'hænsәm/"],["handwriting","笔迹",8,"n.","/'hændraitiŋ/"],["handy","方便的",8,"","/'hændi/"],["hang","悬挂",8,"n.","/hæŋ/"],["harbor","港口",8,"n.","/'hɑ:bә/"],["hardship","艰难",8,"n.","/'hɑ:dʃip/"],["hardware","硬件",8,"n.","/'hɑ:dwєә/"],["harm","伤害",8,"n.","/hɑ:m/"],["harmful","有害的",8,"","/'hɑ:mful/"],["harmony","和谐",8,"n.","/'hɑ:mәni/"],["harvest","收获",8,"n.","/'hɑ:vist/"],["haste","匆忙",8,"n.","/heist/"],["hatred","仇恨",8,"n.","/'heitrid/"],["haunted","闹鬼的",8,"","/'hɔ:ntid/"],["headache","头痛",8,"n.","/'hedeik/"],["headline","标题",8,"n.","/'hedlain/"],["headmaster","校长",8,"n.","/'hed'mɑ:stә/"],["headquarters","总部",8,"n.","/hed'kwɒ:tәz/"],["heal","治愈",8,"vi.","/hi:l/"],["heap","堆",8,"n.","/hi:p/"],["hearing","听力",8,"n.","/'hiәriŋ/"],["heart","心",8,"n.","/hɑ:t/"],["heat","热",8,"n.","/hi:t/"],["heaven","天堂",8,"n.","/'hevn/"],["heavy","重的",8,"","/'hevi/"],["height","高度",8,"n.","/hait/"],["helicopter","直升机",8,"n.","/'helikɒptә/"],["helmet","头盔",8,"n.","/'helmit/"],["helpful","有帮助的",8,"","/'helpful/"],["hen","母鸡",8,"n.","/hen/"],["hence","因此",8,"adv.","/hens/"],["hero","英雄",8,"n.","/'hiәrәu/"],["heroine","女英雄",8,"n.","/'herәuin/"],["hesitate","犹豫",8,"vi.","/'heziteit/"],["hide","隐藏",8,"n.","/haid/"],["highway","公路",8,"n.","/'haiwei/"],["hike","徒步",8,"n.","/haik/"],["hill","小山",8,"n.","/hil/"],["hint","暗示",8,"n.","/hint/"],["hip","臀部",8,"n.","/hip/"],["hire","雇佣",8,"n.","/haiә/"],["historian","历史学家",8,"n.","/hi'stɒ:riәn/"],["historic","历史性的",8,"","/hi'stɒrik/"],["historical","历史的",8,"","/hi'stɒrikәl/"],["hobby","爱好",8,"n.","/'hɒbi/"],["hollow","空的",8,"n.","/'hɒlәu/"],["holy","神圣的",8,"","/'hәuli/"],["honest","诚实的",8,"","/'ɒnist/"],["honey","蜂蜜",8,"n.","/'hʌni/"],["honeymoon","蜜月",8,"n.","/'hʌnimu:n/"],["honor","荣誉",8,"n.","/'ɒnә/"],["hook","钩子",8,"n.","/huk/"],["horizon","地平线",8,"n.","/hә'raizәn/"],["horn","号角",8,"n.","/hɒ:n/"],["horrible","可怕的",8,"","/'hɒrәbl/"],["horror","恐惧",8,"n.","/'hɒrә/"],["horsepower","马力",8,"n.","/'hɒ:spauә/"],["host","主人",8,"n.","/hәust/"],["hostess","女主人",8,"n.","/'hәustis/"],["hostile","敌对的",8,"","/'hɒstail/"],["hotdog","热狗",8,"v.","/hotdog/"],["household","家庭",8,"n.","/'haushәuld/"],["housework","家务",8,"n.","/'hauswә:k/"],["humble","谦逊的",8,"","/'hʌmbl/"],["humor","幽默",8,"n.","/'hju:mә/"],["humorous","幽默的",8,"","/'hju:mәrәs/"],["hunger","饥饿",8,"n.","/'hʌŋgә/"],["hurricane","飓风",8,"n.","/'hә:rikәn/"],["hut","小屋",8,"n.","/hʌt/"],["hyphen","连字符",8,"n.","/'haifәn/"],["iceberg","冰山",8,"n.","/'aisbә:g/"],["ideal","理想的",8,"n.","/ai'diәl/"],["identical","相同的",8,"","/ai'dentikәl/"],["identify","识别",8,"vt.","/ai'dentifai/"],["identity","身份",8,"n.","/ai'dentiti/"],["idiom","习语",8,"n.","/'idiәm/"],["ignorant","无知的",8,"","/'ignәrәnt/"],["ignore","忽视",8,"vt.","/ig'nɒ:/"],["illegal","非法的",8,"","/i'li:gәl/"],["illusion","幻觉",8,"n.","/i'lju:ʒәn/"],["illustrate","说明",8,"vt.","/'ilәstreit/"],["image","形象",8,"n.","/'imidʒ/"],["imagination","想象",8,"n.","/i.mædʒi'neiʃәn/"],["imagine","想象",8,"vt.","/i'mædʒin/"],["imitate","模仿",8,"vt.","/'imiteit/"],["immense","巨大的",8,"","/i'mens/"],["impact","影响",8,"n.","/'impækt/"],["implement","实施",8,"n.","/'implimәnt/"],["implication","含义",8,"n.","/.impli'keiʃәn/"],["imply","暗示",8,"vt.","/im'plai/"],["import","进口",8,"n.","/im'pɒ:t/"],["importance","重要性",8,"n.","/im'pɒ:tәns/"],["impose","强加",8,"vt.","/im'pәuz/"],["impossible","不可能的",8,"","/im'pɒsәbl/"],["impress","给...印象",8,"n.","/im'pres/"],["impression","印象",8,"n.","/im'preʃәn/"],["impressive","令人印象深刻的",8,"","/im'presiv/"],["improve","改善",8,"vt.","/im'pru:v/"],["improvement","改善",8,"n.","/im'pru:vmәnt/"],["incident","事件",8,"n.","/'insidәnt/"],["include","包括",8,"vt.","/in'klu:d/"],["income","收入",8,"n.","/'inkʌm/"],["increase","增加",8,"n.","/in'kri:s/"],["incredible","难以置信的",8,"","/in'kredәbl/"],["indeed","确实",8,"adv.","/in'di:d/"],["independence","独立",8,"n.","/.indi'pendәns/"],["independent","独立的",8,"n.","/.indi'pendәnt/"],["index","索引",8,"n.","/'indeks/"],["indicate","表明",8,"vt.","/'indikeit/"],["individual","个人的",8,"n.","/.indi'vidʒuәl/"],["indoor","室内的",8,"","/'indɒ:/"],["induce","诱导",8,"vt.","/in'dju:s/"],["industrial","工业的",8,"","/in'dʌstriәl/"],["industry","工业",8,"n.","/'indәstri/"],["inevitable","不可避免的",8,"","/in'evitәbl/"],["infect","感染",8,"vt.","/in'fekt/"],["infer","推断",8,"vt.","/in'fә:/"],["influence","影响",8,"n.","/'influәns/"],["inform","通知",8,"vt.","/in'fɒ:m/"],["informal","非正式的",8,"","/in'fɒ:mәl/"],["ingredient","成分",8,"n.","/in'gri:diәnt/"],["initial","最初的",8,"n.","/i'niʃәl/"],["initiative","主动",8,"n.","/i'niʃiәtiv/"],["injure","伤害",8,"vt.","/'indʒә/"],["injury","伤害",8,"n.","/'indʒәri/"],["ink","墨水",8,"n.","/iŋk/"],["inn","小旅馆",8,"n.","/in/"],["inner","内部的",8,"","/'inә/"],["innocent","无辜的",8,"","/'inәsәnt/"],["inquire","询问",8,"v.","/in'kwaiә/"],["inquiry","询问",8,"n.","/in'kwaiәri/"],["insect","昆虫",8,"n.","/'insekt/"],["insert","插入",8,"n.","/in'sә:t/"],["inside","里面",8,"n.","/'in'said/"],["insist","坚持",8,"v.","/in'sist/"],["inspect","检查",8,"vt.","/in'spekt/"],["inspire","激励",8,"vt.","/in'spaiә/"],["install","安装",8,"vt.","/in'stɒ:l/"],["instance","实例",8,"n.","/'instәns/"],["instant","立即的",8,"n.","/'instәnt/"],["instead","代替",8,"adv.","/in'sted/"],["instinct","本能",8,"n.","/'instiŋkt/"],["institute","机构",8,"n.","/'institju:t/"],["institution","机构",8,"n.","/.insti'tju:ʃәn/"],["instruct","指示",8,"vt.","/in'strʌkt/"],["instruction","指示",8,"n.","/in'strʌkʃәn/"],["instrument","工具",8,"n.","/'instrumәnt/"],["insurance","保险",8,"n.","/in'ʃurәns/"],["intellectual","智力的",8,"n.","/.intә'lektʃuәl/"],["intelligence","智力",8,"n.","/in'telidʒәns/"],["intelligent","聪明的",8,"","/in'telidʒәnt/"],["intend","打算",8,"vt.","/in'tend/"],["intense","强烈的",8,"","/in'tens/"],["intention","意图",8,"n.","/in'tenʃәn/"],["interact","互动",8,"vi.","/.intәr'ækt/"],["interest","兴趣",8,"n.","/'intrist/"],["interfere","干涉",8,"vi.","/.intә'fiә/"],["intermediate","中级的",8,"n.","/.intә'mi:diәt/"],["international","国际的",8,"","/.intә'næʃәnәl/"],["internet","互联网",8,"","/'intәnet/"],["interpret","解释",8,"vt.","/in'tә:prit/"],["interrupt","打断",8,"vt.","/.intә'rʌpt/"],["interval","间隔",8,"n.","/'intәvәl/"],["interview","面试",8,"n.","/'intәvju:/"],["intimate","亲密的",8,"","/'intimәt/"],["introduce","介绍",8,"vt.","/.intrә'dju:s/"],["introduction","介绍",8,"n.","/.intrә'dʌkʃәn/"],["invade","入侵",8,"vt.","/in'veid/"],["invent","发明",8,"vt.","/in'vent/"],["invention","发明",8,"n.","/in'venʃәn/"],["invest","投资",8,"vt.","/in'vest/"],["investigate","调查",8,"v.","/in'vestigeit/"],["investigation","调查",8,"n.","/in.vesti'geiʃәn/"],["invitation","邀请",8,"n.","/.invi'teiʃәn/"],["involve","涉及",8,"vt.","/in'vɒlv/"],["iron","铁",8,"n.","/'aiәn/"],["island","岛",8,"n.","/'ailәnd/"],["issue","问题",8,"n.","/'isju/"],["item","项目",8,"n.","/'aitәm/"],["jail","监狱",8,"n.","/dʒeil/"],["jam","果酱",8,"n.","/dʒæm/"],["jar","罐子",8,"n.","/dʒɑ:/"],["jazz","爵士乐",8,"n.","/dʒæz/"],["jealous","嫉妒的",8,"","/'dʒelәs/"],["jeans","牛仔裤",8,"n.","/dʒi:nz/"],["jewel","珠宝",8,"n.","/'dʒu:әl/"],["jewelry","首饰",8,"n.","/'dʒu:әlri/"],["jog","慢跑",8,"n.","/dʒɒg/"],["journal","日记",8,"n.","/'dʒә:nәl/"],["journalist","记者",8,"n.","/'dʒә:nәlist/"],["journey","旅程",8,"n.","/'dʒә:ni/"],["joy","欢乐",8,"n.","/dʒɒi/"],["judge","判断",8,"n.","/dʒʌdʒ/"],["judgment","判断",8,"n.","/'dʒʌdʒmәnt/"],["jungle","丛林",8,"n.","/'dʒʌŋgl/"],["junior","初级的",8,"n.","/'dʒu:njә/"],["jury","陪审团",8,"n.","/'dʒuәri/"],["justice","正义",8,"n.","/'dʒʌstis/"],["justify","证明...正当",8,"vt.","/'dʒʌstifai/"],["kerosene","煤油",8,"n.","/'kerәsi:n/"],["kettle","水壶",8,"n.","/'ketl/"],["keyboard","键盘",8,"n.","/'ki:bɒ:d/"],["kilogram","千克",8,"n.","/'kilәgræm/"],["kilometer","千米",8,"n.","/'kilәmi:tә/"],["kindergarten","幼儿园",8,"n.","/'kindә.gɑ:tn/"],["kindness","善良",8,"n.","/'kaindnis/"],["kingdom","王国",8,"n.","/'kiŋdәm/"],["kiosk","亭子",8,"n.","/ki'ɒsk/"],["kneel","跪",8,"vi.","/ni:l/"],["knife","刀",8,"n.","/naif/"],["knit","编织",8,"v.","/nit/"],["knob","把手",8,"n.","/nɒb/"],["knock","敲",8,"n.","/nɒk/"],["knot","结",8,"n.","/nɒt/"],["label","标签",8,"n.","/'leibl/"],["labor","劳动",8,"n.","/'leibә/"],["lack","缺乏",8,"n.","/læk/"],["ladder","梯子",8,"n.","/'lædә/"],["lag","落后",8,"n.","/læg/"],["lamb","羊羔",8,"n.","/læm/"],["lamp","灯",8,"n.","/læmp/"],["landlord","房东",8,"n.","/'lændlɒ:d/"],["landscape","风景",8,"n.","/'lændskeip/"],["lane","小巷",8,"n.","/lein/"],["lantern","灯笼",8,"n.","/'læntәn/"],["laptop","笔记本电脑",8,"","/laptop/"],["largely","主要地",8,"adv.","/'lɑ:dʒli/"],["laser","激光",8,"n.","/'leizә/"],["last","最后的",8,"","/lɑ:st/"],["lately","最近",8,"adv.","/'leitli/"],["later","后来",8,"adv.","/'leitә/"],["latter","后者",8,"","/'lætә/"],["laughable","可笑的",8,"","/'lɑ:fәbl/"],["launch","发射",8,"n.","/lɒ:ntʃ/"],["laundry","洗衣店",8,"n.","/'lɒ:ndri/"],["lavatory","盥洗室",8,"n.","/'lævәtәri/"],["law","法律",8,"n.","/lɒ:/"],["lawn","草坪",8,"n.","/lɒ:n/"],["lawyer","律师",8,"n.","/'lɒ:jә/"],["layer","层",8,"n.","/'leiә/"],["layout","布局",8,"n.","/'leiaut/"],["lazy","懒惰的",8,"","/'leizi/"],["lead","领导",8,"n.","/li:d. led/"],["leader","领导者",8,"n.","/'li:dә/"],["leadership","领导力",8,"n.","/'li:dәʃip/"],["leaf","叶子",8,"n.","/li:f/"],["league","联盟",8,"n.","/li:g/"],["leak","泄漏",8,"n.","/li:k/"],["lean","倾斜",8,"n.","/li:n/"],["leap","跳跃",8,"n.","/li:p/"],["leather","皮革",8,"n.","/'leðә/"],["lecture","讲座",8,"n.","/'lektʃә/"],["legal","合法的",8,"","/'li:gәl/"],["legend","传说",8,"n.","/'ledʒәnd/"],["leisure","休闲",8,"n.","/'li:ʒә/"],["lemon","柠檬",8,"n.","/'lemәn/"],["length","长度",8,"n.","/leŋθ/"],["lens","镜片",8,"n.","/lenz/"],["less","更少",8,"n.","/les/"],["level","水平",8,"n.","/'levl/"],["liable","有责任的",8,"","/'laiәbl/"],["liberal","自由的",8,"n.","/'libәrәl/"],["liberty","自由",8,"n.","/'libәli/"],["librarian","图书管理员",8,"n.","/lai'brєәriәn/"],["license","执照",8,"n.","/'laisns/"],["lid","盖子",8,"n.","/lid/"],["lifeboat","救生艇",8,"n.","/'laifbәjt/"],["lifeguard","救生员",8,"n.","/'laifgɑ:d/"],["lifestyle","生活方式",8,"n.","/'laifstail/"],["lifetime","一生",8,"n.","/'laiftaim/"],["lightning","闪电",8,"n.","/'laitniŋ/"],["likely","可能的",8,"","/'laikli/"],["limit","限制",8,"n.","/'limit/"],["limited","有限的",8,"","/'limitid/"],["limp","跛行",8,"n.","/limp/"],["link","连接",8,"n.","/liŋk/"],["lion","狮子",8,"n.","/'laiәn/"],["lip","嘴唇",8,"n.","/lip/"],["liquid","液体",8,"n.","/'likwid/"],["list","列表",8,"n.","/list/"],["literary","文学的",8,"","/'litәrәri/"],["literature","文学",8,"n.","/'litәrәtʃә/"],["litter","垃圾",8,"n.","/'litә/"],["lively","活泼的",8,"","/'laivli/"],["load","装载",8,"n.","/lәud/"],["loaf","一条(面包)",8,"n.","/lәuf/"],["loan","贷款",8,"n.","/lәun/"],["local","当地的",8,"","/'lәukәl/"],["locate","位于",8,"vt.","/'lәukeit/"],["location","位置",8,"n.","/lәu'keiʃәn/"],["lock","锁",8,"n.","/lɒk/"],["lodge","寄宿",8,"n.","/lɒdʒ/"],["log","原木",8,"n.","/lɒg/"],["logic","逻辑",8,"n.","/'lɒdʒik/"],["logical","合逻辑的",8,"","/'lɒdʒikәl/"],["lonely","孤独的",8,"","/'lәunli/"],["loose","松的",8,"n.","/lu:s/"],["lord","领主",8,"n.","/lɒ:d/"],["lorry","卡车",8,"n.","/'lɒri/"],["lose","失去",8,"vt.","/lu:z/"],["loss","损失",8,"n.","/lɒs/"],["lounge","休息室",8,"n.","/laundʒ/"],["loyal","忠诚的",8,"","/'lɒiәl/"],["lucky","幸运的",8,"","/'lʌki/"],["luggage","行李",8,"n.","/'lʌgidʒ/"],["lump","块",8,"n.","/lʌmp/"],["lunar","月亮的",8,"","/'lu:nә/"],["luxury","奢侈",8,"n.","/'lʌkʃәri/"],["machine","机器",8,"n.","/mә'ʃi:n/"],["magazine","杂志",8,"n.","/.mægә'zi:n/"],["magic","魔术",8,"n.","/'mædʒik/"],["magnet","磁铁",8,"n.","/'mægnit/"],["magnificent","壮丽的",8,"","/mæg'nifisnt/"],["mail","邮件",8,"n.","/meil/"],["mailbox","邮箱",8,"n.","/'meilbɒks/"],["main","主要的",8,"n.","/mein/"],["mainly","主要地",8,"adv.","/'meinli/"],["maintain","维持",8,"vt.","/mein'tein/"],["maintenance","维护",8,"n.","/'meintәnәns/"],["major","主要的",8,"n.","/'meidʒә/"],["majority","多数",8,"n.","/mә'dʒɒriti/"],["male","男性的",8,"n.","/meil/"],["mall","商场",8,"n.","/mɔ:l/"],["manage","管理",8,"vi.","/'mænidʒ/"],["management","管理",8,"n.","/'mænidʒmәnt/"],["manager","经理",8,"n.","/'mænidʒә/"],["mango","芒果",8,"n.","/'mæŋgәu/"],["manner","方式",8,"n.","/'mænә/"],["manual","手动的",8,"n.","/'mænjuәl/"],["manufacture","制造",8,"n.","/.mænju'fæktʃә/"],["manuscript","手稿",8,"n.","/'mænjuskript/"],["marathon","马拉松",8,"n.","/'mærәθәn/"],["march","行军",8,"n.","/mɑ:tʃ/"],["margin","边缘",8,"n.","/'mɑ:dʒin/"],["marine","海洋的",8,"n.","/mә'ri:n/"],["mark","标记",8,"n.","/mɑ:k/"],["market","市场",8,"n.","/'mɑ:kit/"],["marriage","婚姻",8,"n.","/'mæridʒ/"],["married","已婚的",8,"","/'mærid/"],["marry","结婚",8,"vt.","/'mæri/"],["marvelous","了不起的",8,"","/'mɑ:vәlәs/"],["mask","面具",8,"n.","/mæsk/"],["mass","大量",8,"n.","/mæs/"],["massive","大量的",8,"","/'mæsiv/"],["master","主人",8,"n.","/'mɑ:stә. 'mæstә/"],["mat","垫子",8,"n.","/mæt/"],["material","材料",8,"n.","/mә'tiәriәl/"],["mathematics","数学",8,"n.","/.mæθә'mætiks/"],["mature","成熟的",8,"","/mә'tjuә/"],["maximum","最大值",8,"n.","/'mæksimәn/"],["mayor","市长",8,"n.","/'mєә/"],["maze","迷宫",8,"n.","/meiz/"],["meaning","意义",8,"n.","/'mi:niŋ/"],["means","手段",8,"n.","/mi:nz/"],["measure","测量",8,"n.","/'meʒә/"],["mechanic","机械师",8,"n.","/mi'kænik/"],["mechanical","机械的",8,"","/mi'kænikәl/"],["medal","奖章",8,"n.","/'medl/"],["media","媒体",8,"n.","/'mi:diә/"],["medical","医学的",8,"n.","/'medikl/"],["medicine","药",8,"n.","/'medisin/"],["medium","中等的",8,"n.","/'mi:diәm/"],["melon","瓜",8,"n.","/'melәn/"],["melt","融化",8,"n.","/melt/"],["member","成员",8,"n.","/'membә/"],["memorial","纪念的",8,"n.","/mi'mɒ:riәl/"],["memory","记忆",8,"n.","/'memәri/"],["mend","修补",8,"n.","/mend/"],["mental","精神的",8,"","/'mentl/"],["mention","提到",8,"n.","/'menʃәn/"],["menu","菜单",8,"n.","/'menju:/"],["merchant","商人",8,"n.","/'mә:tʃәnt/"],["mercy","仁慈",8,"n.","/'mә:si/"],["mere","仅仅的",8,"n.","/miә/"],["merely","仅仅",8,"adv.","/'miәli/"],["merry","快乐的",8,"","/'meri/"],["mess","混乱",8,"n.","/mes/"],["message","消息",8,"n.","/'mesidʒ/"],["metal","金属",8,"n.","/'metәl/"],["method","方法",8,"n.","/'meθәd/"],["microphone","麦克风",8,"n.","/'maikrәfәun/"],["microscope","显微镜",8,"n.","/'maikrәuskәup/"],["microwave","微波",8,"n.","/'maikrәuweiv/"],["middle","中间",8,"n.","/'midl/"],["might","可能",8,"n.","/mait/"],["mild","温和的",8,"","/maild/"],["military","军事的",8,"n.","/'militәri/"],["mill","磨坊",8,"n.","/mil/"],["mineral","矿物",8,"n.","/'minәrәl/"],["minister","部长",8,"n.","/'ministә/"],["minor","次要的",8,"n.","/'mainә/"],["minority","少数",8,"n.","/mai'nɒriti/"],["miracle","奇迹",8,"n.","/'mirәkl/"],["mirror","镜子",8,"n.","/'mirә/"],["miserable","悲惨的",8,"","/'mizәrәbl/"],["modem","调制解调器",8,"n.","/'mәudem/"],["modern","现代的",8,"n.","/'mɒdәn/"],["modest","谦虚的",8,"","/'mɒdist/"],["modify","修改",8,"vt.","/'mɒdifai/"],["moist","潮湿的",8,"","/mɒist/"],["moment","时刻",8,"n.","/'mәumәnt/"],["monitor","监视器",8,"n.","/'mɒnitә/"],["monkey","猴子",8,"n.","/'mʌŋki/"],["mood","心情",8,"n.","/mu:d/"],["moral","道德的",8,"n.","/'mɒrәl/"],["moreover","此外",8,"adv.","/mɒ:'әuvә/"],["mosquito","蚊子",8,"n.","/mә'ski:tәu/"],["most","最多的",8,"n.","/mәust/"],["motherland","祖国",8,"n.","/'mʌðәlænd/"],["motion","运动",8,"n.","/'mәuʃәn/"],["motivate","激励",8,"vt.","/'mәutiveit/"],["motor","马达",8,"n.","/'mәutә/"],["mount"," mounting",8,"n.","/maunt/"],["moustache","小胡子",8,"n.","/'mʌstæʃ/"],["mud","泥",8,"n.","/mʌd/"],["multiple","多重的",8,"n.","/'mʌltipl/"],["muscle","肌肉",8,"n.","/'mʌsl/"],["museum","博物馆",8,"n.","/mju:'ziәm/"],["mushroom","蘑菇",8,"n.","/'mʌʃrum/"],["musician","音乐家",8,"n.","/mju:'ziʃәn/"],["mustard","芥末",8,"n.","/'mʌstәd/"],["mystery","神秘",8,"n.","/'mistәri/"],["myth","神话",8,"n.","/miθ/"],["nail","指甲",9,"n.","/neil/"],["naked","赤裸的",9,"","/'neikid/"],["namely","即",9,"adv.","/'neimli/"],["nap","小睡",9,"n.","/næp/"],["narrate","叙述",9,"v.","/nә'reit/"],["narrow","狭窄的",9,"n.","/'nærәu/"],["nasty","令人讨厌的",9,"","/'nɑ:sti/"],["nation","国家",9,"n.","/'neiʃәn/"],["national","国家的",9,"","/'næʃәnәl/"],["native","本地的",9,"n.","/'neitiv/"],["natural","自然的",9,"n.","/'nætʃәrәl/"],["nature","自然",9,"n.","/'neitʃә/"],["naughty","淘气的",9,"","/'nɒ:ti/"],["navy","海军",9,"n.","/'neivi/"],["nearby","附近的",9,"","/'niәbai/"],["neat","整洁的",9,"","/ni:t/"],["necessary","必要的",9,"","/'nesisәri/"],["neck","脖子",9,"n.","/nek/"],["necklace","项链",9,"n.","/'neklis/"],["needle","针",9,"n.","/'ni:dl/"],["negative","消极的",9,"n.","/'negәtiv/"],["neglect","忽视",9,"n.","/ni'glekt/"],["negotiate","谈判",9,"vi.","/ni'gәuʃieit/"],["neighbor","邻居",9,"n.","/'neibә/"],["neighborhood","邻里",9,"n.","/'neibәhud/"],["neither","两者都不",9,"adv.","/'naiðә/"],["nephew","侄子",9,"n.","/'nefju:/"],["nerve","神经",9,"n.","/nә:v/"],["nervous","紧张的",9,"","/'nә:vәs/"],["net","网",9,"n.","/net/"],["network","网络",9,"n.","/'netwә:k/"],["neutral","中立的",9,"n.","/'nju:trәl/"],["nevertheless","然而",9,"adv.","/.nevәðә'les/"],["newcomer","新来者",9,"n.","/nju:'kʌmә/"],["nickel","镍",9,"n.","/'nikl/"],["niece","侄女",9,"n.","/ni:s/"],["nightmare","噩梦",9,"n.","/'naitmєә/"],["noble","高贵的",9,"n.","/'nәubl/"],["nod","点头",9,"n.","/nɒd/"],["noise","噪音",9,"n.","/nɒiz/"],["noisy","嘈杂的",9,"","/'nɒizi/"],["none","没有任何",9,"adv.","/nʌn/"],["nonsense","胡说",9,"n.","/'nɒnsәns/"],["normal","正常的",9,"n.","/'nɒ:ml/"],["north","北方",9,"n.","/nɒ:θ/"],["northeast","东北",9,"n.","/.nɒ:θ'i:st/"],["northern","北方的",9,"n.","/'nɒ:ðәn/"],["note","笔记",9,"n.","/nәut/"],["nothing","没有什么",9,"n.","/'nʌθiŋ/"],["notice","注意",9,"n.","/'nәutis/"],["novel","小说",9,"n.","/'nɒvl/"],["nowadays","现今",9,"n.","/'nauәdeiz/"],["nowhere","任何地方都不",9,"adv.","/'nәuhwєә/"],["nuclear","核的",9,"","/'nju:kliә/"],["numerous","许多的",9,"","/'nju:mәrәs/"],["nursery","托儿所",9,"n.","/'nә:sәri/"],["nut","坚果",9,"n.","/nʌt/"],["obey","服从",9,"vt.","/ә'bei/"],["object","物体",9,"n.","/'ɒbdʒekt/"],["objection","反对",9,"n.","/әb'dʒekʃәn/"],["objective","目标",9,"n.","/әb'dʒektiv/"],["observe","观察",9,"vt.","/әb'zә:v/"],["obstacle","障碍",9,"n.","/'ɒbstәkl/"],["obtain","获得",9,"vt.","/әb'tein/"],["obvious","明显的",9,"","/'ɒbviәs/"],["occasion","场合",9,"n.","/ә'keiʒәn/"],["occupation","职业",9,"n.","/.ɒkju'peiʃәn/"],["occupy","占领",9,"vt.","/'ɒkjupai/"],["occur","发生",9,"vi.","/ә'kә:/"],["ocean","海洋",9,"n.","/'әuʃәn/"],["o'clock","点钟",9,"n.","/ә'klɔk/"],["odd","奇怪的",9,"","/ɒd/"],["odor","气味",9,"n.","/'әudә/"],["offend","冒犯",9,"v.","/ә'fend/"],["offer","提供",9,"n.","/'ɒfә/"],["officer","官员",9,"n.","/'ɒfisә/"],["official","官方的",9,"n.","/ә'fiʃәl/"],["offline","离线的",9,"","/offline/"],["omit","省略",9,"vt.","/әu'mit/"],["online","在线的",9,"","/online/"],["opera","歌剧",9,"n.","/'ɒpәrә/"],["operate","操作",9,"v.","/'ɒpәreit/"],["operation","手术",9,"n.","/.ɒpә'reiʃәn/"],["operator","操作员",9,"n.","/'ɒpәreitә/"],["opinion","意见",9,"n.","/ә'pinjәn/"],["opportunity","机会",9,"n.","/.ɒpә'tju:niti/"],["oppose","反对",9,"vt.","/ә'pәuz/"],["opposite","相反的",9,"","/'ɒpәzit/"],["optimistic","乐观的",9,"","/.ɒpti'mistik/"],["option","选择",9,"n.","/'ɒpʃәn/"],["oral","口头的",9,"n.","/'ɒ:rәl/"],["orbit","轨道",9,"n.","/'ɒ:bit/"],["orchestra","管弦乐队",9,"n.","/'ɒ:kistrә/"],["order","命令",9,"n.","/'ɒ:dә/"],["ordinary","普通的",9,"","/'ɒ:dinәri/"],["organ","器官",9,"n.","/'ɒ:gәn/"],["organic","有机的",9,"","/ɒ:'gænik/"],["organization","组织",9,"n.","/.ɒ:gәnai'zeiʃәn/"],["organize","组织",9,"vt.","/'ɒ:gәnaiz/"],["origin","起源",9,"n.","/'ɒridʒin/"],["original","原始的",9,"","/ә'ridʒәnl/"],["ornament","装饰",9,"n.","/'ɒ:nәmәnt/"],["ostrich","鸵鸟",9,"n.","/'ɒstritʃ/"],["otherwise","否则",9,"adv.","/'ʌðәwaiz/"],["ought","应该",9,"aux.","/ɒ:t/"],["ounce","盎司",9,"n.","/auns/"],["outcome","结果",9,"n.","/'autkʌm/"],["outdoor","户外的",9,"","/'autdɒ:/"],["outer","外部的",9,"","/'autә/"],["outgoing","外向的",9,"n.","/'autgәuiŋ/"],["outline","概述",9,"n.","/'autlain/"],["outlook","展望",9,"n.","/'autluk/"],["output","输出",9,"n.","/'autput/"],["outside","外面",9,"n.","/'aut'said/"],["outstanding","杰出的",9,"","/.aut'stændiŋ/"],["outward","向外的",9,"","/'autwәd/"],["oval","椭圆形的",9,"n.","/'әuvәl/"],["oven","烤箱",9,"n.","/'ʌvәn/"],["overall","全面的",9,"","/'әuvәrɒ:l/"],["overcoat","大衣",9,"n.","/'әuvәkәut/"],["overcome","克服",9,"vt.","/.әuvә'kʌm/"],["overhead","头顶的",9,"n.","/'әuvәhed/"],["overlook","俯瞰",9,"vt.","/.әuvә'luk/"],["overseas","海外的",9,"","/'әuvә'si:z/"],["overweight","超重的",9,"n.","/'әuvә'weit/"],["owe","欠",9,"vt.","/әu/"],["owner","所有者",9,"n.","/'әunә/"],["oxygen","氧气",9,"n.","/'ɒksәdʒәn/"],["pace","步伐",9,"n.","/peis/"],["Pacific","太平洋的",9,"n.","/pә'sifik/"],["package","包裹",9,"n.","/'pækidʒ/"],["packet","小包",9,"n.","/'pækit/"],["pain","疼痛",9,"n.","/pein/"],["painful","痛苦的",9,"","/'peinful/"],["painter","画家",9,"n.","/'peintә/"],["painting","绘画",9,"n.","/'peintiŋ/"],["palace","宫殿",9,"n.","/'pælis/"],["pale","苍白的",9,"n.","/peil/"],["pan","平底锅",9,"n.","/pæn/"],["panic","恐慌",9,"n.","/'pænik/"],["pants","裤子",9,"n.","/pænts/"],["paper","纸",9,"n.","/'peipә/"],["parade","游行",9,"n.","/pә'reid/"],["paragraph","段落",9,"n.","/'pærәgrɑ:f/"],["parcel","包裹",9,"n.","/'pɑ:sl/"],["pardon","原谅",9,"n.","/'pɑ:dn/"],["parking","停车",9,"n.","/'pɑ:kiŋ/"],["parliament","议会",9,"n.","/'pɑ:lәmәnt/"],["part","部分",9,"n.","/pɑ:t/"],["participate","参加",9,"vi.","/pɑ:'tisipeit/"],["particular","特别的",9,"n.","/pә'tikjulә/"],["particularly","特别地",9,"adv.","/pә'tikjjlәli/"],["partly","部分地",9,"adv.","/'pɑ:tli/"],["partner","伙伴",9,"n.","/'pɑ:tnә/"],["part-time","兼职的",9,"","/part-time/"],["passage","段落",9,"n.","/'pæsidʒ/"],["passenger","乘客",9,"n.","/'pæsindʒә/"],["passion","热情",9,"n.","/'pæʃәn/"],["passionate","热情的",9,"","/'pæʃәnit/"],["passive","被动的",9,"","/'pæsiv/"],["passport","护照",9,"n.","/'pæspɒ:t/"],["password","密码",9,"n.","/'pæswә:d/"],["paste","粘贴",9,"n.","/peist/"],["path","小路",9,"n.","/pɑ:θ/"],["patience","耐心",9,"n.","/'peiʃәns/"],["patient","病人",9,"n.","/'peiʃәnt/"],["pattern","模式",9,"n.","/'pætәn/"],["pause","暂停",9,"n.","/pɒ:z/"],["pavement","人行道",9,"n.","/'peivmәnt/"],["paw","爪子",9,"n.","/pɒ:/"],["pay","支付",9,"n.","/pei/"],["payment","支付",9,"n.","/'peimәnt/"],["pea","豌豆",9,"n.","/pi:/"],["peace","和平",9,"n.","/pi:s/"],["peaceful","和平的",9,"","/'pi:sful/"],["peach","桃子",9,"n.","/pi:tʃ/"],["peak","山峰",9,"n.","/pi:k/"],["peanut","花生",9,"n.","/'pi:nʌt/"],["pear","梨",9,"n.","/pєә/"],["pearl","珍珠",9,"n.","/pә:l/"],["peasant","农民",9,"n.","/'peznt/"],["peer","同龄人",9,"n.","/piә/"],["pence","便士",9,"","/pens/"],["penguin","企鹅",9,"n.","/'pengwin/"],["pension","养老金",9,"n.","/'penʃәn/"],["pepper","胡椒",9,"n.","/'pepә/"],["percent","百分之",9,"n.","/pә'sent/"],["percentage","百分比",9,"n.","/pә'sentidʒ/"],["perfect","完美的",9,"n.","/'pә:fikt/"],["perform","表演",9,"vt.","/pә'fɒ:m/"],["performance","表演",9,"n.","/pә'fɒ:mәns/"],["performer","表演者",9,"n.","/pә'fɒ:mә/"],["perhaps","也许",9,"adv.","/pә'hæps/"],["period","时期",9,"n.","/'piәriәd/"],["permanent","永久的",9,"","/'pә:mәnәnt/"],["permission","许可",9,"n.","/pә'miʃәn/"],["permit","允许",9,"n.","/pә'mit/"],["persist","坚持",9,"vi.","/pә'sist/"],["person","人",9,"n.","/'pә:sn/"],["personal","个人的",9,"","/'pә:snl/"],["personality","个性",9,"n.","/.pә:sә'næliti/"],["perspective","观点",9,"n.","/pә'spektiv/"],["persuade","说服",9,"vt.","/pә'sweid/"],["pet","宠物",9,"n.","/pet/"],["petrol","汽油",9,"n.","/'petrәl/"],["phenomenon","现象",9,"n.","/fi'nɒminәn/"],["philosophy","哲学",9,"n.","/fi'lɒsәfi/"],["phone","电话",9,"n.","/fәun/"],["phrase","短语",9,"n.","/freiz/"],["physical","身体的",9,"","/'fizikl/"],["physician","医生",9,"n.","/fi'ziʃәn/"],["physicist","物理学家",9,"n.","/'fizisist/"],["physics","物理",9,"n.","/'fiziks/"],["pick","挑选",9,"n.","/pik/"],["picnic","野餐",9,"n.","/'piknik/"],["pie","派",9,"n.","/pai/"],["pigeon","鸽子",9,"n.","/'pidʒin/"],["pile","堆",9,"n.","/pail/"],["pill","药丸",9,"n.","/pil/"],["pillow","枕头",9,"n.","/'pilәu/"],["pilot","飞行员",9,"n.","/'pailәt/"],["pin","大头针",9,"n.","/pin/"],["pine","松树",9,"n.","/pain/"],["pineapple","菠萝",9,"n.","/'pain.æpl/"],["ping-pong","乒乓球",9,"n.","/'piŋpɔŋ/"],["pink","粉色的",9,"n.","/piŋk/"],["pioneer","先驱",9,"n.","/.paiә'niә/"],["pipe","管子",9,"n.","/paip/"],["pity","遗憾",9,"n.","/'piti/"],["pizza","披萨",9,"n.","/'pi:tsә/"],["plain","平原",9,"n.","/plein/"],["planet","行星",9,"n.","/'plænit/"],["plastic","塑料",9,"n.","/'plæstik/"],["plate","盘子",9,"n.","/pleit/"],["platform","站台",9,"n.","/'plætfɒ:m/"],["player","选手",9,"n.","/'pleiә/"],["playground","操场",9,"n.","/'pleigraund/"],["pleasant","愉快的",9,"","/'pleznt/"],["pleasure","快乐",9,"n.","/'pleʒә/"],["pledge","保证",9,"n.","/pledʒ/"],["plenty","大量",9,"n.","/'plenti/"],["plot","情节",9,"n.","/plɒt/"],["plug","插头",9,"n.","/plʌg/"],["plus","加上",9,"prep.","/plʌs/"],["pocket","口袋",9,"n.","/'pɒkit/"],["poem","诗",9,"n.","/'pәuim/"],["poet","诗人",9,"n.","/'pәuit/"],["poetry","诗歌",9,"n.","/'pәuitri/"],["poison","毒药",9,"n.","/'pɒizn/"],["poisonous","有毒的",9,"","/'pɒizәnәs/"],["polar","极地的",9,"","/'pәulә/"],["pole","杆",9,"n.","/pәul/"],["policeman","警察",9,"n.","/pә'li:smәn/"],["policy","政策",9,"n.","/'pɒlisi/"],["polish","擦亮",9,"","/'pɒliʃ/"],["polite","礼貌的",9,"","/pә'lait/"],["political","政治的",9,"","/pә'litikl/"],["politics","政治",9,"n.","/'pɒlitiks/"],["pollute","污染",9,"vt.","/pә'lu:t/"],["pollution","污染",9,"n.","/pә'lu:ʃәn/"],["pond","池塘",9,"n.","/pɒnd/"],["pool","水池",9,"n.","/pu:l/"],["pop","流行的",9,"n.","/pɒp/"],["popular","受欢迎的",9,"","/'pɒpjulә/"],["popularity","流行",9,"n.","/.pɒpju'læriti/"],["population","人口",9,"n.","/.pɒpju'leiʃәn/"],["porch","门廊",9,"n.","/pɒ:tʃ/"],["port","港口",9,"n.","/pɒ:t/"],["porter","搬运工",9,"n.","/'pɒ:tә/"],["portion","部分",9,"n.","/'pɒ:ʃәn/"],["portrait","肖像",9,"n.","/'pɒ:treit/"],["position","位置",9,"n.","/pә'ziʃәn/"],["positive","积极的",9,"","/'pɒzitiv/"],["possess","拥有",9,"vt.","/pә'zes/"],["possession","财产",9,"n.","/pә'zeʃәn/"],["possibility","可能性",9,"n.","/.pɒsә'biliti/"],["possibly","可能地",9,"adv.","/'pɒsәbli/"],["postcard","明信片",9,"n.","/'pәustkɑ:d/"],["poster","海报",9,"n.","/'pәustә/"],["postman","邮递员",9,"n.","/'pәustmәn/"],["postpone","推迟",9,"vt.","/pәust'pәun/"],["pot","锅",9,"n.","/pɒt/"],["potential","潜在的",9,"n.","/pә'tenʃәl/"],["pound","磅",9,"n.","/paund/"],["pour","倒",9,"n.","/pɒ:/"],["poverty","贫穷",9,"n.","/'pɒvәti/"],["powder","粉末",9,"n.","/'paudә/"],["power","力量",9,"n.","/'pauә/"],["powerful","强大的",9,"","/'pauәful/"],["practical","实际的",9,"","/'præktikl/"],["praise","赞扬",9,"n.","/preiz/"],["pray","祈祷",9,"v.","/prei/"],["precious","珍贵的",9,"","/'preʃәs/"],["precise","精确的",9,"","/pri'sais/"],["predict","预测",9,"v.","/pri'dikt/"],["prefer","更喜欢",9,"vt.","/pri'fә:/"],["preference","偏爱",9,"n.","/'prefәrәns/"],["pregnant","怀孕的",9,"","/'pregnәnt/"],["prejudice","偏见",9,"n.","/'predʒudis/"],["preparation","准备",9,"n.","/.prepә'reiʃәn/"],["prepare","准备",9,"vt.","/pri'pєә/"],["preposition","介词",9,"n.","/.prepә'ziʃәn/"],["presence","出席",9,"n.","/'prezns/"],["presentation","展示",9,"n.","/.prezәn'teiʃәn/"],["preserve","保护",9,"vt.","/pri'zә:v/"],["president","总统",9,"n.","/'prezidәnt/"],["press","按",9,"n.","/pres/"],["pressure","压力",9,"n.","/'preʃә/"],["pretend","假装",9,"v.","/pri'tend/"],["prevent","阻止",9,"v.","/pri'vent/"],["previous","以前的",9,"","/'pri:viәs/"],["price","价格",9,"n.","/prais/"],["pride","骄傲",9,"n.","/praid/"],["priest","牧师",9,"n.","/pri:st/"],["primary","首要的",9,"n.","/'praimәri/"],["prime","首要的",9,"n.","/praim/"],["prince","王子",9,"n.","/prins/"],["princess","公主",9,"n.","/'prinsis/"],["principal","主要的",9,"n.","/'prinsipәl/"],["principle","原则",9,"n.","/'prinsipl/"],["print","打印",9,"n.","/print/"],["printer","打印机",9,"n.","/'printә/"],["prior","在先的",9,"","/'praiә/"],["priority","优先",9,"n.","/prai'ɒriti/"],["prison","监狱",9,"n.","/'prizn/"],["prisoner","囚犯",9,"n.","/'priznә/"],["private","私人的",9,"","/'praivit/"],["prize","奖品",9,"n.","/praiz/"],["probable","可能的",9,"","/'prɒbәbl/"],["probably","可能",9,"adv.","/'prɒbәbli/"],["problem","问题",9,"n.","/'prɒblәm/"],["procedure","程序",9,"n.","/prә'si:dʒә/"],["process","过程",9,"n.","/'prɒses/"],["produce","生产",9,"n.","/prә'dju:s/"],["producer","生产者",9,"n.","/prә'dju:sә/"],["product","产品",9,"n.","/'prɒdʌkt/"],["production","生产",9,"n.","/prә'dʌkʃәn/"],["profession","职业",9,"n.","/prә'feʃәn/"],["professional","专业的",9,"n.","/prә'feʃәnl/"],["professor","教授",9,"n.","/prә'fesә/"],["profile","简介",9,"n.","/'prәufail/"],["profit","利润",9,"n.","/'prɒfit/"],["program","节目",9,"n.","/'prәugræm/"],["progress","进步",9,"n.","/'prәugres/"],["prohibit","禁止",9,"vt.","/prә'hibit/"],["project","项目",9,"n.","/'prɒdʒekt/"],["promise","承诺",9,"n.","/'prɒmis/"],["promote","促进",9,"vt.","/prәu'mәut/"],["prompt","迅速的",9,"n.","/prɒmpt/"],["pronoun","代词",9,"n.","/'prәunaun/"],["pronounce","发音",9,"v.","/prә'nauns/"],["pronunciation","发音",9,"n.","/prәu.nʌnsi'eiʃәn/"],["proof","证据",9,"n.","/pru:f/"],["proper","适当的",9,"","/'prɒpә/"],["property","财产",9,"n.","/'prɒpәti/"],["proposal","提议",9,"n.","/prә'pәuzl/"],["propose","提议",9,"vt.","/prә'pәuz/"],["protect","保护",9,"vt.","/prә'tekt/"],["protection","保护",9,"n.","/prә'tekʃәn/"],["protein","蛋白质",9,"n.","/'prәuti:in/"],["protest","抗议",9,"n.","/prә'test/"],["proud","骄傲的",9,"","/praud/"],["prove","证明",9,"vt.","/pru:v/"],["provide","提供",9,"vt.","/prә'vaid/"],["province","省",9,"n.","/'prɒvins/"],["psychology","心理学",9,"n.","/sai'kɒlәdʒi/"],["pub","酒馆",9,"n.","/pʌb/"],["public","公共的",9,"n.","/'pʌblik/"],["publish","出版",9,"vt.","/'pʌbliʃ/"],["pull","拉",9,"vt.","/pul/"],["pulse","脉搏",9,"n.","/pʌls/"],["pump","泵",9,"n.","/pʌmp/"],["punctual","准时的",9,"","/'pәŋktʃuәl/"],["punish","惩罚",9,"vt.","/'pʌniʃ/"],["punishment","惩罚",9,"n.","/'pʌniʃmәnt/"],["pupil","学生",9,"n.","/'pju:pl/"],["pure","纯的",9,"","/pjuә/"],["purple","紫色的",9,"n.","/'pә:pl/"],["purpose","目的",9,"n.","/'pә:pәs/"],["purse","钱包",9,"n.","/pә:s/"],["push","推",9,"n.","/puʃ/"],["puzzle","谜",9,"n.","/'pʌzl/"],["qualification","资格",9,"n.","/.kwɒlifi'keiʃәn/"],["qualify","使具备资格",9,"vi.","/'kwɒlifai/"],["quality","质量",9,"n.","/'kwɒlәti/"],["quantity","数量",9,"n.","/'kwɒntәti/"],["quarrel","争吵",9,"n.","/'kwɒrәl/"],["quarter","四分之一",9,"n.","/'kwɒ:tә/"],["queen","女王",9,"n.","/'kwi:n/"],["queer","奇怪的",9,"n.","/kwiә/"],["quest","探索",9,"n.","/kwest/"],["queue","排队",9,"n.","/kju:/"],["quit","放弃",9,"vi.","/kwit/"],["quiver","颤抖",9,"n.","/'kwivә/"],["quiz","测验",9,"n.","/kwiz/"],["quotation","引用",9,"n.","/kwәu'teiʃәn/"],["quote","引用",9,"n.","/kwәut/"],["rabbit","兔子",9,"n.","/'ræbit/"],["race","比赛",9,"n.","/reis/"],["racial","种族的",9,"","/'reiʃәl/"],["rack","架子",9,"n.","/ræk/"],["radar","雷达",9,"n.","/'reidә/"],["radiation","辐射",9,"n.","/.reidi'eiʃәn/"],["rag","破布",9,"n.","/ræg/"],["rail","铁轨",9,"n.","/reil/"],["railway","铁路",9,"n.","/'reilwei/"],["rainbow","彩虹",9,"n.","/'reinbәu/"],["raise","举起",9,"n.","/reiz/"],["range","范围",9,"n.","/'reindʒ/"],["rank","等级",9,"n.","/ræŋk/"],["rapid","迅速的",9,"","/'ræpid/"],["rare","稀有的",9,"","/rєә/"],["rat","老鼠",9,"n.","/ræt/"],["rate","比率",9,"n.","/reit/"],["rather","宁愿",9,"adv.","/'ræðә/"],["raw","生的",9,"n.","/rɒ:/"],["ray","光线",9,"n.","/rei/"],["razor","剃刀",9,"n.","/'reizә/"],["reach","到达",9,"n.","/ri:tʃ/"],["react","反应",9,"vi.","/ri'ækt/"],["reaction","反应",9,"n.","/ri'ækʃәn/"],["real","真实的",9,"","/'riәl/"],["reality","现实",9,"n.","/ri'æliti/"],["realize","意识到",9,"vt.","/'riәlaiz/"],["reason","原因",9,"n.","/'ri:zn/"],["reasonable","合理的",9,"","/'ri:znәbl/"],["recall","回忆",9,"n.","/ri'kɒ:l/"],["receipt","收据",9,"n.","/ri'si:t/"],["receive","收到",9,"vt.","/ri'si:v/"],["recent","最近的",9,"","/'ri:snt/"],["recently","最近",9,"adv.","/'ri:sntli/"],["recipe","食谱",9,"n.","/'resipi/"],["recite","背诵",9,"v.","/ri'sait/"],["recognize","认出",9,"vt.","/'rekәgnaiz/"],["recommend","推荐",9,"vt.","/.rekә'mend/"],["record","记录",9,"n.","/ri'kɒ:d/"],["recover","恢复",9,"vt.","/ri'kʌvә/"],["recovery","恢复",9,"n.","/ri'kʌvәri/"],["recreate","重建",9,"v.","/'rekrieit/"],["recycle","回收",9,"vt.","/.ri:'saikl/"],["reduce","减少",9,"vt.","/ri'dju:s/"],["reduction","减少",9,"n.","/ri'dʌkʃәn/"],["refer","参考",9,"vt.","/ri'fә:/"],["reference","参考",9,"n.","/'refәrәns/"],["reflect","反映",9,"vt.","/ri'flekt/"],["reflection","反射",9,"n.","/ri'flekʃәn/"],["reform","改革",9,"n.","/ri'fɒ:m/"],["refresh","使恢复",9,"vt.","/ri'freʃ/"],["refrigerator","冰箱",9,"n.","/ri'fridʒәreitә/"],["refuge","避难",9,"n.","/'refju:dʒ/"],["refugee","难民",9,"n.","/.refju'dʒi:/"],["refuse","拒绝",9,"vt.","/ri'fju:z/"],["regard","认为",9,"n.","/ri'gɑ:d/"],["regardless","不管",9,"","/ri'gɑ:dlis/"],["region","地区",9,"n.","/'ri:dʒәn/"],["register","登记",9,"n.","/'redʒistә/"],["regret","后悔",9,"n.","/ri'gret/"],["regular","规则的",9,"","/'regjulә/"],["regularly","定期地",9,"adv.","/'regjulәli/"],["regulate","管理",9,"vt.","/'regjuleit/"],["reject","拒绝",9,"n.","/ri'dʒekt/"],["relate","有关",9,"vt.","/ri'leit/"],["relation","关系",9,"n.","/ri'leiʃәn/"],["relationship","关系",9,"n.","/ri'leiʃәnʃip/"],["relative","亲戚",9,"n.","/'relәtiv/"],["relax","放松",9,"vi.","/ri'læks/"],["release","释放",9,"n.","/ri'li:s/"],["relevant","相关的",9,"","/'relivәnt/"],["reliable","可靠的",9,"","/ri'laiәbl/"],["relief","宽慰",9,"n.","/ri'li:f/"],["relieve","缓解",9,"vt.","/ri'li:v/"],["religion","宗教",9,"n.","/ri'lidʒәn/"],["religious","宗教的",9,"","/ri'lidʒәs/"],["rely","依赖",9,"vi.","/ri'lai/"],["remain","保持",9,"vi.","/ri'mein/"],["remark","评论",9,"n.","/ri'mɑ:k/"],["remarkable","非凡的",9,"","/ri'mɑ:kәbl/"],["remind","提醒",9,"vt.","/ri'maind/"],["remote","遥远的",9,"","/ri'mәut/"],["remove","移除",9,"vt.","/ri'mu:v/"],["rent","租",9,"n.","/rent/"],["repair","修理",9,"n.","/ri'pєә/"],["repeat","重复",9,"n.","/ri'pi:t/"],["replace","取代",9,"vt.","/ri'pleis/"],["reply","回复",9,"n.","/ri'plai/"],["report","报告",9,"n.","/ri'pɒ:t/"],["reporter","记者",9,"n.","/ri'pɒ:tә/"],["represent","代表",9,"vt.","/.repri'zent/"],["representative","代表",9,"n.","/.repri'zentәtiv/"],["reputation","名声",9,"n.","/.repju'teiʃәn/"],["request","请求",9,"n.","/ri'kwest/"],["require","需要",9,"vt.","/ri'kwaiә/"],["requirement","要求",9,"n.","/ri'kwaiәmәnt/"],["rescue","营救",9,"n.","/'reskju:/"],["research","研究",9,"n.","/ri'sә:tʃ/"],["reservation","预订",9,"n.","/.rezә'veiʃәn/"],["reserve","储备",9,"n.","/ri'zә:v/"],["resident","居民",9,"n.","/'rezidәnt/"],["resign","辞职",9,"vt.","/ri'zain/"],["resist","抵抗",9,"v.","/ri'zist/"],["resolve","解决",9,"vi.","/ri'zɒlv/"],["resource","资源",9,"n.","/ri'sɒ:s/"],["respect","尊重",9,"n.","/ri'spekt/"],["respond","回应",9,"vt.","/ri'spɒnd/"],["response","回应",9,"n.","/ri'spɒns/"],["responsibility","责任",9,"n.","/ri.spɒnsә'biliti/"],["responsible","负责的",9,"","/ri'spɒnsәbl/"],["restaurant","餐厅",9,"n.","/'restәrɒŋ/"],["restore","恢复",9,"vt.","/ri'stɒ:/"],["restrict","限制",9,"vt.","/ri'strikt/"],["result","结果",9,"n.","/ri'zʌlt/"],["retell","复述",9,"vt.","/ri:'tel/"],["retire","退休",9,"n.","/ri'taiә/"],["return","返回",9,"n.","/ri'tә:n/"],["reveal","揭露",9,"vt.","/ri'vi:l/"],["revenge","复仇",9,"n.","/ri'vendʒ/"],["review","复习",9,"n.","/ri'vju:/"],["revolution","革命",9,"n.","/.revә'lu:ʃәn/"],["reward","奖赏",9,"n.","/ri'wɒ:d/"],["rhyme","押韵",9,"n.","/raim/"],["rhythm","节奏",9,"n.","/'riðәm/"],["ribbon","丝带",9,"n.","/'ribәn/"],["rid","摆脱",9,"vt.","/rid/"],["ridge","山脊",9,"n.","/ridʒ/"],["rifle","步枪",9,"n.","/'raifl/"],["rigid","僵硬的",9,"","/'ridʒid/"],["riot","暴乱",9,"n.","/'raiәt/"],["ripe","成熟的",9,"","/raip/"],["rise","上升",9,"n.","/raiz/"],["risk","风险",9,"n.","/risk/"],["rival","对手",9,"n.","/'raivl/"],["roar","咆哮",9,"n.","/rɒ:/"],["roast","烤",9,"n.","/rәust/"],["rob","抢劫",9,"v.","/rɒb/"],["robber","强盗",9,"n.","/'rɒbә/"],["robe","长袍",9,"n.","/rәub/"],["robot","机器人",9,"n.","/'rәubәt/"],["rock","岩石",9,"n.","/rɒk/"],["rocket","火箭",9,"n.","/'rɒkit/"],["role","角色",9,"n.","/rәul/"],["roll","滚动",9,"n.","/rәul/"],["romantic","浪漫的",9,"","/rәu'mæntik/"],["roof","屋顶",9,"n.","/ru:f/"],["root","根",9,"n.","/ru:t/"],["rope","绳子",9,"n.","/rәup/"],["rose","玫瑰",9,"n.","/rәuz/"],["rough","粗糙的",9,"n.","/rʌf/"],["round","圆的",9,"n.","/raund/"],["route","路线",9,"n.","/ru:t/"],["routine","常规",9,"n.","/ru:'ti:n/"],["row","排",9,"n.","/rәu. rau/"],["royal","皇家的",9,"n.","/'rɒiәl/"],["rub","摩擦",9,"n.","/rʌb/"],["rubber","橡胶",9,"n.","/'rʌbә/"],["rude","粗鲁的",9,"","/ru:d/"],["rug","地毯",9,"n.","/rʌg/"],["ruin","毁灭",9,"n.","/ruin/"],["rule","规则",9,"n.","/ru:l/"],["rumor","谣言",9,"n.","/'ru:mә/"],["runner","跑步者",9,"n.","/'rʌnә/"],["rural","农村的",9,"","/'ruәrәl/"],["rush","冲",9,"n.","/rʌʃ/"],["sacrifice","牺牲",9,"n.","/'sækrifais/"],["saddle","马鞍",9,"n.","/'sædl/"],["sail","航行",9,"n.","/seil/"],["sailor","水手",9,"n.","/'seilә/"],["salary","薪水",9,"n.","/'sælәri/"],["sale","出售",9,"n.","/seil/"],["salt","盐",9,"n.","/sɒ:lt/"],["salty","咸的",9,"","/'sɒ:lti/"],["sample","样品",9,"n.","/'sæmpl/"],["sand","沙子",9,"n.","/sænd/"],["sandwich","三明治",9,"n.","/'sændwitʃ/"],["satellite","卫星",9,"n.","/'sætlait/"],["satisfaction","满意",9,"n.","/.sætis'fækʃәn/"],["satisfy","使满意",9,"vt.","/'sætisfai/"],["sauce","酱汁",9,"n.","/sɒ:s/"],["saucer","茶碟",9,"n.","/'sɒ:sә/"],["sausage","香肠",9,"n.","/'sɒsidʒ/"],["save","拯救",9,"n.","/seiv/"],["saving","储蓄",9,"n.","/'seiviŋ/"],["scale","规模",9,"n.","/skeil/"],["scan","扫描",9,"n.","/skæn/"],["scar","伤疤",9,"n.","/skɑ:/"],["scarce","稀少的",9,"","/skɑ:s/"],["scared","害怕的",9,"","/skeәd/"],["scarf","围巾",9,"n.","/skɑ:f/"],["scene","场景",9,"n.","/si:n/"],["scenery","风景",9,"n.","/'si:nәri/"],["schedule","日程",9,"n.","/'skedʒuәl/"],["scheme","计划",9,"n.","/ski:m/"],["scholar","学者",9,"n.","/'skɒlә/"],["scholarship","奖学金",9,"n.","/'skɒlәʃip/"],["schoolbag","书包",9,"n.","/'sku:lbæ^/"],["science","科学",9,"n.","/'saiәns/"],["scientific","科学的",9,"","/.saiәn'tifik/"],["scientist","科学家",9,"n.","/'saiәntist/"],["scissors","剪刀",9,"","/'sizәz/"],["scold","责骂",9,"n.","/skәuld/"],["scoop","勺子",9,"n.","/sku:p/"],["scope","范围",9,"n.","/skәup/"],["score","得分",9,"n.","/skɒ:/"],["Scotland","苏格兰",9,"n.","/'skɒtlәnd/"],["scratch","抓",9,"n.","/skrætʃ/"],["scream","尖叫",9,"n.","/skri:m/"],["screen","屏幕",9,"n.","/skri:n/"],["screw","螺丝",9,"n.","/skru:/"],["sculpture","雕塑",9,"n.","/'skʌlptʃә/"],["seal","封印",9,"n.","/si:l/"],["search","搜索",9,"n.","/sә:tʃ/"],["season","季节",9,"n.","/'si:zn/"],["second","第二",9,"n.","/'sekәnd/"],["secret","秘密",9,"n.","/'si:krit/"],["secretary","秘书",9,"n.","/'sekrәtәri/"],["section","部分",9,"n.","/'sekʃәn/"],["secure","安全的",9,"","/si'kjuә/"],["security","安全",9,"n.","/si'kjuriti/"],["seed","种子",9,"n.","/si:d/"],["seek","寻找",9,"vt.","/si:k/"],["seem","似乎",9,"vi.","/si:m/"],["seize","抓住",9,"vt.","/si:z/"],["seldom","很少",9,"","/'seldәm/"],["select","选择",9,"","/si'lekt/"],["selection","选择",9,"n.","/si'lekʃәn/"],["self","自己",9,"n.","/self/"],["selfish","自私的",9,"","/'selfiʃ/"],["semester","学期",9,"n.","/si'mestә/"],["senior","高级的",9,"n.","/'si:njә/"],["sense","感觉",9,"n.","/sens/"],["sensible","明智的",9,"","/'sensәbl/"],["sensitive","敏感的",9,"","/'sensitiv/"],["sentence","句子",9,"n.","/'sentәns/"],["separate","分开的",9,"n.","/'sepәreit/"],["September","九月",9,"n.","/sep'tembә/"],["series","系列",9,"n.","/'siәri:z/"],["serious","严肃的",9,"","/'siәriәs/"],["servant","仆人",9,"n.","/'sә:vәnt/"],["serve","服务",9,"vt.","/sә:v/"],["service","服务",9,"n.","/'sә:vis/"],["session","会议",9,"n.","/'seʃәn/"],["set","设置",9,"n.","/set/"],["settle","解决",9,"n.","/'setl/"],["settlement","解决",9,"n.","/'setlmәnt/"],["seven","七",9,"num.","/'sevn/"],["severe","严重的",9,"","/si'viә/"],["sew","缝",9,"vt.","/sәu/"],["sex","性别",9,"n.","/seks/"],["shabby","破旧的",9,"","/'ʃæbi/"],["shade","阴凉",9,"n.","/ʃeid/"],["shadow","影子",9,"n.","/'ʃædәu/"],["shake","摇动",9,"n.","/ʃeik/"],["shall","将要",9,"aux.","/ʃæl/"],["shallow","浅的",9,"n.","/'ʃælәu/"],["shame","羞耻",9,"n.","/ʃeim/"],["shape","形状",9,"n.","/ʃeip/"],["share","分享",9,"n.","/ʃєә/"],["shark","鲨鱼",9,"n.","/ʃɑ:k/"],["sharp","锋利的",9,"n.","/ʃɑ:p/"],["shave","刮脸",9,"n.","/ʃeiv/"],["shed","棚",9,"n.","/ʃed/"],["sheet","床单",9,"n.","/ʃi:t/"],["shelf","架子",9,"n.","/ʃelf/"],["shell","壳",9,"n.","/ʃel/"],["shelter","庇护",9,"n.","/'ʃeltә/"],["shock","震惊",9,"n.","/ʃɒk/"],["shoot","射击",9,"n.","/ʃu:t/"],["shore","岸",9,"n.","/ʃɒ:/"],["shortcoming","缺点",9,"n.","/'ʃɒ:t'kʌmiŋ/"],["shortly","不久",9,"adv.","/'ʃɒ:tli/"],["shot","射击",9,"n.","/ʃɒt/"],["should","应该",9,"aux.","/ʃud/"],["shoulder","肩膀",9,"n.","/'ʃәuldә/"],["shout","喊叫",9,"n.","/ʃaut/"],["shower","淋浴",9,"n.","/'ʃauә/"],["shrink","收缩",9,"n.","/ʃriŋk/"],["shut","关闭",9,"n.","/ʃʌʃ/"],["shuttle","梭子",9,"n.","/'ʃʌtl/"],["shy","害羞的",9,"n.","/ʃai/"],["sidewalk","人行道",9,"n.","/'saidwɒ:k/"],["sigh","叹气",9,"n.","/sai/"],["sight","视觉",9,"n.","/sait/"],["sightseeing","观光",9,"n.","/'saitsi:iŋ/"],["sign","标志",9,"n.","/sain/"],["signal","信号",9,"n.","/'signl/"],["signature","签名",9,"n.","/'signәtʃә/"],["significance","意义",9,"n.","/sig'nifikәns/"],["significant","重要的",9,"","/sig'nifikәnt/"],["silence","沉默",9,"n.","/'sailәns/"],["silent","沉默的",9,"","/'sailәnt/"],["silk","丝绸",9,"n.","/silk/"],["silly","傻的",9,"","/'sili/"],["silver","银",9,"n.","/'silvә/"],["similar","相似的",9,"","/'similә/"],["simple","简单的",9,"","/'simpl/"],["simply","简单地",9,"adv.","/'simpli/"],["since","自从",9,"prep.","/sins/"],["sincere","真诚的",9,"","/sin'siә/"],["single","单一的",9,"","/'siŋgl/"],["sink","下沉",9,"n.","/siŋk/"],["site","地点",9,"n.","/sait/"],["situation","情况",9,"n.","/.sitju'eiʃәn/"],["size","尺寸",9,"n.","/saiz/"],["skill","技能",9,"n.","/'skil/"],["skilled","熟练的",9,"","/'skild/"],["skin","皮肤",9,"n.","/skin/"],["skull","头骨",9,"n.","/skʌl/"],["skyscraper","摩天大楼",9,"n.","/'skaiskreipә/"],["slave","奴隶",9,"n.","/sleiv/"],["sleeve","袖子",9,"n.","/sli:v/"],["slice","薄片",9,"n.","/slais/"],["slide","滑动",9,"n.","/slaid/"],["slight","轻微的",9,"n.","/slait/"],["slim","苗条的",9,"","/slim/"],["slip","滑倒",9,"n.","/slip/"],["slope","斜坡",9,"n.","/slәup/"],["smog","烟雾",9,"n.","/smәug/"],["smoke","烟",9,"n.","/smәuk/"],["smooth","光滑的",9,"","/smu:ð/"],["snack","零食",9,"n.","/snæk/"],["snake","蛇",9,"n.","/sneik/"],["sneaker","运动鞋",9,"n.","/'sni:kә/"],["snowman","雪人",9,"n.","/'snәumæn/"],["soap","肥皂",9,"n.","/sәup/"],["soccer","足球",9,"n.","/'sɒkә/"],["social","社会的",9,"","/'sәuʃәl/"],["society","社会",9,"n.","/sә'saiәti/"],["soda","苏打",9,"n.","/'sәudә/"],["soft","软的",9,"","/sɒft/"],["software","软件",9,"n.","/'sɒftwєә/"],["soil","土壤",9,"n.","/sɒil/"],["soldier","士兵",9,"n.","/'sәuldʒә/"],["solid","固体的",9,"n.","/'sɒlid/"],["solution","解决方案",9,"n.","/sә'lu:ʃәn/"],["solve","解决",9,"vt.","/sɒlv/"],["somebody","某人",9,"n.","/'sʌmbɒdi/"],["someone","某人",9,"pron.","/'sʌmwʌn/"],["something","某事",9,"pron.","/'sʌmθiŋ/"],["sometimes","有时",9,"adv.","/'sʌmtaimz/"],["somewhere","某地",9,"adv.","/'sʌmhwєә/"],["sore","疼痛的",9,"","/sɒ:/"],["sort","种类",9,"n.","/sɒ:t/"],["soul","灵魂",9,"n.","/sәul/"],["sour","酸的",9,"","/'sauә/"],["source","来源",9,"n.","/sɒ:s/"],["southern","南方的",9,"n.","/'sʌðәn/"],["souvenir","纪念品",9,"n.","/.su:vә'niә/"],["space","空间",9,"n.","/speis/"],["spaceship","宇宙飞船",9,"n.","/'speisʃip/"],["spade","铲子",9,"n.","/speid/"],["Spain","西班牙",9,"n.","/spein/"],["spare","空闲的",9,"n.","/spєә/"],["spark","火花",9,"n.","/spɑ:k/"],["sparrow","麻雀",9,"n.","/'spærәu/"],["special","特别的",9,"n.","/'speʃәl/"],["specialist","专家",9,"n.","/'speiʃәlist/"],["speech","演讲",9,"n.","/spi:tʃ/"],["speed","速度",9,"n.","/spi:d/"],["spider","蜘蛛",9,"n.","/'spaidә/"],["spirit","精神",9,"n.","/'spirit/"],["spiritual","精神的",9,"","/'spiritʃuәl/"],["spit","吐",9,"n.","/spit/"],["splash","溅",9,"n.","/splæʃ/"],["split","分开",9,"n.","/split/"],["spoil","溺爱",9,"n.","/spɒil/"],["sponsor","赞助",9,"n.","/'spɒnsә/"],["spoon","勺子",9,"n.","/spu:n/"],["spot","斑点",9,"n.","/spɒt/"],["spread","传播",9,"n.","/spred/"],["spy","间谍",9,"n.","/spai/"],["square","广场",9,"n.","/skwєә/"],["stable","稳定的",9,"n.","/'steibl/"],["stadium","体育场",9,"n.","/'steidiәm/"],["staff","员工",9,"n.","/stɑ:f/"],["stage","舞台",9,"n.","/steidʒ/"],["stair","楼梯",9,"n.","/stєә/"],["standard","标准",9,"n.","/'stændәd/"],["stare","凝视",9,"vi.","/stєә/"],["starve","挨饿",9,"v.","/stɑ:v/"],["state","状态",9,"n.","/steit/"],["statement","声明",9,"n.","/'steitmәnt/"],["steady","稳定的",9,"","/'stedi/"],["steak","牛排",9,"n.","/steik/"],["steal","偷",9,"vt.","/sti:l/"],["steam","蒸汽",9,"n.","/sti:m/"],["steel","钢",9,"n.","/sti:l/"],["steep","陡峭的",9,"n.","/sti:p/"],["step","步骤",9,"n.","/step/"],["stick","棍子",9,"n.","/stik/"],["sticky","粘的",9,"","/'stiki/"],["stiff","僵硬的",9,"","/stif/"],["sting","刺",9,"n.","/stiŋ/"],["stir","搅拌",9,"n.","/stә:/"],["stocking","长袜",9,"n.","/'stɒkiŋ/"],["stomach","胃",9,"n.","/'stʌmәk/"],["stomachache","胃痛",9,"n.","/'stʌmәkeik/"],["stone","石头",9,"n.","/stәun/"],["storey","楼层",9,"n.","/'stɔ:ri/"],["storm","暴风雨",9,"n.","/stɒ:m/"],["stove","炉子",9,"n.","/stәuv/"],["straight","直的",9,"n.","/streit/"],["strait","海峡",9,"n.","/streit/"],["strange","奇怪的",9,"","/streindʒ/"],["stranger","陌生人",9,"n.","/'streindʒә/"],["strategy","策略",9,"n.","/'strætidʒi/"],["straw","稻草",9,"n.","/strɒ:/"],["strawberry","草莓",9,"n.","/'strɒ:bәri/"],["stream","小溪",9,"n.","/stri:m/"],["street","街道",9,"n.","/stri:t/"],["strength","力量",9,"n.","/streŋθ/"],["strengthen","加强",9,"vt.","/'streŋθәn/"],["stress","压力",9,"n.","/stres/"],["stretch","伸展",9,"n.","/stretʃ/"],["strict","严格的",9,"","/strikt/"],["strike","罢工",9,"n.","/straik/"],["string","绳子",9,"n.","/striŋ/"],["strong","强壮的",9,"","/strɒŋ/"],["struggle","斗争",9,"n.","/'strʌgl/"],["studio","工作室",9,"n.","/'stju:diәu/"],["stuff","东西",9,"n.","/stʌf/"],["stupid","愚蠢的",9,"","/'stju:pid/"],["style","风格",9,"n.","/stail/"],["submit","提交",9,"vt.","/sәb'mit/"],["substance","物质",9,"n.","/'sʌbstәns/"],["suburb","郊区",9,"n.","/'sʌbә:b/"],["subway","地铁",9,"n.","/'sʌbwei/"],["succeed","成功",9,"vi.","/sәk'si:d/"],["success","成功",9,"n.","/sәk'ses/"],["successful","成功的",9,"","/sәk'sesful/"],["suck","吸",9,"vt.","/sʌk/"],["sudden","突然的",9,"n.","/'sʌdn/"],["suddenly","突然",9,"adv.","/'sʌdәnli/"],["suffer","遭受",9,"vt.","/'sʌfә/"],["sufficient","足够的",9,"","/sә'fiʃәnt/"],["suggest","建议",9,"vt.","/sәg'dʒest/"],["suggestion","建议",9,"n.","/sә'dʒestʃәn/"],["suit","套装",9,"n.","/sju:t. su:t/"],["suitable","合适的",9,"","/'sju:tәbl/"],["suitcase","手提箱",9,"n.","/'sju:tkeis/"],["sum","总数",9,"n.","/sʌm/"],["summary","摘要",9,"n.","/'sʌmәri/"],["sunlight","阳光",9,"n.","/'sʌnlait/"],["sunrise","日出",9,"n.","/'sʌnraiz/"],["sunset","日落",9,"n.","/'sʌnset/"],["sunshine","阳光",9,"n.","/'sʌnʃain/"],["superior","优越的",9,"n.","/sju:'piәriә/"],["supermarket","超市",9,"n.","/'sju:pәmɑ:kit/"],["supper","晚餐",9,"n.","/'sʌpә/"],["supply","供应",9,"n.","/sә'plai/"],["support","支持",9,"n.","/sә'pɒ:t/"],["suppose","假设",9,"vt.","/sә'pәuz/"],["surf","冲浪",9,"n.","/sә:f/"],["surface","表面",9,"n.","/'sә:fis/"],["surgeon","外科医生",9,"n.","/'sә:dʒәn/"],["surgery","手术",9,"n.","/'sә:dʒәri/"],["surprise","惊讶",9,"n.","/sә'praiz/"],["surround","包围",9,"vt.","/sә'raund/"],["survey","调查",9,"n.","/sә'vei/"],["survival","生存",9,"n.","/sә'vaivәl/"],["survive","幸存",9,"vt.","/sә'vaiv/"],["suspect","怀疑",9,"n.","/sә'spekt/"],["swallow","吞咽",9,"n.","/'swɒlәu/"],["swan","天鹅",9,"n.","/swɒn/"],["swap","交换",9,"n.","/swɒp/"],["swear","发誓",9,"vt.","/swєә/"],["sweat","汗水",9,"n.","/swet/"],["sweater","毛衣",9,"n.","/'swetә/"],["sweep","扫",9,"n.","/swi:p/"],["swell","膨胀",9,"n.","/swel/"],["swift","迅速的",9,"n.","/swift/"],["swing","摇摆",9,"n.","/swiŋ/"],["switch","开关",9,"n.","/switʃ/"],["sword","剑",9,"n.","/sɒ:d/"],["syllable","音节",9,"n.","/'silәbl/"],["symbol","象征",9,"n.","/'simbl/"],["sympathy","同情",9,"n.","/'simpәθi/"],["symphony","交响乐",9,"n.","/'simfәni/"],["symptom","症状",9,"n.","/'simptәm/"],["system","系统",9,"n.","/'sistәm/"],["tablet","药片",9,"n.","/'tæblit/"],["tag","标签",9,"n.","/tæg/"],["tail","尾巴",9,"n.","/teil/"],["tailor","裁缝",9,"n.","/'teilә/"],["tale","故事",9,"n.","/teil/"],["talent","天赋",9,"n.","/'tælәnt/"],["tank","坦克",9,"n.","/tæŋk/"],["tap","水龙头",9,"n.","/'tæp/"],["tape","磁带",9,"n.","/teip/"],["target","目标",9,"n.","/'tɑ:git/"],["task","任务",9,"n.","/tɑ:sk/"],["taste","味道",9,"n.","/teist/"],["tax","税",9,"n.","/tæks/"],["tear","眼泪",9,"n.","/tiә. tєә/"],["technical","技术的",9,"","/'teknikl/"],["technique","技术",9,"n.","/tek'ni:k/"],["technology","技术",9,"n.","/tek'nɒlәdʒi/"],["teenager","青少年",9,"n.","/'ti:nidʒә/"],["telegram","电报",9,"n.","/'teli^ræm/"],["telephone","电话",9,"n.","/'telifәun/"],["telescope","望远镜",9,"n.","/'teliskәup/"],["television","电视",9,"n.","/'teli.viʒәn/"],["temper","脾气",9,"n.","/'tempә/"],["temperature","温度",9,"n.","/'temprәtʃә/"],["temple","寺庙",9,"n.","/templ/"],["temporary","临时的",9,"","/'tempәrәri/"],["tempt","诱惑",9,"vt.","/tempt/"],["tend","倾向于",9,"vi.","/tend/"],["tendency","趋势",9,"n.","/'tendәnsi/"],["tense","紧张的",9,"","/tens/"],["terrible","可怕的",9,"","/'terәbl/"],["terrific","极好的",9,"","/tә'rifik/"],["terrify","使恐惧",9,"vt.","/'terifai/"],["territory","领土",9,"n.","/'teritәri/"],["terror","恐怖",9,"n.","/'terә/"],["text","文本",9,"n.","/tekst/"],["textbook","教科书",9,"n.","/'tekstbuk/"],["the","这",9,"art.","/ðә/"],["theater","剧院",9,"n.","/'θiәtә/"],["theft","盗窃",9,"n.","/θeft/"],["theme","主题",9,"n.","/θi:m/"],["theory","理论",9,"n.","/'θiәri/"],["therefore","因此",9,"adv.","/'ðєәfɒ:/"],["thick","厚的",9,"","/θik/"],["thief","小偷",9,"n.","/θi:f/"],["thin","薄的",9,"","/θin/"],["thirst","口渴",9,"n.","/θә:st/"],["thirty","三十",9,"num.","/'θә:ti/"],["thorough","彻底的",9,"","/'θʌrә/"],["though","虽然",9,"adv.","/ðәu/"],["thought","想法",9,"n.","/θɒ:t/"],["thousand","千",9,"num.","/'θauznd/"],["thread","线",9,"n.","/θred/"],["threat","威胁",9,"n.","/θret/"],["threaten","威胁",9,"vt.","/'θretn/"],["thrill","激动",9,"n.","/θril/"],["throat","喉咙",9,"n.","/θrәut/"],["through","通过",9,"adv.","/θru:/"],["throughout","遍及",9,"adv.","/θru:'aut/"],["throw","扔",9,"vt.","/θrәu/"],["thumb","拇指",9,"n.","/θʌm/"],["thunder","雷",9,"n.","/'θʌndә/"],["thus","因此",9,"adv.","/ðʌs/"],["tide","潮汐",9,"n.","/taid/"],["tidy","整洁的",9,"n.","/'taidi/"],["tie","系",9,"n.","/tai/"],["tight","紧的",9,"","/tait/"],["till","直到",9,"prep.","/til/"],["timetable","时刻表",9,"n.","/'taimteibl/"],["tiny","微小的",9,"","/'taini/"],["tip","尖端",9,"n.","/tip/"],["tissue","纸巾",9,"n.","/'tiʃu:/"],["title","标题",9,"n.","/'taitl/"],["toast","烤面包",9,"n.","/tәust/"],["tobacco","烟草",9,"n.","/tә'bækәu/"],["toe","脚趾",9,"n.","/tәu/"],["toilet","厕所",9,"n.","/'tɒilit/"],["tomb","坟墓",9,"n.","/tu:m/"],["ton","吨",9,"n.","/tʌn/"],["tone","语调",9,"n.","/tәun/"],["tongue","舌头",9,"n.","/tʌŋ/"],["tool","工具",9,"n.","/tu:l/"],["toothache","牙痛",9,"n.","/'tu:θeik/"],["toothbrush","牙刷",9,"n.","/'tu:θbrʌʃ/"],["toothpaste","牙膏",9,"n.","/'tu:θpeist/"],["topic","话题",9,"n.","/'tɒpik/"],["torch","手电筒",9,"n.","/tɒ:tʃ/"],["total","总的",9,"","/'tәutl/"],["totally","完全",9,"adv.","/'tәutli/"],["touch","触摸",9,"n.","/tʌtʃ/"],["tough","坚韧的",9,"n.","/tʌf/"],["tourism","旅游业",9,"n.","/'tuәrizm/"],["tourist","游客",9,"n.","/'tuәrist/"],["toward","朝",9,"prep.","/tә'wɒ:d/"],["towel","毛巾",9,"n.","/'tauәl/"],["tower","塔",9,"n.","/'tauә/"],["trace","痕迹",9,"n.","/treis/"],["track","轨道",9,"n.","/træk/"],["trade","贸易",9,"n.","/treid/"],["tradition","传统",9,"n.","/trә'diʃәn/"],["traditional","传统的",9,"","/trә'diʃәnl/"],["traffic","交通",9,"n.","/'træfik/"],["tragedy","悲剧",9,"n.","/'trædʒidi/"],["training","训练",9,"n.","/'treiniŋ/"],["transfer","转移",9,"n.","/træns'fә:/"],["translate","翻译",9,"vt.","/træns'leit/"],["translation","翻译",9,"n.","/træns'leiʃәn/"],["translator","翻译者",9,"n.","/træn'leitә/"],["transport","运输",9,"n.","/træns'pɒ:t/"],["transportation","交通",9,"n.","/.trænspә'teiʃәn/"],["trap","陷阱",9,"n.","/træp/"],["trash","垃圾",9,"n.","/træʃ/"],["tray","托盘",9,"n.","/trei/"],["treasure","宝藏",9,"n.","/'treʒә/"],["treat","对待",9,"n.","/tri:t/"],["treatment","治疗",9,"n.","/'tri:tmәnt/"],["tremble","颤抖",9,"n.","/'trembl/"],["tremendous","巨大的",9,"","/tri'mendәs/"],["trend","趋势",9,"n.","/trend/"],["trial","审判",9,"n.","/'traiәl/"],["triangle","三角形",9,"n.","/'traiæŋgl/"],["trick","诡计",9,"n.","/trik/"],["triumph","胜利",9,"n.","/'traiәmf/"],["troops","军队",9,"n.","/troops/"],["tropical","热带的",9,"","/'trɒpikl/"],["trousers","裤子",9,"","/'trauzәz/"],["truly","真正地",9,"adv.","/'tru:li/"],["trumpet","喇叭",9,"n.","/'trʌmpit/"],["trust","信任",9,"n.","/trʌst/"],["truth","真相",9,"n.","/tru:θ/"],["T-shirt","T恤",9,"n.","/'ti:,ʃә:t/"],["tube","管子",9,"n.","/tju:b/"],["tunnel","隧道",9,"n.","/'tʌnl/"],["turkey","火鸡",9,"n.","/'tә:ki/"],["twentieth","第二十",9,"num.","/'twentiiθ/"],["twice","两次",9,"adv.","/twais/"],["twin","双胞胎",9,"n.","/twin/"],["twist","扭曲",9,"n.","/twist/"],["type","类型",9,"n.","/taip/"],["typewriter","打字机",9,"n.","/'taip.raitә/"],["typhoon","台风",9,"n.","/tai'fu:n/"],["typical","典型的",9,"","/'tipikl/"],["ugly","丑陋的",9,"","/'ʌgli/"],["umbrella","雨伞",9,"n.","/ʌm'brelә/"],["unable","不能的",9,"","/ʌn'eibl/"],["undergo","经历",9,"vt.","/.ʌndә'gәu/"],["underground","地下的",9,"n.","/'ʌndәgraund/"],["underline","下划线",9,"vt.","/'ʌndәlain/"],["understand","理解",9,"vt.","/.ʌndә'stænd/"],["understanding","理解",9,"n.","/.ʌndә'stændiŋ/"],["unfair","不公平的",9,"","/.ʌn'fєә/"],["unfortunately","不幸地",9,"adv.","/ʌn'fɔ:tjjnәtli/"],["unhappy","不快乐的",9,"","/.ʌn'hæpi/"],["uniform","制服",9,"n.","/'ju:nifɒ:m/"],["union","联盟",9,"n.","/'ju:njәn/"],["unique","独特的",9,"","/ju:'ni:k/"],["unit","单位",9,"n.","/'ju:nit/"],["unite","团结",9,"vi.","/ju:'nait/"],["universe","宇宙",9,"n.","/'ju:nivә:s/"],["university","大学",9,"n.","/.ju:ni'vә:siti/"],["unknown","未知的",9,"","/.ʌn'nәun/"],["unless","除非",9,"conj.","/.ʌn'les/"],["unlike","不像",9,"","/.ʌn'laik/"],["unlikely","不太可能的",9,"","/.ʌn'laikli/"],["until","直到",9,"prep.","/әn'til/"],["unusual","不寻常的",9,"","/.ʌn'ju:ʒu:l/"],["update","更新",9,"vt.","/ʌp'deit/"],["upon","在...上",9,"prep.","/ә'pɒn/"],["upper","上面的",9,"","/'ʌpә/"],["upset","心烦的",9,"","/ʌp'set/"],["upstairs","楼上",9,"","/'ʌp'stєәz/"],["up-to-date","最新的",9,"","/'ʌptә'deit/"],["urban","城市的",9,"","/'ә:bәn/"],["urge","催促",9,"n.","/ә:dʒ/"],["urgent","紧急的",9,"","/'ә:dʒәnt/"],["used","习惯的",9,"","/'ju:st/"],["useful","有用的",9,"","/'ju:sful/"],["useless","无用的",9,"","/'ju:slis/"],["user","用户",9,"n.","/'ju:zә/"],["usual","通常的",9,"","/'ju:ʒuәl/"],["vacant","空的",9,"","/'veikәnt/"],["vacation","假期",9,"n.","/vei'keiʃәn/"],["vacuum","真空",9,"n.","/''vækjuәm/"],["vague","模糊的",9,"","/veig/"],["vain","徒劳的",9,"","/vein/"],["valid","有效的",9,"","/'vælid/"],["valley","山谷",9,"n.","/'væli/"],["valuable","有价值的",9,"","/'væljuәbl/"],["value","价值",9,"n.","/'vælju:/"],["van","货车",9,"n.","/væn/"],["vanish","消失",9,"vi.","/'væniʃ/"],["variety","多样性",9,"n.","/vә'raiәti/"],["various","各种各样的",9,"","/'vєәriәs/"],["vary","变化",9,"vt.","/'vєәri/"],["vast","广阔的",9,"","/vɑ:st/"],["vegetable","蔬菜",9,"n.","/'vedʒәtәbl/"],["vehicle","车辆",9,"n.","/'vi:ikl/"],["venture","冒险",9,"n.","/'ventʃә/"],["verb","动词",9,"n.","/vә:b/"],["version","版本",9,"n.","/'vә:ʒәn/"],["vest","背心",9,"n.","/vest/"],["via","通过",9,"prep.","/vaiә/"],["vice","副的",9,"n.","/vais/"],["victim","受害者",9,"n.","/'viktim/"],["victory","胜利",9,"n.","/'viktәri/"],["video","视频",9,"n.","/'vidiәu/"],["view","观点",9,"n.","/vju:/"],["village","村庄",9,"n.","/'vilidʒ/"],["violence","暴力",9,"n.","/'vaiәlәns/"],["violent","暴力的",9,"","/'vaiәlәnt/"],["violin","小提琴",9,"n.","/.vaiә'lin/"],["virus","病毒",9,"n.","/'vaiәrәs/"],["visa","签证",9,"n.","/'vi:zә/"],["visible","可见的",9,"","/'vizәbl/"],["vision","视觉",9,"n.","/'viʒәn/"],["visitor","访客",9,"n.","/'vizitә/"],["vital","至关重要的",9,"","/'vaitl/"],["vivid","生动的",9,"","/'vivid/"],["vocabulary","词汇",9,"n.","/vә'kæbjulәri/"],["voice","声音",9,"n.","/vɒis/"],["volcano","火山",9,"n.","/vɒl'keinәu/"],["volleyball","排球",9,"n.","/'vɒlibɒ:l/"],["volume","音量",9,"n.","/'vɒljum/"],["voluntary","自愿的",9,"","/'vɒlәntәri/"],["volunteer","志愿者",9,"n.","/.vɒlәn'tiә/"],["vote","投票",9,"n.","/vәut/"],["voyage","航行",9,"n.","/'vɒiidʒ/"],["wage","工资",9,"n.","/weidʒ/"],["waist","腰",9,"n.","/weist/"],["waiter","服务员",9,"n.","/'weitә/"],["waitress","女服务员",9,"n.","/'weitris/"],["wallet","钱包",9,"n.","/'wɒlit/"],["wander","漫游",9,"vi.","/'wɒndә/"],["war","战争",9,"n.","/wɒ:/"],["warn","警告",9,"vt.","/wɒ:n/"],["waste","浪费",9,"n.","/weist/"],["waterfall","瀑布",9,"n.","/'wɒtәfɒ:l/"],["watermelon","西瓜",9,"n.","/'wɒtә.melәn/"],["wave","波浪",9,"n.","/weiv/"],["weak","弱的",9,"","/wi:k/"],["weakness","弱点",9,"n.","/'wi:knis/"],["wealth","财富",9,"n.","/welθ/"],["weapon","武器",9,"n.","/'wepәn/"],["weave","编织",9,"n.","/wi:v/"],["web","网",9,"n.","/web/"],["website","网站",9,"n.","/website/"],["wedding","婚礼",9,"n.","/'wediŋ/"],["weed","杂草",9,"n.","/wi:d/"],["weekday","工作日",9,"n.","/'wi:kdei/"],["weekly","每周的",9,"n.","/'wi:kli/"],["weep","哭泣",9,"n.","/wi:p/"],["weigh","称重",9,"vt.","/wei/"],["weight","重量",9,"n.","/weit/"],["welfare","福利",9,"n.","/'welfєә/"],["well-known","著名的",9,"","/well-known/"],["western","西方的",9,"n.","/'westәn/"],["wet","湿的",9,"n.","/wet/"],["whale","鲸鱼",9,"n.","/hweil/"],["wheat","小麦",9,"n.","/hwi:t/"],["wheel","轮子",9,"n.","/hwi:l/"],["whenever","每当",9,"conj.","/hwen'evә/"],["wherever","无论哪里",9,"adv.","/hwєәr'evә/"],["whether","是否",9,"conj.","/'hweðә/"],["whisper","低语",9,"n.","/'hwispә/"],["whistle","口哨",9,"n.","/'hwisl/"],["whole","整个的",9,"n.","/hәul/"],["whom","谁",9,"pron.","/hu:m/"],["wide","宽的",9,"","/waid/"],["widely","广泛地",9,"adv.","/'waidli/"],["widespread","普遍的",9,"","/'waidspred/"],["width","宽度",9,"n.","/widθ/"],["wildlife","野生动物",9,"n.","/'waildlaif/"],["willing","愿意的",9,"","/'wiliŋ/"],["win","赢",9,"vt.","/win/"],["wine","酒",9,"n.","/wain/"],["wing","翅膀",9,"n.","/wiŋ/"],["winner","获胜者",9,"n.","/'winә/"],["wipe","擦",9,"n.","/waip/"],["wire","电线",9,"n.","/'waiә/"],["wisdom","智慧",9,"n.","/'wizdәm/"],["wise","明智的",9,"","/waiz/"],["withdraw","撤回",9,"vt.","/wið'drɒ:/"],["within","在...内",9,"n.","/wi'ðin/"],["without","没有",9,"prep.","/wi'ðaut/"],["witness","目击者",9,"n.","/'witnis/"],["wolf","狼",9,"n.","/wulf/"],["wonder","想知道",9,"n.","/'wʌndә/"],["wood","木头",9,"n.","/wud/"],["wooden","木制的",9,"","/'wudn/"],["woods","树林",9,"n.","/wjdz/"],["wool","羊毛",9,"n.","/wul/"],["workshop","车间",9,"n.","/'wә:kʃɒp/"],["worldwide","全世界的",9,"","/'wә:ldwaid/"],["worm","蠕虫",9,"n.","/wә:m/"],["worried","担心的",9,"","/'wʌrid/"],["worse","更坏的",9,"n.","/wә:s/"],["worship","崇拜",9,"n.","/'wә:ʃip/"],["worst","最坏的",9,"n.","/wә:st/"],["worth","值得的",9,"n.","/wә:θ/"],["worthwhile","值得的",9,"","/'wә:θ'hwail/"],["would","将",9,"aux.","/wud/"],["wound","伤口",9,"n.","/wu:nd/"],["wrap","包",9,"n.","/ræp/"],["wrist","手腕",9,"n.","/rist/"],["writer","作家",9,"n.","/'raitә/"],["writing","写作",9,"n.","/'raitiŋ/"],["X-ray","X光",9,"","/'eks'rei/"],["yard","院子",9,"n.","/jɑ:d/"],["yesterday","昨天",9,"n.","/'jestәdi/"],["yoga","瑜伽",9,"n.","/'jәugә/"],["yogurt","酸奶",9,"n.","/'jɔ^әt/"],["youngster","年轻人",9,"n.","/'jʌŋstә/"],["youth","青春",9,"n.","/ju:θ/"],["yummy","美味的",9,"","/'jʌmi/"],["zebra","斑马",9,"n.","/'zi:brә/"],["zip","拉链",9,"n.","/zip/"],["zone","区域",9,"n.","/zәun/"],["zoom","缩放",9,"n.","/zu:m/"],["abide","遵守",8,"vi.","/ә'baid/"],["abound","充满",8,"vi.","/ә'baund/"],["abreast","并排",8,"adv.","/ә'brest/"],["abstain","戒除",8,"vi.","/әb'stein/"],["absurdly","荒谬地",8,"adv.","/әb'sә:dli/"],["abundance","丰富",8,"n.","/ә'bʌndәns/"],["accent","口音",8,"n.","/'æksәnt/"],["acceptance","接受",8,"n.","/әk'septәns/"],["accessory","配饰",8,"n.","/әk'sesәri/"],["acclaim","欢呼",8,"n.","/ә'kleim/"],["accord","一致",8,"n.","/ә'kɒ:d/"],["accordance","一致",8,"n.","/ә'kɒ:dәns/"],["accordingly","因此",8,"adv.","/ә'kɒ:diŋli/"],["accountant","会计",8,"n.","/ә'kauntәnt/"],["accumulate","积累",8,"v.","/ә'kju:mjuleit/"],["accuracy","准确",8,"n.","/'ækjurәsi/"],["accustomed","习惯的",8,"","/ә'kʌstәmd/"],["acquisition","获得",8,"n.","/.ækwi'ziʃәn/"],["acrobat","杂技演员",8,"n.","/'ækrәbæt/"],["acting","代理的",8,"n.","/'æktiŋ/"],["activate","激活",8,"vt.","/'æktiveit/"],["activist","活动家",8,"n.","/'æktivist/"],["acute","急性的",8,"","/ә'kju:t/"],["adaptable","适应力强的",8,"","/ә'dæptәbl/"],["additional","额外的",8,"","/ә'diʃәnәl/"],["adhere","坚持",8,"vi.","/әd'hiә/"],["adjacent","相邻的",8,"","/ә'dʒeisәnt/"],["adjective","形容词",8,"n.","/'ædʒiktiv/"],["administer","管理",8,"vt.","/әd'ministә/"],["admirable","令人钦佩的",8,"","/'ædmәrәbl/"],["admiral","海军上将",8,"n.","/'ædmәrәl/"],["admiration","钦佩",8,"n.","/.ædmә'reiʃәn/"],["admission","入场",8,"n.","/әd'miʃәn/"],["adolescent","青少年",8,"","/.ædәu'lesәnt/"],["adore","崇拜",8,"vt.","/ә'dɒ:/"],["adorn","装饰",8,"vt.","/ә'dɒ:n/"],["advancement","进步",8,"n.","/әd'vɑ:nsmәnt/"],["advent","到来",8,"n.","/'ædvәnt/"],["adverb","副词",8,"n.","/'ædvә:b/"],["adversary","对手",8,"n.","/'ædvәsәri/"],["adverse","不利的",8,"","/'ædvә:s/"],["advertisement","广告",8,"n.","/.ædvә'taizmәnt/"],["advisable","明智的",8,"","/әd'vaizәbl/"],["advise","建议",8,"vt.","/әd'vaiz/"],["advocate","提倡",8,"n.","/'ædvәkeit/"],["aerial","空中的",8,"","/'єәriәl/"],["aesthetic","审美的",8,"","/i:s'θetik/"],["affection","感情",8,"n.","/ә'fekʃәn/"],["affirmative","肯定的",8,"","/ә'fә:mәtiv/"],["afloat","漂浮地",8,"","/ә'flәut/"],["agenda","议程",8,"","/ә'dʒendә/"],["aggravate","恶化",8,"vt.","/'ægrәveit/"],["aggregate","总计",8,"n.","/'ægrigәt/"],["agitate","煽动",8,"vt.","/'ædʒiteit/"],["agony","痛苦",8,"n.","/'ægәni/"],["agreeable","令人愉快的",8,"","/ә'griәbl/"],["airliner","客机",8,"n.","/'єәlainә/"],["airmail","航空邮件",8,"n.","/'єәmeil/"],["alert","警觉的",8,"","/ә'lә:t/"],["algebra","代数",8,"n.","/'ældʒibrә/"],["alien","外星人",8,"n.","/'eiljәn/"],["alignment","列队",8,"n.","/ә'lainmәnt/"],["alley","小巷",8,"n.","/'æli/"],["alliance","联盟",8,"n.","/ә'laiәns/"],["allocate","分配",8,"vt.","/'ælәukeit/"],["allowance","津贴",8,"n.","/ә'lauәns/"],["alloy","合金",8,"n.","/'ælɒi. ә'lɒi/"],["alongside","在...旁边",8,"adv.","/ә'lɒŋ'said/"],["alpine","高山的",8,"","/'ælpain/"],["alter","改变",8,"v.","/'ɒ:ltә/"],["alternate","交替",8,"","/'ɒ:ltәnәt/"],["amateur","业余的",8,"n.","/'æmәtә/"],["amber","琥珀",8,"n.","/'æmbә/"],["ambiguity","含糊",8,"n.","/.æmbi'gju:iti/"],["amend","修正",8,"vt.","/ә'mend/"],["amid","在...中",8,"prep.","/ә'mid/"],["amongst","在...之中",8,"prep.","/ә'mʌŋst/"],["ample","充足的",8,"","/'æmpl/"],["amplify","放大",8,"vt.","/'æmplifai/"],["analogy","类比",8,"n.","/ә'nælәdʒi/"],["analyse","分析",8,"vt.","/'ænәlaiz/"],["analysis","分析",8,"n.","/ә'nælәsis/"],["ancestor","祖先",8,"n.","/'ænsestә/"],["anchor","锚",8,"n.","/'æŋkә/"],["anecdote","轶事",8,"n.","/'ænikdәut/"],["anguish","痛苦",8,"n.","/'æŋgwiʃ/"],["anonymous","匿名的",8,"","/ә'nɒnimәs/"],["antenna","触角",8,"n.","/æn'tenә/"],["anthem","颂歌",8,"n.","/'ænθәm/"],["anticipate","预期",8,"vt.","/æn'tisipeit/"],["antique","古董",8,"n.","/æn'ti:k/"],["anyhow","无论如何",8,"adv.","/'enihau/"],["ape","猿",8,"n.","/eip/"],["apparent","明显的",8,"","/ә'pærәnt/"],["apparently","显然地",8,"adv.","/ә'pærәntli/"],["appeal","呼吁",8,"n.","/ә'pi:l/"],["appliance","器具",8,"n.","/ә'plaiәns/"],["applicable","适用的",8,"","/'æplikәbl/"],["applicant","申请人",8,"n.","/'æplikәnt/"],["apprehension","忧虑",8,"n.","/.æpri'henʃәn/"],["apricot","杏子",8,"n.","/'eiprikɒt/"],["apt","恰当的",8,"","/æpt/"],["aquarium","水族馆",8,"n.","/ә'kwєәriәm/"],["arbitrary","武断的",8,"","/'ɑ:bitrәri/"],["archaeology","考古学",8,"n.","/.ɑ:ki'ɒlәdʒi/"],["archive","档案",8,"vt.","/'ɑ:kaiv/"],["arena","竞技场",8,"n.","/ә'ri:nә/"],["arithmetic","算术",8,"n.","/ә'riθmәtik/"],["armor","盔甲",8,"n.","/'ɑ:mә/"],["arouse","唤起",8,"vt.","/ә'rauz/"],["array","阵列",8,"n.","/ә'rei/"],["artillery","大炮",8,"n.","/ɑ:'tilәri/"],["artisan","工匠",8,"n.","/.ɑ:ti'zæn/"],["artwork","艺术品",8,"n.","/'ɑ:twә:k/"],["ascend","上升",8,"vi.","/ә'send/"],["ascertain","查明",8,"vt.","/.æsә'tein/"],["ashtray","烟灰缸",8,"n.","/'æʃtrei/"],["aspiration","渴望",8,"n.","/.æspә'reiʃәn/"],["assert","断言",8,"vt.","/ә'sә:t/"],["assess","评估",8,"vt.","/ә'ses/"],["asset","资产",8,"n.","/'æset/"],["assimilate","吸收",8,"vt.","/ә'simileit/"],["assistance","帮助",8,"n.","/ә'sistәns/"],["association","协会",8,"n.","/ә.sәuʃә'eiʃәn/"],["assurance","保证",8,"n.","/ә'ʃuәrәns/"],["asterisk","星号",8,"n.","/'æstәrisk/"],["astonish","使惊讶",8,"vt.","/ә'stɒniʃ/"],["atlas","地图集",8,"n.","/'ætlәs/"],["attain","达到",8,"vt.","/ә'tein/"],["attic","阁楼",8,"n.","/'ætik/"],["attire","服装",8,"n.","/ә'taiә/"],["attorney","律师",8,"n.","/ә'tә:ni/"],["attribute","归因于",8,"n.","/ә'tribju:t/"],["auction","拍卖",8,"n.","/'ɒ:kʃәn/"],["audio","音频",8,"","/'ɒ:diou/"],["audit","审计",8,"n.","/'ɒ:dit/"],["augment","增加",8,"v.","/ɒ:g'ment/"],["aurora","极光",8,"n.","/ɒ:'rɒ:rә/"],["authentic","真正的",8,"","/ɒ:'θentik/"],["automobile","汽车",8,"n.","/'ɒ:tәmәbi:l/"],["autonomous","自治的",8,"","/ɒ:'tɒnәmәs/"],["auxiliary","辅助的",8,"n.","/ɒ:g'ziljәri/"],["avail","有用",8,"vi.","/ә'veil/"],["avalanche","雪崩",8,"n.","/'ævәlɑ:ntʃ/"],["avenge","报仇",8,"vt.","/ә'vendʒ/"],["aviation","航空",8,"n.","/.eivi'eiʃәn/"],["awe","敬畏",8,"n.","/ɒ:/"],["backbone","脊骨",8,"n.","/'bækbәun/"],["backup","备份",8,"n.","/'bækʌp/"],["baffle","使困惑",8,"vt.","/'bæfl/"],["ballot","投票",8,"n.","/'bælәt/"],["ban","禁止",8,"n.","/bæn/"],["bandit","强盗",8,"n.","/'bændit/"],["bankrupt","破产的",8,"n.","/'bæŋkrʌpt/"],["banner","旗帜",8,"n.","/'bænә/"],["banquet","宴会",8,"n.","/'bæŋkwit/"],["barely","仅仅",8,"adv.","/'bєәli/"],["barn","谷仓",8,"n.","/bɑ:n/"],["barometer","气压计",8,"n.","/bә'rɒmitә/"],["barricade","路障",8,"n.","/.bæri'keid/"],["batch","一批",8,"n.","/bætʃ/"],["battlefield","战场",8,"n.","/'bætlfi:ld/"],["beacon","灯塔",8,"n.","/'bi:kn/"],["bead","珠子",8,"n.","/bi:d/"],["bearing","关系",8,"n.","/'bєәriŋ/"],["beast","野兽",8,"n.","/bi:st/"],["beverage","饮料",8,"n.","/'bevәridʒ/"],["beware","当心",8,"v.","/bi'wєә/"],["bewilder","使迷惑",8,"vt.","/bi'wildә/"],["bid","出价",8,"n.","/bid/"],["billboard","广告牌",8,"n.","/'bilbɒ:d/"],["binary","二进制的",8,"","/'bainәri/"],["bishop","主教",8,"n.","/'biʃәp/"],["bizarre","古怪的",8,"","/bi'zɑ:/"],["blacksmith","铁匠",8,"n.","/'blæksmiθ/"],["blaze","火焰",8,"n.","/bleiz/"],["bleach","漂白",8,"vt.","/bli:tʃ/"],["blizzard","暴风雪",8,"n.","/'blizәd/"],["blockade","封锁",8,"n.","/blɒ'keid/"],["blossom","开花",8,"n.","/'blɒsәm/"],["blueprint","蓝图",8,"n.","/'blu:'print/"],["blunder","愚蠢错误",8,"n.","/'blʌndә/"],["blunt","钝的",8,"","/blʌnt/"],["blur","模糊",8,"vt.","/blә:/"],["boast","自夸",8,"n.","/bәust/"],["bolt","螺栓",8,"n.","/bәult/"],["bonus","奖金",8,"n.","/'bәunәs/"],["booklet","小册子",8,"n.","/'buklit/"],["bookmark","书签",8,"n.","/'bukmɑ:k/"],["booming","繁荣的",8,"","/'bu:miŋ/"],["borderline","边界",8,"n.","/'bɒ:dәlain/"],["borough","自治市",8,"n.","/'bә:rәu/"],["boulder","巨石",8,"n.","/'bәuldә/"],["bouquet","花束",8,"n.","/bu'kei/"],["bourbon","波旁威士忌",8,"","/'buәbәn/"],["boutique","精品店",8,"n.","/bu:'ti:k/"],["brace","支撑",8,"n.","/breis/"],["bracket","括号",8,"n.","/'brækit/"],["brag","吹牛",8,"n.","/bræg/"],["braid","编辫子",8,"n.","/breid/"],["brass","黄铜",8,"n.","/bræs.brɑ:s/"],["breach","违反",8,"n.","/bri:tʃ/"],["breakdown","故障",8,"n.","/'breikdaun/"],["breakthrough","突破",8,"n.","/'breikθru:/"],["breeze","微风",8,"n.","/bri:z/"],["brew","酿造",8,"n.","/bru:/"],["brigade","旅",8,"n.","/bri'geid/"],["brink","边缘",8,"n.","/briŋk/"],["brisk","轻快的",8,"","/brisk/"],["brochure","小册子",8,"n.","/'brәuʃә/"],["bronze","青铜",8,"n.","/brɒnz/"],["brood","一窝",8,"n.","/bru:d/"],["broom","扫帚",8,"n.","/bru:m/"],["browse","浏览",8,"v.","/brauz/"],["bruise","瘀伤",8,"n.","/bru:z/"],["brunch","早午餐",8,"n.","/brʌntʃ/"],["brutal","残忍的",8,"","/'bru:tәl/"],["buckle","扣子",8,"n.","/'bʌkl/"],["buffalo","水牛",8,"n.","/'bʌfәlәu/"],["buffer","缓冲",8,"n.","/'bʌfә/"],["bulletin","公告",8,"n.","/'bulitin/"],["bully","欺凌",8,"n.","/'buli/"],["bumper","保险杠",8,"n.","/'bʌmpә/"],["bunk","铺位",8,"n.","/bʌŋk/"],["bureaucracy","官僚主义",8,"n.","/bjuә'rɒkrәsi/"],["burglar","窃贼",8,"n.","/'bә:glә/"],["burner","燃烧器",8,"n.","/'bә:nә/"],["burrow","洞穴",8,"n.","/'bʌrәu/"],["butler","管家",8,"n.","/'bʌtlә/"],["buzz","嗡嗡声",8,"n.","/bʌz/"],["byte","字节",8,"n.","/bait/"],["cabinet","内阁",8,"n.","/'kæbinit/"],["cactus","仙人掌",8,"n.","/'kæktәs/"],["cadet","军校生",8,"n.","/kә'det/"],["calamity","灾难",8,"n.","/kә'læmiti/"],["calcium","钙",8,"n.","/'kælsiәm/"],["caliber","口径",8,"n.","/'kælibә/"],["calorie","卡路里",8,"n.","/'kælәri/"],["cane","手杖",8,"n.","/kein/"],["canine","犬的",8,"n.","/'keinain/"],["canopy","树冠",8,"n.","/'kænәpi/"],["canteen","食堂",8,"n.","/kæn'ti:n/"],["canvas","帆布",8,"n.","/'kænvәs/"],["canyon","峡谷",8,"n.","/'kænjәn/"],["cape","海角",8,"n.","/keip/"],["capsule","胶囊",8,"n.","/'kæpsju:l/"],["caption","标题",8,"n.","/'kæpʃәn/"],["carnival","狂欢节",8,"n.","/'kɑ:nivәl/"],["carpenter","木匠",8,"n.","/'kɑ:pintә/"],["carve","雕刻",8,"v.","/kɑ:v/"],["cascade","小瀑布",8,"n.","/kæ'skeid/"],["casino","赌场",8,"n.","/kә'si:nәu/"],["casket","棺材",8,"n.","/'kɑ:skit/"],["casualty","伤亡",8,"n.","/'kæʒjuәlti/"],["catastrophe","大灾难",8,"n.","/kә'tæstrәfi/"],["cater","提供饮食",8,"v.","/'keitә/"],["cathedral","大教堂",8,"n.","/kә'θi:drәl/"],["cavalry","骑兵",8,"n.","/'kævәlri/"],["cavern","大洞穴",8,"n.","/'kævәn/"],["cavity","腔",8,"n.","/'kæviti/"],["cease","停止",8,"n.","/si:s/"],["cedar","雪松",8,"n.","/'si:dә/"],["celebrity","名人",8,"n.","/si'lebrti/"],["cellar","地窖",8,"n.","/'selә/"],["cement","水泥",8,"n.","/si'ment/"],["cemetery","墓地",8,"n.","/'semitәri/"],["censor","审查",8,"n.","/'sensә/"],["census","人口普查",8,"n.","/'sensәs/"],["ceramic","陶瓷的",8,"","/si'ræmik/"],["cereal","谷类",8,"n.","/'siәriәl/"],["chancellor","总理",8,"n.","/'tʃɑ:nsәlә/"],["chaos","混乱",8,"n.","/'keiɒs/"],["characteristic","特征",8,"n.","/.kærәktә'ristik/"],["checkout","结账",8,"n.","/'tʃekaut/"],["cherish","珍爱",8,"vt.","/'tʃeriʃ/"],["chestnut","栗子",8,"n.","/'tʃesnʌt/"],["chick","小鸡",8,"n.","/tʃik/"],["chimney","烟囱",8,"n.","/'tʃimni/"],["chivalry","骑士精神",8,"n.","/'ʃivәlri/"],["choir","唱诗班",8,"n.","/'kwaiә/"],["chord","和弦",8,"n.","/kɒ:d/"],["Christ","基督",8,"n.","/kraist/"],["chronicle","编年史",8,"n.","/'krɒnikl/"],["chuckle","轻笑",8,"n.","/'tʃʌkl/"],["cinder","煤渣",8,"n.","/'sindә/"],["circulate","循环",8,"v.","/'sә:kjuleit/"],["circumstance","情况",8,"n.","/'sә:kәmstәns/"],["circus","马戏团",8,"n.","/'sә:kәs/"],["cite","引用",8,"vt.","/sait/"],["civilian","平民",8,"n.","/si'viljәn/"],["clamp","夹子",8,"n.","/klæmp/"],["clarity","清晰",8,"n.","/'klærәti/"],["clash","冲突",8,"n.","/klæʃ/"],["clasp","扣紧",8,"n.","/klɑ:sp/"],["classify","分类",8,"vt.","/'klæsifai/"],["clatter","咔嗒声",8,"n.","/'klætә/"],["cleanse","清洁",8,"vt.","/klenz/"],["clearance","清除",8,"n.","/'kliәrәns/"],["clergy","神职人员",8,"n.","/'klә:dʒi/"],["climax","高潮",8,"n.","/'klaimæks/"],["cling","紧抓",8,"vi.","/kliŋ/"],["clip","夹子",8,"n.","/klip/"],["clockwise","顺时针",8,"","/'klɒkwaiz/"],["clone","克隆",8,"n.","/klәun/"],["closet","壁橱",8,"n.","/'klɒzit/"],["clumsy","笨拙的",8,"","/'klʌmzi/"],["clutch","抓住",8,"n.","/klʌtʃ/"],["coarse","粗糙的",8,"","/kɒ:s/"],["coastline","海岸线",8,"n.","/'kәustlain/"],["coating","涂层",8,"n.","/'kәutiŋ/"],["cobble","鹅卵石",8,"n.","/'kɒbl/"],["cobra","眼镜蛇",8,"n.","/'kәubrә/"],["coexist","共存",8,"vi.","/.kәuig'zist/"],["cogent","有说服力的",8,"","/'kәudʒәnt/"],["coil","线圈",8,"n.","/kɒil/"],["coincide","巧合",8,"vi.","/.kәuin'said/"],["collide","碰撞",8,"vi.","/kә'laid/"],["colloquial","口语的",8,"","/kә'lәukwiәl/"],["colonel","上校",8,"n.","/'kә:nәl/"],["colonial","殖民的",8,"","/kә'lәunjәl/"],["column","柱",8,"n.","/'kɒlәm/"],["combat","战斗",8,"n.","/'kɒmbæt/"],["combination","结合",8,"n.","/.kɒmbi'neiʃәn/"],["comet","彗星",8,"n.","/'kɒmit/"],["comic","滑稽的",8,"n.","/'kɒmik/"],["commemorate","纪念",8,"vt.","/kә'memәreit/"],["commence","开始",8,"v.","/kә'mens/"],["commend","表扬",8,"vt.","/kә'mend/"],["commodity","商品",8,"n.","/kә'mɒditi/"],["commonplace","平凡的",8,"n.","/'kɒmәnpleis/"],["commonsense","常识的",8,"","/,kɔmәn'sens/"],["communal","公共的",8,"","/'kɒmjunәl/"],["communist","共产主义的",8,"n.","/'kɒmjunist/"],["compact","紧凑的",8,"","/kәm'pækt/"],["comparable","可比较的",8,"","/'kɒmpәrәbl/"],["compass","罗盘",8,"n.","/'kʌmpәs/"],["compassion","同情",8,"n.","/kәm'pæʃәn/"],["compatible","兼容的",8,"","/kәm'pætәbl/"],["compel","强迫",8,"vt.","/kәm'pel/"],["compensate","补偿",8,"v.","/'kɒmpenseit/"],["competent","胜任的",8,"","/'kɒmpitәnt/"],["compile","编辑",8,"vt.","/kәm'pail/"],["complaint","抱怨",8,"n.","/kәm'pleint/"],["complement","补充",8,"n.","/'kɒmplimәnt/"],["complexion","肤色",8,"n.","/kәm'plekʃn/"],["compliance","顺从",8,"n.","/kәm'plaiәns/"],["complicate","使复杂",8,"vt.","/'kɒmplikeit/"],["compliment","赞美",8,"n.","/'kɒmplimәnt/"],["comply","遵从",8,"vi.","/kәm'plai/"],["component","成分",8,"n.","/kәm'pәunәnt/"],["comprehensive","全面的",8,"","/.kɒmpri'hensiv/"],["comprise","包括",8,"vt.","/kәm'praiz/"],["compulsory","强制的",8,"","/kәm'pʌlsәri/"],["compute","计算",8,"v.","/kәm'pju:t/"],["concave","凹的",8,"","/'kɒnkeiv/"],["concede","让步",8,"vt.","/kәn'si:d/"],["conceive","构想",8,"vt.","/kәn'si:v/"],["concession","让步",8,"n.","/kәn'seʃәn/"],["concise","简明的",8,"","/kәn'sais/"],["condemn","谴责",8,"vt.","/kәn'dem/"],["condense","凝结",8,"vt.","/kәn'dens/"],["condone","宽恕",8,"vt.","/kәn'dәun/"],["cone","圆锥",8,"n.","/kәun/"],["confess","坦白",8,"v.","/kәn'fes/"],["confide","信赖",8,"vt.","/kәn'faid/"],["confidential","机密的",8,"","/.kɒnfi'denʃәl/"],["configuration","配置",8,"n.","/kәn.figju'reiʃәn/"],["confine","限制",8,"vt.","/kәn'fain/"],["confiscate","没收",8,"vt.","/'kɒnfiskeit/"],["conform","遵从",8,"vt.","/kәn'fɒ:m/"],["confound","使混乱",8,"vt.","/kәn'faund/"],["confront","面对",8,"vt.","/kәn'frʌnt/"],["congenial","意气相投的",8,"","/kәn'dʒi:njәl/"],["congestion","拥挤",8,"n.","/kәn'dʒestʃәn/"],["conscience","良心",8,"n.","/'kɒnʃәns/"],["consecutive","连续的",8,"","/kәn'sekjutiv/"],["consensus","共识",8,"n.","/kәn'sensәs/"],["consent","同意",8,"n.","/kәn'sent/"],["conservative","保守的",8,"","/kәn'sә:vәtiv/"],["conserve","保存",8,"n.","/kәn'sә:v/"],["considerable","相当大的",8,"","/kәn'sidәrәbl/"],["console","控制台",8,"vt.","/kәn'sәul/"],["consolidate","巩固",8,"vt.","/kәn'sɒlideit/"],["conspicuous","显眼的",8,"","/kәn'spikjuәs/"],["conspiracy","阴谋",8,"n.","/kәn'spirәsi/"],["constitution","宪法",8,"n.","/.kɒnsti'tju:ʃәn/"],["consumer","消费者",8,"n.","/kәn'sju:mә/"],["contagious","传染的",8,"","/kәn'teidʒәs/"],["contemplate","沉思",8,"vt.","/'kɒntempleit/"],["contempt","轻蔑",8,"n.","/kәn'tempt/"],["contend","竞争",8,"vi.","/kәn'tend/"],["contingent","可能的",8,"","/kәn'tindʒәnt/"],["continual","频繁的",8,"","/kәn'tinjuәl/"],["contrive","发明",8,"v.","/kәn'traiv/"],["controversial","有争议的",8,"","/.kɒntrә'vә:ʃәl/"],["convenience","便利",8,"n.","/kә'vi:njәns/"],["converge","汇聚",8,"vi.","/kәn'vә:dʒ/"],["conversion","转换",8,"n.","/kәn'vә:ʃәn/"],["convert","转变",8,"n.","/kәn'vә:t/"],["convey","传达",8,"vt.","/kәn'vei/"],["convict","定罪",8,"n.","/kәn'vikt/"],["conviction","定罪",8,"n.","/kәn'vikʃәn/"],["coordinate","协调",8,"n.","/kәu'ɒ:dineit/"],["copyright","版权",8,"n.","/'kɒpirait/"],["cork","软木塞",8,"n.","/kɒ:k/"],["corps","军团",8,"n.","/kɒ:/"],["corrode","腐蚀",8,"vt.","/kә'rәud/"],["corrupt","腐败的",8,"","/kә'rʌpt/"],["cosmetic","化妆品",8,"n.","/kɒz'metik/"],["cosmic","宇宙的",8,"","/'kɒzmik/"],["counsel","忠告",8,"n.","/'kaunsәl/"],["counterpart","对应物",8,"n.","/'kauntәpɑ:t/"],["coupon","优惠券",8,"n.","/'ku:pɒn/"],["courteous","有礼貌的",8,"","/'kә:tjәs/"],["courtesy","礼貌",8,"n.","/'kә:tisi/"],["coverage","覆盖范围",8,"n.","/'kʌvәridʒ/"],["cradle","摇篮",8,"n.","/'kreidl/"],["craftsman","工匠",8,"n.","/'kræftsmәn/"],["cramp","抽筋",8,"n.","/kræmp/"],["crane","鹤",8,"n.","/krein/"],["crater","火山口",8,"n.","/'kreitә/"],["crave","渴望",8,"v.","/kreiv/"],["crawl","爬行",8,"n.","/krɒ:l/"],["craze","狂热",8,"n.","/kreiz/"],["credential","证书",8,"n.","/kri'denʃәl/"],["credible","可信的",8,"","/'kredәbl/"],["creek","小溪",8,"n.","/kri:k/"],["creep","爬行",8,"n.","/kri:p/"],["crest","山顶",8,"n.","/krest/"],["cricket","蟋蟀",8,"n.","/'krikit/"],["crimson","深红的",8,"n.","/'krimzәn/"],["cripple","使跛",8,"n.","/'kripl/"],["crisp","脆的",8,"","/krisp/"],["criterion","标准",8,"n.","/krai'tiәriәn/"],["criticism","批评",8,"n.","/'kritisizm/"],["crocodile","鳄鱼",8,"n.","/'krɒkәdail/"],["crooked","弯曲的",8,"","/'krukid/"],["crossroad","交叉路",8,"n.","/'krɒsrәud/"],["crouch","蹲伏",8,"n.","/'krautʃ/"],["crude","粗糙的",8,"","/kru:d/"],["cruise","巡航",8,"n.","/kru:z/"],["crumb","面包屑",8,"n.","/krʌm/"],["crusade","十字军",8,"n.","/kru:'seid/"],["crush","压碎",8,"n.","/krʌʃ/"],["crust","外壳",8,"n.","/krʌst/"],["crutch","拐杖",8,"n.","/krʌtʃ/"],["cub","幼兽",8,"n.","/kʌb/"],["cuckoo","布谷鸟",8,"n.","/'kuku:/"],["cuddle","拥抱",8,"n.","/'kʌdl/"],["culminate","达到顶点",8,"vi.","/'kʌlmineit/"],["cultivate","耕作",8,"vt.","/'kʌltiveit/"],["cumbersome","笨重的",8,"","/'kʌmbәsәm/"],["cunning","狡猾的",8,"","/'kʌniŋ/"],["curator","馆长",8,"n.","/kjuә'reitә/"],["curb","抑制",8,"n.","/kә:b/"],["curl","卷发",8,"n.","/kә:l/"],["curriculum","课程",8,"n.","/kә'rikjulәm/"],["curse","诅咒",8,"n.","/kә:s/"],["cursor","光标",8,"n.","/'kә:sә/"],["cutlery","餐具",8,"n.","/'kʌtlәri/"],["cyberspace","网络空间",8,"","/cyberspace/"],["cyclone","旋风",8,"n.","/'saiklәun/"]];


if (typeof window !== "undefined") { window.WORDS = WORDS_CORE; }
