import React, { useState, useEffect } from 'react'

const UseFetch = (callBack, url) => {   //callBack은 전달받을 함수
    const [loading, setLoading] = useState(false)
    const fetchInputData = () => {
        setLoading(true);
        fetch(url)
            .then(response => { return response.json() })
            .then(res => {
                console.log("RESULT!!!: ");
                console.log(res.data);
                callBack(res.data); //setState를 
                setLoading(false);
            });


        // axios.get('http://localhost:8008/api/todo')
        // .then(response => { return response.json() })
        // .then(res => { 
        //   setTodos
        // })
    }


    useEffect(() => {
        fetchInputData();
    }, [])

    return loading;
}

export default UseFetch
