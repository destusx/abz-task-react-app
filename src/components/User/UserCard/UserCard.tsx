import { IUser } from '../../../types/user.types';
import { Tooltip } from 'react-tooltip';
import styles from './UserCard.module.scss';

const UserCard = ({ name, email, phone, position, photo }: IUser) => {
    const shortenedName = name.length > 30 ? `${name.slice(0, 30)}...` : name;
    const shortenedEmail = email.length > 30 ? `${email.slice(0, 30)}...` : email;

    return (
        <div className={`${styles.card}`}>
            <img src={photo} alt={name} />
            <div className={`${styles.name}`}>{shortenedName}</div>
            <div>{position}</div>
            <div data-tooltip-id="my-tooltip" data-tooltip-content={email}>
                {shortenedEmail}
            </div>
            <Tooltip id="my-tooltip" />
            <div>{phone}</div>
        </div>
    );
};

export default UserCard;
