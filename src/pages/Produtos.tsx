import { useContext, useEffect, useState } from 'react'
import { ProdutoProps, ProdutoServices } from '../shared/services/produtoApi'
import { Typography, Row, Col } from 'antd'
import { AntThemeContext } from '../shared/context/AntThemeContext'

export const Produtos = () => {
  const theme = useContext(AntThemeContext)
  const { Title } = Typography

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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <Title level={2}>Produtos</Title>
      <Row
        style={{ padding: 0, display: 'flex', gap: 5, width: '100%' }}
        justify="space-around"
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
            xs={20}
            sm={20}
            md={7}
            key={row._id}
          >
            <Title style={{ textAlign: 'center' }} level={3}>
              {row.nome}
            </Title>
            <Title
              style={{ textAlign: 'center', fontWeight: 'normal' }}
              level={5}
            >
              {row.description}
            </Title>
          </Col>
        ))}
      </Row>
    </div>
  )
}
