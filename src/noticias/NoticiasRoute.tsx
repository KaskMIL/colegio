import { Box, Container, SimpleGrid, Skeleton, Text, Title } from '@mantine/core';
import { Link } from 'react-router';

import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { useAllNoticias } from '../hooks/use-payload';
import { mediaUrl } from '../lib/payload';
import classes from './noticias.module.css';

const TAG_LABELS: Record<string, string> = {
  noticia: 'Noticia',
  evento: 'Evento',
  feria: 'Feria',
  acto: 'Acto',
  deportes: 'Deportes',
  jardin: 'Jardín',
};

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('es-AR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function NoticiasRoute() {
  const { data: noticias, isLoading } = useAllNoticias();

  return (
    <Box bg="var(--color-warm-white)">
      <Navbar />

      {/* Header */}
      <Box className={classes.header}>
        <Container size={1120}>
          <Title order={1} fz={{ base: 32, md: 42 }} className={classes.headerTitle} mb="xs">
            Noticias y Novedades
          </Title>
          <Text fz="lg" className={classes.headerSub}>
            Todo lo que pasa en el Jardín La Alpina Verde y el Colegio San Miguel Arcángel
          </Text>
        </Container>
      </Box>

      {/* Grid */}
      <Box className={classes.content}>
        <Container size={1120}>
          {isLoading ? (
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} height={360} radius="lg" />
              ))}
            </SimpleGrid>
          ) : noticias && noticias.length > 0 ? (
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
              {noticias.map((n) => (
                <Link to={`/noticias/${n.id}`} key={n.id} className={classes.card}>
                  <div className={classes.cardImage}>
                    {n.image ? (
                      <img src={mediaUrl(n.image.url) ?? ''} alt={n.title} />
                    ) : (
                      <div className={classes.cardImagePlaceholder}>
                        <Text fz={36} opacity={0.2}>📸</Text>
                      </div>
                    )}
                  </div>
                  <div className={classes.cardBody}>
                    <div className={classes.meta}>
                      <span className={classes.tag}>{TAG_LABELS[n.tag] || n.tag}</span>
                      <Text fz="xs" c="var(--color-light-text)">{formatDate(n.date)}</Text>
                    </div>
                    <Title order={3} fz="lg" lh={1.3} mt="sm" mb="xs">
                      {n.title}
                    </Title>
                    <Text fz="sm" c="var(--color-warm-gray)" lh={1.6} style={{ flex: 1 }}>
                      {n.excerpt}
                    </Text>
                    {n.author && (
                      <Text fz="xs" c="var(--color-light-text)" mt="md">
                        Por {n.author}
                      </Text>
                    )}
                  </div>
                </Link>
              ))}
            </SimpleGrid>
          ) : (
            <Box ta="center" py={80}>
              <Text fz={48} mb="md">📭</Text>
              <Title order={3} mb="xs">No hay noticias todavía</Title>
              <Text c="var(--color-warm-gray)">Pronto vamos a estar compartiendo novedades.</Text>
            </Box>
          )}
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}