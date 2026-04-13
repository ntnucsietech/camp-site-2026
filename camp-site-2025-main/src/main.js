// 這是nav的
const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('overlay');
const closeMenu = document.getElementById('closeMenu');
function openMenu() {
    sideMenu.classList.add('open');
    overlay.classList.add('open');
}
function closeMenuFn() {
    sideMenu.classList.remove('open');
    overlay.classList.remove('open');
}
hamburger.addEventListener('click', openMenu);
closeMenu.addEventListener('click', closeMenuFn);
overlay.addEventListener('click', closeMenuFn);  // 點遮罩也能關閉
// 點選單內連結後自動關閉
sideMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenuFn);
});

document.querySelectorAll('.map-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelectorAll('.map-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');

        // data-map 對應 dataset.map
        document.getElementById('googleMap').src = this.dataset.map;
    });
});

const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // 切換按鈕 active
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    // 切換內容
    contents.forEach(c => c.classList.remove('active'));
    document.getElementById(tab.dataset.target).classList.add('active');

  });
});

const buttons = document.querySelectorAll('.course-title');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    content.classList.toggle('active');
    const svg = btn.querySelector('svg');
    svg.classList.toggle('rotated');
  });
});

const days = [
    {
        title: '07.06 (一)',
        sessions: [
            { time: '09:00–12:00', tag: '早上', tagClass: 'tag-morning', title: '報到 + 破冰開幕', desc: '《走進 CS》講座', detail: '抵達活動地點後完成報到手續，接著進行破冰活動認識新朋友，並聆聽《走進 CS》講座了解資工領域。' },
            { time: '', tag: '', tagClass: '', title: '午餐時間', desc: '', detail: '' },
            { time: '13:10–16:10', tag: '下午', tagClass: 'tag-afternoon', title: '主題課程一', desc: '製作自己的第一個網站 ——<br>用 HTML & CSS 完成個人名片', detail: '你有沒有發現' },
            { time: '16:20–18:20', tag: '下午', tagClass: 'tag-afternoon', title: '大活動一', desc: '一起拯救原始馬吧', detail: '「一定要把原始馬救回來！」<br>很久很久以前，有一群人們跟隨著一匹「馬」來到了依山傍水的富饒之地，在豐潤的資源之下，「蔻町•安吉尼爾部落」就此創立。 部落創立之後，這隻馬還賦予了他們智慧，以及許多無法解釋的神蹟。 因此，這匹馬便成為了族人們的信仰，並尊稱他為「原始馬」<br>只不過，遠在邊疆的「獅子一族」早已貪圖人類的智慧許久，想盡辦法打聽任何人類壯大的消息。 這次，獅子一族終於抓到了機會，偷走了神聖的原始馬！ 身為部落精銳的你們，必須通過重重關卡提升實力，直到擁有匹敵獅子一族的實力，奪回信仰中的原始馬、拯救蔻町•安吉尼爾部落！' },
            { time: '', tag: '', tagClass: '', title: '晚餐時間', desc: '', detail: '' },
            { time: '19:40–22:10', tag: '晚上', tagClass: 'tag-evening', title: '黑客松Brain Storming', desc: '', detail: '這也許是你人生中的第一次參與黑客松，但別擔心!<br>我們會介紹本次黑客松的主題並介紹提供給各位的資源。因為大家還沒上到什麼課，所以今天分組完事集思廣益時間!' },
        ]
    },
    {
        title: '07.07 (二)',
        sessions: [
            { time: '09:50–11:50', tag: '早上', tagClass: 'tag-morning', title: '選修課一', desc:'電腦硬體選購與裝修<br>AI 的偏見可能比你想的嚴重<br>n8n實踐與原理',detail: '【通識課程｜ 一次了解電腦規格在寫什麼 —— 電腦硬體選購與裝修 】<br>你每天都在用電腦，但你有沒有想過，那個看起來安安靜靜的主機殼裡，到底裝了些什麼？<br>CPU、顯示卡、記憶體、硬碟……這些名詞你可能聽過，但它們各自是做什麼的？<br>買電腦時規格表上那些「核心數、頻率、容量」又到底代表什麼？<br>如果哪天電腦有點小問題，你有沒有可能自己先看懂、甚至動手處理？<br><br>【通識課程｜ AI 的偏見可能比你想的嚴重 —— 從底層原理了解 AI 的社會爭議】<br><br></br>AI 很厲害，可以回答問題、幫你整理資料、生成圖片，甚至看起來好像什麼都知道、什麼都會做。<br>但它一定是對的嗎？<br>科技的發展，可能造成什麼社會問題？<br>該怎麼權衡我們的抉擇，在瞬息萬變的社會中保有自己的中心思想？<br>如何從原理看待 AI，進而與 AI 有更好的互動？<br><br>【通識課程｜ 沒有程式背景也能輕鬆駕馭的流程自動化工具 —— n8n 的實踐與原理】<br><br>你平常會不會也這樣用 AI？像是問問題、請它整理重點、幫忙想文案，好像很方便，但每次都還是得自己一個指令一個指令地下。<br>那如果今天，你不是只有「跟 AI 聊天」，而是可以讓 AI 自己幫你完成一連串任務呢？<br>你不需要會寫很多程式，只要具備一個 Google 帳號，搭配n8n自動化工具，就有機會在這堂課中，把原本只會聊天的 AI，升級成真正能幫你做事的「守護神」！' },
            { time: '', tag: '', tagClass: '', title: '午餐時間', desc: '', detail: '' },
            { time: '13:10–18:10', tag: '下午', tagClass: 'tag-afternoon', title: '主題課程二', desc: '讓網頁動起來 ——<br>用 JavaScript 開發互動式小應用', detail: '結合 AI 圖像生成 API，讓你的 Discord Bot 能夠根據指令產生圖片。' },
            { time: '16:20–18:20', tag: '下午', tagClass: 'tag-afternoon', title: '大活動二', desc: '一起拯救原始馬吧', detail: '「真理，真理是什麼？」<br>「康普特 · 安吉尼爾部落」與「φ波蔻町部落」為了爭奪永生系統的開發而爆發了激烈的對峙，他們各抱持的理論各有優點，卻也都有其缺陷：安吉尼爾部落已經研究出了永生系統的核心機制，但想實現卻需要耗費大量時間；蔻町部落則是透過祭司作為與阿卡西紀錄的連結橋樑，窺視永生奧秘卻無法理解，導致機制殘破而無法運作，在這段爭奪中，身為精銳的你們必須幫助自己的部落，讓真理傾向於你，使得永生系統在原始馬失去活力前盡早實現，鞏固部落的繁榮！' },
            { time: '', tag: '', tagClass: '', title: '晚餐時間', desc: '', detail: '' },
            { time: '19:40–22:20', tag: '晚上', tagClass: 'tag-evening', title: '黑客松', desc: '', detail: '相信這時的大家已經有能力去實踐腦中天馬行空的想法了，勇敢衝吧！' },
        ]
    },
    {
        title: '07.08 (三)',
        sessions: [
            { time: '09:50–11:50', tag: '早上', tagClass: 'tag-morning', title: '主題課程三', desc: '讓地圖說故事 ——<br>用 API 串接實作美食店家標記系統', detail: '你是不是也很好奇——<br>天氣 App 的即時資訊哪裡來？<br>地圖怎麼知道附近有什麼好吃的？<br>為什麼有些網站一打開，就能自動顯示最新資料？<br>答案就是：API！<br><br>在這堂課裡，你會發現，原來自己寫的網頁，<br>也可以像平常用的 App 一樣，和世界連起來 ✨<br><br>📌 課程內容<br>1. 從生活中的網站與 App 認識 API 的用途<br>2. 了解 HTTP 請求與回應的基本概念<br>3. 學會API 相關知識與應用<br>4. 完成美食地圖實作<br><br>🥸☝️ 這堂課中我們將學到<br>1. API 到底是什麼，為什麼現代網站幾乎少不了它<br>2. 如何讓網頁從「靜態展示」升級成「會更新、有功能」的作品<br>3. 怎麼用 JavaScript 獲取外部資料並顯示在頁面上<br>4. 如何把網頁和真實世界串接起來<br><br><br>當你學會 API，你就不只是會做網頁<br>而是開始具備把「資料、功能、服務」整合起來的能力！<br>想讓你的網頁不再只是看起來很好看，而是真的能提供資訊、解決問題、做出作品感？<br>那就快來挑戰看看吧！' },
            { time: '', tag: '', tagClass: '', title: '午餐時間', desc: '', detail: '' },
            { time: '13:10–15:10', tag: '下午', tagClass: 'tag-afternoon', title: '選修課二', desc: '網路安全基礎<br> Python 的基礎與應用<br>Google Maps背後的秘密', detail: '【通識課程｜ 揭開網路駭客的面紗 —— 網路安全基礎 】<br>一個看起來很普通的登入頁面，為什麼可能因為一行輸入，就被直接繞過驗證？<br>一個網站上的小小欄位，又怎麼可能變成攻擊整個系統的入口？<br>想知道網站漏洞到底是怎麼一層一層被拆解的？<br>也想親自挑戰看看，能不能在 CTF 中找出關鍵破綻嗎？<br><br>【通識課程 ｜ 一堂課掌握市佔率最高的程式語言 —— Python 的基礎與應用】<br>你是不是覺得，學程式好像很困難、要讀很多英文、概念又很抽象？<br>如果今天有圖像化的程式，結合現實生活的範例，會不會比較沒那麼可怕?<br>此時如果再給你一個工具，他可以陪你一起理解程式、幫你整理想法，<br>甚至在你卡住的時候給你提示，那完成一個程式專案，是不是就沒有那麼遙遠了？' },
            { time: '15:20–17:20', tag: '下午', tagClass: 'tag-afternoon', title: '主題課程四', desc: '讓畫面更有戲 ——<br>用進階 CSS 設計吸睛字體、選單與動畫效果', detail: '明明都是網頁，為什麼有些看起來就特別舒服、特別有質感，有些卻讓人覺得像「半成品」？<br>其實差別往往不只是內容，而是排版、細節，還有那些讓畫面更順、更生動的轉場與動畫效果。<br><br>📌 課程內容<br>1. 學習更多 CSS 排版方式，建立正確的排版思考<br>2. 理解 position 與 display 的差別與應用<br>3. 認識 &lt;details&gt; 與 &lt;summary&gt; 的實用互動功能<br>4. 實作屬於自己的網頁<br><br>🥸☝️ 這堂課中我們將學到<br>1. 如何讓網頁版面更清楚、更有設計感<br>2. 如何用 CSS 做出自然又吸引人的互動效果<br>3. 如何製作滑動效果與簡單動畫<br>4. 如何把基礎 HTML、CSS 能力進一步升級成真正能做成成品的實力<br><br>這堂課想帶給你的，不只是「會排版」而已，<br>而是讓你開始理解：好的網頁設計，不只要能用，還要好看、好讀、好互動。<br>想讓你的網頁從普通升級成令人眼睛一亮的成品嗎？<br>那這堂課你一定不能錯過！' },
            { time: '', tag: '', tagClass: '', title: '晚餐時間', desc: '', detail: '' },
            { time: '18:30–22:20', tag: '晚上', tagClass: 'tag-evening', title: '大活動三+黑客松', desc: '', detail: '「距離永恆的繁榮，就差這一步了！」<br>在兩個部落盡釋前嫌之後，終於合力研究出了永生系統的可行方案，而距離完成，就剩下最後一步了。 精銳們，原始馬的生命（或許還有那條回家的道路），就靠你們實現了。<br><br>晚間將繼續進行黑客松，各位別忘記做簡報喔!' },
        ]
    },
    {
        title: '07.09 (四)',
        sessions: [
            { time: '09:50–12:00', tag: '早上', tagClass: 'tag-morning', title: '黑客松', desc: '', detail: '最後也最長的一段黑客松時間，我們將逐個體驗各組的創作成果。' },
            { time: '12:00–13:00', tag: '', tagClass: '', title: '午餐時間', desc: '', detail: '' },
            { time: '13:20–15:30', tag: '下午', tagClass: 'tag-afternoon', title: '黑客松報告', desc: '', detail: '各組上台發表成果，評審打分環節。' },
            { time: '15:30–17:20', tag: '下午', tagClass: 'tag-afternoon', title: '黑客松頒獎+ 大合照 + 閉幕', desc: '', detail: '根據我們設定的各評分標準頒發獎項，最後進行大合照與閉幕典禮。' },
            { time: '「艾瑪史東」', tag: '', tagClass: 'tag-evening', title: '<img src="/images/others/stone.PNG" alt="stone" class="stone-img">', desc: '', detail: '' },
        ]
    },
];
let currentDay = 0;
/* ---- Modal ---- */
function openModal(session, dayTitle) {
    if (!session.detail) return;
    document.getElementById('modalTag').innerHTML = session.tagClass
        ? `<span class="tag ${session.tagClass}">${session.tag}</span>`
        : '';
    document.getElementById('modalTitle').textContent = session.title;
    document.getElementById('modalTime').textContent = `${dayTitle}　${session.time}`;
    document.getElementById('modalDetail').innerHTML = session.detail;
    document.getElementById('modalOverlay').classList.add('open');
}
function closeModal() {
    document.getElementById('modalOverlay').classList.remove('open');
}
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
});
/* ---- 桌機表格 (午餐晚餐間塞兩個行程) ---- */
function renderDesktopTable() {
    const timeSlots = [
        { label: '早上', tag: 'tag-morning', isBreak: false, index: 0 },
        { label: '午餐時間', isBreak: true },
        { label: '下午 (1)', tag: 'tag-afternoon', isBreak: false, index: 0 }, // 抓下午第1個行程
        { label: '下午 (2)', tag: 'tag-afternoon', isBreak: false, index: 1 }, // 抓下午第2個行程
        { label: '晚餐時間', isBreak: true },
        { label: '晚上', tag: 'tag-evening', isBreak: false, index: 0 },
    ];

    const tbody = document.getElementById('scheduleBody');
    tbody.innerHTML = timeSlots.map(slot => {
        // 休息列處理
        if (slot.isBreak) {
            return `<tr class="break-row">
                <td colspan="${days.length}">— ${slot.label} —</td>
            </tr>`;
        }

        // 行程列處理
        const cells = days.map((day, di) => {
            // 篩選出該標籤的所有行程，再根據 index 抓取對應的行程
            const matchingSessions = day.sessions.filter(s => s.tagClass === slot.tag);
            const session = matchingSessions[slot.index];

            if (!session) return '<td style="color: #ccc; background: #fafafa;">—</td>';
            
            const clickable = session.detail ? 'class="clickable-cell"' : '';
            
            return `<td ${clickable} data-day="${di}" data-time="${session.time}">
                <div style="font-size: 0.85em; color: #888; margin-bottom: 4px;">${session.time}</div>
                ${session.tag ? `<span class="tag ${session.tagClass}">${session.tag}</span><br>` : ''}
                <div style="font-weight: bold; margin-top: 2px;">${session.title}</div>
                ${session.desc ? `<div style="font-size: 0.85em; color:#777; margin-top: 4px;">${session.desc}</div>` : ''}
                ${session.detail ? '<div style="font-size: 0.75em; color:#aaa; margin-top: 4px;">點擊查看詳情</div>' : ''}
            </td>`;
        }).join('');

        return `<tr>${cells}</tr>`;
    }).join('');

    // 事件監聽 (維持原樣)
    tbody.querySelectorAll('.clickable-cell').forEach(td => {
        td.addEventListener('click', () => {
            const di = parseInt(td.dataset.day);
            const session = days[di].sessions.find(s => s.time === td.dataset.time);
            if (session) openModal(session, days[di].title);
        });
    });

    tbody.querySelectorAll('.clickable-cell').forEach(td => {
      td.style.cursor = 'pointer'; // 重新強制加上游標樣式
      td.addEventListener('click', () => {
          const di = parseInt(td.dataset.day);
          const session = days[di].sessions.find(s => s.time === td.dataset.time);
          if (session) openModal(session, days[di].title);
      });
  });
}
/* ---- 桌機詳情 ---- */
function renderDesktopDetail() {
    const list = document.getElementById('detailList');

    const morning = [];
    const afternoon = [];
    const evening = [];

    days.forEach(day => {
        day.sessions.filter(s => s.detail).forEach(s => {
            const card = `
                <div class="detail-card" data-day="${day.title}" data-time="${s.time}">
                    <div class="detail-card-header">
                        <span class="detail-card-day">${day.title}</span>
                        ${s.tagClass ? `<span class="tag ${s.tagClass}">${s.tag}</span>` : ''}
                    </div>
                    <div class="detail-card-time">${s.time}</div>
                    <div class="detail-card-title">${s.title}</div>
                    ${s.desc ? `<div class="detail-card-desc">${s.desc}</div>` : ''}
                </div>`;

            if (s.tagClass === 'tag-morning') morning.push(card);
            else if (s.tagClass === 'tag-afternoon') afternoon.push(card);
            else if (s.tagClass === 'tag-evening') evening.push(card);
        });
    });

    list.innerHTML = `
        <div class="detail-col">
            <h3 class="detail-col-title">早上</h3>
            ${morning.join('')}
        </div>
        <div class="detail-col">
            <h3 class="detail-col-title">下午</h3>
            ${afternoon.join('')}
        </div>
        <div class="detail-col">
            <h3 class="detail-col-title">晚上</h3>
            ${evening.join('')}
        </div>
    `;

    list.querySelectorAll('.detail-card').forEach(card => {
        card.addEventListener('click', () => {
            const day = days.find(d => d.title === card.dataset.day);
            const session = day.sessions.find(s => s.time === card.dataset.time);
            openModal(session, day.title);
        });
    });
}
/* ---- 桌機 Tab ---- */
document.getElementById('desktopTable').classList.remove('hidden');
document.getElementById('desktopDetail').classList.add('hidden');

