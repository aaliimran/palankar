export default function AboutPage() {
  return (
    <section className="flex flex-col items-center text-center justify-center min-h-[80vh]">
      <h1 className="text-5xl font-bold mb-4">Cinematographer Portfolio</h1>
      <p className="text-gray-400 max-w-xl mb-8">
        A showcase of cinematic visuals, lighting, and storytelling through the
        lens.
      </p>
      <a
        href="/portfolio"
        className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
      >
        View Portfolio
      </a>
    </section>
  );
}
