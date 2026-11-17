import type { Lang } from '../i18n/ui';

export interface Job {
  org: string;
  role: string;
  period: string;
  /** ISO de início, para o <time>. */
  start: string;
  bullets: string[];
}

export interface Content {
  headline: string;
  intro: string;
  cvLabel: string;
  /** Corpo do JSON que o `curl` do hero devolve. Chaves no idioma da página. */
  apiResponse: Record<string, string | string[] | boolean>;
  about: string[];
  stack: { group: string; items: string[] }[];
  studying: { title: string; items: { name: string; why: string }[] };
  experience: Job[];
  education: { school: string; course: string; period: string }[];
  contact: { lead: string; email: string; linkedin: string; github: string; cv: string };
}

export const content: Record<Lang, Content> = {
  pt: {
    headline: 'Desenvolvedora Back-end Java',
    intro:
      'Construo APIs e sistemas em Java e Spring Boot, do modelo de dados ao deploy. Um deles controla hoje o estoque e as vendas de uma loja de verdade.',
    cvLabel: 'Baixar CV',
    apiResponse: {
      nome: 'Júlia Cabral',
      cargo: 'Desenvolvedora Back-end Java',
      local: 'Natal, RN',
      stack: ['Java 21', 'Spring Boot', 'SQL', 'PostgreSQL'],
      buscando: 'vaga de desenvolvedora back-end',
    },
    about: [
      'Sou desenvolvedora back-end Java em Natal (RN), tecnóloga em Análise e Desenvolvimento de Sistemas pela UNP (2025). Meu foco é o lado do sistema que sustenta tudo: modelagem de dados, regras de negócio, testes e deploy.',
      'Hoje trabalho como auxiliar de sistemas num complexo hospitalar. Escrevo consultas SQL com vários JOINs, parametrizo sistemas e faço a ponte entre a equipe e o fornecedor do software. Fora do expediente, construo sistemas em Java 21 e Spring Boot. Os dois principais estão mais abaixo.',
    ],
    stack: [
      { group: 'linguagens', items: ['Java 21', 'SQL', 'JavaScript'] },
      {
        group: 'back-end',
        items: ['Spring Boot', 'Spring Security', 'Spring Data JPA', 'JDBC', 'APIs REST', 'Flyway'],
      },
      { group: 'dados', items: ['PostgreSQL', 'SQLite'] },
      { group: 'testes', items: ['JUnit 5', 'Testcontainers', 'Spotless'] },
      { group: 'infra', items: ['Docker', 'GitHub Actions', 'Maven', 'Linux', 'Caddy'] },
      { group: 'front-end', items: ['HTML', 'CSS', 'React', 'TypeScript'] },
    ],
    studying: {
      title: 'estudando agora',
      items: [
        { name: 'Spring Data JPA e Flyway', why: 'mapeamento e migrações versionadas no projeto de estoque' },
        { name: 'Testcontainers', why: 'testes de integração contra um Postgres real, não um mock' },
        { name: 'Docker e deploy em VPS', why: 'colocar e manter um sistema no ar, com HTTPS e backup' },
      ],
    },
    experience: [
      {
        org: 'Complexo de Saúde Professor Severino Lopes',
        role: 'Auxiliar de Sistemas',
        period: 'dez 2025 até hoje',
        start: '2025-12',
        bullets: [
          'Criei um relatório de rastreabilidade no sistema PIXEON, com consultas SQL de múltiplos JOINs para trazer setor e unidade de cada paciente.',
          'Sou o ponto de contato entre a equipe interna e a PIXEON (fornecedora do sistema) para dúvidas técnicas, melhorias e problemas operacionais.',
          'Identifiquei a falta de padrão nos termos de responsabilidade financeira e criei documentos parametrizados no sistema SMART.',
          'Participei da escrita dos procedimentos operacionais (POPs) de atendimento, estoque e internação.',
        ],
      },
      {
        org: 'Prefeitura Municipal de Natal',
        role: 'Estagiária de Suporte Técnico',
        period: 'jun 2025 a dez 2025',
        start: '2025-06',
        bullets: [
          'Cuidei sozinha da infraestrutura de TI da secretaria nos períodos sem supervisão direta.',
          'Dei suporte a mais de 30 colaboradores, com manutenção preventiva e corretiva e atualização de sistemas.',
        ],
      },
      {
        org: 'Eternizzy Photography',
        role: 'Assistente Financeira',
        period: 'out 2023 a set 2024',
        start: '2023-10',
        bullets: [
          'Montei dashboards em Excel para acompanhar indicadores e reduzir inconsistências nas planilhas.',
          'Acompanhei os KPIs e as metas trimestrais definidas com a liderança.',
        ],
      },
    ],
    education: [
      {
        school: 'Universidade Potiguar (UNP)',
        course: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
        period: 'ago 2023 a dez 2025',
      },
    ],
    contact: {
      lead: 'Quer conversar sobre uma vaga ou um projeto? O jeito mais rápido é por e-mail ou pelo LinkedIn.',
      email: 'e-mail',
      linkedin: 'linkedin',
      github: 'github',
      cv: 'currículo (PDF)',
    },
  },

  en: {
    headline: 'Java Back-end Developer',
    intro:
      'I build APIs and systems with Java and Spring Boot, from the data model to deployment. One of them runs the inventory and sales of a real shop today.',
    cvLabel: 'Download CV (PT)',
    apiResponse: {
      name: 'Júlia Cabral',
      role: 'Java Back-end Developer',
      location: 'Natal, Brazil',
      stack: ['Java 21', 'Spring Boot', 'SQL', 'PostgreSQL'],
      lookingFor: 'back-end developer role',
    },
    about: [
      "I'm a Java back-end developer based in Natal, Brazil, with a degree in Systems Analysis and Development from UNP (2025). I focus on the part of a system everything else depends on: data modeling, business rules, tests and deployment.",
      'By day I work as a systems assistant at a hospital complex, where I write multi-join SQL queries, configure systems and act as the link between the team and the software vendor. After hours I build systems with Java 21 and Spring Boot. The two main ones are further down.',
    ],
    stack: [
      { group: 'languages', items: ['Java 21', 'SQL', 'JavaScript'] },
      {
        group: 'back-end',
        items: ['Spring Boot', 'Spring Security', 'Spring Data JPA', 'JDBC', 'REST APIs', 'Flyway'],
      },
      { group: 'data', items: ['PostgreSQL', 'SQLite'] },
      { group: 'testing', items: ['JUnit 5', 'Testcontainers', 'Spotless'] },
      { group: 'infra', items: ['Docker', 'GitHub Actions', 'Maven', 'Linux', 'Caddy'] },
      { group: 'front-end', items: ['HTML', 'CSS', 'React', 'TypeScript'] },
    ],
    studying: {
      title: 'learning now',
      items: [
        { name: 'Spring Data JPA and Flyway', why: 'mapping and versioned migrations in the inventory project' },
        { name: 'Testcontainers', why: 'integration tests against a real Postgres, not a mock' },
        { name: 'Docker and VPS deployment', why: 'shipping and running a system with HTTPS and backups' },
      ],
    },
    experience: [
      {
        org: 'Complexo de Saúde Professor Severino Lopes',
        role: 'Systems Assistant',
        period: 'Dec 2025 to now',
        start: '2025-12',
        bullets: [
          'Built a traceability report in the PIXEON system, using multi-join SQL queries to bring each patient’s ward and unit.',
          'Main contact between the internal team and PIXEON (the system vendor) for technical questions, improvement requests and operational issues.',
          'Spotted inconsistent financial-responsibility forms and created standardized, parameterized documents in the SMART system.',
          'Helped write standard operating procedures for patient intake, inventory and admissions.',
        ],
      },
      {
        org: 'Natal City Hall',
        role: 'IT Support Intern',
        period: 'Jun 2025 to Dec 2025',
        start: '2025-06',
        bullets: [
          'Ran the department’s IT infrastructure on my own during periods without direct supervision.',
          'Supported 30+ staff members with preventive and corrective maintenance and system updates.',
        ],
      },
      {
        org: 'Eternizzy Photography',
        role: 'Financial Assistant',
        period: 'Oct 2023 to Sep 2024',
        start: '2023-10',
        bullets: [
          'Built Excel dashboards to track indicators and reduce spreadsheet inconsistencies.',
          'Tracked KPIs and the quarterly goals set with leadership.',
        ],
      },
    ],
    education: [
      {
        school: 'Universidade Potiguar (UNP)',
        course: 'Associate degree in Systems Analysis and Development',
        period: 'Aug 2023 to Dec 2025',
      },
    ],
    contact: {
      lead: 'Want to talk about a role or a project? Email or LinkedIn is the fastest way to reach me.',
      email: 'email',
      linkedin: 'linkedin',
      github: 'github',
      cv: 'résumé (PDF, Portuguese)',
    },
  },
};
