import React, { useContext, useEffect, useState } from 'react'
import Titulo from '../../components/titulo/Titulo'
import BarraDePesquisa from '../../components/barradepesquisa/BarraDePesquisa'
import CardCategoria from '../../components/cardCategoria/CardCategoria'
import Categoria from '../../models/Categoria'
import { AuthContext } from '../../contexts/AuthContext'
import { buscar, deletar } from '../../services/service'
import { useNavigate } from 'react-router-dom'
import IconeRedondo from '../../components/iconeredondo/IconeRedondo'
import Produto from '../../models/Produto'
import CardListaProduto from '../../components/cardProduto/CardListaProduto'

function Produtos() {
    const navigate = useNavigate();
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const [produtos, setProdutos] = useState<Produto[]>([])

    const { usuario, handleLogout } = useContext(AuthContext)
    // const token = usuario.token

    const [token, setToken] = useState('Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyb290QHJvb3QuY29tIiwiaWF0IjoxNzM4NjM5MzMwLCJleHAiOjE3Mzg2NDI5MzB9.Y1j2Daf0oyAeJrWHOEPSopIRqGb45ymzrrza5QCMcaI')

    async function buscarProdutos() {
        try{
            await buscar('/produtos', setProdutos, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategorias, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

        async function deletarProduto(id:string) {
            try {
                await deletar(`/produtos/${id}`, { headers: { Authorization: token } });
                setProdutos(prev => prev.filter(cat => String(cat.id) !== id)); // Atualiza a lista sem recarregar
                alert('Produto deletado com sucesso!');
            } catch (error) {
                console.error(error);
                alert('Erro ao deletar o produto.');
            }
        }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado!')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        buscarCategorias()
    }, [])

    useEffect(() => {
        buscarProdutos()
    }, [produtos.length])

    function nada() {
        console.log("faz nada ainda")
    }

    return (
        <div className="flex flex-col items-center justify-center text-center">
            <Titulo texto="CATEGORIAS" />
    
            <div className="flex flex-row gap-4 pt-4 flex-wrap justify-center">
                {categorias.map((categoria) => (
                    <IconeRedondo
                        key={categoria.id}
                        link="https://i.imgur.com/vvfBypS.png"
                        bgCor="bg-green-300"
                        nome={categoria.descricao}
                    />
                ))}
            </div>
            <div className='pt-8'>
                <Titulo texto="PRODUTOS" />
            </div>
    
            <div className="pt-2 flex justify-center items-center w-full max-w-2xl">
                <BarraDePesquisa
                    searchValue=""
                    onAddClick={nada}
                    onSearchChange={nada}
                />
            </div>

            <div className="flex flex-col items-center justify-center pt-6 w-full max-w-3xl">
                <div className="flex flex-col gap-4 w-full">
                    {produtos.map((produto) => (
                        <CardListaProduto 
                            key={produto.id}
                            produto={produto}
                            onDelete={deletarProduto}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
    
}

export default Produtos
