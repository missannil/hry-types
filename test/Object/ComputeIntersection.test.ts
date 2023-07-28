import { Checking, type Test } from "../../src";
import type { ComputeIntersection } from "../../src/Object/ComputeIntersection";

type O1 = { a: string };

type O2 = { b: number };

type O3 = { a: number };

// 不同字段合并为一个对象
type Test1 = ComputeIntersection<O1 & O2>;

type TestExpect1 = { a: string; b: number };

Checking<Test1, TestExpect1, Test.Pass>;

// 相同字段类型交叉
type Test2 = ComputeIntersection<O1 & O3>;

type TestExpect2 = { a: string & number };

Checking<Test2, TestExpect2, Test.Pass>;

// 多类型交叉 遵循test1和test2
type Test3 = ComputeIntersection<O1 & O2 & O3>;

type TestExpect3 = { a: string & number; b: number };

Checking<Test3, TestExpect3, Test.Pass>;

// 实例对象类型中的交叉
type Test4 = {
  O123: ComputeIntersection<O1 & O2 & O3>;
};

type TestExpect4 = { O123: { a: never; b: number } };

Checking<Test4, TestExpect4, Test.Pass>;
