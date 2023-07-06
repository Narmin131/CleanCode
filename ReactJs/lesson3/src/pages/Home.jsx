import React, { useState } from 'react'
import menuItems from "../data/Data"
import Categories from '../components/filterWithCategory/Categories';
import AllMenu from "../components/filterWithCategory/Menu"
const Home = () => {

  const allCategories = ['all', ...new Set(menuItems.map((item) => item.category))]

  console.log(allCategories);

  const [menu, setMenu] = useState(menuItems)

  console.log(menu);

  const [menuCategories, setMenuCategories] = useState(allCategories)


  const filterCategories = (category) => {
    if (category == 'all') {
      setMenu(menuItems)
      return
    }

    const filteredMenu = menuItems.filter((item) => item.category === category)
    setMenu(filteredMenu)
  }

  return (
    <>

      <Categories menuCategories={menuCategories} filterCategories={filterCategories} />
      <AllMenu menu={menu} />

    </>
  )
}

export default Home