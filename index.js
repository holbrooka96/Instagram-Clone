const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "/avatar-vangogh.jpg",
        post: "/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "/avatar-courbet.jpg",
        post: "/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "/avatar-ducreux.jpg",
    post: "/post-ducreux.jpg",
    comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152
    }
]
const mainEl = document.querySelector('.posts');
const postTemplate = mainEl.innerHTML

function getPostCount() {
    let temp = ""
    for (let i = 0; i < posts.length; i++) {
            mainEl.innerHTML = postTemplate
            renderPost(i)
            temp += mainEl.innerHTML
        }
            mainEl.innerHTML  = temp
}

function renderPost(num) {
    let post = posts[num]
    const fullName = document.querySelector('.post #full-name');
    const username = document.querySelector(".post #username")
    const locationText = document.querySelector(".post #location")
    const avatarImg = document.querySelector(".post #poster-avatar")
    const postImg = document.querySelector(".post #post-img")
    const comment = document.querySelector(".post #post-text")
    const likes = document.querySelector(".post #likes-num")
    const likeBtn = document.querySelector('#heart')
    const postContainer = document.querySelector('.post')
        
    postContainer.id = `${postContainer.id}-${num}`
    console.log(postContainer)
    fullName.id = `${fullName.id}-${num}`
    username.id = `${username.id}-${num}`
    locationText.id = `${locationText.id}-${num}`
    avatarImg.id = `${avatarImg.id}-${num}`
    postImg.id = `${postImg.id}-${num}`
    comment.id = `${comment.id}-${num}`
    likes.id = `${likes.id}-${num}`
    likeBtn.id = `${likeBtn.id}-${num}`
    
    fullName.textContent = post.name
    username.textContent = post.username
    locationText.textContent = post.location
    avatarImg.src = post.avatar;
    postImg.src = post.post;
    comment.textContent = post.comment
    likes.textContent = post.likes
}

getPostCount() 

const likeBtn = document.querySelectorAll('.heart')
likeBtn.forEach(button => button.addEventListener('click', function() {
    const likes = document.querySelector("#likes-num-"+this.id.charAt(this.id.length - 1))
    likes.textContent = Number(likes.textContent)+1 
    
 }))
