import { Component } from "react";
import PropTypes from 'prop-types';
import css from './Searchbar.module.css'
import { AiOutlineSearch } from "react-icons/ai";
import { toast } from "react-toastify";


export default class Searchbar extends Component {

    static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    
    };

    state = { 
        imgName: '',
    }

    handleNameChange = event => {
        this.setState({ imgName: event.currentTarget.value.toLowerCase()})
    }

    handleSubmit = event => { 
        event.preventDefault();

        if (this.state.imgName.trim() === '') { 
            toast.error("Введите имя для поиска")
            return;
        }

        this.props.onSubmit(this.state.imgName);
        this.setState({ imgName: '' });
    }

    render() { 
        return (
            <header className={css.Searchbar}>
                <form onSubmit={this.handleSubmit} className={css.SearchForm }>
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
                    value={this.setState.imgName}
                    onChange={this.handleNameChange}
                    />
                </form>
            </header>
        )
    }
}

