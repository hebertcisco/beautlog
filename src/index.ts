import Console from './implementations/log';

export const print = Console.log;
export const printf = Console.log;
export const log = Console.log;
export const puts = Console.log;
export const debug = Console.debug;
export const table = Console.table;
export const cout = Console.cout;

export * as logger from './implementations/log';
export * as bl from './implementations/log';
export * as beautlog from './implementations/log';

export default Console;
