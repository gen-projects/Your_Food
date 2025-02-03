import { MutatingDots } from "react-loader-spinner";

interface BotaoProps {
  texto: string;
  onClick?: () => void;
  isLoading?: boolean; 
}

function BotaoBranco({ texto,  onClick = function() {}, isLoading = false }: BotaoProps) {
  return (
    <button
      onClick={onClick}
      className="bg-white text-black w-full font-bold rounded-full px-6 py-2 hover:bg-gray-200 transition-colors duration-200"
    >
      {isLoading ? (
        <div className="flex justify-center items-center">
          <MutatingDots color="#d10606" secondaryColor="#4b0101" />
        </div>
      ) : (
        texto
      )}
    </button>
  );
}

export default BotaoBranco;