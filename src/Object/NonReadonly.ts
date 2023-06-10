import { ExpectType } from "..";

/**
 * 深度去除readonly
 */
export type NonReadonly<T extends object> = T extends unknown ? {
    -readonly [k in keyof T]: T[k] extends object ? NonReadonly<T[k]> : T[k];
  }
  : never;
// test
type A = NonReadonly<{ readonly a: number; readonly b: { readonly c: number } }>;
type Expect = {
  a: number;
  b: {
    c: number;
  };
};
ExpectType<A, Expect, true>();
