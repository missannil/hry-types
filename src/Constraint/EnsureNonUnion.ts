import type { IsUnion } from "../Any/IsUnion";

/**
 * 非联合类型的验证器。
 * @param T - 待验证的类型
 * @param Valid - 验证通过时返回的类型
 * @param Error - 验证失败时返回的错误信息
 * @returns T 不是联合类型时返回 Valid，否则返回 Error
 * @example
 * ```ts
 * type Test1 = EnsureNonUnion<"extends->", string>; // string
 * type Test2 = EnsureNonUnion<"extends->" | "equal", string>; // "类型不能是联合类型"
 * ```
 */
export type EnsureNonUnion<
  T,
  Valid,
  Error extends string = "类型不能是联合类型",
> = IsUnion<T> extends true ? Error : Valid;
