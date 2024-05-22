// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("I am First Promise, 3000");
//   }, 3000);
// });
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("error");
//   }, 500);
// });
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("I am First Promise, 6500");
//   }, 6500);
// });
// Promise.all([promise1, promise2, promise3])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch(() => {
//     console.log("end");
//   });
// const btn = document.querySelector(".request");
// btn.addEventListener("click", () => {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => {
//       console.log(response.json);
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });

// fetch("https://jsonplaceholder.typicode.com/posts");
const createPostBtn = document.querySelector(".signUp");
const url = "https://jsonplaceholder.typicode.com/users";
function request() {
  return fetch(
    url +
      new URLSearchParams({
        email: "Sincere@april.biz",
        username: "Bret",
      }),
    {
      method: "GET",
      // body: JSON.stringify({ userId: 4564, title: "dsvsdv" }),
    }
  );
}
createPostBtn.addEventListener("click", () => {
  request();
});
