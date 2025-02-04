import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const FooterPrincipal = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Conteúdo da página */}
      </main>
      <footer className="bg-white py-4 text-center shadow-lg mt-6">
        <div className="flex justify-center space-x-6 mb-2 flex-wrap">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-black transition"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-black transition"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-black transition"
          >
            <FaInstagram size={24} />
          </a>
        </div>
        <p className="text-sm text-black">
          &copy; 2025 Your Food | Todos os Direitos Reservados.
        </p>
      </footer>
    </div>
  );
};

export default FooterPrincipal;
