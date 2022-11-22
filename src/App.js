import {
  Instagram,
  Home,
  Search,
  Explore,
  ChatBubbleOutline,
  FavoriteBorder,
  ControlPoint,
  MoreHoriz,
  Send
} from "@mui/icons-material";
function App() {
  const storyList = [
    { id: "000", name: "Hori", icon: "https://i.pinimg.com/736x/e8/b1/38/e8b138ed7f437b8b6cadd1a410e3b673.jpg" },
    { id: "001", name: "Souta", icon: "https://i.pinimg.com/originals/0f/6c/22/0f6c22682d80a7f0eaefa391b9da22e8.jpg" },
    { id: "002", name: "Miyamura", icon: "https://i.pinimg.com/originals/d1/15/6d/d1156d61d57fefd2a0609445d384af3d.jpg" },
    { id: "003", name: "Remi", icon: "https://i.pinimg.com/originals/74/0a/d3/740ad3e46e0960b90a3e3440216bdbe0.jpg" },
    { id: "004", name: "Sengoku", icon: "https://i.pinimg.com/originals/db/f9/f3/dbf9f3652faa32ae633d57e829bb498e.jpg" },
    { id: "005", name: "Yanagi", icon: "https://ami.animecharactersdatabase.com/uploads/chars/73449-1978036191.jpg" },
    { id: "006", name: "Kouno", icon: "https://i.pinimg.com/originals/46/9b/68/469b68c34944d58c544d766c2f0c5244.jpg" }
  ];
  return (
    <div className="flex bg-white">
      <div className="flex bg-white border border-gray-200 h-full w-36 flex-col fixed">
        <div className="flex bg-white border border-gray-200 h-full w-36 flex-col item-start fixed">
          <il className=" flex p-3 item-start text-xl hover:text-cyan-100 duration-500 my-2 cursor-pointer">
            <Instagram />
          </il>
          <nav className="flex bg-white h-auto flex-col flex-col p-3 items-start fixed my-20">
            <il className=" flex text-xl hover:text-cyan-500 duration-100 my-3 cursor-pointer">
              <Home />
              <p className=" flex font-sans text-sm mx-2">Home</p>
            </il>
            <il className=" flex text-xl hover:text-cyan-500 duration-100 my-3 cursor-pointer">
              <Search />
              <p className=" flex font-sans text-sm mx-2">Search</p>
            </il>
            <il className=" flex text-xl hover:text-cyan-500 duration-100 my-3 cursor-pointer">
              <Explore />
              <p className=" flex font-sans text-sm mx-2">Explore</p>
            </il>
            <il className=" flex text-xl hover:text-cyan-500 duration-100 my-3 cursor-pointer">
              <ChatBubbleOutline />
              <p className=" flex font-sans text-sm mx-2">Messages</p>
            </il>
            <il className=" flex text-xl hover:text-cyan-500 duration-100 my-3 cursor-pointer">
              <FavoriteBorder />
              <p className=" flex font-sans text-sm mx-2">Notifications</p>
            </il>
            <il className=" flex text-xl hover:text-cyan-500 duration-100 my-3 cursor-pointer">
              <ControlPoint />
              <p className=" flex font-sans text-sm mx-2">Create</p>
            </il>
            <il className=" flex text-xl hover:text-cyan-500 duration-100 my-72 cursor-pointer">
              <MoreHoriz />
              <p className=" flex font-sans text-sm mx-2">More</p>
            </il>
            <span className="flex bg-white items-start fixed my-80 py-3">
              <il className=" flex text-xl hover:text-cyan-500 duration-100 cursor-pointer overflow-hidden w-8 rounded-full ">
                <img src="https://i.pinimg.com/736x/e8/b1/38/e8b138ed7f437b8b6cadd1a410e3b673.jpg" />
              </il>
              <p className="flex font-sans text-sm mx-2 my-1 hover:text-cyan-500 duration-100 cursor-pointer">Profile</p>
            </span>
          </nav>
        </div>
        <div className="flex bg-white px-96 mx-96">
          <div className="flex mx-32 border border-gray-200 h-full w-full flex-col fixed">
            <span className="flex mx-48 my-14">
              <il className=" flex text-xl cursor-pointer overflow-hidden rounded-full w-14 h-14">
                <img src="https://i.pinimg.com/736x/e8/b1/38/e8b138ed7f437b8b6cadd1a410e3b673.jpg" />
              </il>
              <span className="flex flex-col mx-2 my-2">
                <p className=" flex text-sm font-sans font-bold text-black">Hori</p>
                <p className=" flex text-sm font-sans text-500 text-gray-300">Hori Horimiya</p>
              </span>
            </span>
            <p className="flex-col mx-48 text-l font-sans font-bold text-500 text-gray-300">Suggestions For You</p>
            <span className="flex mx-48 my-2">
              <il className=" flex text-xl cursor-pointer overflow-hidden rounded-full w-10 h-10">
                <img src="https://s.isanook.com/ga/0/ud/212/1062985/inuyasha-(1).jpg" />
              </il>
              <span className="flex flex-col mx-2">
                <p className=" flex text-sm font-sans font-bold text-black">inuyasha</p>
                <p className=" flex text-sm font-sans text-500 text-gray-300">Followed by...</p>
              </span>
            </span>
            <span className="flex mx-48 my-2">
              <il className=" flex text-xl cursor-pointer overflow-hidden rounded-full w-10 h-10">
                <img src="https://somoskudasai.com/wp-content/uploads/2020/05/portada_inuyasha.jpg" />
              </il>
              <span className="flex flex-col mx-2">
                <p className=" flex text-sm font-sans font-bold text-black">Kangome</p>
                <p className=" flex text-sm font-sans text-500 text-gray-300">Followed by...</p>
              </span>
            </span>
            <span className="flex mx-48 my-2">
              <il className=" flex text-xl cursor-pointer overflow-hidden rounded-full w-10 h-10">
                <img src="http://pm1.narvii.com/6282/df9c395e857949d338482f2aaf058d410d229080_00.jpg" />
              </il>
              <span className="flex flex-col mx-2">
                <p className=" flex text-sm font-sans font-bold text-black">Kaede</p>
                <p className=" flex text-sm font-sans text-500 text-gray-300">Followed by...</p>
              </span>
            </span>
            <span className="flex mx-48 my-2">
              <il className=" flex text-xl cursor-pointer overflow-hidden rounded-full w-10 h-10">
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/95000bfa-9a5b-49e8-9d12-522dd141d70e/ddcp07g-ea2f1521-4dbb-4368-970a-bdeeadefb053.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk1MDAwYmZhLTlhNWItNDllOC05ZDEyLTUyMmRkMTQxZDcwZVwvZGRjcDA3Zy1lYTJmMTUyMS00ZGJiLTQzNjgtOTcwYS1iZGVlYWRlZmIwNTMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.YNNcfQoHhHLXjAr8UNKcZ-2vtuqS2AhMBA27GfTsFkU" />
              </il>
              <span className="flex flex-col mx-2">
                <p className=" flex text-sm font-sans font-bold text-black">Kikyo</p>
                <p className=" flex text-sm font-sans text-500 text-gray-300">Followed by...</p>
              </span>
            </span>
            <span className="flex mx-48 my-2">
              <il className=" flex text-xl cursor-pointer overflow-hidden rounded-full w-10 h-10">
                <img src="https://qph.cf2.quoracdn.net/main-qimg-d2e8f9b14e81b9f5a0ab374f5733ec09-pjlq" />
              </il>
              <span className="flex flex-col mx-2">
                <p className=" flex text-sm font-sans font-bold text-black">Devil</p>
                <p className=" flex text-sm font-sans text-500 text-gray-300">Followed by...</p>
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex my-10 mx-72">
          {storyList.map(item => (
            <div className="flex bg-white mx-2">
              <div className="flex flex-col w-14">
                <span className="rounded-full overflow-hidden border-2 border-gray-300 my-3">
                  <img src={item.icon} alt="" />
                </span>
                <p className="text-xs px-3">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col bg-white my-18 mx-72 w-4/12 justify-items-start">
          <span className="flex flex-row">
            <img className="rounded-full overflow-hidden w-8 h-8 my-2 mx-2" src="https://i.pinimg.com/originals/d1/15/6d/d1156d61d57fefd2a0609445d384af3d.jpg" />
            <p className="my-3 font-bold font-sans">miyamura</p>
            <il className="flex-row text-xl hover:text-cyan-500 duration-100 my-2 mx-96 cursor-pointer">
              <MoreHoriz />
            </il>
          </span>
          <div className="flex flex-col">
            <img src="https://i.pinimg.com/originals/d1/15/6d/d1156d61d57fefd2a0609445d384af3d.jpg" />
          </div>
          <div className="flex">
            <il className="text-xl hover:text-red-500 duration-100 my-3 mx-2 cursor-pointer">
              <FavoriteBorder />
            </il>
            <il className="text-xl hover:text-cyan-500 duration-100 my-3 mx-2 cursor-pointer">
              <ChatBubbleOutline />
            </il>
            <il className="text-xl hover:text-cyan-500 duration-100 my-3 mx-2 cursor-pointer">
              <Send />
            </il>
          </div>
          <div className="flex flex-col bg-white h-96">
            <p className="flex flex-col font-sans font-bold text-black">1200 likes</p>
            <p className="flex flex-col font-sans font-bold text-black">Hori</p>
            <p className="flex flex-col text-gray-200 space-y-5">Add a comment...</p>
            <span className=" space-y-5 w-auto h-0 w-full border-2 border-gray-200"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
