import { Button } from "@chakra-ui/react";

interface buttonProps {
  value: string;
  onClick: Function;
  colorScheme: string;
  variant: string;
  className?: string;
  disabled?: boolean;
  width: string;
}

const Appbutton: React.FC<buttonProps> = ({
  value,
  onClick,
  colorScheme,
  variant,
  className,
  disabled,
  width,
}) => {
  return (
    <>
      <Button
        onClick={(event) => onClick(event)}
        colorScheme={colorScheme}
        variant={variant}
        className={className}
        disabled={disabled}
        w={width}
      >
        {value}
      </Button>
    </>
  );
};

export default Appbutton;
