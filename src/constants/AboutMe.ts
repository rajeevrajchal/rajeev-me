import { NLV, TT, GROWTHZILLA, ITG } from 'constants/SocialLink';
/* eslint-disable import/prefer-default-export */

export type DeckCard = {
  image?: string;
  title: string;
  [key: string]: string | number;
};

export const aboutDetail =
  "Hello, I'm Rajeev and I enjoy creating things that live on the internet. I am more focued building web application as well as mobile application that server meanfull purpose to the user out world!. Beside work, I've habit of developing interpersonal role with my fellow members. I love ❤️ enjoying gossiping with friends and collages on different agendas. Out of work I'm a student learning new idea about tech as well increasing productivity. Interested taking pictures, and playing computer games.";

export const techs: string[] = [
  'Javascripts (ES6+)',
  'Node.Js',
  'Typescripts',
  'React',
  'Express',
  'Next.Js',
  'React Native',
  'Tailwind',
  'Firebase',
  'Material UI',
];

export const interestFields: string[] = [
  'Software Architecure',
  'Web3',
  'Blockchain',
  'Data Science',
];

export const techLearning: string[] = [
  'Improving my skills in React',
  'Monorepo Concept',
  'Turborepo Concept',
  'Blockchain',
];

export const workDock: DeckCard[] = [
  {
    id: 1,
    order: 4,
    title: 'IT Glance',
    subtitle: 'FullStack Software Developer',
    link: ITG,
    description:
      'Played with multiple tech stacks and build multiple project using React, Laravel, Nodejs, Hasura etc.',
    startDate: 'Sep 2019',
    endDate: 'Mar 2021',
  },
  {
    id: 2,
    order: 3,
    title: 'Growthzilla',
    subtitle: 'Software Engineer',
    image: 'https://growthzilla.com/img/growthzilla-logo.png',
    link: GROWTHZILLA,
    description:
      'At Growthzilla, I am assigend as fullstack developer. I am assign to frontend developer with tech as React and Node.js as well as AWS Amplify.',
    startDate: 'Mar 2021',
    endDate: 'Feb 2022',
  },
  {
    id: 3,
    order: 2,
    title: 'Training Tube',
    subtitle: 'Freelance Front-End Developer',
    link: TT,
    description:
      'At TrainingTube™ we believe the time is precious, and being helpful and kind are essential human skills.',
    startDate: 'Oct 2021',
    endDate: 'Present',
  },
  {
    id: 4,
    order: 1,
    title: 'Next Level Value',
    subtitle: 'FullStack Software Developer',
    image: 'https://nlv-website.s3.eu-west-1.amazonaws.com/logo_b5bb8ba43d.png',
    link: NLV,
    description:
      'At NLV, I am assigend as fullstack developer. I am assign to multiple role as well as multiple project.',
    startDate: 'Feb 2022',
    endDate: 'Present',
  },
];
