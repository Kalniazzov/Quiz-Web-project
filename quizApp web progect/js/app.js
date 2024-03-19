/*


const box = document.querySelector(".box");
const spans = box.querySelectorAll("span");
const mainPage = document.querySelector(".quizMainPage");
const mainPageButton = document.querySelector(".btn");
const choicePage = document.querySelector(".choicePage");
const choiceBtn = document.querySelector(".choice-btn");
const choiceBackBtn = document.querySelector(".backBtn");

for (const span of spans) {
  span.addEventListener("click", function () {
    clear();
    showProgram(this);
  });
}

//Тазалау функциясы "active" класын өшіреді
function clear() {
  for (const span of spans) {
    span.classList.remove("active");
    span.classList.remove("colorBtn_2");
  }
}

//Бағдарламаның жұмысына жауап беретін функция
function showProgram(thiss) {
  thiss.classList.add("active");

  //Кнопканы басқан кезде орындалатын әркете
  if (thiss == spans[0]) {
    thiss.classList.remove("colorBtn_2");
    //"Sun" Кнопкасының фотосын ошырып жана фото қойу
    spans[0].querySelector("img").src = "../img/sunOnn.png";
    spans[1].querySelector("img").src = "../img/moonOff.png";

    //Html бетінің стилының өзгеруі
    mainPage.style.backgroundImage = "url('../img/mainBg.png')";
    choicePage.style.backgroundImage = "url('../img/choiceWhitePageBg.png')";
    mainPageButton.style.cssText = `
      color: #fff;
      background-color: #476fe6;
      `;
  } else if (thiss == spans[1]) {
    thiss.classList.add("colorBtn_2");
    //"Moon" Кнопкасының фотосын ошырып жана фото қойу
    spans[0].querySelector("img").src = "../img/sunOff.png";
    spans[1].querySelector("img").src = "../img/moonOnn.png";

    //Html бетінің стилының өзгеруі
    mainPage.style.backgroundImage = "url('../img/mainBg2.png')";
    choicePage.style.backgroundImage = "url('../img/choiceDarkPageBg.png')";
    //mainPageButton.setAttribute("target", "_blank");
    mainPageButton.style.cssText = `
      color: #000;
      background-color: #fff;
      border: 3px solid rgba(0, 0, 0, 0.827);
      `;
    choiceBtn.setAttribute("href", "../22PoQuizPage/quizDarkPage.html");
  }
}


mainPageButton.addEventListener("click", function () {
  mainPage.classList.add("upBottom");
  mainPage.classList.remove("upTop");
});
choiceBackBtn.addEventListener("click", function () {
  mainPage.classList.add("upTop");
});
*/

//CHOICE PAGE JS

const box = document.querySelector(".box");
const spans = box.querySelectorAll("span");
const choicePage = document.querySelector(".choicePage");
const choiceBtn = document.querySelector(".choice-btn");
const infoAccor = document.querySelector(".choiceInfo");
const choiceContent = document.querySelector(".choice_content");
for (const span of spans) {
  span.addEventListener("click", function () {
    clear();
    showProgram(this);
  });
}

//Тазалау функциясы "active" класын өшіреді
function clear() {
  for (const span of spans) {
    span.classList.remove("active");
    span.classList.remove("colorBtn_2");
  }
}

infoAccor.addEventListener("click", function () {
  let parentAcor = this.nextElementSibling;
  parentAcor.style.display = "block";

  const parentInnerElements = document.querySelectorAll(".infoNumber");
  for (const parentEl of parentInnerElements) {
    parentEl.addEventListener("click", function () {
      const parentElValue = parentEl.getAttribute("value");

      infoAccor.innerHTML =
        parentElValue +
        ` <img
              src="./img/acordingDownImg.png"
              alt=""
              class="acordingDownImg"
            />`;
      infoAccor.setAttribute("value", parentElValue);
      parentAcor.style.display = "none";
      const erorBtn = document.querySelector(".erorBtn");
      erorBtn.style.cssText = "none";
    });
  }
});

