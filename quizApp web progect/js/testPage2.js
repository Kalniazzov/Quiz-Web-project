const questions = [
    {
        question: "length(s) негізгі міндеті",
        answers: [
            "жолдық айнымалының ұзындығы есептейді",
            "жолдық айнымалыларды түйістіреді",
            "жолдық айнымалыны кеседі",
            "тексте бос орындарды санайды"
        ],
        zhauap: 0,
    },
    {
        question: "length(s) функциясының типі қандай",
        answers: [
            "Float",
            "String",
            "Real",
            "Integer"
        ],
        zhauap: 1,
    },
    {
        question: "Шарттардан кейін команда орындалады",
        answers: [
            "ешқандай жақша орындалмайды",
            "бұйра жақша ішінде",
            "тіктөртбұрышты жақша ішінде",
            "жай жақша ішінде"
        ],
        zhauap: 1,
    },
    {
        question: "С++ тіліндегі for циклының орындалу реті",
        answers: [
            "for(int i=0, j=20; i<5 && j> 10; i++  j--)",
            "for I in do 5",
            "for i=1 to N do",
            "for (i=0; i<N; i++)"
        ],
        zhauap: 3,
    },
    {
        question: "switch() операторында қолданылатын термин сөздер",
        answers: [
            "If, enum, function",
            "cin, copy,array",
            "else,while,for",
            "case 1,cout,break;"
        ],
        zhauap: 3,
    },
    {
        question: "int main() ... білдіреді",
        answers: [
            "консолдық режим",
            "оператор",
            "функцияны",
            "үрдісті"
        ],
        zhauap: 2,
    },
    {
        question: "struct операторы қызметі",
        answers: [
            "статистика үшін",
            "класс әдісі үшін",
            "мәліметтер базасы үшін",
            "құрылым үшін"
        ],
        zhauap: 3,
    },
    {
        question: "int қандац тип",
        answers: [
            "нақты",
            "бүтін",
            "жолдық",
            "түрлендіру"
        ],
        zhauap: 1,
    },
    {
        question: "float қандай тип",
        answers: [
            "бөлшек",
            "бүтін",
            "жолдық",
            "түрлендіру"
        ],
        zhauap: 0,
    },
    {
        question: "string қандай тип",
        answers: [
            "нақты",
            "бүтін",
            "жолдық",
            "түрлендіру"
        ],
        zhauap: 2,
    },
    {
        question: "Меншіктеу операторын көрсетіңіз",
        answers: [
            "cout<<”a=”<<endl",
            "cin>>a[i]",
            "int i,j;",
            "s+=i"
        ],
        zhauap: 3,
    },
    {
        question: "Директиваны көрсетіңіз",
        answers: [
            "/*    */",
            "#",
            "&",
            "| |"
        ],
        zhauap: 1,
    },
    {
        question: "С++ тілінің ерекшелігі",
        answers: [
            "желі үшін бағдарламалау",
            "алгоритмдік бағдарламалау",
            "объектілі бағытталған бағдарламалау",
            "сызықтық бағдарламалау"
        ],
        zhauap: 2,
    },
    {
        question: "using namespace std командасы не үшін қолданылады",
        answers: [
            "сыртқы файлдармен жұмыс жасау үшін",
            "компиляторға стандартты аттар аймағын пайдалану туралы нұсқаулық болып табылады",
            "іздеу шартын анықтайтын логикалық оператор",
            "мәліметтер базасының жазылу диапазоны"
        ],
        zhauap: 1,
    },
    {
        question: "int main() функциясынан кейін қолданылады",
        answers: [
            "деректер базасын іріктеу және өңдеу",
            "күрделі бағдарламалық әрекеттер",
            "бұйра жақша", // Correct answer
            "команда тобын автоматты түрде орындау"
        ],
        zhauap: 2,
    },
    {
        question: "#include атқаратын қызметі",
        answers: [
            "деректер базасын таңдау және өңдеу үшін",
            "командалар тобын автоматты түрде орындау үшін",
            "деректер базасын сақтау үшін",
            "сыртқы файлды қосу үшін" // Correct answer
        ],
        zhauap: 3,
    },
    {
        question: "iostream инструкциясының қызметі",
        answers: [
            "деректер базасын таңдау және өңдеу үшін",
            "командалар тобын автоматты түрде орындау үшін",
            "деректер базасын сақтау үшін",
            "енгізу-шығару жүйелерін қолдау үшін" // Correct answer
        ],
        zhauap: 3,
    },
    {
        question: "Айнымалыларды инициализациялайтын типтер",
        answers: [
            "copy, include, cin, cout",
            "return, int main(),iostream",
            "cout, cin, copy",
            "int, double, float, string" // Correct answer
        ],
        zhauap: 3,
    },
    {
        question: "Константаның айнымалыдан айырмашылығы",
        answers: [
            "бағдарлама процесінде функция қолданылады",
            "бағдарлама процесінде рәсім қолданылады",
            "бағдарламаны орындау барысында Шартты оператор қолданылады",
            "бағдарламаны орындау барысында өзгерту мүмкін емес" // Correct answer
        ],
        zhauap: 3,
    },
    {
        question: "Константаның жариялануы",
        answers: [
            "int, double",
            "float",
            "array",
            "int const" // Correct answer
        ],
        zhauap: 3,
    },
    {
        question: "Шартты операторды көрсетіңіз",
        answers: [
            "if () else",
            "for",
            "cin",
            "cout"
        ],
        zhauap: 0,
    },
    {
        question: "return не үшін қолданылады",
        answers: [
            "қорытындыны шығару үшін",
            "циклды аяқтау үшін",
            "мәнді қайтару үшін", // Correct answer
            "есептеу үшін"
        ],
        zhauap: 2,
    },
    {
        question: "break не үшін қолданылады",
        answers: [
            "программа денесінен бөлек болу үшін",
            "операторға енгізу үшін",
            "циклдан шығу үшін", // Correct answer
            "шектеулі өлшем үшін"
        ],
        zhauap: 2,
    },
    {
        question: "case не үшін қолданылады",
        answers: [
            "берілген мәнді салыстыру үшін", // Correct answer
            "қорытынды шығару үшін",
            "шарт үшін",
            "кәдімгі шығару операторы"
        ],
        zhauap: 0,
    },
    {
        question: "while () операторының орындалу реті",
        answers: [
            "алдымен енгізу оператор орындалады",
            "алдымен тернарлы оператор орындалады",
            "алдымен айнымалы тексеріледі",
            "алдымен шартты оператор орындалады" // Correct answer
        ],
        zhauap: 3,
    },
    {
        question: "Цикл операторды көрсетіңіз",
        answers: [
            "if",
            "for", // Correct answer
            "cin",
            "cout"
        ],
        zhauap: 1,
    },
    {
        question: "Енгізу операторы",
        answers: [
            "cout",
            "cin", // Correct answer
            "int",
            "struct"
        ],
        zhauap: 1,
    },
    {
        question: "Құрылымның белгіленуі",
        answers: [
            "union",
            "struct", // Correct answer
            "array",
            "class"
        ],
        zhauap: 1,
    },
    {
        question: "Программаның қорытындысы … операторымен белгіленеді",
        answers: [
            "cin",
            "cout", // Correct answer
            "return",
            "enter"
        ],
        zhauap: 1,
    },
    {
        question: "Көрсеткіш дегеніміз не",
        answers: [
            "бұл үрдіс",
            "бұл функция",
            "бұл оператор",
            "бұл айнымалы" // Correct answer
        ],
        zhauap: 3,
    },
    {
        question: "Көрсеткіш жариялануы",
        answers: [
            "- белгісімен",
            "+ белгісімен",
            "жұлдызшамен", // Correct answer
            "жақшамен"
        ],
        zhauap: 2,
    },
    {
        question: "С++ тіліндегі copy атқаратын қызмет",
        answers: [
            "ауыстыру",
            "флажок",
            "тізім",
            "тәуелсіз сілтеме"
        ],
        zhauap: 0,
    },
    {
        question: "Кездейсоқ сан үшін орындалатын функция",
        answers: [
            "for()",
            "rand()", // Correct answer
            "cin",
            "copy"
        ],
        zhauap: 1,
    },
    {
        question: "Бір өлшемді массивтің жариялануы",
        answers: [
            "int main()",
            "double s",
            "int i=0",
            "int n[10]" // Correct answer
        ],
        zhauap: 3,
    },
    {
        question: "Екі өлшемді массивтің жариялануы",
        answers: [
            "int i(4) (5)",
            "n[i]",
            "array [4] [5]",
            "double n[4] [5]" // Correct answer
        ],
        zhauap: 3,
    },
    {
        question: "Көрсеткіштің ерекшелігі",
        answers: [
            "жады көлемі кеңейеді", // Correct answer
            "ауыстыру топтары",
            "топтасу панелі",
            "жолақ"
        ],
        zhauap: 0,
    },
    {
        question: "“\\n” командасы",
        answers: [
            "ауыстыру топтары",
            "аралас тізімдер",
            "жаңа жолға түсу", // Correct answer
            "кнопка"
        ],
        zhauap: 2,
    },
    {
        question: "“\\t” командасы",
        answers: [
            "ауыстыру топтары",
            "аралас тізімдер",
            "жаңа жолға түсу",
            "кесте түрінде көрсетіледі" // Correct answer
        ],
        zhauap: 3,
    },
    {
        question: "Символдық массивтің жариялануы",
        answers: [
            "float str[80]",
            "int str[80]",
            "double str[80]",
            "char str[80]" // Correct answer
        ],
        zhauap: 3,
    },
    {
        question: "Шығару операторы",
        answers: [
            "cout", // Correct answer
            "for",
            "repeat",
            "while"
        ],
        zhauap: 0,
    },
    {
        question: "Функция аталуы",
        answers: [
            "main()",
            "int",
            "else",
            "begin end"
        ],
        zhauap: 0,
    },
    {
        question: "Санның квадарттық түбірін есептейтін функция",
        answers: [
            "Random(x)",
            "Sqr",
            "Sqrt()", // Correct answer
            "Int(x)"
        ],
        zhauap: 2,
    },
    {
        question: "Тармақталған алгоритм – бұл...",
        answers: [
            "сайттағы мәліметтерге байланысты желілік деректер қорын сипаттайтын алгоритм",
            "берілген есепке байланысты сызықты түрде орындалатын алгоритм түрлері",
            "жағдайға байланысты бір немесе басқа әрекеттер тізбегі орындалатын алгоритм.", // Correct answer
            "тек бүтін сандарды реттейтін алгоритм түрлері"
        ],
        zhauap: 2,
    },
    {
        question: "Программадағы тармақталу денесі",
        answers: [
            "ашық және тұйық",
            "бүтін және бүтін емес",
            "толық және толық емес", // Correct answer
            "сызықты және сызықты емес"
        ],
        zhauap: 2,
    },
    {
        question: "while() циклының орындалуы",
        answers: [
            "берілген функцияның бастапқы мәні мен соңғы мәні өрнектеледі",
            "алдымен командалар кем дегенде бір рет орындалады, содан кейін шарт тексеріледі",
            "алдымен шарт тексеріледі, содан кейін командалар орындалады",
            "функцияның тек қана шартын тексереді" // Correct answer
        ],
        zhauap: 3,
    },
    {
        question: "do-while циклының орындалуы",
        answers: [
            "берілген функцияның бастапқы мәні мен соңғы мәні өрнектеледі",
            "алдымен командалар кем дегенде бір рет орындалады, содан кейін шарт тексеріледі",
            "алдымен шарт тексеріледі, содан кейін командалар орындалады",
            "функцияның тек қана шартын тексереді" // Correct answer
        ],
        zhauap: 1,
    },
    {
        question: "for циклының айырмашылығы",
        answers: [
            "берілген функцияның бастапқы мәні мен соңғы мәні өрнектеледі", // Correct answer
            "алдымен командалар кем дегенде бір рет орындалады, содан кейін шарт тексеріледі",
            "алдымен шарт тексеріледі, содан кейін командалар орындалады",
            "функцияның тек қана шартын тексереді"
        ],
        zhauap: 0,
    },
    {
        question: "p=&n анықтайды",
        answers: [
            "p көрсеткіші n элементінің жадысын басқа элементке жазады",
            "p көрсеткіші n элементінің жадысын өзінен алшақтайды",
            "p көрсеткіші n элементінің толық ауыстырып жібереді",
            "p көрсеткіші n элементінің жадысын өзіне жазады", // Correct answer
        ],
        zhauap: 3,
    },
    {
        question: "Көрсеткіш айнымалысын көрсетіңіз",
        answers: [
            "p,n,q",
            "~p,n,~q",
            "&p,&n,&q",
            "*p, n, *q", // Correct answer
        ],
        zhauap: 3,
    },
    {
        question: "(*p)++ анықтайды",
        answers: [
            "бір элемент оқшауланғанын анықтайды",
            "өшіреді",
            "алдымен қолданатын элементті анықтайды",
            "бір элемент қосылуын анықтайды", // Correct answer
        ],
        zhauap: 3,
    },
    {
        question: "int &copy=n анықтайды",
        answers: [
            "n элементі бар тәуелсіз сілтеме",
            "n элементін көшіру керек дегенді анықтайды",
            "n элементі жеке дара көшірме",
            "n элементі бар тәуелді сілтеме", // Correct answer
        ],
        zhauap: 3,
    },
    {
        question: "cmath инструкциясының қызметі",
        answers: [
            "деректер базасын таңдау және өңдеу үшін",
            "командалар тобын автоматты түрде орындау үшін",
            "деректер базасын сақтау үшін",
            "математикалық кітапхананы қолдану үшін", // Correct answer
        ],
        zhauap: 3,
    },
    {
        question: "Мұрагерлік әдістің орындалуы",
        answers: [
            "class B: publicA[]",
            "class B: publicA()",
            "class B: publicA<>",
            "class B: publicA{}", // Correct answer
        ],
        zhauap: 3,
    },
    {
        question: "strcpy функциясының қызметі",
        answers: [
            "өшіреді",
            "есептейді",
            "өрнектейді",
            "көшіреді", // Correct answer
        ],
        zhauap: 3,
    },
    {
        question: "public – бұл класстағы...",
        answers: [
            "қолжетімсіз айнымалы",
            "толықтыру айнымалы",
            "анықталмаған айнымалы",
            "қолжетімді айнымалы", // Correct answer
        ],
        zhauap: 3,
    },
    {
        question: "protected – бұл класстағы сырттан...",
        answers: [
            "қолжетімді емес айнымалы",
            "қолжетімді айнымалы",
            "қолжетімді толықтыру айнымалы", // Correct answer
            "анықталған айнымалы",
        ],
        zhauap: 2,
    },
    {
        question: "private – бұл класстың",
        answers: [
            "өзінен қолжетімді",
            "қолжетімді айнымалы",
            "жабық айнымалы", // Correct answer
            "анықталған айнымалы",
        ],
        zhauap: 2,
    },
    {
        question: "Конструктор – осы класстың…",
        answers: [
            "класстың ішіндегі ерекше функция",
            "класстың айнымалыларын қорғайды",
            "командалар тобын автоматты түрде орындау үшін арналған функция",
            "жаңа объектісі жасалған сайын орындалатын арнайы әдісі.", // Correct answer
        ],
        zhauap: 3,
    },
    {
        question: "Деструктор қызметі",
        answers: [
            "класстың ішіндегі ерекше функция",
            "класстың айнымалыларын қорғайды",
            "командалар тобын автоматты түрде орындау үшін арналған функция",
            "объект жойылған кезде орындалатын арнайы класс әдісі.", // Correct answer
        ],
        zhauap: 3,
    },
    {
        question: "Берілген мысал мұрагерліктің түрі",
        answers: [
            "тізбектелген мұрагерлік",
            "көпдеңгейлі мұрагерлік",
            "тармақталған мұрагерлік",
            "сызықты мұрагерлік", // Correct answer
        ],
        zhauap: 3,
    },
];

  
  let squore = 0;
  let activeClick = 0;
  let activeTrueClick = 0;
  let activeFalseClick = 0;
  let as = 0;
  let time = 300;
  
  const choiceModal = document.querySelector(".modalQuiz2");
  const choiceOverlay = document.querySelector(".overlay2");
  const choiceSubmit = document.querySelector(".choice-Modal-btn");
  
  //Choice Question according
  const questionAcor = document.querySelector(".questionChoice");
  
  //Choice Time according
  const timeAcor = document.querySelector(".choiceTime");
  const timerElement = document.querySelector(".timer");
  const timerModal = document.querySelector(".timerModal");
  
  //Choice Random according
  const randomAcor = document.querySelector(".choiceRandom");
  
  questionAcor.addEventListener("click", function () {
    let parentAcor = this.nextElementSibling;
    parentAcor.style.display = "block";
  
    const parentElements = document.querySelectorAll(".questionNumber");
    for (const parentEl of parentElements) {
      parentEl.addEventListener("click", function () {
        const parentElValue = parentEl.getAttribute("value");
        if (parentElValue == 0) {
          questionAcor.innerHTML = "барлығы";
          questionAcor.setAttribute("value", parentElValue);
        } else {
          questionAcor.innerHTML = parentElValue;
          questionAcor.setAttribute("value", parentElValue);
        }
        parentAcor.style.display = "none";
        //console.log(parentEl.getAttribute("value"));
      });
    }
  });
  
  timeAcor.addEventListener("click", function () {
    let parentAcor = this.nextElementSibling;
    parentAcor.style.display = "block";
  
    const parentInnerElements = document.querySelectorAll(".timeNumber");
    for (const parentEl of parentInnerElements) {
      parentEl.addEventListener("click", function () {
        const parentElValue = parentEl.getAttribute("value");
        if (parentElValue == 0) {
          timeAcor.innerHTML = "жоқ";
          timeAcor.setAttribute("value", parentElValue);
        } else {
          timeAcor.innerHTML = parentElValue + " мин";
          timeAcor.setAttribute("value", parentElValue);
        }
        parentAcor.style.display = "none";
      });
    }
  });
  randomAcor.addEventListener("click", function () {
    let parentAcor = this.nextElementSibling;
    parentAcor.style.display = "block";
  
    const parentInnerElements = document.querySelectorAll(".randomNumber");
    for (const parentEl of parentInnerElements) {
      parentEl.addEventListener("click", function () {
        const parentElValue = parentEl.getAttribute("value");
        randomAcor.innerHTML = parentElValue;
        randomAcor.setAttribute("value", parentElValue);
  
        parentAcor.style.display = "none";
      });
    }
  });
  
  choiceSubmit.addEventListener("click", function () {
    choiceModal.classList.add("active");
    choiceOverlay.classList.add("active");
  
    const valueChoice = Number(questionAcor.getAttribute("value"));
    const valueTime = Number(timeAcor.getAttribute("value"));
    const valuRandom = String(randomAcor.getAttribute("value"));
  
    if (valueTime == 0) {
      time = 0;
      timerElement.style.display = "block";
    } else {
      time = valueTime * 60;
      setInterval(timer, 1000);
    }
    showProgram(valueChoice, valuRandom);
  });
  
  function randomQuestions(valuRandom, valueChoice) {
    if (valuRandom == "ия") {
      const randomNum = Math.floor(Math.random() * valueChoice);
      for (let a = 0; a < valueChoice; a++) {
        console.log(questions[randomNum]["question"]);
        console.log(questions[randomNum]["question"]);
      }
    } else {
      console.log("aa");
    }
  }
  
  function timer() {
    timerElement.style.display = "block";
    let minutes = Math.floor(time / 60);
    let secunds = time % 60;
  
    if (time == 0) {
      time = 0;
      timerModal.style.display = "block";
    } else {
      if (secunds < 10) {
        secunds = "0" + secunds;
      } else {
        secunds;
      }
      timerElement.textContent = `${minutes}:${secunds}`;
      time--;
    }
  }
  function showProgram(valueChoice, valueRandom) {
    if (valueChoice == 0) {
      //HTMl-бетіндегі элементтерді алу
      const testBlock = document.querySelector(".test-blocks");
  
      if (valueRandom == "ия") {
        function shuffleArray(array) {
          for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
          }
        }
        // Перемешиваем массив вопросов
        shuffleArray(questions);
  
        //For циклы арқылы массивтегі обьектерді басынан аяғына дейін шығарады
        for(let a = 0; a < questions.length; a++){
          testBlock.insertAdjacentHTML(
            "beforeend",
            `
              <div class="block" value="${a}">
                <h1 class="question-title">
                  ${a + 1}.${questions[a]["question"]}:
                </h1>
                <ul class="list-answers">
                  <li>
                    <button value="0" class="answer">
                      <span class="radio">A</span>
                      ${questions[a]["answers"][0]}
                    </button>
                  </li>
                  <li>
                    <button value="1" class="answer">
                     <span class="radio">B</span>
                      ${questions[a]["answers"][1]}
                    </button>
                  </li>
                  <li>
                    <button value="2" class="answer">
                     <span class="radio">C</span>
                      ${questions[a]["answers"][2]}
                    </button>
                  </li>
                  <li>
                    <button value="3" class="answer">
                     <span class="radio">D</span>
                      ${questions[a]["answers"][3]}
                    </button>
                  </li>
                </ul>
              </div>
    `
          )
          const block = document.querySelectorAll(".block");
          block[as].classList.add('activeBlock');
          
  
        };
     testBlock.insertAdjacentHTML(
      "afterbegin", 
     ` <div class="btns-block">
     <button class="backBtnBlock">
       <span><img src="../img/backBtnBlock.png" alt=""></span>
       artqa
     </button>
     <button class="nextBtnBlock">
       alga
       <span><img src="../img/nextBtn.png" alt=""></span>
     </button>
   </div>`
     );
      testBlock.insertAdjacentHTML(
        'beforeend', `
        <button class="btn js-modal-open" >
            Tapsyru
          </button>
          <button class="btn4 js-modal-open" data-modal="modalResultQuiz">
            Ari qarai
          </button>
        `
      );
      
      } else {
        
        //For циклы арқылы массивтегі обьектерді басынан аяғына дейін шығарады
        
         
        for(let a = 0; a < questions.length; a++){
          testBlock.insertAdjacentHTML(
            "beforeend",
            `
              <div class="block" value="${a}">
                <h1 class="question-title">
                  ${a + 1}.${questions[a]["question"]}:
                </h1>
                <ul class="list-answers">
                  <li>
                    <button value="0" class="answer">
                      <span class="radio">A</span>
                      ${questions[a]["answers"][0]}
                    </button>
                  </li>
                  <li>
                    <button value="1" class="answer">
                     <span class="radio">B</span>
                      ${questions[a]["answers"][1]}
                    </button>
                  </li>
                  <li>
                    <button value="2" class="answer">
                     <span class="radio">C</span>
                      ${questions[a]["answers"][2]}
                    </button>
                  </li>
                  <li>
                    <button value="3" class="answer">
                     <span class="radio">D</span>
                      ${questions[a]["answers"][3]}
                    </button>
                  </li>
                </ul>
              </div>
    `
          )
          const block = document.querySelectorAll(".block");
          block[as].classList.add('activeBlock');
          
  
        }
     testBlock.insertAdjacentHTML(
      "afterbegin", 
     ` <div class="btns-block">
     <button class="backBtnBlock">
       <span><img src="../img/backBtnBlock.png" alt=""></span>
       artqa
     </button>
     <button class="nextBtnBlock">
       alga
       <span><img src="../img/nextBtn.png" alt=""></span>
     </button>
   </div>`
     )
      testBlock.insertAdjacentHTML(
        'beforeend', `
        <button class="btn js-modal-open" >
            Tapsyru
          </button>
          <button class="btn4 js-modal-open" data-modal="modalResultQuiz">
            Ari qarai
          </button>
        `
      )
      
    }
  
    //HTMl-бетіндегі "answer" кнопкасын алу
  
    const submit2 = document.querySelector(".btn");
    const submitNext2 = document.querySelector(".btn4");
  
    const blockBtns = document.querySelector('.btns-block');
    const backBtnBlock = document.querySelector(".backBtnBlock");
    const nextBtnBlock = document.querySelector(".nextBtnBlock");
  
    const answerBtns = document.querySelectorAll(".answer");
    
    
  
    //"answer" кнопкаларына класстар қосу
    for (const answerButton of answerBtns) {
      answerButton.addEventListener("click", (event) => {
        answerButton.classList.toggle("activeAnswer");
        answerButton.querySelector("span").classList.toggle("radioActive");
      });
    }
  
    //"checkAnswerQuestions" Бұл функция тексеру қызметін атқарады,клиент басқан кнопканы сұрақтың жауабымен салыстырады
    function checkAnswerQuestions(parent) {
    
      if(parent){
        blockBtns.style.justifyContent = "space-between";
        backBtnBlock.style.display = "flex";
        
        backBtnBlock.addEventListener('click', function(){
          
          
          
        })
      
     
      nextBtnBlock.addEventListener('click', function(){
       
       
    
      })
  
      
        const answerBtns = parent.querySelectorAll(".answer");
    
        for (const button of answerBtns) {
          const btnValue = Number(button.value);
          const block = Number(button.closest(".block").getAttribute("value"));
  
          if (button.classList.contains("activeAnswer")) {
            if (questions[block]["zhauap"] == btnValue) {
              activeClick++;
              activeTrueClick++;
              /*
          console.log("Block value " + block + ":");
          console.log(questions[block]["answers"][btnValue] + ":DURYS");
          */
              button.classList.remove("activeAnswer");
              button.classList.add("activeTrueAnswer");
              squore++;
            } else {
              activeClick++;
              activeFalseClick++;
              /*
          console.log("Block value " + block + ":");
          console.log(questions[block]["answers"][btnValue] + ":KATE");
          */
              button.classList.remove("activeAnswer");
              button.classList.add("activeFalseAnswer");
              squore = squore - 0;
            }
          } else {
            if (questions[block]["zhauap"] == btnValue) {
              button.classList.add("activeTrueAnswer");
            }
          }
        }
      }
    }
  
    //Модалный окноның элементерін алу
    const modalElem = document.querySelector(".modalQuiz");
    const modalElemTitle = document.querySelector(".title");
    const modalElemInfo = document.querySelector(".infos");
    const overlay = document.querySelector(".overlay");
    const closeModalBtn = document.querySelector(".modal-close-btn");
    const modalBtn = document.querySelectorAll(".modal-btn");
  
    //back and next btns
    backBtnBlock.addEventListener('click', function(){
  
      const block = document.querySelectorAll(".block");
      block[as].classList.remove("activeBlock");
      
      as--;
      if(block[as] == (questions.length - questions.length)){//0
          this.style.display = "none";
          blockBtns.style.justifyContent = "end";
          block[questions.length - questions.length].classList.add("activeBlock");
      }else{
          nextBtnBlock.style.display = "flex";
          block[as].classList.add("activeBlock");
        
      }
    })
    
    nextBtnBlock.addEventListener('click', function(){
      const block = document.querySelectorAll(".block");
      block[as].classList.remove("activeBlock");
      as++;
      if(as == (questions.length - 1)){
        this.style.display = "none";
        block[questions -1].classList.add("activeBlock");
      }else{
        backBtnBlock.style.display = "flex";
        blockBtns.style.justifyContent = "space-between";
        block[as].classList.add("activeBlock");
  
      }
  
    })
    
  
    //submit and next btns
    submitNext2.style.display = "none";
    submit2.style.display = "block";
  
    submitNext2.addEventListener('click', function (event){
      const block = document.querySelectorAll(".block");
      block[as].classList.remove("activeBlock");
  
      as++;
    
      
      this.setAttribute('value', as)
      const value = this.getAttribute('value');
      if(value == questions.length){
        block[questions.length -1].classList.add("activeBlock");
  
        let modalId = this.getAttribute("data-modal");
        modalElem.setAttribute("data-modal", modalId);
  
        //Модалный окно ішіне тестің нәтижесін қосу
        modalElemTitle.innerHTML = squore + ".00%";
        modalElemInfo.innerHTML = `
                <p class="info">Suraqtar: 
                <strong>${valueChoice}</strong>
                </p>
                <p class="info">Jauap berildi: <strong>${activeClick}</strong></p>
                <p class="info">Durys: <strong>${activeTrueClick}</strong></p>
                <p class="info">Qate: <strong>${activeFalseClick}</strong></p>
    `;
        modalElem.classList.add("active");
        overlay.classList.add("active");
  
        for(let a = 0; a < questions.length; a++){
          block[a].classList.add("activeBlock");
          block[questions.length - questions.length].style.borderTop = "none";
          block[a].style.borderTop = "2px solid #000";
          block[valueChoice - valueChoice].style.paddingTop = "none";
          block[a].style.paddingTop = "20px";
          block[questions.length -1].style.marginBottom = "100px";
        }
  
        submitNext2.remove();
        submit2.remove();
        backBtnBlock.remove();
        nextBtnBlock.remove();
        
      }else{
        block[as].classList.add("activeBlock");
        submitNext2.style.display = "none";
        submit2.style.display = "block";
      }
      
     
    });
  
    //"Submit"-конпкасын басқан кезде "checkAnswerQuestions" функциясы орындалады, Модалный окно шығады
    submit2.addEventListener("click", function (event) {
    
      const parentBlock = document.querySelectorAll(".block");
      
      
      if(parentBlock[as].classList.contains("activeBlock")){
        checkAnswerQuestions(parentBlock[as]);
        event.preventDefault(); //осы элементтің орындалатын стандартты әрекеттерін тоқтату  
      }
      
      this.style.display = "none";
      submitNext2.style.display = "block";
      
    });
     //Модалный окно кнопкасы
     closeModalBtn.addEventListener("click", function () {
      let parentElement = this.closest(".modalQuiz");
      parentElement.classList.remove("active");
      overlay.classList.remove("active");
      submit2.remove();
      
    });
  
    modalBtn.addEventListener("click", function () {
      location.reload();
    });
    } else {
      //HTMl-бетіндегі элементтерді алу
      const testBlock = document.querySelector(".test-blocks");
      const submit = document.querySelector(".btn");
  
      if (valueRandom == "ия") {
        function shuffleArray(array) {
          for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
          }
        }
        // Перемешиваем массив вопросов
        shuffleArray(questions);
        //For циклы арқылы массивтегі обьектерді басынан аяғына дейін шығарады
        for(let a = 0; a < valueChoice; a++){
          testBlock.insertAdjacentHTML(
            "beforeend",
            `
              <div class="block" value="${a}">
                <h1 class="question-title">
                  ${a + 1}.${questions[a]["question"]}:
                </h1>
                <ul class="list-answers">
                  <li>
                    <button value="0" class="answer">
                      <span class="radio">A</span>
                      ${questions[a]["answers"][0]}
                    </button>
                  </li>
                  <li>
                    <button value="1" class="answer">
                     <span class="radio">B</span>
                      ${questions[a]["answers"][1]}
                    </button>
                  </li>
                  <li>
                    <button value="2" class="answer">
                     <span class="radio">C</span>
                      ${questions[a]["answers"][2]}
                    </button>
                  </li>
                  <li>
                    <button value="3" class="answer">
                     <span class="radio">D</span>
                      ${questions[a]["answers"][3]}
                    </button>
                  </li>
                </ul>
              </div>
    `
          )
          const block = document.querySelectorAll(".block");
          block[as].classList.add('activeBlock');
          
  
        }
     testBlock.insertAdjacentHTML(
      "afterbegin", 
     ` <div class="btns-block">
     <button class="backBtnBlock">
       <span><img src="../img/backBtnBlock.png" alt=""></span>
       artqa
     </button>
     <button class="nextBtnBlock">
       alga
       <span><img src="../img/nextBtn.png" alt=""></span>
     </button>
   </div>`
     )
      testBlock.insertAdjacentHTML(
        'beforeend', `
        <button class="btn js-modal-open" >
            Tapsyru
          </button>
          <button class="btn4 js-modal-open" data-modal="modalResultQuiz">
            Ari qarai
          </button>
        `
      )
      
    
       
      } else {
        //For циклы арқылы массивтегі обьектерді басынан аяғына дейін шығарады
     
        for(let a = 0; a < valueChoice; a++){
          testBlock.insertAdjacentHTML(
            "beforeend",
            `
              <div class="block" value="${a}">
                <h1 class="question-title">
                  ${a + 1}.${questions[a]["question"]}:
                </h1>
                <ul class="list-answers">
                  <li>
                    <button value="0" class="answer">
                      <span class="radio">A</span>
                      ${questions[a]["answers"][0]}
                    </button>
                  </li>
                  <li>
                    <button value="1" class="answer">
                     <span class="radio">B</span>
                      ${questions[a]["answers"][1]}
                    </button>
                  </li>
                  <li>
                    <button value="2" class="answer">
                     <span class="radio">C</span>
                      ${questions[a]["answers"][2]}
                    </button>
                  </li>
                  <li>
                    <button value="3" class="answer">
                     <span class="radio">D</span>
                      ${questions[a]["answers"][3]}
                    </button>
                  </li>
                </ul>
              </div>
    `
          )
          const block = document.querySelectorAll(".block");
          block[as].classList.add('activeBlock');
          
  
        }
     testBlock.insertAdjacentHTML(
      "afterbegin", 
     ` <div class="btns-block">
     <button class="backBtnBlock">
       <span><img src="../img/backBtnBlock.png" alt=""></span>
       artqa
     </button>
     <button class="nextBtnBlock">
       alga
       <span><img src="../img/nextBtn.png" alt=""></span>
     </button>
   </div>`
     )
      testBlock.insertAdjacentHTML(
        'beforeend', `
        <button class="btn js-modal-open" >
            Tapsyru
          </button>
          <button class="btn4 js-modal-open" data-modal="modalResultQuiz">
            Ari qarai
          </button>
        `
      )
      
    }
  
    //HTMl-бетіндегі "answer" кнопкасын алу
  
    const submit2 = document.querySelector(".btn");
    const submitNext2 = document.querySelector(".btn4");
  
    const blockBtns = document.querySelector('.btns-block');
    const backBtnBlock = document.querySelector(".backBtnBlock");
    const nextBtnBlock = document.querySelector(".nextBtnBlock");
  
    const answerBtns = document.querySelectorAll(".answer");
    
    
  
    //"answer" кнопкаларына класстар қосу
    for (const answerButton of answerBtns) {
      answerButton.addEventListener("click", (event) => {
        answerButton.classList.toggle("activeAnswer");
        answerButton.querySelector("span").classList.toggle("radioActive");
      });
    }
  
    //"checkAnswerQuestions" Бұл функция тексеру қызметін атқарады,клиент басқан кнопканы сұрақтың жауабымен салыстырады
    function checkAnswerQuestions(parent) {
    
      if(parent){
        blockBtns.style.justifyContent = "space-between";
        backBtnBlock.style.display = "flex";
        
        backBtnBlock.addEventListener('click', function(){
          
          
          
        })
      
     
      nextBtnBlock.addEventListener('click', function(){
       
       
    
      })
  
      
        const answerBtns = parent.querySelectorAll(".answer");
    
        for (const button of answerBtns) {
          const btnValue = Number(button.value);
          const block = Number(button.closest(".block").getAttribute("value"));
  
          if (button.classList.contains("activeAnswer")) {
            if (questions[block]["zhauap"] == btnValue) {
              activeClick++;
              activeTrueClick++;
              /*
          console.log("Block value " + block + ":");
          console.log(questions[block]["answers"][btnValue] + ":DURYS");
          */
              button.classList.remove("activeAnswer");
              button.classList.add("activeTrueAnswer");
              squore++;
            } else {
              activeClick++;
              activeFalseClick++;
              /*
          console.log("Block value " + block + ":");
          console.log(questions[block]["answers"][btnValue] + ":KATE");
          */
              button.classList.remove("activeAnswer");
              button.classList.add("activeFalseAnswer");
              squore = squore - 0;
            }
          } else {
            if (questions[block]["zhauap"] == btnValue) {
              button.classList.add("activeTrueAnswer");
            }
          }
        }
      }
    }
  
    //Модалный окноның элементерін алу
    const modalElem = document.querySelector(".modalQuiz");
    const modalElemTitle = document.querySelector(".title");
    const modalElemInfo = document.querySelector(".infos");
    const overlay = document.querySelector(".overlay");
    const closeModalBtn = document.querySelector(".modal-close-btn");
    const modalBtn = document.querySelectorAll(".modal-btn");
  
    //back and next btns
    backBtnBlock.addEventListener('click', function(){
  
      const block = document.querySelectorAll(".block");
      block[as].classList.remove("activeBlock");
      
      as--;
      if(block[as] == 0){
          this.style.display = "none";
          blockBtns.style.justifyContent = "end";
          block[as].classList.add("activeBlock");
        
  
      }else{
          nextBtnBlock.style.display = "flex";
          block[as].classList.add("activeBlock");
          
        
        
      }
    })
    
    nextBtnBlock.addEventListener('click', function(){
      const block = document.querySelectorAll(".block");
      block[as].classList.remove("activeBlock");
      as++;
      if(as == (valueChoice - 1)){
        this.style.display = "none";
        block[valueChoice -1 ].classList.add("activeBlock");
      }else{
        backBtnBlock.style.display = "flex";
        blockBtns.style.justifyContent = "space-between";
        block[as].classList.add("activeBlock");
  
      }
  
    })
    
  
    //submit and next btns
    submitNext2.style.display = "none";
    submit2.style.display = "block";
  
    submitNext2.addEventListener('click', function (event){
      const block = document.querySelectorAll(".block");
      block[as].classList.remove("activeBlock");
  
      as++;
    
      
      this.setAttribute('value', as)
      const value = this.getAttribute('value');
      if(value == valueChoice){
        block[valueChoice-1].classList.add("activeBlock");
  
        let modalId = this.getAttribute("data-modal");
        modalElem.setAttribute("data-modal", modalId);
  
        //Модалный окно ішіне тестің нәтижесін қосу
        modalElemTitle.innerHTML = squore + ".00%";
        modalElemInfo.innerHTML = `
                <p class="info">Suraqtar: 
                <strong>${valueChoice}</strong>
                </p>
                <p class="info">Jauap berildi: <strong>${activeClick}</strong></p>
                <p class="info">Durys: <strong>${activeTrueClick}</strong></p>
                <p class="info">Qate: <strong>${activeFalseClick}</strong></p>
    `;
        modalElem.classList.add("active");
        overlay.classList.add("active");
  
        for(let a = 0; a < valueChoice; a++){
          block[a].classList.add("activeBlock");
          block[valueChoice - valueChoice].style.borderTop = "none";
          block[a].style.borderTop = "2px solid #000";
          block[valueChoice - valueChoice].style.paddingTop = "none";
          block[a].style.paddingTop = "20px";
          block[valueChoice - 1].style.marginBottom = "150px";
        }
  
        submitNext2.remove();
        submit2.remove();
        backBtnBlock.remove();
        nextBtnBlock.remove();
        
      }else{
        block[as].classList.add("activeBlock");
        submitNext2.style.display = "none";
      submit2.style.display = "block";
      }
      
     
    });
  
    //"Submit"-конпкасын басқан кезде "checkAnswerQuestions" функциясы орындалады, Модалный окно шығады
    submit2.addEventListener("click", function (event) {
    
      const parentBlock = document.querySelectorAll(".block");
      
      
      if(parentBlock[as].classList.contains("activeBlock")){
        checkAnswerQuestions(parentBlock[as]);
        event.preventDefault(); //осы элементтің орындалатын стандартты әрекеттерін тоқтату  
      }
      
      this.style.display = "none";
      submitNext2.style.display = "block";
      
    });
     //Модалный окно кнопкасы
     closeModalBtn.addEventListener("click", function () {
      let parentElement = this.closest(".modalQuiz");
      parentElement.classList.remove("active");
      overlay.classList.remove("active");
      submit2.remove();
      
    });
  
    modalBtn[0].addEventListener("click", function () {
      location.reload();
    });
    modalBtn[1].addEventListener("click", function () {
      location.reload();
    });
    }
  }
  