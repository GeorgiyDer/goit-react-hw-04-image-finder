import { useState, useEffect} from "react";
import PropTypes from 'prop-types';
import { ImageGalleryitems } from "../ImageGalleryItem/ImageGalleryItem";
import Modal from '../Modal/Modal';
import { LoadMore } from "../Button/Button";
import { Spinner } from "../Loader/Loader";
import css from './ImageGallery.module.css';
import { toast } from 'react-toastify';

export const ImageGallery = ({ imgName }) => {

    const [searchName, setSearchName] = useState('');
    const [page, setPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [largeImageURL, setLargeImageURL] = useState("");
    const [status, setStatus] = useState("idle");
    const [loader, setLoader] = useState(false);

    
    const toggleModal = (e) => {
        
        if (showModal === false) { 
            const LargeImg = e.currentTarget.id
            setLargeImageURL(LargeImg)
        }

        setShowModal(!showModal)       
    }

    const loadMore = () => { 
        setPage(prevState => prevState + 1)
    }

    useEffect(() => {

        const options = {
            key: '30076608-453b15a34a4d23543af1b2a78',
            q: imgName,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: "true",
            per_page: "12",
        }

        if (options.q === '') {
            return;
        }
        setSearchName('');
        setPage(1);
        setStatus("pending")

        fetch(`https://pixabay.com/api/?key=${options.key}&q=${options.q}&image_type=${options.image_type}&orientation=${options.orientation}&safesearch=${options.safesearch}&page=1&per_page=${options.per_page}`)
            .then(response => response.json())
                .then(searchName => {
                    if (searchName.total !== 0) {
                        toast.success(`По вашему запросу найдено ${searchName.total} фотографий`);
                        setSearchName(filter(searchName.hits))
                        setStatus("resolved")
                    }
                    else {
                        toast.error("Введите корректное имя запроса");
                        setStatus("rejected")
                    }
                })
    }, [imgName]);

    useEffect(() => {

        const options = {
            key: '30076608-453b15a34a4d23543af1b2a78',
            q: imgName,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: "true",
            per_page: "12",
        }       
        if (options.q === '' || page < 2) {
            return;
        }
        setLoader(true);

        fetch(`https://pixabay.com/api/?key=${options.key}&q=${options.q}&image_type=${options.image_type}&orientation=${options.orientation}&safesearch=${options.safesearch}&page=${page}&per_page=${options.per_page}`)
        .then(response => response.json())
            .then(searchName => { setSearchName(prevState => [...prevState, ...filter(searchName.hits)]); setStatus("resolved"); setLoader(false); })
        
        
    }, [page]);

    const filter = hits => {
        return hits.reduce((allHits, hit) => {
            const data = { id: hit.id, tags: hit.tags, largeImageURL: hit.largeImageURL, webformatURL: hit.webformatURL }
            allHits=[...allHits, data];
            return allHits;
        }, [])
    }
    
        if (status === "pending" ) { 
            return (
                <Spinner />
            )
        }
        if (status === "resolved") { 
            return (
                <>
                    <ul className={css.ImageGallery}>{searchName.map(({ webformatURL, id, tags, largeImageURL }) =>
                        (<ImageGalleryitems key={id} webformatURL={webformatURL} tags={tags} largeImageURL={largeImageURL} onToggle={toggleModal} />))}
                    </ul>
                    {loader ? <Spinner /> : <LoadMore onClick={loadMore} />}
                    {showModal && <Modal largeImg={largeImageURL} onToggle={toggleModal} />}
                </>)
                
        }
}

    ImageGallery.propTypes = {
    imgName: PropTypes.string.isRequired,
    
    };