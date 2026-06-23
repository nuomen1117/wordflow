const WORD_BANK = [
  { word: "abandon", phonetic: "/əˈbændən/", meaning: "放弃；抛弃", example: "Never abandon your goal halfway.", exampleCn: "不要半途放弃你的目标。", tag: "核心" },
  { word: "ability", phonetic: "/əˈbɪləti/", meaning: "能力；才能", example: "Practice improves your ability.", exampleCn: "练习会提升你的能力。", tag: "基础" },
  { word: "absorb", phonetic: "/əbˈzɔːrb/", meaning: "吸收；理解", example: "Plants absorb sunlight.", exampleCn: "植物吸收阳光。", tag: "核心" },
  { word: "accurate", phonetic: "/ˈækjərət/", meaning: "准确的；精确的", example: "The report is accurate.", exampleCn: "这份报告是准确的。", tag: "写作" },
  { word: "achieve", phonetic: "/əˈtʃiːv/", meaning: "实现；达到", example: "She achieved her dream.", exampleCn: "她实现了自己的梦想。", tag: "核心" },
  { word: "adapt", phonetic: "/əˈdæpt/", meaning: "适应；改编", example: "We must adapt to change.", exampleCn: "我们必须适应变化。", tag: "核心" },
  { word: "adequate", phonetic: "/ˈædɪkwət/", meaning: "足够的；合格的", example: "The room has adequate light.", exampleCn: "这个房间光线充足。", tag: "进阶" },
  { word: "advantage", phonetic: "/ədˈvæntɪdʒ/", meaning: "优势；有利条件", example: "Speed is his advantage.", exampleCn: "速度是他的优势。", tag: "基础" },
  { word: "affect", phonetic: "/əˈfekt/", meaning: "影响", example: "Sleep can affect memory.", exampleCn: "睡眠会影响记忆。", tag: "核心" },
  { word: "analyze", phonetic: "/ˈænəlaɪz/", meaning: "分析", example: "Analyze the problem first.", exampleCn: "先分析问题。", tag: "学术" },
  { word: "approach", phonetic: "/əˈproʊtʃ/", meaning: "方法；接近", example: "This approach is simple.", exampleCn: "这个方法很简单。", tag: "写作" },
  { word: "arrange", phonetic: "/əˈreɪndʒ/", meaning: "安排；整理", example: "Arrange your time carefully.", exampleCn: "认真安排你的时间。", tag: "基础" },
  { word: "assume", phonetic: "/əˈsuːm/", meaning: "假设；认为", example: "Do not assume it is easy.", exampleCn: "不要假定它很简单。", tag: "写作" },
  { word: "attempt", phonetic: "/əˈtempt/", meaning: "尝试；企图", example: "He made another attempt.", exampleCn: "他又做了一次尝试。", tag: "核心" },
  { word: "available", phonetic: "/əˈveɪləbl/", meaning: "可获得的；有空的", example: "Tickets are still available.", exampleCn: "票仍然可以买到。", tag: "高频" },
  { word: "benefit", phonetic: "/ˈbenɪfɪt/", meaning: "益处；使受益", example: "Reading benefits your mind.", exampleCn: "阅读有益于思维。", tag: "基础" },
  { word: "brief", phonetic: "/briːf/", meaning: "简短的；摘要", example: "Give me a brief answer.", exampleCn: "给我一个简短回答。", tag: "写作" },
  { word: "capable", phonetic: "/ˈkeɪpəbl/", meaning: "有能力的", example: "You are capable of more.", exampleCn: "你有能力做到更多。", tag: "核心" },
  { word: "challenge", phonetic: "/ˈtʃælɪndʒ/", meaning: "挑战；质疑", example: "The task is a challenge.", exampleCn: "这个任务是一个挑战。", tag: "基础" },
  { word: "combine", phonetic: "/kəmˈbaɪn/", meaning: "结合；联合", example: "Combine theory with practice.", exampleCn: "把理论和实践结合起来。", tag: "写作" },
  { word: "complex", phonetic: "/ˈkɑːmpleks/", meaning: "复杂的", example: "The system is complex.", exampleCn: "这个系统很复杂。", tag: "学术" },
  { word: "concern", phonetic: "/kənˈsɜːrn/", meaning: "担心；涉及", example: "This issue concerns everyone.", exampleCn: "这个问题涉及每个人。", tag: "核心" },
  { word: "conduct", phonetic: "/kənˈdʌkt/", meaning: "进行；实施", example: "They conducted a survey.", exampleCn: "他们进行了一项调查。", tag: "学术" },
  { word: "confirm", phonetic: "/kənˈfɜːrm/", meaning: "确认；证实", example: "Please confirm the time.", exampleCn: "请确认时间。", tag: "高频" },
  { word: "consequence", phonetic: "/ˈkɑːnsɪkwens/", meaning: "结果；后果", example: "Every choice has consequences.", exampleCn: "每个选择都有后果。", tag: "进阶" },
  { word: "consider", phonetic: "/kənˈsɪdər/", meaning: "考虑；认为", example: "Consider all possible risks.", exampleCn: "考虑所有可能的风险。", tag: "高频" },
  { word: "constant", phonetic: "/ˈkɑːnstənt/", meaning: "持续的；不断的", example: "Constant practice matters.", exampleCn: "持续练习很重要。", tag: "核心" },
  { word: "construct", phonetic: "/kənˈstrʌkt/", meaning: "建造；构建", example: "They constructed a bridge.", exampleCn: "他们建造了一座桥。", tag: "学术" },
  { word: "context", phonetic: "/ˈkɑːntekst/", meaning: "背景；语境", example: "Understand words in context.", exampleCn: "在语境中理解单词。", tag: "学术" },
  { word: "contrast", phonetic: "/ˈkɑːntræst/", meaning: "对比；差异", example: "There is a clear contrast.", exampleCn: "这里有明显的对比。", tag: "写作" },
  { word: "contribute", phonetic: "/kənˈtrɪbjuːt/", meaning: "贡献；促成", example: "Exercise contributes to health.", exampleCn: "运动有助于健康。", tag: "写作" },
  { word: "crucial", phonetic: "/ˈkruːʃl/", meaning: "关键的；至关重要的", example: "Timing is crucial.", exampleCn: "时机很关键。", tag: "核心" },
  { word: "decline", phonetic: "/dɪˈklaɪn/", meaning: "下降；拒绝", example: "Sales began to decline.", exampleCn: "销量开始下降。", tag: "进阶" },
  { word: "define", phonetic: "/dɪˈfaɪn/", meaning: "定义；界定", example: "Define the key terms.", exampleCn: "定义关键术语。", tag: "学术" },
  { word: "demonstrate", phonetic: "/ˈdemənstreɪt/", meaning: "证明；展示", example: "The data demonstrates a trend.", exampleCn: "数据展示了一种趋势。", tag: "学术" },
  { word: "depend", phonetic: "/dɪˈpend/", meaning: "依靠；取决于", example: "Success depends on effort.", exampleCn: "成功取决于努力。", tag: "高频" },
  { word: "derive", phonetic: "/dɪˈraɪv/", meaning: "获得；源于", example: "The word derives from Latin.", exampleCn: "这个词源于拉丁语。", tag: "进阶" },
  { word: "determine", phonetic: "/dɪˈtɜːrmɪn/", meaning: "决定；确定", example: "Habits determine results.", exampleCn: "习惯决定结果。", tag: "核心" },
  { word: "develop", phonetic: "/dɪˈveləp/", meaning: "发展；开发", example: "Develop a useful skill.", exampleCn: "培养一项有用技能。", tag: "基础" },
  { word: "efficient", phonetic: "/ɪˈfɪʃnt/", meaning: "高效的", example: "This is an efficient method.", exampleCn: "这是一种高效方法。", tag: "写作" },
  { word: "emerge", phonetic: "/ɪˈmɜːrdʒ/", meaning: "出现；显现", example: "New problems emerged.", exampleCn: "新的问题出现了。", tag: "进阶" },
  { word: "emphasize", phonetic: "/ˈemfəsaɪz/", meaning: "强调", example: "The teacher emphasized review.", exampleCn: "老师强调了复习。", tag: "写作" },
  { word: "enable", phonetic: "/ɪˈneɪbl/", meaning: "使能够", example: "Technology enables communication.", exampleCn: "技术使交流成为可能。", tag: "学术" },
  { word: "encounter", phonetic: "/ɪnˈkaʊntər/", meaning: "遇到；遭遇", example: "We encountered a problem.", exampleCn: "我们遇到了一个问题。", tag: "核心" },
  { word: "enhance", phonetic: "/ɪnˈhæns/", meaning: "提高；增强", example: "Reading enhances vocabulary.", exampleCn: "阅读能扩大词汇量。", tag: "写作" },
  { word: "essential", phonetic: "/ɪˈsenʃl/", meaning: "必要的；本质的", example: "Sleep is essential for health.", exampleCn: "睡眠对健康必不可少。", tag: "核心" },
  { word: "evaluate", phonetic: "/ɪˈvæljueɪt/", meaning: "评价；评估", example: "Evaluate your progress weekly.", exampleCn: "每周评估你的进步。", tag: "学术" },
  { word: "evidence", phonetic: "/ˈevɪdəns/", meaning: "证据", example: "There is no clear evidence.", exampleCn: "没有明确证据。", tag: "学术" },
  { word: "expand", phonetic: "/ɪkˈspænd/", meaning: "扩大；扩展", example: "Expand your vocabulary.", exampleCn: "扩大你的词汇量。", tag: "基础" },
  { word: "factor", phonetic: "/ˈfæktər/", meaning: "因素", example: "Time is an important factor.", exampleCn: "时间是一个重要因素。", tag: "高频" },
  { word: "feature", phonetic: "/ˈfiːtʃər/", meaning: "特点；功能", example: "The app has useful features.", exampleCn: "这个应用有实用功能。", tag: "高频" },
  { word: "focus", phonetic: "/ˈfoʊkəs/", meaning: "集中；焦点", example: "Focus on one task.", exampleCn: "专注于一项任务。", tag: "基础" },
  { word: "generate", phonetic: "/ˈdʒenəreɪt/", meaning: "产生；生成", example: "The tool generates reports.", exampleCn: "这个工具生成报告。", tag: "学术" },
  { word: "identify", phonetic: "/aɪˈdentɪfaɪ/", meaning: "识别；确认", example: "Identify your weak points.", exampleCn: "找出你的薄弱点。", tag: "学术" },
  { word: "ignore", phonetic: "/ɪɡˈnɔːr/", meaning: "忽视", example: "Do not ignore small mistakes.", exampleCn: "不要忽视小错误。", tag: "核心" },
  { word: "impact", phonetic: "/ˈɪmpækt/", meaning: "影响；冲击", example: "The policy had a strong impact.", exampleCn: "这项政策产生了强烈影响。", tag: "写作" },
  { word: "improve", phonetic: "/ɪmˈpruːv/", meaning: "提高；改善", example: "Review can improve memory.", exampleCn: "复习可以改善记忆。", tag: "基础" },
  { word: "include", phonetic: "/ɪnˈkluːd/", meaning: "包括", example: "The plan includes three parts.", exampleCn: "这个计划包括三个部分。", tag: "基础" },
  { word: "indicate", phonetic: "/ˈɪndɪkeɪt/", meaning: "表明；指示", example: "The results indicate progress.", exampleCn: "结果表明有进步。", tag: "学术" },
  { word: "influence", phonetic: "/ˈɪnfluəns/", meaning: "影响；影响力", example: "Friends can influence habits.", exampleCn: "朋友会影响习惯。", tag: "核心" },
  { word: "initial", phonetic: "/ɪˈnɪʃl/", meaning: "最初的；初始的", example: "The initial result was positive.", exampleCn: "初始结果是积极的。", tag: "进阶" },
  { word: "maintain", phonetic: "/meɪnˈteɪn/", meaning: "维持；保持", example: "Maintain a steady pace.", exampleCn: "保持稳定节奏。", tag: "核心" },
  { word: "method", phonetic: "/ˈmeθəd/", meaning: "方法", example: "Choose a suitable method.", exampleCn: "选择合适的方法。", tag: "基础" },
  { word: "obtain", phonetic: "/əbˈteɪn/", meaning: "获得", example: "He obtained useful data.", exampleCn: "他获得了有用数据。", tag: "学术" },
  { word: "participate", phonetic: "/pɑːrˈtɪsɪpeɪt/", meaning: "参加；参与", example: "Students participate in class.", exampleCn: "学生参与课堂。", tag: "核心" },
  { word: "perform", phonetic: "/pərˈfɔːrm/", meaning: "执行；表现", example: "The system performs well.", exampleCn: "这个系统表现良好。", tag: "高频" },
  { word: "potential", phonetic: "/pəˈtenʃl/", meaning: "潜在的；潜力", example: "The idea has potential.", exampleCn: "这个想法有潜力。", tag: "核心" },
  { word: "previous", phonetic: "/ˈpriːviəs/", meaning: "以前的；先前的", example: "Review the previous lesson.", exampleCn: "复习上一课。", tag: "基础" },
  { word: "process", phonetic: "/ˈprɑːses/", meaning: "过程；处理", example: "Learning is a process.", exampleCn: "学习是一个过程。", tag: "高频" },
  { word: "require", phonetic: "/rɪˈkwaɪər/", meaning: "需要；要求", example: "This job requires patience.", exampleCn: "这份工作需要耐心。", tag: "核心" },
  { word: "resource", phonetic: "/ˈriːsɔːrs/", meaning: "资源", example: "Use online resources wisely.", exampleCn: "明智地使用网络资源。", tag: "高频" },
  { word: "respond", phonetic: "/rɪˈspɑːnd/", meaning: "回应；响应", example: "He responded quickly.", exampleCn: "他回应得很快。", tag: "基础" },
  { word: "significant", phonetic: "/sɪɡˈnɪfɪkənt/", meaning: "重要的；显著的", example: "There was significant growth.", exampleCn: "出现了显著增长。", tag: "写作" },
  { word: "specific", phonetic: "/spəˈsɪfɪk/", meaning: "具体的；特定的", example: "Give me a specific example.", exampleCn: "给我一个具体例子。", tag: "高频" },
  { word: "strategy", phonetic: "/ˈstrætədʒi/", meaning: "策略", example: "A clear strategy helps.", exampleCn: "清晰的策略有帮助。", tag: "核心" },
  { word: "structure", phonetic: "/ˈstrʌktʃər/", meaning: "结构", example: "The essay has a clear structure.", exampleCn: "这篇文章结构清晰。", tag: "写作" },
  { word: "sufficient", phonetic: "/səˈfɪʃnt/", meaning: "足够的", example: "We have sufficient time.", exampleCn: "我们有足够的时间。", tag: "进阶" },
  { word: "temporary", phonetic: "/ˈtempəreri/", meaning: "临时的；暂时的", example: "This is a temporary solution.", exampleCn: "这是一个临时方案。", tag: "进阶" },
  { word: "transfer", phonetic: "/trænsˈfɜːr/", meaning: "转移；转让", example: "Transfer the file to your phone.", exampleCn: "把文件传到你的手机上。", tag: "高频" },
  { word: "typical", phonetic: "/ˈtɪpɪkl/", meaning: "典型的", example: "This is a typical mistake.", exampleCn: "这是一个典型错误。", tag: "基础" },
  { word: "unique", phonetic: "/juˈniːk/", meaning: "独特的；唯一的", example: "Everyone has unique strengths.", exampleCn: "每个人都有独特优势。", tag: "基础" },
  { word: "valid", phonetic: "/ˈvælɪd/", meaning: "有效的；合理的", example: "Your point is valid.", exampleCn: "你的观点是合理的。", tag: "写作" },
  { word: "various", phonetic: "/ˈveriəs/", meaning: "各种各样的", example: "There are various reasons.", exampleCn: "有各种各样的原因。", tag: "基础" }
];

