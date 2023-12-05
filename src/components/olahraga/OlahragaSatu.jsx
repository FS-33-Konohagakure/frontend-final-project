import React from "react";

function OlahragaSatu() {
  return (
    <div className="flex flex-wrap justify-center gap-[30px]">
      <div>
        <iframe
          className="w-[600px] h-[300px] shadow-lg max-[700px]:w-[400px] max-[700px]:h-[200px] max-[500px]:w-[385px]"
          src="https://www.youtube.com/embed/YaXPRqUwItQ?si=-78L5Ux0q40HLU86"
          title="YouTube video player"
          frameborder="0"
        ></iframe>
        <div className="flex items-center mt-5 px-5 py-2.5 justify-between border shadow-lg">
          <div>
            <label htmlFor="squat" className="flex items-center gap-5">
              <img
                src="assets/squat.png"
                alt="Logo Squat"
                className="w-[50px]"
              />
              <p for="squat" className="text-xl">
                100 squat a day
              </p>
            </label>
          </div>
          <input type="checkbox" id="squat" className="w-[20px] h-[20px]" />
        </div>
      </div>
      <div>
        <iframe
          className="w-[600px] h-[300px] shadow-lg max-[700px]:w-[400px] max-[700px]:h-[200px] max-[500px]:w-[385px]"
          src="https://www.youtube.com/embed/871uim_3l1A?si=j-r7glgbRtWlAvEA"
          title="YouTube video player"
          frameborder="0"
        ></iframe>
        <div className="flex items-center mt-5 px-5 py-2.5 justify-between border shadow-lg">
          <div>
            <label htmlFor="yoga" className="flex items-center gap-5">
              <img src="assets/yoga.png" alt="Logo Yoga" className="w-[50px]" />
              <p for="squat" className="text-xl">
                Yoga 105 minutes a week
              </p>
            </label>
          </div>
          <input type="checkbox" id="yoga" className="w-[20px] h-[20px]" />
        </div>
      </div>
      <div>
        <iframe
          className="w-[600px] h-[300px] shadow-lg max-[700px]:w-[400px] max-[700px]:h-[200px] max-[500px]:w-[385px]"
          src="https://www.youtube.com/embed/pvIjsG5Svck?si=L-eHdwXD3_a9k7OJ"
          title="YouTube video player"
          frameborder="0"
        ></iframe>
        <div className="flex items-center mt-5 px-5 py-2.5 justify-between border shadow-lg">
          <div>
            <label htmlFor="plank" className="flex items-center gap-5">
              <img
                src="assets/plank.png"
                alt="Logo Plank"
                className="w-[50px]"
              />
              <p for="squat" className="text-xl">
                Plank 2 minutes a day
              </p>
            </label>
          </div>
          <input type="checkbox" id="plank" className="w-[20px] h-[20px]" />
        </div>
      </div>
      <div>
        <iframe
          className="w-[600px] h-[300px] shadow-lg max-[700px]:w-[400px] max-[700px]:h-[200px] max-[500px]:w-[385px]"
          src="https://www.youtube.com/embed/QRZcZgSgSHI?si=9978EcdSbAivoCoT"
          title="YouTube video player"
          frameborder="0"
        ></iframe>
        <div className="flex items-center mt-5 px-5 py-2.5 justify-between border shadow-lg">
          <div>
            <label htmlFor="zumba" className="flex items-center gap-5">
              <img
                src="assets/zumba.png"
                alt="Logo Zumba"
                className="w-[50px]"
              />
              <p for="squat" className="text-xl">
                Zumba once a week
              </p>
            </label>
          </div>
          <input type="checkbox" id="zumba" className="w-[20px] h-[20px]" />
        </div>
      </div>
    </div>
  );
}

export default OlahragaSatu;
