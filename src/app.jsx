function App() {
  return (
    <main className="min-h-screen bg-base-200 p-6">
      <header className="mx-auto max-w-4xl">
        <a href="/" className="text-3xl font-bold">
          4berries
        </a>

        <p className="mt-2 text-base-content/70">
          A library for editors.
        </p>
      </header>

      <section className="mx-auto mt-10 max-w-4xl">
        <h1 className="mb-4 text-2xl font-bold">
          Frequently Asked Questions
        </h1>

        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100"
        >
          <div className="collapse-title font-semibold">
            How do I create an account?
          </div>

          <div className="collapse-content text-sm">
            Account registration will be available in the future.
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
