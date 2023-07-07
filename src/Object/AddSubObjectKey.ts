import type { ComputeIntersection, IsNonArrNonFuncObject } from "./_api";

type _GetKeys<O> = {
  [k in keyof O as IsNonArrNonFuncObject<O[k]> extends true ? `${k & string}.${keyof O[k] & string}` : never]: unknown;
};

type _OverWrite<Keys extends PropertyKey, O> = {
  [k in Keys]: k extends `${infer L}.${infer R}` ? L extends keyof O ? R extends keyof O[L] ? O[L][R]
      : never
    : never
    : never;
};

type _AddSubObjectKey<O, _keys = _GetKeys<O>> = ComputeIntersection<
  & O
  & _keys
  & _OverWrite<keyof _keys, O>
>;

/**
 * @description 将子对象的属性加入到父对象
 * @example
 * ```ts
 * import type { O,Test } from 'ts-toolbelt'
 * import type { O } from 'hry-types'
 *
 * type TestObj1 = { a: { b: number };d: { e: { f: string } };};
 * // TestObj1 => { a: { b: number }; d: { e: { f: string } }; "a.b": number; "d.e": { f: string } }
 * @returns object
 */
export type AddSubObjectKey<O> = _AddSubObjectKey<O>;
