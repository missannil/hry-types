import type { Compute, IsNonArrNonFuncObject } from "./_api";

/**
 * 建立子对象的key
 */
type _CreateSubKeys<O> = {
  [k in keyof O as IsNonArrNonFuncObject<O[k]> extends true ? `${k & string}.${keyof O[k] & string}` : never]: unknown;
};

/**
 * 为子对象赋类型
 */
type _OverWrite<Keys, O> = {
  [k in Keys & string]: k extends `${infer L}.${infer R}` ? L extends keyof O ? R extends keyof O[L] ? O[L][R]
      : never
    : never
    : never;
};

type _AddSubObjectKey<O, _keys> = Compute<
  & O
  & _keys
  & _OverWrite<keyof _keys, O>
>;

/**
 * 对象中加入子对象的字段
 * @example
 * ```ts
 * type Obj = { a: { b: number }; d: { e: { f: string } } };
 * type TestObj = Compute<AddSubObjectKey<Obj>>;
 * // TestObj => { a: { b: number }; d: { e: { f: string } }; "a.b": number; "d.e": { f: string } }
 * ```
 * @returns object
 */
export type AddSubObjectKey<O> = _AddSubObjectKey<O, _CreateSubKeys<O>>;
