import { Carousel } from '@mantine/carousel';
import { Box, Button, Container, Group, Loader, Text, Title } from '@mantine/core';

import { FadeIn } from '../../components/FadeIn';
import { useHeroSlides } from '../../hooks/use-payload';
import { mediaUrl } from '../../lib/payload';
import classes from './Hero.module.css';

const FALLBACK_SLIDES = [
  { id: '1', title: 'Feria de Ciencias 2025', subtitle: 'Nuestros alumnos presentando sus proyectos', placeholder: '🔬' },
  { id: '2', title: 'Acto del Día de la Diversidad', subtitle: 'Toda la comunidad celebrando junta', placeholder: '🎭' },
  { id: '3', title: 'Jardín La Alpina Verde', subtitle: 'Los más chiquitos aprendiendo jugando', placeholder: '🎨' },
  { id: '4', title: 'Actos patrios', subtitle: 'Celebrando nuestra identidad', placeholder: '🇦🇷' },
];

export function Hero() {
  const { data: slides, isLoading } = useHeroSlides();
  const hasPayloadSlides = slides && slides.length > 0;

  return (
    <section className={classes.hero}>
      <div className={classes.dotPattern} />

      <Container size={1120} className={classes.inner}>
        <div className={classes.grid}>
          {/* Left — text */}
          <div>
            <FadeIn delay={0.1}>
              <div className={classes.tagline}>
                <span className={classes.taglineLine} />
                Desde 1994 educando con el corazón
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Title order={1} className={classes.heading} fz={{ base: 36, sm: 44, md: 54 }} mt="md">
                Formamos parte
                <br />
                de tu <span className={classes.headingAccent}>familia</span>
              </Title>
            </FadeIn>

            <FadeIn delay={0.35}>
              <Text size="lg" className={classes.description} mt="lg" lh={1.75}>
                30 años acompañando a las familias de San Miguel. Jardín, Primaria y Secundaria
                con la calidez y el compromiso que tu hijo necesita para crecer.
              </Text>
            </FadeIn>

            <FadeIn delay={0.48}>
              <Group mt="xl" gap="sm">
                <Button component="a" href="#contacto" size="lg" color="amber" radius="md">
                  Quiero inscribir a mi hijo
                </Button>
                <Button component="a" href="#niveles" size="lg" variant="outline" color="gray.0" radius="md">
                  Conocé los niveles →
                </Button>
              </Group>
            </FadeIn>
          </div>

          {/* Right — Carousel */}
          <FadeIn delay={0.25} direction="left">
            <Box className={classes.carouselWrapper}>
              {isLoading ? (
                <Box className={classes.slide} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Loader color="white" />
                </Box>
              ) : (
                <Carousel
                  withIndicators
                  emblaOptions={{ align: 'start', loop: true }}
                  styles={{
                    indicator: {
                      background: 'rgba(255,255,255,0.4)',
                      '&[data-active]': { background: '#fff' },
                    },
                    control: {
                      background: 'rgba(255,255,255,0.15)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      color: '#fff',
                      backdropFilter: 'blur(8px)',
                      '&:hover': { background: 'rgba(255,255,255,0.25)' },
                    },
                  }}
                >
                  {hasPayloadSlides
                    ? slides.map((slide) => (
                        <Carousel.Slide key={slide.id}>
                          <div className={classes.slide}>
                            <img
                              src={mediaUrl(slide.image?.url) ?? ''}
                              alt={slide.title}
                              className={classes.slideImage}
                            />
                            <div className={classes.slideOverlay}>
                              <Text className={classes.slideTitle} fz="lg">{slide.title}</Text>
                              {slide.subtitle && (
                                <Text className={classes.slideSubtitle} fz="sm">{slide.subtitle}</Text>
                              )}
                            </div>
                          </div>
                        </Carousel.Slide>
                      ))
                    : FALLBACK_SLIDES.map((slide) => (
                        <Carousel.Slide key={slide.id}>
                          <div className={classes.slide}>
                            <div className={classes.slidePlaceholder}>
                              <Text fz={64} opacity={0.35}>{slide.placeholder}</Text>
                              <Text fz="sm" c="rgba(255,255,255,0.35)" mt="xs">Foto del evento</Text>
                            </div>
                            <div className={classes.slideOverlay}>
                              <Text className={classes.slideTitle} fz="lg">{slide.title}</Text>
                              <Text className={classes.slideSubtitle} fz="sm">{slide.subtitle}</Text>
                            </div>
                          </div>
                        </Carousel.Slide>
                      ))}
                </Carousel>
              )}
            </Box>
          </FadeIn>
        </div>
      </Container>

      <div className={classes.scrollHint}>
        <span className={classes.scrollText}>Descubrí más</span>
        <div className={classes.scrollMouse}>
          <div className={classes.scrollDot} />
        </div>
      </div>
    </section>
  );
}