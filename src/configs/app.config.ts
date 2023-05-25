import { registerAs } from '@nestjs/config';
import { version } from 'package.json';

export default registerAs(
  'app',
  (): Record<string, any> => ({
    name: process.env.APP_NAME,
    env: process.env.APP_ENV,
    repoVersion: version,
    globalPrefix: `api/${version}`,
  }),
);
