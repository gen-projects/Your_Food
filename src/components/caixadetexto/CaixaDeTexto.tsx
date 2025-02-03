import { ChangeEvent } from "react";

/**
 * Propriedades aceitas pelo componente CaixaDeTexto
 */
interface CaixaDeTextoProps {
  /**
   * Tipo do input (ex: "text", "password", "email", etc.)
   * @default "text"
   */
  type?: string;

  /**
   * ID do campo de entrada (deve ser único)
   */
  id: string;

  /**
   * Nome do campo de entrada (usado em formulários)
   */
  name: string;

  /**
   * Texto que aparece como placeholder e rótulo flutuante
   */
  placeholder: string;

  /**
   * Valor atual do campo (controlado pelo estado do React)
   */
  value: string;

  /**
   * Função chamada quando o valor do input muda
   */
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Componente de caixa de texto estilizada com rótulo flutuante.
 * 
 * @param {CaixaDeTextoProps} props - Propriedades do componente
 * @returns JSX.Element
 */
function CaixaDeTexto({
  type = "text",
  id,
  name,
  placeholder,
  value,
  onChange,
}: CaixaDeTextoProps) {
  return (
    <div className="relative flex flex-col w-full">
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className="peer h-10 w-full border-b-2 border-zinc-300 text-zinc-400 
          bg-transparent focus:outline-none focus:border-zinc-950 focus:text-gray-800"
        value={value}
        onChange={onChange}
      />
      <label
        className="absolute left-0 -top-3.5 text-zinc-500 text-sm 
          transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-400 
          peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-zinc-950 
          peer-focus:text-sm"
        htmlFor={id}
      >
      </label>
    </div>
  );
}

export default CaixaDeTexto;
