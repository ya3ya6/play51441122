import { keys } from 'ts-transformer-keys';

export interface InputsType {
  email: string;
  password: string;
  confermPassword: string;
}

const keysOfProps = keys<InputsType>();
export type IDTypes = typeof keysOfProps[number];
