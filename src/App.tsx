import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";

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


function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <div className="min-h-[88.7dvh]">
            
            <Navbar/>

            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
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
              <Route path="/cadastrarproduto" element={<Cadastro />} />
              <Route path="/editarproduto/:id" element={<EditarCadastro />} />
              <Route path="/deletarproduto/:id" element={<h1>DeletarProduto</h1>} />
              <Route path="/perfil" element={<h1>Perfil</h1>} />
            </Routes>
            <FooterPrincipal />
          </div>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
