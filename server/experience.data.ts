export interface ExperienceDataType {
  role: string,
  companyName: string,
  companyLogo?: string,
  remote: boolean,
  workTime: "Full-Time" | "Half-Time"
  startDate: string,
  endDate?: string
  description: string
  skills: string[],
  link?: string
}

const GET_EXPERIENCE_DATA = (): ExperienceDataType[] => [
  {
    role: 'Desenvolvedor Frontend',
    companyName: 'Mevo',
    companyLogo: "/nexodata_logo.jpeg",
    remote: true,
    workTime: "Full-Time",
    startDate: "09-01-2021",
    endDate: "01-01-2024",
    description: `%eDesenvolvimento com recursos de frontend usando React, TypeScript, Next com Chakra UI para áreas de pacientes, farmácias e prescritores.
      %eColaborou com gerentes de produtos para aprimorar a experiência do usuário e a segurança migrando do React para o Next.
      %eRealizou testes A/B com o Google Analytics para otimizar as conversões do marketplace.`,
    skills: [
      "TypeScript",
      "Software Development",
      "Test Execution",
      "Front-end Development",
      "E-Commerce",
      "Jest",
      "Amazon CloudFront",
      "A/B Testing",
      "Server Side JavaScript",
      "Problem Solving",
      "React.js",
      "Postman API",
      "Node.js",
      "Debugging",
      "Internet Software",
      "Troubleshooting",
      "Unit Testing",
      "Cypress",
      "Figma",
      "Google Analytics",
      "Amazon Amplify"
    ],
    link: "https://mevo.com.br/"
  },
  {
    role: 'Desenvolvedor Frontend',
    companyName: 'Optimum Soluções Estratégicas S/A',
    companyLogo: "/optimum.jpg",
    remote: true,
    workTime: "Full-Time",
    startDate: "02-01-2020",
    endDate: "09-01-2021",
    description: `%eDesenvolvimento frontend usando Vue, Nuxt, Vuetify e GoogleCharts para painéis de estatísticas legais.
      %eReformulação da IU do produto principal e criação de uma nova IU do zero.
      %eAlcançou uma experiência de usuário perfeita e melhorou a visualização de dados.
      %eA Optimum Soluções Estratégicas S/A é uma empresa líder em soluções estratégicas em São Paulo, Brasil.
      %eHabilidades desenvolvidas: Vue, Nuxt, Vuetify, GoogleCharts, design de IU/UX.`,
    skills: [
      "Vue.js",
      "Software Development",
      "Front-end Development",
      "Jest",
      "Server Side JavaScript",
      "Front-End Design",
      'Problem Solving',
      "Postman API",
      "Node.js",
      "Linux",
      "Debugging",
      "Internet Software",
      "Front-End Development",
      "Troubleshooting",
      "Unit Testing"
    ],
  },
  {
    role: 'Desenvolvedor Frontend',
    companyName: 'Beeleads',
    companyLogo: "/beeleads_logo.jpeg",
    remote: false,
    workTime: "Full-Time",
    startDate: "08-01-2019",
    endDate: "01-20-2020",
    description: `%eDesenvolvimento de aplicativos frontend usando React, Next, Material UI, React Native e Kitten UI.
      %eMigraçãocom sucesso o sistema para Next e React, melhorando o desempenho e a experiência do usuário.
      %eColaboração com designers para implementar novos designs de UI para interação aprimorada do usuário.
      %eCriação de um novo aplicativo móvel do zero usando React Native para uma experiência de usuário perfeita.`,
    skills: [
      "Software Development",
      "Front-end Development",
      "React Native",
      "Jest",
      "Server Side JavaScript",
      "Problem Solving",
      "React.js",
      "Node.js",
      "Linux",
      "Debugging",
      "Internet Software",
      "Next.js",
      "Front-End Development",
      "Troubleshooting"
    ],
  },
  {
    role: 'Estagiário',
    companyName: 'Incluir Tecnologia',
    companyLogo: "/incluir_tecnologia_logo.jpeg",
    remote: false,
    workTime: "Full-Time",
    startDate: "12-01-2018",
    endDate: "08-20-2019",
    description: `%eDesenvolvimento de aplicações web usando VueJS, NuxtJS, PHP, Laravel, MySQL e VueBoostrap para UI.
      %eCriação de sistemas para impressão 3D, aulas de linguagem de sinais e serviços bancários.
      %eContribuição para o desenvolvimento do sistema MOVA.`,
    skills: [
      "Vue.js",
      "Software Development",
      "Front-end Development",
      "Information Technology Infrastructure",
      "E-Commerce",
      "Computer Information Systems",
      "Tailwind CSS",
      "Problem Solving",
      "Node.js",
      "Linux",
      "Debugging",
      "Banking",
      "Infrastructure Technologies",
      "Troubleshooting",
      "Unit Testing"
    ],
  },
  {
    role: 'Estagiário',
    companyName: 'Tuuris.com',
    companyLogo: "/tuuris_logo.jpeg",
    remote: false,
    workTime: "Full-Time",
    startDate: "11-01-2017",
    endDate: "10-01-2018",
    description: `%eDesenvolvimento de aplicativos web usando JavaScript (Node.JS - Vue/Nuxt - Vuetify), Ruby (Rails) e MySQL para Tuuris.com.
      %eColaboração com equipes para aprimorar o site da Tuuris, conectando viajantes com agências de viagens.
      %eImplementação de soluções inovadoras para melhorar a experiência do usuário e agilizar processos.
      %eContribuição para o crescimento e sucesso de uma startup na indústria de viagens.`,
    skills: [
      "Vue.js",
      "Software Development",
      "Test Execution",
      "Front-end Development",
      "Jest",
      "Problem Solving",
      "Node.js",
      "Linux",
      "Debugging",
      "Troubleshooting",
      "Unit Testing"
    ],
  }
]

export default GET_EXPERIENCE_DATA;