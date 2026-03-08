import { Box } from '@mantine/core';

import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

import { CTASection } from './components/CTASection';
import { Hero } from './components/Hero';
import { Institucional } from './components/Institucional';
import { Niveles } from './components/Niveles';
import { Noticias } from './components/Noticias';
import { ValoresStrip } from './components/ValoresStrip';

export default function HomeRoute() {
  return (
    <Box bg="var(--color-warm-white)">
      <Navbar />
      <Hero />
      <ValoresStrip />
      <Institucional />
      <Niveles />
      <Noticias />
      <CTASection />
      <Footer />
    </Box>
  );
}
