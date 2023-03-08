const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        allowIncre: true 
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 1,
        allowIncre: true 
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        allowIncre: true 
    }
]

const postEl = document.querySelector(".post")
let htmlContent = ""

function createHTML(posts) {
    for (let i = 0; i < posts.length; i++){
        
        htmlContent += 
        `
            <div class="header">
                <img class="avatar" src="${posts[i].avatar}">
                <div class="avatar-info">
                    <div class="user-full-name">${posts[i].name}<span class="accent-text"></span></div>
                    <span class="location">${posts[i].location}</span>
                </div>
            </div>

            <div > 
                <img class="post-img" src="${posts[i].post}">
            </div>

            <div class="footer">
                <div class="icons">
                    <img class="icon-heart" src="images/icon-heart.png" id="like-${i}">
                    <img class="icon-comment" src="images/icon-comment.png">
                    <img class="icon-dm" src="images/icon-dm.png">
                </div>
                <div class="like-count accent-text" id="count-${i}">
                    ${posts[i].likes} ${posts[i].likes > 1 ? "likes" : "like"}
                </div>
                <div class="comment">
                    <span class="user-id accent-text">
                        ${posts[i].username}
                    </span> 
                    <span class="user-comment">
                        ${posts[i].comment}
                    </span></div>
            </div>
            <br>
        `    
    }
    
}

function render(posts){
    createHTML(posts)
    postEl.innerHTML = htmlContent
}

render(posts)

let allowIncre = true 


for (let i = 0; i < posts.length; i++){
    const likeIconEl = document.getElementById(`like-${i}`)
    const likeCountEl = document.getElementById(`count-${i}`)

    likeIconEl.addEventListener("click", function(e){
        
        if (allowIncre){
            posts[i].likes++
            likeIconEl.src = "images/like.png"
            likeCountEl.innerHTML =  
            `
            <div class="like-count accent-text" id="count-${i}">${posts[i].likes} ${posts[i].likes > 1 ? "likes" : "like"}
            </div>
            `
            allowIncre = false
        }
        else {
            posts[i].likes--
            likeIconEl.src = "images/icon-heart.png"
            likeCountEl.innerHTML = 
            `
            <div class="like-count accent-text" id="count-${i}">${posts[i].likes} ${posts[i].likes > 1 ? "likes" : "like"}
            </div>
            `
            allowIncre = true
        }
    })

}



