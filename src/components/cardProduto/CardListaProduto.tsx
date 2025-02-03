import { PencilSimple, Trash } from "@phosphor-icons/react"
import Produto from "../../models/Produto"

interface CardListaProdutoProps{
    produto: Produto
}

function CardListaProduto({produto}: CardListaProdutoProps) {
    return (
    <div className="flex flex-row border border-gray-400 rounded-md text-start p-3 w-full h-50 gap-2 items-center shadow-md">
        <div className="flex items-center justify-center w-36 h-36 rounded-lg inset-shadow-sm inset-shadow-gray-500">
            <img src="https://i.imgur.com/vvfBypS.png" alt="imagem produto" className="object-contain w-full h-full"/>
        </div>
        <div className="text-left w-full">
            <div className="flex flex-col h-6 justify-end items-end">
                <PencilSimple size={20} className="hover:opacity-70 hover:size-6"/>
                <Trash size={20} className="hover:opacity-70 hover:size-6"/>
            </div>
            <h3>{produto.loja}</h3>
            <h2 className="text-lg font-semibold">{produto.nome}</h2>
            <p className="text-sm text-gray-600">{produto.descricao}</p> 
            <p className="inline border-1 rounded-md bg-emerald-400 border-emerald-500 text-white px-1 mt-1">{produto.categoria?.saudavel}</p>
            <p className="text-md font-bold text-end p-1">{produto.preco}</p>
        </div>
    </div>
    )
}

export default CardListaProduto