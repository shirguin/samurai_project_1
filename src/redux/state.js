let rerenderEntireTree = ()=>{
  console.log('State changed');
}

const state = {
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
};

export const addPost = () => {
  const newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export const updateNewPostText = (newPostText) => {
  state.profilePage.newPostText = newPostText;
  rerenderEntireTree(state);
};

export const subscribe = (observer)=>{
  rerenderEntireTree = observer;
}
export default state;
