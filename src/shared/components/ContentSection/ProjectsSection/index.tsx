import { projectsText } from '@/shared/constants/profileContent';
import Link from 'next/link';
import * as S from '../styles';

export default function ProjectsSection() {
  return (
    <S.Projects id='projetos'>
      <S.Title>{projectsText.title}</S.Title>
      {projectsText.items.map((item, index) => (
        <S.ProjectItem key={index}>
          <S.ProjectTitle>
            <Link href={item.link} target='_blank' rel='noopener noreferrer'>
              {item.title}
            </Link>
          </S.ProjectTitle>
          <S.ProjectDescription>{item.description}</S.ProjectDescription>
        </S.ProjectItem>
      ))}
    </S.Projects>
  );
}
