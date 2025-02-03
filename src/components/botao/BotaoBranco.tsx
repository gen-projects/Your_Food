interface BotaoProps {
    texto: string;
    onClick?: () => void;
}

function BotaoBranco(props: BotaoProps) {
    return (
        <button
            onClick={props.onClick}
            className="bg-white text-black font-bold rounded-full px-6 py-2 hover:bg-gray-200 transition-colors duration-200"
        >
            {props.texto}
        </button>
    );
}

export default BotaoBranco;
