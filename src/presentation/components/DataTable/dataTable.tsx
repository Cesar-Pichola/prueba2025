import PaginationTable from "./pagination";
import factura from "../../../../assets/img/factura.png";
import { useEffect, useState } from "react";
import { InputSearch } from "./input_search";
import { ItemsPerPageSelect } from "../../page/creditCard/components/popoveritempage";


interface IColum {
  key: string;
  label: string;
}
interface DataTableProps {
  buttonAdd?: boolean;
  title?: string;
  colums: IColum[];
  data: Record<string, any>[];
  onEdit: (item: Record<string, any>) => void;
  onDelete: (item: Record<string, any>) => void;
  itemsPerPage: number;
  onAdd?: () => void;
}

const DataTable = ({
  colums,

  data,
 
  itemsPerPage,

}: DataTableProps) => {

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [filteredData, setFilteredData] = useState<Record<string, any>[]>([]);
  const [paginatedData, setPaginatedData] = useState<Record<string, any>[]>([]);


  useEffect(() => {
    const filtered = data.filter((row) =>
      Object.values(row).some((value) =>
        value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredData(filtered);
    setCurrentPage(0);
  }, [searchTerm, data]);

  useEffect(() => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedData(filteredData.slice(startIndex, endIndex));
  }, [currentPage, filteredData, itemsPerPage]);

  return (
    <>
      <>
        <div className="mt-12 mb-8">
          <p className="font-[700] text-[21px] text-[#1D2076]">
            Historial de pedidos
          </p>
          <div className="h-[1px] bg-[#6F7171] w-full"></div>
        </div>
      </>
      <div className="overflow-x-auto p-1">
        <div className="">
          <div className=" flex flex-col sm:flex-row sm:justify-between mb-6">
            <div className="flex items-center">
              <p className="text-[#6F7171] sm:text-primary-color text-[16px]">Mostrar</p>
              <ItemsPerPageSelect
                defaultValue={20}
                onChange={(value) => console.log("Mostrar:", value)}
              />
              <p className="text-[#6F7171] sm:text-primary-color text-[16px]">Entradas</p>
            </div>
            <div className="w-full sm:w-[280px] mt-4">
              <InputSearch
                placeholder="Buscar"
                type="text"
                onChange={(e) => setSearchTerm(e.target.value)}


              />

            </div>
          </div>
          <div className="hidden md:block">
            <table className=" min-w-full border border-[#C4C6F9] ">
              <thead className="bg-[#C4C6F9] h-[45px]">
                <tr>
                  <th className="px-4 py-3 text-center">
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded border border-[#1D2076] checked:bg-[#1D2076] checked:border-[#1D2076] appearance-none cursor-pointer transition duration-200"
                    />
                  </th>
                  {colums.length > 0 &&
                    colums.map((e, i) => (
                      <th
                        key={i}
                        className="px-4 py-3 text-[14px] font-[700] text-[#3F4141]"
                      >
                        {e.label}
                      </th>
                    ))}
                </tr>
              </thead>

              <tbody>
                {data.length > 0 ? (
                  paginatedData.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-t border-gray-200  ${i % 2 === 0 ? 'bg-white hover:bg-gray-100' : 'hover:bg-[#C4C6F9]'}`}
                    >
                      <td className="text-center px-4">
                        <input
                          type="checkbox"
                          className="w-5 h-5 rounded border border-[#1D2076] checked:bg-[#1D2076] checked:border-[#1D2076] appearance-none cursor-pointer transition duration-200"
                        />
                      </td>
                      {colums.map((col) => {
                        if (row[col.key] == 'F') {
                          return (
                            <td className="text-center">
                              <div className="flex justify-center">
                                <img src={factura} alt="factura" width={20} height={24} style={{ objectFit: 'contain' }} />

                              </div>
                            </td>
                          );
                        }

                        if (row[col.key] == 'D') {
                          return (
                            <td className="text-center text-[#3940EB] text-[16px] font-[700] underline">
                              Ver detalle
                            </td>
                          );
                        }

                        return (
                          <td
                            key={col.key}
                            className="px-4 py-2 text-[14px] text-primary-color h-[80px] text-center"
                          >
                            {row[col.key]}
                          </td>
                        );
                      })}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={colums.length + 1}
                      className="text-center text-sm text-gray-500 h-18"
                    >
                      No hay datos
                    </td>
                  </tr>
                )}
              </tbody>

            </table>
          </div>


          <div className="block md:hidden ">
            {data.length > 0 ? (
              paginatedData.map((row, i) => (
                <div
                  key={i}
                  className={`${i % 2 === 0 ? 'bg-white' : ' '} border-l border-r border-[#6F7171]`}
                >
                  <div className="flex justify-between items-center border-t  h-[80px] px-2 ">
                    <span className="text-primary-color text-[14px] font-[400]">Seleccionar</span>
                    <div className="flex justify-between items-center mb-2">
                      <input
                        type="checkbox"
                        className="w-5 h-5 rounded border border-[#1D2076] checked:bg-[#1D2076] checked:border-[#1D2076] appearance-none cursor-pointer transition duration-200"
                      />
                    </div>
                  </div>

                  {colums.map((col, idx) => {
                    const value = row[col.key];

                    if (value === 'F') {
                      return (
                        <div key={idx} className="flex justify-between items-center  border-t  px-2 h-[80px]">
                          <span className="text-primary-color text-[14px] font-[400]">{col.label}</span>
                          <img src={factura} alt="factura" width={20} height={24} />
                        </div>
                      );
                    }

                    if (value === 'D') {
                      return (
                        <div key={idx} className="flex justify-between items-center border-t px-2 h-[80px]">
                          <span className="text-primary-color text-[14px] font-[400]">{col.label}</span>
                          <span className="text-[#3940EB] text-[16px] font-[700] underline">Ver detalle</span>
                        </div>
                      );
                    }

                    return (
                      <div key={idx} className="flex justify-between items-center border-t px-2  h-[80px]">
                        <span className="text-primary-color text-[14px] font-[400] ">{col.label}</span>
                        <span className="text-primary-color text-[14px] font-[400]]">{value}</span>
                      </div>
                    );
                  })}
                </div>
              ))
            ) : (
              <p className="text-center text-sm text-gray-500">No hay datos</p>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
        <p className="text-[14px] text-[#6F7171]">
          Mostrando entrada 1 a 5 de 15,000
        </p>
        <PaginationTable
          onPageChange={(selected) => setCurrentPage(selected)}
          pageCount={Math.ceil(data.length / itemsPerPage)}
        />
      </div>
    </>
  );
};

export default DataTable;
