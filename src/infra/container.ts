import { container } from 'tsyringe';
import type { ICreditCardRespository } from '../domin/ports/ICreditCardRepository';
import { CreditCardRepository } from '../adapter/repository/creditCardRepository';

export function setupContainer() {
  container.register<ICreditCardRespository>(
    'CreditCardRepository',
    { useClass: CreditCardRepository }
  );

}