import { useEffect, useState } from "react";

interface  gitHubUserType  {
    id :number,
    login:string,
    avatar_url: string, 
    html_url:string,
    type:string
}

const useGitHubUserFetch = (url : string) => {

    const[gitHubUsers , setgitHubUsers] = useState<gitHubUserType[]>([]);

    useEffect (()=> {

        fetch(url)

        .then(res => res.json())

        .then(data => setgitHubUsers(data))

    } , [url])

    return gitHubUsers;
}

export default useGitHubUserFetch;