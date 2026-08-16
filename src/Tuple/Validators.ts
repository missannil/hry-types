export type Validators<L extends unknown[]> = L extends [infer Head, ...infer Tail extends unknown[]]
  ? unknown extends Head ? Validators<Tail> : Head
  : unknown;
