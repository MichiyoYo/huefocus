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
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  HStack,
  StackDivider,
} from '@chakra-ui/react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const Settings = ({ isOpen, onClose }: Props) => {
  const handleSave = () => {
    console.log('Save settings');
    onClose();
  };

  return (
    <Drawer onClose={onClose} isOpen={isOpen} size='xs'>
      <DrawerOverlay />
      <DrawerContent
        sx={{
          background: 'rgba( 255, 255, 255, 0.25 )',
          boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
          backdropFilter: 'blur( 6px )',
          '-webkit-backdrop-filter': ' blur( 6px )',
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
          <VStack
            spacing={8}
            align='stretch'
            divider={<StackDivider borderColor='whiteAlpha.300' />}
          >
            <Box>
              <Text fontSize='md' as='h3'>
                Pomodoro Timer
              </Text>
              <VStack spacing={6} alignItems='flex-start' mt={4}>
                <VStack align='stretch' width='100%'>
                  <Text fontSize='xs' as='h4'>
                    Work Duration
                  </Text>
                  <Slider defaultValue={25} min={15} max={60} step={5}>
                    <SliderTrack bg='whiteAlpha.300'>
                      <SliderFilledTrack bg='whiteAlpha.700' />
                    </SliderTrack>
                    <SliderThumb boxSize={2} />
                  </Slider>
                </VStack>
                <VStack align='stretch' width='100%'>
                  <Text fontSize='xs' as='h4'>
                    Short Break Duration
                  </Text>
                  <Slider defaultValue={5} min={1} max={15} step={5}>
                    <SliderTrack bg='whiteAlpha.300'>
                      <SliderFilledTrack bg='whiteAlpha.700' />
                    </SliderTrack>
                    <SliderThumb boxSize={2} />
                  </Slider>
                </VStack>
                <VStack align='stretch' width='100%'>
                  <Text fontSize='xs' as='h4'>
                    Long Break Duration
                  </Text>
                  <Slider defaultValue={10} min={10} max={30} step={5}>
                    <SliderTrack bg='whiteAlpha.300'>
                      <SliderFilledTrack bg='whiteAlpha.700' />
                    </SliderTrack>
                    <SliderThumb boxSize={2} />
                  </Slider>
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
          <Button colorScheme='whiteAlpha' onClick={handleSave}>
            Save
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
