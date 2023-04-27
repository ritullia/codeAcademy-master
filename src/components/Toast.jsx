import { Toast as BSToast, ToastContainer } from "react-bootstrap"

export const Toast = ({ show, onClose, header, body }) => {
    return (
        <ToastContainer position="top-center">
            <BSToast show={show} autohide delay={3000} onClose={onClose}>
                <BSToast.Header>{header}</BSToast.Header>
                <BSToast.Body>{body}</BSToast.Body>
            </BSToast>
        </ToastContainer>
    )
}