import { useTheme } from 'styled-components';

const OpenEye = () => {
  const { colors } = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        fill={colors.primary[40]}
        d="M23.457 15.797c-.022-.049-.551-1.223-1.728-2.4C20.16 11.829 18.18 11 16 11s-4.16.829-5.729 2.397c-1.177 1.177-1.709 2.353-1.728 2.4a.5.5 0 000 .407c.022.05.551 1.223 1.728 2.4C11.84 20.17 13.82 21 16 21s4.16-.829 5.729-2.396c1.177-1.177 1.706-2.35 1.728-2.4a.5.5 0 000-.407zM16 18.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
      ></path>
    </svg>
  );
};

export default OpenEye;
