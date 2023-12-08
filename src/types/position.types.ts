export interface IPositionApiResponse {
    success: true | false;
    positions: IPosition[];
}

export interface IPosition {
    id: number;
    name: string;
}
