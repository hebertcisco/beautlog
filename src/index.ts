import Console from './core/log';

export const { input } = new Console();
export const print = Console.log
export const printf = Console.log
export const log = Console.log
export const puts = Console.log
export const debug = Console.debug
export const table = Console.table
export const cout  = Console.cout

export * as logger from './core/log';
export * as bl from './core/log';
export * as beautlog from './core/log';
export default Console;
