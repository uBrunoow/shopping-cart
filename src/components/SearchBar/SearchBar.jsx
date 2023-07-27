import React, { useState, useContext } from 'react'
import { BsSearch } from 'react-icons/bs'
import './SearchBar.css'
import fetchProducts from '../../api/fetchProducts'
import AppContext from '../../context/AppContext'

export default function SearchBar() {
  const { setProducts, setLoading } = useContext(AppContext)
  const [searchValue, setSearchValue] = useState('')

  const handleSearch = async (e) => {
    e.preventDefault()
    setLoading(true)
    const products = await fetchProducts(searchValue)
    setProducts(products)
    setLoading(false)
    setSearchValue('')
  }

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="search"
        placeholder="Buscar produtos"
        className="search__input"
        required
        value={searchValue}
        onChange={({ target }) => setSearchValue(target.value)}
      />
      <button type="submit" className="search__button">
        <BsSearch />
      </button>
    </form>
  )
}
