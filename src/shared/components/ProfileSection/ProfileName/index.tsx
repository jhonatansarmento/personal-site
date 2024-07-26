import { profileContent } from '@/shared/constants/profileContent';
import * as S from '../styles';

export default function ProfileName() {
  return <S.Name>{profileContent.name}</S.Name>;
}
