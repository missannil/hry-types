/* AddNestedKeys 测试文件 */

import { type Test } from "../../src";

import { Checking } from "../../src/_internal/Checking";

import type { AddNestedKeys } from "../../src/Object/_index";

// ============================================================
// 基础嵌套对象
// ============================================================

type Obj1 = {
  a: {
    b: number;
  };

  d: {
    e: {
      f: string;
    };
  };
};

type Test1 = AddNestedKeys<Obj1>;

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

// ============================================================
// 一个子对象包含多个属性
// ============================================================

type Obj2 = {
  user: {
    name: string;

    age: number;

    active: boolean;
  };
};

type Test2 = AddNestedKeys<Obj2>;

type Test2Expected = {
  user: {
    name: string;

    age: number;

    active: boolean;
  };

  "user.name": string;

  "user.age": number;

  "user.active": boolean;
};

Checking<Test2, Test2Expected, Test.Pass>;

// ============================================================
// 没有子对象时保持不变
// ============================================================

type Obj3 = {
  name: string;

  age: number;
};

type Test3 = AddNestedKeys<Obj3>;

type Test3Expected = Obj3;

Checking<Test3, Test3Expected, Test.Pass>;

// ============================================================
// 仅处理一层嵌套
// ============================================================

type Obj4 = {
  a: {
    b: {
      c: string;
    };
  };
};

type Test4 = AddNestedKeys<Obj4>;

type Test4Expected = {
  a: {
    b: {
      c: string;
    };
  };

  "a.b": {
    c: string;
  };
};

Checking<Test4, Test4Expected, Test.Pass>;

// ============================================================
// 数组和函数不作为子对象处理
// ============================================================

type Obj5 = {
  list: string[];

  fn: () => string;

  user: {
    name: string;
  };
};

type Test5 = AddNestedKeys<Obj5>;

type Test5Expected = {
  list: string[];

  fn: () => string;

  user: {
    name: string;
  };

  "user.name": string;
};

Checking<Test5, Test5Expected, Test.Pass>;
