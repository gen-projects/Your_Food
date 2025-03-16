import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { House, ShoppingBag, Info } from "@phosphor-icons/react";
import { ToastAlert } from "../../utils/ToastAlert";

function Perfil() {
  const navigate = useNavigate();
  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token === "") {
      ToastAlert("Você precisa estar logado", "erro");
      navigate("/login");
    }
  }, [usuario.token, navigate]);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="bg-red-500 rounded-lg shadow-lg px-1 text-center mb-6">
        <div className="flex items-center ">
          <div className="flex items-center justify-center w-28 h-28">
            <img
              className="rounded-full border-2 border-white shadow-lg w-5/8 h-5/8 object-cover"
              src="https://i.imgur.com/Q7hVD4E.png"
              alt={`Foto de perfil de ${usuario.nome}`}
            />
          </div>
          <div className="ml-6 flex flex-col justify-center text-center">
            <h1 className="text-white text-2xl font-bold">{usuario.nome}</h1>
            <p className="text-white text-sm">{usuario.usuario}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition-all cursor-pointer"
          onClick={() => navigate("/produtos")}
        >
          <ShoppingBag className="text-red-500 mb-4" size={48} />
          <h2 className="text-xl font-semibold mb-2">Produtos</h2>
          <p className="text-sm text-gray-500 text-center">
            Visualizar e gerenciar seus produtos
          </p>
        </div>

        <div
          className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition-all cursor-pointer"
          onClick={() => navigate("/")}
        >
          <House className="text-red-500 mb-4" size={48} />
          <h2 className="text-xl font-semibold mb-2">Home</h2>
          <p className="text-sm text-gray-500 text-center">
            Retorne para a página inicial
          </p>
        </div>

        <div
          className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition-all cursor-pointer"
          onClick={() => navigate("/sobre")}
        >
          <Info className="text-red-500 mb-4" size={48} />
          <h2 className="text-xl font-semibold mb-2">Sobre</h2>
          <p className="text-sm text-gray-500 text-center">
            Saiba mais sobre este projeto
          </p>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
