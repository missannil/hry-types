export type Shift<
  L extends readonly unknown[],
> = L extends readonly [unknown, ...infer Rest] ? Rest : [];
