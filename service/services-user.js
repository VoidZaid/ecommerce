const usersList = () =>fetch('http://localhost:3000/users').then((response)=>response.json());

export const usersServices = {
    usersList
}