const store = {
    todos:[
    {
        id:"1",
        title: "complete task A",
        completed: false,
    },
    {
        id:"2",
        title: "read book",
        completed: true,

    },
    {
        id:"3",
        title: "write code",
        completed: true,

    },
],

};
const storeHandler = {
    get(target, property){
        console.log("oh our are tryinng to get" , property);
        return target [property];
    },
    set(target, property, value){
       
        target[property] = value;

        if (property == "todos"){
            window.dispatchEvent(new Event("todoschange"));
        }
        return true;
        localStorage.setItem("store",JSON.stringify(store))
    },
};


// storeProxy.todos =  new Proxy(store, storeHandler);
const storeProxy = new Proxy(store, storeHandler );

function addTodo(newTodo){
    storeProxy.todos = [...storeProxy.todos,newTodo ]
}
function deleteTodo(id){
    storeProxy.todos = storeProxy.todos.filter(todo=> id !==id)

}


function toggleCompleted(id, completed){
    storeProxy.todos = storeProxy.todos.map(todo =>{
        if (todo.id ===id){
            return {...todo, completed :completed}
        }
        else{
            return todo;
        }
    })
}







export{addTodo, deleteTodo, toggleCompleted};



export default storeProxy;
