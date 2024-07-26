'use client';

import { profileContent } from '@/shared/constants/profileContent';
import * as S from './styles';

export default function Footer() {
  return <S.Footer>{profileContent.footerText}</S.Footer>;
}
