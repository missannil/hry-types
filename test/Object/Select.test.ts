import { type Test, TypeChecking } from "../../src";
import type { Select } from "../../src/Object/Select";

/**
 * @link test 同[SelectKeys](./SelectKeys.test.ts)一样,只是返回的是对象
 */
type TestObj = { num: 123; str?: string; union: boolean; fn: () => string };

type TestResult = Select<TestObj, number, "extends->">; // { num: 123 }

TypeChecking<TestResult, { num: 123 }, Test.Pass>;
