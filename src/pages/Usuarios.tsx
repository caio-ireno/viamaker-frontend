import { useEffect, useState } from 'react'
import { Typography } from 'antd'
import { UserServices, UsuarioProps } from '../shared/services/userApi'

export const Usuarios = () => {
  const [rows, setRows] = useState<UsuarioProps[]>([])

  useEffect(() => {
    UserServices.getAll().then(result => {
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
        </div>
      ))}
    </div>
  )
}
