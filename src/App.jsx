function App() {
  return (
    <main className="p-8">
      <h1 className="mb-6 text-3xl font-bold">
        4berries
      </h1>

      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100"
      >
        <div className="collapse-title font-semibold">
          How do I create an account?
        </div>

        <div className="collapse-content text-sm">
          Click the Sign Up button to get started.
        </div>
      </div>
    </main>
  );
}

export default App;
