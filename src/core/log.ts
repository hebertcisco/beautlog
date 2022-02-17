import { LogLevel, TLogValue } from './log-level';
import chalk from 'chalk';

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
    output.log(chalk.blue(value));
  }
  public static trace(...value: TLogValue) {
    output.log(chalk.white(value));
  }
  public static success(...value: TLogValue) {
    output.log(chalk.green(value));
  }
  public static ok(...value: TLogValue) {
    Console.success(value);
  }

  public static debug(...value: TLogValue) {
    output.debug(value);
  }

  public static info(...value: TLogValue) {
    output.log(chalk.blue(value));
  }
  public static warning(...value: TLogValue) {
    output.log(chalk.yellow(value));
  }
  public static warn(...value: TLogValue) {
    output.log(chalk.yellow(value));
  }
  public static error(...value: TLogValue) {
    output.error(chalk.red(value));
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
