interface textoProps {
    cor?: string;
    texto: string;
}

function Texto(props: textoProps) {
    return(
        <>
            <p className={`${props.cor}`}>{`${props.texto}`}</p>
        </>
    );
}

export default Texto;