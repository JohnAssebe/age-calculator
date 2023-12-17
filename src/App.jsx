import DownArrow from "../src/assets/down.svg";
function App() {
  return (
    <div className="relative w-full min-h-screen bg-lightGrey">
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 px-4 md:px-16 py-6 md:py-8 mx-auto bg-white rounded-br-[60px] md:rounded-br-[120px] rounded-2xl shadow-xl max-w-fit">
        <form>
          <div className="flex items-center justify-center gap-5 font-poppins">
            <div className="flex flex-col items-start justify-center gap-2">
              <p className="text-sm uppercase text-smokeyGray">day</p>
              <input
                className="w-20 px-2 py-4 text-base border rounded-lg outline-none md:w-32 placeholder:text-smokeyGray focus:border-purple focus:placeholder:text-purple"
                placeholder="DD"
              />
            </div>

            <div className="flex flex-col items-start justify-center gap-2">
              <p className="text-sm uppercase text-smokeyGray">month</p>
              <input
                className="w-20 px-2 py-4 text-base border rounded-lg outline-none md:w-32 placeholder:text-smokeyGray focus:border-purple focus:placeholder:text-purple"
                placeholder="MM"
              />
            </div>

            <div className="flex flex-col items-start justify-center gap-2">
              <p className="text-sm uppercase text-smokeyGray">year</p>
              <input
                className="w-20 px-2 py-4 text-base border rounded-lg outline-none md:w-32 placeholder:text-smokeyGray focus:border-purple focus:placeholder:text-purple"
                placeholder="YYYY"
              />
            </div>
          </div>
          <div className="relative py-12">
            <hr />
            <button
              type="submit"
              className="absolute flex items-center justify-center w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full cursor-pointer left-1/2 md:left-[90%] md:-translate-x-0 top-1/2 bg-purple hover:bg-offBlack duration-500"
            >
              <img src={DownArrow} alt="button" />
            </button>
          </div>
        </form>
        <div className="text-4xl italic font-extrabold md:text-6xl">
          <div className="flex items-center justify-start gap-x-2">
            <span className="text-purple">- -</span>
            <p>years</p>
          </div>
          <div className="flex items-center justify-start gap-x-2">
            <span className="text-purple">- -</span>
            <p>months</p>
          </div>

          <div className="flex items-center justify-start gap-x-2">
            <span className="text-purple">- -</span>
            <p>days</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
