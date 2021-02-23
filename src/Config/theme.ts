import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        borderRadius: 1000,
      },
      defaultProps: {
        colorScheme: 'orange',
      },
    },
  },
  fonts: {
    body: 'Circular Std',
    heading: 'Circular Std',
  },
});

export default theme;
