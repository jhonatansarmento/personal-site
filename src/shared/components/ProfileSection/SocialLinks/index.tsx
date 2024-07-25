import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import * as S from '../styles';

export default function SocialLinks() {
  return (
    <S.SocialLinks>
      <a
        href='https://linkedin.com/in/jhonatansarmento'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='LinkedIn'
      >
        <FaLinkedin />
      </a>
      <a
        href='https://github.com/jhonatansarmento'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='GitHub'
      >
        <FaGithub />
      </a>
      <a
        href='https://www.instagram.com/jhonatan.sarmento/'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Instagram'
      >
        <FaInstagram />
      </a>
    </S.SocialLinks>
  );
}
