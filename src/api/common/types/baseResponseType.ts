export interface BaseResponseType {
  detail: string;
}

export type BaseErrorReposnseType<Fields extends { [key: string]: any } = Record<string, string>> =
  {
    non_field_errors?: string[];
  } & {
    [key in keyof Fields]?: string[];
  };
