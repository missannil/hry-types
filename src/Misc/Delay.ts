/**
 * 延时类型
 */
export type Delay<T, N extends number = 0, L extends unknown[] = []> = L["length"] extends N ? T
  : Delay<T, N, [...L, T]>;
