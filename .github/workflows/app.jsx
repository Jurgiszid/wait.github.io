const { motion } = Motion;

function App() {
  return (
    <main className="screen">
      <motion.div
        className="glow"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity
        }}
      />

      <motion.h1
        className="title"
        animate={{
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity
        }}
      >
        Aš laukiu...
      </motion.h1>
    </main>
  );
}

ReactDOM.createRoot(
  document.getElementById("root")
).render(<App />);
