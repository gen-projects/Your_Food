interface iconeProps {
    bgCor?: string;
    alt?:string;
    link: string;
    nome?: string;
}

function IconeRedondo(props: iconeProps) {
    return (
        <>
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col w-full items-center">
                <div className={`${props.bgCor} w-26 h-26 rounded-full`}>
                    <img 
                        src={`${props.link}`} 
                        className="w-full h-full object-contain" 
                        alt={`${props.alt}`}
                    />
                </div>
                    <p>{props.nome}</p>
            </div>
        </div>
        </>
    );
}

export default IconeRedondo;