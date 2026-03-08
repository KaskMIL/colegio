import { Box, Container, Text, Title } from '@mantine/core';

import { FadeIn } from '../../components/FadeIn';
import { SectionLabel } from '../../components/SectionLabel';
import classes from './Institucional.module.css';

export function Institucional() {
  return (
    <Box component="section" id="institucional" bg="var(--color-warm-white)" py={100} px="md">
      <Container size={1120}>
        <div className={classes.grid}>
          {/* Image placeholder */}
          <FadeIn direction="right">
            <div className={classes.imagePlaceholder}>
              <Text fz={56} opacity={0.25}>📷</Text>
              <Text fz="sm" c="var(--color-light-text)" mt="xs">
                Foto de un acto / feria del colegio
              </Text>
              <div className={classes.cornerTL} />
              <div className={classes.cornerBR} />
            </div>
          </FadeIn>

          {/* Text */}
          <div>
            <FadeIn>
              <SectionLabel>Nuestra historia</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.12}>
              <Title order={2} fz={{ base: 30, md: 36 }} lh={1.2} mb="lg">
                Más de 30 años
                <br />
                <Text span c="brand" inherit>educando con compromiso y dedicación</Text>
              </Title>
            </FadeIn>
            <FadeIn delay={0.24}>
              <Text c="var(--color-warm-gray)" lh={1.8} mb="sm">
                En 1994 nació el Jardín de Infantes La Alpina Verde y el Colegio San Miguel Arcángel,
                con una misión clara: ofrecer educación de calidad a las familias de San Miguel,
                cerca de casa y con el calor de siempre.
              </Text>
              <Text c="var(--color-warm-gray)" lh={1.8} mb="xl">
                Hoy, con más de 30 años de trayectoria, seguimos siendo ese lugar donde cada chico
                tiene nombre, cada familia es bienvenida, y cada día es una oportunidad para crecer juntos.
              </Text>
            </FadeIn>
            <FadeIn delay={0.36}>
              <a href="#" className={classes.learnMore}>
                Conocé más sobre nosotros →
              </a>
            </FadeIn>
          </div>
        </div>
      </Container>
    </Box>
  );
}
