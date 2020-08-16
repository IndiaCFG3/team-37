export const GetCurrentUserName = (state) => {
    return state.CurrentUser.Name;
}

export const GetAvatarDisplay = (state) => {
    var Name = state.CurrentUser.Name.slice(0, 1);
    return Name;
}

export const CheckCurrentUser = (state) => {
    if(Object.keys(state.CurrentUser).length === 0 && state.CurrentUser.constructor === Object){
        return false;
    } else {
        return true;
    }
}

export const GetTeams = (state) => {
    return state.Teams;
}

export const GetUserData = (state) => {
    return state.UserData;
}
// export const GetCurrentUserAttr = (state) => {
//     return state.CurrentUser.Attr;
// }