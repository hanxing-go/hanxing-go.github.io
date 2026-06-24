const STORAGE_KEYS = {
  records: 'studyHub.records',
  roadmap: 'studyHub.roadmapStatus'
};

const defaultRecords = {
  '2026-03-16': {
    duration: 3,
    content: 'LeetCode Hot100 一题，复习 Java 集合，整理 Agent 学习资料。',
    summary: '晚上进入状态比较慢，但做题后找回节奏，知道自己下一阶段该补什么。',
    tomorrowPlan: '继续刷一题 Hot100，并把 Spring Boot 常用注解过一遍。'
  },
  '2026-03-17': {
    duration: 2.5,
    content: '重新设计个人主页，梳理学习打卡网站的信息架构。',
    summary: '把“个人网站”定位得更清楚了：先服务学习，再慢慢长成博客。',
    tomorrowPlan: '补一小时 Java 后端基础，晚上继续完善路线页细节。'
  },
  '2026-03-14': {
    duration: 2,
    content: '看了一节 Spring Boot 视频课，记录 IOC / AOP 笔记。',
    summary: '基础概念理解更稳了一些，但还需要通过小 demo 加深记忆。',
    tomorrowPlan: '写一个简单的 Spring Boot demo。'
  },
  '2026-03-12': {
    duration: 1.5,
    content: '整理实习方向，分析 Java 后端 + Agent 的能力差距。',
    summary: '方向比之前更聚焦，不再泛泛地想学很多东西。',
    tomorrowPlan: '继续拆分近三个月的行动计划。'
  }
};

const roadmapData = [
  {
    month: '第 1 个月',
    title: 'Java 基础夯实',
    focus: '集合、泛型、异常、IO、多线程基础',
    weeks: [
      'Java 集合框架系统复习',
      '泛型、Lambda、Stream 深入',
      'IO / NIO 与常见文件处理',
      '线程基础、线程池、并发入门'
    ]
  },
  {
    month: '第 2 个月',
    title: 'Java 进阶与 JVM',
    focus: 'JVM、类加载、GC、性能分析',
    weeks: [
      'JVM 内存模型与垃圾回收',
      '类加载机制与双亲委派',
      '并发问题实战排查',
      '性能分析与调优基础'
    ]
  },
  {
    month: '第 3 个月',
    title: 'MySQL 与 Redis',
    focus: '索引、事务、SQL 优化、缓存设计',
    weeks: [
      'MySQL 索引与执行计划',
      '事务隔离级别与锁机制',
      'Redis 数据结构与缓存策略',
      '缓存一致性与高并发基础'
    ]
  },
  {
    month: '第 4 个月',
    title: 'Spring / Spring Boot',
    focus: 'IOC、AOP、自动配置、项目结构',
    weeks: [
      'Spring IOC / AOP 核心理解',
      'Spring Boot 自动配置原理',
      'RESTful API 与统一返回设计',
      '异常处理、日志、参数校验'
    ]
  },
  {
    month: '第 5 个月',
    title: '微服务与消息队列',
    focus: 'Nacos、OpenFeign、MQ 基础',
    weeks: [
      '微服务拆分思路',
      '服务注册发现与配置中心',
      '消息队列基础与异步解耦',
      '链路调用与容错思维'
    ]
  },
  {
    month: '第 6 个月',
    title: '项目实战 1',
    focus: '做一个可展示的后端项目',
    weeks: [
      '选题与需求拆分',
      '数据库设计与接口定义',
      '核心业务开发',
      '部署、文档、简历提炼'
    ]
  },
  {
    month: '第 7 个月',
    title: '算法与面试基础',
    focus: 'Hot100、常见数据结构与题型归纳',
    weeks: [
      '数组 / 双指针 / 哈希',
      '链表 / 栈 / 队列',
      '二叉树 / DFS / BFS',
      '动态规划基础'
    ]
  },
  {
    month: '第 8 个月',
    title: '计算机基础强化',
    focus: '操作系统、网络、数据库理论',
    weeks: [
      '操作系统核心概念',
      '计算机网络常见问题',
      'HTTP / HTTPS / TCP 机制',
      '数据库事务与范式回顾'
    ]
  },
  {
    month: '第 9 个月',
    title: 'Agent / AI 应用入门',
    focus: 'Prompt、工具调用、工作流、RAG 基础',
    weeks: [
      '大模型应用基础认知',
      'Prompt 工程与任务拆解',
      'Agent 工具调用与自动化',
      'RAG 与知识库基础'
    ]
  },
  {
    month: '第 10 个月',
    title: '项目实战 2',
    focus: '做一个 Java + Agent 的结合项目',
    weeks: [
      '选题与方案设计',
      '后端接口与工作流联调',
      '可观测性与异常处理',
      '打磨展示与写项目复盘'
    ]
  },
  {
    month: '第 11 个月',
    title: '博客与作品集建设',
    focus: '输出技术文章与个人品牌',
    weeks: [
      '整理项目文章提纲',
      '输出 2 篇技术博客',
      '优化 GitHub 项目主页',
      '整理作品集与简历亮点'
    ]
  },
  {
    month: '第 12 个月',
    title: '实习冲刺',
    focus: '面试、投递、查漏补缺',
    weeks: [
      '模拟面试与八股回顾',
      '项目表达与手撕题训练',
      '简历优化与岗位投递',
      '针对性补短板'
    ]
  }
];