const STORAGE_KEY = 'wordflow-state-v1';
const todayKey = () => new Date().toISOString().slice(0, 10);
const now = () => Date.now();

const defaultState = () => ({
  dailyGoal: 30,
  learnedToday: 0,
  reviewedToday: 0,
  lastStudyDate: todayKey(),
  streak: 0,
  totalLearned: 0,
  quizCorrect: 0,
  quizTotal: 0,
  dark: true,
  records: {}
});

let state = loadState();
let currentStudyWord = null;
let quizSet = [];
let quizPos = 0;
let quizScore = 0;
let spellWord = null;

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const data = raw ? JSON.parse(raw) : defaultState();
    const merged = { ...defaultState(), ...data, records: data.records || {} };
    ensureDate(merged);
    return merged;
  } catch (error) {
    return defaultState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function ensureDate(target = state) {
  const today = todayKey();
  if (target.lastStudyDate !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yKey = yesterday.toISOString().slice(0, 10);
    target.streak = target.lastStudyDate === yKey && target.learnedToday > 0 ? target.streak + 1 : 0;
    target.learnedToday = 0;
    target.reviewedToday = 0;
    target.lastStudyDate = today;
  }
}

function recordOf(word) {
  if (!state.records[word]) {
    state.records[word] = {
      level: 0,
      interval: 0,
      due: 0,
      correct: 0,
      wrong: 0,
      favorite: false,
      last: null
    };
  }
  return state.records[word];
}

function wordByText(text) {
  return WORD_BANK.find(item => item.word === text);
}

function dueWords() {
  const t = now();
  return WORD_BANK.filter(item => recordOf(item.word).due <= t);
}

function masteredWords() {
  return WORD_BANK.filter(item => recordOf(item.word).level >= 4);
}

function wrongWords() {
  return WORD_BANK.filter(item => recordOf(item.word).wrong > 0);
}

function favoriteWords() {
  return WORD_BANK.filter(item => recordOf(item.word).favorite);
}

function shuffle(list) {
  return [...list].sort(() => Math.random() - 0.5);
}

function pickStudyWord() {
  const due = dueWords();
  const pool = due.length ? due : WORD_BANK;
  currentStudyWord = shuffle(pool)[0];
  renderCard();
}

function renderCard() {
  if (!currentStudyWord) return;
  const item = currentStudyWord;
  const rec = recordOf(item.word);
  byId('cardTag').textContent = item.tag;
  byId('cardWord').textContent = item.word;
  byId('cardPhonetic').textContent = item.phonetic;
  byId('cardMeaning').textContent = item.meaning;
  byId('cardExample').textContent = item.example;
  byId('cardExampleCn').textContent = item.exampleCn;
  byId('favoriteBtn').textContent = rec.favorite ? '★' : '☆';
}

function applyStudyResult(type) {
  if (!currentStudyWord) return;
  const rec = recordOf(currentStudyWord.word);
  const intervals = [1, 3, 7, 15, 30, 60];
  state.learnedToday += 1;
  state.reviewedToday += 1;
  state.totalLearned += 1;
  if (state.streak === 0) state.streak = 1;
  if (type === 'forgot') {
    rec.level = 0;
    rec.interval = 1;
    rec.wrong += 1;
    rec.due = now() + 24 * 60 * 60 * 1000;
    rec.last = 'forgot';
    toast('已加入错词，明天复习');
  } else if (type === 'vague') {
    rec.level = Math.max(0, rec.level - 1);
    rec.interval = 1;
    rec.due = now() + 24 * 60 * 60 * 1000;
    rec.last = 'vague';
    toast('标记为模糊，明天复习');
  } else {
    rec.correct += 1;
    rec.level = Math.min(5, rec.level + 1);
    rec.interval = intervals[rec.level] || 60;
    rec.due = now() + rec.interval * 24 * 60 * 60 * 1000;
    rec.last = 'known';
    toast(`下次复习：${rec.interval} 天后`);
  }
  saveState();
  pickStudyWord();
  updateHome();
  renderWordList();
}

function startQuiz() {
  quizSet = shuffle(WORD_BANK).slice(0, 10);
  quizPos = 0;
  quizScore = 0;
  renderQuiz();
}

function renderQuiz() {
  const item = quizSet[quizPos];
  if (!item) {
    byId('quizWord').textContent = '完成';
    byId('quizOptions').innerHTML = '';
    byId('quizIndex').textContent = '10/10';
    byId('quizScore').textContent = `得分 ${quizScore}`;
    byId('quizFeedback').textContent = `本轮正确 ${quizScore}/10。`;
    updateHome();
    return;
  }
  byId('quizIndex').textContent = `${quizPos + 1}/10`;
  byId('quizScore').textContent = `得分 ${quizScore}`;
  byId('quizWord').textContent = item.word;
  byId('quizFeedback').textContent = '';
  const wrong = shuffle(WORD_BANK.filter(w => w.word !== item.word)).slice(0, 3);
  const options = shuffle([item, ...wrong]);
  byId('quizOptions').innerHTML = options.map(opt => `<button class="option" data-word="${opt.word}">${opt.meaning}</button>`).join('');
}

function answerQuiz(selectedWord) {
  const current = quizSet[quizPos];
  if (!current) return;
  const buttons = [...document.querySelectorAll('.option')];
  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.word === current.word) btn.classList.add('correct');
    if (btn.dataset.word === selectedWord && selectedWord !== current.word) btn.classList.add('wrong');
  });
  state.quizTotal += 1;
  if (selectedWord === current.word) {
    quizScore += 1;
    state.quizCorrect += 1;
    recordOf(current.word).correct += 1;
    byId('quizFeedback').textContent = '正确。';
  } else {
    recordOf(current.word).wrong += 1;
    byId('quizFeedback').textContent = `错误。正确释义：${current.meaning}`;
  }
  saveState();
  setTimeout(() => {
    quizPos += 1;
    renderQuiz();
    updateHome();
  }, 760);
}

