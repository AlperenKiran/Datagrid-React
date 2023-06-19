import DataGrid from "./components/DataGrid";
import Header from "./components/Header";
import DataContextsProvider from "./contexts/DataContexts";

function App() {
  return (

    < div className="App">

      <Header />
      <DataContextsProvider>
        <DataGrid />
      </DataContextsProvider>

    </div >

  );
}

export default App;
