
import { SetMetadata } from '@nestjs/common';

export const Resource = (resource: string) => {
  return SetMetadata('resource', resource);
};