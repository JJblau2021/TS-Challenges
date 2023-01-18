type Pop<T extends any[]> = T extends [infer First, ...infer Rest]
  ? Rest['length'] extends 1
    ? [First]
    : [First, ...Pop<Rest>]
  : [];
