import { PencilSimple, Trash } from "@phosphor-icons/react"
import Produto from "../../models/Produto"
import Titulo from "../titulo/Titulo"
import Texto from "../texto/Texto"

interface CardListaProdutoProps{
    produto: Produto
    onDelete: (id: string) => Promise<void>;
}

function CardListaProduto({produto,onDelete}: CardListaProdutoProps) {
    return (
    <div className="flex flex-row border border-gray-400 rounded-md text-start p-3 w-full h-50 gap-2 items-center shadow-md">
        <div className="flex items-center justify-center w-46 h-36 mr-2 rounded-lg inset-shadow-sm inset-shadow-gray-500">
            <img src="https://i.imgur.com/vvfBypS.png" alt="imagem produto" className="object-contain w-full h-full
                        hover:scale-110 transition-transform duration-300"/>
        </div>
        <div className="text-left w-full">
            <Texto
                texto={produto.loja}
            />
            <Titulo 
                texto={produto.nome}
            />
            <Texto
                texto={produto.descricao}
                cor="text-gray-600"
            />
            <p className="inline border-1 rounded-md bg-emerald-400 border-emerald-500 text-white font-semibold px-1 mt-2">
                {produto.categoria.saudavel ? 'Saudável' : 'Não Saudável'}</p>
                {/* estamos trabalhando com centavos */}
            <p className="text-md font-bold text-end p-1">R${produto.preco/100}</p> 
        </div>
        <div className="flex flex-col h-full justify-start items-end">
                <PencilSimple size={24} className="text-gray-600 cursor-pointer 
                    hover:opacity-80 hover:scale-110 transition-transform duration-300"/>
                <Trash size={24} className="text-red-500 cursor-pointer 
                    hover:opacity-80 hover:scale-110 transition-transform duration-300" onClick={() => onDelete(String(produto.id))}/>
            </div>
    </div>
    )
}

export default CardListaProduto