import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const FooterPrincipal = () => {
  return (
    <footer className="bg-white py-6 text-center shadow-lg mt-6">
      <div className="flex justify-center space-x-6 mb-4 flex-wrap">
        {/* Ícones de redes sociais */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-blue-600 transition duration-300 ease-in-out"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-blue-400 transition duration-300 ease-in-out"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-pink-600 transition duration-300 ease-in-out"
        >
          <FaInstagram size={24} />
        </a>
      </div>
      <p className="text-sm text-black mb-4">
        &copy; 2025 Your Food | Todos os Direitos Reservados.
      </p>
    </footer>
  );
};

export default FooterPrincipal;
