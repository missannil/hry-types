/**
 * 如果 A1 可以赋值给 A2，则返回 A1，否则返回 never
 *
 * @remarks
 * TypeScript 在条件类型的 false 分支中不会继续对类型进行收缩。
 * 当需要在 false 分支中继续根据类型关系进行收缩时，通常需要再次使用
 * `extends` 进行判断。`As` 将这种重复的类型收缩过程提取为一个工具类型，
 * 用于在类型计算中显式地将 A1 收缩为满足 A2 的类型。
 *
 * @example
 *
 * ```ts
 * type StrOrNum = string | number;
 *
 * type Num<T extends number> = T;
 *
 * // false 分支中的 T 不会自动收缩为 number，因此这里会报错。
 * type Foo<T extends StrOrNum> =
 * 	T extends string
 * 		? string
 * 		: Num<T>;
 *
 * // 再次使用 extends 对 T 进行收缩。
 * type Normal<T extends StrOrNum> =
 * 	T extends string
 * 		? string
 * 		: T extends number
 * 			? Num<T>
 * 			: never;
 *
 * // 将重复的类型收缩过程提取为 As。
 * type ApplyAs<T extends StrOrNum> =
 * 	T extends string
 * 		? string
 * 		: Num<As<T, number>>;
 * ```
 *
 * @param A1 - 待收缩的任意类型。
 * @param A2 - 用于收缩 A1 的目标类型。
 * @returns 收缩后满足 A2 的 A1，或 never。
 */
export type As<A1, A2> = A1 extends A2 ? A1 : never;
