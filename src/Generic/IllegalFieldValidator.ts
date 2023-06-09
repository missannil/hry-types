import type { IfExtends } from "../Any/IfExtends";
import type { IsNonArrNonFuncObject } from "../Any/IsNonArrNonFuncObject";
import type { AnyObject } from "../Misc/AnyObject";

type _IllegalFieldValidation<
  G extends object,
  legalKeys extends string,
  Result = {
    [k in keyof G as Exclude<k, legalKeys> extends never ? never : k]: G[k] extends Function ? `⚠️字段非法⚠️`
      : () => `⚠️字段非法⚠️`;
  },
> = IfExtends<{}, Result, unknown, Result>;

/**
 * @description 函数泛型输入对象(值)非法字段验证
 * @param1 泛型G   AnyObject
 * @param2 合法字段 string
 * @param3 层级 0 | 1 默认0
 * @param4 层级字段 string 默认'all'
 * @example
 * ```ts
 * // 验证 层级0 字段'all',合法:'a'|'b'
 *  type Layer0_all = { a: any; b: any; other: any }; // other报错非法
 * // 验证 层级0 字段'value',合法:'a'|'b'
 * type Layer0_value = {
 *   a: { // 忽略验证
 *     a: any;
 *     b: any;
 *     other: any;
 *   };
 *   b: string; // 忽略验证
 *   value: {
 *     a: any;
 *     b: any;
 *     other: any; // 报错非法
 *   };
 *   // value: { a: any; b: any; }; // 正常
 * };
 * // 验证 层级1 字段'all',合法:'a'|'b'
 * type Layer1_all = {
 *   a: {
 *     a: any;
 *     b: any;
 *     other: any; // 报错非法
 *   };
 *   b: {
 *     a: any;
 *     b: any;
 *     other: any; // 报错非法
 *   };
 *   c: string; // 忽略
 *   d: { a: any; b: any }; // 正常
 * };
 * // 验证 层级1 字段'value',合法:'a'|'b'
 * type Layer1_value = {
 *   a: string; // 忽略
 *   b: { a: any; b: any }; // 忽略
 *   c: {
 *     a: string; // 忽略
 *     value: {
 *       a: any; // 验证正常
 *       b: any; // 验证正常
 *     };
 *   };
 *   d: {
 *     a: string; // 忽略
 *     value: {
 *       a: any;
 *       b: any;
 *       other: any; // 报错非法
 *     };
 *   };
 * };
 * ```
 */
export type IllegalFieldValidator<
  G extends AnyObject,
  legalKeys extends string,
  Layer extends 0 | 1 = 0,
  Field extends string = "",
> = IfExtends<
  {},
  G,
  unknown, // G为空对象 省略检测
  IfExtends<
    Layer,
    0,
    IfExtends<
      Field,
      "",
      // leyer===0,Field===''
      _IllegalFieldValidation<G, legalKeys>,
      // leyer===0,Field !==''
      IfExtends<
        IsNonArrNonFuncObject<G[Field]>,
        true,
        { [s in Field]: _IllegalFieldValidation<G[Field], legalKeys> },
        unknown
      >
    >,
    // leyer==1,
    IfExtends<
      Field,
      "",
      // leyer==1,Field === ''
      {
        [k in keyof G]: IfExtends<
          IsNonArrNonFuncObject<G[k]>,
          true,
          _IllegalFieldValidation<G[k], legalKeys>,
          unknown
        >;
      },
      // leyer==1,Field !== ''
      {
        [k in keyof G]: IfExtends<
          IsNonArrNonFuncObject<G[k]>,
          true,
          Field extends keyof G[k] ? { [s in Field]: _IllegalFieldValidation<G[k][Field], legalKeys> }
            : unknown,
          unknown
        >;
      }
    >
  >
>;
