export default function Music() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-serif">my music</h2>
      <div>
        <h3 className="text-lg">a funeral for every memory</h3>
        <iframe className="w-full h-64 mt-2" src="https://www.youtube.com/embed/dQqK-J_oNiE?si=om1NjAZ2B_A3md0z" allowFullScreen />
        <p className="text-sm text-frost/70 mt-2">an album about sorrow. melody woven with mourning.</p>
      </div>
    </div>
  )
}
