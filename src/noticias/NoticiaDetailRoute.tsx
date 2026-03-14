import { Box, Container, Group, Loader, Text, Title } from '@mantine/core';
import { Link, useParams } from 'react-router';

import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { useNoticia } from '../hooks/use-payload';
import { mediaUrl } from '../lib/payload';
import classes from './noticia-detail.module.css';

const TAG_LABELS: Record<string, string> = {
  noticia: 'Noticia',
  evento: 'Evento',
  feria: 'Feria',
  acto: 'Acto',
  deportes: 'Deportes',
  jardin: 'Jardín',
};

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('es-AR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/**
 * Renders Payload's Lexical rich text content.
 * Lexical stores content as a JSON tree. This is a simplified renderer
 * that handles the most common node types.
 */
function RichTextRenderer({ content }: { content: unknown }) {
  if (!content) return null;

  const root = (content as { root?: { children?: unknown[] } })?.root;
  if (!root?.children) return null;

  return <>{root.children.map((node, i) => <RichTextNode key={i} node={node} />)}</>;
}

function RichTextNode({ node }: { node: unknown }) {
  const n = node as Record<string, unknown>;
  const children = (n.children as unknown[]) || [];

  const renderChildren = () =>
    children.map((child, i) => <RichTextNode key={i} node={child} />);

  // Text node
  if (n.type === 'text') {
    let text = <>{String(n.text || '')}</>;
    if ((n.format as number) & 1) text = <strong>{text}</strong>;
    if ((n.format as number) & 2) text = <em>{text}</em>;
    if ((n.format as number) & 8) text = <u>{text}</u>;
    return text;
  }

  // Block nodes
  switch (n.type) {
    case 'paragraph':
      return <p>{renderChildren()}</p>;
    case 'heading': {
      const Tag = (n.tag || 'h2') as keyof JSX.IntrinsicElements;
      return <Tag>{renderChildren()}</Tag>;
    }
    case 'list':
      return n.listType === 'number' ? (
        <ol>{renderChildren()}</ol>
      ) : (
        <ul>{renderChildren()}</ul>
      );
    case 'listitem':
      return <li>{renderChildren()}</li>;
    case 'quote':
      return <blockquote>{renderChildren()}</blockquote>;
    case 'link':
      return (
        <a href={String((n.fields as Record<string, unknown>)?.url || '#')} target="_blank" rel="noopener noreferrer">
          {renderChildren()}
        </a>
      );
    case 'linebreak':
      return <br />;
    default:
      if (children.length > 0) return <>{renderChildren()}</>;
      return null;
  }
}

export default function NoticiaDetailRoute() {
  const { id } = useParams<{ id: string }>();
  const { data: noticia, isLoading, isError } = useNoticia(id || '');

  if (isLoading) {
    return (
      <Box bg="var(--color-warm-white)">
        <Navbar />
        <Box ta="center" py={200}>
          <Loader color="brand" size="lg" />
        </Box>
        <Footer />
      </Box>
    );
  }

  if (isError || !noticia) {
    return (
      <Box bg="var(--color-warm-white)">
        <Navbar />
        <Box ta="center" py={200}>
          <Text fz={48} mb="md">😕</Text>
          <Title order={2} mb="sm">Noticia no encontrada</Title>
          <Text c="var(--color-warm-gray)" mb="xl">
            Es posible que haya sido eliminada o que el enlace sea incorrecto.
          </Text>
          <Link to="/noticias" className={classes.backLink}>
            ← Volver a noticias
          </Link>
        </Box>
        <Footer />
      </Box>
    );
  }

  return (
    <Box bg="var(--color-warm-white)">
      <Navbar />

      {/* Hero con imagen */}
      <Box className={classes.hero}>
        {noticia.image ? (
          <img
            src={mediaUrl(noticia.image.url) ?? ''}
            alt={noticia.title}
            className={classes.heroImage}
          />
        ) : (
          <div className={classes.heroPlaceholder} />
        )}
        <div className={classes.heroOverlay} />

        <Container size={1120} className={classes.heroContent}>
          <Link to="/noticias" className={classes.backLink} style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 24, display: 'inline-flex' }}>
            ← Volver a noticias
          </Link>
          <Box mt="md">
            <span className={classes.tag}>{TAG_LABELS[noticia.tag] || noticia.tag}</span>
          </Box>
          <Title order={1} fz={{ base: 28, md: 40 }} lh={1.2} mt="md" className={classes.title}>
            {noticia.title}
          </Title>
          <Group mt="md" gap="md">
            <Text fz="sm" className={classes.metaText}>
              {formatDate(noticia.date)}
            </Text>
            {noticia.author && (
              <>
                <Text fz="sm" className={classes.metaText}>·</Text>
                <Text fz="sm" className={classes.metaText}>
                  Por {noticia.author}
                </Text>
              </>
            )}
          </Group>
        </Container>
      </Box>

      {/* Contenido del artículo */}
      <Box className={classes.article}>
        <Container size={1120}>
          <div className={classes.prose}>
            {/* Excerpt como intro */}
            <Text fz="lg" c="var(--color-dark-text)" lh={1.8} fw={500} mb="xl">
              {noticia.excerpt}
            </Text>

            <div className={classes.divider} />

            {/* Rich text content */}
            {noticia.content ? (
              <RichTextRenderer content={noticia.content} />
            ) : (
              <Text c="var(--color-warm-gray)" ta="center" py="xl">
                Esta noticia no tiene contenido adicional.
              </Text>
            )}

            <div className={classes.divider} />

            <Box ta="center" mt="xl">
              <Link to="/noticias" className={classes.backLink}>
                ← Volver a todas las noticias
              </Link>
            </Box>
          </div>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}