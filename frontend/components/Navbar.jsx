import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md relative z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link to='/'>
                    <span>Rabix-Job</span>
                </Link>
            </div>
        </nav >
    )
}
