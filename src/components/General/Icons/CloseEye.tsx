import { useTheme } from 'styled-components';

const CloseEye = () => {
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
        d="M11.37 10.164a.499.499 0 10-.74.672l1.202 1.323c-2.27 1.393-3.246 3.541-3.289 3.638a.5.5 0 000 .407c.022.05.551 1.223 1.728 2.4C11.84 20.17 13.82 21 16 21a7.944 7.944 0 003.254-.677l1.375 1.513a.5.5 0 10.74-.672l-9.999-11zm5.563 7.605a2 2 0 01-2.605-2.865l2.605 2.865zm6.524-1.565c-.026.058-.66 1.46-2.085 2.737a.5.5 0 01-.704-.035l-6.33-6.964a.5.5 0 01.287-.83A8.367 8.367 0 0116 11c2.18 0 4.16.829 5.729 2.397 1.177 1.177 1.706 2.351 1.728 2.4a.5.5 0 010 .407z"
      ></path>
    </svg>
  );
};

export default CloseEye;
