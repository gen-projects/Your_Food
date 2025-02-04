import Categoria from '../../models/Categoria'
import Texto from '../texto/Texto'
import Titulo from '../titulo/Titulo'
import { PencilSimple, Trash } from '@phosphor-icons/react'

interface CardCategoriaProps{
    categoria: Categoria;
    url: string;
}

function CardCategoria({categoria, url}: CardCategoriaProps) {
    return (
        <div className="flex flex-row m-1 rounded-2xl bg-[#FAF8F8] shadow-lg  max-w-2xl ">
            <div className="flex flex-row items-center p-4 ">
                <div className="flex justify-center items-center rounded-full
                    bg-green-500 h-32 min-w-32 min-h-28 overflow-hidden shadow-md">
                    <img
                        src={url}
                        alt="icon_categoria"
                        className="w-full h-full object-contain hover:scale-105 "
                    />
                </div>

                <div className="flex flex-col gap-1 pl-2.5">
                    <Titulo
                        texto={categoria.descricao}
                    />
                    <Texto
                    //adicionar campo descricao no back-end
                        texto="Feito com produtos frescos colhidos e plantados naturalmente"
                    />
                </div>
            </div>


            <div className="flex flex-col items-end">
                <PencilSimple size={24} className="text-gray-600 cursor-pointer 
                    hover:opacity-80 hover:scale-110 transition-transform duration-300" />
                <Trash size={24} className="text-red-500 cursor-pointer 
                    hover:opacity-80 hover:scale-110 transition-transform duration-300" />
            </div>
        </div>
    )
}

export default CardCategoria