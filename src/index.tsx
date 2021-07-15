import { render } from "react-dom";
import { App } from "./App" // Since I have included the resolve extensions in the webpack config, I don't need here to specify which extensions my project uses.

render(<App />, document.getElementById("root")) // The first parameter is which elements I want to render, and the second element is where I want to render them
