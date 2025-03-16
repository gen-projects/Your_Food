import { PencilSimple, Trash } from "@phosphor-icons/react"
import Categoria from "../../models/Categoria"
import Titulo from "../titulo/Titulo"

interface CardListaCategoriaProps {
    categoria: Categoria
    onDelete: (id: string) => Promise<void>;
    onEdit: (id: number) => void;
}

function CardListaCategoria({categoria, onDelete, onEdit}: CardListaCategoriaProps) {
    return (
    <div className="flex flex-row border border-gray-400 rounded-md text-start p-3 w-full h-50 gap-2 items-center shadow-md">
        <div className="flex items-center justify-center w-46 h-36 mr-2 rounded-lg inset-shadow-sm inset-shadow-gray-500">
            <img 
                src={categoria.foto} 
                alt={`Categoria ${categoria.descricao}`} 
                className="object-contain w-full h-full hover:scale-110 transition-transform duration-300"
            />
        </div>
        <div className="text-left w-full">
            <Titulo 
                texto={categoria.descricao}
            />
            <p className={`inline border-1 rounded-md ${categoria.saudavel ? 'bg-emerald-400 border-emerald-500' : 'bg-red-400 border-red-500'} text-white font-semibold px-1 mt-2`}>
                {categoria.saudavel ? 'Saudável' : 'Não Saudável'}
            </p>
        </div>
        <div className="flex flex-col h-full justify-start items-end">
            <PencilSimple 
                size={24} 
                className="text-gray-600 cursor-pointer hover:opacity-80 hover:scale-110 transition-transform duration-300" 
                onClick={() => onEdit(categoria.id)}
            />
            <Trash 
                size={24} 
                className="text-red-500 cursor-pointer hover:opacity-80 hover:scale-110 transition-transform duration-300" 
                onClick={() => onDelete(String(categoria.id))}
            />
        </div>
    </div>
    )
}

export default CardListaCategoria