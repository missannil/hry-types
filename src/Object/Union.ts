import type { IfEquals } from "../Any/IfEquals";
import type { IsNonArrNonFuncObject } from "../Any/IsNonArrNonFuncObject";
import type { Or } from "../List/Or";
import type { ComputeIntersection } from "./ComputeIntersection";

/**
 * @description Union two object types into one object type.
 */
export type Union<
  O1 extends object,
  O2 extends object,
  SameKey extends Extract<keyof O1, keyof O2> = Extract<keyof O1, keyof O2>,
> = IfEquals<
  {},
  Or<[O1, O2]>,
  {},
  IfEquals<
    false,
    Or<[IsNonArrNonFuncObject<O1>, IsNonArrNonFuncObject<O2>]>,
    never,
    ComputeIntersection<
      & { [k in SameKey]: O1[k] | O2[k] }
      & Partial<Omit<O1, SameKey>>
      & Partial<Omit<O2, SameKey>>
    >
  >
>;
