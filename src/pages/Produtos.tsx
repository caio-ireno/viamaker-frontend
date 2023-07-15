import { useEffect, useState } from 'react'
import { ProdutoProps, ProdutoServices } from '../shared/services/produtoApi'
import { Typography } from 'antd'

export const Produtos = () => {
  const [rows, setRows] = useState<ProdutoProps[]>([])

  useEffect(() => {
    ProdutoServices.getAll().then(result => {
      if (result instanceof Error) {
        alert(result.message)
        return
      } else {
        setRows(result)
      }
    })
  }, [])

  return (
    <div>
      {rows.map(row => (
        <div key={row._id}>
          <Typography style={{ color: '#000' }}>{row.nome}</Typography>
          <Typography>{row.description}</Typography>
        </div>
      ))}
    </div>
  )
}
