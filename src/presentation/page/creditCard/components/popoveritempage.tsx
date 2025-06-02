import React, { useState, useRef, useEffect } from "react";
import iconitempage from '../../../../../assets/img/iconselectitempage.png';

interface ItemsPerPageSelectProps {
    options?: number[];
    defaultValue?: number;
    onChange: (value: number) => void;
}

export const ItemsPerPageSelect = ({
    options = [5, 25, 50, 100],
    defaultValue = 10,
    onChange,
}: ItemsPerPageSelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(defaultValue);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const handleSelect = (value: number) => {
        setSelected(value);
        onChange(value);
        setIsOpen(false);
    };


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
                className="bg-white border w-[85px] h-[40px] mx-4 border-gray-400 rounded px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 flex justify-between items-center"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <p>
                    {selected}
                </p>

                <div>
                    <img src={iconitempage} alt="usuario" width={10} height={10} style={{ objectFit: 'contain' }} />

                </div>

            </button>

            {isOpen && (
                <div className="absolute z-10 mt-2  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                        {options.map((option) => (
                            <button
                                key={option}
                                onClick={() => handleSelect(option)}
                                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 text-gray-500 ${selected === option ? "bg-gray-100 font-semibold" : ""
                                    }`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
