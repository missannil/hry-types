/**
 * 确保 `T` 为非空字符串类型。
 *
 * @remarks
 * 仅当 `T` 为字符串类型且不包含空字符串时返回 `Constraint`，
 * 否则返回 `Error`。
 *
 * @param T - 待检查的类型。
 * @param Constraint - 检查通过后返回的类型。
 * @param Error - 检查失败后返回的错误类型。
 *
 * @example
 *
 * ```ts
 * type Test1 = EnsureNonEmptyStr<"hello">;
 * // => string
 *
 * type Test2 = EnsureNonEmptyStr<"">;
 * // => "字符串不能为空"
 *
 * type Test3 = EnsureNonEmptyStr<string>;
 * // => string
 *
 * type Test4 = EnsureNonEmptyStr<number>;
 * // => "字符串不能为空"
 * ```
 */
export type EnsureNonEmptyStr<
  T,
  Constraint = string,
  Error extends string = "字符串不能为空",
> = "" extends T ? Error : Constraint;
