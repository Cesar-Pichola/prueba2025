import logo from "../../../../assets/img/Logo.png";
import usericon from "../../../../assets/img/usuario.png";
import settingsicon from "../../../../assets/img/settings.png";
import exiticon from "../../../../assets/img/exit.png";
import menuBurguer from "../../../../assets/img/menuburguer.png";

const NavBar = () => {
    return (
        <>
            <div className="flex justify-between items-center">
                <img src={logo} alt="Logo" width={161} height={54} style={{ objectFit: 'contain' }} />
                <div className="hidden md:flex w-[409px] h-[50px] py-[16px] px-[24px] rounded-[16px]  gap-[32px] bg-[#FDFDFD] justify-center items-center">
                    <p className="text-[14px] font-[400]">Conócenos</p>
                    <p className="text-[14px] font-[400]">Servicios</p>
                    <p className="text-[14px] font-[400]">Productos</p>
                    <p className="text-[14px] font-[400]">Contáctanos</p>

                </div>

                <div className="hidden md:flex w-[120px] h-[56px] bg-[#C4C6F9] rounded-[16px]  p-[16px]  gap-[8px] justify-center  ">
                    <img src={usericon} alt="usuario" width={24} height={24} style={{ objectFit: 'contain' }} />
                    <img src={settingsicon} alt="settings" width={24} height={24} style={{ objectFit: 'contain' }} />
                    <img src={exiticon} alt="exit" width={24} height={24} style={{ objectFit: 'contain' }} />
                </div>

                 <div className="md:hidden w-[64px] h-[64px] bg-[#C4C6F9] rounded-[24px] flex justify-center items-center">
                      <img src={menuBurguer} alt="Logo" width={24} height={16} style={{ objectFit: 'contain' }} />
                 </div>
            </div>
        </>
    )
}

export default NavBar;