// const url = "http://localhost:3000/users";
const url = 'https://alurageek-voidzaid.onrender.com/users';
const usersList = () =>fetch(url).then((response)=>response.json());

export const usersServices = {
    usersList
}