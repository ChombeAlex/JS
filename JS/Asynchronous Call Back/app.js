posts = [{
    title: "post 1",
    body: "post one"
},

{
    title: "post 2",
    body: "post two"
}
]


function createpost(post) {
    setTimeout(function () {
        posts.push(post);
    }, 1000);
}

function getPost() {
    setTimeout(function () {
        let output = '';
        posts.forEach(function (post) {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;

    }, 2000)

}

createpost({ title: "post 3", body: "post three" });

getPost();