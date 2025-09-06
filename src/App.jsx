import Header from "./components/Header"
import Hero from "./components/Hero"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white">
      <Header />
      <main className="flex-grow">
        <Hero />
      </main>
      <Footer />
    </div>
  )
}
