/* SECTION: site-data — 二次元番剧库默认内容（角色介绍站） */
(function () {
  'use strict';

  var IMG = {
    asuna: 'http://i1.hdslb.com/bfs/archive/b556013bb961c9619123eb2419d67599df41e59c.jpg',
    asuna2: 'http://i2.hdslb.com/bfs/archive/ceb0813982072a803159d84b8a35c4c269bc42e4.png',
    chillet: 'http://i0.hdslb.com/bfs/archive/be9620c5754b270606b3190464e65fd1fc3da0b8.jpg',
    chillet2: 'http://i0.hdslb.com/bfs/archive/4930793ae0e9b80abda72ab83646487ceec74972.jpg',
    columbina: 'http://i0.hdslb.com/bfs/archive/1cfe33d17f839fa9c6346fccda193bcc804e1f9f.jpg',
    columbina2: 'http://i2.hdslb.com/bfs/archive/4c5eb629fa46637bc54de8124a5f2a4acc8287bf.jpg',
    sandrone: 'http://i2.hdslb.com/bfs/archive/e3fd38c270253bbd5cfe9d20e30801efc51a795f.jpg',
    sandrone2: 'http://i2.hdslb.com/bfs/archive/23bf84c92595573e80751a74ea44e1789fa7a09f.jpg',
    furina: 'http://i2.hdslb.com/bfs/archive/95c4ddf1ddb715d7ecb01d35e2e1b4f5a95a05b5.jpg',
    furina2: 'http://i1.hdslb.com/bfs/archive/782033f582bc76ba47c4089c1c0e432bb82018d7.jpg',
    rimuru: 'http://i1.hdslb.com/bfs/archive/2f0356e57dc504f3d2eaf87549f983741f0e1e82.jpg',
    rimuru2: 'http://i0.hdslb.com/bfs/archive/4df236c008c12ceb6c69b5706299b2a248dde31da.jpg'
  };

  function biliUrl(kw) { return 'https://search.bilibili.com/all?keyword=' + encodeURIComponent(kw); }
  function videoUrl(bv) { return 'https://www.bilibili.com/video/' + bv; }

  function slide(id, name, en, tag, desc, img, bv) {
    return {
      id: id, name: name, enName: en, tagline: tag, desc: desc,
      linkText: '在 B 站观看', linkUrl: videoUrl(bv), image: img, video: videoUrl(bv),
      socials: [
        { label: 'B站搜索', url: biliUrl(name + ' ' + tag) },
        { label: '哔哩哔哩', url: 'https://www.bilibili.com' }
      ]
    };
  }

  function news(id, mmdd, year, cat, title, excerpt, img, bv) {
    return { id: id, mmdd: mmdd, year: year, cat: cat, title: title, excerpt: excerpt, image: img, linkUrl: videoUrl(bv) };
  }

  window.__SITE_DEFAULT__ = {
    meta: {
      title: '二次元番剧库 | 结城明日奈 · 疾旋鼬 · 哥伦比亚 · 桑多涅 · 芙宁娜 · 利姆露',
      siteName: '二次元番剧库',
      logoText: '二次元番剧库'
    },

    nav: {
      items: [
        { label: '首页', anchor: '#top' },
        { label: '核心角色', anchor: '#careers' },
        { label: '作品时间线', anchor: '#history' },
        { label: '为什么值得看', anchor: '#benefits' },
        { label: 'B站精选', anchor: '#news' },
        { label: '关于本站', anchor: '#about' }
      ],
      langs: ['简体中文', 'English', '日本語'],
      ctaText: 'B站精选',
      ctaUrl: '#news'
    },

    hero: {
      autoplayMs: 6000,
      slides: [
        slide('s1', '结城明日奈', 'YUUKI ASUNA', '刀剑神域 · 闪光细剑使', '血盟骑士团副团长，细剑使「闪光」。在死亡游戏 SAO 中与桐人并肩作战，剑技华丽而致命，温柔与坚强并存，是无数观众心中无可替代的亚丝娜。', IMG.asuna, 'BV1D4411Q7JR'),
        slide('s2', '疾旋鼬', 'CHILLET', '幻兽帕鲁 · 人气团宠', '冰与龙属性的高人气帕鲁，外形像一只围着雪白长围巾的小鼬。温顺亲人，手感爽快，是许多玩家开荒期的得力伙伴，也是基地里最受宠爱的团宠。', IMG.chillet, 'BV1Xi4y1H7US'),
        slide('s3', '哥伦比亚', 'COLUMBINA', '原神 · 愚人众第三席「少女」', '至冬国愚人众十一执行官第三席，代号「少女」。轻闭双眼，哼唱空灵旋律，圣洁而危险，实力深不可测，是「冬夜愚戏」中最令人难忘的神秘存在。', IMG.columbina, 'BV16erhBREXR'),
        slide('s4', '桑多涅', 'SANDRONE', '原神 · 愚人众第七席「人偶」', '愚人众十一执行官第七席，代号「人偶」。沉迷机械与机关造物，身边常伴一台巨大自律人偶，言行冷淡，透着匠人的偏执与危险气息。', IMG.sandrone, 'BV1tnTv6wEmy'),
        slide('s5', '芙宁娜', 'FURINA', '原神 · 枫丹水神', '枫丹的水神「芙宁娜·德·枫丹」。聚光灯下的明星，法庭上的话题女王；华丽舞台背后，是一场持续五百年的孤独演出。她用荒诞与眼泪守护枫丹，最终以凡人之躯迎来谢幕与自由。', IMG.furina, 'BV1Uq421c7cA'),
        slide('s6', '利姆露', 'RIMURU TEMPEST', '转生史莱姆 · 萌王', '从普通上班族转生为史莱姆，凭借「捕食者」「大贤者」等技能与包容的领袖魅力，一路收服伙伴、建立鸠拉·特恩佩斯特联邦，成为名震大陆的魔王与君主。', IMG.rimuru, 'BV1LcrCY4EXf')
      ]
    },

    vision: {
      eyebrow: '我们的热爱',
      eyebrowEn: 'Our Passion',
      lines: ['把那些让我们心动不已的二次元角色，', '用最直观的方式介绍给每一位同好。']
    },

    about: {
      eyebrow: '关于本站',
      eyebrowEn: 'About This Site',
      paragraphs: [
        '「二次元番剧库」是一个专注于角色介绍的小站。我们从《刀剑神域》《幻兽帕鲁》《原神》《关于我转生变成史莱姆这档事》四部作品中，挑选出六位人气最高、最值得了解的核心角色，用最直观的方式介绍给每一位同好。',
        '本站着重介绍结城明日奈、疾旋鼬、哥伦比亚、桑多涅、芙宁娜与利姆露。每一位角色都配有作品出处、角色定位、名场面入口，以及一键直达 B 站的相关视频。',
        '视频与图片均优先来自哔哩哔哩。页面右上角「编辑内容」可以随时替换文案、图片与视频链接，改完点「导出网页文件」即可生成属于你自己的角色介绍站。'
      ],
      facts: [
        { num: 6, unit: '位', label: '核心角色' },
        { num: 4, unit: '部', label: '作品' },
        { num: 20, unit: '+', label: 'B站精选视频' },
        { num: 100, unit: '%', label: '对二次元的热爱' }
      ],
      image: IMG.asuna
    },

    credo: {
      eyebrow: '我们怎么选角色',
      eyebrowEn: 'How We Pick',
      items: [
        { en: 'Story & Growth', zh: '故事与成长', desc: '每个角色都有完整的弧光：从恐惧到勇敢、从孤独到被爱、从平凡到闪耀。' },
        { en: 'Visual & Sound', zh: '视听表现', desc: '名场面、名台词与神插入曲，让角色在画面与旋律里被记住。' },
        { en: 'Personality', zh: '独一无二的人设', desc: '无论是闪光细剑使、软萌帕鲁还是舞台上的水神，都有不可替代的个性。' }
      ]
    },

    careers: {
      eyebrow: '核心角色',
      eyebrowEn: 'Core Characters',
      desc: '本站着重介绍的六位角色，点击卡片即可前往 B 站观看相关视频。',
      cards: [
        { type: '刀剑神域', title: '结城明日奈', desc: '刀剑神域 · 闪光细剑使 · 血盟骑士团副团长', linkText: '观看名场面', linkUrl: videoUrl('BV1D4411Q7JR'), image: IMG.asuna },
        { type: '幻兽帕鲁', title: '疾旋鼬', desc: '幻兽帕鲁 · 冰与龙属性 · 人气团宠', linkText: '观看可爱瞬间', linkUrl: videoUrl('BV1Xi4y1H7US'), image: IMG.chillet },
        { type: '原神', title: '哥伦比亚', desc: '原神 · 愚人众第三席「少女」', linkText: '观看角色预告', linkUrl: videoUrl('BV16erhBREXR'), image: IMG.columbina },
        { type: '原神', title: '桑多涅', desc: '原神 · 愚人众第七席「人偶」', linkText: '观看名场面', linkUrl: videoUrl('BV1tnTv6wEmy'), image: IMG.sandrone },
        { type: '原神', title: '芙宁娜', desc: '原神 · 枫丹水神 · 舞台明星', linkText: '观看名场面', linkUrl: videoUrl('BV1Uq421c7cA'), image: IMG.furina },
        { type: '转生史莱姆', title: '利姆露', desc: '转生史莱姆 · 萌王 · 魔国联邦君主', linkText: '观看合集', linkUrl: videoUrl('BV1LcrCY4EXf'), image: IMG.rimuru }
      ]
    },

    history: {
      eyebrow: '作品时间线',
      eyebrowEn: 'Timeline',
      slogan: '四部作品，六位本命',
      pillars: [
        { title: '动画与游戏交织', points: ['《刀剑神域》《转生史莱姆》等动画化作品持续热播', '《原神》《幻兽帕鲁》以游戏形式塑造出圈角色'] },
        { title: '角色即记忆点', points: ['每个核心角色都有属于自己的名场面', '从亚丝娜的闪光到芙宁娜的谢幕，皆是经典'] },
        { title: '二创与社区', points: ['B站二创与应援视频不断丰富角色形象', '角色人气在社区互动中持续升温'] }
      ],
      image: IMG.chillet,
      timeline: [
        { year: '2012', text: '《刀剑神域》动画开播，结城明日奈走进大众视野' },
        { year: '2018', text: '《关于我转生变成史莱姆这档事》动画开播，利姆露登场' },
        { year: '2020', text: '《原神》公测，至冬愚人众与枫丹角色陆续揭开面纱' },
        { year: '2023', text: '芙宁娜在枫丹主线中迎来属于自己的谢幕' },
        { year: '2024', text: '《幻兽帕鲁》发售，疾旋鼬成为现象级人气帕鲁' },
        { year: '2026', text: '本站上线，为你整理这些角色最值得看的视频与介绍' }
      ]
    },

    values: {
      eyebrow: '关键词',
      eyebrowEn: 'Keywords',
      items: [
        { zh: '羁绊', en: 'Bonds' },
        { zh: '成长', en: 'Growth' },
        { zh: '冒险', en: 'Adventure' },
        { zh: '治愈', en: 'Healing' },
        { zh: '闪耀', en: 'Shine' },
        { zh: '自由', en: 'Freedom' }
      ]
    },

    benefits: {
      eyebrow: '为什么值得看',
      eyebrowEn: 'Why Watch',
      groups: [
        { title: '角色塑造', subtitle: '成长弧光 · 名场面 · 细节', items: ['亚丝娜从副团长到「闪光」的成长', '芙宁娜五百年的孤独演出', '利姆露从史莱姆到魔王的逆袭'] },
        { title: '视听享受', subtitle: '作画 · 音乐 · 配音', items: ['刀剑神域的经典战斗作画', '原神枫丹的舞台与音乐', '转生史莱姆的异世界氛围'] },
        { title: '轻松入坑', subtitle: '门槛低 · 快乐多', items: ['疾旋鼬可爱片段无需背景知识', '精选视频一键直达 B 站', '每部作品都附名场面入口'] },
        { title: '社区氛围', subtitle: '二创 · 应援 · 同好', items: ['B站海量二创与应援视频', '角色人气排名与世萌应援', '弹幕一起刷名场面'] }
      ],
      image: IMG.furina
    },

    news: {
      eyebrow: 'B站精选',
      eyebrowEn: 'Bilibili Picks',
      perPage: 3,
      moreText: '在 B 站查看更多',
      moreUrl: biliUrl('二次元 名场面'),
      items: [
        news('n1', '10/01', '2026', '利姆露', '4K《关于我转生变成史莱姆这档事 第四季》全24集', '第四季合集，利姆露与魔国联邦的故事继续展开，适合一口气补完。', IMG.rimuru2, 'BV1rkhv6JEB5'),
        news('n2', '10/10', '2025', '芙宁娜', '魔法少女芙芙~', '以魔法少女风格打开芙宁娜，可爱与舞台感拉满，枫丹水神的另一面。', IMG.furina2, 'BV1K14EzUExw'),
        news('n3', '01/14', '2026', '哥伦比亚', '桑多涅桑多涅桑多涅桑多涅？——哥伦比娅', '愚人众执行官之间的互动短片，少女哥伦比亚与木偶桑多涅同框。', IMG.columbina2, 'BV1LprnBWE7H'),
        news('n4', '01/05', '2026', '桑多涅', '木偶也有勾丝的烦恼', '桑多涅与她的人偶日常，冷淡的外表下藏着匠人的可爱。', IMG.sandrone2, 'BV1pxinBXEm3'),
        news('n5', '02/07', '2024', '疾旋鼬', 'Chipi Chipi Chapa Chapa 完整版', '疾旋鼬出圈名曲，洗脑又可爱，帕鲁团宠的含金量还在上升。', IMG.chillet2, 'BV1Rt421h7Fj'),
        news('n6', '03/30', '2019', '刀剑神域', '【合集】刀剑神域 第一季 01-25话全', '刀剑神域第一季合集，结城明日奈与桐人相遇的起点，补番首选。', IMG.asuna2, 'BV1db411x7sS')
      ]
    },

    footer: {
      columns: [
        { title: '核心角色', links: [
          { label: '结城明日奈', url: videoUrl('BV1D4411Q7JR') },
          { label: '疾旋鼬', url: videoUrl('BV1Xi4y1H7US') },
          { label: '哥伦比亚', url: videoUrl('BV16erhBREXR') },
          { label: '桑多涅', url: videoUrl('BV1tnTv6wEmy') },
          { label: '芙宁娜', url: videoUrl('BV1Uq421c7cA') },
          { label: '利姆露', url: videoUrl('BV1LcrCY4EXf') }
        ] },
        { title: '作品', links: [
          { label: '刀剑神域', url: biliUrl('刀剑神域') },
          { label: '幻兽帕鲁', url: biliUrl('幻兽帕鲁') },
          { label: '原神', url: biliUrl('原神') },
          { label: '关于我转生变成史莱姆这档事', url: biliUrl('关于我转生变成史莱姆这档事') }
        ] },
        { title: '关于本站', links: [
          { label: '核心角色', url: '#careers' },
          { label: '作品时间线', url: '#history' },
          { label: '为什么值得看', url: '#benefits' },
          { label: 'B站精选', url: '#news' }
        ] },
        { title: '支持与链接', links: [
          { label: '哔哩哔哩', url: 'https://www.bilibili.com' },
          { label: 'B站搜索', url: biliUrl('二次元 角色') },
          { label: '回到顶部', url: '#top' }
        ] }
      ],
      socials: [
        { label: '哔哩哔哩', url: 'https://www.bilibili.com' },
        { label: 'B站搜索', url: biliUrl('二次元 名场面') }
      ],
      copyright: '© 2026 二次元番剧库。角色与作品版权归各自版权方所有，本站仅作介绍与学习交流。',
      icp: '本站为学习交流用单页模板，不涉及商用。',
      healthTip: '健康追番提醒：适度观看，注意休息。保护视力，远离盗版。文明弹幕，友善交流。'
    }
  };

  /* ---------- 内置图库（编辑面板可一键选用） ---------- */
  function lib(cat, label, url) { return { cat: cat, label: label, url: url }; }
  window.__IMAGE_LIBRARY__ = [
    lib('角色封面', '结城明日奈 · 刀剑神域', IMG.asuna),
    lib('角色封面', '结城明日奈 · 合集封面', IMG.asuna2),
    lib('角色封面', '疾旋鼬 · 幻兽帕鲁', IMG.chillet),
    lib('角色封面', '疾旋鼬 · Chipi Chipi', IMG.chillet2),
    lib('角色封面', '哥伦比亚 · 原神', IMG.columbina),
    lib('角色封面', '哥伦比亚 · 愚人众', IMG.columbina2),
    lib('角色封面', '桑多涅 · 原神', IMG.sandrone),
    lib('角色封面', '桑多涅 · 木偶日常', IMG.sandrone2),
    lib('角色封面', '芙宁娜 · 原神', IMG.furina),
    lib('角色封面', '芙宁娜 · 魔法少女', IMG.furina2),
    lib('角色封面', '利姆露 · 转生史莱姆', IMG.rimuru),
    lib('角色封面', '利姆露 · 第四季', IMG.rimuru2)
  ];
})();

