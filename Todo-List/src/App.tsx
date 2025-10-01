import Headers from "./Components/Header/HeaderPage";
import TaskCard from "./Components/ToDoCard/ToDoCard";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200">
      <Headers />
      <main className="flex-1 flex justify-center items-start">
        <div className="w-full">
          <TaskCard />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
