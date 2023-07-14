import { createContext } from 'react'
import { themeColors } from '../theme/defaultTheme'

interface AppThemeProviderProps {
  children: React.ReactNode
}
export const AntThemeContext = createContext(themeColors)

// Crie o provedor do tema
export const AntThemeProvider: React.FC<AppThemeProviderProps> = ({
  children,
}) => {
  return (
    <AntThemeContext.Provider value={themeColors}>
      {children}
    </AntThemeContext.Provider>
  )
}
