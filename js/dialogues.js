/**
 * 初中英语情景对话库
 * 按7/8/9年级分类，每条对话含主题、图标、中英文对话轮次
 * 字段：id, title(中文标题), emoji(情景图标), gradient(渐变色), grade, rounds(对话轮次数组)
 *   rounds: {en, cn, speaker}  speaker: A 或 B
 */
const DIALOGUES = [
  // ==================== 七年级 ====================
  {
    id: 'g7d1', title: '初次见面打招呼', emoji: '👋', gradient: 'linear-gradient(135deg,#a8edea,#fed6e3)', grade: 7,
    rounds: [
      {speaker:'A', en:"Hello! My name is Tom. What's your name?", cn:"你好！我叫汤姆。你叫什么名字？"},
      {speaker:'B', en:"Hi, Tom! I'm Lily. Nice to meet you.", cn:"嗨，汤姆！我是莉莉。很高兴认识你。"},
      {speaker:'A', en:"Nice to meet you too. Are you a new student here?", cn:"我也很高兴认识你。你是这里的新生吗？"},
      {speaker:'B', en:"Yes, I am. I'm in Class One. How about you?", cn:"是的，我在一班。你呢？"},
      {speaker:'A', en:"I'm in Class One too! We are classmates.", cn:"我也是一班的！我们是同学。"}
    ]
  },
  {
    id: 'g7d2', title: '介绍家庭成员', emoji: '👨‍👩‍👧', gradient: 'linear-gradient(135deg,#ffecd2,#fcb69f)', grade: 7,
    rounds: [
      {speaker:'A', en:"Look, this is a photo of my family.", cn:"看，这是我家的照片。"},
      {speaker:'B', en:"Wow, a nice family! Who is this man?", cn:"哇，幸福的家庭！这个男人是谁？"},
      {speaker:'A', en:"He is my father. He is a doctor.", cn:"他是我爸爸。他是一名医生。"},
      {speaker:'B', en:"And who is the woman next to him?", cn:"那他旁边的女人是谁？"},
      {speaker:'A', en:"She is my mother. She is a teacher.", cn:"她是我妈妈。她是一名老师。"},
      {speaker:'B', en:"Is the little girl your sister?", cn:"那个小女孩是你妹妹吗？"}
    ]
  },
  {
    id: 'g7d3', title: '询问时间与日期', emoji: '🕐', gradient: 'linear-gradient(135deg,#c2e9fb,#a1c4fd)', grade: 7,
    rounds: [
      {speaker:'A', en:"Excuse me, what time is it now?", cn:"打扰一下，现在几点了？"},
      {speaker:'B', en:"It's half past seven. We are late for school.", cn:"七点半了。我们上学迟到了。"},
      {speaker:'A', en:"Oh no! What day is it today?", cn:"糟糕！今天星期几？"},
      {speaker:'B', en:"It's Monday. We have English first.", cn:"星期一。我们第一节是英语。"},
      {speaker:'A', en:"Let's hurry up and go.", cn:"我们快点走吧。"}
    ]
  },
  {
    id: 'g7d4', title: '谈论喜欢的食物', emoji: '🍎', gradient: 'linear-gradient(135deg,#f6d365,#fda085)', grade: 7,
    rounds: [
      {speaker:'A', en:"What's your favorite food, Mike?", cn:"迈克，你最喜欢的食物是什么？"},
      {speaker:'B', en:"I like apples and bananas. What about you?", cn:"我喜欢苹果和香蕉。你呢？"},
      {speaker:'A', en:"I like rice and chicken. Do you like fish?", cn:"我喜欢米饭和鸡肉。你喜欢鱼吗？"},
      {speaker:'B', en:"No, I don't. But I love ice cream!", cn:"不，我不喜欢。但我爱冰淇淋！"},
      {speaker:'A', en:"Me too! Let's get some after school.", cn:"我也是！放学后我们去买吧。"}
    ]
  },
  {
    id: 'g7d5', title: '谈论颜色与衣服', emoji: '👕', gradient: 'linear-gradient(135deg,#84fab0,#8fd3f4)', grade: 7,
    rounds: [
      {speaker:'A', en:"I like your new shirt. What color is it?", cn:"我喜欢你的新衬衫。它是什么颜色？"},
      {speaker:'B', en:"Thank you! It's blue. Blue is my favorite color.", cn:"谢谢！是蓝色的。蓝色是我最喜欢的颜色。"},
      {speaker:'A', en:"My favorite color is red. Look at my shoes.", cn:"我最喜欢的颜色是红色。看我的鞋。"},
      {speaker:'B', en:"Wow, red shoes! They look very nice.", cn:"哇，红色的鞋！看起来很漂亮。"}
    ]
  },
  {
    id: 'g7d6', title: '问路与指路', emoji: '🚶', gradient: 'linear-gradient(135deg,#a8edea,#fed6e3)', grade: 7,
    rounds: [
      {speaker:'A', en:"Excuse me, where is the library?", cn:"打扰一下，图书馆在哪里？"},
      {speaker:'B', en:"Go straight and turn left. It's next to the park.", cn:"直走然后左转。它在公园旁边。"},
      {speaker:'A', en:"Is it far from here?", cn:"离这里远吗？"},
      {speaker:'B', en:"No, it's about five minutes' walk.", cn:"不远，走路大约五分钟。"},
      {speaker:'A', en:"Thank you very much!", cn:"非常感谢！"}
    ]
  },

  // ==================== 八年级 ====================
  {
    id: 'g8d1', title: '邀请朋友周末活动', emoji: '🎯', gradient: 'linear-gradient(135deg,#ffecd2,#fcb69f)', grade: 8,
    rounds: [
      {speaker:'A', en:"Hey, what are you going to do this weekend?", cn:"嘿，这个周末你打算做什么？"},
      {speaker:'B', en:"I'm not sure. Do you have any ideas?", cn:"我不确定。你有什么想法吗？"},
      {speaker:'A', en:"How about going to the cinema? A new movie is on.", cn:"去看电影怎么样？有部新电影在上映。"},
      {speaker:'B', en:"That sounds great! What time shall we meet?", cn:"听起来不错！我们几点见面？"},
      {speaker:'A', en:"Let's meet at three o'clock on Saturday.", cn:"我们周六三点见吧。"},
      {speaker:'B', en:"OK. See you then!", cn:"好的。到时见！"}
    ]
  },
  {
    id: 'g8d2', title: '谈论旅行计划', emoji: '✈️', gradient: 'linear-gradient(135deg,#c2e9fb,#a1c4fd)', grade: 8,
    rounds: [
      {speaker:'A', en:"Have you ever been to Beijing, Anna?", cn:"安娜，你去过北京吗？"},
      {speaker:'B', en:"Yes, I went there last summer. It was amazing!", cn:"是的，我去年夏天去的。太棒了！"},
      {speaker:'A', en:"What did you do there?", cn:"你在那里做了什么？"},
      {speaker:'B', en:"I visited the Great Wall and ate Peking duck.", cn:"我参观了长城，吃了北京烤鸭。"},
      {speaker:'A', en:"I'm planning to go there this winter.", cn:"我打算今年冬天去。"},
      {speaker:'B', en:"You'll love it! Let me know if you need help.", cn:"你会喜欢的！需要帮助告诉我。"}
    ]
  },
  {
    id: 'g8d3', title: '在餐厅点餐', emoji: '🍽️', gradient: 'linear-gradient(135deg,#f6d365,#fda085)', grade: 8,
    rounds: [
      {speaker:'A', en:"Good evening. Are you ready to order?", cn:"晚上好。您准备好点餐了吗？"},
      {speaker:'B', en:"Yes. I'd like a beef burger and a glass of orange juice.", cn:"是的。我想要一个牛肉汉堡和一杯橙汁。"},
      {speaker:'A', en:"Would you like some fries with that?", cn:"要配薯条吗？"},
      {speaker:'B', en:"Yes, please. How much is it altogether?", cn:"好的。一共多少钱？"},
      {speaker:'A', en:"It's thirty-five yuan. Anything else?", cn:"三十五元。还要别的吗？"},
      {speaker:'B', en:"No, thanks. That's all.", cn:"不用了，谢谢。就这些。"}
    ]
  },
  {
    id: 'g8d4', title: '看医生描述症状', emoji: '🏥', gradient: 'linear-gradient(135deg,#84fab0,#8fd3f4)', grade: 8,
    rounds: [
      {speaker:'A', en:"What's the matter with you, young man?", cn:"小伙子，你怎么了？"},
      {speaker:'B', en:"I have a headache and a fever, doctor.", cn:"医生，我头疼还发烧。"},
      {speaker:'A', en:"How long have you been like this?", cn:"这样多久了？"},
      {speaker:'B', en:"Since yesterday morning. I didn't sleep well.", cn:"从昨天早上开始。我没睡好。"},
      {speaker:'A', en:"Don't worry. Take this medicine and rest.", cn:"别担心。吃这个药，多休息。"},
      {speaker:'B', en:"Thank you, doctor. I will.", cn:"谢谢您，医生。我会的。"}
    ]
  },
  {
    id: 'g8d5', title: '谈论兴趣爱好', emoji: '🎸', gradient: 'linear-gradient(135deg,#a8edea,#fed6e3)', grade: 8,
    rounds: [
      {speaker:'A', en:"What do you usually do in your free time?", cn:"你空闲时间通常做什么？"},
      {speaker:'B', en:"I enjoy playing the guitar and reading books.", cn:"我喜欢弹吉他和看书。"},
      {speaker:'A', en:"That's cool! How long have you played the guitar?", cn:"真酷！你弹吉他多久了？"},
      {speaker:'B', en:"For about three years. Do you play any instruments?", cn:"大约三年了。你会乐器吗？"},
      {speaker:'A', en:"I play the piano. We should play together sometime.", cn:"我弹钢琴。我们应该找个时间一起演奏。"}
    ]
  },
  {
    id: 'g8d6', title: '商场购物砍价', emoji: '🛍️', gradient: 'linear-gradient(135deg,#ffecd2,#fcb69f)', grade: 8,
    rounds: [
      {speaker:'A', en:"Can I help you? What are you looking for?", cn:"需要帮忙吗？您在找什么？"},
      {speaker:'B', en:"I'm looking for a pair of sports shoes.", cn:"我在找一双运动鞋。"},
      {speaker:'A', en:"What size do you wear?", cn:"您穿多大码？"},
      {speaker:'B', en:"Size 40. How much is this pair?", cn:"40码。这双多少钱？"},
      {speaker:'A', en:"It's two hundred yuan. It's on sale today.", cn:"两百元。今天打折。"},
      {speaker:'B', en:"Great! I'll take it.", cn:"太好了！我要了。"}
    ]
  },

  // ==================== 九年级 ====================
  {
    id: 'g9d1', title: '谈论未来梦想', emoji: '🌟', gradient: 'linear-gradient(135deg,#667eea,#764ba2)', grade: 9,
    rounds: [
      {speaker:'A', en:"What do you want to be when you grow up?", cn:"你长大后想做什么？"},
      {speaker:'B', en:"I want to be a scientist because I love discovering new things.", cn:"我想当科学家，因为我喜欢发现新事物。"},
      {speaker:'A', en:"That sounds wonderful! Have you decided your major?", cn:"听起来很棒！你决定专业了吗？"},
      {speaker:'B', en:"Not yet, but I'm interested in biology. What about you?", cn:"还没有，但我对生物感兴趣。你呢？"},
      {speaker:'A', en:"I dream of becoming a teacher to help children.", cn:"我梦想当老师帮助孩子们。"},
      {speaker:'B', en:"I'm sure you will be a great teacher!", cn:"我相信你会成为一位好老师！"}
    ]
  },
  {
    id: 'g9d2', title: '讨论环境保护', emoji: '🌱', gradient: 'linear-gradient(135deg,#84fab0,#8fd3f4)', grade: 9,
    rounds: [
      {speaker:'A', en:"Have you heard about the new recycling program?", cn:"你听说新的回收计划了吗？"},
      {speaker:'B', en:"Yes, I think it's really important to protect our environment.", cn:"是的，我觉得保护环境很重要。"},
      {speaker:'A', en:"What can we do to help in our daily life?", cn:"我们在日常生活中能做什么？"},
      {speaker:'B', en:"We can reduce plastic use and save water and electricity.", cn:"我们可以减少塑料使用，节约水电。"},
      {speaker:'A', en:"That's true. I've started using a cloth bag.", cn:"没错。我已经开始用布袋了。"},
      {speaker:'B', en:"Good idea! Small actions can make a big difference.", cn:"好主意！小行动能带来大改变。"}
    ]
  },
  {
    id: 'g9d3', title: '面试与自我介绍', emoji: '💼', gradient: 'linear-gradient(135deg,#f6d365,#fda085)', grade: 9,
    rounds: [
      {speaker:'A', en:"Good morning. Please introduce yourself.", cn:"早上好。请介绍一下你自己。"},
      {speaker:'B', en:"Good morning. My name is Li Hua. I'm a hard-working student.", cn:"早上好。我叫李华。我是一个努力的学生。"},
      {speaker:'A', en:"Why do you want to join our club?", cn:"你为什么想加入我们社团？"},
      {speaker:'B', en:"Because I want to improve my English and make new friends.", cn:"因为我想提高英语，结交新朋友。"},
      {speaker:'A', en:"What are your strengths?", cn:"你的优点是什么？"},
      {speaker:'B', en:"I'm good at communicating and working in a team.", cn:"我擅长沟通和团队合作。"}
    ]
  },
  {
    id: 'g9d4', title: '学校生活烦恼倾诉', emoji: '💭', gradient: 'linear-gradient(135deg,#a8edea,#fed6e3)', grade: 9,
    rounds: [
      {speaker:'A', en:"You look worried. What's wrong?", cn:"你看起来很烦恼。怎么了？"},
      {speaker:'B', en:"I failed my math test again. I feel so upset.", cn:"我数学考试又没及格。我很沮丧。"},
      {speaker:'A', en:"Don't give up. Failure is the mother of success.", cn:"别放弃。失败是成功之母。"},
      {speaker:'B', en:"But I've tried hard. I just don't understand it.", cn:"但我已经很努力了。我就是不懂。"},
      {speaker:'A', en:"Maybe you need a new way to study. I can help you.", cn:"也许你需要新的学习方法。我可以帮你。"},
      {speaker:'B', en:"Thank you! That means a lot to me.", cn:"谢谢你！这对我意义很大。"}
    ]
  },
  {
    id: 'g9d5', title: '邀请朋友参加生日聚会', emoji: '🎂', gradient: 'linear-gradient(135deg,#ffecd2,#fcb69f)', grade: 9,
    rounds: [
      {speaker:'A', en:"Hi Sam, are you free this Saturday evening?", cn:"嗨，山姆，你这周六晚上有空吗？"},
      {speaker:'B', en:"Let me check. Yes, I think I am. Why?", cn:"我看看。是的，我有空。怎么了？"},
      {speaker:'A', en:"I'm having a birthday party at my house. Would you like to come?", cn:"我要在家里办生日聚会。你想来吗？"},
      {speaker:'B', en:"I'd love to! What time does it start?", cn:"我很想去！几点开始？"},
      {speaker:'A', en:"At six o'clock. Don't forget to bring a small gift.", cn:"六点。别忘了带个小礼物。"},
      {speaker:'B', en:"Sure! I'm looking forward to it.", cn:"当然！我很期待。"}
    ]
  },
  {
    id: 'g9d6', title: '科技与未来生活', emoji: '🤖', gradient: 'linear-gradient(135deg,#c2e9fb,#a1c4fd)', grade: 9,
    rounds: [
      {speaker:'A', en:"What do you think life will be like in the future?", cn:"你认为未来生活会怎样？"},
      {speaker:'B', en:"I think robots will do most of the work for us.", cn:"我觉得机器人会替我们做大部分工作。"},
      {speaker:'A', en:"Will students still go to school?", cn:"学生还会去学校吗？"},
      {speaker:'B', en:"Maybe not. They might study at home online.", cn:"可能不会。他们可能在家上网学习。"},
      {speaker:'A', en:"That sounds convenient but also a bit lonely.", cn:"听起来方便但有点孤独。"},
      {speaker:'B', en:"I agree. Technology changes everything.", cn:"我同意。科技改变一切。"}
    ]
  }
];

if (typeof window !== 'undefined') {
  window.DIALOGUES = DIALOGUES;
}
