import type { EnsureNonUnionPlainObject } from "../Constraint/EnsureNonUnionPlainObject";

import type { _SimplifyIntersection, IsPlainObject } from "./_index";

/**
 * 创建对象中直接子对象的嵌套 Key。
 *
 * @example
 *
 * ```ts
 * type Obj = {
 *   a: {
 *     b: number;
 *   };
 *   d: {
 *     e: {
 *       f: string;
 *     };
 *   };
 *
 * type Keys = _CreateNestedKeys<Obj>;
 * // "a.b" | "d.e"
 * ```
 */
type _CreateNestedKeys<O> = {
  [
    K in keyof O as IsPlainObject<O[K]> extends true ? `${K & string}.${keyof O[K] & string}`
      : never
  ]: unknown;
};

/**
 * 根据嵌套 Key 获取对应的属性类型。
 *
 * 例如 `"a.b"` 会解析为 `O["a"]["b"]`。
 */
type _ResolveNestedValues<Keys, O> = {
  [K in Keys & string]: K extends `${infer L}.${infer R}` ? L extends keyof O ? R extends keyof O[L] ? O[L][R]
      : never
    : never
    : never;
};

/**
 * 将嵌套 Key 及其对应的属性类型添加到对象中。
 */
type __AddNestedKeys<
  O,
  NestedKeys,
> = _SimplifyIntersection<
  & O
  & NestedKeys
  & _ResolveNestedValues<keyof NestedKeys, O>
>;

/**
 * 为对象中直接子对象的属性添加点号形式的嵌套 Key。
 *
 * @remarks
 * 对于 `O` 中值为普通对象的属性，将其直接子属性转换为
 * `"父属性.子属性"` 形式的 Key，并将对应的属性类型添加到原对象中。
 *
 * 该类型仅处理一层嵌套，不会递归处理更深层的子对象。
 *
 * 数组、函数等非普通对象类型不会被处理。
 *
 * @example
 *
 * ```ts
 * type Obj = {
 *   a: {
 *     b: number;
 *   };
 *   d: {
 *     e: {
 *       f: string;
 *     };
 *   };
 *
 * type Result = AddNestedKeys<Obj>;
 *
 * // {
 * //   a: {
 * //     b: number;
 * //   };
 * //   d: {
 * //     e: {
 * //       f: string;
 * //     };
 * //   };
 * //   "a.b": number;
 * //   "d.e": {
 * //     f: string;
 * //   };
 * // }
 * ```
 *
 * @returns 添加嵌套 Key 后的对象类型。
 */
export type AddNestedKeys<
  O extends EnsureNonUnionPlainObject<O>,
> = _AddNestedKeys<O>;

export type _AddNestedKeys<O> = __AddNestedKeys<O, _CreateNestedKeys<O>>;
