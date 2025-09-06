export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6">
      <h1 className="text-6xl font-extrabold mb-6 text-center">
        React + Tailwind Demo
      </h1>
      <p className="text-xl text-slate-300 mb-8 text-center max-w-2xl">
        You’ve got Vite for speed, Tailwind for styling, and GitHub Pages for deployment.
      </p>
      <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 rounded-lg shadow-lg transition">
        Get Started
      </button>
    </section>
  )
}
