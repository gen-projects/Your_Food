import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/icon_branco_bg_vermelho.png";
import CaixaDeTexto from "../../components/caixadetexto/CaixaDeTexto";
import Subtitulo from "../../components/subtitulo/Subtitulo";
import Titulo from "../../components/titulo/Titulo";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../services/service";
import BotaoVermelho from "../../components/botao/BotaoVermelho";

function CadastrarUsuario() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [confirmaSenha, setConfirmaSenha] = useState<string>("");

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  useEffect(() => {
    if (usuario.id !== 0) {
      retornar();
    }
  }, [usuario]);

  function retornar() {
    navigate("/login");
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      setIsLoading(true);

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
        alert("Usuário cadastrado com sucesso!");
      } catch (error) {
        alert("Erro ao cadastrar o usuário!");
      }
    } else {
      alert(
        "Dados do usuário inconsistentes! Verifique as informações do cadastro."
      );
      setUsuario({ ...usuario, senha: "" });
      setConfirmaSenha("");
    }

    setIsLoading(false);
  }

  return (
    <>
      <div className="flex justify-start mt-5">
        <img
          className="rounded-[200px] w-15 mx-5"
          src={logo}
          alt="Logo do your food"
        />
      </div>

      <form
        className="flex flex-col items-center gap-5"
        onSubmit={cadastrarNovoUsuario}
      >
        <div className="flex justify-center my-10">
          <Titulo texto="Cadastre-se" color="text-red-700" />
        </div>

        <div className="w-4/6">
          <Subtitulo texto="Nome: " color="text-red-700" />
          <CaixaDeTexto
            id="nome"
            type="text"
            name="nome"
            placeholder="Digite seu nome "
            value={usuario.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <div className="w-4/6">
          <Subtitulo texto="Email: " color="text-red-700" />
          <CaixaDeTexto
            id="usuario"
            type="text"
            name="usuario"
            placeholder="Digite seu email "
            value={usuario.usuario}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <div className="w-4/6">
          <Subtitulo texto="Senha: " color="text-red-700" />
          <CaixaDeTexto
            id="senha"
            type="password"
            name="senha"
            placeholder="Digite sua senha "
            value={usuario.senha}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <div className="w-4/6">
          <Subtitulo texto="Confirmar senha: " color="text-red-700" />
          <CaixaDeTexto
            id="confirmarSenha"
            type="password"
            name="confirmarSenha"
            placeholder="Digite sua senha novamente "
            value={confirmaSenha}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleConfirmarSenha(e)
            }
          />
        </div>

        <div className="w-4/6 py-5">
          <BotaoVermelho
            texto="Cadastrar"
            isLoading={isLoading}
          />
        </div>
      </form>
    </>
  );
}

export default CadastrarUsuario;
