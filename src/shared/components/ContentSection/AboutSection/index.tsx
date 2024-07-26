import * as S from '@/shared/components/ContentSection/styles';
import { aboutText } from '@/shared/constants/profileContent';

export default function AboutSection() {
  return (
    <section id='sobre'>
      <S.Title>{aboutText.title}</S.Title>
      {aboutText.paragraphs.map((paragraph, index) => (
        <S.Text key={index}>{paragraph}</S.Text>
      ))}
    </section>
  );
}
