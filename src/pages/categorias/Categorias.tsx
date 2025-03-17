import React, { useContext, useEffect, useState } from 'react'
import Titulo from '../../components/titulo/Titulo'
import BarraDePesquisa from '../../components/barradepesquisa/BarraDePesquisa'
import CardCategoria from '../../components/cardCategoria/CardCategoria'
import Categoria from '../../models/Categoria'
import { AuthContext } from '../../contexts/AuthContext'
import { buscar, deletar } from '../../services/service'
import { useNavigate } from 'react-router-dom'
import CardListaCategoria from '../../components/cardCategoria/CardListaCategoria'

function Categorias() {
    const navigate = useNavigate();
    const [categorias, setCategorias] = useState<Categoria[]>([])

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

    async function deletarCategoria(id:string) {
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

    function nada() {
        console.log("faz nada ainda")
    }

    const handleAddClick = () => {
        navigate("/cadastrarcategoria"); // Navega para a nova página
    };

    return (
        <div className='flex flex-col items-center justify-center text-center'>
            <Titulo texto='CATEGORIAS' />
            <div className='pt-4 flex justify-center items-center w-full max-w-2xl'>
                <BarraDePesquisa
                    searchValue=''
                    onAddClick={handleAddClick}
                    onSearchChange={nada}
                />
            </div>

            <div className='flex flex-col text-start items-center justify-center'>
                <div className='flex flex-col pt-4 gap-3'>
                    {categorias.map((categoria) =>{
                        return(
                            <CardListaCategoria 
                                key={categoria.id}
                                categoria={categoria}
                                url={categoria.foto}
                                onDelete={deletarCategoria}
                                onEdit={editarCategoria}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Categorias
