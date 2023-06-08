export type IfExtends<A1, A2, Then = A1, Else = A2> = A1 extends A2 ? Then : Else;
