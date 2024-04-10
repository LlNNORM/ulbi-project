import React from 'react';
import classes from './MyModal.module.css'


const MyModal = ({children, visible, setVisible}) => {

    const rootClasses = [classes.myModal];

    if (visible) {
        rootClasses.push(classes.active)
    }
    return (
        <div className={rootClasses.join(' ')} onClick={()=>setVisible(false)}>
            {/* stopPropagation здесь для того,чтобы предотвратить всплытие события,
            а именно убрать событие закрытия модального окна при нажатии на контентную часть */}
            <div className={classes.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;