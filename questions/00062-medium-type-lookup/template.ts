type LookUp<U, T> = U extends {
  type: infer P;
}
  ? P extends T
    ? U
    : never
  : never;
