/**
 * 判断 A 是否为 `never` 类型。
 *
 * @remarks
 * 使用元组包裹 A，使条件类型不会对 `never` 进行分发。
 *
 * @param A - 任意类型。
 * @returns true 或 false。
 *
 * @example
 * ```ts
 * type Test1 = IsNever<never>; // true
 * type Test2 = IsNever<undefined>; // false
 * ```
 */
export type IsNever<A> = [A] extends [never] ? true : false;
