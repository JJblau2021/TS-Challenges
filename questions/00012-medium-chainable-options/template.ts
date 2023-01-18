type Chainable<T = {}> = {
  option<K extends string, V>(
    key: K extends keyof T ? (T[K] extends V ? never : K) : K,
    value: V,
  ): Chainable<Omit<T, K> & { [P in K]: V }>;
  get(): T;
};
