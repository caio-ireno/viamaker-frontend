import { Button } from 'antd'
import { useContext } from 'react'
import { AntThemeContext } from '../context/AntThemeContext'

export const Main: React.FC = () => {
  const theme = useContext(AntThemeContext)
  return (
    <div>
      <Button style={{ backgroundColor: theme.button }}> click me</Button>
    </div>
  )
}
