import {
  Anchor,
  Box,
  Container,
  Group,
  SimpleGrid,
  Skeleton,
  Text,
  Title,
} from '@mantine/core';

import { FadeIn } from '../../components/FadeIn';
import { SectionLabel } from '../../components/SectionLabel';
import { useNoticias } from '../../hooks/use-payload';
import { mediaUrl } from '../../lib/payload';
import classes from './Noticias.module.css';
import { Link } from 'react-router';

const TAG_LABELS: Record<string, string> = {
  noticia: 'Noticia',
  evento: 'Evento',
  feria: 'Feria',
  acto: 'Acto',
  deportes: 'Deportes',
  jardin: 'Jardín',
};

const FALLBACK = [
  {
    id: '1',
    tag: 'evento',
    date: '2026-03-15',
    title: 'Jornada de Puertas Abiertas',
    excerpt:
      'Vení con tu familia a recorrer el colegio y conocer a los profes. Sábado de 10 a 13 hs.',
    image: null,
  },
  {
    id: '2',
    tag: 'feria',
    date: '2025-11-01',
    title: 'Feria de Ciencias Secundaria',
    excerpt:
      'Nuestros estudiantes presentaron proyectos increíbles sobre medio ambiente y tecnología.',
    image: null,
  },
  {
    id: '3',
    tag: 'acto',
    date: '2025-10-01',
    title: 'Acto del Día de la Diversidad',
    excerpt:
      'Toda la comunidad escolar participó en una jornada de reflexión y celebración cultural.',
    image: null,
  },
];

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('es-AR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export function Noticias() {
  const { data: noticias, isLoading } = useNoticias(3);
  const items = noticias && noticias.length > 0 ? noticias : FALLBACK;

  return (
    <Box
      component="section"
      id="noticias"
      bg="var(--color-warm-white)"
      py={100}
      px="md"
    >
      <Container size={1120}>
        <FadeIn>
          <Group
            justify="space-between"
            align="flex-end"
            mb={48}
            wrap="wrap"
            gap="lg"
          >
            <div>
              <SectionLabel>Novedades</SectionLabel>
              <Title order={2} fz={{ base: 28, md: 36 }}>
                Lo que pasa en el cole
              </Title>
            </div>
            <Anchor
              component={Link}
              to={'/noticias'}
              className={classes.viewAll}
            >
              Ver todas →{' '}
            </Anchor>
          </Group>
        </FadeIn>

        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
          {isLoading
            ? Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} height={380} radius="lg" />
              ))
            : items.map((n, i) => (
                <FadeIn key={n.id} delay={i * 0.1}>
                  <Anchor component={Link} to={`/noticias/${n.id}`}>
                    <article className={classes.article}>
                      <div className={classes.imagePlaceholder}>
                        {'image' in n && n.image ? (
                          <img
                            src={
                              mediaUrl((n.image as { url: string }).url) ?? ''
                            }
                            alt={n.title}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                            }}
                          />
                        ) : (
                          <Text fz={36} opacity={0.2}>
                            📸
                          </Text>
                        )}
                      </div>
                      <Box p="lg">
                        <Group gap="sm" mb="sm">
                          <span className={classes.tag}>
                            {TAG_LABELS[n.tag] || n.tag}
                          </span>
                          <Text fz="xs" c="var(--color-light-text)">
                            {formatDate(n.date)}
                          </Text>
                        </Group>
                        <Title order={3} fz="lg" lh={1.3} mb="xs">
                          {n.title}
                        </Title>
                        <Text fz="sm" c="var(--color-warm-gray)" lh={1.6}>
                          {n.excerpt}
                        </Text>
                      </Box>
                    </article>
                  </Anchor>
                </FadeIn>
              ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
