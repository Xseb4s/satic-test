/* importar el componente */
import { List } from "../components/list";

function App() {

  return (
    <>
      {/* section para ordenar */}
      <section>
        <div className="header">
            <h1>Wellcome!</h1>
            <p>My website fetches data from two APIs to display the posts made by each user.</p>
            <p>Used APIs from</p>
            <p><a target="_blank" href="https://jsonplaceholder.typicode.com" alt="jsonplaceholder">jsonplaceholder.typicode.com</a></p>
            <p>by</p>
            <p>@<a target="_blank" href="https://github.com/Xseb4s" alt="Link to github">Xseb4s</a></p>
            
        </div>
        {/* integro el componente */}
        <List />
      </section>
      
    </>
  )
}

export default App
