import { Global } from '@emotion/react';
import React from 'react';

const Fonts: React.FC = () => (
  <Global
    styles={`
          @font-face {
              font-family: 'Circular Std';
              src: url('/fonts/CircularStd-Medium.ttf');
              font-weight: 500;
              font-style: normal;
          }
          @font-face {
              font-family: 'Circular Std';
              src: url('/fonts/CircularStd-Book.ttf');
              font-weight: 300;
              font-style: normal;
          }
          @font-face {
              font-family: 'Circular Std';
              src: url('/fonts/CircularStd-Bold.ttf');
              font-weight: 700;
              font-style: normal;
          }
          @font-face {
              font-family: 'Circular Std';
              src: url('/fonts/CircularStd-Black.ttf');
              font-weight: 800;
              font-style: normal;
          }
      `}
  />
);

export default Fonts;
