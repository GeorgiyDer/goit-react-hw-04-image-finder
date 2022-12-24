import PropTypes from 'prop-types';
import css from './ImageGalleryitems.module.css'


export const ImageGalleryitems = ({ webformatURL, tags, onToggle, largeImageURL}) => {
    return (
        <li className={css.ImageGalleryItem} >
            <img src={webformatURL} alt={tags} id={largeImageURL} onClick={onToggle} className={css.ImageGalleryItemImage} />
        </li>)
}

ImageGalleryitems.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    onToggle: PropTypes.func.isRequired
};