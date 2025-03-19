import { CaretDown } from '@phosphor-icons/react'
import React, { useState } from 'react'

interface PropsFaq{
    pergunta: string;
    resposta: string;
}


function Faq({pergunta, resposta}: PropsFaq) {
    const [expandido, setExpandido] = useState(false);

    return (
        <div
            onClick={() => setExpandido(!expandido)}
            className="flex flex-col bg-gray-300 px-4 py-3 mb-4 rounded-2xl  
                        sm:max-w-xl cursor-pointer transition-all duration-300
                        max-w-[90vw]"
        >
            <div className="flex justify-between items-center">
                <p className="text-lg font-medium text-gray-800">
                    {pergunta}
                </p>
                <CaretDown
                    size={28}
                    className={`transition-transform duration-300 ${expandido ? 'rotate-180' : 'rotate-0'}`}
                />
            </div>

            <div className={`mt-2 overflow-hidden transition-max-height duration-300 ${expandido ? 'max-h-40' : 'max-h-0'}`}>
                <p className="text-gray-700">
                    {resposta}
                </p>
            </div>
        </div>
    )
}

export default Faq