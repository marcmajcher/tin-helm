import { useRecoilState } from 'recoil';
import { testAtom } from './atoms'

export default function TestButton() {
  const [test, setTest] = useRecoilState(testAtom)

  return <div>
    <button onClick={() => setTest(test + 1)}>Click Me</button>
  </div>
}