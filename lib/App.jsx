import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./App.css";
import PropTypes from 'prop-types';

function Modal({ isOpen, setIsOpen, text }) {
  const ref = useRef()


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside, true)
  }, [setIsOpen])

  //const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      {
        isOpen && createPortal(
          <>
            <div className="modalWrapper">
              <div ref={ref} className="modalContainer">
                <p className="modalContent">{text}</p>
              </div>
            </div>

          </>
          , document.body)
      }

    </>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  text: PropTypes.string
}

export default Modal;