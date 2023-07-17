import { Api } from './axios'

export interface UsuarioProps {
  _id: number
  nome: string
}

const getAll = async (): Promise<UsuarioProps[]> => {
  try {
    const urlRelativa = '/usuario'
    const { data } = await Api.get(urlRelativa)
    console.log(data)
    return data
  } catch (error) {
    console.error(error)
    throw new Error(
      (error as { message: string }).message || 'Erro ao Carregar',
    )
  }
}

export const UserServices = {
  getAll,
}
