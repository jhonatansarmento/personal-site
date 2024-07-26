export const profileContent = {
  description:
    'Desenvolvedor FullStack | Angular, ReactJS, e Node.js | UI/UX Design',
  imageSrc:
    'https://media.licdn.com/dms/image/D4D03AQGBk3H7MhqkSQ/profile-displayphoto-shrink_800_800/0/1708103587369?e=1727308800&v=beta&t=yRycc7faEEeUJ4H54m2r03k59YmNsBjcdC-FRvrDK4E',
  name: 'Jhonatan Sarmento',
  title: 'Desenvolvedor Full Stack',
  navItems: [
    { section: 'sobre' as 'sobre', label: 'SOBRE' },
    { section: 'experiencia' as 'experiencia', label: 'EXPERIÊNCIA' },
    { section: 'projetos' as 'projetos', label: 'PROJETOS' },
  ],
  socialLinks: [
    {
      href: 'https://linkedin.com/in/jhonatansarmento',
      label: 'LinkedIn',
      icon: 'FaLinkedin',
    },
    {
      href: 'https://github.com/jhonatansarmento',
      label: 'GitHub',
      icon: 'FaGithub',
    },
    {
      href: 'https://www.instagram.com/jhonatan.sarmento/',
      label: 'Instagram',
      icon: 'FaInstagram',
    },
  ],
  footerText: '© 2024 Jhonatan Sarmento',
};

export const aboutText = {
  title: 'Sobre',
  paragraphs: [
    'Olá! Meu nome é Jhonatan Tibiquera Sarmento de Souza e sou um desenvolvedor full stack com experiência em diversas tecnologias como React, Angular, Next.js, e muito mais. Tenho trabalhado em vários projetos desafiadores e estou sempre em busca de novas oportunidades para aprender e crescer profissionalmente.',
    'Tenho uma paixão por criar soluções eficientes e inovadoras que possam melhorar a vida das pessoas. Se você está procurando alguém dedicado e apaixonado por tecnologia, está no lugar certo!',
  ],
};

export const experienceText = {
  title: 'Experiência',
  items: [
    {
      title: 'Desenvolvedor FullStack',
      subtitle: 'Watch Brasil · Tempo integral',
      text: 'ago de 2023 - jun de 2024 · 11 meses · Manaus, Amazonas, Brasil · Remota',
    },
    {
      title: 'Desenvolvedor de software',
      subtitle: 'Instituto de Pesquisas Eldorado · Tempo integral',
      text: 'jun de 2021 - fev de 2023 · 1 ano 9 meses · Manaus',
    },
    {
      title: 'Estagiário em Desenvolvimento de Software | UI',
      subtitle: 'Instituto de Pesquisas Eldorado · Estágio',
      text: 'ago de 2020 - dez de 2020 · 5 meses · Manaus, Amazonas, Brasil',
    },
    {
      title: 'Designer e Fotógrafo',
      subtitle: 'FF Produções Brasil · Tempo integral',
      text: 'ago de 2018 - jul de 2020 · 2 anos · Manaus e Região, Brasil',
    },
  ],
};

export const projectsText = {
  title: 'Projetos',
  items: [
    {
      title: 'Curso Completo de um Projeto Com Node.JS e React.JS',
      link: 'https://www.youtube.com/watch?v=hK59KYwQP3U&list=PL0QN_lbTofYcw7bzm8y-l2BMslKfMfNgr&ab_channel=codezero',
      description:
        'Este curso completo ensina a criar uma aplicação utilizando a stack MERN (MongoDB, Express, React JS e Node JS). O projeto é uma aplicação de anotações chamada DayNotes, onde é possível fazer um CRUD completo. O curso abrange desde a preparação do ambiente de desenvolvimento até a implementação de todas as funcionalidades da aplicação.',
    },
    {
      title: 'Leitor Online de Mangá',
      link: 'https://mangareader-delta.vercel.app/',
      description:
        'Este projeto é um leitor online de mangá desenvolvido com tecnologias modernas. Ele permite aos usuários ler seus mangás favoritos diretamente do navegador com uma interface intuitiva e amigável. O projeto inclui funcionalidades como navegação por capítulos, pesquisa de títulos e muito mais, proporcionando uma experiência de leitura imersiva.',
    },
  ],
};
