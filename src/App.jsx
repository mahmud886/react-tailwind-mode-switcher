
import './App.css'
import Card from "./components/Card.jsx";
import ThemeSwitcher from "./components/ThemeSwitcher.jsx";

function App() {

  return (
    <>
      <div className="min-h-screen flex flex-col items-center transition duration-200">
        <ThemeSwitcher/>
        <Card/>
      </div>
    </>
  )
}

export default App
