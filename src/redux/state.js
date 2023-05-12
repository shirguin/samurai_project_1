const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", count: 9 },
        { id: 2, message: "It's my first post", count: 14 },
      ],
      newPostText: "it-kamasutra.com",
    },
    messagesPage: {
      dialogs: [
        { id: 1, name: "Алексей" },
        { id: 2, name: "Иван" },
        { id: 3, name: "Светлана" },
        { id: 4, name: "Марина" },
        { id: 5, name: "Петр" },
        { id: 6, name: "Сергей" },
        { id: 7, name: "Андрей" },
      ],
      messages: [
        { id: 1, message: "Привет" },
        { id: 2, message: "Как дела?" },
        { id: 3, message: "Все ок" },
        { id: 4, message: "Прикольно" },
        { id: 5, message: "Как сам?" },
        { id: 6, message: "Что на завтра?" },
      ],
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("State changed");
  },
  _addPost() {
    const newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  _updateNewPostText(newPostText) {
    this._state.profilePage.newPostText = newPostText;
    this._callSubscriber(this._state);
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },



  dispatch(action) {
    //{type: 'ADD-POST'}
    if (action.type === "ADD-POST") {
      this._addPost();
    } else if(action.type === 'UPDATE-NEW-POST-TEXT') {
      this._updateNewPostText(action.newPostText);
    };
  },
};

export default store;
