import { createContext, useCallback, useContext, useState } from 'react'

interface MenuContextData {
  drawerOptions: MenuOptionsProps[]
  setDrawerOption: (newDrawerOptions: MenuOptionsProps[]) => void
}

interface MenuOptionsProps {
  label: string
  path: string
}

interface MenuProviderProps {
  children: React.ReactNode
}

const DrawerContext = createContext({} as MenuContextData)

export const useDrawerContext = () => {
  return useContext(DrawerContext)
}

export const DrawerProvider: React.FC<MenuProviderProps> = ({ children }) => {
  const [drawerOptions, setDrawerOptions] = useState<MenuOptionsProps[]>([])

  const handleSetDrawerOptions = useCallback(
    (newDrawerOptions: MenuOptionsProps[]) => {
      setDrawerOptions(newDrawerOptions)
    },
    [],
  )

  return (
    <DrawerContext.Provider
      value={{
        drawerOptions,
        setDrawerOption: handleSetDrawerOptions,
      }}
    >
      {children}
    </DrawerContext.Provider>
  )
}
