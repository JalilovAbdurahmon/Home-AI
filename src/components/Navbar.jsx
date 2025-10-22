import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

// profile menu component
const profileMenuItems = [
  { label: "Мой профиль", icon: UserCircleIcon },
  { label: "Изменить профиль", icon: Cog6ToothIcon },
  { label: "Настройки", icon: Cog6ToothIcon},
  { label: "Выход", icon: PowerIcon },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          className="flex items-center gap-2 rounded-full mr-28 py-0.5 pr-2 pl-0.5 lg:ml-auto text-cyan-100 hover:bg-white/10 transition"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="user"
            className="border border-cyan-300 p-0.5 shadow-[0_0_10px_#00ffff]"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=400&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1 bg-[#1b063d]/90 backdrop-blur-md border border-white/10">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded text-cyan-100 hover:bg-white/10 ${
                isLastItem ? "hover:bg-pink-500/20 text-pink-400" : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-pink-400" : "text-cyan-200"}`,
              })}
              <Typography as="span" variant="small" className="font-normal">
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

  // nav list menu
  const navListMenuItems = [
    
  ];

  function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const renderItems = navListMenuItems.map(({ title, description }) => (
      <a href="#" key={title}>
        <MenuItem className="hover:bg-white/10 transition">
          <Typography variant="h6" className="text-cyan-200 mb-1">
            {title}
          </Typography>
          <Typography variant="small" className="text-gray-300">
            {description}
          </Typography>
        </MenuItem>
      </a>
    ));

    return (
      <>
        <Link to={"/"}>
          <Menu>
          <MenuHandler>
            <Typography as="a" href="#" variant="small" className="font-normal">
              <MenuItem className="hidden items-center gap-2 font-medium text-cyan-100 lg:flex lg:rounded-full hover:bg-white/10 hover:text-[#C8EFFF]">
                <Square3Stack3DIcon className="h-[18px] w-[18px] text-cyan-300" />
                Home
              </MenuItem>
            </Typography>
          </MenuHandler>
          <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid backdrop-blur-md border border-white/10">
            <Card
              color="blue"
              shadow={false}
              variant="gradient"
              className="col-span-3 grid h-full w-full place-items-center rounded-md bg-gradient-to-tr from-[#6500a0] to-[#00d9ff]"
            >
            </Card>
            <ul className="col-span-4 flex w-full flex-col gap-1">{renderItems}</ul>
          </MenuList>
        </Menu>
        </Link>
        </>
      );
  }

  // nav list component
  const navListItems = [
    
    { label: "Account", icon: UserCircleIcon, link: "/acaunt" },
    { label: "Blocks", icon: CubeTransparentIcon },
    { label: "Docs", icon: CodeBracketSquareIcon },
  ];

function NavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />
      {navListItems.map(({ label, icon, link }) => (
        <Link to={link}>
          <Typography
          key={label}
          as="a"
          href="#"
          variant="small"
          className="font-medium text-cyan-100 hover:text-pink-300 transition"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full hover:bg-white/10 hover:text-[#C8EFFF]">
            {React.createElement(icon, { className: "h-[18px] w-[18px] text-cyan-300" })}
            <span>{label}</span>
          </MenuItem>
        </Typography>
        </Link>
      ))}
    </ul>
  );
}

export function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setIsNavOpen(false));
  }, []);

  return (
    <Navbar className="mx-auto max-w-full p-4 lg:pl-6 bg-gradient-to-r from-[#260c68] via-[#9a32ff] to-[#00d9ff] shadow-[0_0_20px_#9a32ff]/50">
      <div className="relative mx-auto flex items-center justify-between text-white">
        <Typography
          as="a"
          href="#"
          className="mr-44 ml-20 cursor-pointer py-1.5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#ffb6ff] to-[#00ffff]"
        >
          Home AI
        </Typography>

        <div className="hidden lg:block">
          <NavList />
        </div>

        <IconButton
          size="sm"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden text-cyan-100"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>

        <Button
          size="sm"
          variant="text"
          className="ml-[440px] text-cyan-100 hover:text-pink-300 transition"
        >
          <span>Пользователь:</span>
        </Button>

        <ProfileMenu />
      </div>

      <MobileNav open={isNavOpen} className="overflow-scroll bg-[#1b063d]/90 backdrop-blur-md">
        <NavList />
      </MobileNav>
    </Navbar>
  );
}