const weeklyGoals = [
  '保持至少 5 天学习打卡',
  'LeetCode Hot100 完成 3 题',
  '推进 Spring / Docker / MySQL 实战复习',
  '整理 1 篇可沉淀为博客的笔记'
];

const tags = ['研一', 'Java 后端', 'Agent', 'Spring', 'Docker', 'MySQL', 'LeetCode', 'GitHub'];

let currentCalendarDate = new Date();
let roadmapView = 'month';

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    return fallback;
  }
}

function writeStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getRecords() {
  const stored = readStorage(STORAGE_KEYS.records, null);
  if (stored) return stored;
  writeStorage(STORAGE_KEYS.records, defaultRecords);
  return defaultRecords;
}

function getRoadmapStatus() {
  const totalWeeks = roadmapData.flatMap((item, monthIndex) => item.weeks.map((_, weekIndex) => `${monthIndex}-${weekIndex}`));
  const fallback = totalWeeks.reduce((accumulator, key, index) => {
    accumulator[key] = index < 6;
    return accumulator;
  }, {});
  const stored = readStorage(STORAGE_KEYS.roadmap, null);
  if (stored) return stored;
  writeStorage(STORAGE_KEYS.roadmap, fallback);
  return fallback;
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getTodayString() {
  return formatDate(new Date());
}

function getMonthKey(dateString) {
  return dateString.slice(0, 7);
}

function getWeekdayIndex(date) {
  const day = date.getDay();
  return day === 0 ? 6 : day - 1;
}

function diffDays(dateAString, dateBString) {
  const dateA = new Date(`${dateAString}T00:00:00`);
  const dateB = new Date(`${dateBString}T00:00:00`);
  const diff = Math.round((dateA - dateB) / 86400000);
  return diff;
}

function calcCurrentStreak(records) {
  const dates = Object.keys(records).sort().reverse();
  if (!dates.length) return 0;
  const todayString = getTodayString();
  let streak = 0;
  let cursor = null;

  if (records[todayString]) {
    cursor = todayString;
  } else {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayString = formatDate(yesterday);
    if (records[yesterdayString]) {
      cursor = yesterdayString;
    } else {
      return 0;
    }
  }

  while (records[cursor]) {
    streak += 1;
    const current = new Date(`${cursor}T00:00:00`);
    current.setDate(current.getDate() - 1);
    cursor = formatDate(current);
  }

  return streak;
}

function calcMonthlyDays(records, monthKey) {
  return Object.keys(records).filter((item) => getMonthKey(item) === monthKey).length;
}

function calcRoadmapProgress(statusMap) {
  const all = Object.keys(statusMap).length;
  const done = Object.values(statusMap).filter(Boolean).length;
  return {
    done,
    all,
    percent: all ? Math.round((done / all) * 100) : 0
  };
}

function renderSidebar() {
  const goalList = document.getElementById('weeklyGoalList');
  const tagList = document.getElementById('tagList');
  goalList.innerHTML = weeklyGoals.map((item) => `<li>${item}</li>`).join('');
  tagList.innerHTML = tags.map((item) => `<span>${item}</span>`).join('');
}

function renderStats() {
  const records = getRecords();
  const roadmapStatus = getRoadmapStatus();
  const today = getTodayString();
  const currentMonth = today.slice(0, 7);
  const todayRecord = records[today];
  const roadmapProgress = calcRoadmapProgress(roadmapStatus);

  document.getElementById('statTodayCheckin').textContent = todayRecord ? '已打卡' : '未打卡';
  document.getElementById('statTodayDuration').textContent = todayRecord ? `学习时长 ${todayRecord.duration} 小时` : '今天还没有学习记录';
  document.getElementById('statCurrentStreak').textContent = calcCurrentStreak(records);
  document.getElementById('statMonthlyDays').textContent = calcMonthlyDays(records, currentMonth);
  document.getElementById('statRoadmapProgress').textContent = `${roadmapProgress.percent}%`;
  document.getElementById('statRoadmapDetail').textContent = `${roadmapProgress.done} / ${roadmapProgress.all} 周已完成`;

  document.getElementById('todayStatusText').textContent = todayRecord ? '今天已经完成学习打卡' : '今天还没有完成打卡';
  document.getElementById('todaySummaryText').textContent = todayRecord
    ? `${todayRecord.content} · 总结：${todayRecord.summary}`
    : '先开始今天的第一段学习，哪怕只有 30 分钟。';
}

function renderRoadmapOverview() {
  const statusMap = getRoadmapStatus();
  const container = document.getElementById('roadmapOverviewList');
  container.innerHTML = roadmapData.map((item, monthIndex) => {
    const total = item.weeks.length;
    const done = item.weeks.filter((_, weekIndex) => statusMap[`${monthIndex}-${weekIndex}`]).length;
    const percent = Math.round((done / total) * 100);
    return `
      <div class="roadmap-overview-item">
        <div class="roadmap-overview-top">
          <div>
            <strong>${item.month} · ${item.title}</strong>
            <div class="muted">${item.focus}</div>
          </div>
          <strong>${percent}%</strong>
        </div>
        <div class="progress-track"><div class="progress-bar" style="width:${percent}%"></div></div>
        <div class="muted">${done} / ${total} 个周目标已完成</div>
      </div>
    `;
  }).join('');
}

function renderLatestRecord() {
  const records = getRecords();
  const latestDate = Object.keys(records).sort().reverse()[0];
  const preview = document.getElementById('latestRecordPreview');
  if (!latestDate) {
    preview.innerHTML = '<div class="record-block"><div class="record-line">还没有打卡记录，去创建你的第一条吧。</div></div>';
    return;
  }
  const record = records[latestDate];
  preview.innerHTML = `
    <div class="record-block">
      <div class="record-title">${latestDate}</div>
      <div class="record-line">学习时长：${record.duration} 小时</div>
      <div class="record-line">学习内容：${record.content}</div>
      <div class="record-line">今日总结：${record.summary}</div>
      <div class="record-line">明日计划：${record.tomorrowPlan}</div>
    </div>
  `;
}

function renderCalendar() {
  const records = getRecords();
  const year = currentCalendarDate.getFullYear();
  const month = currentCalendarDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const grid = document.getElementById('calendarGrid');
  const label = document.getElementById('calendarMonthLabel');
  label.textContent = `${year} 年 ${month + 1} 月`;

  const cells = [];
  const prefix = getWeekdayIndex(firstDay);
  for (let index = 0; index < prefix; index += 1) {
    cells.push('<button type="button" class="calendar-cell empty-day" disabled></button>');
  }

  for (let day = 1; day <= lastDay.getDate(); day += 1) {
    const date = new Date(year, month, day);
    const dateString = formatDate(date);
    const record = records[dateString];
    cells.push(`
      <button type="button" class="calendar-cell ${record ? 'has-record' : ''}" data-date="${dateString}">
        <div class="top">
          <strong>${day}</strong>
          <span class="status-pill ${record ? 'done' : ''}"></span>
        </div>
        <div class="meta">${record ? `${record.duration}h 已打卡` : '未打卡'}</div>
      </button>
    `);
  }

  grid.innerHTML = cells.join('');
  grid.querySelectorAll('.calendar-cell[data-date]').forEach((item) => {
    item.addEventListener('click', () => showDayDetail(item.dataset.date));
  });
}

function showDayDetail(dateString) {
  const records = getRecords();
  const detail = document.getElementById('dayDetailContent');
  const title = document.querySelector('.day-detail-title');
  document.querySelectorAll('.calendar-cell.active').forEach((item) => item.classList.remove('active'));
  const activeCell = document.querySelector(`.calendar-cell[data-date="${dateString}"]`);
  if (activeCell) activeCell.classList.add('active');

  const record = records[dateString];
  title.textContent = `${dateString} 学习记录`;
  if (!record) {
    detail.innerHTML = '这一天还没有打卡记录。可以点进“每日打卡页”补上当天内容。';
    return;
  }
  detail.innerHTML = `
    <div class="record-line">学习时长：${record.duration} 小时</div>
    <div class="record-line">今日学习内容：${record.content}</div>
    <div class="record-line">今日总结：${record.summary}</div>
    <div class="record-line">明日计划：${record.tomorrowPlan}</div>
  `;
}

function renderRoadmap() {
  const statusMap = getRoadmapStatus();
  const container = document.getElementById('roadmapContainer');

  if (roadmapView === 'month') {
    container.innerHTML = roadmapData.map((item, monthIndex) => {
      const done = item.weeks.filter((_, weekIndex) => statusMap[`${monthIndex}-${weekIndex}`]).length;
      return `
        <div class="roadmap-month">
          <div class="roadmap-month-head">
            <div>
              <h4>${item.month} · ${item.title}</h4>
              <div class="muted">${item.focus}</div>
            </div>
            <div class="muted">${done}/${item.weeks.length} 周完成</div>
          </div>
          <div class="roadmap-week-list">
            ${item.weeks.map((week, weekIndex) => `
              <label class="roadmap-week">
                <div class="roadmap-week-main">
                  <strong>第 ${weekIndex + 1} 周</strong>
                  <span>${week}</span>
                </div>
                <input class="week-check" type="checkbox" data-key="${monthIndex}-${weekIndex}" ${statusMap[`${monthIndex}-${weekIndex}`] ? 'checked' : ''}>
              </label>
            `).join('')}
          </div>
        </div>
      `;
    }).join('');
  } else {
    const flatWeeks = roadmapData.flatMap((item, monthIndex) => item.weeks.map((week, weekIndex) => ({
      month: item.month,
      title: item.title,
      label: `第 ${weekIndex + 1} 周`,
      week,
      key: `${monthIndex}-${weekIndex}`
    })));

    container.innerHTML = flatWeeks.map((entry) => `
      <label class="roadmap-week">
        <div class="roadmap-week-main">
          <strong>${entry.month} · ${entry.label}</strong>
          <span>${entry.title}｜${entry.week}</span>
        </div>
        <input class="week-check" type="checkbox" data-key="${entry.key}" ${statusMap[entry.key] ? 'checked' : ''}>
      </label>
    `).join('');
  }

  container.querySelectorAll('.week-check').forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      const status = getRoadmapStatus();
      status[checkbox.dataset.key] = checkbox.checked;
      writeStorage(STORAGE_KEYS.roadmap, status);
      renderStats();
      renderRoadmapOverview();
      renderRoadmap();
    });
  });
}

