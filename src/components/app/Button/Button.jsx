import PropTypes from 'prop-types';
import css from './Button.module.css'

export const LoadMore = ({ onClick }) => {
    return (
        <button className={css.Button} type="button" onClick={()=> onClick()}>Load More</button>)
}
LoadMore.propTypes = {
    onSubmit: PropTypes.func,
    
};