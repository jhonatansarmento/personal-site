'use client';

import ContentSection from '@/shared/components/ContentSection';
import Footer from '@/shared/components/Footer';
import ProfileSection from '@/shared/components/ProfileSection';
import { Sections } from '@/shared/constants/navigationSections';
import GlobalStyle from '@/shared/styles/global';
import { primaryTheme } from '@/shared/styles/themes';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import * as S from './styles';

export default function Home() {
  const [activeSection, setActiveSection] = useState<Sections>(Sections.SOBRE);

  return (
    <>
      <ThemeProvider theme={primaryTheme}>
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
        <Footer />
      </ThemeProvider>
    </>
  );
}
