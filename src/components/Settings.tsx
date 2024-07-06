import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const Settings = ({ isOpen, onClose }: Props) => {
  return (
    <Drawer onClose={onClose} isOpen={isOpen} size='md'>
      <DrawerOverlay />
      <DrawerContent
        sx={{
          background: 'rgba( 0, 0, 0, 0.65 )',
          boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
          backdropFilter: ' blur( 5px )',
          borderTopLeftRadius: '10px',
          borderBottomLeftRadius: '10px',
          borderLeft: '1px solid rgba( 255, 255, 255, 0.18 )',
        }}
      >
        <DrawerCloseButton />
        <DrawerHeader>{`drawer contents`}</DrawerHeader>
        <DrawerBody>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Consequat nisl vel pretium lectus quam id. Semper quis lectus nulla
            at volutpat diam ut venenatis. Dolor morbi non arcu risus quis
            varius quam quisque. Massa ultricies mi quis hendrerit dolor magna
            eget est lorem. Erat imperdiet sed euismod nisi porta. Lectus
            vestibulum mattis ullamcorper velit.
          </p>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
