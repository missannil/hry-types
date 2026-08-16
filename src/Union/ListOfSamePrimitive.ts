import type { RemoveNever } from "../Tuple/RemoveNever";

/**
 * 提取联合类型中相同原始类型为数组的一项
 * @example
 * ```ts
 * type test = ListOfSamePrimitive< 1 | 2 | "a" | "b" | { name: string } | { age: number } | string[] | number[]>
 * //=> ["a" | "b", 1 | 2, string[] | number[], {name: string;} | {age: number;}]
 * ```
 */
export type ListOfSamePrimitive<U> = RemoveNever<
  [
    Extract<U, string>,
    Extract<U, number>,
    Extract<U, boolean>,
    Extract<U, unknown[]>,
    U extends unknown[] ? never : Extract<U, object>,
  ]
>;
