function App() {
  return (
    <main className="p-8">
    <div className="navbar bg-base-100 shadow-sm rounded-full">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-hover bg-base-100 rounded-box z-1 mt-5 w-52 p-2 shadow">
        <li><a>Apps/Software</a></li>
        <li><a>Trends</a></li>
        <li><a>Styles</a></li>
        <li><a>Techniques</a></li>
        <li><a>Resources</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">4berries</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        <li><a>Apps/Software</a></li>
        <li><a>Trends</a></li>
        <li><a>Styles</a></li>
        <li><a>Techniques</a></li>
        <li><a>Resources</a></li>
    </ul>
  </div>
  <div className="navbar-end">
  <div className="dropdown mb-72">
  <div tabIndex={0} role="button" className="btn m-1">
    Theme
    <svg
      width="12px"
      height="12px"
      className="inline-block h-2 w-2 fill-current opacity-60"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2048 2048">
      <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
    </svg>
  </div>
  <ul tabIndex={-1} className="dropdown-content bg-base-300 rounded-box z-1 w-52 p-2 shadow-2xl">
    <li>
      <input
        type="radio"
        name="theme-dropdown"
        className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
        aria-label="Default"
        value="default" />
    </li>
    <li>
      <input
        type="radio"
        name="theme-dropdown"
        className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
        aria-label="Retro"
        value="retro" />
    </li>
    <li>
      <input
        type="radio"
        name="theme-dropdown"
        className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
        aria-label="Cyberpunk"
        value="cyberpunk" />
    </li>
    <li>
      <input
        type="radio"
        name="theme-dropdown"
        className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
        aria-label="Valentine"
        value="valentine" />
    </li>
    <li>
      <input
        type="radio"
        name="theme-dropdown"
        className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
        aria-label="Aqua"
        value="aqua" />
    </li>
  </ul>
</div>
  </div>
</div>

<div className="container mx-auto rounded-lg flex gap-2 py-5">
<input type="text" placeholder="Name" className="input" />
<button className="btn btn-outline btn-secondary">New</button> {/*add the number here for amount of new stuff */}

{/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
{/* For TSX uncomment the commented types below */}
<button className="btn" popoverTarget="sort-dropdown1" style={{ anchorName: "sort-dropdown1-anchor1" } /* as React.CSSProperties */}>
  Button
</button>

<ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
  popover="auto" id="sort-dropdown1" style={{ positionAnchor: "sort-dropdown1-anchor1" } /* as React.CSSProperties */ }>
  <li><a>Alphabetical</a></li>
  <li><a>Difficulty</a></li>
  <li><a>Time</a></li>
  <li><a>Popularity</a></li>
  <li><a>Recent</a></li>
</ul>
</div>

<div className="container mx-auto outline outline-2 outline-secondary rounded-lg px-4 py-4 flex gap-4">
<div className="card bg-base-80 w-35 shadow-sm rounded-lg ">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Card Title
{/*      <div className="badge badge-secondary hover:badge-secondary-700">New</div> */}
    </h2>
   {/* <p>A card component has a figure, a body part, and inside body there are title and actions parts</p> */}
    <div className="card-actions justify-center">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
</div>

    </main>
  );
}

export default App;
