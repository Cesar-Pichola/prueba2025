import type { IconType } from "react-icons";
import iconSearch from "../../../../assets/img/iconsearch.png";

interface IInputSearchProps {
  Icon?: IconType;
  placeholder?: string;
  type: string;
  height?: number;
  backgroundColor?: string;
  rounded?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputSearch = ({
  Icon,
  placeholder = "",
  type,
  height = 50,
  backgroundColor = "#FFFFFF",
  rounded = 5,
  onChange,
}: IInputSearchProps) => {

     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;

    const cleanValue = rawValue.replace(/[^a-zA-Z0-9 ]/g, '');

    if (onChange) {
      const modifiedEvent = {
        ...e,
        target: {
          ...e.target,
          value: cleanValue,
        },
      };

      onChange(modifiedEvent as React.ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <div
      style={{
        height: height,
        backgroundColor: backgroundColor,
        borderRadius: rounded,
      }}
      className="flex border border-[#6F7171] px-5 focus-within:border-[#641CFF] focus-within:border-2 items-center hover:cursor-pointer"
    >
      {Icon ? (
        <Icon size={18} />
      ) : (
        <img
          src={iconSearch}
          alt="iconsearch"
          width={18.22}
          height={18.22}
          style={{ objectFit: "contain" }}
        />
      )}
      <input
        onChange={handleChange}
        type={type}
        className="input-text h-[48px] ml-2 w-full bg-transparent outline-none "
        placeholder={placeholder}
      />
    </div>
  );
};
