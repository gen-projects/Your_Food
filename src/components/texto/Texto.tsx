interface textoProps {
    cor?: string;
    texto: string;
}

function Texto(props: textoProps) {
    return(
        <>
            <p className={`${props.cor} text-3x1`}>{`${props.texto}`}</p>
        </>
    );
}

export default Texto;