import { Box, Container, Group, SimpleGrid, Text, Title } from '@mantine/core';

import { FadeIn } from '../../components/FadeIn';
import { SectionLabel } from '../../components/SectionLabel';
import classes from './Noticias.module.css';

// TODO: reemplazar con data del backend
const NOTICIAS = [
  { tag: 'Evento', date: '15 Mar 2026', title: 'Jornada de Puertas Abiertas', excerpt: 'Vení con tu familia a recorrer el colegio y conocer a los profes. Sábado de 10 a 13 hs.' },
  { tag: 'Feria', date: 'Nov 2025', title: 'Feria de Ciencias Secundaria', excerpt: 'Nuestros estudiantes presentaron proyectos increíbles sobre medio ambiente y tecnología.' },
  { tag: 'Acto', date: 'Oct 2025', title: 'Acto del Día de la Diversidad', excerpt: 'Toda la comunidad escolar participó en una jornada de reflexión y celebración cultural.' },
];

export function Noticias() {
  return (
    <Box component="section" id="noticias" bg="var(--color-warm-white)" py={100} px="md">
      <Container size={1120}>
        <FadeIn>
          <Group justify="space-between" align="flex-end" mb={48} wrap="wrap" gap="lg">
            <div>
              <SectionLabel>Novedades</SectionLabel>
              <Title order={2} fz={{ base: 28, md: 36 }}>Lo que pasa en el cole</Title>
            </div>
            <a href="#" className={classes.viewAll}>Ver todas →</a>
          </Group>
        </FadeIn>

        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
          {NOTICIAS.map((n, i) => (
            <FadeIn key={n.title} delay={i * 0.1}>
              <article className={classes.article}>
                <div className={classes.imagePlaceholder}>
                  <Text fz={36} opacity={0.2}>📸</Text>
                </div>
                <Box p="lg">
                  <Group gap="sm" mb="sm">
                    <span className={classes.tag}>{n.tag}</span>
                    <Text fz="xs" c="var(--color-light-text)">{n.date}</Text>
                  </Group>
                  <Title order={3} fz="lg" lh={1.3} mb="xs">{n.title}</Title>
                  <Text fz="sm" c="var(--color-warm-gray)" lh={1.6}>{n.excerpt}</Text>
                </Box>
              </article>
            </FadeIn>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
