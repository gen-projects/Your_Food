interface iconeProps {
    bgCor?: string;
    alt?:string;
    link: string;
}

function IconeRedondo(props: iconeProps) {
    return (
        <>
            <img src={`${props.link}`} className={`${props.bgCor} rounded-full size-3/20`} alt={`${props.alt}`}/>
        </>
    );
}

export default IconeRedondo;