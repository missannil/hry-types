// AddSubObjectKey 测试文件
import { Checking, type Test } from "../../src";
import type { AddSubObjectKey } from "../../src/Object/AddSubObjectKey";

type Obj1 = {
  a: { b: number };
  d: { e: { f: string } };
};

type Test1 = AddSubObjectKey<Obj1>;

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

Checking<Test1, Test1Expected, Test.Pass>;

type Obj2 = {
  a: string;
};

type Test2 = AddSubObjectKey<Obj2>;

type Test2Expected = Obj2;

Checking<Test2, Test2Expected, Test.Pass>;
