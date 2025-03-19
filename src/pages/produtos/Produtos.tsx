import React, { useContext, useEffect, useState } from 'react'
import Titulo from '../../components/titulo/Titulo'
import BarraDePesquisa from '../../components/barradepesquisa/BarraDePesquisa'
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
    const [categoriaSelecionada, setCategoriaSelecionada] = useState<number | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>(''); // Estado para pesquisa

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarProdutos() {
        try {
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

    async function deletarProduto(id: string) {
        try {
            await deletar(`/produtos/${id}`, { headers: { Authorization: token } });
            setProdutos(prev => prev.filter(cat => String(cat.id) !== id));
            alert('Produto deletado com sucesso!');
        } catch (error) {
            console.error(error);
            alert('Erro ao deletar o produto.');
        }
    }

    function editarProduto(id: number) {
        navigate(`/editarproduto/${id}`);
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

    const handleAddClick = () => {
        navigate("/cadastrarproduto");
    };

    function filtrarPorCategoria(idCategoria: number) {
        if (categoriaSelecionada === idCategoria) {
            setCategoriaSelecionada(null);
        } else {
            setCategoriaSelecionada(idCategoria);
        }
    }

    // Função para atualizar o termo de pesquisa
    function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchTerm(event.target.value);
    }

    return (
        <div className="pt-10 flex flex-col items-center justify-center text-center">
            <Titulo texto="CATEGORIAS" />

            <div className="flex flex-row gap-4 ml-4 w-full py-8 overflow-x-auto
                            justify-start md:justify-center pr-5 sm:pr-0">
                {categorias.map((categoria) => (
                    <IconeRedondo
                        key={categoria.id}
                        link={categoria.foto}
                        bgCor="bg-green-300"
                        nome={categoria.descricao}
                        onClick={() => filtrarPorCategoria(categoria.id)}
                    />
                ))}
            </div>

            <div className='pt-8'>
                <Titulo texto="PRODUTOS" />
            </div>

            <div className="pt-2 flex justify-center items-center w-[90vw] sm:w-full max-w-2xl">
                <BarraDePesquisa
                    searchValue={searchTerm}
                    onAddClick={handleAddClick}
                    onSearchChange={handleSearchChange}
                />
            </div>

            <div className="flex flex-col items-center justify-center pt-6 w-full max-w-3xl">
                <div className="flex flex-col gap-4 w-[90%] sm:w-full">
                    {produtos
                        .filter(produto =>
                            (categoriaSelecionada === null || produto.categoria?.id === categoriaSelecionada) &&
                            produto.nome.toLowerCase().includes(searchTerm.toLowerCase()) // Filtro por nome
                        )
                        .map((produto) => (
                            <CardListaProduto
                                key={produto.id}
                                produto={produto}
                                onDelete={deletarProduto}
                                onEdit={editarProduto}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Produtos
