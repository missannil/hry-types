import type { IsUnion } from "../Any/IsUnion";

/**
 * 联合类型的验证器。
 * @param T - 待验证的类型
 * @param Valid - 验证通过时返回的类型
 * @param Error - 验证失败时返回的错误信息
 * @returns T 是联合类型时返回 Valid，否则返回 Error
 * @example
 * ```ts
 * type Test1 = EnsureUnion<"allExtends->", string>; // "类型不能是联合类型"
 * type Test2 = EnsureUnion<"allExtends->" | "equal", string>; // string
 * ```
 */
export type EnsureUnion<
  T,
  Constraint = unknown,
  Error extends string = "只能是联合类型",
> = IsUnion<T> extends true ? Constraint : Error;
