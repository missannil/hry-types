export type RemoveInnerData<S extends string> = S extends unknown ? S extends `_${string}` ? never : S
  : never;
