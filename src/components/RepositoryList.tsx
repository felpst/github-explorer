import { RepositoryItem } from "./RepositoryItem"; // I can use useEffect to run a function when something happens in my application
import { useState, useEffect } from "react";

import '../styles/repositories.scss';

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {

    const [repositories, setRepositories] = useState<Repository[]>([]); // I am using a generic type <>

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos') // JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses
            .then(response => response.json()) // getting the responde and then transforming it into a json format
            .then(data => setRepositories(data)) // getting the data that comes out of the first then and setting it to the repository.
    }, []); // The useEffect function has two parameters, the first is the function that will be executed, the second is what are the dependecies (or in other words, what are the things that it must pay attention to in orther to detect a change and then run a function). If the second parameter is an empty array, then it will execute the function only once, when the element that has this function appear on screen. Is the useEffect is used without the second parameter it will generate an infinite loop. Another problem might be if a change the variable I am wathcing throught the use of the useEffect function, it will also generate an infinite loop.

    return (
        <section className="repository-list">
            <h1>List de repositórios</h1>

            <ul>
                {repositories.map(repository => { // Every time i use a map function in react ( that is basically a forEach but returns something for each element), I need to include the key property, that helps React to understand what happens with each item if there is a change in the data (for this case if there is a change in the repositories, React must understand what were the repositories that changed, and for that it needs a unique identifier).
                    return <RepositoryItem key={repository.name} repository={repository}/>
                })}
            </ul>
        </section>
    )
}