import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './component/counterSlice';
import './App.css'

function App() {
  const { count } = useSelector((state) => state.counter)
  const dispatch = useDispatch();
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex flex-row max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900   bg-white rounded-lg border"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
          <p className="mx-2 px-2 align-middle"> {count} </p>
          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900   bg-white rounded-lg border"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
        </div>
      </div>
    </>
  );
}

export default App
