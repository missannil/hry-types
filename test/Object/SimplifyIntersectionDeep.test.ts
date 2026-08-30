import type { SimplifyIntersectionDeep, Test } from "../../src";

import { Checking } from "../../src/_internal/Checking";

// ============================================================
// 基础对象 没影响
// ============================================================

type Test1Actual = SimplifyIntersectionDeep<{
  a: string;
}>;

type Test1Expected = {
  a: string;
};

Checking<Test1Actual, Test1Expected, Test.Pass>;

// ============================================================
// 嵌套对象 会被递归简化
// ============================================================

type Test2Actual = SimplifyIntersectionDeep<{
  a: {
    b: string;
  } & {
    c: number;
  };
}>;

type Test2Expected = {
  a: {
    b: string;
    c: number;
  };
};

Checking<Test2Actual, Test2Expected, Test.Pass>;

// ============================================================
// 多层嵌套交叉对象 会被递归简化
// ============================================================

type Test3Actual = SimplifyIntersectionDeep<{
  a: {
    b: {
      c: string;
    } & {
      d: number;
    };
  };
}>;

type Test3Expected = {
  a: {
    b: {
      c: string;
      d: number;
    };
  };
};

Checking<Test3Actual, Test3Expected, Test.Pass>;

// ============================================================
// Union 类型 没影响
// ============================================================

type Test4Actual = SimplifyIntersectionDeep<
  {
    a: string;
  } | {
    b: number;
  }
>;

type Test4Expected =
  | {
    a: string;
  }
  | {
    b: number;
  };

Checking<Test4Actual, Test4Expected, Test.Pass>;

// ============================================================
// Union 中的嵌套交叉对象 会被递归简化
// ============================================================

type Test5Actual = SimplifyIntersectionDeep<
  | {
    a: {
      b: string;
    } & {
      c: number;
    };
  }
  | {
    d: {
      e: boolean;
    } & {
      f: bigint;
    };
  }
>;

type Test5Expected =
  | {
    a: {
      b: string;
      c: number;
    };
  }
  | {
    d: {
      e: boolean;
      f: bigint;
    };
  };

Checking<Test5Actual, Test5Expected, Test.Pass>;

// ============================================================
// any 返回 any
// ============================================================

type Test6Actual = SimplifyIntersectionDeep<any>;

type Test6Expected = any;

Checking<Test6Actual, Test6Expected, Test.Pass>;

// ============================================================
// never 返回 never
// ============================================================

type Test7Actual = SimplifyIntersectionDeep<never>;

type Test7Expected = never;

Checking<Test7Actual, Test7Expected, Test.Pass>;
