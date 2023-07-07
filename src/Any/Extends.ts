/**
 * @description extends的泛型写法(易读) 搭配Is使用。A1为never时返回false。
 * @returns boolean
 */
export type Extends<A1, A2> = [A1] extends [never] ? false : A1 extends A2 ? true : false;
