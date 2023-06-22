/**
 * 指定A1类型为A2类型
 * 此类型不安全,谨慎使用,原罪为ts无Or(或)类型,导致2个联合类型的子类型为3个类型,无法通过一次缩窄得到另一个类型。
 * @template
 * ```ts
 * 	type StrOrNum = string | number;
 *
 * 	type InputNumber<T extends number> = T;
 *
 * 	type Ifxxx<T extends StrOrNum> = T extends string ? string : InputNumber<T>; //这里T会被推断为string | number,会报错
 *
 * 	type ApplyAs<T extends StrOrNum> = T extends string ? string : InputNumber<As<T, number>>; // 强行指定 A 为 number类型
 * ```
 * @param A1 要指定的类型
 * @param A2 指定的类型
 * @returns A1
 */
export type As<A1, A2> = A1 extends A2 ? A1 : never;
