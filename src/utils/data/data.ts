export interface Experience {
  id?: string;
  role: string;
  company: string;
  period: string;
  duration: string;
  location?: string;
  isCurrent?: boolean;
  description: string;
  bullets: string[];
  skills: string[];
  badgeColor?: string;
}

export interface Project {
  id?: string;
  number: string;
  title: string;
  headline: string;
  description: string;
  technologies: string[];
  techniques: string[];
  techList: string[];
  repoUrl: string;
  liveUrl?: string;
  isInteractive?: boolean;
  previewImage?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location?: string;
  status: string;
  description: string;
  badge: string;
}

export interface Certification {
  name: string;
  issuer: string;
  category: 'frontend' | 'fundamentals' | 'methods';
}

export interface Language {
  name: string;
  level: string;
  flag: string;
  nativeDescription: string;
}

export const portfolioData = {
  personal: {
    name: 'Hellen Cristina',
    fullName: 'Hellen Cristina Araújo da Silva',
    role: 'Desenvolvedora Front-end | Web',
    headline: 'Desenvolvedora Front-end | JavaScript | React | Next.js | TypeScript | Jest',
    location: 'São Paulo, Brasil',
    email: 'hellencrissaraujo28@gmail.com',
    linkedin: 'https://www.linkedin.com/in/hellen-cristina-araujo-da-silva',
    linkedinDisplay: 'linkedin.com/in/hellen-cristina-araujo-da-silva',
    github: 'https://github.com/HellenCristinaP',
    githubDisplay: 'github.com/HellenCristinaP',
    resumePdf: '/assets/aistudio/Profile__1__229863ec.pdf',
    avatar: '/hellen_avatar.png',
    originalMockup: '/assets/aistudio/Hellen_Cristina_8ab21b2e.png',
    quote:
      'Sou Estudante de Análise e Desenvolvimento de Sistemas na UNIMES e curso Engenharia Front-end na EBAC. Amo quando meu código se transforma em um site.',
    summary:
      'Tenho paixão em desenvolvimento Front-end, estou atualmente em transição de carreira, cursando Análise e Desenvolvimento de Sistemas e me especializando como Engenheira Front-end. Minha experiência prévia em funções administrativas me proporcionou valiosas soft skills em organização, resolução de problemas e comunicação estratégica. Busco aplicar meu conhecimento em HTML5, CSS3, JavaScript (ES6+), React, Next.js, SASS, Tailwind CSS, Jest e Git/GitHub para criar interfaces intuitivas e modernas. Meu objetivo é iniciar uma carreira sólida na área de tecnologia, contribuindo com minha dedicação e visão prática para equipes inovadoras.',
  },

  career: [
    {
      id: 'campb',
      role: 'Assistente Administrativo',
      company: 'Instituto Campb',
      period: 'setembro de 2025 - Presente',
      duration: '1 ano e 3 meses',
      location: 'Bertioga, São Paulo, Brasil',
      isCurrent: true,
      description:
        'Atuação administrativa com forte viés de resolução analítica de problemas e otimização de processos fiscais.',
      bullets: [
        'Criação de Memorandos para envio e conformidade de Notas Fiscais, organizando e auditando dados com pensamento crítico apurado.',
        'Atendimento telefônico corporativo e mediação estratégica de informações entre setores, aperfeiçoando habilidades de comunicação.',
        'Resolução de problemas operacionais: desenvolvimento de fórmulas e automações no Excel para previsão e alerta de vencimento de Notas Fiscais, prevenindo atrasos.',
      ],
      skills: ['Pensamento Crítico', 'Automação em Planilhas', 'Resolução de Problemas', 'Comunicação Estratégica', 'Gestão de NFs'],
    },
    {
      id: 'haikai',
      role: 'Atendente de Loja',
      company: 'Haikai Presentes',
      period: 'agosto de 2024 - março de 2025',
      duration: '8 meses',
      location: 'Barueri, São Paulo, Brasil',
      descripti:
        'Atendimento ao público e gestão de salão de vendas com foco em comunicação persuasiva e organização de produtos.',
      bullets: [
        'Comunicação estratégica e empática para compreender com precisão as necessidades de cada cliente e indicar a solução ideal.',
        'Organização estratégica de produtos, visual merchandising do salão e controle ágil de fluxo de caixa para a melhor experiência do usuário.',
        'Visão de oportunidade comercial para sugerir produtos complementares a partir do perfil de compra, elevando o ticket médio.',
      ],
      skills: ['Comunicação Estratégica', 'Organização de Loja & Caixa', 'Visão de Oportunidade', 'Atendimento Consultivo'],
    },
    {
      id: 'osasco-juco',
      role: 'Estagiária da Juventude Cívica de Osasco (JUCO)',
      company: 'Prefeitura do Município de Osasco (Policlínica Zona Norte)',
      period: 'junho de 2022 - novembro de 2023',
      duration: '1 ano e 6 meses',
      location: 'Osasco, São Paulo, Brasil',
      descripti:
        'Rotinas administrativas no setor de saúde pública com mentoria de novos funcionários e capacitação integral pela JUCO.',
      bullets: [
        'Execução de atividades administrativas na Policlínica Zona Norte com preenchimento rigoroso de relatórios para futuros laudos médicos.',
        'Agendamento de consultas médicas e gestão organizada de prontuários de pacientes.',
        'Atendimento telefônico e presencial humanizado a centenas de pacientes diariamente.',
        'Mentoria e treinamento prático de novos estagiários e colaboradores no fluxo de trabalho.',
        'Treinamento intensivo concluído na JUCO: Informática (Word e Excel), Língua Portuguesa e Etiqueta Corporativa.',
      ],
      skills: ['Treinamento de Equipe', 'Agendamento Médico', 'Empatia & Atendimento', 'Documentação & Laudos', 'Excel & Word'],
    },
  ] as Experience[],

  projects: [
    {
      id: 'margem-lucro',
      number: 'Projeto 1',
      title: 'Calculadora de Margem de Lucro & Precificação',
      headline: 'Um projeto para resolver margem de lucro',
      description:
        'Aplicação web interativa para comerciantes e varejistas calcularem com precisão markup, custos fixos, impostos e margem de lucro real sobre produtos. Inclui simulação de cenários e gráficos de rentabilidade.',
      technologies: ['React', 'Sass', 'TypeScript'],
      techniques: ['BEM', 'Component-Driven', 'Clean Code'],
      techList: ['React', 'Sass', 'BEM', 'TypeScript', 'Vite'],
      repoUrl: 'https://github.com/HellenCristinaP',
      liveUrl: '#demo-margem-lucro',
      isInteractive: true,
    },
    {
      id: 'autonf-gestor',
      number: 'Projeto 2',
      title: 'AutoNF - Gestor de Vencimentos & Prazos Fiscais',
      headline: 'Automação para controle e alerta de Notas Fiscais',
      description:
        'Inspirado na solução desenvolvida no Instituto Campb para monitoramento de NFs. Interface front-end com filtros por data, cálculo automático de juros e multas por atraso, e exportação de memorandos em formato estruturado.',
      technologies: ['React', 'Tailwind CSS', 'TypeScript'],
      techniques: ['Custom Hooks', 'Jest Unit Tests', 'LocalStorage'],
      techList: ['React', 'Tailwind CSS', 'TypeScript', 'Jest', 'Date-fns'],
      repoUrl: 'https://github.com/HellenCristinaP',
      liveUrl: 'https://github.com/HellenCristinaP',
      isInteractive: false,
    },
    {
      id: 'policlinica-agenda',
      number: 'Projeto 3',
      title: 'MediSchedule - Agendamento & Triagem Policlínica',
      headline: 'Interface acessível de triagem ambulatorial',
      description:
        'Portal para agendamento de consultas médicas e pré-triagem ambulatorial inspirado na experiência na Policlínica de Osasco. Desenvolvido com HTML semântico rigoroso, validação em tempo real e acessibilidade (WCAG AA).',
      technologies: ['Next.js', 'React', 'Tailwind CSS'],
      techniques: ['WCAG 2.1 AA', 'Responsive Grid', 'State Management'],
      techList: ['Next.js', 'React', 'Tailwind CSS', 'Accessible UI'],
      repoUrl: 'https://github.com/HellenCristinaP',
      liveUrl: 'https://github.com/HellenCristinaP',
      isInteractive: false,
    },
    {
      id: 'devfolio-hellen',
      number: 'Projeto 4',
      title: 'DevFolio Hellen Cristina',
      headline: 'Portfólio minimalista & responsivo em React',
      description:
        'Código deste portfólio pessoal, arquitetado com React 19, Tailwind CSS v4, Motion e tipografia moderna, refletindo a paleta de cores autêntica inspirada no design da autora.',
      technologies: ['React 19', 'Tailwind CSS', 'TypeScript'],
      techniques: ['Responsive First', 'Motion Transitions', 'Zero Slop'],
      techList: ['React 19', 'Tailwind CSS', 'TypeScript', 'Motion'],
      repoUrl: 'https://github.com/HellenCristinaP',
      liveUrl: '#',
      isInteractive: false,
    },
  ] as Project[],

  education: [
    {
      institution: 'Universidade Metropolitana de Santos (UNIMES)',
      degree: 'Curso Superior de Tecnologia (CST), Análise e Desenvolvimento de Sistemas',
      period: 'fevereiro de 2024 - novembro de 2026',
      status: 'Em andamento (Graduação)',
      description:
        'Formação superior com ênfase em fundamentos de computação, estruturas de dados, banco de dados, engenharia de software e desenvolvimento de sistemas web.',
      badge: 'Graduação Tecnológica',
    },
    {
      institution: 'EBAC - Escola Britânica de Artes Criativas e Tecnologia',
      degree: 'Especialização Profissional em Engenharia Front-end',
      period: 'janeiro de 2026 - janeiro de 2028',
      status: 'Especialização Profissional',
      description:
        'Aprofundamento avançado em ecossistema front-end moderno: React, Next.js, TypeScript, Testes Automatizados (Jest / Cypress), arquitetura escalável e design systems.',
      badge: 'Especialização',
    },
  ] as Education[],

  certifications: [
    { name: 'Elas+ Tech | Front-End em JavaScript', issuer: 'Elas+ Tech', category: 'frontend' },
    { name: 'Introdução ao JavaScript', issuer: 'Cursos Certificados', category: 'frontend' },
    { name: 'HTML Semântico', issuer: 'Especialização Web', category: 'fundamentals' },
    { name: 'Fundamentos do CSS', issuer: 'Especialização Web', category: 'fundamentals' },
    { name: 'O básico de Git e GitHub', issuer: 'Controle de Versão', category: 'fundamentals' },
    { name: 'Agile Methodologies (Scrum / Kanban)', issuer: 'Competência LinkedIn', category: 'methods' },
    { name: 'Unit Testing & Integration Testing (Jest)', issuer: 'Competência LinkedIn', category: 'methods' },
  ] as Certification[],

  languages: [
    { name: 'Português', level: 'Nativo', flag: '🇧🇷', nativeDescription: 'Língua materna com excelente comunicação verbal e escrita corporativa' },
    { name: 'Inglês', level: 'Limited Working', flag: '🇺🇸', nativeDescription: 'Leitura técnica de documentação, escrita e conversação profissional básica' },
    { name: 'Espanhol', level: 'Elementar', flag: '🇪🇸', nativeDescription: 'Compreensão básica de leitura e vocabulário' },
    { name: 'Russo', level: 'Elementar', flag: '🇷🇺', nativeDescription: 'Conhecimento introdutório do alfabeto e termos essenciais' },
  ] as Language[],

  skills: {
    frontend: ['JavaScript (ES6+)', 'React', 'Next.js', 'TypeScript', 'HTML5 Semântico', 'CSS3', 'Tailwind CSS', 'SASS / SCSS', 'Jest'],
    tools: ['Git & GitHub', 'Vite', 'VS Code', 'Excel Avançado', 'Figma', 'BEM Methodology', 'REST APIs'],
    soft: [
      'Pensamento Crítico',
      'Comunicação Estratégica',
      'Organização de Processos',
      'Resolução de Problemas',
      'Capacidade de Aprendizado Rápido',
      'Trabalho em Equipe e Empatia',
    ],
  },
};
