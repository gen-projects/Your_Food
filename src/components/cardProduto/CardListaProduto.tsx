import { PencilSimple, Trash } from "@phosphor-icons/react";
import Produto from "../../models/Produto";

interface CardListaProdutoProps {
  produto: Produto;
  onDelete: (id: string) => Promise<void>;
  onEdit: (id: number) => void;
}

function CardListaProduto({
  produto,
  onDelete,
  onEdit,
}: CardListaProdutoProps) {
  return (
    <div className="flex flex-row border border-gray-400 rounded-md text-start p-3 w-full h-50 gap-2 items-center shadow-md">
      
      <div className="flex items-center justify-center w-46 h-36 mr-2 rounded-lg inset-shadow-sm inset-shadow-gray-500">
        <img
          src={produto.foto}
          alt="imagem produto"
          className="object-contain w-full h-full
                        hover:scale-110 transition-transform duration-300"
        />
      </div>

      <div className="text-left w-full pt-5">

        <p className="text-3x1 text-gray-600 line-clamp-4 sm:line-clamp-3 ">
          {produto.loja}
        </p>
        <h2 className="font-bold text-2xl sm:text-3xl line-clamp-1">{produto.nome}</h2>
        <p className="text-3x1 text-gray-600 line-clamp-1 
                        sm:line-clamp-3 ">
          {produto.descricao}
        </p>

        <p
          className={`inline border-1 rounded-md bg-emerald-400 border-emerald-500
                    text-white font-semibold px-1 mt-2 
                    ${produto.categoria.saudavel ? 'bg-emerald-400 border-emerald-500' : 'bg-red-400 border-red-500'}`}
        >
          {produto.categoria.saudavel ? "Saudável" : "Não Saudável"}
        </p>
        {/* estamos trabalhando com centavos */}
        <p className="text-md font-bold text-end p-1">
          R${produto.preco / 100}
        </p>
      </div>
      <div className="flex flex-col h-full justify-start items-end">
        <PencilSimple
          size={24}
          className="text-gray-600 cursor-pointer 
                    hover:opacity-80 hover:scale-110 transition-transform duration-300"
          onClick={() => onEdit(produto.id)}
        />
        <Trash
          size={24}
          className="text-red-500 cursor-pointer 
                    hover:opacity-80 hover:scale-110 transition-transform duration-300"
          onClick={() => onDelete(String(produto.id))}
        />
      </div>
    </div>
  );
}

export default CardListaProduto;
