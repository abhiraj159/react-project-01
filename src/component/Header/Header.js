import styles from "./Header.module.css";
import logo from "../../assets/mainLogo.svg";
import macIcon from "../../assets/gomobile-macVector.svg";

function Header() {
  return (
    <>
      <div className={`${styles.nav}`}>
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center mx-auto p-4 justify-between">
            <a
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src={logo} className="h-12" alt="Flowbite Logo" />
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto flex"
              id="navbar-default"
            >
              <ul className={`${styles.menuBar}`}>
                <li>
                  <a href="#" className="" aria-current="page">
                    POKER GAMES
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    NPS INDIA
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    PROMOTIONS
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    EXPLORE
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    DOWNLOAD
                  </a>
                </li>
              </ul>
            </div>
            <div className={`${styles.downloadSec}`}>
              <a className="pe-2">
                <i className={`${styles.icustomercare}`}></i>
              </a>
              <div className={`${styles.downloadBtn}`}>
                <img
                  src={macIcon}
                  className="img-fluid mr-2 "
                  width="22"
                  height="20"
                  alt="Download Mac OS App"
                  loading="lazy"
                />
                DOWNLOAD MAC OS APP
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Header;
