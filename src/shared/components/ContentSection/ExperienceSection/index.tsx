import { experienceText } from '@/shared/constants/profileContent';
import * as S from '../styles';

export default function ExperienceSection() {
  return (
    <S.Experience id='experiencia'>
      <S.Title>{experienceText.title}</S.Title>
      {experienceText.items.map((item, index) => (
        <S.ExperienceItem key={index}>
          <S.ExperienceTitle>{item.title}</S.ExperienceTitle>
          <S.ExperienceSubtitle>{item.subtitle}</S.ExperienceSubtitle>
          <S.ExperienceText>{item.text}</S.ExperienceText>
        </S.ExperienceItem>
      ))}
    </S.Experience>
  );
}
