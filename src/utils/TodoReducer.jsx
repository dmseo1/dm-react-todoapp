export const todoReducer = (todos, action) => {
    switch (action.type) {

        case "SET_INIT_DATA":
            return action.payload;

        case "ADD_TODO":
            const details = {
                id: String(todos.length + 1),
                title: action.payload,
                status: 'todo'
            }

            let formBody = [];
            for (let property in details) {
                let encodedKey = encodeURIComponent(property);
                let encodedValue = encodeURIComponent(details[property]);
                formBody.push(encodedKey + "=" + encodedValue);
            }
            formBody = formBody.join("&");

            fetch('http://localhost:8008/api/todo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: formBody
            }).then(response => response.json())
              .then(res => {
                  console.log("추가된 데이터: ", res.data);
              });

            return [...todos, { title: action.payload, id: String(todos.length + 1), status: 'todo' }];

        case "CHANGE_TODO_STATUS":
            var updateTodos = todos.map(data => {
                if (action.payload === data.id) {
                    data.status = (data.status === "todo") ? "done" : "todo"; 
                    
                    //DB 변경
                    fetch(`http://localhost:8008/api/todo/${data.id}`, {
                            method: 'PATCH',
                            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                            body: `status=${data.status}`
                        } 
                    ).then(_ => {
                        console.log(`${data.id}번 데이터 ${data.status}로 상태 변경`);
                    });
                }
                return data;
            });
            return updateTodos;
        default:
            console.log("It should not happen");
            return;
    }
}
