/* UnionObjects 测试文件 */

import { type Test } from "../../src";

import { Checking } from "../../src/_internal/Checking";

import type { MergeUnion } from "../../src/Object/_index";

// ============================================================
// 相同 Key 的属性类型取联合
// ============================================================

type Test1 = MergeUnion<
  {
    a: string;
    b: number;
  },
  {
    a: number;
    b: boolean;
  }
>;

type TestExpect1 = {
  a: string | number;
  b: number | boolean;
};

Checking<Test1, TestExpect1, Test.Pass>;

// ============================================================
// 不同 Key 的属性保持不变
// ============================================================

type Test2 = MergeUnion<
  {
    a: string;
    b: number;
  },
  {
    c: boolean;
    d: string;
  }
>;

type TestExpect2 = {
  a: string;
  b: number;
  c: boolean;
  d: string;
};

Checking<Test2, TestExpect2, Test.Pass>;

// ============================================================
// 相同和不同 Key 混合
// ============================================================

type Test3 = MergeUnion<
  {
    a: string;
    b: number;
    c: boolean;
  },
  {
    a: number;
    b: string;
    d: string;
  }
>;

type TestExpect3 = {
  a: string | number;
  b: number | string;
  c: boolean;
  d: string;
};

Checking<Test3, TestExpect3, Test.Pass>;

// ============================================================
// any + 对象
// ============================================================

type Test4 = MergeUnion<any, {
  a: string;
}>;

type TestExpect4 = {
  a: string;
};

Checking<Test4, TestExpect4, Test.Pass>;

// ============================================================
// 对象 + any
// ============================================================

type Test5 = MergeUnion<{
  a: string;
}, any>;

type TestExpect5 = {
  a: string;
};

Checking<Test5, TestExpect5, Test.Pass>;

// ============================================================
// never + 对象
// ============================================================

type Test6 = MergeUnion<never, {
  a: string;
}>;

type TestExpect6 = {
  a: string;
};

Checking<Test6, TestExpect6, Test.Pass>;

// ============================================================
// 对象 + never
// ============================================================

type Test7 = MergeUnion<{
  a: string;
}, never>;

type TestExpect7 = {
  a: string;
};

Checking<Test7, TestExpect7, Test.Pass>;
