import * as S from './styles';

export default function ProfileSection() {
  return (
    <S.Section>
      <S.Image
        src='https://media.licdn.com/dms/image/D4D03AQGBk3H7MhqkSQ/profile-displayphoto-shrink_800_800/0/1708103587369?e=1727308800&v=beta&t=yRycc7faEEeUJ4H54m2r03k59YmNsBjcdC-FRvrDK4E'
        alt='Jhonatan Sarmento'
      />
      <S.Name>Jhonatan Tibiquera Sarmento de Souza</S.Name>
      <S.Title>Desenvolvedor Full Stack</S.Title>
      <S.Description>
        Desenvolvedor FullStack | Angular, ReactJS, e Node.js | UI/UX Design
      </S.Description>
      <S.Nav>
        <a href='#sobre'>SOBRE</a>
        <a href='#experiencia'>EXPERIÊNCIA</a>
        <a href='#projetos'>PROJETOS</a>
        <a href='#blog'>BLOG</a>
      </S.Nav>
      <S.SocialLinks>
        <a href='https://linkedin.com/in/jhonatansarmento' target='_blank'>
          LinkedIn
        </a>
        <a href='https://github.com/jhonatansarmento' target='_blank'>
          GitHub
        </a>
      </S.SocialLinks>
    </S.Section>
  );
}
