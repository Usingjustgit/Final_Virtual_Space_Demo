import Timer from './components/Timer'

function App(): JSX.Element {
  return (
    <div className="px-3 py-2 text-white bg-dry relative w-[calc(100vw-0px)] h-[calc(100vh-28px)] webkit-app-region-drag rounded-b-xl">
      <Timer />
    </div>
  )
}

export default App
