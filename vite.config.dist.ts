import { BuildConfig } from 'vite';

import baseConfig from './vite.config.base';

const distConfig: BuildConfig = {
  ...baseConfig,
}

export default distConfig;
