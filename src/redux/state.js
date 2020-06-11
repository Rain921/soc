import {rerenderEnTree} from "../render";

let state = {
    messagePage:{ postData: [
    {id:1,message: 'hi ,how are you?', likecounts:34},
    {id:2,message: 'it ,my firs post', likecounts:23 }
]
    },
    dialogPage: {
        dialosData: [ // типо данные/обьект с сервера
            {id: 1, name: 'Dimich'},
            {id: 2, name: 'gjgjghjg'},
            {id: 3, name: 'ghjghjghj'},
            {id: 4, name: 'gjjghjg'},
            {id: 5, name: 'jkghghkjg'},
            {id: 6, name: 'Dimich'}
        ],
        messagesData: [
            {id: 1, message: 'hi'},
            {id: 2, message: 'how you?'},
            {id: 3, message: 'ghjghjghj'},
            {id: 4, message: 'gjjghjg'},
            {id: 5, message: 'jkghghkjg'},
            {id: 6, message: 'hfhgfhgfhg'}
        ]
    },
    sidebar: {
        sideMenu: [ // типо данные/обьект с сервера
            {id: "profile", menu: 'Profile',},
            {id: "dialogs", menu: 'Messages'},
            {id: "music", menu: 'Music'},
            {id: "news", menu: 'News'},
            {id: "settings", menu: 'Settings'}
        ],
        friendsData: [
            {id: 1, name: 'Andrey'},
            {id: 2, name: 'Sahok'},
            {id: 3, name: 'Petya'}

        ]
    }



};
export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message:postMessage,
        likecounts:0

    };
    state.messagePage.postData.push(newPost);
    rerenderEnTree(state);


};

export default state;