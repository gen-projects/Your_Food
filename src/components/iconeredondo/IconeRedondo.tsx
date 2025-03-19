interface iconeProps {
    bgCor?: string;
    alt?: string;
    link: string;
    nome?: string;
    onClick?: () => void;
}

function IconeRedondo(props: iconeProps) {
    return (
        <>
            <div 
                className="flex flex-col justify-center items-center cursor-pointer"
                onClick={props.onClick}
            >
                <div className="flex flex-col w-full items-center">
                    <div className={`${props.bgCor} w-26 h-26 rounded-full overflow-hidden`}>
                        <img
                            src={`${props.link}`}
                            className="w-full h-full object-contain hover:scale-105"
                            alt={`${props.alt}`}
                        />
                    </div>
                    <p className="line-clamp-1">{props.nome}</p>
                </div>
            </div>
        </>
    );
}

export default IconeRedondo;
