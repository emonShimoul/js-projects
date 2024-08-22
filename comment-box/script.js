document.getElementById('btn-post').addEventListener('click', ()=>{
    const commentBox = document.getElementById("new-comment");
    const newComment = commentBox.value;

    const commentContainer = document.getElementById("comment-container");
    const p = document.createElement("p");
    p.innerText = newComment;
    commentContainer.appendChild(p);

    commentBox.value = "";
})