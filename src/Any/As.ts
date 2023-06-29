/**
 * @description assert A1 is extends A2 此类型不安全,谨慎使用。
 *
 * @template
 * ```ts
 * 	type StrOrNum<T = unknown> = T extends string ? string : T extends number ? number : never;
 *
 * 	type InputNumber<T extends number> = T;
 *
 * 	type Ifxxx<T extends StrOrNum> = T extends string ? string : InputNumber<T>; //这里T会被推断为string | number,会报错
 *
 * 	type ApplyAs<T extends StrOrNum> = T extends string ? string : InputNumber<As<T, number>>; // 强行指定 A 为 number类型
 * ```
 * @param A1 要指定的类型
 * @param A2 指定的类型
 * @returns A1 但类型缩窄为 A2 类型
 */
export type As<A1, A2> = A1 extends A2 ? A1 : never;
