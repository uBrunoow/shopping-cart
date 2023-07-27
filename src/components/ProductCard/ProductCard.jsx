import React, { useContext } from 'react'
import propTypes from 'prop-types'
import './ProductCard.css'
import formatCurrency from '../../utils/formatCurrency'
import { HiShoppingCart } from 'react-icons/hi'
import AppContext from '../../context/AppContext'

export default function ProductCard({ data }) {
  const { title, thumbnail, price } = data

  const { cartItems, setCartItems } = useContext(AppContext)

  const handleAddCart = () => {
    setCartItems([...cartItems, data])
  }

  return (
    <section className="product-card">
      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="product"
        className="card__image"
      />

      <div className="card__infos">
        <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="card__title">{title}</h2>
      </div>

      <button
        className="button__add-cart"
        type="button"
        onClick={handleAddCart}
      >
        <HiShoppingCart />
      </button>
    </section>
  )
}

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired
