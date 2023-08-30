// export type ReadonlyDeep<O extends object> = O extends Function | RegExp | Date ? O
//   : {
//     readonly [k in keyof O]: ReadonlyDeep<O[k]>;

/** */
export type ReadonlyDeep<T> = {
  readonly [k in keyof T]: ReadonlyDeep<T[k]>;
};
