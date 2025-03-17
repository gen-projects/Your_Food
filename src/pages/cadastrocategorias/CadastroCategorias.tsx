import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Modal from '../../components/modal/Modal';
import BotaoVermelho from '../../components/botao/BotaoVermelho';
import Categoria from '../../models/Categoria';
import { atualizar, buscar, cadastrar } from '../../services/service';
import { AuthContext } from '../../contexts/AuthContext';

function CadastroCategoria() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        descricao: '',
        foto: '',
        saudavel: false
    });

    const [isLoading, setIsLoading] = useState(false);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado');
            navigate('/');
        }
    }, [token]);

    async function buscarCategoriaPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, {
                headers: { Authorization: token }
            });
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout();
            } else {
                console.error("Erro ao buscar categoria:", error);
                alert('Erro ao buscar categoria');
            }
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarCategoriaPorId(id);
        }
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) {
        const { name, value } = e.target;
        setCategoria({
            ...categoria,
            [name]: name === 'saudavel' ? value === 'true' : value
        });
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        // Validando dados antes de enviar
        if (!categoria.descricao || !categoria.foto) {
            alert("Todos os campos são obrigatórios.");
            setIsLoading(false);
            return;
        }

        // Preparando a categoria para enviar, removendo campos desnecessários
        const categoriaParaEnviar = {
            descricao: categoria.descricao,
            foto: categoria.foto,
            saudavel: categoria.saudavel
        };

        if (id !== undefined) {
            try {
                await atualizar(`/categorias/${id}`, categoriaParaEnviar, setCategoria, {
                    headers: {
                        Authorization: token,
                    },
                });
                alert('Categoria atualizada com sucesso');
                navigate('/categorias'); // Redireciona após sucesso
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout();
                } else {
                    console.error("Erro ao atualizar categoria:", error);
                    alert('Erro ao processar a categoria');
                }
            }
        } else {
            try {
                await cadastrar(`/categorias`, categoriaParaEnviar, setCategoria, {
                    headers: { Authorization: token }
                });
                alert('Categoria cadastrada com sucesso');
                navigate('/categorias'); // Redireciona após sucesso
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout();
                } else {
                    console.error("Erro ao cadastrar categoria:", error);
                    alert('Erro ao cadastrar a categoria');
                }
            }
        }
        setIsLoading(false);
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <form onSubmit={gerarNovaCategoria}>
                    <h1 className="text-2xl font-bold text-center mb-4 font-oswald">
                        {id ? 'ATUALIZAR CATEGORIA' : 'CADASTRAR CATEGORIA'}
                    </h1>

                    <label className="text-lg font-semibold mb-2 text-[#B32B3B]">Descrição *</label>
                    <input
                        type="text"
                        name="descricao"
                        placeholder="Descrição da categoria"
                        value={categoria.descricao}
                        onChange={atualizarEstado}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                        required
                    />

                    <label className="text-lg font-semibold mb-2 text-[#B32B3B]">Foto *</label>
                    <input
                        type="text"
                        name="foto"
                        placeholder="Link da foto"
                        value={categoria.foto}
                        onChange={atualizarEstado}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                        required
                    />

                    <label className="text-lg font-semibold mb-2 text-[#B32B3B]">Saudável *</label>
                    <select
                        name="saudavel"
                        value={categoria.saudavel ? 'true' : 'false'}
                        onChange={atualizarEstado}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                        required
                    >
                        <option value="true">Sim</option>
                        <option value="false">Não</option>
                    </select>

                    <BotaoVermelho texto={id ? 'Atualizar Categoria' : 'Cadastrar Categoria'} />
                </form>
            </div>
        </div>
    );
}

export default CadastroCategoria;
