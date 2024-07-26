import { profileContent } from '@/shared/constants/profileContent';
import * as S from '../styles';

export default function ProfileImage() {
  return <S.Image src={profileContent.imageSrc} alt={profileContent.name} />;
}
