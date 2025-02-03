import { MutatingDots } from "react-loader-spinner";

interface BotaoProps {
  texto: string;
  onClick?: () => void;
  isLoading?: boolean;
}

function BotaoVermelho({
  texto,
  onClick = function () {},
  isLoading = false,
}: BotaoProps) {
  return (
    <button
      onClick={onClick}
      className="bg-[#B32B3B] w-full text-white font-bold rounded-full 
      px-6 py-2 hover:bg-[#9e2a2a] transition-colors duration-200 cursor-pointer"
    >
      {isLoading ? (
        <div className="flex justify-center items-center">
          <MutatingDots color="#ffffff" secondaryColor="#9e2a2a" />
        </div>
      ) : (
        texto
      )}
    </button>
  );
}

export default BotaoVermelho;
