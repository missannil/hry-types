// -------------------Or-------------------

import { type Test, TypeChecking } from "../src";
import type { Or, OrSign } from "../src/List/Or";

TypeChecking<Or<[1, 2]>, [1, 2, OrSign], Test.Pass>;
