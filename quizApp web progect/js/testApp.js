const questions = [
  {
      question: "Параметрлерді орнатқан кезде мәтіндік редактордағы беттер орнатылады",
      answers: [
          "Өрістер, бағандар және бет өлшемі",
          "Абзацтар аралығы және қаріп көрінісі",
          "Фон және бет шекаралары, шегініс",
          "Қаріп түрі, бет өлшемі", 
      ],
      zhauap: 0,
  },
  {
      question: "Word бағдарламасына белгілі бір мақсатқа жету үшін алдын ала жазылған әрекет тәртібін беретін нұсқаулар тізімі",
      answers: [
          "Колонтитул",
          "Макрос",
          "Нұсқаулық",
          "Интервал",
      ],
      zhauap: 1,
  },
  {
      question: "Пернелер тіркесімін пайдаланып, соңғы әрекетті болдырмауы командасы",
      answers: [
          "Ctrl + Z",
          "Ctrl + A",
          "Ctrl + C",
          "Ctrl + V",
      ],
      zhauap: 0,
  },
  {
      question: "Құжаттағы барлық деректерді қай пернелер тіркесімін пайдаланып таңдаймыз",
      answers: [
          "Ctrl + Z",
          "Ctrl + A",
          "Ctrl + C",
          "Ctrl + V",
      ],
      zhauap: 1,
  },
  {
      question: "Таңдалған деректерді алмасу буферіне қандай пернелер тіркесімін пайдаланып көшіру",
      answers: [
          "Ctrl + Z",
          "Ctrl + A",
          "Ctrl + C",
          "Ctrl + V",
      ],
      zhauap: 2,
  },
  {
      question: "Контекстік мәзір пәрменін пайдаланып, бір суретті екіншісіне ауыстыру",
      answers: [
          "Көшіру",
          "Суретті өзгерту",
          "Тақырыпты енгізу",
          "Сурет форматы",
      ],
      zhauap: 1,
  },
  {
      question: "Microsoft Excel (MS Excel) - бұл",
      answers: [
          "Мәтіндік құжаттарды қарау, өзгерту және басып шығаруға арналған windows қосымшасы",
          "Windows операциялық жүйесін басқаратын ақпаратты басқару жүйесі",
          "Электрондық кестелерді өңдеуге арналған бағдарлама",
          "Суретті құруға және өңдеуге арналған бағдарлама",
      ],
      zhauap: 2,
  },
  {
      question: "MS Excel-де кестенің негізгі құрылымдық элементі баған мен жолдың қиылысында орналасқан",
      answers: [
          "Ұяшық",
          "Жол",
          "Ұяшықтың мекен-жайы",
          "Формуласы",
      ],
      zhauap: 0,
  },
  {
      question: "MS Excel-де бағанның белгілеуінен және жол нөмірінен тұратын кестенің жеке ұяшығын көрсету",
      answers: [
          "Ұяшықтың мекен-жайы",
          "Есептеу нәтижесі",
          "Ұяшыққа енгізілген  формуласы",
          "Ауқымы",
      ],
      zhauap: 0,
  },
  {
      question: "MS Excel A1 ұяшығында сақталатын санды A2 және A3 ұяшықтарында сақталатын сандардың қосындысына бөлу керек.Формуланы дұрыс жазу",
      answers: [
          "=А1:(А2+А3)",
          "=А1/СУММ(А2, А3)",
          "=А1/(А2+А3)",
          "=А1/А2+А3",
      ],
      zhauap: 2,
  },
  {
    question: "MS Excel-де Диаграмма шебері қолданылады",
    answers: [
        "Мүмкіндіктер жасауды жеңілдету үшін",
        "Графиктер мен диаграммалардың барлық түрлерін жасау үшін",
        "Ұяшықтағы мәтінді пішімдеуді жеңілдету үшін",
        "Жұмыс кітабын рұқсатсыз кіруден қорғау үшін", 
    ],
    zhauap: 1,
  },
  {
    question: "MS Excel-ге ақпаратты енгізудің ең кішкентай элементі",
    answers: [
        "Ұяшық",
        "Кесте",
        "Жол",
        "Баған", 
    ],
    zhauap: 0,
  },
  {
    question: "Prezi бағдарламасында жаңа презентацияны жасау",
    answers: [
        "Файл > жаңа презентация жасаңыз",
        "Жаңа презентация опциясын таңдаңыз",
        "Презентация жасау таңдау",
        "Презентация жасау опциясын таңдаңыз", 
    ],
    zhauap: 1,
  },
  { 
    question: "Prez слайдтардың ретін өзгерту",
    answers: [
        "Кесу және қою",
        "Слайдтар мәзірінде 'жоғары/төмен жылжыту' мүмкіндігін пайдалану",
        "Слайдты кенептегі жаңа орынға сүйреу",
        "Слайдтардың ретін өзгерту және қою", 
    ],
    zhauap: 1,
  },
  {
    question: "Prezi-де слайдқа жаңа элементті (мәтін, сурет) қосуға",
    answers: [
        "Өңдеу мәзіріндегі 'элемент қосу' түймесін пайдалану",
        "Элемент файлын слайдқа сүйреу",
        "Элементтер мәзірі > жаңа қосу",
        "Файлды өңдеу мәзіріне сүйреу", 
    ],
    zhauap: 0,
  },
  {
    question: "Prezi-де слайдтар арасындағы ауысуларға анимацияны қолдану",
    answers: [
        "Слайдты таңдап,'Анимация Қосу' түймесін басу",
        "Слайд параметрлері мәзірінде анимация опцияларын пайдалану",
        "Анимацияны эффекттер кітапханасынан слайдқа сүйреу",
        "Слайдтар арасында слайдты таңдау",
    ],
    zhauap: 1,
  },
  {
    question: "Prezi - дегі дайын презентацияны бөлісуге",
    answers: [
        "Экспорттау > презентация файлын бөлісу",
        "Оң жақ бұрышындағы бөлісу мүмкіндігін пайдалану",
        "Сақталған презентацияны электрондық пошта арқылы жіберу",
        "Презент презентация файлын бөлісу", 
    ],
    zhauap: 1,
  },
  {
    question: "Жобадағы бейнеклиптердің ретін қалай өзгерту",
    answers: [
        "Кесу және қою",
        "'Жоғары/төмен жылжыту' мүмкіндігін пайдалану",
        "Бейнеклипті жаңа орынға сүйреу",
        "Функцию функцияны пайдалану-кесу",
    ],
    zhauap: 1,
  },
  {
    question: "Canva-дағы құралдарда логотиптер,брендбуктар және визиткалар жасауға арналған",
    answers: [
        "Иллюстрациялар",
        "Презентациялар",
        "Брендинг", 
        "Әлеуметтік медиа",
    ],
    zhauap: 2,
  },
  {
    question: "Canva-ға экспорттау үшін файл пішіміне қолдау көрсетілген",
    answers: [
        "PDF", 
        "EXE",
        "SWF",
        "DOCX",
    ],
    zhauap: 0,
},
{
    question: "Canva-да құрал интерактивті презентациялар жасауға және олардың тиімділігін бақылау мүмкіндіктері",
    answers: [
        "Мәтін",
        "Слайд шебері",
        "Презентация", 
        "Проектор",
    ],
    zhauap: 2,
},
{
  question: "Canva-дағы 'элементтер' функциясының қызметі",
  answers: [
      "Мәтінді қосу және өңдеу мүмкіндігі",
      "Векторлық иллюстрациялар, белгішелер мен пішіндер жиынтығы", 
      "Проекта жобаның өзгеру тарихын шолу режимі",
      "Қолмен сурет салу құралы",
  ],
  zhauap: 1,
},
{
  question: "Canva-да жүктелген кескінге негізделген түстер палитрасын автоматты түрде таңдауға мүмкіндік беретін функция",
  answers: [
      "Градиент",
      "Монохром",
      "Түс схемасы", 
      "Толтыру",
  ],
  zhauap: 2,
},
{
  question: "Windows Movie Maker-де фильмді орнатуға режимдері",
  answers: [
      "Уақыт шкаласы режимінде",
      "Өшіру режимінде",
      "Альфа араластыру режимінде",
      "Бағдарламалар", 
  ],
  zhauap: 0,
},
{
  question: "Movie Maker бағдарламасына музыкалық фонды қосу",
  answers: [
      "«Аудио қосу» түймешігін пайдалану",
      "Аудио файлды монтаждау аумағына жылжыту",
      "«Аудио» «Өңдік музыканы қосу» мәзірі", 
      "Аудиофайлды жылжыту",
  ],
  zhauap: 0,
},
{
  question: "Windows Movie Maker - бұл",
  answers: [
      "Фильмді компьютердің қатты дискісіне файл ретінде сақтауға немесе сыртқы медиаға жазуға болады",
      "Клип, сурет, бейне, эффектілердің орналасуы мен ұзақтығы туралы ақпарат",
      "Импортталған бейнеклип, аудиоклип, сурет, дыбыстық файлдар жиынтығы",
      "бейнекамерада қолданылатын медиа мазмұнының толық көшірмесі", 
  ],
  zhauap: 2,
},
{
  question: "Екі бейнеклиптің ауысу әсерін қолдану",
  answers: [
      "Бейнеклипті таңдап,'ауысуды Қосу' түймесін басу",
      "Меню мәзірде 'ауысу эффектісі' функциясын қолдану",
      "Бейнеклиптер арасында қажетті әсерді сүйреныз",
      "Ауысу әсерін қолдануға болады", 
  ],
  zhauap: 2,
},
{
  question: "Movie Maker-де дайын бейнені сақтау",
  answers: [
      "Файл - жобаны сақтау",
      "Видео экспорттау - бейнені сақтау",
      "Бағдарламаның жоғарғы оң жақ бұрышындағы 'Сақтау' түймесін басу", 
      "Файл - басқаша сақтау",
  ],
  zhauap: 1,
},
{
  question: "Movie Maker бағдарламасына жаңа бейнеклипті қосуға",
  answers: [
      "Орнату аймағын оң жақ шертіп, 'бейне қосу'опциясын таңдаңыз",
      "Файл - жаңа бейнеклип",
      "Бейне файлын бағдарлама терезесіне сүйреңіз",
      "Жаңа бейнеклип қосыңыз", 
  ],
  zhauap: 2,
},
{
  question: "Windows Movie Maker-де дайын фильмдерді сақтау форматы",
  answers: [
      "AVI",
      "MSWM",
      "WMV",
      "WMA", 
  ],
  zhauap: 2,
},
{
  question: "Windows Movie Maker-де фильмдегі тақырыптарды орналастырудың тәсілдері қолдану",
  answers: [
      "Фильмнің кез-келген клипіне қабаттасу режимінде",
      "Фильмнің алғашқы клипінің алдында және соңғысынан кейін",
      "Тек қимылсыз суреттері бар фильм учаскелеріне қабаттасу режимінде",
      "Бағдарламалар", 
  ],
  zhauap: 0,
},
{
  question: "Windows Movie Maker-де дайын фильмдерді сақтау форматы",
  answers: [
      "AVI",
      "MSWM",
      "WMV",
      "WMA", 
  ],
  zhauap: 2,
},
{
  question: "Нүктелік кескін бірлігі",
  answers: [
      "Пиксел",
      "Растр",
      "Дюйм",
      "битах"
  ],
  zhauap: 0,
},
{
  question: "Экран ажыратымдылығы өлшенеді",
  answers: [
      "Битах",
      "Дюйм",
      "Точк дюйм",
      "Пиксел"
  ],
  zhauap: 3,
},
{
  question: "Қағаз кескінінің (фотосуреттің) өлшемін өлшеуге болады",
  answers: [
      "Кластер",
      "Растр",
      "Точках на дюйм",
      "Миллиметрах"
  ],
  zhauap: 1,
},
{
  question: "Қосылған аймақты таңдау үшін құрал қолданылады",
  answers: [
      "Сиқырлы таяқша (Волшебная палочка)",
      "Перо",
      "Лассо",
      "Кластерах"
  ],
  zhauap: 0,
},
{
  question: "Нүктелік кескіннің пішімі болуы мүмкін",
  answers: [
      "Tiff",
      "Cdr",
      "Odt",
      "Png"
  ],
  zhauap: 0,
},
{
  question: "800x600- бұл сан",
  answers: [
      "Ені мен биіктігі бойынша пиксель",
      "Дюйм санына пиксель",
      "Бірлік ұзындығына нүктелік нүктелік",
      "Программалар"
  ],
  zhauap: 0,
},
{
  question: "Қабаттар кескін пішімінде қолдануы",
  answers: [
      "XCF",
      "GIF",
      "JPEG",
      "ODT"
  ],
  zhauap: 0,
},
{
  question: "RGB түс моделі бар",
  answers: [
      "3 түсті арна",
      "3+1 түсті арна",
      "4 түсті арна",
      "Программалар"
  ],
  zhauap: 0,
},
{
  question: "CMYK түс моделі бар",
  answers: [
      "4 түсті арна",
      "3+2 түсті арна",
      "3 түсті арна",
      "Программалар"
  ],
  zhauap: 0,
},
{
  question: "GIMP-де ойнату режимі жоқ",
  answers: [
      "CMYK",
      "RGB",
      "Градация серого",
      "Программалар"
  ],
  zhauap: 0,
},
{
  question: "Графикалық редакторлардың векторлық атауы",
  answers: [
      "Corel Draw",
      "Abode Photoshop",
      "Paint",
      "Sketch"
  ],
  zhauap: 0,
},
{
  question: "Растрлық графикалық редактор",
  answers: [
      "Мәтіндік ақпаратты түрлендіру және графикалық",
      "Компьютер жадында нүктелер жиынтығы ретінде сақталған суреттерді жасау және өңдеу",
      "Суреттерді жасау және өңдеу",
      "Геометриялық фигуралар"
  ],
  zhauap: 1,
},
{
  question: "Растрлық графикалық редакторда қолданылатын ең аз объект",
  answers: [
      "Геометриялық фигура",
      "Символы (таныс)",
      "Экран нүктесі (пиксель)",
      "Бөлу, шеңбер, безендіру"
  ],
  zhauap: 2,
},
  {
      question: "Векторлық графикалық редакторда қолданылатын ең аз объект",
      answers: [
          "Геометрическая фигура",
          "Символ (знакоместо)",
          "Точка экрана (пиксель)",
          "Шеңбер бөлу, безендіру"
      ],
      zhauap: 0,
  },
  {
      question: "Графикалық редактордағы негізгі операцияларға мыналар жатады",
      answers: [
          "Бөлу, шеңбер, безендіру",
          "Бөлектеу, көшіру, қою",
          "Жылжыту, жою, өңдеу",
          "Программалар"
      ],
      zhauap: 1,
  },
  {
      question: "Графикалық редактордың функциялары",
      answers: [
          "Сурет салу суретті өзгерту суретті жою",
          "Сурет пен мәтінді енгізу енгізілген сурет пен мәтінді өңдеу және өзгерту",
          "Сурет салу және оны басқару кескінге мәтін қосу түстер палитрасымен жұмыс сыртқы кіріс-шығыс құрылғыларымен жұмыс",
          "Сыртқы кіріс-шығыс құрылғыларымен жұмыс"
      ],
      zhauap: 2,
  },
  {
      question: "Аталған файл кеңейтімдерінің қайсысы графикалық нысандарға жатпайды",
      answers: [
          ".PNG",
          ".Dwg",
          ".JPG",
          ".DOC"
      ],
      zhauap: 1,
  },
  {
      question: "Adobe Photoshop графикалық редакторында дұрыс емес туралы мәлімдемені көрсетіңіз",
      answers: [
          "Кеңейтімі бар суреттерді оқуды қолдамайды .bmp",
          "Бастапқы атауы-дисплей",
          "Сценарилермен жұмыс істеуге мүмкіндік бар",
          "Векторлық графикалық редактор"
      ],
      zhauap: 0,
  },
  {
      question: "Растрлық кескін үшін ең жоғары сапа кеңейтімі бар форматта белгіленеді",
      answers: [
          ".PNG",
          ".JPEG",
          ".GIF",
          ".EXE"
      ],
      zhauap: 1,
  },
  {
      question: "Қабаттарды қолдайтын кескін пішімінің кеңейтімін көрсетіңіз",
      answers: [
          ".GIF",
          ".PNG",
          ".XCF",
          ".EXE"
      ],
      zhauap: 2,
  },
  {
      question: "Өз ресурстарын желі пайдаланушыларына ұсынатын компьютер",
      answers: [
          "Пайдаланушы",
          "Клиент",
          "Сервер",
          "Маршрутизатор"
      ],
      zhauap: 2,
  },
  {
      question: "Компьютерлік желінің жалпыланған геометриялық сипаттамасы",
      answers: [
          "Желі топологиясы",
          "Желі сервері",
          "Қашықтағы компьютерлер желісі",
          "Маршрутизатор"
      ],
      zhauap: 0,
  },
  {
      question: "Әлемдік деңгейдегі ғаламдық компьютерлік желі",
      answers: [
          "WWW",
          "E-mail",
          "Интранет",
          "gmail"
      ],
      zhauap: 0,
    
  },
  {
    question: "Компьютерлік желілердің негізгі түрлері-желілер",
    answers: [
        "Жергілікті, жаһандық, аймақтық",
        "Клиенттік, корпоративтік, халықаралық",
        "Әлеуметтік, ойын-сауық",
        "Бизнеске бағытталған"
    ],
    zhauap: 0,
},
{
    question: "Компьютерлік желідегі түйін сервер болып табылады",
    answers: [
        "Желілік компанияның бас кеңсесінің ғимаратында орналасқан",
        "Байланыстыратын басқа компьютерлер желісі",
        "Желілік деректер базасы орналасқан",
        "Қашықтағы компьютерлер желісі"
    ],
    zhauap: 1,
},
{
    question: "Компьютерлік желілердің негізгі компоненттеріне жоғарыда айтылғандардың барлығын жатқызуға болады",
    answers: [
        "Сервер, клиенттік машина, операциялық жүйе, желілер",
        "Кеңсе пакеті, желіге кіру нүктесі, телефон кабелі, хостинг компаниясы",
        "Желі пайдаланушылары, веб-сайттар, веб-дүкендер, хостинг компаниясы",
        "Барлық желілік компьютерлердің физикалық байланысы"
    ],
    zhauap: 0,
},
{
    question: "Компьютерлік желіде ақпарат алмасу ол",
    answers: [
        "Тәуелсіз шағын деректер жиынтығы (пакеттер)",
        "Байттық тәуелсіз беру",
        "Түйіндер арасындағы қашықтық ұзақтығы бойынша кезектілік",
        "Спутниктік байланыс, күн сәулесі, магнит өрісі, телефон"
    ],
    zhauap: 0,
},
{
    question: "Компьютерлік желінің компоненттері",
    answers: [
        "Серверлер, хаттамалар, клиенттік машиналар, байланыс арналары",
        "Клиенттік компьютерлер, смартфондар, планшеттер, Wi-Fi",
        "E-mail, TCP, IP, LAN",
        "Спутниктік деректерді қабылдау станциясында"
    ],
    zhauap: 0,
},
{
    question: "Жергілікті компьютерлік желі",
    answers: [
        "LAN",
        "MAN",
        "WAN",
        "E-mail"
    ],
    zhauap: 0,
},
{
    question: "Ғаламдық компьютерлік желі",
    answers: [
        "LAN",
        "MAN",
        "WAN",
        "E-mail"
    ],
    zhauap: 2,
},
{
    question: "Бірнеше желіні қосу",
    answers: [
        "Желі аралық бірлестік",
        "Серверлік байланыс",
        "Жұмыс тобы",
        "Интранет"
    ],
    zhauap: 0,
},
{
    question: "Компьютерлік желіде міндетті түрде болуы керек",
    answers: [
        "Хаттама",
        "Үзден астам компьютер",
        "WWW-ге спутниктік шығу",
        "E-mail"
    ],
    zhauap: 0,
},
{
    question: "Adobe Illustrator бағдарламасы мыналарға арналған",
    answers: [
        "Жарқын иллюстрациялар, белгішелер, үлгілер, логотиптер, баспа макеттері және басқа графикалық элементтерге",
        "Мәтіннің орналасуына",
        "Фильмдерді модельдеуіне",
        "Суретті кескін жасауға"
    ],
    zhauap: 0,
},
{
    question: "Adobe Illustrator бағдарламасында графиканы сайт беттеріне шығару үшін қандай құрал қолданылады",
    answers: [
        "Безье",
        "Өшіргіш",
        "Аэрограф",
        "Эллипс"
    ],
    zhauap: 0,
},
{
    question: "Adobe Illustrator бағдарламасында тіктөртбұрышты жылжыту үшін қандай құрал қолданылады",
    answers: [
        "Selection",
        "Қауырсын",
        "Безье",
        "Өшіргіш"
    ],
    zhauap: 0,
},
{
    question: "Adobe Illustrator да түстер каталогы қандай палитрада орналасқан",
    answers: [
        "Paint Style",
        "Information",
        "Layers",
        "Radial"
    ],
    zhauap: 0,
},
{
    question: "Adobe Illustrator бағдарламасында мөлдір және градиент түстері бар фотосуреттер мен сызбалар үшін қандай формат стандартты",
    answers: [
        "JPEG",
        "PNG",
        "GIF",
        "BMP"
    ],
    zhauap: 0,
},
{
    question: "Adobe Illustrator бағдарламасында міндетті мөлдірлігі бар кескіндер үшін қандай формат стандартты болып табылады",
    answers: [
        "JPEG",
        "PNG",
        "GIF",
        "BMP"
    ],
    zhauap: 1,
},
{
  question: "Adobe Illustrator 10 орнату үшін қатты дискіде қанша бос орын болуы керек",
  answers: [
      "180 МБ",
      "100 МБ",
      "10 МБ",
      "200 МБ"
  ],
  zhauap: 0,
},
{
  question: "Adobe Illustrator 10 орнату үшін қанша жедел жад қажет",
  answers: [
      "128 МБ",
      "64 МБ",
      "56 МБ",
      "256 МБ"
  ],
  zhauap: 0,
},
{
  question: "Adobe Illustrator 10-мен жұмыс істеу үшін ең көп ұсынылатын процессор түрі",
  answers: [
      "Intel Pentium IV",
      "Intel Pentium a",
      "Intel Pentium c",
      "IBM 386"
  ],
  zhauap: 0,
},
{
  question: "Анимациялық файлдар қандай кеңейтімге ие",
  answers: [
      "HTML",
      "SWF",
      "GIF",
      "JPG"
  ],
  zhauap: 1,
},
{
  question: "3D модельдеудің негізгі түрі",
  answers: [
      "Қатты күйдегі модельдеу",
      "Рамалық модельдеу",
      "Көпбұрышты модельдеу",
      "Беттік модельдеу"
  ],
  zhauap: 1,
},
{
  question: "Үш өлшемді модельдерді сақтау үшін жиі қолданатын файл пішімі",
  answers: [
      "JPEG",
      "GIF",
      "OBJ",
      "TXT"
  ],
  zhauap: 2,
},
{
  question: "3D модельдеудегі 'UV ультракүлгін сәулелендіру' техникасы ата",
  answers: [
      "Объекта нысанды текстуралау әдісі",
      "Көпбұрыштарды азайту алгоритмі",
      "Сахнаны жарықтандыру түрі",
      "Аним анимация әдісі"
  ],
  zhauap: 0,
},
{
  question: "Үш өлшемді нысанның пішінін өзгерту, оның бөліктерін қосу немесе жою үшін қолданылатын құрал",
  answers: [
      "Модельдеу",
      "Пинцет",
      "Үлкейткіш әйнек",
      "Көрсету"
  ],
  zhauap: 0,
},
{
  question: "3D кеңістігіндегі камера мен нысан арасындағы қашықтықтың параметрін анықтау",
  answers: [
      "Фокустық қашықтық",
      "Үзінді",
      "Өріс тереңдігі",
      "Камеры камера ауқымы"
  ],
  zhauap: 0,
},
{
  question: "Тегтің дұрыс орналасуы html code: p align='rigth' ... /p",
  answers: [
      "Оң жағында",
      "Сол жақ шетінде",
      "Ортасында",
      "Сол жақ шетінде"
  ],
  zhauap: 2,
},
{
  question: "Төменде берілген кодтың мағынасын түсіндіріңіз",
  answers: [
    "1 қатар және 3 баған",
    "3 қатар және 1 баған",
    "2 қатар және 3 баған",
    "3 қатар және 2 баған",
  ],
  zhauap: 0, 
},
{
  question: "Бетті құру кезінде пайдаланушының тақырып жолағында пайда болатын бет атауы",
  answers: [
    "<img src = '../img/question80/1d.png'>",
    "<img src = '../img/question80/2.png'>",
    "<img src = '../img/question80/3.png'>",
    "<img src = '../img/question80/4.png'>",
  ],
  zhauap: 0, 
},
{
  question: "Href атрибуты нені қамтиды",
  answers:[
    "Қайта бағытталатын беттің URL мекенжайын көрсетеді",
    "Қайта бағытталатын беттің атауы",
    "Жаңа беттің қай жерде ашылатынын көрсетіңіз: сол немесе жаңа терезеде",
    "Желілік байланыс арналары арқылы түйіндерді қосу",
  ],
  zhauap: 0, 
},
{
  question: "Тізімдегі тегтердің кесте құруға қатыстысын ата",
  answers:[
    "<img src = '../img/question82/1.png'>",
    "<img src = '../img/question82/2d.png'>",
    "<img src = '../img/question82/3.png'>",
    "<img src = '../img/question82/4.png'>",
  ],
  zhauap: 1, 
},
{
  question: "Тізім элементіне сәйкес келетін тегті көрсетіңіз",
  options: [
    "<img src = '../img/question83/1d.png'>",
    "<img src = '../img/question83/2.png'>",
    "<img src = '../img/question83/3.png'>",
    "<img src = '../img/question83/4.png'>",
  ],
  zhauap: 0, 
},
{
  question: "Тегу өлшемдерін <frameset> орнату үшін келесі атрибуттар қажет",
  answers: [
    "Жолдар мен бағандар",
    "Биіктігі мен ені",
    "Шекаралардың ауданы мен қалыңдығы",
    "Шекаралары мен ені",
  ],
  zhauap: 0, 
},
{
  question: "Мәтін шрифтін қандай тегтер қою(жирным) етеді",
  answers: [
    "<img src = '../img/question85/1.png'>",
    "<img src = '../img/question85/2.png'>",
    "<img src = '../img/question85/3d.png'>",
    "<img src = '../img/question85/4.png'>",
  ],
  zhauap: 2,
},
{
  question: "Суретті HTML құжатына енгізу үшін қолданылатын команда",
  answers: [
    "<img src = '../img/question86/1d.png'>",
    "<img src = '../img/question86/2.png'>",
    "<img src = '../img/question86/3.png'>",
    "<img src = '../img/question86/4.png'>",
  ],
  zhauap: 0,
},
{
  question: "Гиперссылка тегпен беріледі",
  answers: [
    "<img src = '../img/question87/1d.png'>",
    "<img src = '../img/question87/2.png'>",
    "<img src = '../img/question87/3.png'>",
    "<img src = '../img/question87/4.png'>",
  ],
  zhauap: 0, 
},
{
  question: "MS Excel-ге ақпаратты енгізудің ең кішкентай элементі",
  answers: [
    "Ұяшық",
    "Кесте",
    "Жол",
    "Бағана",
  ],
  zhauap: 0, 
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

  const parentElements = parentAcor.querySelectorAll(".questionNumber");
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
      for(let a = 0; a <= questions.length ; a++){
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
      
       
      for(let a = 0; a < 85; a++){
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
  submit2.style.display = "block";
  submitNext2.style.display = "none";
  
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
