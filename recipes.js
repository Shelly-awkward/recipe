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
  }
];
