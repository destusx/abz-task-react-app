import { IPosition, IPositionApiResponse } from '../types/position.types';
import {
    ISuccessRegistration,
    ITokenResponse,
    IUser,
    IUserApiResponse,
} from '../types/user.types';
import { request } from '../utils/request';

const _apiBase = 'https://frontend-test-assignment-api.abz.agency/api/v1/';
const _baseCount = 6;
const _baseOffset = 0;

export const getToken = async (): Promise<ITokenResponse> => {
    const tokenResponse = await fetch(`${_apiBase}token`);

    return await tokenResponse.json();
};

export const getUsers = async (
    offset: number = _baseOffset,
    count: number = _baseCount
): Promise<IUser[]> => {
    const res: IUserApiResponse = await request(
        `${_apiBase}users?page=1&count=${count}&offset=${offset}`
    );
    const { users } = res;
    return users;
};

export const getPositions = async (): Promise<IPosition[]> => {
    const res: IPositionApiResponse = await request(`${_apiBase}positions`);
    const { positions } = res;
    return positions;
};

export const AddUser = async (
    user: FormData,
    token: string | null
): Promise<ISuccessRegistration> => {
    const res = await request(`${_apiBase}users`, 'POST', user as any, token);
    return res;
};
