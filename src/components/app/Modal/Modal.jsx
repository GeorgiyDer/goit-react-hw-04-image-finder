import { Component } from "react";
import PropTypes from 'prop-types';
import { createPortal } from "react-dom";
import css from './Modal.module.css'


const modalRoot = document.querySelector('#modal-root')

export default class Modal extends Component { 
    
    static propTypes = {
    largeImg: PropTypes.string.isRequired,
    onToggle: PropTypes.func.isRequired,
    };
    
    componentDidMount() { 
        window.addEventListener('keydown', this.handleKeyDown)
    }
    componentWillUnmount() { 
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown =  e => { 
            if (e.code === 'Escape') { 
                this.props.onToggle();
            }
    }
    
    handleBackDropClick = e => { 
        if (e.currentTarget === e.target) { 
            this.props.onToggle();
        }
    }

    render() { 
        return createPortal(<div className={css.Overlay} onClick={this.handleBackDropClick}>
            <div className={css.Modal}>
                <img className={css.imgModal} src={this.props.largeImg} alt="" />
            </div>
        </div>, modalRoot)
    }
}





