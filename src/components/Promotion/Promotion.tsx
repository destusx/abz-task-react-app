/* eslint-disable jsx-a11y/anchor-is-valid */
import Button from '../Button/Button';
import Title from '../Title/Title';

import styles from './Promotion.module.scss';

const Promotion = () => {
    return (
        <section className={`${styles.promotion}`}>
            <div className="container">
                <div className={`${styles.wrapper}`}>
                    <Title color="white">
                        Test assignment for front-end developer
                    </Title>
                    <div className={`${styles.descr}`}>
                        What defines a good front-end developer is one that has
                        skilled knowledge of HTML, CSS, JS with a vast understanding
                        of User design thinking as they'll be building web interfaces
                        with accessibility in mind. They should also be excited to
                        learn, as the world of Front-End Development keeps evolving.
                    </div>
                    <a href="#">
                        <Button color="primary">Sign up</Button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Promotion;
