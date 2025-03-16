import { ChangeEvent, useContext, useEffect, useState } from 'react';
import BotaoVermelho from '../../components/botao/BotaoVermelho';
import { useNavigate, useParams } from 'react-router-dom';
import { atualizar, buscar, cadastrar } from '../../services/service';
import Categoria from '../../models/Categoria';
import { AuthContext } from '../../contexts/AuthContext';

function CadastroCategorias() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        descricao: '',
        saudavel: false,
        foto: ''
    })

    const { id } = useParams<{ id: string }>()
    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarCategoriaPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado');
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarCategoriaPorId(id)
        }
    }, [id])


    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.type === 'checkbox') {
            setCategoria({
                ...categoria,
                [e.target.name]: e.target.checked
            });
        } else {
            setCategoria({
                ...categoria,
                [e.target.name]: e.target.value
            });
        }
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)
    
        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categoria, setCategoria, {
                    headers: {
                        Authorization: token,
                    },
                });
                navigate("/categorias")
                alert('Categoria atualizada com sucesso')
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout()
                } else {
                    alert('Erro ao atualizar a Categoria')
                }
            }
        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria, {
                    headers: {
                        Authorization: token,
                    },
                })
                alert('Categoria cadastrada com sucesso');
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout()
                } else {
                    alert('Erro ao cadastrar a Categoria');
                }
            }
        }
        navigate('/categorias')
        setIsLoading(false)
    }
    
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <form onSubmit={gerarNovaCategoria}>
                    <h1 className="text-2xl font-bold text-center mb-4 font-oswald">
                        {id ? 'ATUALIZAR CATEGORIA' : 'CADASTRAR CATEGORIA'}
                    </h1>
    
                    <h2 className="text-lg font-semibold mb-2 text-[#B32B3B]">Descrição *</h2>
                    <input
                        type="text"
                        id="descricao"
                        name="descricao"
                        placeholder="Descrição da categoria:"
                        value={categoria.descricao}
                        onChange={atualizarEstado}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                    />
    
                    <h2 className="text-lg font-semibold mb-2 text-[#B32B3B]">É saudável? *</h2>
                    <input
                        type="checkbox"
                        id="saudavel"
                        name="saudavel"
                        checked={categoria.saudavel}
                        onChange={atualizarEstado}
                        className="mb-4 ml-2"
                    />
    
                    <h2 className="text-lg font-semibold mb-2 text-[#B32B3B]">Foto *</h2>
                    <input
                        type="text"
                        id="foto"
                        name="foto"
                        placeholder="URL da foto"
                        value={categoria.foto}
                        onChange={atualizarEstado}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                    />
    
                    <BotaoVermelho texto={id ? "Atualizar Categoria" : "Cadastrar Categoria"} />
                </form>
            </div>
        </div>
    );
};

export default CadastroCategorias;