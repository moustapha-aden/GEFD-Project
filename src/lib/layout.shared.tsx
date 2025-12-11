import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'GEFD Guide',
    },
    search: {
      enabled: true,
    },
  };
}

