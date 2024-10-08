import { useState } from "react";
import MenuComponent from "./components/Menu";
import TransactionsComponent from "./components/transactions";
import SubscribeComponent from "./components/subscribe";
import UnSubscribeComponent from "./components/unsubscribe";

function App() {
  const [currentRender, setCurrentRender] = useState("transactions");

  return (
    <main className="flex flex-col items-center pb-8">
      <header className="mt-8 shadow-lg rounded-xl">
        <MenuComponent
          currentRender={currentRender}
          setCurrentRender={setCurrentRender}
        />
      </header>

      <section className="mt-8 shadow-lg rounded-xl w-[70%] max-2xl:w-[90%]">
        {currentRender === "transactions" && <TransactionsComponent />}

        {currentRender === "subscribe" && <SubscribeComponent />}
        {currentRender === "unsubscribe" && <UnSubscribeComponent />}
      </section>
    </main>
  );
}

export default App;
