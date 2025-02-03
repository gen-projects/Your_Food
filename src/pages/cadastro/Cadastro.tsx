// src/CadastroProduto.tsx
import React from 'react';
import Modal from '../../components/modal/Modal';
import BotaoVermelho from '../../components/botao/BotaoVermelho';

const Cadastro: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-bold text-center mb-4">Cadastrar Produto</h1>

                <h2 className="text-lg font-semibold mb-2 text-[#B32B3B]">Loja *</h2>
                <input
                    type="text"
                    id="loja"
                    placeholder="Nome da loja:"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                />

                <h2 className="text-lg font-semibold mb-2 text-[#B32B3B]">Produto *</h2>
                <input
                    type="text"
                    id="produto"
                    placeholder="Nome do produto:"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                />

                <h2 className="text-lg font-semibold mb-2 text-[#B32B3B]">Foto *</h2>
                <input
                    type="text"
                    id="foto"
                    placeholder="Link da foto do produto:"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                />

                <h2 className="text-lg font-semibold mb-2 text-[#B32B3B]">Categoria *</h2>
                <input
                    type="text"
                    id="categoria"
                    placeholder="Categoria do produto:"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                />


                <h2 className="text-lg font-semibold mb-2 text-[#B32B3B]">Descrição *</h2>
                <input
                    type="text"
                    id="descrição"
                    placeholder="Descrição do produto:"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                />

                <Modal label="Abrir Modal">
                 <BotaoVermelho texto="Adicionar"/>
                </Modal>

            </div>
        </div>
    );
};

export default Cadastro;