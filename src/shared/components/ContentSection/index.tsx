import * as S from './styles';

export default function ContentSection() {
  return (
    <S.Section>
      <section id='sobre'>
        <S.Title>Sobre</S.Title>
        <S.Text>
          Olá! Meu nome é Jhonatan Tibiquera Sarmento de Souza e sou um
          desenvolvedor full stack com experiência em diversas tecnologias como
          React, Angular, Next.js, e muito mais. Tenho trabalhado em vários
          projetos desafiadores e estou sempre em busca de novas oportunidades
          para aprender e crescer profissionalmente.
        </S.Text>
        <S.Text>
          Tenho uma paixão por criar soluções eficientes e inovadoras que possam
          melhorar a vida das pessoas. Se você está procurando alguém dedicado e
          apaixonado por tecnologia, está no lugar certo!
        </S.Text>
      </section>
      <S.Experience id='experiencia'>
        <S.Title>Experiência</S.Title>
        <S.ExperienceItem>
          <S.ExperienceTitle>Desenvolvedor FullStack</S.ExperienceTitle>
          <S.ExperienceSubtitle>
            Watch Brasil · Tempo integral
          </S.ExperienceSubtitle>
          <S.ExperienceText>
            ago de 2023 - jun de 2024 · 11 meses · Manaus, Amazonas, Brasil ·
            Remota
          </S.ExperienceText>
        </S.ExperienceItem>
        <S.ExperienceItem>
          <S.ExperienceTitle>Desenvolvedor de software</S.ExperienceTitle>
          <S.ExperienceSubtitle>
            Instituto de Pesquisas Eldorado · Tempo integral
          </S.ExperienceSubtitle>
          <S.ExperienceText>
            jun de 2021 - fev de 2023 · 1 ano 9 meses · Manaus
          </S.ExperienceText>
        </S.ExperienceItem>
        <S.ExperienceItem>
          <S.ExperienceTitle>
            Estagiário em Desenvolvimento de Software | UI
          </S.ExperienceTitle>
          <S.ExperienceSubtitle>
            Instituto de Pesquisas Eldorado · Estágio
          </S.ExperienceSubtitle>
          <S.ExperienceText>
            ago de 2020 - dez de 2020 · 5 meses · Manaus, Amazonas, Brasil
          </S.ExperienceText>
        </S.ExperienceItem>
        <S.ExperienceItem>
          <S.ExperienceTitle>Designer e Fotógrafo</S.ExperienceTitle>
          <S.ExperienceSubtitle>
            FF Produções Brasil · Tempo integral
          </S.ExperienceSubtitle>
          <S.ExperienceText>
            ago de 2018 - jul de 2020 · 2 anos · Manaus e Região, Brasil
          </S.ExperienceText>
        </S.ExperienceItem>
      </S.Experience>
    </S.Section>
  );
}
