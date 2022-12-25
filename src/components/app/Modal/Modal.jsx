import { useEffect } from "react";
import PropTypes from 'prop-types';
import { createPortal } from "react-dom";
import css from './Modal.module.css'


const modalRoot = document.querySelector('#modal-root')

export default function Modal({ largeImg, onToggle }) {
    
    useEffect(() => {
        const handleKeyDown = e => { 
        if (e.code === 'Escape') { 
            onToggle();
        }
    }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [onToggle]);
    
    
    const handleBackDropClick = e => { 
        if (e.currentTarget === e.target) { 
            onToggle();
        }
    }


    return createPortal(<div className={css.Overlay} onClick={handleBackDropClick}>
        <div className={css.Modal}>
            <img className={css.imgModal} src={largeImg} alt="" />
        </div>
    </div>, modalRoot)
}
    Modal.propTypes = {
        largeImg: PropTypes.string.isRequired,
        onToggle: PropTypes.func.isRequired,
        };






