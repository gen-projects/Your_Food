interface subtituloProps {
    color?: string;
    texto: string;
}

function Titulo(props: subtituloProps) {
    return (
        <>
            <h1 className={`${props.color} font-bold`}>{props.texto}</h1>
        </>
    );
}

export default Titulo;