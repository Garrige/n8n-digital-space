// Translations for the website
export type Language = 'en' | 'lv' | 'ru';

export const translations = {
  en: {
    // Navigation
    home: 'Home',
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
    
    // Hero section
    heroTitle: 'n8n Automation',
    heroSubtitle: 'Workflow Expert',
    heroDescription: 'Building intelligent automation systems and AI-powered solutions that transform business operations',
    heroButton: 'View Projects',
    
    // About section
    aboutTitle: 'About Me',
    aboutDescription: 'I specialize in creating sophisticated automation workflows using n8n, integrating AI capabilities, and building custom solutions that streamline business processes. With expertise in API integrations, AI implementation, and full-stack development, I help businesses automate repetitive tasks and enhance their operational efficiency.',
    aboutSkillsTitle: 'Core Competencies',
    skills: {
      automation: 'n8n Workflow Automation',
      ai: 'AI Integration (OpenAI, Claude)',
      apis: 'API Development & Integration',
      databases: 'Database Design & Management',
      react: 'React & TypeScript Development',
      cloud: 'Cloud Deployment & DevOps'
    },
    
    // Projects section
    projectsTitle: 'Featured Projects',
    viewDetails: 'View Details',
    
    // Projects
    project1: {
      title: 'AI Receptionist for Website',
      description: 'Intelligent chat receptionist integrated into our website that handles client inquiries 24/7, schedules appointments, and improves conversion rates through natural conversations. Watch the 60-second demo video!'
    },
    project2: {
      title: 'Hotel Reception Automation',
      description: 'Automated hotel receptionist system that handles email responses, generates invoices, manages client bookings, and streamlines front desk operations. Complete workflow automation for hospitality business.'
    },
    project3: {
      title: 'RAG Business Analytics System',
      description: 'AI-powered business analytics system with knowledge base integration for intelligent data analysis and reporting. Includes dedicated website or Telegram bot interface for easy access to business insights.'
    },
    project4: {
      title: 'Riga Real Estate Analyzer',
      description: 'AI-powered apartment finder for Riga. Automatically scrapes ss.lv, analyzes 100+ listings with Claude AI, and emails you the best deals based on real market data, district rankings, and building quality. Find underpriced apartments 10-15% below market average.'
    },
    
    // Footer
    footerText: 'Transforming business operations through intelligent automation',
    footerRights: 'All rights reserved'
  },
  
  lv: {
    // Navigation
    home: 'Sākums',
    projects: 'Projekti',
    about: 'Par mani',
    contact: 'Kontakti',
    
    // Hero section
    heroTitle: 'n8n Automatizācija',
    heroSubtitle: 'Darbplūsmu Eksperts',
    heroDescription: 'Veidoju inteliģentas automatizācijas sistēmas un AI risinājumus, kas pārveido uzņēmumu darbību',
    heroButton: 'Skatīt Projektus',
    
    // About section
    aboutTitle: 'Par Mani',
    aboutDescription: 'Es specializējos sarežģītu automatizācijas darbplūsmu izveidē, izmantojot n8n, AI iespēju integrācijā un pielāgotu risinājumu veidošanā, kas efektīvi automatizē biznesa procesus. Ar ekspertīzi API integrācijās, AI ieviešanā un pilna cikla izstrādē, es palīdzu uzņēmumiem automatizēt atkārtojošos uzdevumus un uzlabot darbības efektivitāti.',
    aboutSkillsTitle: 'Pamatkompetences',
    skills: {
      automation: 'n8n Darbplūsmu Automatizācija',
      ai: 'AI Integrācija (OpenAI, Claude)',
      apis: 'API Izstrāde un Integrācija',
      databases: 'Datubāzu Dizains un Pārvaldība',
      react: 'React un TypeScript Izstrāde',
      cloud: 'Mākoņa Izvietošana un DevOps'
    },
    
    // Projects section
    projectsTitle: 'Izvēlētie Projekti',
    viewDetails: 'Skatīt Detaļas',
    
    // Projects
    project1: {
      title: 'AI Reģistrators Mājas Lapai',
      description: 'Inteliģents čata reģistrators, integrēts mūsu vietnē, kas apkalpo klientu pieprasījumus 24/7, plāno tikšanās un uzlabo konversijas caur dabiskām sarunām. Skatiet 60 sekunžu demo video!'
    },
    project2: {
      title: 'Viesnīcas Recepcijas Automatizācija',
      description: 'Automatizēta viesnīcas reģistratora sistēma, kas apstrādā e-pasta atbildes, ģenerē rēķinus, pārvalda klientu rezervācijas. Pilnīga darba plūsmas automatizācija viesmīlības biznesam.'
    },
    project3: {
      title: 'RAG Biznesa Analītikas Sistēma',
      description: 'AI vadīta biznesa analītikas sistēma ar zināšanu bāzes integrāciju inteliģentai datu analīzei. Ietver īpašu vietni vai Telegram bota saskarni.'
    },
    project4: {
      title: 'Rīgas Nekustamā Īpašuma Analizators',
      description: 'AI dzīvokļu meklētājs Rīgā. Automātiski skenē ss.lv, analizē 100+ sludinājumus ar Claude AI un nosūta labākos piedāvājumus, pamatojoties uz tirgus datiem, rajonu reitingiem un māju kvalitāti. Atrodiet dzīvokļus 10-15% zem tirgus vidējās cenas.'
    },
    
    // Footer
    footerText: 'Pārveidojot biznesa operācijas caur inteliģentu automatizāciju',
    footerRights: 'Visas tiesības aizsargātas'
  },
  
  ru: {
    // Navigation
    home: 'Главная',
    projects: 'Проекты',
    about: 'Обо мне',
    contact: 'Контакты',
    
    // Hero section
    heroTitle: 'n8n Автоматизация',
    heroSubtitle: 'Эксперт по Рабочим Процессам',
    heroDescription: 'Создаю интеллектуальные системы автоматизации и AI-решения, которые трансформируют бизнес-операции',
    heroButton: 'Смотреть Проекты',
    
    // About section
    aboutTitle: 'Обо Мне',
    aboutDescription: 'Я специализируюсь на создании сложных автоматизированных рабочих процессов с использованием n8n, интеграции AI-возможностей и разработке индивидуальных решений, которые оптимизируют бизнес-процессы. Обладая экспертизой в API-интеграциях, внедрении AI и полноценной разработке, я помогаю компаниям автоматизировать повторяющиеся задачи и повышать операционную эффективность.',
    aboutSkillsTitle: 'Основные Компетенции',
    skills: {
      automation: 'Автоматизация Рабочих Процессов n8n',
      ai: 'AI Интеграция (OpenAI, Claude)',
      apis: 'Разработка и Интеграция API',
      databases: 'Проектирование и Управление БД',
      react: 'Разработка на React и TypeScript',
      cloud: 'Облачное Развертывание и DevOps'
    },
    
    // Projects section
    projectsTitle: 'Избранные Проекты',
    viewDetails: 'Подробнее',
    
    // Projects
    project1: {
      title: 'AI Ресепшионист для Сайта',
      description: 'Интеллектуальный чат-ресепшионист, встроенный в наш сайт, который обрабатывает запросы клиентов 24/7, назначает встречи и улучшает конверсию через естественные диалоги. Смотрите 60-секундное видео!'
    },
    project2: {
      title: 'Автоматизация Гостиничной Рецепции',
      description: 'Автоматизированная система администратора гостиницы, которая обрабатывает email, генерирует счета, управляет бронированием. Полная автоматизация рабочего процесса для гостиничного бизнеса.'
    },
    project3: {
      title: 'RAG Система Бизнес-Аналитики',
      description: 'AI-система бизнес-аналитики с интеграцией базы знаний для интеллектуального анализа данных. Включает отдельный сайт или интерфейс Telegram-бота.'
    },
    project4: {
      title: 'Анализатор Недвижимости в Риге',
      description: 'AI-поиск квартир в Риге. Автоматически скрапит ss.lv, анализирует 100+ объявлений с Claude AI и отправляет лучшие предложения на основе реальных рыночных данных, рейтингов районов и качества домов. Находите квартиры на 10-15% дешевле среднерыночной цены.'
    },
    
    // Footer
    footerText: 'Трансформация бизнес-операций через интеллектуальную автоматизацию',
    footerRights: 'Все права защищены'
  }
};

export const getTranslation = (lang: Language) => translations[lang];
