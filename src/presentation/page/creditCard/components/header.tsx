import felchaLeft from "../../../../../assets/img/flecha-izquierda.png";
import headerimg from "../../../../../assets/img/imageheader.png";

const InfoHeader = () => {
  return (
    <>
      <div
        style={{ marginTop: 40 }}
      >
        <div className="flex">
          <img src={felchaLeft} alt="rowleft" width={24} height={24} style={{ objectFit: 'contain' }} />
          <span className="text-[16px] text-[#3940EB] underline">Regresar</span>
        </div>
        <p className="font-[700] text-[27px] text-[#1D2076]">Tarjetas de Crédito</p>
        <p className="font-[700] text-[21px] text-[#3F4141]">Extensión de tarjeta principal</p>
        <div className="h-[1px] bg-[#6F7171] w-full"></div>
      </div>
      <div
        className="flex flex-col sm:flex-row items-center justify-center mt-[50px] gap-[24px] px-4"
      >

        <div className="max-w-[515px] w-full flex justify-center">
          <img
            src={headerimg}
            alt="headerimg"
            width={515}
            height={410}
            className="object-contain"
          />
        </div>


        <div className="flex flex-col justify-center max-w-[499px] w-full text-center gap-[24px]">
          <p className="text-primary-color text-[32px] md:text-[60px] font-[700]">
            Tu solicitud fue recibida
          </p>
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[32px] font-[700] font-lato text-secundary-color">
            Se iniciará a gestionar <span className="text-[#641CFF]">4</span> extensiones de tu tarjeta principal.
          </p>
        </div>
      </div>
    </>
  )
}

export default InfoHeader;