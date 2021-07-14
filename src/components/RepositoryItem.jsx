export function RepositoryItem(props) { // props is the parameter used by react to encapsulate all the arguments that this function may recieve from other components.
    return (
        <li>
            <strong>{props.repository.name ?? 'Default'}</strong>
            <p>{props.repository.description ?? 'Default'}</p>

            <a href={props.repository.link ?? 'https://youtube.com'}>
                Acessar repositório
            </a>
        </li>
    );
}