import type { IsPureObject } from "../Any/IsPureObject";

/**
 * @description 合并交叉对象类型
 * ```ts
 * import { TypeChecking, type O,type Test} from 'hry-types'
 * type A = O.MergeIntersection<{ name: string } & { age: number }>;
 * type Expect = { name: string; age: number };
 * TypeChecking<A, Expect, Test.Pass>;
 *
 * ```
 * @return object
 */
export type MergeIntersection<T> = IsPureObject<T> extends true ? { [K in keyof T]: MergeIntersection<T[K]> }
  : T;
