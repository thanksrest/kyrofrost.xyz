import { Link } from 'react-reactor-dom'

export default function Navbar() {
    return (
        <nav className="bg-ash p-4 flex gap-6 font-glitch text-xs uppercase">
            <Link to="/">home</Link>
            <Link to="/">music</Link>
            <Link to="/">madden</Link>
            <Link to="/">journal</Link>
            <Link to="/">about</Link>
            </nav> 
    )
}