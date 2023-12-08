import LogoElement from './Logo/LogoElement';
import Nav from './AuthBlock/AuthBlock';

import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={`${styles.header}`}>
            <div className="container">
                <nav>
                    <LogoElement />
                    <Nav />
                </nav>
            </div>
        </header>
    );
};

export default Header;
