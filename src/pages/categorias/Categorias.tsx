import React, { useContext, useEffect, useState } from 'react'
import Titulo from '../../components/titulo/Titulo'
import BarraDePesquisa from '../../components/barradepesquisa/BarraDePesquisa'
import Categoria from '../../models/Categoria'
import { AuthContext } from '../../contexts/AuthContext'
import { buscar, deletar } from '../../services/service'
import { useNavigate } from 'react-router-dom'
import CardListaCategoria from '../../components/cardCategoria/CardListaCategoria'

function Categorias() {
    const navigate = useNavigate();
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const [searchTerm, setSearchTerm] = useState<string>(''); // Estado para pesquisa

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

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

    async function deletarCategoria(id: string) {
        try {
            await deletar(`/categorias/${id}`, { headers: { Authorization: token } });
            setCategorias(prev => prev.filter(cat => String(cat.id) !== id)); // Atualiza a lista sem recarregar
            alert('Categoria deletada com sucesso!');
        } catch (error) {
            console.error(error);
            alert('Erro ao deletar a categoria.');
        }
    }

    function editarCategoria(id: number) {
        navigate(`/editarcategoria/${id}`); // Redireciona para a rota de edição
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado!')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        buscarCategorias()
    }, [categorias.length])

    // Função para atualizar o termo de pesquisa
    function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchTerm(event.target.value);
    }

    const handleAddClick = () => {
        navigate("/cadastrarcategoria"); // Navega para a nova página
    };

    return (
        <div className='pt-10 flex flex-col items-center justify-center text-center'>
            <Titulo texto='CATEGORIAS' />
            <div className='pt-4 flex justify-center items-center w-[90vw] sm:w-full max-w-2xl '>
                <BarraDePesquisa
                    searchValue={searchTerm}
                    onAddClick={handleAddClick}
                    onSearchChange={handleSearchChange}
                />
            </div>

            <div className='flex flex-col text-start items-center justify-center'>
                <div className='flex flex-col pt-4 gap-3 w-[90vw] sm:w-full '>
                    {categorias
                        .filter(categoria =>
                            categoria.descricao.toLowerCase().includes(searchTerm.toLowerCase()) // Filtro de pesquisa por nome da categoria
                        )
                        .map((categoria) => (
                            <CardListaCategoria 
                                key={categoria.id}
                                categoria={categoria}
                                onDelete={deletarCategoria}
                                onEdit={editarCategoria}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Categorias
