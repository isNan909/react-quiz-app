export default interface ButtonProps {
    value: string;
    onClick: Function;
    colorScheme: string;
    variant: string;
    className?: string;
    disabled?: any;
    width?: string;
}