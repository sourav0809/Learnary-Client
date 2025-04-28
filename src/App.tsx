import "./App.css";
import Sidebar from "@/components/common/Sidebar";
import Roadmap from "./components/common/Roadmap";

const App = () => {
  return (
    <div className="min-h-screen flex gap-5 bg-gradient-to-b from-blue-50 to-white ">
      <Sidebar />

      {/* <WelcomeText /> */}
      <div className="pl-20"></div>
      <Roadmap />
    </div>
  );
};

export default App;

function WelcomeText() {
  return (
    <main className="transition-all duration-300 ">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-medium text-gray-800 mb-4 tracking-wide">
          Welcome
        </h1>
        <p className="text-gray-600">
          Start building your amazing Journey here!
        </p>
      </div>
    </main>
  );
}
