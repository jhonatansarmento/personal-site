import { Sections } from '@/shared/constants/navigationSections';
import { profileContent } from '@/shared/constants/profileContent';
import * as S from '../styles';

interface ProfileNavProps {
  activeSection: Sections;
  onSectionChange: (section: Sections) => void;
}

export default function ProfileNav({
  activeSection,
  onSectionChange,
}: ProfileNavProps) {
  return (
    <S.Nav>
      {profileContent.navItems.map((item) => (
        <S.NavItem
          key={item.section}
          $active={activeSection === item.section}
          href={`#${item.section}`}
          onClick={() => onSectionChange(item.section)}
        >
          {item.label}
        </S.NavItem>
      ))}
    </S.Nav>
  );
}
