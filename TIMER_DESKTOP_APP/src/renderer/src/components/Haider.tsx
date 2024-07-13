import React, { useCallback } from 'react'
import { IoClose } from 'react-icons/io5'
import { FaRegWindowMinimize } from 'react-icons/fa'

const Haider = () => {
  const onClose = useCallback((): void => {
    window.electron.ipcRenderer.send('close-app')
  }, [])

  const onMinimize = useCallback((): void => {
    console.log('minimize app')
    window.electron.ipcRenderer.send('minimize-app')
  }, [])

  return (
    <div className="relative">
      <div
        className="flex rounded-t-xl px-2 bg-subMain w-screen h-7 justify-between align-middle webkit-app-region-drag"
        style={{ WebkitAppRegion: 'drag' } as React.CSSProperties}
      >
        <h3 className="text-center text-white font-bold my-auto">Timer App</h3>
        <div className="flex gap-3" style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties}>
          <button onClick={onMinimize} className="text-white font-bold w-5 aspect-square">
            <FaRegWindowMinimize />
          </button>
          <button onClick={onClose} className="text-white font-bold w-5 aspect-square">
            <IoClose />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Haider
