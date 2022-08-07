import ToDo from "./components/ToDo";

function App() {
  return (
    <div>
      <h1>My ToDo List</h1>
      <ToDo text="Drink Coffee" />
      <ToDo text="Learn React" />
      <ToDo text="Master React" />
    </div>
  );
}

export default App;
