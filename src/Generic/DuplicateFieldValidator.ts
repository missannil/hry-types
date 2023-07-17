import type { IfExtends } from "../Any/IfExtends";

type _DuplicateFieldValidator<
  G extends object,
  Compared extends PropertyKey,
  Message extends string,
  DuplicateKeys extends keyof G = Extract<keyof G, Compared>,
> = IfExtends<
  {},
  G,
  unknown,
  IfExtends<
    DuplicateKeys,
    never,
    unknown,
    {
      [k in DuplicateKeys]: G[k] extends Function ? `⚠️${Message}⚠️`
        : () => `⚠️${Message}⚠️`;
    }
  >
>;

/**
 * 函数中泛型G的key与Compared是否有重复,如果有,则返回一个错误信息,否则返回unknown(无错误提示)
 * @param G - 要检查的泛型对象
 * @param Compared - 要比较的key PropertyKey
 * @param Message - 错误信息 string 默认为"重复字段"
 * @returns unknown or 错误信息对象
 * @example
 * ```ts
 * const fn = <O extends object>(
 *   obj: O & DuplicateFieldValidator<O, "type" | "value", "重复字段">,
 * ): void => {
 *   obj;
 * };
 *
 * fn({
 *   //@ts-expect-error 重复字段
 *   type: 123,
 *   //@ts-expect-error 重复字段
 *   value: 345,
 *   xxx: 123,
 * });
 * ```
 */
export type DuplicateFieldValidator<
  G extends object,
  Compared extends PropertyKey,
  Message extends string = "重复字段",
> = _DuplicateFieldValidator<G, Compared, Message>;
