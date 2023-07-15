import { Layout, Menu } from 'antd'

const { Content, Sider } = Layout

interface MenuProps {
  children: React.ReactNode
}

export const MenuLateral: React.FC<MenuProps> = ({ children }) => {
  return (
    <Layout style={{ display: 'flex' }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        zeroWidthTriggerStyle={{ top: 0 }}
      >
        <button>oi</button>
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
