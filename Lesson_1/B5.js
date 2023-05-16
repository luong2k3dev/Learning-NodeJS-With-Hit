/*
    Chuyển đổi đoạn code dưới đây từ promise -> async / await
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((result) => console.log(result))
        .catch((err) => console.error(err));
*/

// Using Promise
fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((result) => console.log(result))
    .catch((err) => console.error(err));

// Using async / await
async function getUsers() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await res.json();
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

getUsers();


