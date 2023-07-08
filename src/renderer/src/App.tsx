export function App() {
  return (
    <div>
      <button
        className="bg-black w-24"
        onClick={() => {
          window.api.fetchDocuments('asdads')
        }}
      >
        click
      </button>
    </div>
  )
}
