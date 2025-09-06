export default function Footer() {
  return (
    <footer className="w-full bg-slate-800 text-slate-400 py-6 text-center text-sm">
      © {new Date().getFullYear()} ReactTutorial. Built with React + Tailwind.
    </footer>
  )
}
