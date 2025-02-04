import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import Modal from '../../components/modal/Modal';
import BotaoVermelho from '../../components/botao/BotaoVermelho';
import Produto from '../../models/Produto';
import { useNavigate, useParams } from 'react-router-dom';
import { atualizar, buscar, cadastrar } from '../../services/service';
import Categoria from '../../models/Categoria';
import { AuthContext } from '../../contexts/AuthContext';

function Cadastro(){

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categorias, setCategorias] = useState<Categoria[]>([])

    const [categoria, setCategoria] = useState<Categoria>({ id: 0, descricao: '', saudavel: false })
    const [produto, setProduto] = useState<Produto>({} as Produto)

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarProdutoPorId(id: string) {
        try {
            await buscar(`/produtos/${id}`, setProduto, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

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

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado');
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        buscarCategorias()

        if (id !== undefined) {
            buscarProdutoPorId(id)
        }
    }, [id])

    useEffect(() => {
        setProduto({
            ...produto,
            categoria: categoria,
        })
    }, [categoria])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria,
            usuario: usuario,
        });
    }

    async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/produtos`, produto, setProduto, {
                    headers: {
                        Authorization: token,
                    },
                });

                alert('Produto atualizada com sucesso')

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout()
                } else {
                    alert('Erro ao atualizar o Produto')
                }
            }

        } else {
            try {
                await cadastrar(`/produtos`, produto, setProduto, {
                    headers: {
                        Authorization: token,
                    },
                })

                alert('Produto cadastrado com sucesso');

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout()
                } else {
                    console.log(produto); // Verifique a estrutura do objeto antes de enviar
                    alert('Erro ao cadastrar o Produto');
                }
            }
        }

        setIsLoading(false)
    }

    const carregandoCategoria = categoria.descricao === '';

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <form action="" onSubmit={gerarNovoProduto}>

                    <h1 className="text-2xl font-bold text-center mb-4 font-oswald">CADASTRAR PRODUTO</h1>

                    <h2 className="text-lg font-semibold mb-2 text-[#B32B3B]">Produto *</h2>
                    <input
                        type="text"
                        id="produto"
                        name="nome"  // Definindo o nome correto para atualizar o estado
                        placeholder="Nome do produto:"
                        value={produto.nome || ''}
                        onChange={atualizarEstado}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                    />

                    <h2 className="text-lg font-semibold mb-2 text-[#B32B3B]">Descrição *</h2>
                    <input
                        type="text"
                        id="descrição"
                        name="descricao"
                        placeholder="Descrição do produto:"
                        value={produto.descricao || ''}
                        onChange={atualizarEstado}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                    />

                    <h2 className="text-lg font-semibold mb-2 text-[#B32B3B]">Preço *</h2>
                    <input
                        type="number"
                        id="preco"
                        name="preco"
                        placeholder="Preço do produto em centavos:"
                        value={produto.preco || ''}
                        onChange={atualizarEstado}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                    />

                    <h2 className="text-lg font-semibold mb-2 text-[#B32B3B]">Loja *</h2>
                    <input
                        type="text"
                        id="loja"
                        name="loja"
                        placeholder="Nome da loja:"
                        value={produto.loja || ''}
                        onChange={atualizarEstado}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                    />

                    <h2 className="text-lg font-semibold mb-2 text-[#B32B3B]">Categoria *</h2>
                    <select name="tema" id="tema" className='border p-2 mb-4 border-slate-800 rounded'
                        onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
                    >
                        <option value="" selected disabled>Selecione um Tema</option>

                        {categorias.map((categoria) => (
                            <>
                                <option value={categoria.id} >{categoria.descricao}</option>
                            </>
                        ))}

                    </select>

                    <BotaoVermelho texto="Adicionar" />

                </form>

            </div>
        </div>
    );
};

export default Cadastro;