/* eslint-disable jsx-a11y/anchor-is-valid */
import Button from '../../Button/Button';

import styles from './AuthBlock.module.scss';

const AuthBlock = () => {
    return (
        <div className={`${styles.wrapper}`}>
            <a href="#">
                <Button color="primary">Users</Button>
            </a>
            <a href="#">
                <Button color="primary">Sign up</Button>
            </a>
        </div>
    );
};

export default AuthBlock;
