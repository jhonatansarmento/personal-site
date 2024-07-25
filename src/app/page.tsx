'use client';

import ContentSection from '@/shared/components/ContentSection';
import ProfileSection from '@/shared/components/ProfileSection';
import GlobalStyle from '@/shared/styles/global';
import { useState } from 'react';
import * as S from './styles';

export default function Home() {
  const [activeSection, setActiveSection] = useState<
    'sobre' | 'experiencia' | 'projetos'
  >('sobre');

  return (
    <>
      <GlobalStyle />
      <S.Container>
        <S.FixedContainer>
          <ProfileSection
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />
        </S.FixedContainer>
        <ContentSection />
      </S.Container>
      <S.Footer>&copy; 2024 Jhonatan Sarmento</S.Footer>
    </>
  );
}
