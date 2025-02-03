interface subtituloProps {
    color?: string;
    texto: string;
}

function Subtitulo(props: subtituloProps) {
    return (
        <>
            <h2 className={`${props.color} font-bold`}>{props.texto}</h2>
        </>
    );
}

export default Subtitulo;