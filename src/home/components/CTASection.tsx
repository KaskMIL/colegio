import { Box, Button, Container, Group, Text, Title } from '@mantine/core';

import { FadeIn } from '../../components/FadeIn';
import classes from './CTASection.module.css';

export function CTASection() {
  return (
    <Box component="section" className={classes.section} py={88} px="md">
      <Container size={1120}>
        <div className={classes.inner}>
          <FadeIn>
            <Title order={2} fz={{ base: 30, md: 38 }} lh={1.2} mb="md" className={classes.heading}>
              ¿Querés que tu hijo
              <br />
              sea parte de <span className={classes.accent}>nuestra familia</span>?
            </Title>
          </FadeIn>
          <FadeIn delay={0.12}>
            <Text fz="lg" c="rgba(255,255,255,0.7)" lh={1.7} mb="xl">
              Las inscripciones están abiertas. Acercate al colegio o escribinos
              para conocer vacantes y aranceles.
            </Text>
          </FadeIn>
          <FadeIn delay={0.24}>
            <Group justify="center" gap="sm" wrap="wrap">
              <Button
                component="a"
                href="#contacto"
                size="lg"
                color="amber"
                radius="md"
                styles={{
                  root: {
                    boxShadow: '0 4px 20px rgba(212,136,43,0.35)',
                    '&:hover': { boxShadow: '0 8px 28px rgba(212,136,43,0.45)' },
                  },
                }}
              >
                Escribinos por WhatsApp
              </Button>
              <Button
                component="a"
                href="tel:+541144555400"
                size="lg"
                variant="outline"
                color="gray.0"
                radius="md"
              >
                📞 4455-5400
              </Button>
            </Group>
          </FadeIn>
        </div>
      </Container>
    </Box>
  );
}
