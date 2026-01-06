import musicImg from '../assets/img/Music.webp';
import coffeBlogImg from '../assets/img/CoffeBlog.webp';
import rockFestivalImg from '../assets/img/RockFestival.webp';
import latamTetrisImg from '../assets/img/LatamTetris.webp';
import franciscoImg from '../assets/img/Francisco Foundation.webp';

export type Project = {
  id: string;
  title: string;
  url: string;
  image: string;
  technologies: string[];
  github: string;
  isTeamProject?: boolean;
}

export const developerProjects: Project[] = [
  {
    id: 'music',
    title: 'Cute Music',
    url: 'https://music-asthetic.netlify.app/',
    image: musicImg,
    technologies: ['html-5', 'Sass Logo (Color)-01', 'JavaScript'],
    github: 'https://www.google.com',
  },
  {
    id: 'coffee',
    title: 'Colombian Coffee',
    url: 'https://colombian-coffee.netlify.app/',
    image: coffeBlogImg,
    technologies: ['html-5', 'Sass Logo (Color)-01', 'JavaScript'],
    github: 'https://www.google.com',
  },
  {
    id: 'rockfestival',
    title: 'Rock Festival',
    url: 'https://cuartetodenos-festival.netlify.app/',
    image: rockFestivalImg,
    technologies: ['html-5', 'Sass Logo (Color)-01', 'JavaScript'],
    github: 'https://www.google.com',
  },
];

export const teamProjects: Project[] = [
  {
    id: 'tetrislatam',
    title: 'Tetris LATAM',
    url: 'https://tetrislatam.com',
    image: latamTetrisImg,
    technologies: ['html-5', 'css3', 'JavaScript', 'Vue.js'],
    github: 'https://www.google.com',
    isTeamProject: true,
  },
  {
    id: 'francisco',
    title: 'Francisco Foundation',
    url: 'https://morenofoundation.org/',
    image: franciscoImg,
    technologies: ['html-5', 'css3', 'WordPress'],
    github: 'https://www.google.com',
    isTeamProject: true,
  },
];
