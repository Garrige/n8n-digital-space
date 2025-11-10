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
    
    // Footer
    footerText: 'Трансформация бизнес-операций через интеллектуальную автоматизацию',
    footerRights: 'Все права защищены'
  }
};

export const getTranslation = (lang: Language) => translations[lang];