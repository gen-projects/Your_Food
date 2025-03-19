
interface CardProdutoProps{
    // produto: Produto;
    nome: string;
    url:  string;
    descricao: string;
    preco: number;
}

function CardProduto({nome, descricao,preco,url}: CardProdutoProps) {
    return (
        <div className="flex flex-col border bg-white border-gray-100 rounded-md text-start p-3 w-50 h-78 gap-2 items-center shadow-md">
            <div className="flex items-center justify-center w-40 h-36 rounded-lg inset-shadow-sm inset-shadow-gray-500">
                <img src={url} alt="imagem produto" className="object-contain w-full h-full"/>
            </div>
            <div className="text-left w-40">
                <h2 className="text-lg font-semibold">{nome}</h2>
                <p className="text-sm text-gray-600 line-clamp-4 sm:line-clamp-3 h-15">{descricao}</p>
                <p className="text-md font-bold text-end p-1">R${preco}</p>
            </div>
        </div>
    )
}


export default CardProduto