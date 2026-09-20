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
  },
  {
    id: "steamed-egg-bs607-tm",
    name: "日式蒸蛋（美善品調蛋液＋BS607 微波）",
    baseServings: 2,
    warning: "高湯一定要放涼到摸起來不燙手才能跟蛋混合。倒進熱高湯，蛋會當場變成蛋花，救不回來。微波只能用最低火力，用中火或大火蛋會變蜂窩，還可能噴出來。容器絕對不能密封，保鮮膜要留縫。",
    ingredients: [
      { name: "雞蛋（室溫）", amount: 2, unit: "顆", scale: true },
      { name: "水", amount: 330, unit: "g", scale: true },
      { name: "柴魚粉（或鰹魚高湯粉）", amount: 1, unit: "小匙", scale: true },
      { name: "醬油", amount: 1, unit: "小匙", scale: true },
      { name: "味醂", amount: 1, unit: "小匙", scale: true },
      { name: "鹽", amount: 1, unit: "撮", scale: false },
      { name: "蝦仁", amount: 4, unit: "隻", scale: true },
      { name: "香菇（切片）", amount: 2, unit: "朵", scale: true },
      { name: "蔥花或三葉芹", amount: 1, unit: "適量", scale: false }
    ],
    steps: [
      "配料先燙熟：蝦仁和香菇片用滾水燙 1 分鐘，撈起放涼，分裝到兩個耐熱杯或碗的底部。生配料直接放進去，低火力微波不一定會熟。",
      "美善品主鍋加水、柴魚粉、醬油、味醂、鹽。60°C / 速度 2 / 3 分鐘，把調味料化開。",
      "高湯倒出來放涼，涼到手貼杯壁不燙（大約 40°C 以下）。這步不能急。",
      "主鍋洗乾淨擦乾，放入雞蛋和放涼的高湯。速度 3 / 10 秒。不要打更久，會打進空氣變一堆泡泡。",
      "蛋液過細篩網倒進杯子，過兩次最滑。表面的泡泡用湯匙撈掉，或拿紙巾輕輕貼一下吸走。",
      "杯口蓋保鮮膜，一角留縫不要包死，或改用微波專用蓋。",
      "放進 BS607。最省事的做法是選自動行程 14（蒸蛋），機器自己控時，表面會很平滑。",
      "想自己控時就選純微波、最低火力 150W，先加熱 6 分鐘。",
      "打開看：邊緣凝固、中間還會晃，就是對的。再用同火力每次 2 分鐘往上加。",
      "加到輕輕搖容器時，中心整片一起晃、表面不流動就好了。兩杯 150W 大約共 12 到 15 分鐘，一杯約 6 到 8 分鐘。",
      "取出靜置 3 分鐘，用餘溫把中心悶熟。撒上蔥花。"
    ],
    notes: "比例用秤最準：蛋打散後秤重，乘以 3 就是水量。例如 180cc 水要配約 60g 蛋液（中型蛋 1 顆多一點）。蛋多水少會偏硬，這是最常見的失敗原因。容器用方形保鮮盒（Lock&Lock 這類）效果很好，表面會平整如鏡。BS607 有自動行程 14（蒸蛋），實測表面很漂亮，建議直接用；手動則用最低的 150W，時間照上面分段抓。想更保險也可以改蒸氣模式，100°C 蒸 12 到 15 分鐘。微波時間受容器材質和蛋液高度影響很大，第一次做寧可短一點多看幾次，過頭就回不去了。"
  },
  {
    id: "oden-natural",
    name: "天然食材關東煮（昆布柴魚高湯）",
    baseServings: 4,
    warning: "高湯從頭到尾都不能大滾，只能維持鍋邊冒小泡。滾了湯會變混濁死鹹，豆腐和蛋也會變老。昆布水煮到冒泡前就要把昆布撈掉，煮過頭會出黏液和苦味。",
    ingredients: [
      { name: "昆布（10 公分一片）", amount: 2, unit: "片", scale: true },
      { name: "水", amount: 2000, unit: "g", scale: true },
      { name: "柴魚片", amount: 30, unit: "g", scale: true },
      { name: "淡色醬油（薄口最好）", amount: 60, unit: "g", scale: true },
      { name: "味醂", amount: 60, unit: "g", scale: true },
      { name: "清酒", amount: 30, unit: "g", scale: true },
      { name: "鹽", amount: 1, unit: "小匙", scale: true },
      { name: "白蘿蔔（切 3 公分厚圓片）", amount: 600, unit: "g", scale: true },
      { name: "洗米水（煮蘿蔔用）", amount: 1, unit: "適量", scale: false },
      { name: "雞蛋", amount: 4, unit: "顆", scale: true },
      { name: "馬鈴薯（對半切）", amount: 2, unit: "顆", scale: true },
      { name: "玉米（切 3 公分段）", amount: 1, unit: "根", scale: true },
      { name: "蒟蒻（切三角、劃刀）", amount: 200, unit: "g", scale: true },
      { name: "牛蒡（斜切段）", amount: 1, unit: "根", scale: true },
      { name: "厚炸豆腐或油豆腐", amount: 4, unit: "塊", scale: true },
      { name: "新鮮香菇（去蒂劃十字）", amount: 4, unit: "朵", scale: true },
      { name: "高麗菜葉（大片）", amount: 4, unit: "片", scale: true },
      { name: "豬絞肉（包高麗菜捲用）", amount: 200, unit: "g", scale: true },
      { name: "蔥花、薑末（拌肉餡）", amount: 1, unit: "大匙", scale: true },
      { name: "牛番茄或中型番茄（去皮）", amount: 2, unit: "顆", scale: true },
      { name: "干瓢或棉線（綁菜捲）", amount: 1, unit: "適量", scale: false },
      { name: "黃芥末醬（沾著吃）", amount: 1, unit: "適量", scale: false }
    ],
    steps: [
      "昆布用 2000g 冷水泡 30 分鐘以上，時間夠的話冰箱泡一晚最好。",
      "整鍋連昆布開小火加熱，看到鍋邊開始冒小泡（約 60 到 70 度）就把昆布夾出來，不要煮到滾。",
      "轉中火煮到快滾時熄火，倒進柴魚片，靜置 2 分鐘讓它自己沉下去，不要攪。",
      "用篩網濾掉柴魚片，湯不要壓、不要擰，擰了會有腥苦味。",
      "高湯回鍋，加醬油、味醂、清酒、鹽，小火煮 2 分鐘讓酒精跑掉。高湯完成。",
      "白蘿蔔削厚皮，邊緣切掉一圈直角（比較不會煮散），單面劃十字刀約 1 公分深。",
      "蘿蔔用洗米水另外煮 20 分鐘到半透明，撈起用清水沖乾淨。這步是去苦味，不能省。",
      "蒟蒻表面劃斜格，切三角塊，滾水燙 3 分鐘去鹼味，撈起沖水。",
      "牛蒡削皮斜切段，泡水 5 分鐘去澀，再燙 2 分鐘。",
      "油豆腐淋滾水沖掉表面的油。馬鈴薯削皮對半切，先蒸或煮 10 分鐘到半熟。",
      "雞蛋冷水下鍋，水滾後煮 9 分鐘，冰水冰鎮後剝殼。",
      "高麗菜葉燙軟，絞肉加蔥花薑末和一點鹽拌出黏性，包成捲，用干瓢或棉線綁起來。",
      "番茄去蒂，底部劃十字，滾水燙 15 秒後立刻丟冰水，皮會自己捲開，撕掉就好。剝好先冰著。",
      "現在開始疊鍋：蘿蔔、馬鈴薯、牛蒡、蒟蒻、玉米先下，倒入高湯蓋過食材。",
      "最小火煮 40 分鐘。全程保持鍋邊冒小泡就好，看到大滾就轉更小或掀蓋。",
      "加入高麗菜捲和香菇，再煮 20 分鐘。",
      "加入水煮蛋和油豆腐，煮 15 分鐘。蛋不要更早下，泡太久會變硬變死鹹。",
      "熄火。把去皮番茄整顆輕輕放進鍋裡，蓋鍋蓋用餘溫泡 10 分鐘，全程不要再開火。番茄一煮就爛成糊，餘溫剛好泡到溫熱又保持形狀。",
      "熄火後靜置 30 分鐘以上再吃，這段時間才是真正入味的時候。盛碗淋一點鍋裡的湯，旁邊放黃芥末醬。"
    ],
    notes: "這份菜單刻意不用市售黑輪、甜不辣、魚板那類加工煉製品，鮮味改由昆布、柴魚、蘿蔔、香菇、玉米一起出。想加手工丸子，請看另一篇「手工鮮蝦魚丸」，起鍋前 10 分鐘再放進去。番茄一定要去皮，皮不剝在高湯裡會裂開浮得整鍋都是。夏天可以把去皮番茄單獨泡一碗放涼的高湯，冰過再吃，是居酒屋的冷番茄關東煮吃法。隔夜更好吃：放涼後整鍋冰冰箱，隔天小火回溫，但雞蛋和番茄建議先撈出來另外冰，免得過鹹過爛。吃素就把柴魚換成乾香菇 5 朵加曬乾干貝或昆布加倍，豬肉捲改包豆腐和紅蘿蔔絲。湯變少就補水再補一點醬油和味醂，比例大約 5 比 1 比 1。"
  },
  {
    id: "handmade-fish-ball",
    name: "手工鮮蝦魚丸（無添加）",
    baseServings: 4,
    warning: "定型的水絕對不能滾，維持 65 到 70 度、水面只冒細泡。水一滾丸子會直接散掉，撈不回來。魚漿全程要冰，中途覺得溫溫的就整盆放回冰箱 10 分鐘。",
    ingredients: [
      { name: "白肉魚片（鯛魚、虱目魚背都可以）", amount: 300, unit: "g", scale: true },
      { name: "蝦仁（去腸泥）", amount: 100, unit: "g", scale: true },
      { name: "鹽", amount: 6, unit: "g", scale: true },
      { name: "糖", amount: 5, unit: "g", scale: true },
      { name: "白胡椒粉", amount: 1, unit: "小匙", scale: true },
      { name: "太白粉", amount: 20, unit: "g", scale: true },
      { name: "蛋白", amount: 1, unit: "顆", scale: true },
      { name: "冰水", amount: 50, unit: "g", scale: true },
      { name: "薑汁", amount: 1, unit: "小匙", scale: true },
      { name: "蔥白（切末）", amount: 1, unit: "根", scale: true }
    ],
    steps: [
      "魚片擦乾，挑掉魚刺，切小塊。蝦仁一半切小塊、一半留整隻等下增加口感。",
      "魚塊和蝦塊平鋪在盤子上，冷凍 20 分鐘到邊緣微硬，不要凍成冰塊。",
      "用調理機或菜刀把魚肉打成泥。用調理機就分次短按，不要連續轉，會發熱。",
      "魚泥加鹽，先單獨摔打或攪拌 3 分鐘，打到明顯變黏、會牽絲。這步決定丸子彈不彈。",
      "分三次加冰水，每次都拌到完全吸收再加下一次。",
      "加糖、白胡椒、薑汁、蛋白、太白粉拌勻，最後拌入蔥白和留下來的蝦塊。",
      "煮一鍋水，加熱到鍋邊冒細泡就轉最小火，維持不滾的狀態。",
      "手沾冰水，虎口擠出丸子，用湯匙刮進溫水裡。擠完一批就泡著別動。",
      "泡 10 分鐘，丸子浮起來、外表變白定型即可撈出。",
      "撈起泡冰水 1 分鐘再瀝乾，口感會更脆彈。"
    ],
    notes: "做好的丸子放冰箱可以放 2 天，冷凍可以放 1 個月。要放進關東煮就在起鍋前 10 分鐘下鍋，煮太久會吸湯變軟變鹹。比例記法：魚漿重量的 2% 是鹽、6% 是太白粉、15% 是冰水。不加硼砂或磷酸鹽，所以彈性全靠鹽把蛋白質打出來，摔打那步不能偷懶。"
  }
];
