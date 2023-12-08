import { useEffect } from 'react';
import UserCard from '../UserCard/UserCard';
import Title from '../../Title/Title';
import Button from '../../Button/Button';
import Spinner from '../../Other/Spinner/Spinner';
import { useUserStore } from '../../../store/useUserStore';

import styles from './UserList.module.scss';

const UserList = () => {
    const [getUsers, userList, loading, userOffset, userEnded] = useUserStore(
        state => [
            state.getUsers,
            state.users,
            state.loading,
            state.userOffset,
            state.userEnded,
        ]
    );

    const filteredUsers = userList.sort(
        (a, b) => b.registration_timestamp - a.registration_timestamp
    );

    useEffect(() => {
        getUsers(userOffset);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const items = (
        <>
            <div className={`${styles.wrapper}`}>
                {filteredUsers.map(user => (
                    <UserCard key={user.registration_timestamp} {...user} />
                ))}
            </div>
            <Button
                style={{ display: userEnded ? 'none' : 'block' }}
                onClick={() => getUsers(userOffset)}
                disabled={loading}
                color="primary"
            >
                Show more
            </Button>
        </>
    );
    const spinner = loading ? <Spinner /> : null;

    return (
        <section className={`${styles.users}`}>
            <div className="container">
                <Title color="primary">Working with GET request</Title>
                {items}
                {spinner}
            </div>
        </section>
    );
};

export default UserList;
