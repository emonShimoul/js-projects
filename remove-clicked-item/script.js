document.getElementById('list-container').addEventListener('click',(event) => {
    // console.log(event.target);
    event.target.parentNode.removeChild(event.target);    // event delegate
});

document.getElementById('btn-add-item').addEventListener('click',() => {
    const listContainer = document.getElementById('list-container');

    const li = document.createElement('li');
    li.innerText = 'Brand new item added.';
    listContainer.appendChild(li);
});