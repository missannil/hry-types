import type { IfEqual } from '../Base/IfEqual';
import type { IfExtends } from '../Base/IfExtends';

export type Validator<Expect, Reality> = IfEqual<
    Expect,
    Reality,
    unknown,
    IfExtends<Expect, Function, `⚠️类型错误⚠️`, () => `⚠️类型错误⚠️`>
>;
