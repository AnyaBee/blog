import React from 'react';
import Button from '../button/button';

const Modal = ({ handleClose, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="modal-button-wrapper">
          <button className="modal-close-button" onClick={handleClose}>close</button>
        </div>
        <form>
          <label>
            <input className="modal-input" type="text" placeholder="Username"/>
          </label>
          <label>
            <input className="modal-input" type="text" placeholder="Password"/>
          </label>
          <Button className="modal-button" text='Login'/>
        </form>

      </section>
    </div>
  );
};

export default Modal;
