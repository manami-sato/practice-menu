{
  let menuW = "200px"; // menu横幅
  // ①400px ②200px ③100vw
  let menuH = "100vh"; // menu縦幅
  // ①400px ②100vh ③100vh
  let menuC = "#fff";
  let menuL = "auto";
  // ①0 ②auto ③0

  let menuWmax = "100vw";

  const btn = document.querySelector(".hamburgerMenu"); //元となるボタン
  const b1 = document.querySelector(".hamburgerBorder:first-child");
  const b2 = document.querySelector(".hamburgerBorder:nth-child(2)");
  const b3 = document.querySelector(".hamburgerBorder:last-child");
  const menu = document.querySelector(".menu");
  menu.style.width = menuW;
  menu.style.height = menuH;
  menu.style.background = menuC;
	menu.style.left = menuL;
  if (menuW !== menuWmax) {
    //グレーの背景
    let bgc = document.createElement("div");
    const main = document.querySelector("main");
    bgc.classList.add("bgc");
    main.appendChild(bgc);
  }
  // メニュー消す
  const menuRemove = () => {
    b1.removeAttribute("id");
    b2.removeAttribute("id");
    b3.removeAttribute("id");
    btn.removeAttribute("id");
    btn.classList.add("hamburgerMenuRemove");
    menu.removeAttribute("id");
    if (menuW !== menuWmax) {
      console.log("ok");
      let bgc = document.getElementById("bgcAdd");
      bgc.removeAttribute("id");
    }
  };
  // メニューボタン
  let count = 0;
  btn.addEventListener("click", () => {
    count++;
    if (count % 2 == !0) {
      b1.setAttribute("id", "b1Add");
      b2.setAttribute("id", "b2Add");
      b3.setAttribute("id", "b3Add");
      btn.setAttribute("id", "hamburgerMenuAdd");
      btn.classList.remove("hamburgerMenuRemove");
      menu.setAttribute("id", "menuAdd");
      if (menuW !== menuWmax) {
        let bgc = document.querySelector(".bgc");
        bgc.setAttribute("id", "bgcAdd");
        bgc.addEventListener("click", () => {
          count++;
          menuRemove();
        });
      }
    }
    if (count % 2 == 0) {
      menuRemove();
    }
  });
}
