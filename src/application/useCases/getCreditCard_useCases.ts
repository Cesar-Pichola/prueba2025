import { injectable, inject } from 'tsyringe';
import type { ICreditCardRespository } from '../../domin/ports/ICreditCardRepository';

@injectable()
export class GetCreditCardUseCase {
    constructor(
        @inject('CreditCardRepository') private readonly repo: ICreditCardRespository
    ) {}
    
    async execute() {
        return await this.repo.getAllHistory(); 
    }
}
