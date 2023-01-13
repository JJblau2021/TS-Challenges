type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false;

type Includes<T extends readonly any[], U> = T extends [infer X, ...infer Rest]
  ? Equal<X, U> extends true
    ? true
    : Includes<Rest, U>
  : false;
