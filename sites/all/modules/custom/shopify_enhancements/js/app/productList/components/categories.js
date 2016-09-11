import React, { PropTypes } from 'react'
import FilterCategory from '../containers/filterCategory'
import { objectMap } from '../../helpers/object'
import Link from '../../helpers/components/link'

class FilterList extends React.Component {
  render() {
    return (
      <div className="product-list__header clearfix">
        <div  className="product-list__categories">
          {objectMap(this.props.filterCategories, (key, index) => {
            return (
              <FilterCategory key={key} value={key} className="filter-list__category">
                <span>{this.props.filterCategories[key].name}</span>
              </FilterCategory>
            );
          })}
        </div>
        <Link className="product-list__sort" active={this.props.sortOpened} onClick={this.props.sortOnClick}>
          Sort By
        </Link>
      </div>
    )
  }
}

FilterList.propTypes = {
  filterCategories: PropTypes.object.isRequired
}

export default FilterList;
