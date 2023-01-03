import './App.css';
import DidMount from './ComponentDidMount/DidMount';
import Constructor from './Constructor/Constructor';
import Parent from './getDerivedStateToProps/Parent';
import ParentSnap from './getSnapBeforeUpdate/ParentSnap';
import Render from './Render/Render';
import ParentUpdate from './ShouldComponentUpdate/ParentUpdate';


function App() {
  return (
    <div className="App">
      <Constructor/>
      <hr/>
      <Parent/>
      <hr/>
      <Render/>
      <hr/>
      <DidMount/>
      <hr/>
      <ParentUpdate/>
      <hr/>
      <ParentSnap/>
    </div>
  );
}

export default App; 