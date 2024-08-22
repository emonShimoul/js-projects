// for hide secret info
document.getElementById("delete-confirm").addEventListener('keyup', (event) => {
    const text = event.target.value;
    // console.log(text);
    const deleteButton = document.getElementById("btn-delete");
    if(text.toLowerCase() === 'delete'){
        deleteButton.removeAttribute('disabled');
    }else{
        deleteButton.setAttribute('disabled', true);
    }
});


// for comment box 
document.getElementById('btn-post').addEventListener('click', ()=>{
    const commentBox = document.getElementById("new-comment");
    const newComment = commentBox.value;

    const commentContainer = document.getElementById("comment-container");
    const p = document.createElement("p");
    p.innerText = newComment;
    commentContainer.appendChild(p);

    commentBox.value = "";
})