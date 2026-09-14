# 我的食譜

純靜態的個人食譜網站，放在 GitHub Pages。手機優先，加到主畫面後像 App。

## 檔案

| 檔案 | 用途 |
|------|------|
| `index.html` | 頁面骨架與樣式 |
| `app.js` | 首頁列表、食譜頁、份量換算 |
| `recipes.js` | 食譜資料，新增食譜只改這個檔 |

## 新增食譜

在 `recipes.js` 的 `window.RECIPES` 陣列加一筆：

```js
{
  id: "mentaiko-pasta",          // 網址用的英文代號，不能重複
  name: "明太子義大利麵",
  baseServings: 2,               // 原始份量
  ingredients: [
    { name: "義大利麵", amount: 200, unit: "g", scale: true },      // 隨份量換算
    { name: "鹽（煮麵水）", amount: 1, unit: "大匙", scale: false } // 固定不變
  ],
  steps: ["第一步文字", "第二步文字"],
  warning: "醬汁全程不開火，明太子受熱會變硬發腥", // 可省略
  notes: "備註文字"                                  // 可省略
}
```

份量可在 1 到 12 之間調整，`scale: true` 的材料會用「原值 ÷ baseServings × 目前份量」重算，
四捨五入到小數點後一位，整數不顯示小數點。

## 上線到 GitHub Pages

1. 把這個 repo 推到 GitHub（`main` 分支）。
2. 到 repo 的 **Settings → Pages**。
3. **Source** 選 **Deploy from a branch**，Branch 選 `main`、資料夾選 `/ (root)`，按 Save。
4. 等一兩分鐘，網址是 `https://<帳號>.github.io/recipe/`。

## 加到手機主畫面

- iPhone：Safari 開網址 → 分享 → 加入主畫面。
- Android：Chrome 開網址 → 右上選單 → 加到主畫面。
