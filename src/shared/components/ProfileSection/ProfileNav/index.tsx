import * as S from '../styles';

interface ProfileNavProps {
  activeSection: 'sobre' | 'experiencia' | 'projetos';
  onSectionChange: (section: 'sobre' | 'experiencia' | 'projetos') => void;
}

export default function ProfileNav({
  activeSection,
  onSectionChange,
}: ProfileNavProps) {
  return (
    <S.Nav>
      <S.NavItem
        $active={activeSection === 'sobre'}
        href='#sobre'
        onClick={() => onSectionChange('sobre')}
      >
        SOBRE
      </S.NavItem>
      <S.NavItem
        $active={activeSection === 'experiencia'}
        href='#experiencia'
        onClick={() => onSectionChange('experiencia')}
      >
        EXPERIÊNCIA
      </S.NavItem>
      <S.NavItem
        $active={activeSection === 'projetos'}
        href='#projetos'
        onClick={() => onSectionChange('projetos')}
      >
        PROJETOS
      </S.NavItem>
    </S.Nav>
  );
}
