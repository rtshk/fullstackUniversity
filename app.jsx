import './App.css'

function App() {

  // Array of fruits
  const fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Grapes']

  // Function to handle click on a fruit
  const handleFruitClick = (fruit) => {
    alert(`You clicked on ${fruit}`)
  }

  return (
    <>
      <h1>Fruits List</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li
            key={index}
            onClick={() => handleFruitClick(fruit)}
          >
            {fruit}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
