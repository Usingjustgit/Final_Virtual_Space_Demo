import { useEffect, useState } from 'react'
import { Inputs } from './UserInput'
import Swal from 'sweetalert2'
import alram from '../assets/alram.mp3'

const Timer = () => {
  const [isEditing, setIsEditing] = useState<boolean>(true)
  const [isRunning, setIsRunning] = useState<boolean>(false)
  const [hour, setHour] = useState<number>(0)
  const [minute, setMinute] = useState<number>(0)
  const [second, setSecond] = useState<number>(0)
  const audio = new Audio(alram)

  useEffect(() => {
    if (isRunning) {
      setTimeout(() => {
        if (second > 0) {
          setSecond(second - 1)
        } else {
          if (minute > 0) {
            setMinute(minute - 1)
            setSecond(59)
          } else {
            if (hour > 0) {
              setHour(hour - 1)
              setMinute(59)
              setSecond(59)
            } else {
              audio.play()
              Swal.fire({
                text: 'You have finished your timer!',
                icon: 'error',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Okey'
              }).then((result) => {
                if (result.isConfirmed) {
                  audio.pause()
                }
              })
              setIsRunning(false)
              setIsEditing(true)
            }
          }
        }
      }, 1000)
    }
  }, [isRunning, second, minute, hour])
  return (
    <>
      {isEditing ? (
        <>
          <h3 className="text-center text-white font-bold my-auto pb-7">Choose Time</h3>
          <div className="flex flex-col gap-3">
            <Inputs
              label="Hour"
              type="number"
              value={hour}
              onChange={(e: any) => {
                setHour(e.target.value)
              }}
            />
            <Inputs
              label="Minute"
              type="number"
              value={minute}
              onChange={(e: any) => {
                setMinute(e.target.value)
              }}
            />
            <Inputs
              label="Second"
              type="number"
              value={second}
              onChange={(e: any) => {
                setSecond(e.target.value)
              }}
            />
          </div>
          <div className="flex justify-center mt-3">
            <button
              onClick={() => {
                setIsEditing(false)
                setIsRunning(true)
              }}
              className="text-white font-bold  w-[calc(100vw-90px)] h-10 my-3 mx-auto aspect-square rounded-xl bg-subMain"
            >
              Start
            </button>
          </div>
        </>
      ) : (
        <>
          <h3 className="text-center text-white font-bold my-auto pb-7 mt-5 text-3xl">
            Timer Running
          </h3>
          <p className="text-center text-white text-6xl my-auto">{`${hour.toString().padStart(2, '0')} : ${minute.toString().padStart(2, '0')} : ${second.toString().padStart(2, '0')}`}</p>
          <div className="flex justify-center gap-7 px-7 py-5">
            {isRunning ? (
              <button
                onClick={() => {
                  setIsRunning(false)
                }}
                className="text-white font-bold  w-[calc(100vw-90px)] h-10 my-3 mx-auto aspect-square rounded-xl bg-subMain"
              >
                Stop
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsRunning(true)
                }}
                className="text-white font-bold  w-[calc(100vw-90px)] h-10 my-3 mx-auto aspect-square rounded-xl bg-subMain"
              >
                Start
              </button>
            )}
            <button
              onClick={() => {
                Swal.fire({
                  title: 'Are you sure?',
                  text: "You won't be able to edit this!",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes, edit!'
                }).then((result) => {
                  if (result.isConfirmed) {
                    setHour(hour)
                    setMinute(minute)
                    setSecond(second)
                    setIsRunning(false)
                    setIsEditing(true)
                  }
                })
              }}
              className="text-white font-bold  w-[calc(100vw-90px)] h-10 my-3 mx-auto aspect-square rounded-xl bg-subMain"
            >
              Edit
            </button>
          </div>
        </>
      )}
    </>
  )
}

export default Timer
