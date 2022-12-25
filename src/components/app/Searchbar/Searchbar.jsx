import { useState } from "react";
import PropTypes from 'prop-types';
import css from './Searchbar.module.css'
import { AiOutlineSearch } from "react-icons/ai";
import { toast } from "react-toastify";


export const Searchbar = ({ onSubmit }) => {

    const [imgName, setImgName] = useState('')

    const handleNameChange = event => {
        setImgName(event.currentTarget.value.toLowerCase())
    }

    const handleSubmit = event => { 
        event.preventDefault();

        if (imgName.trim() === '') { 
            toast.error("Введите имя для поиска")
            return;
        }

        onSubmit(imgName);
        setImgName('');
    }

    return (
        <header className={css.Searchbar}>
            <form onSubmit={handleSubmit} className={css.SearchForm }>
                <button type="submit" className={css.SearchFormButton}>
                    <span className={css.SearchFormButtonLabel}>Search</span>
                    <AiOutlineSearch />
                </button>
                <input
                className={css.SearchFormInput}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                value={imgName}
                onChange={handleNameChange}
                />
            </form>
        </header>
    )
}

    Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    };