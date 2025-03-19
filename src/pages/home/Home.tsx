import { useEffect, useState } from "react"
import BotaoBranco from "../../components/botao/BotaoBranco"
import Texto from "../../components/texto/Texto"
import Titulo from "../../components/titulo/Titulo"
import Produto from "../../models/Produto"
import { recomendacaoSaudavel } from "../../services/service"
import IconeRedondo from "../../components/iconeredondo/IconeRedondo"
import CardProduto from "../../components/cardProduto/CardProduto"
import Faq from "../../components/faq/Faq"
import { Link } from "react-router-dom"
import Login from "../login/Login"


function Home() {

    const [produtos, setProdutos] = useState<Produto[]>([])

    async function recomendacao() {
        try {
            await recomendacaoSaudavel('/produtos/recomendacoes', setProdutos)
        } catch (error: any) {
            console.log("Erro ao buscar recomendações")
        }

    }

    useEffect(() => {
        recomendacao()
    }, [])

    return (
        <div className=" flex flex-col max-h-full">
            <div className="bg-[#B32B3B] flex flex-col justify-center items-center h-100 gap-4">
                <Titulo
                    texto="YOUR FOOD"
                    color="text-white"
                />
                <Texto
                    texto="Sua comida em qualquer hora e a qualquer lugar"
                    cor="text-white"
                />
                <div className="m-1">

                    <Link to={"/login"}>
                        <BotaoBranco
                            texto="Entrar"
                        />
                    </Link>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center min-h-48">
                <div className="pt-8">
                    <Titulo
                        texto="MAIS PROCURADOS"
                        color="text-black"
                    />
                </div>

                <div className="flex flex-row gap-4 ml-4 w-full py-8 overflow-x-auto justify-start md:justify-center pr-5 sm:pr-0">
                    <Link to={"/categorias"}>
                        <IconeRedondo
                            link="https://i.imgur.com/EmYFVh1.png" bgCor="bg-green-600" nome="Saladas" />
                    </Link>
                    
                    <Link to={"/categorias"}>
                        <IconeRedondo
                            link="https://i.imgur.com/vvfBypS.png" bgCor="bg-amber-500" nome="Sucos Naturais" />
                    </Link>

                    <Link to={"/categorias"}>
                        <IconeRedondo
                            link="https://i.imgur.com/ZKzZfyU.png" bgCor="bg-blue-500" nome="Vegano" />
                    </Link>

                    <Link to={"/categorias"}>
                        <IconeRedondo
                            link="https://i.imgur.com/MpmOH7u.png" bgCor="bg-red-500" nome="Hamburgúer" />
                    </Link>

                </div>
            </div>

            <div className="flex flex-col bg-green-600 justify-center items-center pt-8 min-h-100">
                <div className="flex flex-col gap-2 text-center">
                    <Titulo
                        texto="SOMOS MAIS"
                        color="text-white"
                    />
                    <Texto
                        texto="MAIS que apenas um Delivery, aqui nós pensamos na sua alimentação pensamos em VOCÊ"
                        cor="text-white"
                    />
                    <Link to={"/produtos"}>
                        <p className="text-white font-semibold underline cursor-pointer mb-6">Descubra produtos saudáveis</p>
                    </Link>

                </div>
                <div className="flex flex-row gap-2 pb-5 overflow-x-auto w-full justify-start md:justify-center ml-4 pr-5 sm:mr-0">
                    {produtos.map((produto) => (
                        <CardProduto
                            nome={produto.nome}
                            descricao={produto.descricao}
                            preco={produto.preco / 100}
                            url={produto.foto} />
                    ))}
                </div>
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="py-8">
                    <Titulo
                        texto="FAQ"
                    />
                </div>
                <Faq
                    pergunta="Como ter meu produto recomendado na página inicial?"
                    resposta="Nosso sistema de recomendação é aleatório, todos os produtos saudáveis podem ser recomendados."
                />

                <Faq
                    pergunta="Como é definido se um produto é saudavel?"
                    resposta="A identificação de um produto como saudável está vinculada à categoria 
                            em que ele foi registrado. Produtos cadastrados nas 
                            categorias Naturais ou Saladas, por exemplo, já são automaticamente 
                            classificados como saudáveis."
                />

                <Faq
                    pergunta="Como adiciono a foto do meu produto?"
                    resposta="Para adicionar a foto do seu produto, basta inserir o link da imagem no campo 
                            Foto durante o cadastro. No momento, nosso sistema não aceita upload direto 
                            de imagens, sendo necessário utilizar um link externo."
                />
            </div>
        </div>

    )
}

export default Home