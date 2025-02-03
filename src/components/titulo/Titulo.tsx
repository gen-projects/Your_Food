interface tituloProps {
    color?: string;
    texto: string;
}

function Titulo(props: tituloProps) {
    return (
        <>
            <h1 className={`${props.color} font-bold text-4xl`}>{props.texto}</h1>
        </>
    );
}

export default Titulo;