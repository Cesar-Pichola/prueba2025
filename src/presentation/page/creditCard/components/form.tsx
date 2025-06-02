import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCardCreditStore } from "../zustand/useCardCreditStore";
import type { IHistoy } from "../../../../domin/entities/IHistory";



type FormData = z.infer<typeof FacturaSchema>;

const Form = () => {
    const { addHystory } = useCardCreditStore();


    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(FacturaSchema),
        defaultValues: {
            id: 0,
            correo: '',
            direccion: '',
            nit: '',
            nombre: '',
            telefono: ''
        },
    });

    const onSubmit = (data: FormData) => {
        const dataf: IHistoy = {
            id: data.id,
            noautoriza: data.nit,
            asignado: data.nombre,
            fechaentrega: new Date().toISOString().split("T")[0],
            estado: "Pendiente",
            detalle: "D",
            factura: "F",
        };

        addHystory(dataf);
        reset();

    };

    const formatNIT = (value: string): string => {
        const numericValue = value.replace(/\D/g, '');

        if (numericValue.length <= 1) return numericValue;

        const cuerpo = numericValue.slice(0, -1);
        const verificador = numericValue.slice(-1);

        return `${cuerpo}-${verificador}`;
    };



    return (
        <>
            <div className="mb-8">
                <p className="font-[700] text-[21px] text-[#1D2076]">
                    Información del usuario
                </p>
                <div className="h-[1px] bg-[#6F7171] w-full"></div>
            </div>

            <div className="">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-2 gap-8">
                        <div className="col-span-2 sm:col-span-1 ">
                            <label className="label-input">
                                Nombre <span className="text-red-600">*</span>
                            </label>
                            <Controller
                                name="nombre"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        type="text"
                                        placeholder="Ingresa el nombre completo del usuario"
                                        {...field}
                                        className="input"
                                    />
                                )}
                            />
                            {errors.nombre && <p className="input-error-message">{errors.nombre.message}</p>}
                        </div>

                        <div className="col-span-2 sm:col-span-1">
                            <label className="label-input">
                                NIT <span className="text-red-600">*</span>
                            </label>
                            <Controller
                                name="nit"
                                control={control}
                                render={({ field: { onChange, value, ...restField } }) => (
                                    <input
                                        type="text"
                                        placeholder="Ingresa el número de NIT"
                                        value={formatNIT(value || '')}
                                        onChange={(e) => {
                                            const rawValue = e.target.value.replace(/\D/g, ''); // Solo números
                                            const formatted = formatNIT(rawValue);
                                            onChange(formatted);
                                        }}
                                        className="input"
                                        {...restField}
                                    />
                                )}
                            />
                            {errors.nit && <p className="input-error-message">{errors.nit.message}</p>}
                        </div>

                        <div className="col-span-2 sm:col-span-1">
                            <label className="label-input">
                                Teléfono <span className="text-red-600">*</span>
                            </label>
                            <Controller
                                name="telefono"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        type="text"
                                        placeholder="Ingresa el número telefónico"
                                        {...field}
                                        className="input"
                                    />
                                )}
                            />
                            {errors.telefono && <p className="input-error-message">{errors.telefono.message}</p>}
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <label className="label-input">
                                Correo Electrónico <span className="text-red-600">*</span>
                            </label>
                            <Controller
                                name="correo"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        type="email"
                                        placeholder="Correo Electrónico"
                                        {...field}
                                        className="input"
                                    />
                                )}
                            />
                            {errors.correo && <p className="input-error-message">{errors.correo.message}</p>}
                        </div>

                        <div className="col-span-2">
                            <label className="label-input">
                                Dirección de entrega <span className="text-red-600">*</span>
                            </label>
                            <Controller
                                name="direccion"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        type="text"
                                        placeholder="Dirección de entrega"
                                        {...field}
                                        className="input"
                                    />
                                )}
                            />
                            {errors.direccion && <p className="input-error-message">{errors.direccion.message}</p>}
                        </div>
                    </div>
                    <div className="flex justify-end mt-6">
                        <input
                            type="submit"
                            value="Enviar"
                            className="w-full sm:w-[223px] h-[48px] border-2 bg-[#3940EB] text-white text-[16px] font-[700] rounded-sm cursor-pointer"
                        />
                    </div>

                </form>

            </div>
        </>
    )
}

export default Form;



export const FacturaSchema = z.object({
    id: z.number(),
    nombre: z
        .string()
        .min(1, "El nombre es obligatorio")
        .max(25, "Máximo 25 caracteres")
        .regex(/^[A-Za-zÁÉÍÓÚÑáéíóúñ]+(?:\s[A-Za-zÁÉÍÓÚÑáéíóúñ]+)*$/, "Solo se permiten letras y un espacio entre nombre y apellido"),

    nit: z
        .string()
        .regex(/^\d{6,8}-\d$/, "Formato NIT incorrecto. Ejemplo válido: 12345678-9"),

    telefono: z
        .string()
        .regex(/^\d{4}-\d{4}$/, "Formato de teléfono incorrecto. Ejemplo válido: 1234-5678"),

    correo: z
        .string()
        .email("Formato de correo inválido")
        .max(25, "Máximo 25 caracteres"),

    direccion: z
        .string()
        .max(30, "Máximo 30 caracteres")
        .regex(/^[\w\s\-\#\.\,]+$/, "La dirección solo puede contener caracteres válidos (letras, números, guiones, punto, numeral, coma)"),
});