import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    primary: {
      10: '#DDC38F',
      20: '#F1C97B',
      30: '#A37F39',
      40: '#732D01',
      50: '#F8BF50',
    },
    neutral: {
      0: '#FFFFFF',
      10: '#E7E6E6',
      20: '#E8E9EA',
      30: '#B7B4B3',
      40: '#9F9B99',
      50: '#71767D',
      60: '#706A67',
      70: '#58514D',
      80: '#403834',
      90: '#281F1A',
      100: '#100601',
    },
    success: {
      25: '#E0EEDB',
      50: '#C3E0B7',
      75: '#A7D394',
      100: '#8BC570',
    },
    warning: {
      25: '#FDF8D2',
      50: '#FEF4A6',
      75: '#FEF179',
      100: '#FFED4D',
    },
    info: {
      25: '#D2F4F7',
      50: '#A8EDEE',
      75: '#7EE5E6',
      100: '#54DEDE',
    },
    error: {
      25: '#FDD1D2',
      50: '#FEA6A6',
      75: '#FE7B79',
      100: '#FF504D',
    },
  },
};

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Work Sans';
        font-style: normal;
        font-weight: 100;
        src: url(/fonts/work-sans-100.woff) format('woff');
        src: url(/fonts/work-sans-100.woff2) format('woff2');
    }
    @font-face {
        font-family: 'Work Sans';
        font-style: normal;
        font-weight: 200;
        src: url(/fonts/work-sans-200.woff) format('woff');
        src: url(/fonts/work-sans-200.woff2) format('woff2');
    }
    @font-face {
        font-family: 'Work Sans';
        font-style: normal;
        font-weight: 300;
        src: url(/fonts/work-sans-300.woff) format('woff');
        src: url(/fonts/work-sans-300.woff2) format('woff2');
    }
    @font-face {
        font-family: 'Work Sans';
        font-style: normal;
        font-weight: 400;
        src: url(/fonts/work-sans-400.woff) format('woff');
        src: url(/fonts/work-sans-400.woff2) format('woff2');
    }
    @font-face {
        font-family: 'Work Sans';
        font-style: normal;
        font-weight: 500;
        src: url(/fonts/work-sans-500.woff) format('woff');
        src: url(/fonts/work-sans-500.woff2) format('woff2');
    }
    @font-face {
        font-family: 'Work Sans';
        font-style: normal;
        font-weight: 600;
        src: url(/fonts/work-sans-600.woff) format('woff');
        src: url(/fonts/work-sans-600.woff2) format('woff2');
    }
    @font-face {
        font-family: 'Work Sans';
        font-style: normal;
        font-weight: 700;
        src: url(/fonts/work-sans-700.woff) format('woff');
        src: url(/fonts/work-sans-700.woff2) format('woff2');
    }
    @font-face {
        font-family: 'Work Sans';
        font-style: normal;
        font-weight: 800;
        src: url(/fonts/work-sans-800.woff) format('woff');
        src: url(/fonts/work-sans-800.woff2) format('woff2');
    }
    html,*,*:before,*:after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Work Sans', sans-serif;
        font-size: 1rem;
        background-color: ${({ theme }) => theme.colors.primary[10]};
        height: 100vh;
    }
`;

export default GlobalStyles;
