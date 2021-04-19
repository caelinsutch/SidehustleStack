import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    orange: {
      500: 'rgb(255, 109, 9)',
    },
  },
  components: {
    Alert: {
      baseStyle: {
        borderRadius: 8,
      },
    },
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
