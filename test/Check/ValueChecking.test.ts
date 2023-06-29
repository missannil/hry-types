import { ValueChecking } from "../../src";

// number
const num = 1 as number;
const num_literal = 1;
const num_union = {} as 1 | 2;

ValueChecking<number>()(num);

ValueChecking<1>()(num_literal);

ValueChecking<1 | 2>()(num_union);

// boolean
const bool = true as boolean;
const bool_true = true;

ValueChecking<boolean>()(bool);

ValueChecking<true>()(bool_true);

// object
const obj = { num: 123 };
const obj_literal = { num: 123 as const };
const obj_union = {} as typeof obj | typeof obj_literal;

ValueChecking<{ num: number }>()(obj);

ValueChecking<{ num: 123 }>()(obj_literal);

ValueChecking<{ num: 123 } | { num: number }>()(obj_union);

// array
const arr = [1, 2, 3] as number[];
const arr_tuple = [1, 2, 3] as [1, 2, 3];
const arr_union = {} as number[] | [1, 2, 3];

ValueChecking<number[]>()(arr);

ValueChecking<[1, 2, 3]>()(arr_tuple);

ValueChecking<number[] | [1, 2, 3]>()(arr_union);

// function
const func = () => 1;

const func_literal = () => 1 as const;

ValueChecking<() => number>()(func);

ValueChecking<() => 1>()(func_literal);
