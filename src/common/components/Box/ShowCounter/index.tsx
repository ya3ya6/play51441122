import { Flex } from '@chakra-ui/react';
import { FC } from 'react';

interface ShowCounterPropsType {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface DateTimeDisplayPropsType {
  value: number;
  type: string;
  isDanger: boolean;
}

const DateTimeDisplay: FC<DateTimeDisplayPropsType> = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};

export const ShowCounter: FC<ShowCounterPropsType> = ({ days, hours, minutes, seconds }) => {
  return (
    <Flex dir="ltr">
      <DateTimeDisplay value={days} type="Days" isDanger={+days <= 3} />
      <p>:</p>
      <DateTimeDisplay value={hours} type="Hours" isDanger={false} />
      <p>:</p>
      <DateTimeDisplay value={minutes} type="Mins" isDanger={false} />
      <p>:</p>
      <DateTimeDisplay value={seconds} type="Seconds" isDanger={false} />
    </Flex>
  );
};
