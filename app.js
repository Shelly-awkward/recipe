(function () {
  var MIN = 1, MAX = 12;
  var recipes = window.RECIPES || [];
  var app = document.getElementById("app");
  var back = document.getElementById("back");
  var headTitle = document.getElementById("head-title");

  // 四捨五入到小數點後一位，整數就不顯示小數點
  function fmt(n) {
    return n.toFixed(1).replace(/\.0$/, "");
  }

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  // ---------- 首頁 ----------
  function renderHome() {
    document.title = "我的食譜";
    headTitle.textContent = "我的食譜";
    back.hidden = true;
    app.innerHTML = "";

    if (!recipes.length) {
      app.appendChild(el("p", "empty", "還沒有食譜，請在 recipes.js 加入。"));
      return;
    }
    var ul = el("ul", "list");
    recipes.forEach(function (r) {
      var li = el("li");
      var a = el("a", null, r.name);
      a.href = "#/" + encodeURIComponent(r.id);
      li.appendChild(a);
      ul.appendChild(li);
    });
    app.appendChild(ul);
  }

  // ---------- 食譜頁 ----------
  function renderRecipe(r) {
    var servings = r.baseServings;
    document.title = r.name + "｜我的食譜";
    headTitle.textContent = "我的食譜";
    back.hidden = false;
    app.innerHTML = "";

    app.appendChild(el("h1", "title", r.name));

    // 份量調整
    var bar = el("div", "servings");
    bar.appendChild(el("span", "label", "份量"));
    var stepper = el("div", "stepper");
    var minus = el("button", null, "−");
    minus.type = "button";
    minus.setAttribute("aria-label", "減少份量");
    var num = el("span", "num", String(servings));
    num.setAttribute("aria-live", "polite");
    var plus = el("button", null, "+");
    plus.type = "button";
    plus.setAttribute("aria-label", "增加份量");
    stepper.appendChild(minus);
    stepper.appendChild(num);
    stepper.appendChild(el("span", "unit", "人份"));
    stepper.appendChild(plus);
    bar.appendChild(stepper);
    app.appendChild(bar);

    // 材料
    var secIng = el("section");
    secIng.appendChild(el("h2", null, "材料"));
    var ul = el("ul", "ingredients");
    var amtEls = [];
    r.ingredients.forEach(function (ing) {
      var li = el("li", ing.scale ? null : "fixed");
      li.appendChild(el("span", "name", ing.name));
      var amt = el("span", "amt");
      li.appendChild(amt);
      ul.appendChild(li);
      amtEls.push({ el: amt, ing: ing });
    });
    secIng.appendChild(ul);
    app.appendChild(secIng);

    // 步驟（warning 在正上方）
    var secSteps = el("section");
    secSteps.appendChild(el("h2", null, "步驟"));
    if (r.warning) secSteps.appendChild(el("div", "warning", r.warning));
    var ol = el("ol", "steps");
    (r.steps || []).forEach(function (s) { ol.appendChild(el("li", null, s)); });
    secSteps.appendChild(ol);
    app.appendChild(secSteps);

    // 備註
    if (r.notes) {
      var secNotes = el("section");
      secNotes.appendChild(el("h2", null, "備註"));
      secNotes.appendChild(el("div", "notes", r.notes));
      app.appendChild(secNotes);
    }

    function update() {
      num.textContent = String(servings);
      minus.disabled = servings <= MIN;
      plus.disabled = servings >= MAX;
      amtEls.forEach(function (x) {
        var a = x.ing.amount;
        if (x.ing.scale) a = a / r.baseServings * servings;
        x.el.textContent = fmt(a) + " " + (x.ing.unit || "");
      });
    }
    minus.addEventListener("click", function () {
      if (servings > MIN) { servings--; update(); }
    });
    plus.addEventListener("click", function () {
      if (servings < MAX) { servings++; update(); }
    });
    update();
  }

  // ---------- 路由（用網址 # 後面的部分） ----------
  function route() {
    var hash = location.hash.replace(/^#\/?/, "");
    var id = decodeURIComponent(hash);
    var r = id ? recipes.filter(function (x) { return x.id === id; })[0] : null;
    if (r) renderRecipe(r);
    else renderHome();
    window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", route);
  route();
})();
