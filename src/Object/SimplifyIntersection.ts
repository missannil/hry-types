import type { EnsurePlainObject } from "../Constraint/EnsurePlainObject";

import type { IsAny } from "../index";

/**
 * 简化交叉对象类型或接口类型，使其重新映射为普通对象类型。
 *
 * @remarks
 * `SimplifyIntersection` 通过映射类型重新构造 `T`，使 TypeScript 将复杂的对象类型
 * 重新表示为普通对象类型。
 *
 * 该类型要求 `T` 为普通对象类型，不适用于数组、函数等非普通对象类型。
 *
 * 另外，`any` 会被单独处理，以避免经过映射类型后改变 `any` 的语义(变为`{ [key: string]: any }`)。never 会保持不变。
 *
 * @example
 *
 * ```ts
 * type A=  {
 *   a: string;
 * }
 * type B= {
 *   b: number;
 * }
 * type Simplifiable = SimplifyIntersection<A & B>;
 *
 * // {
 * //   a: string;
 * //   b: number;
 * // }
 * ```
 *
 * `SimplifyIntersection` 不仅可以简化交叉对象类型，还可以将接口类型重新映射为
 * 普通对象类型。
 *
 * 这一区别在某些泛型约束场景中很有用。例如，接口类型通常不会被
 * TypeScript 视为具有 `string` 索引签名，而经过 `Simplify` 后的映射类型
 * 可以满足 `Record<string, unknown>` 的约束：
 *
 * ```ts
 * interface Simplifiable {
 *   a: string;
 * }
 *
 * type Result = SimplifyIntersection<Simplifiable>;
 *
 * const value: Simplifiable = {
 *   a: "example",
 * };
 *
 * const simplified: Result = {
 *   a: "example",
 * };
 *
 * function test<T extends Record<string, unknown>>(value: T) {}
 * // @ts-expect-error 类型“Simplifiable”中缺少类型“string”的索引签名
 * test(value);
 * // OK
 * test(simplified);
 *
 * ```
 */
export type SimplifyIntersection<T extends EnsurePlainObject<T>> = _SimplifyIntersection<T>;

export type _SimplifyIntersection<T> = IsAny<T> extends true ? any
  : T extends unknown ? { [K in keyof T]: T[K] } & {}
  : never;
