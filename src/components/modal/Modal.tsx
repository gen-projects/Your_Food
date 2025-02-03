import Popup from "reactjs-popup";
import BotaoVermelho from "../botao/BotaoVermelho";

interface ModalProps {
    label: string;
    children: React.ReactNode;
}

function Modal({ label, children }: ModalProps) {
    return (
        <Popup
            trigger={
                <BotaoVermelho texto={label}/>
            }
            modal
        >
            {children}
        </Popup>
    );
}

export default Modal;