function nextSpell() {
  const pool = wrongWords().length ? [...wrongWords(), ...dueWords()] : WORD_BANK;
  spellWord = shuffle(pool)[0];
  byId('spellTag').textContent = spellWord.tag;
  byId('spellMeaning').textContent = spellWord.meaning;
  byId('spellExampleCn').textContent = spellWord.exampleCn;
  byId('spellInput').value = '';
  byId('spellFeedback').textContent = '';
  byId('spellInput').focus();
}

function checkSpell() {
  if (!spellWord) return;
  const value = byId('spellInput').value.trim().toLowerCase();
  const answer = spellWord.word.toLowerCase();
  state.quizTotal += 1;
  if (value === answer) {
    state.quizCorrect += 1;
    recordOf(spellWord.word).correct += 1;
    byId('spellFeedback').textContent = `正确：${spellWord.word}，${spellWord.example}`;
    toast('拼写正确');
    saveState();
    setTimeout(nextSpell, 900);
  } else {
    recordOf(spellWord.word).wrong += 1;
    byId('spellFeedback').textContent = `不对。正确答案：${spellWord.word}。例句：${spellWord.example}`;
    saveState();
    updateHome();
  }
}

function giveHint() {
  if (!spellWord) return;
  const w = spellWord.word;
  const hint = w[0] + ' _ '.repeat(Math.max(0, w.length - 2)) + (w.length > 1 ? w[w.length - 1] : '');
  byId('spellFeedback').textContent = `提示：${hint}`;
}

