import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/NavBar";

import Perfil from "./pages/perfil/perfil";
import FooterPrincipal from "./components/footer/FooterPrincipal";
import FooterLogado from "./components/footer/FooterLogado";
import Home from "./pages/home/Home";
import CardCategoria from "./components/cardCategoria/CardCategoria";
import Categorias from "./pages/categorias/Categorias";
import CadastrarUsuario from "./pages/cadastrarusuario/CadastrarUsuario";
import Cadastro from "./pages/cadastro/Cadastro";
import EditarCadastro from "./pages/editarcadastro/EditarCadastro";
import Login from "./pages/login/Login";

import Produtos from "./pages/produtos/Produtos";
import Sobre from "./pages/sobre/Sobre";
import FormCategoria from "./components/categoria/formcategoria/FormCategoria";


function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
        <Navbar/>
          <div className="min-h-[88.7dvh]">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<CadastrarUsuario />} />
              <Route path="/editarproduto" element={<EditarCadastro/>}/>
              <Route path="/login" element={<Login />} />
              <Route path="/categorias" element={<Categorias />} />
              <Route
                path="/cadastrarcategoria"
                element={<p>a</p>}
              />
              <Route
                path="/editarcategoria/:id"
                element={<p>a</p>}
              />
              <Route path="/deletarcategoria/:id" element={<Categorias />}/>
              <Route path="/produtos" element={<Produtos />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/cadastrarproduto" element={<Cadastro />} />
              <Route path="/editarproduto/:id" element={<Cadastro />} />
              <Route path="/deletarproduto/:id" element={<h1>DeletarProduto</h1>} />
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
