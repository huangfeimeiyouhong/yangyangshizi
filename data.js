/* 阳阳识字 · 课程数据
   内容与音频均参考自 APK《Kids Chinese》(com.xuexue.lms.zhcourse.android)
   自然、动物、食物、身体、颜色五个单元，共 24 课 95 个字 */

/* 兼容旧版 WebView（Android 7 初始 WebView 为 Chrome 51） */
if (!Array.prototype.flatMap) {
  Array.prototype.flatMap = function (fn, thisArg) {
    return this.reduce(function (acc, item, i) { return acc.concat(fn.call(thisArg, item, i, this)); }, []);
  };
}
if (!Object.values) {
  Object.values = function (obj) { return Object.keys(obj).map(function (k) { return obj[k]; }); };
}
if (typeof window.structuredClone !== 'function') {
  window.structuredClone = function (obj) { return JSON.parse(JSON.stringify(obj)); };
}

const UNITS = [
  {
    id: 'nature', name: '自然', label: '第一单元', tone: 'nature',
    intro: '和阳阳一起，认识天空、大地和山林里的汉字',
    covers: ['assets/covers/nature_1.png', 'assets/covers/nature_2.png', 'assets/covers/nature_3.png',
             'assets/covers/nature_4.png', 'assets/covers/nature_5.png', 'assets/covers/nature_6.png'],
    lessons: [
      { id: 'n1', title: '下雨啦', subtitle: '雨天的秘密', tone: 'sky', chars: ['雨', '天', '上', '下'], spell: ['下雨', '大雨', '天上', '上下'] },
      { id: 'n2', title: '月亮和云朵', subtitle: '天空的朋友', tone: 'night', chars: ['云', '月', '小', '大'], spell: ['白云', '月亮', '云朵', '月光'] },
      { id: 'n3', title: '高高的山', subtitle: '火山与流水', tone: 'fire', chars: ['火', '天', '水', '山'], spell: ['火山', '大水', '山上', '火苗'] },
      { id: 'n4', title: '太阳和星星', subtitle: '发光的朋友', tone: 'sun', chars: ['日', '明', '木', '星'], spell: ['木头', '星星', '明星', '日月'] },
      { id: 'n5', title: '白白的雪', subtitle: '雪地和石头', tone: 'snow', chars: ['土', '雪', '石', '阳'], spell: ['白雪', '石头', '太阳', '雪人'] },
      { id: 'n6', title: '打雷了', subtitle: '田野与森林', tone: 'forest', chars: ['雷', '田', '光', '林'], spell: ['雷雨', '田地', '阳光', '森林'] }
    ]
  },
  {
    id: 'animal', name: '动物', label: '第二单元', tone: 'forest',
    intro: '走进农场和森林，认识可爱的动物朋友',
    covers: ['assets/covers/animal_1.png', 'assets/covers/animal_2.png', 'assets/covers/animal_3.png',
             'assets/covers/animal_4.png', 'assets/covers/animal_5.png', 'assets/covers/animal_6.png'],
    lessons: [
      { id: 'a1', title: '小猫和小狗', subtitle: '家里的宠物', tone: 'sun', chars: ['猫', '狗', '兔', '鸟'], spell: ['小猫咪', '小狗', '兔子', '小鸟'] },
      { id: 'a2', title: '农场里的朋友', subtitle: '牛马和鸡', tone: 'forest', chars: ['牛', '羊', '马', '鸡'], spell: ['一头牛', '山羊', '木马', '大公鸡'] },
      { id: 'a3', title: '池塘里', subtitle: '水边的小伙伴', tone: 'sky', chars: ['鸭', '鱼', '虾', '蛋'], spell: ['小鸭子', '金鱼', '小虾', '蛋糕'] },
      { id: 'a4', title: '森林里的动物', subtitle: '大老虎和大象', tone: 'night', chars: ['虎', '象', '虫', '尾'], spell: ['老虎', '大象', '萤火虫', '尾巴'] }
    ]
  },
  {
    id: 'food', name: '食物', label: '第三单元', tone: 'sun',
    intro: '香喷喷的饭菜，认识餐桌上的汉字',
    covers: ['assets/covers/food_1.png', 'assets/covers/food_2.png', 'assets/covers/food_3.png',
             'assets/covers/food_4.png', 'assets/covers/food_5.png', 'assets/covers/food_6.png'],
    lessons: [
      { id: 'f1', title: '主食', subtitle: '米饭和面条', tone: 'sun', chars: ['米', '饭', '面', '粉'], spell: ['大米', '米饭', '面条', '面粉'] },
      { id: 'f2', title: '甜甜的点心', subtitle: '糕饼和糖果', tone: 'night', chars: ['糕', '糖', '饼', '甜'], spell: ['蛋糕', '糖果', '饼干', '甜甜圈'] },
      { id: 'f3', title: '饭菜端上来', subtitle: '菜汤和果汁', tone: 'fire', chars: ['菜', '汤', '汁', '油'], spell: ['白菜', '菜汤', '果汁', '豆油'] },
      { id: 'f4', title: '水果和豆子', subtitle: '瓜果装满碗', tone: 'forest', chars: ['瓜', '果', '豆', '碗'], spell: ['西瓜', '水果', '绿豆', '小碗'] },
      { id: 'f5', title: '厨房里的工具', subtitle: '筷勺锅和盐', tone: 'sky', chars: ['筷', '锅', '勺', '盐'], spell: ['筷子', '炒锅', '勺子', '盐巴'] }
    ]
  },
  {
    id: 'body', name: '身体', label: '第四单元', tone: 'night',
    intro: '从头到脚，认识自己的身体',
    covers: ['assets/covers/body_1.png', 'assets/covers/body_2.png', 'assets/covers/body_3.png',
             'assets/covers/body_4.png', 'assets/covers/body_5.png', 'assets/covers/body_6.png'],
    lessons: [
      { id: 'b1', title: '我的小脑袋', subtitle: '头和脸', tone: 'sun', chars: ['人', '头', '脸', '目'], spell: ['大人', '头发', '笑脸', '目光'] },
      { id: 'b2', title: '五官', subtitle: '眉鼻耳口', tone: 'sky', chars: ['眉', '鼻', '耳', '口'], spell: ['眉毛', '鼻子', '耳朵', '口哨'] },
      { id: 'b3', title: '牙齿和手', subtitle: '舌头和牙齿', tone: 'forest', chars: ['牙', '舌', '齿', '手'], spell: ['牙齿', '舌头', '小手', '手心'] },
      { id: 'b4', title: '心和血', subtitle: '脚和骨头', tone: 'fire', chars: ['足', '心', '血', '骨'], spell: ['足球', '心跳', '血管', '骨头'] },
      { id: 'b5', title: '我的身体', subtitle: '肉皮毛发', tone: 'night', chars: ['肉', '皮', '毛', '身'], spell: ['牛肉', '皮球', '毛巾', '身体'] }
    ]
  },
  {
    id: 'color', name: '颜色', label: '第五单元', tone: 'sky',
    intro: '红黄蓝绿，把世界涂成彩色',
    covers: ['assets/covers/color_1.png', 'assets/covers/color_2.png', 'assets/covers/color_3.png',
             'assets/covers/color_4.png', 'assets/covers/color_5.png', 'assets/covers/color_6.png'],
    lessons: [
      { id: 'c1', title: '红黄蓝绿', subtitle: '四种漂亮的颜色', tone: 'fire', chars: ['红', '黄', '蓝', '绿'], spell: ['大红', '蛋黄', '蓝天', '绿叶'] },
      { id: 'c2', title: '白黑灰紫', subtitle: '深浅不一样', tone: 'night', chars: ['白', '黑', '灰', '紫'], spell: ['白云', '黑板', '灰色', '紫色'] },
      { id: 'c3', title: '彩色世界', subtitle: '青色和橙色', tone: 'sun', chars: ['青', '彩', '色', '橙'], spell: ['青草', '彩色', '橙色', '彩色气球'] },
      { id: 'c4', title: '更多颜色', subtitle: '碧褐银金', tone: 'forest', chars: ['碧', '褐', '银', '金'], spell: ['碧绿', '褐色', '银子', '金鱼'] }
    ]
  }
];

