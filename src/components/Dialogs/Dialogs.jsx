import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {


        /* пример как работает терналиный оператор
        let age = 15;
        alert(age > 17 ? "вы старше" : "вы младше");*/




        // реализация масива через мап в jsx элемент
        let dialogElements = props.state.dialosData
            .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

        /* как работает тут масив реакта
            [
            <Message name={dialosData[0].name} id={dialosData[0].id}/>,
            <Message name={dialosData[1].name} id={dialosData[1].id}/>,
            <Message name={dialosData[2].name} id={dialosData[2].id}/>,
            <Message name={dialosData[3].name} id={dialosData[3].id}/>,
            <Message name={dialosData[4].name} id={dialosData[4].id}/>,
            <Message name={dialosData[5].name} id={dialosData[5].id}/>

        ];*/
        let messageElement = props.state.messagesData
            .map(messages => <Message name={messages.message} id={messages.id}/>);

//масив элементов
        return (
            <div className={classes.dialogs}>
                <div className={classes.dialogs_item}>

                    {dialogElements}
                </div>
                <div className={classes.messages}>
                    {messageElement}
                </div>


            </div>

        )


}

export default Dialogs;