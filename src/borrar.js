const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholdeTYPO.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums",
  ];

const getData = async function () {
    try {
        const [users, posts, albums] =
            urls.map(async (url) => {
                const result =  await fetch(url)
                return await result.json()
            });
        console.log("users", await users);
        console.log("posta", await posts);
        console.log("albums",await albums);

    } catch (erro) {
        console.log("my error")
    };



};




const my_async_function = async () => {
    console.log("2")
    await fetch("https://www.facebook.com").then((resp)=>console.log("holagoogle"))
    console.log("1")
}