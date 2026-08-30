import type { IsAny } from "./IsAny";
import type { IsNever } from "./IsNever";

export type IsAnyOrNever<T> = true extends IsAny<T> | IsNever<T> ? true : false;
