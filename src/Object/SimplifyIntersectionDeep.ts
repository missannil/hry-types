import type { EnsurePlainObject } from "../Constraint/EnsurePlainObject";

import type { IsAny } from "../index";

/**
 * 深度简化普通对象类型，使其递归重新映射为普通对象类型。
 *
 * @remarks
 * `SimplifyDeep` 会递归处理对象的每一层属性，并将每一层普通对象
 * 重新映射为普通对象类型。
 *
 * 与 `Simplify` 不同，`SimplifyDeep` 会继续处理嵌套的普通对象类型。
 *
 * 该类型要求 `T` 为普通对象类型，因此数组、函数、`Date`、`Map`、
 * `Set` 等非普通对象类型不会作为递归目标。
 *
 * `any` 会被单独处理，以保持 `any` 的语义。
 * `never` 不需要额外处理，由 distributive conditional type 自然保持为 `never`。
 *
 * @example
 *
 * ```ts
 * type A = {
 *   a: {
 *     b: string;
 *   };
 * };
 *
 * type B = {
 *   c: {
 *     d: number;
 *   };
 * };
 *
 * type Simplifiable = SimplifyDeep<A & B>;
 *
 * // {
 * //   a: {
 * //     b: string;
 * //   };
 * //   c: {
 * //     d: number;
 * //   };
 * // }
 * ```
 *
 * @see {@link Simplify}
 */
export type SimplifyIntersectionDeep<T extends EnsurePlainObject<T>> = _SimplifyIntersectionDeep<T>;

export type _SimplifyIntersectionDeep<T> = IsAny<T> extends true ? any
  : T extends unknown ?
      & {
        [K in keyof T]: T[K] extends EnsurePlainObject<T[K]> ? _SimplifyIntersectionDeep<T[K]>
          : T[K];
      }
      & {}
  : never;
