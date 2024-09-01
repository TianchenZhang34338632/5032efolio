import {ref} from 'vue'
import router from '../router/index'

const isAuthenticated = ref(false)

export function userAuthentication() {
    const login = () =>{
        isAuthenticated = true
    }

    const logout = () =>{
        isAuthenticated = false
    }

    return {isAuthenticated,login,logout}
}
