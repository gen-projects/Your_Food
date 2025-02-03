function CardProduto() {
    return (
        <div className="flex flex-col border border-gray-100 rounded-md text-start p-3 w-50 h-68 gap-2 items-center shadow-md">
            <div className="flex items-center justify-center w-40 h-36 rounded-lg inset-shadow-sm inset-shadow-gray-500">
                <img src="https://i.imgur.com/vvfBypS.png" alt="imagem produto" className="object-contain w-full h-full"/>
            </div>
            <div className="text-left w-40">
                <h2 className="text-lg font-semibold">Suco de Laranja</h2>
                <p className="text-sm text-gray-600">Suco natural colhido e feito na hora</p>
                <p className="text-md font-bold text-end p-1">R$10,00</p>
            </div>
        </div>
    )
}


export default CardProduto