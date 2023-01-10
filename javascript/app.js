var todo_form = document.querySelector('.frm');
var todo_input = document.querySelector('#item-input');
var submit_btn = document.querySelector('.submit-btn');

addEventListener('submit',addAnItem);

function addAnItem(event){
    event.preventDefault();

    if(todo_input.value == ''){
        alert('Input feild is empty!');
    }else{
        var list_container = document.createElement('div');
        var list_item = document.createElement('li');
        var delete_btn = document.createElement('button');
        var done_btn = document.createElement('button');

        list_container.className = 'single-item';
        delete_btn.className = 'delete-btn';
        done_btn.className = 'done-btn';

        list_item.innerText = todo_input.value;
        delete_btn.innerText = 'X';
        done_btn.innerText = 'Done';

        list_container.appendChild(list_item);
        list_container.appendChild(delete_btn);
        list_container.appendChild(done_btn);

        var ordered_list = document.querySelector('ol');

        ordered_list.appendChild(list_container);

        todo_input.value = '';

        delete_btn.addEventListener('click', () => {
            list_container.remove();
        })

        done_btn.addEventListener('click', ()=>{
            list_item.style.textDecoration = 'line-through';
        })

    }
}