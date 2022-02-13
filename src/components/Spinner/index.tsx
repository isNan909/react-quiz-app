import { Spinner } from "@chakra-ui/react";
import { SpinnerProps } from '@/interface/index'

import './index.css';

const Appspinner: React.FC<SpinnerProps> = ({
  thickness,
  speed,
  color,
  emptyColor,
  size,
}) => {
  return (
    <>
      <Spinner
        thickness={thickness}
        speed={speed}
        color={color}
        size={size}
        emptyColor={emptyColor}
      />
    </>
  );
};

export default Appspinner;
