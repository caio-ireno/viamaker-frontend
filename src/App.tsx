import { BrowserRouter } from 'react-router-dom'
import { AntThemeProvider } from './shared/context/AntThemeContext'
import { MenuLateral } from './shared/components/Menu/Menu'
import { AppRoutes } from './routes'
import { DrawerProvider } from './shared/context/MenuOption'

export const App = () => {
  return (
    <AntThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
          <MenuLateral>
            <AppRoutes />
          </MenuLateral>
        </BrowserRouter>
      </DrawerProvider>
    </AntThemeProvider>
  )
}
