// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import log from "log-beautify";
import IConsole from './log';

class Console implements  IConsole{
  public static cout(...value: any[]) {
    return console.log(value);
  }
  public static log(...value: any[]) {
    return console.log(value);
  }
  public static table(...value: any[]) {
    return console.table(value);
  }
  public static show(...value: any[]) {
    return log.show(value);
  }
  public static trace(...value: any[]) {
    return log.trace(value);
  }
  public static success(...value: any[]) {
    return log.success(value);
  }
  public static ok(...value: any[]) {
    return log.ok(value);
  }

  public static debug(...value: any[]) {
    return log.debug(value);
  }

  public static info(...value: any[]) {
    return log.info(value);
  }
  public static warning(...value: any[]) {
    return log.warning(value);
  }
  public static warn(...value: any[]) {
    return log.warn(value);
  }
  public static error(...value: any[]) {
    return log.error(value);
  }
  public static WriteLine(...value: any[]) {
    return log.debug(value);
  }
  public static Write(...value: any[]) {
    return log.debug(value);
  }
  public static ReadLine(value: any | any[]) {
    return prompt(value);
  }
  public input(value: any | any[]) {
    return prompt(value);
  }
}
export default Console;
