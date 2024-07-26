import AboutSection from './AboutSection';
import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';
import ProjectsSection from './ProjectsSection';
import * as S from './styles';

export default function ContentSection() {
  return (
    <S.Section>
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
    </S.Section>
  );
}
