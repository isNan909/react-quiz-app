import { Spinner } from "@chakra-ui/react";

import './index.css';

interface spinnerProps {
  thickness: string;
  speed: string;
  color: string;
  emptyColor: string;
  size: string;
}

const Appspinner: React.FC<spinnerProps> = ({
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
