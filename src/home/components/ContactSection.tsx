import {
  Alert,
  Box,
  Button,
  Container,
  Group,
  Select,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';

import { FadeIn } from '../../components/FadeIn';
import { SectionLabel } from '../../components/SectionLabel';
import { useSubmitContact } from '../../hooks/use-payload';
import classes from './ContactSection.module.css';

interface ContactFormValues {
  nombre: string;
  email: string;
  telefono: string;
  nivel: string;
  mensaje: string;
}

const MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.5!2d-58.7108!3d-34.5425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSan+Jos%C3%A9+5396%2C+San+Miguel%2C+Buenos+Aires!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar';

const GOOGLE_MAPS_LINK =
  'https://www.google.com/maps/search/San+Jos%C3%A9+5396,+San+Miguel,+Buenos+Aires';

export function ContactSection() {
  const submitContact = useSubmitContact();

  const form = useForm<ContactFormValues>({
    initialValues: {
      nombre: '',
      email: '',
      telefono: '',
      nivel: '',
      mensaje: '',
    },
    validate: {
      nombre: (v) => (v.trim().length < 2 ? 'Ingresá tu nombre' : null),
      email: (v) =>
        /^\S+@\S+\.\S+$/.test(v) ? null : 'Ingresá un email válido',
      telefono: (v) =>
        v.trim().length < 6 ? 'Ingresá un teléfono de contacto' : null,
      nivel: (v) => (v ? null : 'Seleccioná un nivel'),
      mensaje: (v) =>
        v.trim().length < 10
          ? 'Contanos un poco más (mínimo 10 caracteres)'
          : null,
    },
  });

  const handleSubmit = (values: ContactFormValues) => {
    submitContact.mutate(values);
  };

  const handleReset = () => {
    submitContact.reset();
    form.reset();
  };

  return (
    <Box
      component="section"
      id="contacto"
      className={classes.section}
      py={100}
      px="md"
    >
      <Container size={1120}>
        <FadeIn>
          <Box mb={48}>
            <SectionLabel>Contacto</SectionLabel>
            <Title order={2} fz={{ base: 28, md: 36 }}>
              Escribinos, estamos para ayudarte
            </Title>
          </Box>
        </FadeIn>

        <div className={classes.grid}>
          {/* Formulario */}
          <FadeIn delay={0.1}>
            <div className={classes.formCard}>
              {submitContact.isSuccess ? (
                <div className={classes.successMessage}>
                  <div className={classes.successIcon}>✅</div>
                  <Title order={3} mb="xs">
                    ¡Mensaje enviado!
                  </Title>
                  <Text c="var(--color-warm-gray)" mb="lg">
                    Nos vamos a comunicar con vos a la brevedad.
                  </Text>
                  <Button variant="light" color="brand" onClick={handleReset}>
                    Enviar otro mensaje
                  </Button>
                </div>
              ) : (
                <form onSubmit={form.onSubmit(handleSubmit)}>
                  <Stack gap="md">
                    {submitContact.isError && (
                      <Alert color="red" title="Error al enviar">
                        Hubo un problema enviando tu mensaje. Por favor intentá
                        de nuevo o contactanos por teléfono al 4455-5400.
                      </Alert>
                    )}

                    <TextInput
                      label="Nombre completo"
                      placeholder="Tu nombre y apellido"
                      withAsterisk
                      {...form.getInputProps('nombre')}
                    />

                    <Group grow gap="md">
                      <TextInput
                        label="Email"
                        placeholder="tu@email.com"
                        withAsterisk
                        {...form.getInputProps('email')}
                      />
                      <TextInput
                        label="Teléfono"
                        placeholder="11 1234-5678"
                        withAsterisk
                        {...form.getInputProps('telefono')}
                      />
                    </Group>

                    <Select
                      label="¿Qué nivel te interesa?"
                      placeholder="Seleccioná un nivel"
                      withAsterisk
                      data={[
                        {
                          value: 'jardin',
                          label: 'Jardín de Infantes (La Alpina Verde)',
                        },
                        { value: 'primaria', label: 'Nivel Primario' },
                        { value: 'secundaria', label: 'Nivel Secundario' },
                        { value: 'varios', label: 'Más de un nivel' },
                        { value: 'otro', label: 'Otro / Consulta general' },
                      ]}
                      {...form.getInputProps('nivel')}
                    />

                    <Textarea
                      label="Mensaje"
                      placeholder="Contanos en qué podemos ayudarte..."
                      withAsterisk
                      minRows={4}
                      autosize
                      {...form.getInputProps('mensaje')}
                    />

                    <Button
                      type="submit"
                      color="brand"
                      size="md"
                      radius="md"
                      mt="xs"
                      loading={submitContact.isPending}
                    >
                      Enviar mensaje
                    </Button>
                  </Stack>
                </form>
              )}
            </div>
          </FadeIn>

          {/* Mapa */}
          <FadeIn delay={0.2} direction="left">
            <div className={classes.mapWrapper}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.9577395904325!2d-58.74064122450159!3d-34.57993585624219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc961ff092702d%3A0xc1b22c22b587702e!2sSan%20Miguel%20Arcangel%20Colegio!5e0!3m2!1ses!2sar!4v1773607274790!5m2!1ses!2sar"
                className={classes.mapIframe}
                title="Ubicación del Colegio San Miguel Arcángel"
                width="600"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className={classes.mapInfo}>
                <Text fw={600} mb={4}>
                  Colegio San Miguel Arcángel
                </Text>
                <Text fz="sm" c="var(--color-warm-gray)" mb={4}>
                  Jardín de Infantes La Alpina Verde
                </Text>
                <Text fz="sm" c="var(--color-warm-gray)" mb="xs">
                  San José 5396, San Miguel, Buenos Aires
                </Text>
                <Group gap="lg">
                  <a
                    href={GOOGLE_MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.mapLink}
                  >
                    Cómo llegar →
                  </a>
                  <a href="tel:+541144555400" className={classes.mapLink}>
                    📞 4455-5400
                  </a>
                </Group>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Box>
  );
}
