import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.div className="p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <video className="fixed top-0 left-0 w-full h-full object-cover -z-10" autoPlay loop muted>
        <source src="/bg-loop.mp4" type="video/mp4" />
      </video>
      <h1 className="text-5xl font-serif">kyrofrost</h1>
      <p className="mt-4 text-lg text-rose italic">i built this from what broke me.</p>
    </motion.div>
  )
}
