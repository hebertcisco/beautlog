import Console, { print, printf, log, debug, puts, cout } from '../index';

const PHRASE = 'Hello World';
const PHRASES = ['Hello World','Any'];
it(`puts returns ${PHRASE}`, () => {
  return puts(`${PHRASE}`)
});

it(`print returns ${PHRASE}`, () => {
  return print(`${PHRASE}`)
});

it(`printf returns ${PHRASE}`, () => {
  return printf(`${PHRASE}`)
});

it(`log returns ${PHRASE}`, () => {
  return log(`${PHRASE}`)
});

it(`debug returns ${PHRASE}`, () => {
  return debug(`${PHRASE}`)
});
it(`cout returns ${PHRASE}`, () => {
  return cout(`${PHRASE}`)
});
//  Console __tests__
it(`Console.ok returns ${PHRASE}`, () => {
  return Console.ok(`${PHRASE}`)
});

it(`Console.success returns ${PHRASE}`, () => {
  return Console.success(`${PHRASE}`)
});

it(`Console.trace returns ${PHRASE}`, () => {
  return Console.trace(`${PHRASE}`)
});

it(`Console.warn returns ${PHRASE}`, () => {
  return Console.warn(`${PHRASE}`)
});

it(`Console.warning returns ${PHRASE}`, () => {
  return Console.warning(`${PHRASE}`)
});

it(`Console.error returns ${PHRASE}`, () => {
  return Console.error(`${PHRASE}`)
});

it(`Console.info returns ${PHRASE}`, () => {
  return Console.info(`${PHRASE}`)
});

it(`Console.log returns ${PHRASE}`, () => {
  return Console.log(`${PHRASE}`)
});

it(`Console.table returns ${PHRASES}`, () => {
  return Console.table(PHRASES)
});
