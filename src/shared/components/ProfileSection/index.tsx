import ProfileNav from '@/shared/components/ProfileSection//ProfileNav';
import ProfileTitle from '@/shared/components/ProfileSection//ProfileTitle';
import SocialLinks from '@/shared/components/ProfileSection//SocialLinks';
import ProfileDescription from '@/shared/components/ProfileSection/ProfileDescription';
import ProfileImage from '@/shared/components/ProfileSection/ProfileImage';
import ProfileName from '@/shared/components/ProfileSection/ProfileName';
import * as S from './styles';

interface ProfileSectionProps {
  activeSection: 'sobre' | 'experiencia' | 'projetos';
  onSectionChange: (section: 'sobre' | 'experiencia' | 'projetos') => void;
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
