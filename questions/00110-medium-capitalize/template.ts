type MyCapitalize<S extends string> = S extends `${infer U}${infer T}`
  ? `${Uppercase<U>}${T}`
  : '';
