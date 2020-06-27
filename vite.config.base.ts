import path from 'path';
import { SharedConfig } from 'vite';

const baseConfig: SharedConfig = {
  alias: {
    '/@/': path.resolve(__dirname),
  }
}

export default baseConfig;
