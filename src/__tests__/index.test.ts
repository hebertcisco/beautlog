import Console from '../index';
import { puts } from '../index';
import { print } from '../index';
import { printf } from '../index';
import { debug } from '../index';
import { cout } from '../index';
import { log } from '../index';

const PHRASE = 'Hello World';
const PHRASES = ['Hello World', 'Any'];

describe('should print', () => {
  it(`puts returns ${PHRASE}`, () => {
    expect(puts(`${PHRASE}`)).toBe(void 0);
  });

  it(`print returns ${PHRASE}`, () => {
    expect(print(`${PHRASE}`)).toBe(void 0);
  });

  it(`should printf returns ${PHRASE}`, () => {
    expect(printf(`${PHRASE}`)).toBe(void 0);
  });

  it(`should log returns ${PHRASE}`, () => {
    expect(log(`${PHRASE}`)).toBe(void 0);
  });

  it(`debug returns ${PHRASE}`, () => {
    expect(debug(`${PHRASE}`)).toBe(void 0);
  });
  it(`cout returns ${PHRASE}`, () => {
    expect(cout(`${PHRASE}`)).toBe(void 0);
  });
});
describe('should Console logs', () => {
  it(`Console.ok returns ${PHRASE}`, () => {
    expect(Console.ok(`${PHRASE}`)).toBe(void 0);
  });

  it(`Console.success returns ${PHRASE}`, () => {
    expect(Console.success(`${PHRASE}`)).toBe(void 0);
  });

  it(`Console.trace returns ${PHRASE}`, () => {
    expect(Console.trace(`${PHRASE}`)).toBe(void 0);
  });

  it(`Console.warn returns ${PHRASE}`, () => {
    expect(puts(`${PHRASE}`)).toBe(void 0);
  });

  it(`Console.warning returns ${PHRASE}`, () => {
    expect(Console.warn(`${PHRASE}`)).toBe(void 0);
  });

  it(`Console.error returns ${PHRASE}`, () => {
    expect(Console.error(`${PHRASE}`)).toBe(void 0);
  });

  it(`Console.info returns ${PHRASE}`, () => {
    expect(Console.info(`${PHRASE}`)).toBe(void 0);
  });

  it(`Console.log returns ${PHRASE}`, () => {
    expect(Console.log(`${PHRASE}`)).toBe(void 0);
  });

  it(`Console.table returns ${PHRASES}`, () => {
    expect(Console.table(`${PHRASE}`)).toBe(void 0);
  });
});
