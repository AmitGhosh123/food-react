import React from 'react'
import { MenuList } from '../Data/MenuList'
import MenuItem from '../components/MenuItem'
import "./Menu.css"

const Menu = () => {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>OUR OFFERINGS</h1>
      <div className='menuList'>
       {MenuList.map((menuItem,key) =>{
        return <div>

          <MenuItem
          key = {key}
          image={menuItem.image}
           name={menuItem.name} 
           price={menuItem.price}/>
        </div>
       }) }
      </div>
    </div>
  )
}

export default Menu