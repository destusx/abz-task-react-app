import { ReactNode } from 'react';

import styles from './Button.module.scss';

interface IButtonProps {
    children: ReactNode;
    color: 'primary' | 'secondary';
    onClick?: (arg: any) => void;
    disabled?: boolean;
    style?: React.CSSProperties | undefined;
}

const Button = ({ children, color, onClick, disabled, style }: IButtonProps) => {
    return (
        <button
            style={style}
            onClick={onClick}
            disabled={disabled}
            className={`${styles.btn} ${styles[color]}`}
        >
            {children}
        </button>
    );
};

export default Button;
