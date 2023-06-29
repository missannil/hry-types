import type { Match } from "../Misc/Match";
import type { SelectKeys } from "./SelectKeys";

/**
 * @description if object key match M, then select it
 * @example
 * ```ts
 * import { TypeChecking, type O,type Test} from 'hry-types'
 *
 * TypeChecking<O.Select<{ fun: () => number; num: number }, AnyFunction>, { fun: * () => number }, Test.Pass>;
 * ```
 * @return object
 */
export type Select<O extends object, M, match extends Match = "extends->"> = Pick<O, SelectKeys<O, M, match>>;
