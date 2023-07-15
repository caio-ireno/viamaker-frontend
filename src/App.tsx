import { BrowserRouter } from 'react-router-dom'
import { AntThemeProvider } from './shared/context/AntThemeContext'
import { MenuLateral } from './shared/components/Menu/Menu'

export const App = () => {
  return (
    <AntThemeProvider>
      <BrowserRouter>
        <MenuLateral>
          <div>oi</div>
        </MenuLateral>
      </BrowserRouter>
    </AntThemeProvider>
  )
}
