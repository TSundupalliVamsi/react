import { useEffect, useState } from "react";

function useFetch(url){
    const [data, setData] = useState();

    useEffect(() => {
        if(!url) return;

        fetch(url)
        .then((res) => res.json())
        .then((result) => setData(result))
        .catch((err => console.log(err)));
    }, [url]);
    return data;
}

export default useFetch;