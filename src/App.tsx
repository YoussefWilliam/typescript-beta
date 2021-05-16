import './App.css';
import { TextFiled } from './TextFiled';


// We want to learn the following:
// props
// hooks

function App() {
  return (
    <div>
      <TextFiled
        text="hello typescript"
        myPerson={{ firstName: "joe", lasName: "william" }}
        hanleChange={(e) => console.log(e.target.value)}
      />
    </div>
  );
}

export default App;
