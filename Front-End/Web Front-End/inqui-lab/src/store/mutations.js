export const SET_CURRENT_USER = (state, User) => {
    state.CurrentUser = User;
    window.localStorage.CurrentUser = JSON.stringify(User);
}

export const LOGOUT_USER = (state) => {
    state.CurrentUser = {'Name': 'TestUser'}; // Change Authenticated User
    window.localStorage.CurrentUser = JSON.stringify({});
}

// export const LOAD_ALL_USERS = (state) => {

// }