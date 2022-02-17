import { LogLevel, TLogValue } from './log-level';

export const output = console;
const input = process.stdin;

class Console implements LogLevel {
  public static cout(...value: TLogValue) {
    output.log(value);
  }
  public static log(...value: TLogValue) {
    output.log(value);
  }
  public static table(...value: TLogValue) {
    output.table(value);
  }
  public static show(...value: TLogValue) {
    output.log(value);
  }
  public static trace(...value: TLogValue) {
    output.log(value);
  }
  public static success(...value: TLogValue) {
    output.log(value);
  }
  public static ok(...value: TLogValue) {
    output.log(value);
  }

  public static debug(...value: TLogValue) {
    output.log(value);
  }

  public static info(...value: TLogValue) {
    output.log(value);
  }
  public static warning(...value: TLogValue) {
    output.log(value);
  }
  public static warn(...value: TLogValue) {
    output.log(value);
  }
  public static error(...value: TLogValue) {
    output.error(value);
  }
  public static WriteLine(...value: TLogValue) {
    output.log(value);
  }
  public static Write(...value: TLogValue) {
    output.log(value);
  }
  public static ReadLine(value: TLogValue) {
    input.read(value);
  }
  public static Read(value: TLogValue) {
    input.read(value);
  }
  public static prompt(value: TLogValue) {
     input.read(value);
  }
  public input(value: TLogValue) {
    input.read(value);
  }
  public static printf(...value: TLogValue) {
    output.log(value);
  }
  public static logf(...value: TLogValue) {
    output.log(value);
  }
}
export default Console;
