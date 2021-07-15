interface RepositoryItemProps { // This is the most used convetion. When I am going to create the type of proprierty of a component, I just repeat its name followed by the property's name. 
    repository: {
        name: string;
        description: string;
        html_url: string;
    }

}

export function RepositoryItem(props: RepositoryItemProps) { // props is the parameter used by react to encapsulate all the arguments that this function may recieve from other components.
    return (
        <li>
            <strong>{props.repository.name}</strong>
            <p>{props.repository.description}</p>

            <a href={props.repository.html_url}>
                Acessar repositório
            </a>
        </li>
    );
}