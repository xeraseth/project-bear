// main.js
import es6_collections from 'es6-collections'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { fieldValue } from './helpers/fields'

import Product from './productList/components/product'
import ProductList from './productList/components'
import ProductReducers from './productList/reducers'
import { Cart, CartItem } from './cart'

const formatProduct = function (product) {
  let variantProps = ['compare_at_price', 'price'];

  let images = product.shopify_product_images;
  product.image = images[0] ? images[0] : '';
  product.hover_image = images[1] ? images[1] : '';
  product.tags = product.shopify_product_tags.filter(tag => {
    return !!parseInt(fieldValue(tag.field_status_marker), 10)
  })

  product.shopify_product_metafields.forEach(metafield => {
    product[metafield.metafield_key] = metafield.value
  })
}

window.Drupal.shopify_enhancements = window.Drupal.shopify_enhancements || {};
window.Drupal.shopify_enhancements.createCart = Cart;
window.Drupal.shopify_enhancements.createCartItem = CartItem;

window.Drupal.shopify_enhancements.createProduct = (product, currency, container) => {
  let onClick = () => {
    let variant = product.variants[Object.keys(product.variants)[0]];
    Drupal.behaviors.shopify_enhancements_cart.addToCart(product.product_id, variant.variant_id);
  }

  formatProduct(product);
  render(
    <Product data={product} currency={currency} onClick={onClick} />,
    container
  );
}

window.Drupal.shopify_enhancements.createFilter = (products, container, categories = {}, sortOrders = Drupal.settings.shopify_enhancements.sortOrders) => {
  if (!products) {
    console.error('No products')
  }

  products.forEach(formatProduct)

  let sort = {
    key: "title",
    opened: false,
    order: "asc",
    sortOrders
  }

  let store = createStore(ProductReducers, {
      products,
      categories,
      sort
    },
    applyMiddleware(thunkMiddleware));

  render(
    <Provider store={store}>
      <ProductList />
    </Provider>,
    document.getElementById(container)
  );

  return store
}
