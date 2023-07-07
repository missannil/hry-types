/**
 * @description is object but not array and function
 * @link [test](./IsNonArrNonFuncObject.test.ts)
 * @returns true or false
 */
export type IsNonArrNonFuncObject<T> = T extends Function ? false
  : T extends unknown[] ? false
  : T extends object ? true
  : false;
