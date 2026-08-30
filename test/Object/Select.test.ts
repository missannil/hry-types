import { type Test } from "../../src";

import { Checking } from "../../src/_internal/Checking";

import type { Select } from "../../src/Object/_index";

type Obj = {
  num: number;

  literal_num: 123;

  str?: string;

  literal_str?: "str";

  unionStr_num: string | number;

  bool: boolean;
};

// ============================================================
// 基础匹配
// Scope = "all"
// ============================================================

type Test1 = Select<Obj, number>;

type TestExpect1 = {
  num: number;

  literal_num: 123;
};

Checking<Test1, TestExpect1, Test.Pass>;

// ============================================================
// Union 匹配类型
// ============================================================

type Test2 = Select<Obj, number | string>;

type TestExpect2 = {
  num: number;

  literal_num: 123;

  str?: string;

  literal_str?: "str";

  unionStr_num: string | number;
};

Checking<Test2, TestExpect2, Test.Pass>;

// ============================================================
// someExtends->
// ============================================================

type Test3 = Select<Obj, string, "someExtends->">;

type TestExpect3 = {
  str?: string;

  literal_str?: "str";

  unionStr_num: string | number;
};

Checking<Test3, TestExpect3, Test.Pass>;

// ============================================================
// equal
// ============================================================

type Test4 = Select<Obj, number | string, "equal">;

type TestExpect4 = {
  unionStr_num: string | number;
};

Checking<Test4, TestExpect4, Test.Pass>;

// ============================================================
// Scope = "required"
// 仅匹配必选属性
// ============================================================

type Test5 = Select<
  Obj,
  string,
  "allExtends->",
  "required"
>;

type TestExpect5 = {};

Checking<Test5, TestExpect5, Test.Pass>;

// ============================================================
// Scope = "optional"
// 仅匹配可选属性
// ============================================================

type Test6 = Select<
  Obj,
  string,
  "allExtends->",
  "optional"
>;

type TestExpect6 = {
  str?: string;

  literal_str?: "str";
};

Checking<Test6, TestExpect6, Test.Pass>;

// ============================================================
// Scope = "required" + Union 匹配
// ============================================================

type Test7 = Select<
  Obj,
  number | string,
  "allExtends->",
  "required"
>;

type TestExpect7 = {
  num: number;

  literal_num: 123;

  unionStr_num: string | number;
};

Checking<Test7, TestExpect7, Test.Pass>;

// ============================================================
// Scope = "optional" + Union 匹配
// ============================================================

type Test8 = Select<
  Obj,
  number | string,
  "allExtends->",
  "optional"
>;

type TestExpect8 = {
  str?: string;

  literal_str?: "str";
};

Checking<Test8, TestExpect8, Test.Pass>;
