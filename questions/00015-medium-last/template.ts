type Last<T extends any[]> = T extends [infer First, ...infer Rest]
  ? T['length'] extends 1
    ? First
    : Last<Rest>
  : never;
