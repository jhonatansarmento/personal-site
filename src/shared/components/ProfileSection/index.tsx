import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import * as S from './styles';

interface ProfileSectionProps {
  activeSection: 'sobre' | 'experiencia' | 'projetos';
  onSectionChange: (section: 'sobre' | 'experiencia' | 'projetos') => void;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  activeSection,
  onSectionChange,
}) => {
  return (
    <S.Section>
      <S.Image
        src='https://media.licdn.com/dms/image/D4D03AQGBk3H7MhqkSQ/profile-displayphoto-shrink_800_800/0/1708103587369?e=1727308800&v=beta&t=yRycc7faEEeUJ4H54m2r03k59YmNsBjcdC-FRvrDK4E'
        alt='Jhonatan Sarmento'
      />
      <S.Name>Jhonatan Sarmento</S.Name>
      <S.Title>Desenvolvedor Full Stack</S.Title>
      <S.Description>
        Desenvolvedor FullStack | Angular, ReactJS, e Node.js | UI/UX Design
      </S.Description>
      <S.Nav>
        <S.NavItem
          active={activeSection === 'sobre'}
          href='#sobre'
          onClick={() => onSectionChange('sobre')}
        >
          SOBRE
        </S.NavItem>
        <S.NavItem
          active={activeSection === 'experiencia'}
          href='#experiencia'
          onClick={() => onSectionChange('experiencia')}
        >
          EXPERIÊNCIA
        </S.NavItem>
        <S.NavItem
          active={activeSection === 'projetos'}
          href='#projetos'
          onClick={() => onSectionChange('projetos')}
        >
          PROJETOS
        </S.NavItem>
      </S.Nav>
      <S.SocialLinks>
        <a
          href='https://linkedin.com/in/jhonatansarmento'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin />
        </a>
        <a
          href='https://github.com/jhonatansarmento'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub />
        </a>
        <a
          href='https://www.instagram.com/jhonatan.sarmento/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaInstagram />
        </a>
      </S.SocialLinks>
    </S.Section>
  );
};

export default ProfileSection;
