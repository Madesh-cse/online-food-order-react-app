import ReactDom from 'react-dom'
import classes from './ProductModal.module.css'
export default function ProductModal({children,open,onClose}){

    if(!open){
        return null
    }
    return ReactDom.createPortal(
        <div className={classes.modaloverlay}>
      <div className={classes.modalwrapper} aria-modal aria-hidden tabIndex={-1} role="dialog">
        <div className="modal">
          <button type="button" className={classes.modalclosebutton} onClick={onClose}>
            &times;
          </button>
          {children}
        </div>
      </div>
    </div>,document.getElementById('modal')
      )
}
