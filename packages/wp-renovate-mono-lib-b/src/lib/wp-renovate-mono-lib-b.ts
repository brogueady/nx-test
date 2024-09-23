import { wpRenovateMonoLibC } from '@at/wp-renovate-mono-lib-c'

export function wpRenovateMonoLibB_breaking(): string {
  wpRenovateMonoLibC()
  return 'wp-renovate-mono-lib-b';
}

// patch change