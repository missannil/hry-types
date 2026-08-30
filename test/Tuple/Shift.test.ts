import { type Test } from "../../src";
import { Checking } from "../../src/_internal/Checking";
import type { Shift } from "../../src/Tuple/Shift";

type ReadonlyTupleResult = Shift<readonly [1, 2, 3]>;

Checking<ReadonlyTupleResult, [2, 3], Test.Pass>;

type MutableTupleResult = Shift<[1, 2, 3]>;

Checking<MutableTupleResult, [2, 3], Test.Pass>;

type EmptyTupleResult = Shift<[]>;

Checking<EmptyTupleResult, [], Test.Pass>;

type AnyResult = Shift<any>;

Checking<AnyResult, unknown[] | [], Test.Pass>;

type NeverResult = Shift<never>;

Checking<NeverResult, never, Test.Pass>;
