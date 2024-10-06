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
  }
]

export default GET_EXPERIENCE_DATA;