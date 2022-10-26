import "./App.css";
import Expenses from "./component/Expenses";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 294.6, date: new Date(2021, 7, 15) },
    { title: "Toilet Paper", amount: 232.6, date: new Date(2021, 7, 29) },
    { title: "Motobike Insurance", amount: 212.5, date: new Date(2021, 7, 12) },
    { title: "Hello Insurance", amount: 322.1, date: new Date(2021, 7, 11) },
  ];

  return (
    <div className="App">
      <h1>Hello world</h1>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
