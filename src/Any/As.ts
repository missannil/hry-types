/**
 * @description 断言A1为A2的子类型,用于类型缩窄.此类型不安全,谨慎使用。
 * @template
 * ```ts
 * 	type StrOrNum<T = unknown> = T extends string ? string : T extends number ? number : never;
 * 	type InputNumber<T extends number> = T;
 * 	type Ifxxx<T extends StrOrNum> = T extends string ? string : InputNumber<T>; //这里T会被推断为string | number,会报错
 * 	type ApplyAs<T extends StrOrNum> = T extends string ? string : InputNumber<As<T, number>>; // 断言A为 number类型
 * ```
 * @param A1 要指定的类型
 * @param A2 指定的类型
 * @returns A1
 */
export type As<A1, A2> = A1 extends A2 ? A1 : never;
