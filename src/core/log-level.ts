export type TLogValue = any;
export abstract class LogLevel {
  private static write(value: TLogValue) {
    console.log(value);
  }
  public static ok(...value: TLogValue): void {
    LogLevel.success(value);
  }
  public static success(...value: TLogValue): void {
    LogLevel.write(`${value}\n`);
  }
  public static trace(...value: TLogValue): void {
    LogLevel.debug(value);
  }
  public static warn(...value: TLogValue): void {
    LogLevel.write(`${value}\n`);
  }
  public static debug(...value: TLogValue): void {
    LogLevel.write(`${value}\n`);
  }
  public static info(...value: TLogValue): void {
    LogLevel.write(`${value}\n`);
  }
  public static log(...value: TLogValue): void {
    LogLevel.write(`${value}\n`);
  }
}
