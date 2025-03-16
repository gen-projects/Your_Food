import Logo from "../../assets/images/icon_vermelho_bg_branco.png";
import bianca from "../../assets/images/bianca.jpeg";
import dandara from "../../assets/images/dandara.jpeg";
import gabriel from "../../assets/images/gabriel.jpeg";
import keven from "../../assets/images/keven.jpeg";
import matheus from "../../assets/images/matheus.jpeg";

import { useState, useEffect } from "react";

function Sobre() {
    const [isVisible, setIsVisible] = useState({
        mission: false,
        history: false,
        values: false,
        team: false
    });

    // Animation on scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.animate-section');
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                const isInViewport = rect.top <= window.innerHeight * 0.8;

                if (isInViewport) {
                    const sectionId = section.getAttribute('data-section');
                    setIsVisible(prev => ({ ...prev, [sectionId]: true }));
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        // Trigger once on load
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-50 font-sans">
            {/* Header com gradiente e animação */}
            <div className="relative rounded-xl overflow-hidden mb-12 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-90"></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjEuNSIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')] opacity-30"></div>
                <div className="relative py-16 px-6 text-center">
                    <div className="animate-fade-down">
                        <img src={Logo} className="mx-auto w-24 h-24 rounded-full border-4 border-white shadow-lg mb-6" alt="Logo YourFood" />
                        <h1 className="text-4xl font-bold text-white mb-2">Sobre nós</h1>
                        <div className="w-24 h-1 bg-white mx-auto mt-4 rounded-full"></div>
                        <p className="text-white text-opacity-90 mt-4 max-w-lg mx-auto">Saiba como estamos transformando a maneira como você se alimenta</p>
                    </div>
                </div>
            </div>

            {/* Nossa Missão - Card com efeito */}
            <div
                className={`animate-section bg-white rounded-xl shadow-lg overflow-hidden mb-16 transform transition-all duration-700 ${isVisible.mission ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                data-section="mission"
            >
                <div className="bg-gradient-to-r from-red-600 to-red-800 p-1"></div>
                <div className="p-8">
                    <div className="flex items-center mb-6">
                        <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4 shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">Nossa Missão</h3>
                    </div>
                    <div className="space-y-4 text-gray-700">
                        <p className="italic border-l-4 border-red-200 pl-4 py-2 bg-red-50 bg-opacity-50 rounded-r-lg">Imagine um aplicativo que entende você...</p>
                        <p className="italic border-l-4 border-red-300 pl-4 py-2 bg-red-50 bg-opacity-60 rounded-r-lg">Uma solução que vai além de conveniência, pensando no seu bem-estar.</p>
                        <p className="italic border-l-4 border-red-400 pl-4 py-2 bg-red-50 bg-opacity-70 rounded-r-lg">Um aliado na busca por uma alimentação saudável e equilibrada.</p>
                        <p className="italic border-l-4 border-red-500 pl-4 py-2 bg-red-50 bg-opacity-80 rounded-r-lg">Que faz escolhas inteligentes e sugere o melhor para você.</p>
                        <p className="font-semibold border-l-4 border-red-600 pl-4 py-3 bg-red-50 bg-opacity-90 rounded-r-lg shadow-sm">YourFood: seu parceiro para uma vida mais saudável e prática.</p>
                    </div>
                </div>
            </div>

            {/* Nossa história - Seção com imagem de fundo */}
            <div
                className={`animate-section relative bg-gray-900 rounded-xl overflow-hidden mb-16 shadow-xl transform transition-all duration-700 ${isVisible.history ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                data-section="history"
            >
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIwLjUiIGZpbGw9Im5vbmUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
                <div className="relative p-8">
                    <div className="text-center mb-6">
                        <h3 className="text-3xl font-bold text-white">Nossa história</h3>
                        <div className="w-24 h-1 bg-red-500 mx-auto mt-3 rounded-full"></div>
                    </div>
                    <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm text-gray border border-gray border-opacity-20 shadow-lg">
                        <p className="leading-relaxed text-lg">
                            Nossa jornada começou com uma simples pergunta: <span className="text-red-300 font-semibold">como podemos ajudar as pessoas a se alimentarem melhor, mesmo em uma rotina agitada?</span> Com essa missão, criamos o YourFood, um app que combina tecnologia de ponta e um profundo cuidado com o bem-estar. Nossa equipe está comprometida em oferecer soluções práticas que tornem a alimentação saudável uma escolha fácil e acessível para todos.
                        </p>
                    </div>
                    <div className="mt-6 flex justify-center">
                        <div className="bg-red-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Desde 2024
                        </div>
                    </div>
                </div>
            </div>

            {/* Nossos valores - Cards interativos */}
            <div
                className={`animate-section mb-16 transform transition-all duration-700 ${isVisible.values ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                data-section="values"
            >
                <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-gray-800">Nossos valores</h3>
                    <div className="w-24 h-1 bg-green-500 mx-auto mt-3 rounded-full"></div>
                    <p className="text-gray-600 mt-4 text-lg">O PIER que sustenta nossa missão</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4 shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-800">Protagonismo</h4>
                        </div>
                        <p className="text-gray-600 pl-16">Colocamos você no centro das decisões, com recomendações personalizadas que respeitam suas preferências e necessidades.</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4 shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-800">Inovação</h4>
                        </div>
                        <p className="text-gray-600 pl-16">Tecnologia de ponta para simplificar sua vida, usando inteligência artificial para entender seus hábitos alimentares.</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4 shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-800">Empatia</h4>
                        </div>
                        <p className="text-gray-600 pl-16">Cuidamos do que importa para você, compreendendo suas restrições, preferências e objetivos alimentares.</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4 shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-800">Responsabilidade</h4>
                        </div>
                        <p className="text-gray-600 pl-16">Compromisso com sua saúde, oferecendo informações nutricionais precisas e recomendações com embasamento científico.</p>
                    </div>
                </div>

                <div className="mt-8 bg-gradient-to-r from-green-50 to-green-100 p-5 rounded-xl border border-green-200 text-center shadow-sm">
                    <p className="text-gray-700 text-lg">Estamos ao seu lado na correria do dia-a-dia e nos momentos de cuidado e reflexão.</p>
                </div>
            </div>

            {/* Nossos Yfooders - Grid com card hover effect */}
            <div
                className={`animate-section mb-16 transform transition-all duration-700 ${isVisible.team ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                data-section="team"
            >
                <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-gray-800">Nossos YourChefs</h3>
                    <div className="w-24 h-1 bg-red-500 mx-auto mt-3 rounded-full"></div>
                    <p className="text-gray-600 mt-4 text-lg">A equipe apaixonada por trás do YourFood</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {[
                        { name: "Bianca Soares", role: "Desenvolvedora", quote: "Usando a tecnologia para impactar vidas", image: bianca, linkedin: "https://www.linkedin.com/in/biancasuarz/" },
                        { name: "Dandara Medeiros", role: "Desenvolvedora", quote: "Alimentação é o primeiro passo para o bem-estar", image: dandara, linkedin: "https://www.linkedin.com/in/dandaramedeiros/" },
                        { name: "Gabriel Jonatas", role: "Desenvolvedor", quote: "A tecnologia a serviço da sua saúde", image: gabriel, linkedin: "https://www.linkedin.com/in/gabrieljonatas/" },
                        { name: "Keven Martineli", role: "Desenvolvedor & Designer UX", quote: "Experiências que transformam hábitos", image: keven, linkedin: "https://www.linkedin.com/in/keven-martineli/" },
                        { name: "Matheus Torres", role: "Desenvolvedor", quote: "Conectando pessoas a alimentos saudáveis", image: matheus, linkedin: "https://www.linkedin.com/in/omatheustorres/" }
                    ].map((member, index) => (
                        <a
                            key={index}
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                                <div className="bg-gradient-to-r from-red-600 to-red-700 h-2"></div>
                                <div className="p-6 text-center">
                                    <div className="relative mb-2">
                                        <div className="absolute inset-0 bg-gradient-to-r rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                                        <img src={member.image} className="rounded-full w-28 h-28 mx-auto border-4 border-white shadow-md object-cover" alt={member.name} />
                                    </div>
                                    <h4 className="font-bold text-xl mt-4 text-gray-800">{member.name}</h4>
                                    <p className="text-red-600 font-medium text-sm mb-2">{member.role}</p>
                                    <p className="text-gray-500 text-sm italic opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">"{member.quote}"</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </div >
    );
}

export default Sobre;
