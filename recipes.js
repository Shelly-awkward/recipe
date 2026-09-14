// 食譜資料。新增食譜就在這個陣列再加一筆物件。
//
// 欄位說明：
//   id            網址用的英文代號，不能重複、不要有空白
//   name          食譜名稱
//   baseServings  這份食譜原本是幾人份
//   ingredients   材料清單
//     - scale: true   會隨份量調整（原值 ÷ baseServings × 目前份量）
//     - scale: false  不隨份量變動，永遠顯示原值
//   steps         步驟，一段一步，會自動編號
//   warning       （可省略）醒目提醒，會顯示在步驟正上方
//   notes         （可省略）備註
window.RECIPES = [
  {
    id: "mentaiko-pasta",
    name: "明太子義大利麵",
    baseServings: 2,
    ingredients: [
      { name: "義大利麵", amount: 200, unit: "g", scale: true },
      { name: "明太子", amount: 80, unit: "g", scale: true },
      { name: "無鹽奶油", amount: 30, unit: "g", scale: true },
      { name: "鮮奶油", amount: 2, unit: "大匙", scale: true },
      { name: "醬油", amount: 1, unit: "小匙", scale: true },
      { name: "海苔絲", amount: 1, unit: "小把", scale: true },
      { name: "鹽（煮麵水）", amount: 1, unit: "大匙", scale: false },
      { name: "水（煮麵水）", amount: 2, unit: "L", scale: false }
    ],
    steps: [
      "奶油先從冰箱拿出來，放到室溫軟化。",
      "明太子劃開薄膜，用湯匙把魚卵刮進大碗。",
      "大碗裡加入軟化奶油、鮮奶油、醬油，攪拌均勻成醬汁。",
      "煮一大鍋水，水滾後加鹽，下義大利麵，照包裝時間煮。",
      "麵煮好瀝乾，趁熱倒進醬汁碗裡，快速拌勻讓奶油融化。",
      "盛盤，撒上海苔絲就完成。"
    ],
    warning: "醬汁全程不開火，明太子受熱會變硬發腥",
    notes: "沒有鮮奶油可以用煮麵水代替，一次加一匙調整濃稠度。"
    },
  {
    id: "radish-pancake",
    name: "蘿蔔絲煎餅",
    baseServings: 2,
    ingredients: [
      { name: "白蘿蔔（刨絲）", amount: 300, unit: "g", scale: true },
      { name: "鹽（醃蘿蔔用）", amount: 0.5, unit: "小匙", scale: false },
      { name: "板豆腐（壓碎）", amount: 150, unit: "g", scale: true },
      { name: "在來米粉", amount: 80, unit: "g", scale: true },
      { name: "水", amount: 50, unit: "ml", scale: true },
      { name: "蝦米（泡軟切碎）", amount: 1, unit: "大匙", scale: true },
      { name: "油蔥酥", amount: 1, unit: "大匙", scale: true },
      { name: "蔥花", amount: 2, unit: "大匙", scale: true },
      { name: "白胡椒、鹽", amount: 1, unit: "少許", scale: false },
      { name: "油（煎餅用）", amount: 1, unit: "適量", scale: false }
    ],
    steps: [
      "蘿蔔絲加鹽抓勻，放 10 分鐘，用力擠乾水分。",
      "蘿蔔絲、豆腐、蝦米、油蔥酥、蔥花拌在一起，加白胡椒和少許鹽調味。",
      "加在來米粉和水，拌成可以捏成團的稠度。太乾就加一點水。",
      "平底鍋中小火下油，一次舀一勺壓平，一面煎 3 到 4 分鐘。",
      "翻面再煎到兩面金黃即可。"
    ],
    warning: "蘿蔔絲一定要擠乾，不然餅會散開",
    notes: "不放豆腐也可以，口感會比較 Q；放豆腐比較軟嫩。"
    },
  {
    id: "tomato-bacon-pasta-tm",
    name: "番茄培根義大利麵（美善品一鍋到底）",
    baseServings: 4,
    ingredients: [
      { name: "洋蔥（切四塊）", amount: 1, unit: "顆", scale: true },
      { name: "蒜頭", amount: 3, unit: "瓣", scale: true },
      { name: "橄欖油", amount: 30, unit: "g", scale: true },
      { name: "培根（切 2 公分寬）", amount: 100, unit: "g", scale: true },
      { name: "番茄糊 tomato paste", amount: 30, unit: "g", scale: true },
      { name: "整粒番茄罐頭（連汁）", amount: 400, unit: "g", scale: true },
      { name: "水", amount: 500, unit: "g", scale: true },
      { name: "鹽", amount: 1, unit: "小匙", scale: true },
      { name: "糖", amount: 1, unit: "小匙", scale: true },
      { name: "義大利麵（折半）", amount: 300, unit: "g", scale: true },
      { name: "帕瑪森起司", amount: 50, unit: "g", scale: true },
      { name: "羅勒或九層塔", amount: 1, unit: "把", scale: false }
    ],
    steps: [
      "洋蔥和蒜頭放入主鍋，速度 5 / 5 秒。停下來，用刮刀把黏在鍋壁的材料刮下來。",
      "加入橄欖油和培根。Varoma 溫度 / 逆向轉動 / 湯匙速度 / 5 分鐘。量杯拿掉，改放配量籃。",
      "加入番茄糊，100°C / 逆向轉動 / 湯匙速度 / 2 分鐘。這步不要省，酸味會不見。",
      "加入番茄罐頭、水、鹽、糖。先不要開機。",
      "義大利麵折半，攤平放進去，用刮刀壓到完全泡在液體裡。沒泡到的那段會是生的。",
      "100°C / 逆向轉動 / 湯匙速度 / 包裝標示時間 + 3 分鐘（約 13 分鐘）。量杯斜放。",
      "倒進大盤子，撒帕瑪森起司和羅勒，拌一拌。靜置 2 分鐘讓醬汁收稠。"
    ],
    warning: "煮麵時一定要按「逆向轉動」配湯匙速度，忘記按刀片會把麵絞成糊。量杯不要正蓋，要斜放或改用配量籃，100°C 液體會噴出來燙傷。",
    notes: "液體是麵重量的 3 倍，這個比例不要改。海鮮版蝦子最後 3 分鐘再放。素食版培根換成 150g 蘑菇。"
    },
  {
    id: "microwave-yakiniku",
    name: "微波盒燒肉（BS607 蒸氣微波）",
    baseServings: 2,
    ingredients: [
      { name: "燒肉用豬五花薄片", amount: 300, unit: "g", scale: true },
      { name: "洋蔥（切絲）", amount: 0.5, unit: "顆", scale: true },
      { name: "醬油", amount: 2, unit: "大匙", scale: true },
      { name: "味醂", amount: 2, unit: "大匙", scale: true },
      { name: "米酒", amount: 1, unit: "大匙", scale: true },
      { name: "蒜泥", amount: 1, unit: "小匙", scale: true },
      { name: "薑泥", amount: 1, unit: "小匙", scale: true },
      { name: "芝麻油", amount: 1, unit: "小匙", scale: true },
      { name: "黑胡椒", amount: 1, unit: "少許", scale: false },
      { name: "蔥花、白芝麻（裝飾用）", amount: 1, unit: "適量", scale: false }
    ],
    steps: [
      "醬油、味醂、米酒、蒜泥、薑泥、芝麻油拌勻成醃汁。",
      "洋蔥絲鋪在微波盒底部。",
      "肉片攤開鋪在洋蔥上，不要疊太厚，倒入醃汁拌一下。",
      "蓋上盒蓋，蒸氣孔打開，或蓋子留一點縫。",
      "用蒸氣微波模式（不是純微波），中火力先加熱 4 分鐘。",
      "打開拌一次，讓沒熟的部分翻到下面。",
      "再蒸微波 2 到 3 分鐘，到肉全熟沒有粉紅色。",
      "撒黑胡椒、蔥花、白芝麻。"
    ],
    warning: "蒸氣孔一定要打開，全密封的盒子微波會有壓力風險",
    notes: "肉片盡量薄、鋪平不要疊太厚，才能均勻加熱。不同機型火力不同，時間僅供參考，第一次做建議中途多開蓋確認熟度。"
  }
];
