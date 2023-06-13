/**
 * extends的泛型写法(易读)。
 *
 * A1为never时返回false。
 *
 * ⚠️返回结果为true 或 false  或 boolean(A1为联合类型时可能出现)⚠️
 */
export type Extends<A1, A2> = [A1] extends [never] ? false : A1 extends A2 ? true : false;
