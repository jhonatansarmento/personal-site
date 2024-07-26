import { profileContent } from '@/shared/constants/profileContent';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import * as S from '../styles';

const iconMap = {
  FaLinkedin: FaLinkedin,
  FaGithub: FaGithub,
  FaInstagram: FaInstagram,
};

export default function SocialLinks() {
  return (
    <S.SocialLinks>
      {profileContent.socialLinks.map((link) => {
        const Icon = iconMap[link.icon as keyof typeof iconMap];
        return (
          <Link
            key={link.href}
            href={link.href}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={link.label}
          >
            <Icon />
          </Link>
        );
      })}
    </S.SocialLinks>
  );
}
