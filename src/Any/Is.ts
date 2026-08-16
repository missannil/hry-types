import type { _Match } from "../_internal/_Match";
import type { EnsureNonUnion } from "../Constraint/EnsureNonUnion";
import type { As } from "./As";
import type { Contains } from "./Contains";
import type { Equals } from "./Equals";
import type { Extends } from "./Extends";
/**
 * 判断两个类型关系(继承,包含,相等),返回唯一结果 true 或 false。
 * @remarks 当使用 extends 判断两个类型关系时，使用裸泛型(非[T])时,T可能因为是联合类型会发生分发。结果可能是 真值分支、假值分支、两个分支的联合，或泛型参数为 never 时得到 never。
 *
 * ```ts
 * type IsString<T> = T extends string ? true : false;
 *
 * type Test1 = IsString<string>; // true，命中 真值分支
 * type Test2 = IsString<number>; // false，命中 假值分支
 * type Test3 = IsString<string | number>; // true | false，联合类型发生分发
 * type Test4 = IsString<never>; // never，never 没有可供分发的成员
 * ```
 *
 * 这类结果在使用时可能会造成一定的麻烦，Is 类型通过第三个泛型参数（匹配规则）将判断结果归一化为 true 或 false。
 匹配规则:
  1. extends-\>: 默认值,A1是否为A2的子类型,不会考虑联合类型的分发判断。
  2. contains-\>: A1是否含有A2的子类型,针对联合类型的判断。
  3. equals: A1是否等于A2,使用Equals类型判断。
  4. \<-extends: A2是否为A1的子类型,不会考虑联合类型的分发判断。即extends-\>的反向判断。
  5. \<-contains: A2是否含有A1的子类型,针对联合类型的判断。即contains-\>的反向判断。

 *
 * @param A1 - 任意类型
 * @param A2 - 任意类型
 * @param M - 判断规则(可选,默认为"extends-\>")
 * @returns true or false
 * @example
 * ```ts
 * type Test1 = Is<1, number>;// true
 * type Test2 = Is<1, number,'<-extends'>;// false
 * type Test3 = Is< {} | [], unknown[],'contains->'>;// true
 * ```
 */
export type Is<
  A1,
  A2,
  M extends EnsureNonUnion<M, _Match> = "extends->",
> = {
  "contains->": Contains<A1, A2>;
  "extends->": Extends<A1, A2>;
  "<-contains": Contains<A2, A1>;
  "<-extends": Extends<A2, A1>;
  "equal": Equals<A1, A2>;
}[As<M, _Match>];

/**
 * 纯对象类型：排除函数、数组、Map、Set、Date、RegExp 等
 */
export type PlainObject<T = unknown> =
  & {
    [K in keyof T]: T[K];
  }
  & {
    constructor?: never; // 排除 class 实例
  }
  & (
    // 关键：利用条件类型排除非纯对象
    T extends Function | any[] | Map<any, any> | Set<any> | Date | RegExp ? never
      : object
  );

// export type JsonObject = { [Key in string]: JsonValue };

// /**
// Matches a JSON array.

// @category JSON
// */
// export type JsonArray = JsonValue[] | readonly JsonValue[];

// /**
// Matches any valid JSON primitive value.

// @category JSON
// */
// export type JsonPrimitive = string | number | boolean | null;

// /**
// Matches any valid JSON value.

// @see `Jsonify` if you need to transform a type to one that is assignable to `JsonValue`.

// @category JSON
// */
// export type JsonValue = JsonPrimitive | JsonObject | JsonArray;

// export { };

// type aaa<T extends JsonObject> = T;
