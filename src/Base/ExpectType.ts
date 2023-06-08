import type { Validator } from './Validator';
export const ExpectType =
    <ExpectType>() =>
    <RealityType>(val: RealityType & Validator<ExpectType, RealityType>): void => {
        val;
    };
