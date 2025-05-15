import { useEffect, useRef, useState } from 'react'

export default function AudioToggle() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2
    }
  }, [])

  const toggle = () => {
    if (playing) {
      audioRef.current?.pause()
    } else {
      audioRef.current?.play()
    }
    setPlaying(!playing)
  }

  return (
    <div className="fixed bottom-2 right-2 text-xs text-frost cursor-pointer z-50" onClick={toggle}>
      {playing ? 'pause ambient' : 'play ambient'}
      <audio loop ref={audioRef} src="/ambient.mp3" />
    </div>
  )
}
