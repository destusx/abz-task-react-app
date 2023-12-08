export interface IUserApiResponse {
    success: true | false;
    total_pages: number;
    total_users: number;
    count: number;
    page: number;
    links: {
        next_url: string | null;
        prev_url: string | null;
    };
    users: IUser[];
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    phone: string;
    position: string;
    position_id: number;
    registration_timestamp: number;
    photo: string;
}

export interface ISuccessRegistration {
    success: string;
    user_id: number;
    message: string;
}

export interface ITokenResponse {
    success: boolean;
    token: string;
}

export interface IRegisterUser
    extends Omit<IUser, 'id' | 'registration_timestamp' | 'position' | 'photo'> {
    photo: File | null;
}

export interface IFormInput extends Pick<IUser, 'name' | 'email' | 'phone'> {}
