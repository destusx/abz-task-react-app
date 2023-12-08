import { create } from 'zustand';
import { ISuccessRegistration, IUser } from '../types/user.types';
import { IPosition } from '../types/position.types';
import { AddUser, getPositions, getToken, getUsers } from '../services/UserService';

type State = {
    token: string | null;
    users: IUser[];
    userOffset: number;
    userEnded: boolean;
    positions: IPosition[];
    loading: boolean;
};

type Action = {
    getUsers: (offset: number) => Promise<void>;
    getPositions: () => Promise<void>;
    addUser: (user: FormData, token: string | null) => Promise<ISuccessRegistration>;
    getToken: () => Promise<void>;
};

interface IUserStore extends State, Action {}

export const useUserStore = create<IUserStore>()(set => ({
    token: null,
    users: [],
    userOffset: 6,
    userEnded: false,
    positions: [],
    loading: false,
    getUsers: async offset => {
        set({ loading: true });
        const users = await getUsers(offset);

        set(state => ({
            users: [...state.users, ...users],
            loading: false,
            userOffset: state.userOffset + 6,
            userEnded: state.userOffset === 90 || users.length < 6 ? true : false,
        }));
    },
    getPositions: async () => {
        const positions = await getPositions();
        set({ positions });
    },
    addUser: async (user, token) => {
        const newUser = await AddUser(user, token);
        const users = await getUsers();
        set(() => ({
            userOffset: 6,
            users: [...users],
        }));
        return newUser;
    },
    getToken: async () => {
        const tokenResponse = await getToken();
        const { token } = tokenResponse;
        set({ token });
    },
}));
