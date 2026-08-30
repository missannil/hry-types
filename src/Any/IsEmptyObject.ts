import type { EmptyObject } from "../Basic/EmptyObject";
import type { IsAnyOrNever } from "./IsAnyOrNever";

/**
 * 判断是否为空对象类型。
 *
 * @remarks
 * 空对象类型表示没有任何属性声明的对象类型。
 *
 * @param A - 任意类型。
 * @returns `A` 为空对象类型时返回 `true`，否则返回 `false`。
 *
 * @example
 * ```ts
 * type Test1 = IsEmptyObject<{}>; // true
 * type Test2 = IsEmptyObject<{ a?: never }>; // false
 * type Test3 = IsEmptyObject<{} | { a: number }>; // false
 * type Test4 = IsEmptyObject<{} & { a: number }>; // false
 * ```
 */
export type IsEmptyObject<A> = IsAnyOrNever<A> extends true ? false : [A] extends [EmptyObject] ? true : false;
