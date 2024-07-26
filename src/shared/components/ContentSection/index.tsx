import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import ProjectsSection from './ProjectsSection';
import * as S from './styles';

export default function ContentSection() {
  return (
    <S.Section>
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
    </S.Section>
  );
}
