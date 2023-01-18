type LengthOfString<S extends string> = StringArr<S>['length'];

type StringArr<S extends string> = S extends `${infer P}${infer Q}`
  ? [P, ...StringArr<Q>]
  : [];
