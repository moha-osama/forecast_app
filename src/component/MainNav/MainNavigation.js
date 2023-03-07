import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function MainNavigation() {
  const { currUser } = useAuth();

  return (
    <>
      <header className={classes.header}>
        <div className={classes.logo}>
          <img
            src="https://demo.themezy.com/system/resources/demo_themes/000/000/128//images/logo@2x.png"
            alt="wallpaper"
          />
          <h3>company name</h3>
        </div>
        <div className={classes.nav}>
          {currUser || (
            <nav>
              <ul>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? classes.active : undefined
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? classes.active : undefined
                    }
                    to="/news"
                  >
                    News
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? classes.active : undefined
                    }
                    to="/live-cameras"
                  >
                    Live Cameras
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? classes.active : undefined
                    }
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/login">
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M6 8a3 3 0 00-3 3v2a3 3 0 106 0h6v2h2v-2h1v2h2v-4H9a3 3 0 00-3-3zm1 5v-2a1 1 0 10-2 0v2a1 1 0 102 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </NavLink>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}

export default MainNavigation;
