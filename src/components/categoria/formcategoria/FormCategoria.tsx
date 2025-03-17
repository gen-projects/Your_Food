// import { RotatingLines } from "react-loader-spinner";
// import { useNavigate, useParams } from "react-router-dom";
// import { AuthContext } from "../../../contexts/AuthContext";
// import { atualizar, buscar, cadastrar } from "../../../services/service";
// import { ChangeEvent, useContext, useEffect, useState } from "react";
// import Produto from "../../../models/Produto";
// import Categoria from "../../../models/Categoria";
// import Titulo from "../../titulo/Titulo";
// import CaixaDeTexto from "../../caixadetexto/CaixaDeTexto";
// import { ToastAlert } from "../../../utils/ToastAlert";

// function FormCategoria() {

//     const navigate = useNavigate();

//     const [isLoading, setIsLoading] = useState<boolean>(false)
//     const [produtos, setProdutos] = useState<Produto[]>([])

//     const [produto, setProduto] = useState<Produto>({ id: 0, descricao: '', nome:'',foto:'', preco: 0, loja: '', categoria: null, usuario: null})
//     const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

//     const { id } = useParams<{ id: string }>()

//     const { usuario, handleLogout } = useContext(AuthContext)
//     const token = usuario.token

//     async function buscarCategoriaPorId(id: string) {
//         try {
//             await buscar(`/postagens/${id}`, setCategoria, {
//                 headers: { Authorization: token }
//             })
//         } catch (error: any) {
//             if (error.toString().includes('403')) {
//                 handleLogout()
//             }
//         }
//     }

//     async function buscarProdutos() {
//         try {
//             await buscar('/produtos', setProdutos, {
//                 headers: { Authorization: token }
//             })
//         } catch (error: any) {
//             if (error.toString().includes('403')) {
//                 handleLogout()
//             }
//         }
//     }

//     useEffect(() => {
//         if (token === '') {
//             ToastAlert('Você precisa estar logado','info');
//             navigate('/');
//         }
//     }, [token])

//     useEffect(() => {
//         buscarProdutos()

//         if (id !== undefined) {
//             buscarCategoriaPorId(id)
//         }
//     }, [id])

//     useEffect(() => {
//         setCategoria({
//             ...categoria,
//             produto: produto,
//         })
//     }, [produto])

//     function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
//         setCategoria({
//             ...categoria,
//             [e.target.name]: e.target.value,
//             produto: produto,
//         });
//     }

//     function retornar() {
//         navigate('/postagens');
//     }

//     async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
//         e.preventDefault()
//         setIsLoading(true)

//         if (id !== undefined) {
//             try {
//                 await atualizar(`/postagens`, categoria, setCategoria, {
//                     headers: {
//                         Authorization: token,
//                     },
//                 });

//                 ToastAlert('Categoria atualizada com sucesso', 'sucesso')

//             } catch (error: any) {
//                 if (error.toString().includes('403')) {
//                     handleLogout()
//                 } else {
//                     ToastAlert('Erro ao atualizar a Categoria', 'erro')
//                 }
//             }

//         } else {
//             try {
//                 await cadastrar(`/postagens`, categoria, setCategoria, {
//                     headers: {
//                         Authorization: token,
//                     },
//                 })

//                 ToastAlert('Categoria cadastrada com sucesso', 'sucesso');

//             } catch (error: any) {
//                 if (error.toString().includes('403')) {
//                     handleLogout()
//                 } else {
//                     ToastAlert('Erro ao cadastrar a Categoria', 'erro');
//                 }
//             }
//         }

//         setIsLoading(false)
//         retornar()
//     }

//     const carregandoProduto = produto.descricao === '';

//     return (
//         <div className="container flex flex-col mx-auto items-center">
//             <Titulo texto={id !== undefined ? 'Editar Categoria' : 'Cadastrar Categoria'}/>

//             <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovaCategoria}>
//                 <CaixaDeTexto type="text" placeholder="Descrição da categoria" name="descricao" value={categoria.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} id="descricao"/>
//                 <div className="flex flex-col gap-2">
//                     <label>Categoria saudável</label>

//                     <div className="flex items-center gap-2">
//                         <input
//                             type="radio"
//                             id="saudavel-sim"
//                             name="categoria"
//                             className="border-2 border-slate-700 rounded p-2"
//                             checked={categoria.saudavel === true}
//                             onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
//                         />
//                         <label htmlFor="saudavel-sim">Sim</label>
//                     </div>

//                     <div className="flex items-center gap-2">
//                         <input
//                             type="radio"
//                             id="saudavel-nao"
//                             name="categoria"
//                             className="border-2 border-slate-700 rounded p-2"
//                             checked={categoria.saudavel === false}
//                             onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
//                         />
//                         <label htmlFor="saudavel-nao">Não</label>
//                     </div>
//                 </div>
//                 <button
//                     type='submit'
//                     className='rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800
//                                text-white font-bold w-1/2 mx-auto py-2 flex justify-center'
//                     disabled={carregandoProduto}
//                 >
//                     {isLoading ?
//                         <RotatingLines
//                             strokeColor="white"
//                             strokeWidth="5"
//                             animationDuration="0.75"
//                             width="24"
//                             visible={true}
//                         /> :
//                         <span>{id !== undefined ? 'Atualizar' : 'Cadastrar'}</span>
//                     }
//                 </button>
//             </form>
//         </div>
//     );
// }

// export default FormCategoria;