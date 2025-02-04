import React from "react";
import { FaHome, FaSearch, FaUser } from "react-icons/fa";

const FooterLogado = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Conteúdo da página */}
      </main>
      <footer className="bg-white py-4 text-center shadow-lg mt-6">
        <div className="border-t border-gray-300 pt-4">
          <div className="flex justify-center space-x-20 mb-2 flex-wrap">
            <a
              href="/home" // Ou o link adequado para a página inicial
              className="text-black hover:text-black transition"
            >
              <FaHome size={24} />
            </a>
            <a
              href="/search" // Ou o link adequado para a página de pesquisa
              className="text-black hover:text-black transition"
            >
              <FaSearch size={24} />
            </a>
            <a
              href="/profile" // Ou o link adequado para a página de perfil
              className="text-black hover:text-black transition"
            >
              <FaUser size={24} />
            </a>
          </div>
          <p className="text-sm text-black">
            &copy; 2025 Your Food | Todos os Direitos Reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FooterLogado;
