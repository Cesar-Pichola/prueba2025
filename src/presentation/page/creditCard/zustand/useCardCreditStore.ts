import { create } from "zustand";
import type { IHistoy } from "../../../../domin/entities/IHistory";
import { container } from "tsyringe";
import { GetCreditCardUseCase } from "../../../../application/useCases/getCreditCard_useCases";
import { AddCreditCardUseCase } from "../../../../application/useCases/addCreditCard_useCases";

interface HistoryState {
    isBusy: boolean;
    listData: IHistoy[];
    fetchHistory: () => Promise<void>;
    addHystory:  (data: IHistoy) => Promise<void>;
}

export const useCardCreditStore = create<HistoryState>((set, get) => (
    {
        isBusy: false,
        listData: [],
        fetchHistory: async () => {
            set({ isBusy: true })
            const resolve = await container.resolve(GetCreditCardUseCase);
            const response = await resolve.execute();

            set(
                {
                    isBusy: false,
                    listData: response
                }
            )
        },

        addHystory: async (data: IHistoy)=>{
                   const resolve = await container.resolve(AddCreditCardUseCase);
            const response = await resolve.execute(data);
            const resolget = await container.resolve(GetCreditCardUseCase);
            const responseHis = await resolget.execute();
               set(
                {
                    isBusy: false,
                    listData: responseHis
                }
            )
        }
    }
))
