import { Time } from '../../../../types';

interface Props {
  onClick: (time: Time) => void;
  time: Time;
}

export const EditTimer = ({ onClick, time }: Props) => {
  return <div onClick={() => onClick(time)}>EditTimer</div>;
};
