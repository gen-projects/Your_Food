import React from 'react'
import Texto from '../texto/Texto'
import Titulo from '../titulo/Titulo'
import { PencilSimple, Trash } from '@phosphor-icons/react'

function CardCategoria() {
    return (
        <div className='flex flex-row h-full justify-center p-4 rounded-2xl bg-[#FAF8F8] shadow'>
            <div className=' rounded-full bg-green-500'>
                <img src="https://i.imgur.com/vvfBypS.png" alt="icon_categoria" 
                className='w-32 h-32 object-contain' />
            </div>
            <div className='p-4'>
                <Titulo
                    texto='Saúdaveis'
                />
                <Texto
                    texto='Produtos que promovem o bem-estar, 
                    fornecendo nutrientes essenciais e beneficiando a saúde a longo prazo, 
                    sem ingredientes artificiais ou prejudiciais.'
                />
            </div>
            <div className='flex flex-col justify-between'>
                <PencilSimple size={26} className="hover:opacity-70 hover:size-6"/>
                <Trash size={26} className="hover:opacity-70 hover:size-6"/>
            </div>
        </div>
)
}

export default CardCategoria