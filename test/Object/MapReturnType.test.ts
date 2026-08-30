import { type Test } from "../../src";

import { Checking } from "../../src/_internal/Checking";

import type { MapReturnType } from "../../src/Object/_index";

// ============================================================
// 普通属性保持不变
// ============================================================

type Test1 = MapReturnType<{
  num: number;

  str: string;
}>;

type TestExpect1 = {
  num: number;

  str: string;
};

Checking<Test1, TestExpect1, Test.Pass>;

// ============================================================
// 函数属性转换为返回值类型
// ============================================================

type Test2 = MapReturnType<{
  num: 123;

  fn: () => string;
}>;

type TestExpect2 = {
  num: 123;

  fn: string;
};

Checking<Test2, TestExpect2, Test.Pass>;

// ============================================================
// 多个函数属性分别转换
// ============================================================

type Test3 = MapReturnType<{
  str: () => string;

  num: () => number;

  bool: () => boolean;
}>;

type TestExpect3 = {
  str: string;

  num: number;

  bool: boolean;
};

Checking<Test3, TestExpect3, Test.Pass>;

// ============================================================
// Optional / Readonly 属性保持不变
// ============================================================

type Test4 = MapReturnType<{
  readonly num: number;

  fn?: () => string;
}>;

type TestExpect4 = {
  readonly num: number;

  fn?: string;
};

Checking<Test4, TestExpect4, Test.Pass>;

// ============================================================
// 非联合对象
// ============================================================

type Test5 = MapReturnType<{
  value: string | number;

  fn: (value: string) => number;
}>;

type TestExpect5 = {
  value: string | number;

  fn: number;
};

Checking<Test5, TestExpect5, Test.Pass>;
