const usersList = () =>fetch('https://alurageek-voidzaid.onrender.com/users').then((response)=>response.json());

export const usersServices = {
    usersList
}