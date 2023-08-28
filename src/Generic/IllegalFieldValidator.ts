import type { As } from "../Any/As";
import type { IfExtends } from "../Any/IfExtends";
import type { IsNonArrNonFuncObject } from "../Any/IsNonArrNonFuncObject";

type _IllegalFieldValidation<
  G extends object,
  legalKeys extends PropertyKey,
> = {
  [k in keyof G as Exclude<k, legalKeys> extends never ? never : k]: G[k] extends object ? `⚠️字段非法⚠️`
    : () => `⚠️字段非法⚠️`;
};

/**
 * 函数中泛型G的非法字段验证
 * @param G -  object
 * @param LegalFields - 合法字段 PropertyKey
 * @param Layer - 层级 0 | 1 默认0
 * @param Field - 层级字段 string 默认''
 * @example
 * ```ts
 * const fn0 = <O extends object>(
 *   obj: O & IllegalFieldValidator<O, "a" | "b">,
 * ): void => {
 *   obj;
 * };
 *
 * // 空对象不检测
 * fn0(
 *   {},
 * );
 *
 * // 默认验证层级0下的所有字段
 * fn0({
 *   a: 123,
 *   b: "123",
 *   // @ts-expect-error 非法字段 非法字段为非函数类型
 *   c: 123,
 *   // @ts-expect-error 非法字段 非法字段为函数类型
 *   d: () => 123,
 * });
 * ```
 */
export type IllegalFieldValidator<
  G extends object,
  LegalFields extends PropertyKey,
  Layer extends 0 | 1 = 0,
  Field extends string = "",
> = IfExtends<
  {},
  G,
  unknown, // G为空对象 省略检测
  IfExtends<
    Layer,
    0,
    // leyer为0时
    IfExtends<
      Field,
      "",
      // Field等于''时
      _IllegalFieldValidation<G, LegalFields>,
      // Field不等于''时
      IfExtends<
        // @ts-ignore
        IsNonArrNonFuncObject<G[Field]>,
        true,
        // @ts-ignore
        { [s in Field]: _IllegalFieldValidation<G[Field], LegalFields> },
        unknown
      >
    >,
    // leyer层级为1时,
    IfExtends<
      Field,
      "",
      // Field 等于 ''
      {
        [k in keyof G]: IfExtends<
          IsNonArrNonFuncObject<G[k]>,
          true,
          _IllegalFieldValidation<As<G[k], object>, LegalFields>,
          unknown
        >;
      },
      // Field 不等于 ''
      {
        [k in keyof G]: IfExtends<
          IsNonArrNonFuncObject<G[k]>,
          true,
          Field extends keyof G[k] ? {
              [s in Field]:
                // @ts-ignore
                _IllegalFieldValidation<G[k][Field], LegalFields>;
            }
            : unknown,
          unknown
        >;
      }
    >
  >
>;
