import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Tooltip,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Timer } from '../../../types';

interface Props {
  min: number;
  max: number;
  timer: Timer;
  setTimer: (timer: Timer) => void;
}

export const DurationSlider = ({ min, max, timer, setTimer }: Props) => {
  const [sliderValue, setSliderValue] = useState(timer?.timeCap.minutes || 0);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    setTimer?.({
      ...timer,
      timeCap: { minutes: sliderValue, seconds: 0 },
      countDown: { minutes: sliderValue, seconds: 0 },
    });
  }, [sliderValue, setTimer, timer]);

  return (
    <Slider
      defaultValue={timer.timeCap.minutes}
      min={min}
      max={max}
      step={5}
      onChange={(v) => setSliderValue(v)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <SliderTrack bg='whiteAlpha.300'>
        <SliderFilledTrack bg='whiteAlpha.700' />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg='white'
        color='purple.500'
        placement='bottom'
        isOpen={showTooltip}
        label={`${sliderValue} min`}
      >
        <SliderThumb boxSize={2} />
      </Tooltip>
    </Slider>
  );
};
