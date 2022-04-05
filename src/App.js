import './App.css';
import { testAtom } from './atoms';
import { useRecoilValue } from 'recoil';
import TestButton from './TestButton';

function App() {
  const test = useRecoilValue(testAtom);

  return (
    <div>
      <h1>heya</h1>
      <p>Value: {test}</p>
      <TestButton />
    </div>
  );
}

export default App;
