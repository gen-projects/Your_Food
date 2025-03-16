import Produto from "./Produto";

export default interface Categoria {
    id: number;
    foto: string;
    descricao: string;
    saudavel: boolean;
    produto?: Produto | null;
}