import { useEffect, useState } from 'react';
import Radio from '../Radio/Radio';
import { useUserStore } from '../../../store/useUserStore';

import styles from './RadioList.module.scss';

interface IRadioListProps {
    setPositionId: (id: number) => void;
}

const RadioList = ({ setPositionId }: IRadioListProps) => {
    const [getPositions, positions] = useUserStore(state => [
        state.getPositions,
        state.positions,
    ]);

    const [selectedPosition, setSelectedPosition] = useState('');

    useEffect(() => {
        getPositions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handlePositionChange = (position: string) => {
        setSelectedPosition(position);
    };

    return (
        <div className={`${styles.radioblock}`}>
            <div className={`${styles.descr}`}>Select your position</div>
            <div>
                {positions.map(item => (
                    <Radio
                        key={item.id}
                        {...item}
                        selectedPosition={selectedPosition}
                        onChange={handlePositionChange}
                        setPositionId={setPositionId}
                    />
                ))}
            </div>
        </div>
    );
};

export default RadioList;
