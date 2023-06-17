/**
 * 联合变交叉
 * @param U to transform
 * @returns `&`
 * @example
 * ```ts
 *
 *  type union = "a" | "b";
 *  type test = IntersectOf<union>; // => 'a' & 'b' => never
 *  type union1 = { a: string } | { b: number };
 *  type test1 = IntersectOf<union1>; // => {a:string} & {b:number}
 *
 * ```
 */
export type IntersectOf<U> = (U extends unknown ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;
