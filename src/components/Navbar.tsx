import { Box, Burger, Button, Container, Group } from '@mantine/core';
import { useDisclosure, useWindowScroll } from '@mantine/hooks';

import classes from './Navbar.module.css';

// TODO: reemplazar con imports reales de los logos
// import logoJardin from '@/assets/logo-jardin.png';
// import logoColegio from '@/assets/logo-colegio.png';

const NAV_LINKS = [
  { label: 'Inicio', href: '#' },
  { label: 'Institucional', href: '#institucional' },
  { label: 'Niveles', href: '#niveles' },
  { label: 'Noticias', href: '#noticias' },
  { label: 'Contacto', href: '#contacto' },
];

export function Navbar() {
  const [scroll] = useWindowScroll();
  const scrolled = scroll.y > 50;
  const [menuOpened, { toggle, close }] = useDisclosure(false);

  const textColor = scrolled ? 'var(--color-dark-text)' : '#fff';
  const mutedColor = scrolled ? 'var(--color-light-text)' : 'rgba(255,255,255,0.7)';

  return (
    <>
      <Box component="nav" className={classes.nav} data-scrolled={scrolled || undefined}>
        <Container size={1120}>
          <Group justify="space-between">
            {/* Dual logos + brand name */}
            <a href="#" className={classes.logos}>
              {/* Placeholder divs — reemplazar con <img> cuando tengas los logos */}
              <img
                className={classes.logoImg}
                // style={{ background: 'var(--mantine-color-brand-6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 10, fontWeight: 700 }}
                src='/assets/jardin-300x300.png'
              />
              <img
                className={classes.logoImg}
                // style={{ background: 'var(--mantine-color-brand-6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 9, fontWeight: 700 }}
                src='/assets/colegio-300x300.png'
              />
              <div className={classes.brandText}>
                <div className={classes.brandName} style={{ color: textColor }}>
                  La Alpina Verde · San Miguel Arcángel
                </div>
                <div className={classes.brandSub} style={{ color: mutedColor }}>
                  Jardín · Primaria · Secundaria
                </div>
              </div>
            </a>

            {/* Desktop links */}
            <div className={classes.desktopLinks}>
              {NAV_LINKS.map((link) => (
                <a key={link.label} href={link.href} className={classes.link} style={{ color: textColor }}>
                  {link.label}
                </a>
              ))}
              <Button
                component="a"
                href="#contacto"
                size="compact-sm"
                className={classes.ctaBtn}
                color="brand"
                radius="md"
              >
                Inscripciones
              </Button>
            </div>

            {/* Mobile burger */}
            <Burger
              opened={menuOpened}
              onClick={toggle}
              className={classes.burger}
              color={textColor}
              size="sm"
              aria-label="Menú"
            />
          </Group>
        </Container>
      </Box>

      {/* Mobile overlay */}
      {menuOpened && (
        <Box className={classes.mobileOverlay} onClick={close}>
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className={classes.mobileLink}>
              {link.label}
            </a>
          ))}
          <Button component="a" href="#contacto" size="lg" color="brand" radius="md" mt="md">
            Inscripciones
          </Button>
        </Box>
      )}
    </>
  );
}
