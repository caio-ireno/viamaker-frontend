import { Api } from "./axios"

export interface ProdutoProps {
  _id: number;
  nome: string;
  description: string;
}

const getAll = async (): Promise<ProdutoProps[]> => {
  try {
    const urlRelativa = '/produto'
    const { data } = await Api.get(urlRelativa)
    console.log(data)
    return data

  } catch (error) {
    console.error(error)
    throw new Error(
      (error as { message: string }).message || 'Erro ao Carregar',
    );
  }
}

export const ProdutoServices = {
  getAll,
}
