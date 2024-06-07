import RegisterBtn from "./RegisterBtn";

const Headline = () => {
  return (
    <section className="bg-backone bg-no-repeat bg-cover h-[40rem] relative flex px-5 justify-center items-center">
      <div className="flex flex-col bg-white-10 gap-5 rounded-xl py-20 px-9 text-center items-center">
        <h1 className="text-blue-30 text-3xl font-bold">Exploring AI</h1>
        <p className="text-md font-semibold">Google IO Extended 2024 Maiduguri</p>
        <h2 className="text-red-10 text-center font-light text-3xl">Sat 6th July, 2024, from 9:00 AM to 2:00 PM </h2>
        <RegisterBtn />
      </div>

      <div className="bg-white-10 rounded-xl absolute bottom-0 translate-y-1/2 w-[90%] m-auto py-5 px-5 md:px-11 flex flex-col gap-5 overflow-hidden">
        <h2 className="md:text-lg text-sm text-center md:text-left font-semibold uppercase">Number OF ATTENDEES at previous events</h2>
        
        <div>
        <ul className="flex items-center justify-between w-full min-w-[768px] md:animate-scroll animate-scrollp">
          <li className="flex flex-col gap-2 items-center">
            <h3 className="text-2xl font-semibold">473+</h3>
            <p className="text-sm font-light">Devfest’22</p>
          </li>

          <li className="flex flex-col gap-2 items-center">
            <h3 className="text-2xl font-semibold">242+</h3>
            <p className="text-sm font-light">I/0 Extended’22</p>
          </li>

          <li className="flex flex-col gap-2 items-center">
            <h3 className="text-2xl font-semibold">71+</h3>
            <p className="text-sm font-light">WTM IWD’22</p>
          </li>

          <li className="flex flex-col gap-2 items-center">
            <h3 className="text-2xl font-semibold">98+</h3>
            <p className="text-sm font-light">Flutter Forward’23</p>
          </li>

          <li className="flex flex-col gap-2 items-center">
            <h3 className="text-2xl font-semibold">85+</h3>
            <p className="text-sm font-light">WTM IWD’23</p>
          </li>

          <li className="flex flex-col gap-2 items-center">
            <h3 className="text-2xl font-semibold">447+</h3>
            <p className="text-sm font-light">I/0 Extended’23</p>
          </li>
           <li className="flex flex-col gap-2 items-center">
            <h3 className="text-2xl font-semibold">457+</h3>
            <p className="text-sm font-light">Devfest Maiduguri 23</p>
          </li>
        </ul>
        </div>
        
      </div>
    </section>
  )
};

export default Headline;
