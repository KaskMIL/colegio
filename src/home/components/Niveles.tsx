import { Box, Container, SimpleGrid, Text, Title } from '@mantine/core';

import { FadeIn } from '../../components/FadeIn';
import { SectionLabel } from '../../components/SectionLabel';
import classes from './Niveles.module.css';

const NIVELES = [
  {
    nivel: 'Jardín de Infantes',
    sub: 'La Alpina Verde',
    edad: 'Salas de 3, 4 y 5 · Turno Tarde',
    desc: 'Los primeros pasos en un espacio cálido y contenedor. Aprender jugando, con inglés y computación desde el inicio.',
    color: '#E8F5E9',
    accent: '#388E3C',
    icon: '🎨',
  },
  {
    nivel: 'Nivel Primario',
    sub: null,
    edad: '1° a 6° grado',
    desc: 'Formación académica sólida con inglés, computación y actividades que despiertan la curiosidad y los valores.',
    color: '#E3F2FD',
    accent: '#1565C0',
    icon: '📚',
  },
  {
    nivel: 'Nivel Secundario',
    sub: null,
    edad: '1° a 6° año',
    desc: 'Preparamos a nuestros estudiantes para el futuro con herramientas, pensamiento crítico y compromiso social.',
    color: '#FFF5E6',
    accent: '#D4882B',
    icon: '🎓',
  },
];

export function Niveles() {
  return (
    <Box component="section" id="niveles" bg="var(--color-cream)" py={100} px="md">
      <Container size={1120}>
        <FadeIn>
          <Box ta="center" mb={56}>
            <SectionLabel center>Propuesta educativa</SectionLabel>
            <Title order={2} fz={{ base: 30, md: 38 }} lh={1.2}>
              Acompañamos a tu hijo{' '}
              <Text span c="brand" inherit fs="italic">en cada etapa</Text>
            </Title>
          </Box>
        </FadeIn>

        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
          {NIVELES.map((n, i) => (
            <FadeIn key={n.nivel} delay={i * 0.13}>
              <div className={classes.card}>
                <div className={classes.iconBox} style={{ background: n.color }}>
                  {n.icon}
                </div>
                <Title order={3} fz="xl" mb={2}>{n.nivel}</Title>
                {n.sub && (
                  <Text fz="sm" c="brand" fw={600} fs="italic" mb={4}>{n.sub}</Text>
                )}
                <Text fz="xs" c={n.accent} fw={600} tt="uppercase" lts="0.04em" mb="md">
                  {n.edad}
                </Text>
                <Text fz="sm" c="var(--color-warm-gray)" lh={1.7} style={{ flex: 1 }}>
                  {n.desc}
                </Text>
                <a href="#" className={classes.cardLink}>Más información →</a>
              </div>
            </FadeIn>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
