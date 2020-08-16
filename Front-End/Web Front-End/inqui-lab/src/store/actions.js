import axios from 'axios';
import router from "../router/index.js"

export const LogInUser = ({ commit }, User) => {
    axios.post('http://4ac6ea1b7bae.ngrok.io/adminCheck', User)
    .then(Response => {
        if(Response.data.status) {
            router.push({'path': '/DashBoard'});
            commit('SET_CURRENT_USER', User);
        } else {
            alert('Invalid User or Password')
        }
    }).then(error => {
        console.log(error);
    })

    // Here Post request to validate exsisting user
}

export const LogOutUser = ({ commit }) => {
    commit('LOGOUT_USER') // Done
}

export const AddUser = (context, User) => {
    axios.post('http://4ac6ea1b7bae.ngrok.io/classRepresentative', User)
    .then(Response => {
        // if(Response.POST request Sucessfull!!)
        console.log(Response);
    }).catch(error => {
        console.log(error.message);
    });
}

export const LoadUserData = ({ commit }) => {
    axios.get('http://4ac6ea1b7bae.ngrok.io/classRepresentative')
    .then(Response => {
        commit('LOAD_USER_DATA', Response.data.result);
    }).catch(error => {
        console.log(error.message);
    });
}

export const LoadUsers = ({ commit }) => {
    // commit('LOAD_ALL_USERS'); // To be Implemented.. get users using api

    let User = JSON.parse(window.localStorage.CurrentUser);
    commit('SET_CURRENT_USER', User);
}

export const SubmitUnitForm = ({ commit }, Data) => {
    commit('SUBMIT_UNIT_DATA', Data)
}