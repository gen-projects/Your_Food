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
import Cadastro from '../cadastro/Cadastro'

function Produtos() {
    const navigate = useNavigate();
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const [produtos, setProdutos] = useState<Produto[]>([])

    const [mostrarCadastro, setMostrarCadastro] = useState(false);//usado para barra de pesquisa

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

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

        function editarProduto(id: number) {
            navigate(`/editarproduto/${id}`); // Redireciona para a rota de edição
        }
        

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado!')
            navigate('/login')
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

    const handleAddClick = () => {
        navigate("/cadastrarproduto"); // Navega para a nova página
    };

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
                    onAddClick={handleAddClick}
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
                            onEdit={editarProduto}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
    
}

export default Produtos
