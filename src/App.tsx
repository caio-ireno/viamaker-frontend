import { Main } from './shared/components/main'
import { AntThemeProvider } from './shared/context/AntThemeContext'

export const App = () => {
  return (
    <AntThemeProvider>
      <Main />
    </AntThemeProvider>
  )
}
