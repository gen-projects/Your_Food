import React from "react";
import { ChangeEvent } from "react";
import { MagnifyingGlass, Plus } from "@phosphor-icons/react";

/**
 * Propriedades aceitas pelo componente BarraDePesquisa
 */
interface BarraDePesquisaProps {
  /**
   * Valor atual do campo de pesquisa (controlado pelo estado do React)
   */
  searchValue: string;

  /**
   * Função chamada quando o valor do campo de pesquisa muda
   */
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;

  /**
   * Função chamada ao clicar no botão "+"
   */
  onAddClick: () => void;

  /**
   * Placeholder para o campo de pesquisa
   * @default "Pesquisar..."
   */
  placeholder?: string;
}

/**
 * Componente de barra de pesquisa com ícone de lupa e botão "+".
 * 
 * @param {BarraDePesquisaProps} props - Propriedades do componente
 * @returns JSX.Element
 */
const BarraDePesquisa: React.FC<BarraDePesquisaProps> = ({
  searchValue,
  onSearchChange,
  onAddClick,
  placeholder = "Pesquisar...",
}) => {
  return (
    <div className="flex items-center w-full bg-gray-100 rounded-full shadow-md p-2">
      {/* Campo de pesquisa */}
      <div className="flex items-center w-full">
        <MagnifyingGlass className="text-gray-500 mr-2" size={20} />
        <input
          type="text"
          value={searchValue}
          onChange={onSearchChange}
          placeholder={placeholder}
          className="bg-transparent focus:outline-none w-full text-gray-800"
        />
      </div>
      {/* Botão "+" */}
      <button
        onClick={onAddClick}
        className="ml-2 p-2 bg-white rounded-full shadow hover:shadow-md active:scale-95 transition-all"
      >
        <Plus size={20} className="text-gray-500" />
      </button>
    </div>
  );
};

export default BarraDePesquisa;
