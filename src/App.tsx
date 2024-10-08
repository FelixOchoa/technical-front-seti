import { useState } from "react";
import MenuComponent from "./components/Menu";
import TransactionsComponent from "./components/transactions";
import SubscribeComponent from "./components/subscribe";
import UnSubscribeComponent from "./components/unsubscribe";
import { Button } from "antd";

function App() {
  const [currentRender, setCurrentRender] = useState("welcome");

  return (
    <main className="flex flex-col items-center pb-8">
      <div className="mt-8 flex flex-row items-center justify-between w-[70%] max-2xl:w-[90%]">
        <img
          src="https://www.btgpactual.com.co/sites/default/files/btg%20pactual%20-%20logo.png"
          alt="logo"
          className="rounded-xl w-24 object-cover"
        />
        {currentRender !== "welcome" && (
          <header className="shadow-lg rounded-xl">
            <MenuComponent
              currentRender={currentRender}
              setCurrentRender={setCurrentRender}
            />
          </header>
        )}
      </div>

      <section className="mt-16 shadow-lg rounded-xl w-[70%] max-2xl:w-[90%]">
        {currentRender === "welcome" && (
          <div className="flex flex-col px-10 py-24 items-center gap-2 mt-12">
            <h2 className="text-center text-3xl font-semibold">
              Bienvenido a Btg Pactual
            </h2>
            <span className="text-center">
              Este es un software de gestión de Transacciones en Tiempo Real.{" "}
              <br />
              Administra fondos de manera fácil y rápida con actualizaciones en
              tiempo real.
            </span>

            <Button
              type="primary"
              className="mt-10"
              onClick={() => setCurrentRender("subscribe")}
            >
              Comenzar
            </Button>
          </div>
        )}
        {currentRender === "transactions" && <TransactionsComponent />}
        {currentRender === "subscribe" && <SubscribeComponent />}
        {currentRender === "unsubscribe" && <UnSubscribeComponent />}
      </section>
    </main>
  );
}

export default App;