choiceBtn.addEventListener("click", function () {
  const valueInfo = String(infoAccor.getAttribute("value"));
  if (valueInfo == "0") {
    const erorBtn = document.querySelector(".erorBtn");
    erorBtn.style.cssText = `  
        display: block;
        font-size: 20px;
        font-weight: 600;
        line-height: 140%;
        color: red;
        `;
  } else if (valueInfo == "22-PO-103-2kaz-1") {
    choiceBtn.setAttribute("href", "../22PoKazQuizPage/Po1topQUIZWhite.html");
  } else if (valueInfo == "22-PO-103-2kaz-2") {
    choiceBtn.setAttribute("href", "../22PoKazQuizPage/Po2topQUIZWhite.html");
  } else if (valueInfo == "22-PO-103-2rus-1") {
    choiceBtn.removeAttribute("target");
    choiceBtn.setAttribute("href", "../22PoRusQuizPage/boss.html");
  } else if (valueInfo == "22-PO-103-2rus-2") {
    choiceBtn.removeAttribute("target");
    choiceBtn.setAttribute("href", "../22PoRusQuizPage/boss.html");
  } else if (valueInfo == "22-SIB-103-2kaz-1") {
    choiceBtn.removeAttribute("target");
    choiceBtn.setAttribute("href", "../22PoRusQuizPage/boss.html");
  }
});

//Бағдарламаның жұмысына жауап беретін функция
function showProgram(thiss) {
  thiss.classList.add("active");

  //Кнопканы басқан кезде орындалатын әркете
  if (thiss == spans[0]) {
    thiss.classList.remove("colorBtn_2");
    //"Sun" Кнопкасының фотосын ошырып жана фото қойу
    spans[0].querySelector("img").src = "../img/sunOnn.png";
    spans[1].querySelector("img").src = "../img/moonOff.png";

    //Html бетінің стилының өзгеруі
    choicePage.style.backgroundImage = "url('../img/choiceWhitePageBg.png')";

    choiceBtn.addEventListener("click", function () {
      const valueInfo = String(infoAccor.getAttribute("value"));
      if (valueInfo == "0") {
        const erorBtn = document.querySelector(".erorBtn");
        erorBtn.style.cssText = `  
        display: block;
        font-size: 20px;
        font-weight: 600;
        line-height: 140%;
        color: red;
        `;
      } else if (valueInfo == "22-PO-103-2kaz-1") {
        choiceBtn.setAttribute(
          "href",
          "../22PoKazQuizPage/Po1topQUIZWhite.html"
        );
      } else if (valueInfo == "22-PO-103-2kaz-2") {
        choiceBtn.setAttribute(
          "href",
          "../22PoKazQuizPage/Po2topQUIZWhite.html"
        );
      } else if (valueInfo == "22-PO-103-2rus-1") {
        choiceBtn.removeAttribute("target");
        choiceBtn.setAttribute("href", "../22PoRusQuizPage/boss.html");
      } else if (valueInfo == "22-PO-103-2rus-2") {
        choiceBtn.removeAttribute("target");
        choiceBtn.setAttribute("href", "../22PoRusQuizPage/boss.html");
      } else if (valueInfo == "22-SIB-103-2kaz-1") {
        choiceBtn.removeAttribute("target");
        choiceBtn.setAttribute("href", "../22PoRusQuizPage/boss.html");
      }
    });
  } else if (thiss == spans[1]) {
    thiss.classList.add("colorBtn_2");
    //"Moon" Кнопкасының фотосын ошырып жана фото қойу
    spans[0].querySelector("img").src = "../img/sunOff.png";
    spans[1].querySelector("img").src = "../img/moonOnn.png";

    //Html бетінің стилының өзгеруі
    choicePage.style.backgroundImage = "url('../img/choiceDarkPageBg.png')";
    //mainPageButton.setAttribute("target", "_blank");

    choiceBtn.addEventListener("click", function () {
      const valueInfo = String(infoAccor.getAttribute("value"));
      if (valueInfo == "0") {
        const erorBtn = document.querySelector(".erorBtn");
        erorBtn.style.cssText = `  
        display: block;
        font-size: 20px;
        font-weight: 600;
        line-height: 140%;
        color: red;
        `;
      } else if (valueInfo == "22-PO-103-2kaz-1") {
        choiceBtn.setAttribute(
          "href",
          "../22PoKazQuizPage/Po1topQUIZDark.html"
        );
      } else if (valueInfo == "22-PO-103-2kaz-2") {
        choiceBtn.setAttribute(
          "href",
          "../22PoKazQuizPage/Po2topQUIZDark.html"
        );
      } else if (valueInfo == "22-PO-103-2rus-1") {
        choiceBtn.removeAttribute("target");
        choiceBtn.setAttribute("href", "../22PoRusQuizPage/bossDark.html");
      } else if (valueInfo == "22-PO-103-2rus-2") {
        choiceBtn.removeAttribute("target");
        choiceBtn.setAttribute("href", "../22PoRusQuizPage/bossDark.html");
      } else if (valueInfo == "22-SIB-103-2kaz-1") {
        choiceBtn.removeAttribute("target");
        choiceBtn.setAttribute("href", "../22PoRusQuizPage/bossDark.html");
      }
    });
  }
}
