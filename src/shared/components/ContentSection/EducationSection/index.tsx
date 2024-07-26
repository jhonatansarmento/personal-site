import { educationText } from '@/shared/constants/profileContent';
import * as S from '../styles';

export default function EducationSection() {
  return (
    <S.Education id='formacao'>
      <S.Title>{educationText.title}</S.Title>
      {educationText.items.map((item, index) => (
        <S.EducationItem key={index}>
          <S.EducationInstitution>{item.institution}</S.EducationInstitution>
          <S.EducationDegree>{item.degree}</S.EducationDegree>
          <S.EducationPeriod>{item.period}</S.EducationPeriod>
        </S.EducationItem>
      ))}
    </S.Education>
  );
}
