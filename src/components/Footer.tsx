import { Box, Container, Group, Stack, Text } from '@mantine/core';

import classes from './Footer.module.css';

const FOOTER_LINKS = [
  { title: 'Institucional', links: ['Nuestra historia', 'Misión y valores', 'Autoridades'] },
  { title: 'Niveles', links: ['Jardín (La Alpina Verde)', 'Primaria', 'Secundaria'] },
  { title: 'Comunidad', links: ['Noticias', 'Eventos', 'Galería', 'Contacto'] },
];

const SOCIALS = [
  { label: 'Instagram', href: 'https://instagram.com/colegio_sanmiguelarcangel' },
  { label: 'Facebook', href: 'https://facebook.com/p/Colegio-San-Miguel-Arcangel-100030928647096/' },
];

export function Footer() {
  return (
    <Box component="footer" id="contacto" className={classes.footer} py={72} px="md">
      <Container size={1120}>
        <div className={classes.grid}>
          {/* Brand column */}
          <div>
            <Group gap="sm" mb="md">
              {/* TODO: reemplazar con <img> de logos reales */}
              <Box
                className={classes.logoImg}
                style={{ background: 'var(--mantine-color-brand-6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 10, fontWeight: 700 }}
              >
                AV
              </Box>
              <Box
                className={classes.logoImg}
                style={{ background: 'var(--mantine-color-brand-6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 9, fontWeight: 700 }}
              >
                SMA
              </Box>
              <div>
                <Text c="#fff" fw={700} fz="md" lh={1.2} style={{ fontFamily: 'var(--mantine-heading-font-family)' }}>
                  La Alpina Verde · San Miguel Arcángel
                </Text>
                <Text fz="xs" c="rgba(255,255,255,0.4)">
                  Jardín · Primaria · Secundaria
                </Text>
              </div>
            </Group>

            <Text fz="sm" c="rgba(255,255,255,0.45)" lh={1.7} maw={300} mb="xs">
              San José 5396, San Miguel
              <br />
              Buenos Aires (CP 1663)
            </Text>
            <Text fz="sm" c="rgba(255,255,255,0.45)" mb={4}>
              Tel: 4455-5400
            </Text>
            <Text
              component="a"
              href="mailto:colegio.sanmiguelarcangel.2020@gmail.com"
              fz="xs"
              c="rgba(255,255,255,0.45)"
              style={{ textDecoration: 'none', wordBreak: 'break-all' }}
            >
              colegio.sanmiguelarcangel.2020@gmail.com
            </Text>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.title}>
              <div className={classes.colTitle}>{col.title}</div>
              <Stack gap={8}>
                {col.links.map((link) => (
                  <a key={link} href="#" className={classes.footerLink}>{link}</a>
                ))}
              </Stack>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className={classes.bottom}>
          <Text fz="xs" c="rgba(255,255,255,0.25)">
            © {new Date().getFullYear()} Colegio San Miguel Arcángel · DIEGEP 5303
          </Text>
          <Group gap="lg">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className={classes.socialLink}>
                {s.label}
              </a>
            ))}
          </Group>
        </div>
      </Container>
    </Box>
  );
}