const LESSONS = UNITS.flatMap(u => u.lessons.map((l, i) => Object.assign({}, l, {
  unitId: u.id, unitName: u.name, unitLabel: u.label, index: i + 1, cover: u.covers[i]
})));

const unitById = id => UNITS.find(u => u.id === id) || UNITS[0];

// 拼音与朗读音频（音频取自原应用；新字音频按 Unicode 码点命名）
const PINYIN = {
  雨: 'yǔ', 天: 'tiān', 上: 'shàng', 下: 'xià',
  云: 'yún', 月: 'yuè', 小: 'xiǎo', 大: 'dà',
  火: 'huǒ', 水: 'shuǐ', 山: 'shān', 日: 'rì',
  明: 'míng', 木: 'mù', 星: 'xīng', 土: 'tǔ',
  雪: 'xuě', 石: 'shí', 阳: 'yáng', 雷: 'léi',
  田: 'tián', 光: 'guāng', 林: 'lín',
  猫: 'māo', 狗: 'gǒu', 兔: 'tù', 鸟: 'niǎo',
  牛: 'niú', 羊: 'yáng', 马: 'mǎ', 鸡: 'jī',
  鸭: 'yā', 鱼: 'yú', 虾: 'xiā', 蛋: 'dàn',
  虎: 'hǔ', 象: 'xiàng', 虫: 'chóng', 尾: 'wěi',
  米: 'mǐ', 饭: 'fàn', 面: 'miàn', 粉: 'fěn',
  糕: 'gāo', 糖: 'táng', 饼: 'bǐng', 甜: 'tián',
  菜: 'cài', 汤: 'tāng', 汁: 'zhī', 油: 'yóu',
  瓜: 'guā', 果: 'guǒ', 豆: 'dòu', 碗: 'wǎn',
  筷: 'kuài', 锅: 'guō', 勺: 'sháo', 盐: 'yán',
  人: 'rén', 头: 'tóu', 脸: 'liǎn', 目: 'mù',
  眉: 'méi', 鼻: 'bí', 耳: 'ěr', 口: 'kǒu',
  牙: 'yá', 舌: 'shé', 齿: 'chǐ', 手: 'shǒu',
  足: 'zú', 心: 'xīn', 血: 'xuè', 骨: 'gǔ',
  肉: 'ròu', 皮: 'pí', 毛: 'máo', 身: 'shēn',
  红: 'hóng', 黄: 'huáng', 蓝: 'lán', 绿: 'lǜ',
  白: 'bái', 黑: 'hēi', 灰: 'huī', 紫: 'zǐ',
  青: 'qīng', 彩: 'cǎi', 色: 'sè', 橙: 'chéng',
  碧: 'bì', 褐: 'hè', 银: 'yín', 金: 'jīn'
};

