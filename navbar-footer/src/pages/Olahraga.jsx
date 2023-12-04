import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import OlahragaSatu from "../components/olahraga/OlahragaSatu";
import OlahragaDua from "../components/olahraga/OlahragaDua";
import Style from "./Style.module.css";

const Olahraga = () => {
  const [currentComponent, setCurrentComponent] = useState("A");

  const switchComponent = (componentName) => {
    setCurrentComponent(componentName);
  };

  const activeButtonStyling =
    "w-[50%] text-center py-[30px] border-b-8 border-b-white shadow-2xl";

  return (
    <Layout>
      <section className={`${Style.font}`}>
        <div className="p-[50px] pt-[30px] pb-[30px]">
          <h1 className="text-2xl font-bold pb-1.5 border-b-2">
            TANTANGAN <span className="text-green-theme">OLAHRAGA</span>
          </h1>
        </div>
        <div>
          <div className="flex justify-around bg-green-theme mb-[50px]">
            <div
              className={
                currentComponent === "A"
                  ? activeButtonStyling
                  : "py-[30px] text-center w-[50%] hover:bg-green-bg-olahraga"
              }
            >
              <button
                onClick={() => switchComponent("A")}
                className="text-4xl font-bold text-white max-[768px]:text-3xl"
              >
                Challange
              </button>
            </div>
            <div
              className={
                currentComponent === "B"
                  ? activeButtonStyling
                  : "py-[30px] text-center w-[50%] hover:bg-green-bg-olahraga"
              }
            >
              <button
                onClick={() => switchComponent("B")}
                className="text-4xl font-bold text-white max-[768px]:text-3xl"
              >
                Kalender
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            {currentComponent === "B" && <OlahragaDua />}
            {currentComponent === "A" && <OlahragaSatu />}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Olahraga;
