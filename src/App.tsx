import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/NavBar";

import Perfil from "./pages/perfil/perfil";
import FooterPrincipal from "./components/footer/FooterPrincipal";
import Home from "./pages/home/Home";
import Categorias from "./pages/categorias/Categorias";
import CadastrarUsuario from "./pages/cadastrarusuario/CadastrarUsuario";
import Cadastro from "./pages/cadastro/Cadastro";
import Login from "./pages/login/Login";

import Produtos from "./pages/produtos/Produtos";
import Sobre from "./pages/sobre/Sobre";
import CadastroCategorias from "./pages/cadastrocategorias/CadastroCategorias";


function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
        <Navbar/>
          <div className="min-h-[88.7dvh] overflow-hidden">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<CadastrarUsuario />} />
              <Route path="/categorias" element={<Categorias />} />
              <Route
                path="/cadastrarcategoria"
                element={<CadastroCategorias />}
              />
              <Route
                path="/editarcategoria/:id"
                element={<CadastroCategorias />}
              />
              <Route path="/produtos" element={<Produtos />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/cadastrarproduto" element={<Cadastro />} />
              <Route path="/editarproduto/:id" element={<Cadastro />} />
              <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>
          <FooterPrincipal />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
