import { Box, Container, Skeleton, Text, Title } from '@mantine/core';

import { FadeIn } from '../../components/FadeIn';
import { SectionLabel } from '../../components/SectionLabel';
import { useInstitucional } from '../../hooks/use-payload';
import { mediaUrl } from '../../lib/payload';
import classes from './Institucional.module.css';

const DEFAULTS = {
  sectionLabel: 'Nuestra historia',
  titleLine1: 'Más de 30 años',
  titleLine2: 'educando con compromiso y dedicación',
  paragraph1:
    'En 1994 nació el Jardín de Infantes La Alpina Verde y el Colegio San Miguel Arcángel, con una misión clara: ofrecer educación de calidad a las familias de San Miguel, cerca de casa y con el calor de siempre.',
  paragraph2:
    'Hoy, con más de 30 años de trayectoria, seguimos siendo ese lugar donde cada chico tiene nombre, cada familia es bienvenida, y cada día es una oportunidad para crecer juntos.',
  ctaText: 'Conocé más sobre nosotros →',
  ctaLink: '#',
};

export function Institucional() {
  const { data, isLoading } = useInstitucional();

  const content = {
    sectionLabel: data?.sectionLabel || DEFAULTS.sectionLabel,
    titleLine1: data?.titleLine1 || DEFAULTS.titleLine1,
    titleLine2: data?.titleLine2 || DEFAULTS.titleLine2,
    paragraph1: data?.paragraph1 || DEFAULTS.paragraph1,
    paragraph2: data?.paragraph2 || DEFAULTS.paragraph2,
    ctaText: data?.ctaText || DEFAULTS.ctaText,
    ctaLink: data?.ctaLink || DEFAULTS.ctaLink,
  };

  const imageUrl = data?.image ? mediaUrl(data.image.url) : null;

  return (
    <Box component="section" id="institucional" bg="var(--color-warm-white)" py={100} px="md">
      <Container size={1120}>
        <div className={classes.grid}>
          {/* Image */}
          <FadeIn direction="right">
            {isLoading ? (
              <Skeleton height={400} radius="lg" />
            ) : imageUrl ? (
              <div className={classes.imageWrapper}>
                <img src={imageUrl} alt={content.sectionLabel} className={classes.image} />
                <div className={classes.cornerTL} />
                <div className={classes.cornerBR} />
              </div>
            ) : (
              <div className={classes.imagePlaceholder}>
                <Text fz={56} opacity={0.25}>📷</Text>
                <Text fz="sm" c="var(--color-light-text)" mt="xs">
                  Foto de un acto / feria del colegio
                </Text>
                <div className={classes.cornerTL} />
                <div className={classes.cornerBR} />
              </div>
            )}
          </FadeIn>

          {/* Text */}
          <div>
            <FadeIn>
              <SectionLabel>{content.sectionLabel}</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.12}>
              <Title order={2} fz={{ base: 30, md: 36 }} lh={1.2} mb="lg">
                {content.titleLine1}
                <br />
                <Text span c="brand" inherit>{content.titleLine2}</Text>
              </Title>
            </FadeIn>
            <FadeIn delay={0.24}>
              <Text c="var(--color-warm-gray)" lh={1.8} mb="sm">
                {content.paragraph1}
              </Text>
              <Text c="var(--color-warm-gray)" lh={1.8} mb="xl">
                {content.paragraph2}
              </Text>
            </FadeIn>
            <FadeIn delay={0.36}>
              <a href={content.ctaLink} className={classes.learnMore}>
                {content.ctaText}
              </a>
            </FadeIn>
          </div>
        </div>
      </Container>
    </Box>
  );
}