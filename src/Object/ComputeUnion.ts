import type { IfExtends } from "../Any/IfExtends";
import type { IsNever } from "../Any/IsNever";
import type { IsUnionObject } from "../Any/IsUnionObject";
import type { Last } from "../Union/Last";
import type { Union } from "./Union";

/**
 * @hidden
 */
type _ComputeUnion<T, Result extends object = {}, Tail = Last<T>> = IsNever<T> extends true ? Result
  // @ts-ignore  The Tail type must be an object
  : _ComputeUnion<Exclude<T, Tail>, IfExtends<{}, Result, Tail, Union<Result, Tail>>>;

/**
 * @description Compute the union of [[Object]]s
 * @link [test](./ComputeUnion.test.ts)
 * @returns The union or `T`
 */
export type ComputeUnion<T> = IsUnionObject<T> extends true ? _ComputeUnion<T> : T;