// 旧字音频使用拼音命名；新字由 app.js 按 u+码点 自动命名
const AUDIO_SLUG = {
  雨: 'yu', 天: 'tian', 上: 'shang', 下: 'xia',
  云: 'yun', 月: 'yue', 小: 'xiao', 大: 'da',
  火: 'huo', 水: 'shui', 山: 'shan', 日: 'ri',
  明: 'ming', 木: 'mu', 星: 'xing', 土: 'tu',
  雪: 'xue', 石: 'shi', 阳: 'yang', 雷: 'lei',
  田: 'tian2', 光: 'guang', 林: 'lin'
};

const CHARS = {
  雨: { emoji: '🌧️', meaning: '从云里落下来的水滴', words: ['下雨', '大雨', '雨水'], sentence: '天上下雨' },
  天: { emoji: '🌤️', meaning: '我们头顶上的天空', words: ['天上', '天空', '明天'], sentence: '小鸟天上飞' },
  上: { emoji: '⬆️', meaning: '在上面，往上走', words: ['上下', '天上', '山上'], sentence: '山上' },
  下: { emoji: '⬇️', meaning: '在下面，往下走', words: ['下雨', '上下', '下雪'], sentence: '天上下雨' },
  云: { emoji: '☁️', meaning: '天上白白的云朵', words: ['白云', '云朵'], sentence: '白云' },
  月: { emoji: '🌙', meaning: '晚上挂在天上的月亮', words: ['月亮', '月光'], sentence: '月光' },
  小: { emoji: '🐜', meaning: '个子小小的', words: ['小树', '小鸟', '小雨'], sentence: '小鸟天上飞' },
  大: { emoji: '🐘', meaning: '个子大大的', words: ['大雨', '大水', '大小'], sentence: '大水' },
  火: { emoji: '🔥', meaning: '红红的、热热的火', words: ['火山', '火苗', '大火'], sentence: '火山' },
  水: { emoji: '💧', meaning: '透明的水，可以喝', words: ['雨水', '山水', '大水'], sentence: '山水' },
  山: { emoji: '⛰️', meaning: '高高的山峰', words: ['大山', '山上', '山水'], sentence: '山上' },
  日: { emoji: '☀️', meaning: '太阳，也叫日', words: ['日月', '生日', '日子'], sentence: '日月' },
  明: { emoji: '💡', meaning: '亮亮的，很明亮', words: ['明天', '明星', '光明'], sentence: '明星' },
  木: { emoji: '🪵', meaning: '树木，木头', words: ['木头', '木马', '木星'], sentence: '木头' },
  星: { emoji: '⭐', meaning: '夜空中一闪一闪的星星', words: ['星星', '明星', '星光'], sentence: '天上有星星' },
  土: { emoji: '🌱', meaning: '地上松软的泥土', words: ['土地', '泥土', '土豆'], sentence: '土地' },
  雪: { emoji: '❄️', meaning: '冬天白白的雪花', words: ['白雪', '雪花', '雪人'], sentence: '白雪' },
  石: { emoji: '🪨', meaning: '硬硬的石头', words: ['石头', '石子'], sentence: '石头' },
  阳: { emoji: '🌅', meaning: '太阳，阳光暖暖的', words: ['太阳', '阳光', '阳阳'], sentence: '红色的太阳' },
  雷: { emoji: '⚡', meaning: '轰隆隆的雷声', words: ['雷雨', '打雷', '雷声'], sentence: '雷雨' },
  田: { emoji: '🌾', meaning: '种庄稼的田地', words: ['田地', '田里', '种田'], sentence: '田地' },
  光: { emoji: '✨', meaning: '亮亮的光', words: ['阳光', '月光', '光明'], sentence: '阳光' },
  林: { emoji: '🌲', meaning: '好多树在一起就是森林', words: ['森林', '树林', '小树林'], sentence: '森林' },

  猫: { emoji: '🐱', meaning: '喵喵叫的小猫', words: ['小猫咪', '白猫', '花猫'], sentence: '小猫咪喵喵叫' },
  狗: { emoji: '🐶', meaning: '汪汪叫的小狗', words: ['小狗', '小花狗', '黑狗'], sentence: '小狗汪汪叫' },
  兔: { emoji: '🐰', meaning: '长耳朵的兔子', words: ['兔子', '小兔', '小白兔'], sentence: '小白兔爱吃萝卜' },
  鸟: { emoji: '🐦', meaning: '会飞的小鸟', words: ['小鸟', '鸟类'], sentence: '小鸟天上飞' },
  牛: { emoji: '🐮', meaning: '会耕地的牛', words: ['一头牛', '水牛', '牛奶'], sentence: '一头牛在吃草' },
  羊: { emoji: '🐑', meaning: '咩咩叫的羊', words: ['山羊', '白羊座'], sentence: '山羊咩咩叫' },
  马: { emoji: '🐴', meaning: '跑得很快的马', words: ['木马', '河马', '跳马'], sentence: '小马跑得快' },
  鸡: { emoji: '🐔', meaning: '会打鸣的鸡', words: ['大公鸡', '小鸡', '鸡冠'], sentence: '大公鸡喔喔叫' },
  鸭: { emoji: '🦆', meaning: '嘎嘎叫的鸭子', words: ['小鸭子', '鸭子', '鸭蛋'], sentence: '小鸭子嘎嘎叫' },
  鱼: { emoji: '🐟', meaning: '在水里游的鱼', words: ['金鱼', '鱼汤', '水中有鱼'], sentence: '水中有鱼' },
  虾: { emoji: '🦐', meaning: '弯着腰的小虾', words: ['小虾', '虾米', '大虾'], sentence: '小虾在水里游' },
  蛋: { emoji: '🥚', meaning: '圆圆的蛋', words: ['咸鸭蛋', '蛋糕', '蛋壳'], sentence: '母鸡下了一个蛋' },
  虎: { emoji: '🐯', meaning: '森林里的大老虎', words: ['老虎', '黑虎'], sentence: '老虎是森林之王' },
  象: { emoji: '🐘', meaning: '长鼻子的大象', words: ['大象', '象鼻'], sentence: '大象的鼻子长长的' },
  虫: { emoji: '🐛', meaning: '小小的虫子', words: ['萤火虫', '小虫'], sentence: '萤火虫会发光' },
  尾: { emoji: '🐾', meaning: '动物身后的尾巴', words: ['尾巴', '尾翼'], sentence: '小狗摇尾巴' },

  米: { emoji: '🍚', meaning: '白白的大米', words: ['大米', '米饭', '糯米'], sentence: '大米煮成米饭' },
  饭: { emoji: '🍚', meaning: '香香的米饭', words: ['米饭', '午饭', '吃饭'], sentence: '我要吃饭啦' },
  面: { emoji: '🍜', meaning: '长长的面条', words: ['面条', '冷面', '面汤'], sentence: '一碗热面条' },
  粉: { emoji: '🥣', meaning: '细细的粉', words: ['米粉', '面粉', '粉条'], sentence: '米粉滑滑的' },
  糕: { emoji: '🍰', meaning: '软软的糕', words: ['蛋糕', '年糕', '大蛋糕'], sentence: '蛋糕甜甜的' },
  糖: { emoji: '🍬', meaning: '甜甜的糖', words: ['糖果', '大棒棒糖', '小棒棒糖'], sentence: '糖果真甜' },
  饼: { emoji: '🍪', meaning: '圆圆的饼干', words: ['饼干', '大饼', '月饼'], sentence: '饼干脆脆的' },
  甜: { emoji: '🍯', meaning: '像糖一样甜', words: ['甜甜圈', '甜甜的水'], sentence: '甜甜圈真好吃' },
  菜: { emoji: '🥬', meaning: '绿绿的蔬菜', words: ['白菜', '青菜', '菜汤'], sentence: '多吃青菜身体好' },
  汤: { emoji: '🥣', meaning: '热热的汤', words: ['菜汤', '蛋汤', '鸡汤'], sentence: '汤热热的' },
  汁: { emoji: '🧃', meaning: '水果里的汁水', words: ['果汁', '水果汁'], sentence: '我喜欢喝果汁' },
  油: { emoji: '🫗', meaning: '炒菜用的油', words: ['豆油', '抽油烟机'], sentence: '炒菜要放一点油' },
  瓜: { emoji: '🍉', meaning: '甜甜的瓜', words: ['西瓜', '冬瓜', '黄瓜'], sentence: '西瓜又甜又解渴' },
  果: { emoji: '🍎', meaning: '树上结的果子', words: ['水果', '果汁', '果实'], sentence: '水果真好吃' },
  豆: { emoji: '🫘', meaning: '一颗颗小豆子', words: ['大豆', '绿豆', '豆子'], sentence: '绿豆小小的' },
  碗: { emoji: '🥣', meaning: '盛饭盛汤的碗', words: ['小碗', '饭碗'], sentence: '碗里装满了饭' },
  筷: { emoji: '🥢', meaning: '吃饭用的筷子', words: ['筷子', '一双筷子'], sentence: '我会用筷子' },
  锅: { emoji: '🍳', meaning: '炒菜做饭的锅', words: ['炒锅', '锅铲', '锅子'], sentence: '锅里咕嘟咕嘟' },
  勺: { emoji: '🥄', meaning: '舀汤的勺子', words: ['勺子', '大勺子'], sentence: '用勺子喝汤' },
  盐: { emoji: '🧂', meaning: '咸咸的盐', words: ['盐巴', '盐水', '食盐'], sentence: '菜里放一点点盐' },

  人: { emoji: '🧑', meaning: '我们每一个人', words: ['大人', '坏人', '好人'], sentence: '我是小小的人' },
  头: { emoji: '🙂', meaning: '身体最上面的头', words: ['头发', '头灯', '一头牛'], sentence: '摸摸自己的头' },
  脸: { emoji: '😊', meaning: '我们的脸蛋', words: ['小脸', '洗脸', '笑脸'], sentence: '洗洗小脸' },
  目: { emoji: '👁️', meaning: '眼睛，也叫目', words: ['目光', '眉目'], sentence: '目光亮亮的' },
  眉: { emoji: '🤨', meaning: '眼睛上面的眉毛', words: ['眉毛', '眉目'], sentence: '弯弯的眉毛' },
  鼻: { emoji: '👃', meaning: '闻味道的鼻子', words: ['鼻子', '鼻尖'], sentence: '鼻子闻一闻' },
  耳: { emoji: '👂', meaning: '听声音的耳朵', words: ['耳朵', '耳机', '木耳'], sentence: '耳朵听声音' },
  口: { emoji: '👄', meaning: '吃饭说话的嘴', words: ['口哨', '口水'], sentence: '张开口说话' },
  牙: { emoji: '🦷', meaning: '白白的牙齿', words: ['我的牙齿', '牙齿'], sentence: '早晚都要刷牙' },
  舌: { emoji: '👅', meaning: '尝味道的舌头', words: ['舌头', '大舌头'], sentence: '舌头尝味道' },
  齿: { emoji: '🦷', meaning: '牙齿，也叫齿', words: ['牙齿', '我的牙齿'], sentence: '牙齿白白的' },
  手: { emoji: '✋', meaning: '写字干活的手', words: ['小手', '手心', '手上有血'], sentence: '我用手写字' },
  足: { emoji: '🦶', meaning: '我们的脚，也叫足', words: ['足球', '踢足球'], sentence: '我在踢足球' },
  心: { emoji: '❤️', meaning: '怦怦跳的心脏', words: ['中心', '小心有电', '手心'], sentence: '心怦怦地跳' },
  血: { emoji: '🩸', meaning: '红红的血', words: ['血管', '手上有血'], sentence: '血管里有血' },
  骨: { emoji: '🦴', meaning: '硬硬的骨头', words: ['骨头', '头骨', '肋骨'], sentence: '骨头硬硬的' },
  肉: { emoji: '🍖', meaning: '身上的肉', words: ['牛肉', '肉包子'], sentence: '牛肉香香的' },
  皮: { emoji: '🟤', meaning: '包在身体外面的皮肤', words: ['果皮', '皮球', '皮包'], sentence: '皮球圆圆的' },
  毛: { emoji: '🧶', meaning: '细细的毛', words: ['毛巾', '毛笔', '眉毛'], sentence: '毛巾软软的' },
  身: { emoji: '🧍', meaning: '我们的身体', words: ['身体', '身高'], sentence: '我的身体真棒' },

  红: { emoji: '🔴', meaning: '红红的颜色', words: ['大红', '粉红', '深红'], sentence: '大红气球' },
  黄: { emoji: '🟡', meaning: '黄黄的颜色', words: ['蛋黄', '黄牛', '黄瓜'], sentence: '黄色的香蕉' },
  蓝: { emoji: '🔵', meaning: '蓝蓝的颜色', words: ['蓝天', '深蓝', '蓝天白云'], sentence: '蓝天白云' },
  绿: { emoji: '🟢', meaning: '绿绿的颜色', words: ['绿叶', '碧绿', '深绿'], sentence: '绿叶真好看' },
  白: { emoji: '⚪', meaning: '白白的颜色', words: ['白云', '白天', '小白兔'], sentence: '白云' },
  黑: { emoji: '⚫', meaning: '黑黑的颜色', words: ['黑板', '黑猫', '黑狗'], sentence: '黑板是黑色的' },
  灰: { emoji: '🐭', meaning: '灰灰的颜色', words: ['灰色', '灰兔'], sentence: '灰色的小兔' },
  紫: { emoji: '🟣', meaning: '紫紫的颜色', words: ['紫色', '浅紫', '紫菜汤'], sentence: '紫色的花' },
  青: { emoji: '🌿', meaning: '青青的颜色', words: ['青草', '青菜', '青蛙'], sentence: '青草绿绿的' },
  彩: { emoji: '🌈', meaning: '五颜六色的彩', words: ['彩色', '彩色气球'], sentence: '彩色气球飞上天' },
  色: { emoji: '🎨', meaning: '颜色', words: ['彩色', '橙色', '灰色'], sentence: '我喜欢彩色' },
  橙: { emoji: '🍊', meaning: '橙色的橙子', words: ['橙子', '橙色'], sentence: '橙子甜甜的' },
  碧: { emoji: '💚', meaning: '碧绿碧绿的', words: ['碧绿', '碧水'], sentence: '碧绿的湖水' },
  褐: { emoji: '🟤', meaning: '褐色的', words: ['褐色', '棕褐'], sentence: '褐色的树皮' },
  银: { emoji: '🥈', meaning: '银子的银', words: ['银子', '银色'], sentence: '银色的月亮' },
  金: { emoji: '🥇', meaning: '金子的金', words: ['金子', '金色', '金鱼'], sentence: '金色的小鱼' }
};

