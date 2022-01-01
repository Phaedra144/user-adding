import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {

    const Backdrop = (props) => {
        return (<div className={classes.backdrop} onClick={props.onClose} />);
    };

    const ModalOverlay = (props) => {
        return (
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onClose}>Okay</Button>
                </footer>
            </Card>
        );
    };



    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onClose={props.onClose} />, document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay onClose={props.onClose} title={props.title} message={props.message} />,
                document.getElementById('modal-root')
            )}
        </React.Fragment>
    );
};

export default ErrorModal;
