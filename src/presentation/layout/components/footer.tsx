import facebook from "../../../../assets/img/Footer1redes.png"
import xtu from "../../../../assets/img/Footer2redes.png"
import instagram from "../../../../assets/img/Footer3redes.png"
import wath from "../../../../assets/img/Footer4redes.png"
import link from "../../../../assets/img/Footer5redes.png"
export const Footer = ()=>{
    return (
        <>
        <div className="w-full bg-[#1D2076] mt-16">
  <div className="max-w-[1046px] mx-auto py-20 px-4 flex flex-col items-center">
    
    <div className="flex flex-col md:flex-row md:justify-center items-center gap-10 w-full text-center md:text-left">
      
      <div className="flex flex-col sm:flex-row gap-10 w-full md:w-auto justify-center">
        <div>
          <p className="text-white font-bold text-[21px] mb-4">Soporte técnico</p>
          <p className="text-white text-sm">Tel: 0000-0000</p>
          <p className="text-white text-sm">Correo: Bancasoporte@pe.com.gt</p>
        </div>
        <div>
          <p className="text-white font-bold text-[21px] mb-4">Ayuda en Línea</p>
          <p className="text-white text-sm">Tutoriales</p>
          <p className="text-white text-sm">Tips de seguridad</p>
        </div>
      </div>

      <div className="hidden md:block w-px h-[128px] bg-white mx-6"></div>
      <div className="md:hidden h-px w-full bg-white my-4"></div>

      
      <div className="flex flex-col sm:flex-row gap-10 w-full md:w-auto justify-center">
        <div>
          <p className="text-white font-bold text-[21px] mb-4">Descargas</p>
          <p className="text-white text-sm">App de Banca de empresas</p>
          <p className="text-white text-sm">App de Banca de personas</p>
          <p className="text-white text-sm">Impuestos</p>
        </div>
        <div>
          <p className="text-white font-bold text-[21px] mb-4">Enlaces</p>
          <p className="text-white text-sm">Banca de personas</p>
          <p className="text-white text-sm">Acerca de Banca de Empresas</p>
        </div>
      </div>
    </div>

    
    <div className="flex flex-col-reverse md:flex-row md:justify-between items-center text-center mt-10 gap-6 w-full">
      <p className="text-white text-sm font-semibold max-w-[600px] flex gap-3">
        <p>
        UBICACIÓN (Escriba aquí una dirección inventada).

        </p>
        <p>CÓDIGO SWIFT: XXXXXXXX</p>
      </p>

      <div className="flex flex-col items-start">
        <p className="text-white font-bold text-xl mb-4 ">Redes sociales</p>
        <div className="flex justify-center gap-4">
          <img src={facebook} alt="Facebook" width={24} height={24} />
          <img src={xtu} alt="X" width={24} height={24} />
          <img src={instagram} alt="Instagram" width={24} height={24} />
          <img src={wath} alt="WhatsApp" width={24} height={24} />
          <img src={link} alt="LinkedIn" width={24} height={24} />
        </div>
      </div>
    </div>
  </div>
</div>
        </>
    )
}