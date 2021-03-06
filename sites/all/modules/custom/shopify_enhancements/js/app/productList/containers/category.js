import { connect } from 'react-redux'
import { loadFilterOptions } from '../actions'
import Link from '../../helpers/components/link'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.value === state.activeCategory
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (active) => {
      if (active) {
        dispatch(loadFilterOptions(''));
      }
      else {
        dispatch(loadFilterOptions(ownProps.value));
      }
    }
  }
}

const Category = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default Category
