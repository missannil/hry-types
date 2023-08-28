export type ReadonlyDeep<O extends object> = O extends Function | RegExp | Date ? O
  : {
    readonly [k in keyof O]: ReadonlyDeep<O[k]>;
  };
