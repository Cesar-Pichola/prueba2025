import type { IHistoy } from "../entities/IHistory";

export interface ICreditCardRespository {
    getAllHistory(): Promise<IHistoy[]>;
    addHistory(data: IHistoy): Promise<void>;

}