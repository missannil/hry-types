import { type Test, TypeChecking } from "../../src";
import type { ComputeIntersection } from "../../src/Object/ComputeIntersection";

// test data
type O1 = { a: string };

type O2 = { b: number };

type O3 = { a: number };

type Fn1 = () => void;

type A = string[];

// test0 对象交叉 不同字段类型保留

type Test0Result = ComputeIntersection<O1 & O2>;

type test0Expect = { a: string; b: number };

TypeChecking<Test0Result, test0Expect, Test.Pass>;

// test1 对象交叉 同字段类型相交

type Test1Result = ComputeIntersection<O1 & O3>;

type test1Expect = { a: never };

TypeChecking<Test1Result, test1Expect, Test.Pass>;

// test2 交叉对象返回原始类型

type Test2Result = ComputeIntersection<O1 | O2 | O3>;

type test2Expect = O1 | O2 | O3;

TypeChecking<Test2Result, test2Expect, Test.Pass>;

// test2 交叉对象返回原始类型

type Test3Result = ComputeIntersection<O1 | O3 | O3>;

type test3Expect = O1 | O3 | O3;

TypeChecking<Test3Result, test3Expect, Test.Pass>;

// test4 函数对象返回原始类型

type Test4Result = ComputeIntersection<Fn1>;

type test4Expect = Fn1;

TypeChecking<Test4Result, test4Expect, Test.Pass>;

// test5 数组对象返回原始类型

type Test5Result = ComputeIntersection<A>;

type test5Expect = A;

TypeChecking<Test5Result, test5Expect, Test.Pass>;
