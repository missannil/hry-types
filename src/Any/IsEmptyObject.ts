import type { EmptyObject } from "../Misc/EmptyObject";

/**
 * 判断是否为空对象
 * @param A - 任意类型
 * @example
 * ```ts
 * type Test1 = IsEmptyObject<{}> // true
 * type Test2 = IsEmptyObject<{ a?: never }> // false
 * type Test3 = IsEmptyObject<EmptyObject> // true
 * ```
 * @see EmptyObject
 */
export type IsEmptyObject<A> = A extends EmptyObject ? true : false;
