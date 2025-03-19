import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';

function Login() {
    const navigate = useNavigate();
    const { usuario, handleLogin, isLoading } = useContext(AuthContext);

    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin);

    useEffect(() => {
        if (usuario.token !== '') {
            navigate('/produtos');
        }
    }, [usuario, navigate]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value,
        });
    }

    function login(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        handleLogin(usuarioLogin);
    }

    return (
        <div className="h-[50dvh] flex flex-col-reverse lg:flex-row items-center 
                        justify-center lg:justify-between min-h-screen">

            <div className=' w-full lg:w-1/2 flex justify-center items-start 
                            sm:items-center pb-50'>
                
                <form
                    className="p-5 sm:p-5 flex justify-center items-center flex-col 
                    w-[95vw] sm:w-2/5 gap-4"
                    onSubmit={login}
                >
                    <div className='rounded-full overflow-hidden max-h-20 max-w-20'>
                        <img src="https://i.imgur.com/fXcN7Lu.png" alt="" />
                    </div>
                    <h2 className="text-slate-900 text-5xl">Entrar</h2>

                    <div className="flex flex-col w-full">
                        <label htmlFor="usuario">Usuário</label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Usuário"
                            className="border-2 border-slate-700 rounded p-2"
                            value={usuarioLogin.usuario}
                            onChange={atualizarEstado}
                        />
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="senha">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Senha"
                            className="border-2 border-slate-700 rounded p-2"
                            value={usuarioLogin.senha}
                            onChange={atualizarEstado}
                        />
                    </div>

                    <button
                        type="submit"
                        className="rounded bg-red-700 sm:bg-red-500 flex justify-center 
                                sm:hover:bg-red-900 text-white w-1/2 py-2 cursor-pointer"
                    >
                        {isLoading ? (
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            />
                        ) : (
                            <span>Entrar</span>
                        )}
                    </button>

                    <hr className="border-slate-800 w-full" />

                    <p>
                        Ainda não tem uma conta?{' '}
                        <Link to="/cadastro" className="text-indigo-800 hover:underline">
                            Cadastre-se
                        </Link>
                    </p>
                </form>
            </div>

            <div className='hidden lg:block w-[50vw] h-full'>
                <img 
                    src="https://i.imgur.com/HRB0N65.png" 
                    alt="Imagem ilustrativa de alimentos"
                    className='object-cover object-bottom w-full h-full' />
            </div>
        </div>
    );
}

export default Login;
