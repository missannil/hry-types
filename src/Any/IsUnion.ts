import type { IsAnyOrNever } from "./IsAnyOrNever";
import type { IsEqual } from "./IsEqual";

type _IsUnion<A, O = A> = A extends O ? IsEqual<A, O> extends true ? false
  : true
  : never;

/**
 * 判断 `A` 是否为联合类型。
 *
 * @remarks
 * `boolean` 被视为 `true | false`，因此属于联合类型。
 *
 * 内部通过条件类型的分发机制，将 `A` 的成员分别与原始类型 `O` 进行比较：
 * 如果某个成员与 `O` 不相等，则说明 `A` 是联合类型。
 *
 * `any` 和 `never` 不参与联合类型判断，直接返回 `false`。
 *
 * @param A - 任意类型。
 * @returns `A` 为联合类型时返回 `true`，否则返回 `false`。
 *
 * @example
 * ```ts
 * type Test1 = IsUnion<1 | 2>; // true
 * type Test2 = IsUnion<boolean>; // true
 * type Test3 = IsUnion<1>; // false
 * type Test4 = IsUnion<string | number>; // true
 * type Test5 = IsUnion<never>; // false
 * type Test6 = IsUnion<any>; // false
 * ```
 */
export type IsUnion<A> = IsAnyOrNever<A> extends true ? false : _IsUnion<A>;
