import { Container, SimpleGrid, Text, Title } from '@mantine/core';

import { FadeIn } from '../../components/FadeIn';
import classes from './ValoresStrip.module.css';

const VALORES = [
  { icon: '❤️', title: 'Calidez', desc: 'Enseñamos con amor y acompañamos a cada chico en su camino.' },
  { icon: '📖', title: 'Educación', desc: 'Formación sólida desde el jardín hasta terminar la secundaria.' },
  { icon: '🤝', title: 'Comunidad', desc: 'Familias, docentes y alumnos construyendo juntos desde hace 30 años.' },
  { icon: '🌱', title: 'Crecimiento', desc: 'Inglés, computación y valores para que tu hijo salga preparado.' },
];

export function ValoresStrip() {
  return (
    <section className={classes.strip}>
      <Container size={1120} py="xl">
        <SimpleGrid cols={{ base: 2, sm: 4 }} spacing="lg">
          {VALORES.map((v, i) => (
            <FadeIn key={v.title} delay={i * 0.1}>
              <div className={classes.card}>
                <div className={classes.icon}>{v.icon}</div>
                <Title order={3} fz="lg" mb={6}>
                  {v.title}
                </Title>
                <Text fz="sm" c="var(--color-light-text)" lh={1.6}>
                  {v.desc}
                </Text>
              </div>
            </FadeIn>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
}
