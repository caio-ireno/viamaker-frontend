import { useContext, useEffect, useState } from 'react'
import { Typography, Row, Col } from 'antd'
import { UserServices, UsuarioProps } from '../shared/services/userApi'
import { AntThemeContext } from '../shared/context/AntThemeContext'

export const Usuarios = () => {
  const theme = useContext(AntThemeContext)
  const { Title } = Typography

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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Title level={2}>Usuarios</Title>
      <Row
        style={{ padding: 0, display: 'flex', gap: 5, width: '100%' }}
        justify="space-evenly"
      >
        {rows.map(row => (
          <Col
            style={{
              padding: 0,
              backgroundColor: theme.primary,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            span={20}
            key={row._id}
          >
            <Title style={{ textAlign: 'center' }} level={3}>
              {row.nome}
            </Title>
          </Col>
        ))}
      </Row>
    </div>
  )
}