function renderWordList() {
  const keyword = byId('searchInput')?.value.trim().toLowerCase() || '';
  const filter = byId('filterSelect')?.value || 'all';
  let list = WORD_BANK.filter(item => {
    const rec = recordOf(item.word);
    const text = `${item.word} ${item.meaning} ${item.tag}`.toLowerCase();
    const okKeyword = !keyword || text.includes(keyword);
    const okFilter =
      filter === 'all' ||
      (filter === 'due' && rec.due <= now()) ||
      (filter === 'wrong' && rec.wrong > 0) ||
      (filter === 'favorite' && rec.favorite) ||
      (filter === 'mastered' && rec.level >= 4);
    return okKeyword && okFilter;
  });
  const box = byId('wordList');
  if (!box) return;
  if (!list.length) {
    box.innerHTML = '<div class="word-item"><p>没有匹配的单词。</p></div>';
    return;
  }
  box.innerHTML = list.map(item => {
    const rec = recordOf(item.word);
    const dueText = rec.due <= now() ? '待复习' : `${Math.ceil((rec.due - now()) / 86400000)}天后`;
    return `
      <article class="word-item">
        <div class="word-item-top">
          <div>
            <h3>${item.word}</h3>
            <p>${item.phonetic} · ${item.meaning}</p>
          </div>
          <button class="secondary fav-small" data-fav="${item.word}">${rec.favorite ? '★' : '☆'}</button>
        </div>
        <p>${item.example}</p>
        <div class="word-mini">
          <span>${item.tag}</span>
          <span>等级 ${rec.level}</span>
          <span>错 ${rec.wrong}</span>
          <span>${dueText}</span>
        </div>
      </article>
    `;
  }).join('');
}

