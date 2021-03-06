import React, { PropTypes } from 'react'
import Product from '../containers/product'
import Masonry from 'react-masonry-component'

class ProductList extends React.Component {
  render() {
    return (
      <Masonry className="products_list">
        {this.props.products.map(item => {
          return <Product key={item.id} data={item} />;
        })}
      </Masonry>
    )
  }
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired
}

export default ProductList;
