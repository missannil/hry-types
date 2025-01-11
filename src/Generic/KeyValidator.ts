/**
 * 验证泛型对象的key是否正确
 * @param G - 泛型 object
 * @param validityKeys - 合法的key string
 * @param ErrMsg - 错误提示
 * @returns  object
 * @example
 * ```ts
 * function test<T extends object>(O: T & KeysValidator<T, `aaa_${string}` | `_aaa_${string}`,'前缀错误'>): T {
 *   return O;
 * }
 * test({
 *   aaa_num: 123,// ok
 *   _aaa_str: "str",// ok
 *   //@ts-expect-error 前缀错误
 *   xxx:123,
 *   //@ts-expect-error 前缀错误
 *   _yyy:123
 * });
 * ```
 */
export type KeyValidator<
  G extends object,
  validityKeys extends string,
  ErrMsg extends string = "字段错误",
> = {
  [
    k in keyof G as k extends validityKeys ? never : k
  ]: G[k] extends object ? `⚠️${ErrMsg}⚠️` : () => `⚠️${ErrMsg}⚠️`;
};
