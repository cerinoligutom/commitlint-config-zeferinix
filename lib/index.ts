import configConventional from '@commitlint/config-conventional';
import { UserConfig } from '@commitlint/types';

const configConventionalTypeEnum = configConventional.rules['type-enum'];

const ADDITIONAL_TYPES: string[] = [
  'css', // CSS Changes
  'infra', // Infra config changes
];

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', [...configConventionalTypeEnum[2], ...ADDITIONAL_TYPES]],
  },
};

module.exports = Configuration;
