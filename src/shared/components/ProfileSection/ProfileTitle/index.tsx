import { profileContent } from '@/shared/constants/profileContent';
import * as S from '../styles';

export default function ProfileTitle() {
  return <S.Title>{profileContent.title}</S.Title>;
}
