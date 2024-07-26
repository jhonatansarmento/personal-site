import ProfileDescription from './ProfileDescription';
import ProfileImage from './ProfileImage';
import ProfileName from './ProfileName';
import ProfileNav from './ProfileNav';
import ProfileTitle from './ProfileTitle';
import SocialLinks from './SocialLinks';
import * as S from './styles';

interface ProfileSectionProps {
  activeSection: 'sobre' | 'experiencia' | 'projetos' | 'formacao';
  onSectionChange: (
    section: 'sobre' | 'experiencia' | 'projetos' | 'formacao'
  ) => void;
}

export default function ProfileSection({
  activeSection,
  onSectionChange,
}: ProfileSectionProps) {
  return (
    <S.Section>
      <ProfileImage />
      <ProfileName />
      <ProfileTitle />
      <ProfileDescription />
      <ProfileNav
        activeSection={activeSection}
        onSectionChange={onSectionChange}
      />
      <SocialLinks />
    </S.Section>
  );
}
