import React from 'react'
import NavigationMenu from '../Components/NavigationMenu'



const NormalLayout = ({children}) => {
  return (
    <div>
        <NavigationMenu/>
        {children}
    </div>
  )
}

export default NormalLayout