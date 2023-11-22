import Console from './log';

export function log<T>(target: T, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    try {
      const result = originalMethod.apply(this, args);
      Console.log(result);
      return result;
    } catch (e) {
      Console.error(`Error: ${e}`);
      throw e;
    }
  };
  return descriptor;
}

export default log;
