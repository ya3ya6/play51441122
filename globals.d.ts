declare type AwaitReturnType<T> = Awaited<ReturnType<T>>;

declare type DTO<S extends string> = S extends `${infer T}_${infer U}`
  ? `${T}${Capitalize<DTO<U>>}`
  : S;

declare type DTONested<T> = T extends Array<any>
  ? Array<DTONested<T[number]>>
  : T extends object
  ? {
      [K in keyof T as DTO<K & string>]: DTONested<T[K]>;
    }
  : T;