function updateHome() {
  ensureDate();
  const goal = Math.max(1, Number(state.dailyGoal) || 30);
  const learned = state.learnedToday;
  const percent = Math.min(100, Math.round((learned / goal) * 100));
  setText('todayLearned', learned);
  setText('dailyGoal', goal);
  setText('progressPercent', `${percent}%`);
  byId('progressRing').style.background = `conic-gradient(var(--primary) ${percent * 3.6}deg, rgba(255,255,255,0.14) 0deg)`;
  setText('streakText', `连续学习 ${state.streak || 0} 天`);
  setText('dueBadge', `${dueWords().length} 个待复习`);
  setText('masteredCount', masteredWords().length);
  setText('wrongCount', wrongWords().length);
  setText('favoriteCount', favoriteWords().length);
  setText('totalLearned', state.totalLearned);
  const accuracy = state.quizTotal ? Math.round((state.quizCorrect / state.quizTotal) * 100) : 0;
  setText('accuracyRate', `${accuracy}%`);
  setText('reviewedToday', state.reviewedToday);
  setText('wordTotal', WORD_BANK.length);
  if (byId('goalInput')) byId('goalInput').value = state.dailyGoal;
  document.body.classList.toggle('light', !state.dark);
}

function navigate(name) {
  document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
  byId(`view-${name}`).classList.add('active');
  document.querySelectorAll('[data-nav]').forEach(btn => btn.classList.toggle('active', btn.dataset.nav === name));
  if (name === 'learn' && !currentStudyWord) pickStudyWord();
  if (name === 'quiz' && !quizSet.length) startQuiz();
  if (name === 'spell' && !spellWord) nextSpell();
  if (name === 'book') renderWordList();
  if (name === 'stats') updateHome();
}

