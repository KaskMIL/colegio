import { Group, Stack, Text, Title } from '@mantine/core';

import classes from './under-construction-route.module.css';

export default function UnderConstructionRoute() {
  return (
    <div className={classes.page}>
      <div className={classes.dotPattern} />

      <div className={classes.content}>
        {/* Logos */}
        <div className={classes.logos}>
          {/* TODO: reemplazar con <img> de logos reales */}
          <img src='/assets/colegio-300x300@2x.png'className={classes.logoImg} />
          <img src='/assets/jardin-300x300@2x.png' className={classes.logoImg} />
          {/* <div className={classes.logoImg} style={{ fontSize: 20 }}>AV</div>
          <div className={classes.logoImg} style={{ fontSize: 16 }}>SMA</div> */}
        </div>

        {/* Badge "en construcción" */}
        <div className={classes.badge}>
          <span className={classes.badgeDot} />
          <Text fz="xs" fw={600} c="rgba(255,255,255,0.7)" tt="uppercase" lts="0.08em">
            Sitio en construcción
          </Text>
        </div>

        {/* Heading */}
        <Title order={1} fz={{ base: 32, sm: 42 }} className={classes.heading} mb="md">
          Estamos preparando
          <br />
          <span className={classes.accent}>algo nuevo</span> para vos
        </Title>

        <Text fz="lg" c="rgba(255,255,255,0.6)" lh={1.7} mb="sm">
          El nuevo sitio web del Jardín La Alpina Verde y el Colegio San Miguel Arcángel
          está en camino. Muy pronto vas a poder conocer todo sobre nuestra propuesta educativa.
        </Text>

        <div className={classes.divider} />

        {/* Contact info */}
        <Stack gap="xs" mb="xl">
          <Text fz="sm" c="rgba(255,255,255,0.5)">
            Mientras tanto, podés comunicarte con nosotros:
          </Text>
          <Group justify="center" gap="lg">
            <a href="tel:+541144555400" className={classes.contactItem}>
              <Text fz="sm" fw={500}>📞 4455-5400</Text>
            </a>
            <a href="mailto:colegio.sanmiguelarcangel.2020@gmail.com" className={classes.contactItem}>
              <Text fz="sm" fw={500}>✉️ Email</Text>
            </a>
          </Group>
        </Stack>

        {/* Social links */}
        <Group justify="center" gap="lg">
          <a
            href="https://instagram.com/colegio_sanmiguelarcangel"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.socialLink}
          >
            Instagram
          </a>
          <a
            href="https://facebook.com/p/Colegio-San-Miguel-Arcangel-100030928647096/"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.socialLink}
          >
            Facebook
          </a>
        </Group>
      </div>

      {/* Footer */}
      <div className={classes.footer}>
        <Text fz="xs" c="rgba(255,255,255,0.2)">
          San José 5396, San Miguel, Buenos Aires · DIEGEP 5303
        </Text>
      </div>
    </div>
  );
}
