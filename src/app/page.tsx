'use client';

import ContentSection from '@/shared/components/ContentSection';
import ProfileSection from '@/shared/components/ProfileSection';
import GlobalStyle from '@/shared/styles/global';
import * as S from './styles';

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <S.Container>
        <ProfileSection />
        <ContentSection />
      </S.Container>
      <S.Footer>&copy; 2024 Jhonatan Tibiquera Sarmento de Souza</S.Footer>
    </>
  );
}
