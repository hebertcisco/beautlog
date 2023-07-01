import { blue, red, green, white, yellow } from 'colorette';

class Console  {
  public static cout(message?: any, ...optionalParams: any[]) {
    Console._log(console.log, message, optionalParams);
  }
  public static log(message?: any, ...optionalParams: any[]) {
    Console._log(console.log, message, optionalParams);
  }
  public static table(message?: any, ...optionalParams: any[]) {
    Console._log(console.table, message, optionalParams);
  }
  public static show(message?: any, ...optionalParams: any[]) {
    Console._log(console.log, blue(message), optionalParams);
  }
  public static trace(message?: any, ...optionalParams: any[]) {
    Console._log(console.trace, white(message), optionalParams);
  }
  public static success(message?: any, ...optionalParams: any[]) {
    Console._log(console.log, green(message), optionalParams);
  }
  public static ok(message?: any, ...optionalParams: any[]) {
    Console._log(console.log, green(message), optionalParams);
  }
  public static debug(message?: any, ...optionalParams: any[]) {
    Console._log(console.debug, message, optionalParams);
  }
  public static info(message?: any, ...optionalParams: any[]) {
    Console._log(console.log, blue(message), optionalParams);
  }
  public static warning(message?: any, ...optionalParams: any[]) {
    Console._log(console.warn, message, optionalParams);
  }
  public static warn(message?: any, ...optionalParams: any[]) {
    Console.warning(yellow(message), optionalParams);
  }
  public static error(message?: any, ...optionalParams: any[]) {
    Console._log(console.error, red(message), optionalParams);
  }
  public static WriteLine(message?: any, ...optionalParams: any[]) {
    Console._log(console.log, message, optionalParams);
  }
  public static Write(message?: any, ...optionalParams: any[]) {
    Console._log(console.log, message, optionalParams);
  }

  private static _log(fn: Function, message?: any, ...optionalParams: any[]) {
    if (optionalParams?.length !== 0) {
      fn(message, optionalParams);
    } else {
        fn(message);
    }
  }
}
export default Console;
