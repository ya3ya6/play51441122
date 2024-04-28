import { keys } from 'ts-transformer-keys';

export interface InputsType {
  email: string;
}
const keysOfProps = keys<InputsType>();
export type IDTypes = typeof keysOfProps[number];
