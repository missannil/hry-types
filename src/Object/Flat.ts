import type { IsNonArrNonFuncObject } from "./_api";

type _AddField<O extends object> = {
  [k in keyof O as IsNonArrNonFuncObject<O[k]> extends true ? `${k & string}.${keyof O[k] & string}` : never]: unknown;
};

type _OverWrite<Keys extends string, O> = {
  [k in Keys]: k extends `${infer L}.${infer R}` ? L extends keyof O ? R extends keyof O[L] ? O[L][R]
      : never
    : never
    : never;
};

export type Flat<O extends object, _Add = _AddField<O>> = IsNonArrNonFuncObject<O> extends true ?
    & O
    & _Add
    & _OverWrite<keyof _Add & string, O>
  : O;
