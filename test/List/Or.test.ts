import type { Test } from "../../src";
import { TypeChecking } from "../../src";

import type { Or, OrSign } from "../../src/List/Or";

type Test1 = Or<[1, 2]>;

TypeChecking<Test1, [1, 2, OrSign], Test.Pass>;

type Test2 = Or<[unknown, {}]>;

TypeChecking<Test2, [unknown, {}, OrSign], Test.Pass>;
