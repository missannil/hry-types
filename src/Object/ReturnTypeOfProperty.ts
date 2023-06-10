import type { AnyObject } from "..";

/**
 * 把对象字段值为函数类型的，变为函数返回类型
 * ```ts
 * checks([
 *     check<O.ReturnFuncType<{ddd:()=>number}>, {ddd:number}, Test.Pass>(),
 *     check<O.ReturnFuncType<{aaa:()=>string,bbb:number,c:'zhao'}>, {aaa:string,bbb:number,c:'zhao'}, Test.Pass>(),
 * ])
 * ```
 * @returns object
 */
export type ReturnTypeOfProperty<O extends AnyObject> = {
  [k in keyof O]: O[k] extends Function ? ReturnType<O[k]> : O[k];
};
