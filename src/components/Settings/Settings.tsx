import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  DrawerFooter,
  VStack,
  Box,
  Text,
} from '@chakra-ui/react';
import { DurationSlider } from './components/DurationSlider';
import { LuUndo } from 'react-icons/lu';
import styled from 'styled-components';
import { useContext, useState } from 'react';
import {
  FOCUS_TIMER,
  LONG_BREAK_TIMER,
  SHORT_BREAK_TIMER,
} from '../../constants';
import { PomodoroContext } from '../../App';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const FooterActions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Settings = ({ isOpen, onClose }: Props) => {
  const [focusTimer, setFocusTimer] = useState(FOCUS_TIMER);
  const [shortBreakTimer, setShortBreakTimer] = useState(SHORT_BREAK_TIMER);
  const [longBreakTimer, setLongBreakTimer] = useState(LONG_BREAK_TIMER);

  const { setTimer } = useContext(PomodoroContext);

  const handleSave = () => {
    console.log('Save settings');
    setTimer();
    onClose();
  };

  const handleReset = () => {
    console.log('Reset settings');
  };

  return (
    <Drawer onClose={onClose} isOpen={isOpen} size='xs'>
      <DrawerOverlay />
      <DrawerContent
        sx={{
          background: 'rgba( 255, 255, 255, 0.25 )',
          boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
          backdropFilter: 'blur( 6px )',
          WebkitBackdropFilter: ' blur( 6px )',
          borderTopLeftRadius: '10px',
          borderBottomLeftRadius: '10px',
          borderLeft: '1px solid rgba( 255, 255, 255, 0.18 )',
        }}
      >
        <DrawerCloseButton />
        <DrawerHeader>
          <Text as='h2'>Settings</Text>
        </DrawerHeader>
        <DrawerBody>
          <VStack spacing={10} align='stretch'>
            <Box>
              <Text fontSize='md' as='h3'>
                Pomodoro Timer
              </Text>
              <VStack spacing={6} alignItems='flex-start' mt={4}>
                <VStack align='stretch' width='100%'>
                  <Text fontSize='xs' as='h4'>
                    Work Duration
                  </Text>
                  <DurationSlider
                    min={15}
                    max={60}
                    timer={focusTimer}
                    setTimer={setFocusTimer}
                  />
                </VStack>
                <VStack align='stretch' width='100%'>
                  <Text fontSize='xs' as='h4'>
                    Short Break Duration
                  </Text>
                  <DurationSlider
                    min={0}
                    max={15}
                    timer={shortBreakTimer}
                    setTimer={setShortBreakTimer}
                  />
                </VStack>
                <VStack align='stretch' width='100%'>
                  <Text fontSize='xs' as='h4'>
                    Long Break Duration
                  </Text>
                  <DurationSlider
                    min={0}
                    max={30}
                    timer={longBreakTimer}
                    setTimer={setLongBreakTimer}
                  />
                </VStack>
              </VStack>
            </Box>
            <Box>
              <Text fontSize='md' as='h3'>
                Background
              </Text>
            </Box>
            <Box>
              <Text fontSize='md' as='h3'>
                Sounds
              </Text>
            </Box>
            <Box>
              <Text fontSize='md' as='h3'>
                Theme
              </Text>
            </Box>
          </VStack>
        </DrawerBody>
        <DrawerFooter>
          <FooterActions>
            <Button
              colorScheme='whiteAlpha.800'
              size='sm'
              onClick={handleReset}
              leftIcon={<LuUndo />}
              variant='outline'
            >
              Reset to Default
            </Button>
            <Button
              variant='solid'
              colorScheme='purple'
              size='sm'
              onClick={handleSave}
            >
              Save
            </Button>
          </FooterActions>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
