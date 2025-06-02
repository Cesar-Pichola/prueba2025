import type { IHistoy } from "../../domin/entities/IHistory";
import type { ICreditCardRespository } from "../../domin/ports/ICreditCardRepository";
import { injectable } from 'tsyringe';


@injectable()
export class CreditCardRepository implements ICreditCardRespository {
    constructor() {
        
    }
    async getAllHistory(): Promise<IHistoy[]> {
        return data;
    }
    async addHistory(newdata: IHistoy): Promise<void> {
          data.unshift(newdata);
    }
}

const data: IHistoy[] = [
  { id: 1, noautoriza: "A12345", asignado: "Juan Pérez", fechaentrega: "2025-06-01", estado: "Pendiente", detalle: "D", factura: "F" },
  { id: 2, noautoriza: "B67890", asignado: "María Gómez", fechaentrega: "2025-06-03", estado: "Completado", detalle: "D", factura: "F" },
  { id: 3, noautoriza: "C54321", asignado: "Carlos Ruiz", fechaentrega: "2025-06-05", estado: "En proceso", detalle: "D", factura: "F" },
  { id: 4, noautoriza: "D98765", asignado: "Ana López", fechaentrega: "2025-06-07", estado: "Pendiente", detalle: "D", factura: "F" },
  { id: 5, noautoriza: "E11223", asignado: "Luis Martínez", fechaentrega: "2025-06-09", estado: "Completado", detalle: "D", factura: "F" },
  { id: 6, noautoriza: "F44556", asignado: "Sofía Ramírez", fechaentrega: "2025-06-11", estado: "En proceso", detalle: "D", factura: "F" },
  { id: 7, noautoriza: "G77889", asignado: "Diego Fernández", fechaentrega: "2025-06-13", estado: "Pendiente", detalle: "D", factura: "F" },
  { id: 8, noautoriza: "H99001", asignado: "Mariana Torres", fechaentrega: "2025-06-15", estado: "Completado", detalle: "D", factura: "F" },
  { id: 9, noautoriza: "I22334", asignado: "Ricardo Gómez", fechaentrega: "2025-06-17", estado: "En proceso", detalle: "D", factura: "F" },
  { id: 10, noautoriza: "J55667", asignado: "Laura Sánchez", fechaentrega: "2025-06-19", estado: "Pendiente", detalle: "D", factura: "F" },
  { id: 11, noautoriza: "K88990", asignado: "Fernando Castillo", fechaentrega: "2025-06-21", estado: "Completado", detalle: "D", factura: "F" },
  { id: 12, noautoriza: "L10112", asignado: "Valeria Mendoza", fechaentrega: "2025-06-23", estado: "En proceso", detalle: "D", factura: "F" },
  { id: 13, noautoriza: "M13141", asignado: "Andrés Morales", fechaentrega: "2025-06-25", estado: "Pendiente", detalle: "D", factura: "F" },
];