function bindRoadmapSwitch() {
  document.querySelectorAll('.switch-btn').forEach((button) => {
    button.addEventListener('click', () => {
      roadmapView = button.dataset.view;
      document.querySelectorAll('.switch-btn').forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      renderRoadmap();
    });
  });
}

function bindCalendarToolbar() {
  document.getElementById('prevMonthBtn').addEventListener('click', () => {
    currentCalendarDate = new Date(currentCalendarDate.getFullYear(), currentCalendarDate.getMonth() - 1, 1);
    renderCalendar();
  });
  document.getElementById('nextMonthBtn').addEventListener('click', () => {
    currentCalendarDate = new Date(currentCalendarDate.getFullYear(), currentCalendarDate.getMonth() + 1, 1);
    renderCalendar();
  });
}

function bindCheckinForm() {
  const form = document.getElementById('checkinForm');
  const dateInput = document.getElementById('checkinDate');
  const durationInput = document.getElementById('studyDuration');
  const contentInput = document.getElementById('studyContent');
  const summaryInput = document.getElementById('dailySummary');
  const tomorrowInput = document.getElementById('tomorrowPlan');
  const fillTodayBtn = document.getElementById('fillTodayBtn');

  dateInput.value = getTodayString();

  fillTodayBtn.addEventListener('click', () => {
    dateInput.value = getTodayString();
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const date = dateInput.value;
    if (!date) return;

    const records = getRecords();
    records[date] = {
      duration: Number(durationInput.value) || 0,
      content: contentInput.value.trim() || '未填写',
      summary: summaryInput.value.trim() || '未填写',
      tomorrowPlan: tomorrowInput.value.trim() || '未填写'
    };

    writeStorage(STORAGE_KEYS.records, records);
    renderStats();
    renderLatestRecord();
    renderCalendar();
    showDayDetail(date);

    form.reset();
    dateInput.value = date;
    durationInput.value = records[date].duration;
    contentInput.value = records[date].content;
    summaryInput.value = records[date].summary;
    tomorrowInput.value = records[date].tomorrowPlan;
  });
}

function init() {
  renderSidebar();
  renderStats();
  renderRoadmapOverview();
  renderLatestRecord();
  renderCalendar();
  renderRoadmap();
  bindRoadmapSwitch();
  bindCalendarToolbar();
  bindCheckinForm();

  const today = getTodayString();
  if (getRecords()[today]) {
    showDayDetail(today);
  }

  const pageLoading = document.querySelector('#zx-loading');
  window.addEventListener('load', () => {
    setTimeout(() => {
      pageLoading.style.opacity = '0';
      pageLoading.style.visibility = 'hidden';
    }, 120);
  });
}

document.addEventListener('DOMContentLoaded', init);
