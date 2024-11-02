import React, { useRef } from 'react';
import Banner from './Banner';
import Introduce from './Introduce';
import Container from '@/Component/UI/Container/Container';
import Experiences from './Experiences';
import Skill from './Skill';

function Home() {
  const experienceRef = useRef<HTMLDivElement | null>(null);
  return (
    <Container>
      <Banner experienceRef={experienceRef} />
      <Introduce />
      <Experiences experienceRef={experienceRef} />
      <Skill />
    </Container>
  );
}

export default Home;
