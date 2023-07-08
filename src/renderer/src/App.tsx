export function App() {
  return (
    <div>
      <button
        className="bg-black w-24"
        onClick={() => {
          window.api.fetchDocuments("testeeterkemcls");
        }}
      >
        click
      </button>
    </div>
  );
}
