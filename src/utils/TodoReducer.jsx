export const todoReducer = async (todos, action) => {
    switch(action.type) {

        case "SET_INIT_DATA": 
            console.log("SET_INIT_DATA");
            return action.payload;

        case "ADD_TODO":

            const details = {
                id: String(todos.length + 1),
                title: "123",
                status: 'todo'
              }
          
              let formBody = [];
              for (let property in details) {
                let encodedKey = encodeURIComponent(property);
                let encodedValue = encodeURIComponent(details[property]);
                formBody.push(encodedKey + "=" + encodedValue);
              }
              formBody = formBody.join("&");
          
              console.log("formbody: " + formBody);

              var writer = await fetch('http://localhost:8008/api/todo', {
                method : 'POST',
                headers: {'Content-Type' : 'application/x-www-form-urlencoded'},
                body: formBody
            });

            var inputData = await writer.json();
            await console.log(inputData);
            return [...todos, {title: "123", id: String(todos.length  + 1), status: 'todo'}];
            
        case "CHANGE_TODO_STATUS" :
            console.log("변경할 수 있습니다");
            return "";
    }


}