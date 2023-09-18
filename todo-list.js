const todoList =[{
    name:'add',
    dueDate:'2023-12-23'
},{
    name:'second',
    dueDate:'2023-12-23'
}]


displayList();
function displayList(){
    let result='';
    for(let i=0; i < todoList.length; i++){
        const itemObj = todoList[i];
        const {name,dueDate} = itemObj;
        console.log(name)
        ///const dueDate = itemObj.dueDate;
      
        const html = `<div>${name}</div> <div>${dueDate}</div>
        <button onclick="
            todoList.splice(${i},1)
            displayList();
        " class='delete-button' >Delete</button>`
        result += html;
    }
    console.log(result);

    document.querySelector('.display-list-items').innerHTML=result;
}


function getList(event){
    const addBtn = document.querySelector('.add-button')
    const listItem = document.querySelector('.input-list')
    const Date = document.querySelector('.add-date')
    const dueDate = Date.value;
    const name = listItem.value;
         todoList.push({
            name,
            dueDate
         });
         console.log(todoList)
         listItem.value='';
         displayList();
}

