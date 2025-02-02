import Produto from "./Produto";

export default interface Categoria {
    id: number;
    descricao: string;
    saudavel: boolean;
    produto?: Produto | null;
}