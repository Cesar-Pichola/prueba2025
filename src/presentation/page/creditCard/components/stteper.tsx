import  { useState } from 'react';

const steps = [
  { id: 1, label: 'Solicitud recibida' },
  { id: 2, label: 'En proceso' },
  { id: 3, label: 'Enviado' },
  { id: 4, label: 'Entregado' },
];

const Stepper = () => {
  const [currentStep, ] = useState(1); // Cambia esto para probar

  return (
    <div className="relative w-full  mx-auto px-4">

      <div className="flex justify-between relative z-10">
        {steps.map((step, ) => {
          const isActive = step.id <= currentStep;


          return (
            <div key={step.id} className="flex-1 flex flex-col  relative">

              <div

                className={`
              w-[24px] h-[24px] rounded-full flex items-center justify-center text-[12px] 
              ${isActive ? 'bg-[#1D2076] text-white' : ' text-gray-500 border-1 border-grey-300'}
              z-10
            `}
              >
                {step.id}
              </div>


              <p
                style={{ marginTop: 10 }}
                className={`
    
    mt-2 text-[14px]
    ${isActive ? 'text-[#3940EB] font-[700]' : 'text-[#3F4141] font-[400]'}
    ${isActive ? 'block ' : 'hidden'} md:block
  `}
              >
                {step.label}
              </p>

              <div className="absolute top-3 left-[calc(30%+5px)] sm:left-[calc(10%+5px)] right-[calc(-8%+30px)] h-[2px] bg-gray-300 z-0" />


            </div>
          );
        })}
      </div>

    </div>
  );
};

export default Stepper;