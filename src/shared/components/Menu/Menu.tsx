import { Layout, Menu, Typography } from 'antd'
import { useMatch, useNavigate } from 'react-router-dom'
import { useDrawerContext } from '../../context/MenuOption'

interface ListItemLinkProps {
  label: string
  to: string
}

const ListItemLink: React.FC<ListItemLinkProps> = ({ to, label }) => {
  const navigate = useNavigate()
  const isActive = useMatch(to)

  const handleClick = () => {
    navigate(to)
    window.scroll(0, 0)
  }
  return (
    <div onClick={handleClick}>
      <Typography style={{ color: isActive ? '#5DADE2' : 'inherit' }}>
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
  return (
    <Layout style={{ display: 'flex' }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        zeroWidthTriggerStyle={{ top: 0 }}
      >
        {drawerOptions.map(drawerOption => (
          <ListItemLink
            key={drawerOption.path}
            to={drawerOption.path}
            label={drawerOption.label}
          />
        ))}
      </Sider>

      <Layout>
        <Content
          style={{
            paddingTop: '50px',
            paddingLeft: '50px',
            height: '100vh',
            background: '#f867',
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}
