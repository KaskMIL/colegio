import { Container, Stack, Text, Title, Image, Paper, Group, Center, Box, SimpleGrid, ThemeIcon } from '@mantine/core';
import { IconAt, IconPhone, IconMapPin, IconSchool, IconBook, IconUsers } from '@tabler/icons-react';

export default function HomeRoute() {
  return (
    <Box
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 0',
      }}
    >
      <Container size="md" py="xl">
        <Paper shadow="xl" radius="lg" p="xl" withBorder>
          <Stack align="center" gap="xl">
            {/* Logos */}
            <Group justify="center" gap="xl">
              <Image
                src="/assets/colegio-300x300.png"
                h={150}
                w={150}
                fit="contain"
                style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}
              />
              <Image
                src="/assets/jardin-300x300.png"
                h={150}
                w={150}
                fit="contain"
                style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}
              />
            </Group>

            {/* Títulos */}
            <Stack align="center" gap="xs">
              <Title order={1} size="h2" ta="center" fw={700}>
                Colegio San Miguel Arcángel
              </Title>
              <Title order={2} size="h3" ta="center" fw={600} c="dimmed">
                Jardín La Alpina Verde
              </Title>
            </Stack>

            {/* Mensaje de construcción */}
            <Paper bg="blue.0" p="md" radius="md" w="100%">
              <Text size="lg" ta="center" fw={500} c="blue.7">
                🚧 Sitio en construcción 🚧
              </Text>
              <Text size="sm" ta="center" c="dimmed" mt="xs">
                Estamos trabajando para ofrecerte una mejor experiencia
              </Text>
            </Paper>

            {/* Sobre la Institución */}
            <Stack gap="md" w="100%">
              <Title order={3} size="h4" ta="center" mt="md">
                Sobre Nuestra Institución
              </Title>
              <Text ta="center" c="dimmed" size="sm">
                Somos una institución educativa comprometida con la excelencia académica 
                y la formación integral de nuestros alumnos. Ofrecemos un ambiente de 
                aprendizaje seguro, inclusivo y estimulante.
              </Text>
            </Stack>

            {/* Niveles Educativos */}
            <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md" w="100%">
              <Paper p="md" radius="md" withBorder>
                <Stack align="center" gap="xs">
                  <ThemeIcon size={50} radius="xl" variant="light" color="blue">
                    <IconSchool size={28} />
                  </ThemeIcon>
                  <Text fw={600} size="sm" ta="center">
                    Nivel Inicial
                  </Text>
                  <Text size="xs" c="dimmed" ta="center">
                    Jardín La Alpina Verde
                  </Text>
                </Stack>
              </Paper>

              <Paper p="md" radius="md" withBorder>
                <Stack align="center" gap="xs">
                  <ThemeIcon size={50} radius="xl" variant="light" color="violet">
                    <IconBook size={28} />
                  </ThemeIcon>
                  <Text fw={600} size="sm" ta="center">
                    Nivel Primario
                  </Text>
                  <Text size="xs" c="dimmed" ta="center">
                    Educación integral
                  </Text>
                </Stack>
              </Paper>

              <Paper p="md" radius="md" withBorder>
                <Stack align="center" gap="xs">
                  <ThemeIcon size={50} radius="xl" variant="light" color="grape">
                    <IconUsers size={28} />
                  </ThemeIcon>
                  <Text fw={600} size="sm" ta="center">
                    Nivel Secundario
                  </Text>
                  <Text size="xs" c="dimmed" ta="center">
                    Formación de calidad
                  </Text>
                </Stack>
              </Paper>
            </SimpleGrid>

            {/* Información de contacto */}
            <Stack gap="md" w="100%" mt="md">
              <Title order={4} size="h5" ta="center">
                Contacto
              </Title>

              <Paper p="md" radius="md" withBorder>
                <Group gap="md">
                  <Center
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      backgroundColor: 'var(--mantine-color-blue-1)',
                    }}
                  >
                    <IconPhone size={20} color="var(--mantine-color-blue-7)" />
                  </Center>
                  <Box style={{ flex: 1 }}>
                    <Text size="xs" c="dimmed" fw={500}>
                      Teléfono
                    </Text>
                    <Text
                      component="a"
                      href="tel:44555400"
                      size="md"
                      fw={600}
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      4455-5400
                    </Text>
                  </Box>
                </Group>
              </Paper>

              <Paper p="md" radius="md" withBorder>
                <Group gap="md">
                  <Center
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      backgroundColor: 'var(--mantine-color-blue-1)',
                    }}
                  >
                    <IconAt size={20} color="var(--mantine-color-blue-7)" />
                  </Center>
                  <Box style={{ flex: 1 }}>
                    <Text size="xs" c="dimmed" fw={500}>
                      Email
                    </Text>
                    <Text
                      component="a"
                      href="mailto:administracion@colegiosanmiguelarcangel.edu.ar"
                      size="md"
                      fw={600}
                      style={{
                        textDecoration: 'none',
                        color: 'inherit',
                        wordBreak: 'break-word',
                      }}
                    >
                      administracion@colegiosanmiguelarcangel.edu.ar
                    </Text>
                  </Box>
                </Group>
              </Paper>

              <Paper p="md" radius="md" withBorder>
                <Group gap="md" align="flex-start">
                  <Center
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      backgroundColor: 'var(--mantine-color-blue-1)',
                    }}
                  >
                    <IconMapPin size={20} color="var(--mantine-color-blue-7)" />
                  </Center>
                  <Box style={{ flex: 1 }}>
                    <Text size="xs" c="dimmed" fw={500}>
                      Dirección
                    </Text>
                    <Text
                      component="a"
                      href="https://maps.app.goo.gl/VpVP42KJgLjGmLuJA"
                      target="_blank"
                      rel="noopener noreferrer"
                      size="md"
                      fw={600}
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      San José 5290, San Miguel, Buenos Aires
                    </Text>
                  </Box>
                </Group>
              </Paper>
            </Stack>

            {/* Footer */}
            <Text size="xs" c="dimmed" ta="center" mt="md">
              © {new Date().getFullYear()} Colegio San Miguel Arcángel - Jardín La Alpina Verde
            </Text>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}