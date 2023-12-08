import Form from './Form/Form';
import Title from '../Title/Title';

import styles from './FormBlock.module.scss';

const FormBlock = () => {
    return (
        <section className={`${styles.form}`}>
            <div className="container">
                <Title color="primary">Working with POST request</Title>
                <Form />
            </div>
        </section>
    );
};

export default FormBlock;
