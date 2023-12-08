import { ReactNode } from 'react';
import styles from './Title.module.scss';

interface ITitleProps {
    children: ReactNode;
    color: 'primary' | 'white';
}

const Title = ({ children, color }: ITitleProps) => {
    return <h1 className={`${styles.title} ${styles[color]}`}>{children}</h1>;
};

export default Title;
