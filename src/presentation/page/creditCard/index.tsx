

import Stepper from "./components/stteper";
import InfoHeader from "./components/header";
import Description from "./components/descripction";
import Form from "./components/form";
import DataTable from "../../components/DataTable/dataTable";
import { useCardCreditStore } from "./zustand/useCardCreditStore";
import { useEffect } from "react";
import NavBar from "../../layout/components/nav_bar";

import { Footer } from "../../layout/components/footer";



const CreditCard = () => {
  const { listData, fetchHistory, isBusy } = useCardCreditStore();


  useEffect(() => {
    fetchHistory();
  }, []);
  return (
    <div className="flex flex-col w-full items-center ">
      <div
        style={{
          marginTop: 30
        }}
        className="w-full max-w-[1046px]  px-4">
        <NavBar />

        <InfoHeader />

        <div
          style={{
            marginTop: 40,
            marginBottom: 40
          }}>

          <Stepper />

        </div>

        <Description />
        <Form
        />

        <DataTable
          colums={columns}
          data={listData}
          itemsPerPage={5}
          title=""
          onDelete={() => { }}
          onEdit={() => { }}
        />

        <div className=" flex-col sm:flex-row flex gap-8 justify-end mt-8">
          <button
            className="w-full sm:w-[223px] h-[48px] border-2 border-[#641CFF] text-[#641CFF] text-[16px] font-[700] rounded-sm box-border"
          >
            Regresar
          </button>
          <button
            className="w-full sm:w-[223px] h-[48px] border-2 bg-[#3940EB] text-white text-[16px] font-[700] rounded-sm  "
          >
            Cancelar solicitud
          </button>
        </div>

      </div>
     <Footer/>


    </div>
  )
}

export default CreditCard;


const columns = [
  { key: "noautoriza", label: "No. Autorización" },
  { key: "asignado", label: "Asignado a" },
  { key: "fechaentrega", label: "Fecha de Entrega" },
  { key: "estado", label: "Estado" },
  { key: 'detalle', label: 'Ver detalle' },
  { key: 'factura', label: 'Factura' }
];
