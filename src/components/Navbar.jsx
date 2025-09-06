export default function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full max-w-6xl mx-auto px-6 py-4">
      <div className="flex items-center space-x-3">
        <img src="logo.png" alt="Logo" className="h-10 w-auto" />
        <span className="text-xl font-bold text-white">ReactTutorial</span>
      </div>
      <ul className="flex space-x-6">
        <li><a href="#" className="text-slate-300 hover:text-emerald-400">Home</a></li>
        <li><a href="#" className="text-slate-300 hover:text-emerald-400">About</a></li>
        <li><a href="#" className="text-slate-300 hover:text-emerald-400">Contact</a></li>
      </ul>
    </nav>
  )
}
