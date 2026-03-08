import { Box, type BoxProps } from '@mantine/core';
import type { ReactNode } from 'react';

import { useInView } from '../hooks/use-in-view';
import classes from './FadeIn.module.css';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface FadeInProps extends BoxProps {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
}

const OFFSETS: Record<Direction, string> = {
  up: 'translate(0, 36px)',
  down: 'translate(0, -36px)',
  left: 'translate(36px, 0)',
  right: 'translate(-36px, 0)',
  none: 'translate(0, 0)',
};

export function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  ...boxProps
}: FadeInProps) {
  const [ref, visible] = useInView();

  return (
    <Box
      ref={ref}
      className={`${classes.root} ${visible ? classes.visible : classes.hidden}`}
      style={{
        transitionDelay: `${delay}s`,
        transform: visible ? undefined : OFFSETS[direction],
      }}
      {...boxProps}
    >
      {children}
    </Box>
  );
}
