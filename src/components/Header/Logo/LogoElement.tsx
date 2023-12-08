import LogoSvg from './LogoSvg';

import styles from './Logo.module.scss';

const LogoElement = () => {
    return (
        <a className={styles.logo} href="/">
            <LogoSvg />
            <span className={styles.text}>TESTTASK</span>
        </a>
    );
};

export default LogoElement;
