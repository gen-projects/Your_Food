import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastrarUsuario from "./pages/cadastrarusuario/CadastrarUsuario";

import Cadastro from "./pages/cadastro/Cadastro";
import EditarCadastro from "./pages/editarcadastro/EditarCadastro";
import Login from "./pages/login/Login";

function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <div className="min-h-[88.7dvh]">
            <h1>Navbar</h1>
            <Routes>
              <Route path="/" element={<h1>Login</h1>} />
              <Route path="/home" element={<h1>Home</h1>} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/editarcadastro" element={<EditarCadastro/>}/>
              <Route path="/login" element={<h1>Login </h1>} />
              <Route path="/categorias" element={<h1>ListaCategorias </h1>} />
              <Route
                path="/cadastrarcategoria"
                element={<h1>FormCategoria </h1>}
              />
              <Route
                path="/editarcategoria/:id"
                element={<h1>FormCategoria </h1>}
              />
              <Routepath="/deletarcategoria/:id" element={<h1>DeletarCategoria </h1>}/>
              <Route path="/produtos" element={<h1>ListaProdutos </h1>} />
              <Route path="/cadastrarproduto" element={<h1>FormProduto</h1>} />
              <Route path="/editarproduto/:id" element={<h1>FormProduto</h1>} />
              <Route path="/deletarproduto/:id" element={<h1>DeletarProduto</h1>} />
              <Route path="/perfil" element={<h1>Perfil</h1>} />
            </Routes>
            <h1>Footer</h1>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