document.querySelectorAll('.day-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.day-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        if (tab.dataset.day === 'detail') {
            document.getElementById('desktopTable').classList.add('hidden');
            document.getElementById('desktopDetail').classList.remove('hidden');
        } else {
            document.getElementById('desktopTable').classList.remove('hidden');
            document.getElementById('desktopDetail').classList.add('hidden');
        }
    });
});
/* ---- 手機卡片 ---- */
function renderMobile() {
    document.getElementById('mobileDayTitle').textContent = days[currentDay].title;
    document.getElementById('mobilePrev').disabled = currentDay === 0;
    document.getElementById('mobileNext').disabled = currentDay === days.length - 1;
    const container = document.getElementById('mobileSessions');
    container.innerHTML = days[currentDay].sessions.map((s, i) => `
        <div class="mobile-session ${s.detail ? 'clickable' : ''}" data-index="${i}">
            <div class="mobile-session-time">${s.time}</div>
            ${s.tagClass ? `<span class="tag ${s.tagClass}">${s.tag}</span>` : ''}
            <div class="mobile-session-title">${s.title}</div>
            ${s.desc ? `<div class="mobile-session-desc">${s.desc}</div>` : ''}
            ${s.detail ? `
                <div class="mobile-detail-body" style="display:none;">
                    <p>${s.detail}</p>
                </div>
                <div class="click-hint">▼ 點擊展開詳情</div>
            ` : ''}
        </div>
    `).join('');
    container.querySelectorAll('.mobile-session.clickable').forEach(el => {
        el.addEventListener('click', () => {
            const body = el.querySelector('.mobile-detail-body');
            const hint = el.querySelector('.click-hint');
            const isOpen = body.style.display === 'block';
            body.style.display = isOpen ? 'none' : 'block';
            hint.textContent = isOpen ? '▼ 點擊展開詳情' : '▲ 收起';
        });
    });
}
document.getElementById('mobilePrev').addEventListener('click', () => {
    if (currentDay > 0) { currentDay--; renderMobile(); }
});
document.getElementById('mobileNext').addEventListener('click', () => {
    if (currentDay < days.length - 1) { currentDay++; renderMobile(); }
});
/* ---- 初始化 ---- */
renderDesktopTable();
renderDesktopDetail();
renderMobile();

const cards = document.querySelectorAll('.faq-card');
cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});

const track = document.querySelector('.carousel-track');
const imgs = track.querySelectorAll('img');
let current = 0;
document.querySelector('.next').addEventListener('click', () => {
    current = (current + 1) % imgs.length;
    track.style.transform = `translateX(-${current * 100}%)`;
});
document.querySelector('.prev').addEventListener('click', () => {
    current = (current - 1 + imgs.length) % imgs.length;
    track.style.transform = `translateX(-${current * 100}%)`;
});