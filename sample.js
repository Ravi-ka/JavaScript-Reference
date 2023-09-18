const list = [];

function addItem(){
    list.push({
        name:'ka',
        age:23
    },{
        name:'ravi',
        age:27
    });
    console.log(list)
}
addItem();

function displayList(){
    for(let i=0; i < list.length; i++){
        const ListItems = list[i];
        const {name,age} = ListItems;
        console.log(name);
        console.log(age);
    }
    
}
displayList(); 