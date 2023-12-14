function getPosts(id) {
return new Promise((resolve, reject) => {
    myHttp.get(`https://jsonplaceholder.typicode.com/posts/1`, (err, res) => {
        if (err) {
           reject(err); 
        }
        resolve(res);
    })
});
}

function getPostComments(post) {
    const {id} = post;
    return new Promise((resolve, reject) => {
        myHttp.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`, (err, res) => {
            if (err) {
               reject(err); 
            }
            resolve(res);
        })
    });
}

function getUserCreatedPost() {
    return new Promise((resolve, reject) => {
        myHttp.get(`https://jsonplaceholder.typicode.com/users/1`, (err, res) => {
            if (err) {
               reject(err); 
            }
            resolve(res);
        })
    });
}

getPost()
.then(post => getPostComments(post))
.then(comments => getUserCreatedPost())
.then(user => console.log(user))
.catch(err => console.log(err));