// 已打包的原应用真人朗读（词语音频由构建时按实际文件生成）
const BUNDLED_WORDS = ['一头牛', '上下', '下雨', '中心', '云朵', '光明', '兔子', '冬瓜', '冷面', '勺子', '午饭', '口哨', '口水', '吃饭', '咸鸭蛋', '坏人', '大人', '大公鸡', '大勺子', '大棒棒糖', '大水', '大米', '大红', '大红气球', '大舌头', '大蛋糕', '大豆', '大象', '大雨', '天上', '天上下雨', '天上有星星', '天空', '太阳', '头发', '头灯', '头骨', '小兔', '小心有电', '小手', '小树林', '小棒棒糖', '小狗', '小猫咪', '小白兔', '小花狗', '小鸟', '小鸟天上飞', '小鸡', '小鸭子', '尾巴', '尾翼', '山上', '山羊', '年糕', '彩色', '彩色气球', '我的牙齿', '手上有血', '手心', '抽油烟机', '明星', '星星', '月亮', '月光', '木头', '木星', '木耳', '木马', '果实', '果汁', '果皮', '森林', '橙子', '橙色', '毛巾', '毛笔', '水中有鱼', '水果', '水果汁', '水牛', '河马', '浅紫', '深红', '深绿', '深蓝', '火山', '火苗', '灰色', '炒锅', '牙齿', '牛奶', '牛肉', '甜甜圈', '甜甜的水', '田地', '白云', '白天', '白猫', '白羊座', '白菜', '白雪', '皮包', '皮球', '目光', '眉毛', '眉目', '石头', '碧绿', '筷子', '米饭', '粉红', '糖果', '糯米', '紫色', '紫菜汤', '红色的太阳', '绿叶', '绿豆', '老虎', '耳朵', '耳机', '肉包子', '肋骨', '舌头', '花猫', '菜汤', '萤火虫', '蓝天', '蓝天白云', '蛋壳', '蛋汤', '蛋糕', '蛋黄', '血管', '褐色', '西瓜', '豆子', '豆油', '足球', '跳马', '踢足球', '身体', '金子', '金色', '金鱼', '银子', '银色', '锅子', '锅铲', '阳光', '阳阳', '雨水', '雪人', '雪花', '雷雨', '青草', '青菜', '青蛙', '面条', '面粉', '饼干', '骨头', '鱼汤', '鸟类', '鸡冠', '鸡汤', '鸭子', '鸭蛋', '黄牛', '黄瓜', '黑板', '黑狗', '黑猫', '黑虎', '鼻子', '客厅', '沙发', '鱼', '花', '春天', '秋天', '冬天', '大树', '树', '热气球', '家人', '红色', '灯笼', '池塘'];
const BUNDLED_SENTENCES = ['大水', '大红气球', '天上下雨', '天上有星星', '小鸟天上飞', '山上', '明星', '月光', '木头', '森林', '水中有鱼', '火山', '田地', '白云', '白雪', '石头', '红色的太阳', '蓝天白云', '阳光', '雷雨'];

const GAME_NAMES = ['听音找字', '听词找字', '拼词成句', '描红写字'];
