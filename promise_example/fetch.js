// 1. Front-end: Xây dựng giao diện người dùng

//2. back-end: Xây dựng logic xử lý +  Cơ sở dữ liệu

// API (URL) -> Application programing interface

// Cổng giao diện giữa các PM

// Backend -> API -> Fetch -> JSON/XML
// -> JSON,parse -> javascript types
// -> Render ra giao diện với HTML

var postAPI = 'https://jsonplaceholder.typicode.com/posts';

fetch(postAPI)
    .then(function(response){
        return response.json();
        //json.parse: json -> javascript types
    })
    .then(function(posts){
       var htmls = posts.map(function(post){
        return `<li>
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </li>`;
       });

       var html = htmls.join('');
       document.getElementById('post-block').innerHTML = html;
    })
    .catch(function(err){
        alert('có lỗi');
    });