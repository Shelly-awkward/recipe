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
    },
  {
    id: "steam-bake-potato",
    name: "奶油香烤馬鈴薯（先蒸後烤）",
    baseServings: 2,
    ingredients: [
      { name: "馬鈴薯（中型）", amount: 2, unit: "顆", scale: true },
      { name: "奶油", amount: 20, unit: "g", scale: true },
      { name: "鹽、黑胡椒", amount: 1, unit: "少許", scale: false },
      { name: "蔥花或巴西利", amount: 1, unit: "適量", scale: false }
    ],
    steps: [
      "馬鈴薯洗淨帶皮，用叉子在表面戳幾個洞。",
      "用蒸氣模式蒸 15 分鐘，蒸到叉子能輕鬆插入。",
      "拿出來對半切開，表面劃幾刀。",
      "每半顆放一小塊奶油，撒鹽和黑胡椒。",
      "換烘烤模式，250 度烤 8 到 10 分鐘，烤到表面金黃。",
      "撒蔥花上桌。"
    ],
    warning: "先蒸再烤才會外脆內軟，直接烤會外焦內硬",
    notes: "想加料可以在放奶油那一步一起加起司絲或培根丁，烤的時候一起融化。"
    },
  {
    id: "shanghai-vegetable-rice",
    name: "上海菜飯",
    baseServings: 4,
    warning: "菜和飯要分開處理。青江菜不要跟米一起放進電鍋煮，煮 40 分鐘葉子會變黃爛掉，飯也會糊。一定是飯煮好之後才把炒好的菜拌進去。",
    ingredients: [
      { name: "白米（電子鍋量杯）", amount: 2, unit: "杯", scale: true },
      { name: "青江菜（約 4 株）", amount: 300, unit: "g", scale: true },
      { name: "生五花肉（切小丁）", amount: 100, unit: "g", scale: true },
      { name: "鹽（醃五花肉用）", amount: 0.5, unit: "小匙", scale: true },
      { name: "米酒（醃五花肉用）", amount: 1, unit: "小匙", scale: true },
      { name: "蒜頭（切片）", amount: 2, unit: "瓣", scale: true },
      { name: "鹽（炒菜用）", amount: 0.5, unit: "小匙", scale: true },
      { name: "白胡椒", amount: 1, unit: "撮", scale: false },
      { name: "麻油（最後拌）", amount: 1, unit: "小匙", scale: false }
    ],
    steps: [
      "白米洗好，加平常的水量，不用減水。按下去煮。",
      "五花肉切小丁，拌入鹽和米酒，放 20 分鐘。這段時間拿來切菜。",
      "青江菜洗乾淨，菜梗和菜葉分開，都切成小丁。切完用廚房紙巾壓乾。",
      "不加油，五花肉直接下鍋小火煸 6 到 8 分鐘。煸到出油、邊緣金黃。不要用大火，外面焦了裡面還是生的。",
      "轉中火，下蒜片炒香，再下菜梗炒 1 分鐘。",
      "下菜葉，大火快炒 30 秒，葉子剛軟就關火。加鹽和白胡椒。炒過頭會發黃發苦。",
      "飯煮好後掀蓋撥鬆，把炒好的菜和肉連油一起倒進內鍋。用飯匙切拌，不要壓。",
      "淋麻油，蓋回鍋蓋悶 5 分鐘。這步讓香氣進到米裡，不要省。"
    ],
    notes: "傳統做法有生米和菜一起煮的版本，但那是瓦斯爐控火，電鍋做很容易失敗。分開做幾乎不會出錯。有鹹肉或臘肉更香，用鹹肉就不用另外醃，炒菜的鹽也要減半。菜梗和菜葉一定要分開下鍋，梗厚葉薄，同時下必有一邊不對。"
  },
  {
    id: "dry-curry-tm",
    name: "日式乾咖哩（美善品一鍋到底）",
    baseServings: 4,
    warning: "從下絞肉那一步開始，全程都要按「逆向轉動」搭配湯匙速度。忘記按，刀片會把絞肉打成肉泥，救不回來。收汁時量杯不要正蓋，要拿掉改放配量籃，不然 100°C 的醬會噴出來燙傷。",
    ingredients: [
      { name: "洋蔥（切四塊）", amount: 1, unit: "顆", scale: true },
      { name: "紅蘿蔔（切大塊）", amount: 80, unit: "g", scale: true },
      { name: "蒜頭", amount: 2, unit: "瓣", scale: true },
      { name: "薑（切片）", amount: 10, unit: "g", scale: true },
      { name: "油", amount: 30, unit: "g", scale: true },
      { name: "豬絞肉（粗絞）", amount: 400, unit: "g", scale: true },
      { name: "咖哩粉", amount: 2, unit: "大匙", scale: true },
      { name: "番茄糊 tomato paste", amount: 30, unit: "g", scale: true },
      { name: "日式咖哩塊（剝碎）", amount: 40, unit: "g", scale: true },
      { name: "醬油", amount: 1, unit: "大匙", scale: true },
      { name: "味醂", amount: 1, unit: "大匙", scale: true },
      { name: "伍斯特醬或中濃醬", amount: 1, unit: "大匙", scale: true },
      { name: "水", amount: 100, unit: "g", scale: true },
      { name: "冷凍青豆", amount: 60, unit: "g", scale: true },
      { name: "鹽、黑胡椒", amount: 1, unit: "少許", scale: false },
      { name: "白飯、溫泉蛋（配著吃）", amount: 1, unit: "適量", scale: false }
    ],
    steps: [
      "洋蔥、紅蘿蔔、蒜頭、薑放進主鍋，速度 5 / 5 秒。停下來，用刮刀把鍋壁的材料刮回鍋底。",
      "加油。Varoma 溫度 / 湯匙速度 / 5 分鐘。量杯拿掉，改放配量籃，讓洋蔥的水氣跑掉。",
      "加咖哩粉和番茄糊。100°C / 逆向轉動 / 湯匙速度 / 2 分鐘。這步不要省，咖哩粉沒炒過會有生粉味。",
      "絞肉剝散丟進去，用刮刀撥開不要黏成一團。Varoma 溫度 / 逆向轉動 / 湯匙速度 / 8 分鐘，量杯拿掉改放配量籃。",
      "加水、咖哩塊、醬油、味醂、伍斯特醬。100°C / 逆向轉動 / 湯匙速度 / 10 分鐘，一樣放配量籃。",
      "加冷凍青豆。100°C / 逆向轉動 / 湯匙速度 / 2 分鐘。",
      "試味道，不夠鹹加鹽和黑胡椒。還太濕就再 Varoma 溫度 / 逆向轉動 / 湯匙速度 / 3 分鐘收汁。",
      "盛飯，鋪上乾咖哩，想要的話打一顆溫泉蛋在上面。"
    ],
    notes: "絞肉一定要買粗絞，細絞在主鍋裡轉幾分鐘就變肉泥了。咖哩塊本身很鹹，第 7 步之前都不要先加鹽。喜歡更乾就多收 3 到 5 分鐘，喜歡濕潤一點就水加到 150g。想加青椒或甜椒，切丁後在第 6 步和青豆一起下，保留脆度。"
  }
];