function toggleFavorite(word) {
  const rec = recordOf(word);
  rec.favorite = !rec.favorite;
  saveState();
  if (currentStudyWord?.word === word) renderCard();
  renderWordList();
  updateHome();
}

function exportData() {
  const payload = {
    app: 'WordFlow',
    version: 1,
    exportedAt: new Date().toISOString(),
    state
  };
  byId('dataBox').value = JSON.stringify(payload, null, 2);
  toast('数据已导出到文本框');
}

function importData() {
  try {
    const payload = JSON.parse(byId('dataBox').value);
    const next = payload.state || payload;
    state = { ...defaultState(), ...next, records: next.records || {} };
    ensureDate();
    saveState();
    updateHome();
    renderWordList();
    toast('导入成功');
  } catch (error) {
    toast('导入失败：JSON 格式不正确');
  }
}

function resetData() {
  if (!confirm('确定清空所有学习记录吗？词库不会删除。')) return;
  state = defaultState();
  saveState();
  currentStudyWord = null;
  quizSet = [];
  spellWord = null;
  updateHome();
  pickStudyWord();
  startQuiz();
  nextSpell();
  renderWordList();
  toast('学习记录已清空');
}

function byId(id) { return document.getElementById(id); }
function setText(id, text) { const el = byId(id); if (el) el.textContent = text; }

