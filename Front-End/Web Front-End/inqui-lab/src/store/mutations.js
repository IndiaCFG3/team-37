export const SET_CURRENT_USER = (state, User) => {
    state.CurrentUser = User;
    window.localStorage.CurrentUser = JSON.stringify(User);
}

export const LOGOUT_USER = (state) => {
    state.CurrentUser = {}; // Change Authenticated User
    window.localStorage.CurrentUser = JSON.stringify({});
}

export const LOAD_USER_DATA = (state, UserData) => {
    console.log(UserData);
    state.UserData = UserData;
}