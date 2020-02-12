import { useEffect } from 'react';

const useFetch = (callBack, url) => { 
   
    const fetchInitialData = () => {
        fetch(url)
        .then(response => response.json() )
        .then(res => {
            callBack(res.data); 
        });
    }
    
    useEffect(() => {
        fetchInitialData();
    }, []);
}

export default useFetch;
