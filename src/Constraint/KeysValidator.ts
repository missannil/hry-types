/**
 * 验证函数参数对象 `G` 的 Key 是否符合指定的约束。
 *
 * @remarks
 * 该类型主要用于函数参数的泛型约束，通过与泛型对象 `G` 进行交叉，
 * 使不符合约束的 Key 在函数调用处产生类型错误。
 *
 * `Mode` 决定 `Keys` 的验证方式：
 *
 * - `"allow"`：`Keys` 表示允许使用的 Key，`G` 中不属于 `Keys` 的 Key 将产生错误。
 * - `"deny"`：`Keys` 表示禁止使用的 Key，`G` 中属于 `Keys` 的 Key 将产生错误。
 *
 * 对于不符合约束的 Key，会在对应属性的位置生成错误类型，
 * 从而使错误能够直接定位到对象中的具体 Key。
 *
 * `Mode` 默认为 `"allow"`。
 *
 * @param G - 函数参数推断出的对象类型。
 * @param Keys - 用于验证的 Key 集合，可以是具体 Key 的联合类型，
 * 或使用模板字面量类型表示一组 Key。
 * @param Mode - Key 验证模式，`"allow"` 表示允许集合，
 * `"deny"` 表示禁止集合。
 * @param Message - 类型错误时显示的错误信息，默认为 `"字段错误"`。
 *
 * @returns 用于函数参数约束的类型。
 *
 * @example
 * ```ts
 * // allow：只允许 aaa 和 bbb 作为 Key
 * function test1<T extends object>(
 *   options: T & KeysValidator<T, "aaa" | "bbb">
 * ): void {}
 *
 * test1({
 *   aaa: 123,
 *   bbb: "hello",
 * });
 *
 * test1({
 *   aaa: 123,
 *   // @ts-expect-error 字段错误
 *   xxx: true,
 * });
 *
 * // deny：禁止 type 和 value 作为 Key
 * function test2<T extends object>(
 *   options: T & KeysValidator<T, "type" | "value", "deny">
 * ): void {}
 *
 * test2({
 *   name: "foo",
 * });
 *
 * test2({
 *   // @ts-expect-error 字段错误
 *   type: "text",
 *   name: "foo",
 * });
 *
 * // allow：使用模板字面量类型约束 Key
 * function test3<T extends object>(
 *   options: T & KeysValidator<
 *     T,
 *     `aaa_${string}` | `_aaa_${string}`
 *   >
 * ): void {}
 *
 * test3({
 *   aaa_num: 123,
 *   _aaa_str: "hello",
 * });
 *
 * test3({
 *   // @ts-expect-error 字段错误
 *   xxx: 123,
 * });
 * ```
 */
export type KeysValidator<
  G extends object,
  Keys extends PropertyKey,
  Mode extends "allow" | "deny" = "allow",
  ErrMsg extends string = "字段错误",
> = {
  [
    K in keyof G as Mode extends "allow" ? K extends Keys ? never
      : K
      : K extends Keys ? K
      : never
  ]: G[K] extends Function ? `⚠️${ErrMsg}⚠️`
    : () => `⚠️${ErrMsg}⚠️`;
};
