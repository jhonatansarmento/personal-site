import { profileContent } from '@/shared/constants/profileContent';
import * as S from '../styles';

export default function ProfileDescription() {
  return <S.Description>{profileContent.description}</S.Description>;
}
