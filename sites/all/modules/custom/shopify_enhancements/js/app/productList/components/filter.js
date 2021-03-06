import React, { PropTypes } from 'react'
import FilterLink from '../containers/filterLink'
import { objectMap } from '../../helpers/object'
import classNames from 'classnames'

class FilterSection extends React.Component {
  render() {
    let sectionClassName = classNames({
      'product-list__filter-group': true,
      'overflow': this.props.children == 'NONE'
    });
    return (
      <div className={sectionClassName}>
        <h3>{ this.props.children != 'NONE' ? this.props.children : '' }</h3>
          {this.props.values.map((item, index) => {
            return (
              <FilterLink key={index} value={item.key} filterFunction={this.props.filterFunction} filterKey={this.props.filterKey} className="product-list__filter" style={item.style}>
                {item.key} <span className="filter__count">{item.count}</span>
              </FilterLink>
            )
          })}
      </div>
    );
  }
};

FilterSection.propTypes = {
  values: PropTypes.array.isRequired
}

export default FilterSection
