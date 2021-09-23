import { fs_logger } from './fs_logger';

export function Logging() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const targetMethod = descriptor.value;

    descriptor.value = function (args: any) {
      const content = {
        method: `${target.constructor.name}-${propertyKey}`,
        body: args,
      };
      fs_logger(content);
      return targetMethod.apply(this, args);
    };

    return descriptor;
  };
}
