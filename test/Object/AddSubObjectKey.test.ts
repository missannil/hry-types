// AddSubObjectKey 测试文件
import { Checking, type Test } from "../../src";
import type { AddSubObjectKey } from "../../src/Object/AddSubObjectKey";

// 测试用例1
type Obj1 = {
  a: { b: number };
  d: { e: { f: string } };
};

// 测试结果
type Test1 = AddSubObjectKey<Obj1>;

// 预期
type Test1Expected = {
  a: {
    b: number;
  };
  d: {
    e: {
      f: string;
    };
  };
  "a.b": number;
  "d.e": {
    f: string;
  };
};

// 验证测试结果是否符合预期
Checking<Test1, Test1Expected, Test.Pass>;

// 测试用例2
type Obj2 = {
  a: string;
};

// 测试结果
type Test2 = AddSubObjectKey<Obj2>;

// 测试预期
type Test2Expected = Obj2;

// 验证测试结果是否符合预期
Checking<Test2, Test2Expected, Test.Pass>;
