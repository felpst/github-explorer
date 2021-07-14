import { Counter } from './components/Counter';
import { RepositoryList } from './components/RepositoryList';
import './styles/global.scss';

export function App() { // This a reactjs component. It is a function, with a name that has its first letter capitalized, and that returns a html code.
    return ( // I am using inside this function a fragment (<> </>) that is like a html tag, but that doesn't create any visual effect to the html code itself.
        <>
            <RepositoryList/>
            <Counter />
        </>
    )
}