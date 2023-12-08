import { IPosition } from '../../../types/position.types';

import styles from './Radio.module.scss';

interface IRadioProps extends IPosition {
    selectedPosition: string;
    onChange: (position: string) => void;
    setPositionId: (id: number) => void;
}

const Radio = ({
    name,
    selectedPosition,
    id,
    onChange,
    setPositionId,
}: IRadioProps) => {
    const isChecked = selectedPosition === name;

    const handleRadioChange = () => {
        onChange(name);
        setPositionId(id);
    };

    return (
        <div className={styles.radio}>
            <input
                id={name}
                name={name}
                type="radio"
                checked={isChecked}
                onChange={handleRadioChange}
            />
            <label htmlFor={name} className={styles['radio-label']}>
                {name}
            </label>
        </div>
    );
};

export default Radio;
