export type IfExtends<A, B, Then = unknown, Else = A> = [A] extends [B] ? Then : Else;
