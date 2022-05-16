import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
    Welcome to <br />
    My Personal Portfolio 
    </SectionTitle>
    <SectionText>
      My purpose is to be an expert in app development and take my skills to the next level and build awesome apps.
    </SectionText>
    <Button onClick={()=> window.location = 'https://google.com'}>Learn More</Button>
  </LeftSection>
  </Section>
);

export default Hero;