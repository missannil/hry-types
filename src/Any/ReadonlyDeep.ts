/**
 * 对象类型深度readonly,排除 `unknown` 、`Function`、`Date` 、`RegExp` 类型. 即针对数组和纯对象
 */
export type ReadonlyDeep<O> = unknown extends O ? O : O extends Function | Date | RegExp ? O
: {
  readonly [k in keyof O]: ReadonlyDeep<O[k]>;
};
