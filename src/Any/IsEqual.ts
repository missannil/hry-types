/**
 * 判断 A 与 B 的类型表达式是否相等。
 *
 * @remarks
 * `IsEqual` 判断的是类型表达式本身是否相等，而不是两个类型经过计算后
 * 是否具有相同的类型效果。
 *
 * 例如：
 *
 * ```ts
 * type Test1 = IsEqual<string & number, never>; // false
 * type Test2 = IsEqual<{a: string} & {b: number}, {a: string; b: number}>; // false
 * ```
 *
 * 本类型的实现参考了 type-fest 的 `IsEqual`。
 *
 * @see {@link https://github.com/sindresorhus/type-fest/blob/main/source/is-equal.d.ts}
 *
 * @param A - 任意类型。
 * @param B - 任意类型。
 * @returns true 或 false。
 */
export type IsEqual<A, B> = [A] extends [B] ? [B] extends [A] ? _IsEqual<A, B>
  : false
  : false;

type _IsEqual<A, B> = (<G>() => G extends A & G | G ? 1 : 2) extends (<G>() => G extends B & G | G ? 1 : 2) ? true
  : false;
