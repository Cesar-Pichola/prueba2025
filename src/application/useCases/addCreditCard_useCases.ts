import { injectable, inject } from 'tsyringe';
import type { ICreditCardRespository } from '../../domin/ports/ICreditCardRepository';
import type { IHistoy } from '../../domin/entities/IHistory';

@injectable()
export class AddCreditCardUseCase {
    constructor(
        @inject('CreditCardRepository') private readonly repo: ICreditCardRespository
    ) {}
    
    async execute(data:  IHistoy) {
        return await this.repo.addHistory(data); 
    }
}
