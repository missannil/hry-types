import type { Match } from "../Any/Match";
import { ExpectType } from "../Validation/ExpectType";
import type { FilterKeys } from "./FilterKeys";
export type Filter<O extends object, M, match extends Match = "default"> = Pick<O, FilterKeys<O, M, match>>;
// test

ExpectType<Filter<{ a: number; b: string }, number>, { b: string }, true>();
