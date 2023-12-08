import { ReactNode } from 'react';

import styles from './Label.module.scss';

interface ILabelProps {
    children: ReactNode;
    idName: string;
}

const Label = ({ children, idName }: ILabelProps) => {
    return (
        <label className={`${styles.label}`} htmlFor={idName}>
            {children}
        </label>
    );
};

export default Label;
