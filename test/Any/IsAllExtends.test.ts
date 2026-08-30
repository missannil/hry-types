import type { Test } from "../../src";
import { Checking } from "../../src/_internal/Checking";
import type { IsAllExtends } from "../../src/Any/_index";

// ============================================================
// 单个类型满足约束
// ============================================================
type Actual1 = IsAllExtends<1, number>;

type Expected1 = true;

Checking<Actual1, Expected1, Test.Pass>;

// ============================================================
// 约束为联合类型
// ============================================================
type Actual2 = IsAllExtends<1, string | number>;

type Expected2 = true;

Checking<Actual2, Expected2, Test.Pass>;

// ============================================================
// 联合类型中存在不满足约束的成员
// ============================================================
type Actual3 = IsAllExtends<1 | string, number>;

type Expected3 = false;

Checking<Actual3, Expected3, Test.Pass>;

// ============================================================
// `never` 和 `any` 不参与正常匹配
// ============================================================
type Actual4 = IsAllExtends<never, string>;

type Expected4 = false;

Checking<Actual4, Expected4, Test.Pass>;

type Actual5 = IsAllExtends<any, string>;

type Expected5 = false;

Checking<Actual5, Expected5, Test.Pass>;

type Actual6 = IsAllExtends<string, any>;

type Expected6 = false;

Checking<Actual6, Expected6, Test.Pass>;

type Actual7 = IsAllExtends<string, never>;

type Expected7 = false;

Checking<Actual7, Expected7, Test.Pass>;
