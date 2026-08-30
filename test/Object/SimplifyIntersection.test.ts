import type { SimplifyIntersection, Test } from "../../src";

import { Checking } from "../../src/_internal/Checking";

// ============================================================
// 基础对象 没影响
// ============================================================

type Test1Actual = SimplifyIntersection<{
  a: string;
}>;

type Test1Expected = {
  a: string;
};

Checking<Test1Actual, Test1Expected, Test.Pass>;

// ============================================================
// 交叉对象类型 会被简化
// ============================================================

type Test2Actual = SimplifyIntersection<
  {
    a: string;
  } & {
    b: number;
  }
>;

type Test2Expected = {
  a: string;
  b: number;
};

Checking<Test2Actual, Test2Expected, Test.Pass>;

// ============================================================
// Union 类型 没影响
// ============================================================

type Test4Actual = SimplifyIntersection<
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
// Union 中的交叉类型 会被简化
// ============================================================

type Test5Actual = SimplifyIntersection<
  | (
    {
      a: string;
    } & {
      b: number;
    }
  )
  | (
    {
      c: boolean;
    } & {
      d: bigint;
    }
  )
>;

type Test5Expected =
  | {
    a: string;
    b: number;
  }
  | {
    c: boolean;
    d: bigint;
  };

Checking<Test5Actual, Test5Expected, Test.Pass>;

// ============================================================
// Optional 属性 没影响
// ============================================================

type Test6Actual = SimplifyIntersection<{
  a?: string;
  b: number;
}>;

type Test6Expected = {
  a?: string;
  b: number;
};

Checking<Test6Actual, Test6Expected, Test.Pass>;

// ============================================================
// Readonly 属性 没影响
// ============================================================

type Test7Actual = SimplifyIntersection<{
  readonly a: string;
  b: number;
}>;

type Test7Expected = {
  readonly a: string;
  b: number;
};

Checking<Test7Actual, Test7Expected, Test.Pass>;

// ============================================================
// Interface
// ============================================================

interface Simplifiable {
  a: string;
}

type Test9Actual = SimplifyIntersection<Simplifiable>;

type Test9Expected = {
  a: string;
};

Checking<Test9Actual, Test9Expected, Test.Pass>;

// ============================================================
// Interface -> Record
//
// interface 没有隐式的 string 索引签名，经过 Simplify
// 重新映射后可以满足 Record<string, unknown>。
// ============================================================

const value: Simplifiable = {
  a: "example",
};

const simplified: Test9Actual = {
  a: "example",
};

function testRecord<T extends Record<string, unknown>>(value: T) {
  return value;
}

// @ts-expect-error 类型“Simplifiable”中缺少类型“string”的索引签名
testRecord(value);

testRecord(simplified);

// ============================================================
// any 返回 any
// ============================================================

type Test10Actual = SimplifyIntersection<any>;

type Test10Expected = any;

Checking<Test10Actual, Test10Expected, Test.Pass>;

// ============================================================
// never 返回 never
// ============================================================

type Test11Actual = SimplifyIntersection<never>;

type Test11Expected = never;

Checking<Test11Actual, Test11Expected, Test.Pass>;
