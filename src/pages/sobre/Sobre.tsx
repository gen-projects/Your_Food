import IconeRedondo from "../../components/iconeredondo/IconeRedondo";
import Subtitulo from "../../components/subtitulo/Subtitulo";
import Texto from "../../components/texto/Texto";
import Logo from "../../assets/images/icon_vermelho_bg_branco.png";
import Yfooder from "../../assets/images/17004.png";

function Sobre() {
    return (
        <div className="p-4">
            {/* Seção "Sobre nós" */}
            <div className="text-center">
                <Subtitulo texto="Sobre nós" />
            </div>

            <div className="bg-red-700 p-4 text-white rounded-lg space-y-2">
                <Texto texto="Imagine..." />
                <Texto texto="Uma solução digital inovadora e prática" />
                <Texto texto="Versátil e que traz economia de tempo" />
                <Texto texto="E o principal, não só Food, mas saúde" />
                <Texto texto="A Your Food é tudo isso e muito mais" />
            </div>

            {/* Seção "Nossa história" */}
            <div className="mt-6 text-center">
                <Subtitulo texto="Nossa história" />
            </div>

            <div className="mt-2 text-justify">
                <Texto 
                    texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut eleifend urna, sit amet pellentesque sem. Nullam posuere est neque, in tincidunt ligula aliquam in. Sed sed ex est. Nunc venenatis ultrices arcu vitae finibus. Donec facilisis, est eget vehicula pellentesque, dui massa sollicitudin orci, non aliquet felis neque vitae nulla. Duis ac mauris pulvinar, malesuada mauris vel, viverra augue. Maecenas a orci tristique, suscipit sapien et, elementum leo. Suspendisse tristique eros eu sem laoreet, sit amet pharetra ipsum fermentum. Mauris sem ipsum, faucibus vitae odio a, commodo convallis enim. Suspendisse eu velit libero. Aenean eget dolor pretium, posuere ex eu, lobortis mauris. Fusce viverra ante in magna sodales ultricies."
                />
            </div>

            {/* Seção "Nossos valores" */}
            <div className="mt-6 mb-5 text-center">
                <Subtitulo texto="Nossos valores" />
            </div>

            <div className="bg-green-400 p-6 rounded-lg text-white">
                <div className="flex items-center justify-center mb-4">
                    <img src={Logo} className="rounded-full w-35 h-35 lg:w-50 lg:h-50" alt="Logo da YourFood com letras vermelhas e fundo branco"/>
                    <div className="ml-4 space-y-1 text-left">
                        <Texto texto="Protagonismo" />
                        <Texto texto="Inovação" />
                        <Texto texto="Empatia" />
                        <Texto texto="Responsabilidade" />
                    </div>
                </div>

                <div className="text-left space-y-2">
                    <Texto texto="Nossos valores são o PIER que conecta você aos nossos produtos" />
                </div>

                <div className="mt-5">
                    <Texto texto="Conte conosco" />
                    <Texto texto="Seja no dia-a-dia" />
                    <Texto texto="Ou nos momentos especiais" />
                </div>
            </div>

            {/* Seção "Nossos Yfooders" */}
            <div className="mt-6 text-center">
                <Subtitulo texto="Nossos Yfooders" />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="flex flex-col items-center">
                <img src={Yfooder} className="rounded-full w-35 h-35 lg:w-50 lg:h-50"/>
                    <Texto texto="Dev" />
                </div>
                <div className="flex flex-col items-center">
                <img src={Yfooder} className="rounded-full w-35 h-35 lg:w-50 lg:h-50"/>
                    <Texto texto="Dev" />
                </div>
                <div className="flex flex-col items-center">
                <img src={Yfooder} className="rounded-full w-35 h-35 lg:w-50 lg:h-50"/>
                    <Texto texto="Scrum Master" />
                </div>
                <div className="flex flex-col items-center">
                <img src={Yfooder} className="rounded-full w-35 h-35 lg:w-50 lg:h-50"/>
                    <Texto texto="Tester" />
                </div>
                <div className="flex flex-col items-center col-span-2">
                <img src={Yfooder} className="rounded-full w-35 h-35 lg:w-50 lg:h-50"/>
                    <Texto texto="P.O" />
                </div>
            </div>
        </div>
    );
}

export default Sobre;
