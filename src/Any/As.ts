/**
 * 断言A1为A2的子类型,常用于类型缩窄。
 * @remarks 此类型不安全,谨慎使用。
 * @example
 * ```ts
 * 	type StrOrNum = string | number;
 * 	type Num<T extends number> = T;
 * 	type If<T extends StrOrNum> = T extends string ? string : Num<T>; //这里T会被推断为string | number,会报错
 * 	type ApplyAs<T extends StrOrNum> = T extends string ? string : Num<As<T, number>>; // 断言A为 number类型
 * ```
 * @param A1 - 任意类型
 * @param A2 - 任意类型
 * @returns A1
 */
export type As<A1, A2> = A1 extends A2 ? A1 : never;
