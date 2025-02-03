interface BotaoProps {
    texto: string;
    onClick?: () => void;
}

function BotaoVermelho(props: BotaoProps) {
    return (
        <button
            onClick={props.onClick}
            className="bg-[#B32B3B] text-white font-bold rounded-full px-6 py-2 hover:bg-[#9e2a2a] transition-colors duration-200"
        >
            {props.texto}
        </button>
    );
}

export default BotaoVermelho;
