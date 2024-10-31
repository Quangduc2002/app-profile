import React from 'react';
import Banner from './Banner';
import Introduce from './Introduce';
import Container from '@/Component/UI/Container/Container';
import Experiences from './Experiences';
import Skill from './Skill';

function Home() {
  return (
    <Container>
      <Banner />
      <Introduce />
      <Experiences />
      <Skill />
    </Container>
  );
}

export default Home;
