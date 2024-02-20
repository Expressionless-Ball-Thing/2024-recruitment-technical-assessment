import "./App.css";
import unilectivesLogo from "./assets/unilectives.svg";
import book from "./assets/book.svg";
import shield from "./assets/shield.svg";
import list from "./assets/list.svg";
import user from "./assets/user.svg";
import moon from "./assets/moon.svg";
import logout from "./assets/logout.svg";
import magglass from "./assets/magglass.svg";
import down from "./assets/down.svg";
import courses from "../courses.json";

function App() {
  return (
    <>
      <div className=" fixed flex flex-col h-screen items-center justify-between w-20 white">
        <div className="flex flex-col items-center justify-start w-20 white p-4 gap-6">
          <img src={unilectivesLogo} />
          <div className=" w-full h-1 rounded-xl opacity-30 bg-gray-400" />
          <img src={book} />
          <img src={shield} />
        </div>
        <div className=" flex flex-col items-center justify-start w-20 white p-4 gap-6">
          <img src={list} />
          <img src={user} />
          <img src={moon} />
          <img src={logout} />
        </div>
      </div>
      <div className=" bg-white h-screen ml-20 mx-auto justify-center flex">
        <div className=" w-5/6 flex flex-col">
          <div className=" py-5 w-full">DevSoc presents</div>
          <div className=" text-8xl font-extrabold font-sans text-blue-700">
            unilectives
          </div>
          <div className=" py-4 w-full font-extrabold">
            Your one-stop shop for UNSW course and electives reviews.
          </div>

          <div className=" w-full p-2 border-blue-700 rounded-md flex flex-row border-2 gap-4">
            <img src={magglass} />
            <input
              className=" font-sans placeholder:font-sans text-purple-800 placeholder:text-purple-800 placeholder:opacity-45 focus:outline-none bg-transparent w-full"
              placeholder="Search for a course e.g. COMP1511"
            />
          </div>

          <button className=" w-64 rounded-md my-2 p-2 border-gray-400 border flex justify-between shadow-xl">
            <div>Sort by</div>
            <img src={down} />
          </button>

          <div className=" my-5 grid grid-cols-3 gap-8 w-full">
            {courses.map((val) => (
              <div className=" shadow-xl rounded-lg p-4 flex flex-col">
                <div className=" flex flex-row justify-between">
                  <div className=" text-xl font-sans font-extrabold">
                    {val.course_prefix}
                    {val.course_code}
                  </div>
                  <div className=" flex flex-col">
                    <div className=" relative inline-block text-3xl p-0 m-0">
                      <span className=" text-slate-300 " >★★★★★</span>
                      <span className="absolute inset-0 text-transparent bg-clip-text select-none text-purple-600" style={{width: `${val.average_stars/5 * 100}%`}}>★★★★★</span>
                    </div>
                    <div className=" text-[10px]">
                      {val.total_reviews} reviews
                    </div>
                  </div>
                </div>

                <div className=" text-sm py-2 h-16">{val.course_title}</div>
                <div className=" flex flex-row gap-2">
                  {val.offered_terms.map((term) => (
                    <div className=" text-xs bg-blue-300 py-1 px-2 rounded-xl">
                      {term}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
