import { useContext, useEffect, useState } from 'react'
import { ProdutoServices } from '../shared/services/produtoApi'
import { Typography, Row, Col } from 'antd'
import { UserServices } from '../shared/services/userApi'
import { AntThemeContext } from '../shared/context/AntThemeContext'

export const Inicio = () => {
  const theme = useContext(AntThemeContext)
  const { Title } = Typography

  const [countProduto, setCountProduto] = useState<number>(0)
  const [countUsuario, setCountUsuario] = useState<number>(0)

  useEffect(() => {
    ProdutoServices.getAll().then(result => {
      if (result instanceof Error) {
        alert(result.message)
        return
      } else {
        setCountProduto(result.length)
      }
    })

    UserServices.getAll().then(result => {
      if (result instanceof Error) {
        alert(result.message)
        return
      } else {
        setCountUsuario(result.length)
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
      <Title level={2}>Página Inicial</Title>
      <Row style={{ width: '100%' }} justify="space-evenly">
        <Col
          style={{
            backgroundColor: theme.primary,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          span={10}
        >
          <Title level={3}>Total de Produtos</Title>
          <Title level={3}>{countProduto}</Title>
        </Col>
        <Col
          style={{
            backgroundColor: theme.primary,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          span={10}
        >
          <Title level={3}>Total de Usuários</Title>
          <Title level={3}>{countUsuario}</Title>
        </Col>
      </Row>
    </div>
  )
}
