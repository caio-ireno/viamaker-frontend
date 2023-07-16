import { Layout, Typography } from 'antd'
import { useMatch, useNavigate } from 'react-router-dom'
import { useDrawerContext } from '../../context/MenuOption'
import { AntThemeContext } from '../../context/AntThemeContext'
import { useContext } from 'react'

interface ListItemLinkProps {
  label: string
  to: string
}

const ListItemLink: React.FC<ListItemLinkProps> = ({ to, label }) => {
  const theme = useContext(AntThemeContext)

  const navigate = useNavigate()
  const isActive = useMatch(to)

  const handleClick = () => {
    navigate(to)
  }
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: 70,
        marginBottom: 10,
        backgroundColor: theme.button,
        borderRadius: 10,
      }}
      onClick={handleClick}
    >
      <Typography
        style={{
          textAlign: 'center',
          color: isActive ? theme.pathOn : 'inherit',
          fontSize: 20,
        }}
      >
        {label}
      </Typography>
    </div>
  )
}

const { Content, Sider } = Layout

interface MenuProps {
  children: React.ReactNode
}

export const MenuLateral: React.FC<MenuProps> = ({ children }) => {
  const { drawerOptions } = useDrawerContext()

  const theme = useContext(AntThemeContext)
  return (
    <Layout style={{ display: 'flex' }}>
      <Sider
        style={{
          backgroundColor: theme.primary,
          display: 'flex',
          justifyContent: 'center',
        }}
        breakpoint="lg"
        collapsedWidth="0"
        zeroWidthTriggerStyle={{ top: 0 }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            alignItems: 'center',
          }}
        >
          <Typography style={{ marginBottom: 20, marginTop: 20, fontSize: 20 }}>
            Desafio Viamaker
          </Typography>
          {drawerOptions.map(drawerOption => (
            <ListItemLink
              key={drawerOption.path}
              to={drawerOption.path}
              label={drawerOption.label}
            />
          ))}
        </div>
      </Sider>

      <Layout>
        <Content
          style={{
            paddingTop: '50px',
            paddingLeft: '10px',
            paddingRight: '10px',
            height: '100vh',
            background: theme.secondary,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}
