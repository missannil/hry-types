import { type Test } from "../../src";

import { Checking } from "../../src/_internal/Checking";

import type { ExtractKeys } from "../../src/Object/_index";

type Obj = {
  num: number;

  literal_num: 123;

  str?: string;

  literal_str?: "str";

  unionStr_num: string | number;

  obj: object | null;
};

// ============================================================
// 基础匹配
// ============================================================

type Test1 = ExtractKeys<Obj, number>;

type TestExpect1 = "num" | "literal_num";

Checking<Test1, TestExpect1, Test.Pass>;

// ============================================================
// Union 匹配类型
// ============================================================

type Test2 = ExtractKeys<Obj, number | string>;

type TestExpect2 =
  | "num"
  | "literal_num"
  | "str"
  | "literal_str"
  | "unionStr_num";

Checking<Test2, TestExpect2, Test.Pass>;

// ============================================================
// someExtends->
// ============================================================

type Test3 = ExtractKeys<Obj, string, "someExtends->">;

type TestExpect3 =
  | "str"
  | "literal_str"
  | "unionStr_num";

Checking<Test3, TestExpect3, Test.Pass>;

// ============================================================
// equal
// ============================================================

type Test4 = ExtractKeys<Obj, number | string, "equal">;

type TestExpect4 = "unionStr_num";

Checking<Test4, TestExpect4, Test.Pass>;

// ============================================================
// Optional 属性参与匹配
// ============================================================

type Test5 = ExtractKeys<Obj, string>;

type TestExpect5 = "str" | "literal_str";

Checking<Test5, TestExpect5, Test.Pass>;

// ============================================================
// 仅匹配 Required 属性
// ============================================================

type Test6 = ExtractKeys<
  Obj,
  string,
  "allExtends->",
  "required"
>;

type TestExpect6 = never;

Checking<Test6, TestExpect6, Test.Pass>;

// ============================================================
// 仅匹配 Optional 属性
// ============================================================

type Test7 = ExtractKeys<
  Obj,
  string,
  "allExtends->",
  "optional"
>;

type TestExpect7 = "str" | "literal_str";

Checking<Test7, TestExpect7, Test.Pass>;
