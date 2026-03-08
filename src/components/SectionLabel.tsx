import { Box } from '@mantine/core';
import type { ReactNode } from 'react';

import classes from './SectionLabel.module.css';

interface SectionLabelProps {
  children: ReactNode;
  center?: boolean;
}

export function SectionLabel({ children, center = false }: SectionLabelProps) {
  return (
    <Box className={classes.label} data-center={center || undefined} mb="sm">
      {!center && <span className={classes.line} />}
      {children}
    </Box>
  );
}
