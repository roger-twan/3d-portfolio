enum Level {
  // Familiar with the basics or foundational concepts but lacks practical application.
  Beginner,

  // Applied in personal projects or demos; demonstrates working knowledge.
  Intermediate,

  // Successfully utilized in real-world business scenarios with measurable results.
  Proficient,

  // Demonstrates professional-level expertise and capability in complex environments.
  Advanced,

  // Recognized for deep specialization and mastery; often serves as a mentor or authority in the field.
  Expert,
}

enum Category {
  Design = 'Design',
  Frontend = 'Frontend',
  Application = 'Application',
  Backend = 'Backend',
  Test = 'Test',
  Database = 'Database',
  Operation = 'Operation',
  Methodology = 'Methodology',
  Tools = 'Tools',
}

type Skill = {
  name: string
  level: Level
  category: Category
  year: number
  icon?: string
  iconColor?: string
}

const list: Skill[] = [
  // Design
  {
    name: 'Figma',
    level: Level.Intermediate,
    category: Category.Design,
    year: 2023,
  },
  {
    name: 'Photoshop',
    level: Level.Intermediate,
    category: Category.Design,
    year: 2017,
  },
  {
    name: 'Illustrator',
    level: Level.Intermediate,
    category: Category.Design,
    year: 2024,
  },
  {
    name: 'InDesign',
    level: Level.Intermediate,
    category: Category.Design,
    year: 2024,
  },
  {
    name: 'UE Design',
    level: Level.Intermediate,
    category: Category.Design,
    year: 2024,
  },

  // Frontend
  {
    name: 'Javascript',
    level: Level.Advanced,
    category: Category.Frontend,
    year: 2014,
  },
  {
    name: 'Typescript',
    level: Level.Advanced,
    category: Category.Frontend,
    year: 2018,
  },
  {
    name: 'HTML(5)',
    level: Level.Expert,
    category: Category.Frontend,
    year: 2012,
    icon: 'html5',
  },
  {
    name: 'CSS(3)',
    level: Level.Advanced,
    category: Category.Frontend,
    year: 2014,
    icon: 'css3',
    iconColor: '#663399',
  },
  {
    name: 'React',
    level: Level.Proficient,
    category: Category.Frontend,
    year: 2021,
  },
  {
    name: 'Vue.js',
    level: Level.Advanced,
    category: Category.Frontend,
    year: 2016,
  },
  {
    name: 'Next.js',
    level: Level.Proficient,
    category: Category.Frontend,
    year: 2023,
  },
  {
    name: 'Nuxt.js',
    level: Level.Beginner,
    category: Category.Frontend,
    year: 2023,
  },
  {
    name: 'jQuery',
    level: Level.Advanced,
    category: Category.Frontend,
    year: 2014,
    iconColor: '#0769AD',
  },
  {
    name: 'Three.js',
    level: Level.Intermediate,
    category: Category.Frontend,
    year: 2023,
  },
  {
    name: 'D3.js',
    level: Level.Intermediate,
    category: Category.Frontend,
    year: 2024,
  },
  {
    name: 'WordPress',
    level: Level.Proficient,
    category: Category.Frontend,
    year: 2016,
    iconColor: '#21759B',
  },
  {
    name: 'Shopify',
    level: Level.Intermediate,
    category: Category.Frontend,
    year: 2024,
  },
  {
    name: 'Storybook',
    level: Level.Proficient,
    category: Category.Frontend,
    year: 2021,
  },
  {
    name: 'Tailwind CSS',
    level: Level.Intermediate,
    category: Category.Frontend,
    year: 2024,
  },
  {
    name: 'Bootstrap',
    level: Level.Proficient,
    category: Category.Frontend,
    year: 2015,
  },
  {
    name: 'Element UI',
    level: Level.Advanced,
    category: Category.Frontend,
    year: 2017,
    icon: 'e',
  },
  {
    name: 'Ant Design',
    level: Level.Advanced,
    category: Category.Frontend,
    year: 2019,
    iconColor: '#0170FE',
  },
  {
    name: 'MUI',
    level: Level.Intermediate,
    category: Category.Frontend,
    year: 2018,
  },
  {
    name: 'Less',
    level: Level.Advanced,
    category: Category.Frontend,
    year: 2016,
    iconColor: '#1D365D',
  },
  {
    name: 'Sass',
    level: Level.Advanced,
    category: Category.Frontend,
    year: 2022,
  },
  {
    name: 'Wechat Mini Program',
    level: Level.Proficient,
    category: Category.Frontend,
    year: 2018,
    icon: 'wechat',
  },
  {
    name: 'SEO',
    level: Level.Proficient,
    category: Category.Frontend,
    year: 2016,
  },
  {
    name: 'Webpack',
    level: Level.Proficient,
    category: Category.Frontend,
    year: 2016,
  },
  {
    name: 'Rollup.js',
    level: Level.Proficient,
    category: Category.Frontend,
    year: 2019,
  },
  {
    name: 'Gulp',
    level: Level.Proficient,
    category: Category.Frontend,
    year: 2016,
  },
  {
    name: 'Vite',
    level: Level.Intermediate,
    category: Category.Frontend,
    year: 2021,
  },
  {
    name: 'GitHub Pages',
    level: Level.Intermediate,
    category: Category.Frontend,
    year: 2023,
  },
  {
    name: 'PWA',
    level: Level.Intermediate,
    category: Category.Frontend,
    year: 2017,
    iconColor: '#5A0FC8',
  },
  {
    name: 'Accessibility',
    level: Level.Intermediate,
    category: Category.Frontend,
    year: 2024,
  },

  // Application
  {
    name: 'Dart',
    level: Level.Proficient,
    category: Category.Application,
    year: 2020,
    iconColor: '#0175C2',
  },
  {
    name: 'Flutter',
    level: Level.Proficient,
    category: Category.Application,
    year: 2020,
    iconColor: '#02569B',
  },
  {
    name: 'Firebase',
    level: Level.Proficient,
    category: Category.Application,
    year: 2020,
    iconColor: '#DD2C00',
  },
  {
    name: 'App Store Connect',
    level: Level.Proficient,
    category: Category.Application,
    year: 2020,
    icon: 'appstore',
  },
  {
    name: 'Google Play Console',
    level: Level.Proficient,
    category: Category.Application,
    year: 2020,
    icon: 'googleplay',
  },
  {
    name: 'Tauri',
    level: Level.Intermediate,
    category: Category.Application,
    year: 2023,
  },

  // Backend
  {
    name: 'Node.js',
    level: Level.Advanced,
    category: Category.Backend,
    year: 2017,
  },
  {
    name: 'Express',
    level: Level.Proficient,
    category: Category.Backend,
    year: 2017,
  },
  {
    name: 'Koa',
    level: Level.Advanced,
    category: Category.Backend,
    year: 2018,
  },
  {
    name: 'Python',
    level: Level.Intermediate,
    category: Category.Backend,
    year: 2022,
  },
  {
    name: 'PHP',
    level: Level.Intermediate,
    category: Category.Backend,
    year: 2016,
  },
  {
    name: 'Java',
    level: Level.Intermediate,
    category: Category.Backend,
    year: 2012,
  },
  {
    name: 'Spring Boot',
    level: Level.Intermediate,
    category: Category.Backend,
    year: 2024,
  },
  {
    name: 'C',
    level: Level.Beginner,
    category: Category.Backend,
    year: 2011,
  },
  {
    name: 'C++',
    level: Level.Beginner,
    category: Category.Backend,
    year: 2011,
    icon: 'cplusplus',
    iconColor: '#00599C',
  },
  {
    name: 'Nest.js',
    level: Level.Proficient,
    category: Category.Backend,
    year: 2024,
    icon: 'nestjs',
    iconColor: '#E0234E',
  },
  {
    name: 'TypeORM',
    level: Level.Proficient,
    category: Category.Backend,
    year: 2024,
    iconColor: '#FE0803',
  },
  {
    name: 'Prisma',
    level: Level.Intermediate,
    category: Category.Backend,
    year: 2025,
    iconColor: '#2D3748',
  },
  {
    name: 'Maven',
    level: Level.Intermediate,
    category: Category.Backend,
    year: 2024,
    icon: 'apachemaven',
    iconColor: '#C71A36',
  },
  {
    name: 'Sequelize',
    level: Level.Proficient,
    category: Category.Backend,
    year: 2025,
  },

  // Databases
  {
    name: 'Redis',
    level: Level.Intermediate,
    category: Category.Database,
    year: 2024,
  },
  {
    name: 'MySQL',
    level: Level.Proficient,
    category: Category.Database,
    year: 2012,
  },
  {
    name: 'MongoDB',
    level: Level.Intermediate,
    category: Category.Database,
    year: 2017,
  },
  {
    name: 'SQLite',
    level: Level.Intermediate,
    category: Category.Database,
    year: 2022,
    iconColor: '#003B57',
  },
  {
    name: 'PostgreSQL',
    level: Level.Intermediate,
    category: Category.Database,
    year: 2024,
  },

  // Test
  {
    name: 'JUnit5',
    level: Level.Intermediate,
    category: Category.Test,
    year: 2024,
  },
  {
    name: 'Jest',
    level: Level.Intermediate,
    category: Category.Test,
    year: 2023,
    iconColor: '#C21325',
  },
  {
    name: 'Playwright',
    level: Level.Intermediate,
    category: Category.Test,
    year: 2024,
  },

  // Operation
  {
    name: 'AWS',
    level: Level.Intermediate,
    category: Category.Operation,
    year: 2022,
    icon: 'amazonwebservices',
    iconColor: '#232F3E',
  },
  {
    name: 'Cloudflare',
    level: Level.Proficient,
    category: Category.Operation,
    year: 2022,
  },
  {
    name: 'Tencent Cloud',
    level: Level.Proficient,
    category: Category.Operation,
    year: 2017,
  },
  {
    name: 'Google Cloud',
    level: Level.Intermediate,
    category: Category.Operation,
    year: 2022,
  },
  {
    name: 'Azure',
    level: Level.Beginner,
    category: Category.Operation,
    year: 2022,
  },
  {
    name: 'Oracle Cloud',
    level: Level.Beginner,
    category: Category.Operation,
    year: 2022,
  },
  {
    name: 'Nginx',
    level: Level.Advanced,
    category: Category.Operation,
    year: 2018,
    iconColor: '#009639',
  },
  {
    name: 'Docker',
    level: Level.Proficient,
    category: Category.Operation,
    year: 2020,
  },
  {
    name: 'CI/CD',
    level: Level.Proficient,
    category: Category.Operation,
    year: 2020,
  },
  {
    name: 'DevOps',
    level: Level.Proficient,
    category: Category.Operation,
    year: 2020,
  },
  {
    name: 'Kubernetes',
    level: Level.Beginner,
    category: Category.Operation,
    year: 2020,
  },
  {
    name: 'Jenkins',
    level: Level.Beginner,
    category: Category.Operation,
    year: 2020,
  },
  {
    name: 'GitHub Webhook',
    level: Level.Intermediate,
    category: Category.Operation,
    year: 2024,
  },
  {
    name: 'GitHub Actions',
    level: Level.Intermediate,
    category: Category.Operation,
    year: 2023,
  },

  // Methodology
  {
    name: 'RESTful',
    level: Level.Advanced,
    category: Category.Methodology,
    year: 2020,
  },
  {
    name: 'OOP',
    level: Level.Advanced,
    category: Category.Methodology,
    year: 2011,
  },
  {
    name: 'Data Structure',
    level: Level.Advanced,
    category: Category.Methodology,
    year: 2011,
  },
  {
    name: 'MVC',
    level: Level.Advanced,
    category: Category.Methodology,
    year: 2014,
  },
  {
    name: 'MVVM',
    level: Level.Advanced,
    category: Category.Methodology,
    year: 2016,
  },
  {
    name: 'SPA',
    level: Level.Advanced,
    category: Category.Methodology,
    year: 2016,
  },
  {
    name: 'Agile',
    level: Level.Advanced,
    category: Category.Methodology,
    year: 2017,
  },
  {
    name: 'Scrum',
    level: Level.Advanced,
    category: Category.Methodology,
    year: 2017,
  },
  {
    name: 'Sprint',
    level: Level.Advanced,
    category: Category.Methodology,
    year: 2017,
  },
  {
    name: 'Microservice',
    level: Level.Advanced,
    category: Category.Methodology,
    year: 2019,
  },
  {
    name: 'Serverless',
    level: Level.Proficient,
    category: Category.Methodology,
    year: 2022,
  },
  {
    name: 'Software Engineering',
    level: Level.Advanced,
    category: Category.Methodology,
    year: 2013,
  },

  // Tools
  {
    name: 'SVN',
    level: Level.Proficient,
    category: Category.Tools,
    year: 2014,
  },
  {
    name: 'Git',
    level: Level.Advanced,
    category: Category.Tools,
    year: 2016,
  },
  {
    name: 'Postman',
    level: Level.Advanced,
    category: Category.Tools,
    year: 2019,
  },
  {
    name: 'Charles',
    level: Level.Proficient,
    category: Category.Tools,
    year: 2019,
    iconColor: '#F3F5F5',
  },
  {
    name: 'Linux',
    level: Level.Proficient,
    category: Category.Tools,
    year: 2013,
  },
  {
    name: 'Google Analytics',
    level: Level.Proficient,
    category: Category.Tools,
    year: 2019,
  },
  {
    name: 'Google Search Console',
    level: Level.Intermediate,
    category: Category.Tools,
    year: 2024,
  },
  {
    name: 'Jira',
    level: Level.Advanced,
    category: Category.Tools,
    year: 2016,
    iconColor: '#0052CC',
  },
  {
    name: 'Trello',
    level: Level.Proficient,
    category: Category.Tools,
    year: 2019,
    iconColor: '#0052CC',
  },
  {
    name: 'Swagger',
    level: Level.Proficient,
    category: Category.Tools,
    year: 2024,
  },
  {
    name: 'PlantUML',
    level: Level.Proficient,
    category: Category.Tools,
    year: 2024,
  },
]

export { list as default, Level, Category, type Skill }