let toastTimer = null;
function toast(message) {
  const el = byId('toast');
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 1600);
}

function bindEvents() {
  document.querySelectorAll('[data-nav]').forEach(btn => btn.addEventListener('click', () => navigate(btn.dataset.nav)));
  byId('shuffleBtn').addEventListener('click', pickStudyWord);
  byId('forgotBtn').addEventListener('click', () => applyStudyResult('forgot'));
  byId('vagueBtn').addEventListener('click', () => applyStudyResult('vague'));
  byId('knownBtn').addEventListener('click', () => applyStudyResult('known'));
  byId('favoriteBtn').addEventListener('click', () => currentStudyWord && toggleFavorite(currentStudyWord.word));
  byId('restartQuizBtn').addEventListener('click', startQuiz);
  byId('quizOptions').addEventListener('click', event => {
    const btn = event.target.closest('.option');
    if (btn) answerQuiz(btn.dataset.word);
  });
  byId('restartSpellBtn').addEventListener('click', nextSpell);
  byId('spellHintBtn').addEventListener('click', giveHint);
  byId('spellCheckBtn').addEventListener('click', checkSpell);
  byId('spellInput').addEventListener('keydown', event => {
    if (event.key === 'Enter') checkSpell();
  });
  byId('searchInput').addEventListener('input', renderWordList);
  byId('filterSelect').addEventListener('change', renderWordList);
  byId('wordList').addEventListener('click', event => {
    const btn = event.target.closest('[data-fav]');
    if (btn) toggleFavorite(btn.dataset.fav);
  });
  byId('goalInput').addEventListener('change', event => {
    const value = Math.min(200, Math.max(5, Number(event.target.value) || 30));
    state.dailyGoal = value;
    saveState();
    updateHome();
    toast('每日目标已保存');
  });
  byId('exportBtn').addEventListener('click', exportData);
  byId('importBtn').addEventListener('click', importData);
  byId('resetBtn').addEventListener('click', resetData);
  byId('themeToggle').addEventListener('click', () => {
    state.dark = !state.dark;
    saveState();
    updateHome();
  });
}

function init() {
  bindEvents();
  updateHome();
  pickStudyWord();
  renderWordList();
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
}

init();
