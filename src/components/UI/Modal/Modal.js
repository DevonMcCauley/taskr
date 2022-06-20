import "./Modal.css";
import { Fragment, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import ReactDOM from "react-dom";

const Modal = (props) => {
	const { children, modalIsOpen, handleClose, modal, title } = props;
	const nodeRef = useRef(null);
	const root = document.getElementById("modal-root");

	// Allows the user to close the modal with the 'escape' key
	useEffect(() => {
		const closeOnEscapeKey = (e) =>
			e.key === "Escape" ? handleClose() : null;
		document.body.addEventListener("keydown", closeOnEscapeKey);
		return () => {
			document.body.removeEventListener("keydown", closeOnEscapeKey);
		};
	}, [handleClose]);

	return (
		<Fragment>
			{ReactDOM.createPortal(modal, root)}

			<CSSTransition
				in={modalIsOpen}
				timeout={{ entry: 0, exit: 300 }}
				unmountOnExit
				classNames="modal"
				nodeRef={nodeRef}
			>
				<div className="modal" ref={nodeRef}>
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">{title}</h5>
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								></button>
							</div>
							<div className="modal-body">{children}</div>
							<div className="modal-footer">
								<button
									onClick={handleClose}
									className="btn btn-primary"
								>
									OK
								</button>
							</div>
						</div>
					</div>
				</div>
			</CSSTransition>
		</Fragment>
	);
};

export default Modal;
