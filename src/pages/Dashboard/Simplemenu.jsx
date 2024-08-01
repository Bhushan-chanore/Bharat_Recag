import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  LayoutDashboard,
  Component,
  FileCode2,
  Laptop,
  BookMarked,
  Users,
  Radio,
  FileText,
  Newspaper,
  ScreenShare,
  GlobeLock,
  Anvil,
  ChevronLeft,
  ChevronRight,
  Speech,
  FileBox
} from "lucide-react";

const Simplemenu = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isNotebookVisible, setIsNotebookVisible] = useState(false);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  useEffect(() => {
    if (isNotebookVisible) {
      setIsSidebarCollapsed(true);
    } else {
      setIsSidebarCollapsed(false);
    }
  }, [isNotebookVisible]);

  const menuItems = [
    { href: "/dashboard", icon: Home, label: "Dashboard" },
    { href: "/Dataset", icon: LayoutDashboard, label: "Dataset" },
    { href: "/model", icon: Component, label: "Model" },
    { href: "/code", icon: FileCode2, label: "Code" },
    { href: "/competition", icon: Laptop, label: "Competition" },
    { href: "/courses", icon: BookMarked, label: "Courses" },
    { href: "/discussions", icon: Users, label: "Discussions" },
    { href: "/rankings", icon: Radio, label: "Rankings" },
    { href: "/documentation", icon: FileText, label: "Documentation" },
    { href: "/blog", icon: Newspaper, label: "Blog" },
    { href: "/host-competition", icon: ScreenShare, label: "Host Competition" },
    { href: "/interview", icon: Speech, label: "Interview" },
    { href: "/host-model", icon: FileBox, label: "Host Model", comingSoon: true },
    { href: "/privacy", icon: GlobeLock, label: "Privacy" },
    { href: "/team", icon: Anvil, label: "Team" },
  ];

  return (
    <div
      className={`bg-darkblue-500 ${
        isSidebarCollapsed ? "w-20" : "w-0 sm:w-[14.4rem]"
      } transition-width duration-300`}
    >
      <div className="side-nav side-nav--simple flex flex-col h-full">
        <div className={`intro-x flex items-center pt-6 ${isSidebarCollapsed ? "ml-4" : "ml-8"}`}>
          <div className="p-0">
            <button
              className="icon-button"
              onClick={toggleSidebar}
              style={{
                backgroundColor: "white",
                borderRadius: "50%",
                padding: "3px",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {isSidebarCollapsed ? (
                <ChevronRight
                  size={24}
                  style={{ color: "#007bff", fontWeight: "bold" }}
                />
              ) : (
                <ChevronLeft
                  size={24}
                  style={{ color: "#007bff", fontWeight: "bold" }}
                />
              )}
            </button>
          </div>
          <a className="intro-x" href="/">
            {!isSidebarCollapsed && (
              <span className="ml-3 text-white text-[19px] xl:block">
                Recag
              </span>
            )}
          </a>
        </div>
        <ul
          className={`text-xl flex-1 ${
            isSidebarCollapsed ? "ml-0 mt-0" : "ml-4 mt-0"
          }`}
        >
          <div className="side-nav__divider my-6"></div>
          
          {menuItems.map((item, index) => (
            <li key={index} className="relative">
              {item.comingSoon && (
                <span className="absolute -top-0 right-0 text-xs font-medium  px-2 rounded-md"
                style={{
    background: 'linear-gradient(to right, #a1c4fd, #c2e9fb)',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
  }}>
                  Coming Soon
                </span>
              )}
              <Link
                to={item.href}
                className={`side-menu ${
                  isSidebarCollapsed
                    ? `${
                        activeLink.startsWith(item.href)
                          ? "!w-12 !pl-[12px] !ml-[7px] !bg-white !text-black !rounded-full"
                          : "!ml-0"
                      } flex items-center`
                    : `${
                        activeLink.startsWith(item.href)
                          ? "side-menu--active"
                          : ""
                      } flex items-center`
                }`}
              >
                <div
                  className={`${isSidebarCollapsed ? "" : "side-menu__icon"}`}
                >
                  <item.icon size={22} />
                </div>
                {!isSidebarCollapsed && (
                  <div className="side-menu__title ml-3">{item.label}</div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Simplemenu;
