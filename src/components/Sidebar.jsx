import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export function MultiLevelSidebar() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card
      className="sticky  top-0 left-0 min-h-screen w-full max-w-[20rem] p-4 
                 bg-gradient-to-b from-[#500096] via-[#C000FF] to-[#00E0FF] 
                 shadow-[0_0_25px_rgba(0,255,255,0.3)] 
                 text-cyan-100 border border-white/10"
    >
      <Typography
        variant="h5"
        className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-pink-400 text-center mb-6 font-bold tracking-wide"
      >
        ⚡ Меню управления
      </Typography>

      <List>

         {/* --- Static items --- */}
         <ListItem className="hover:bg-white/10 text-[#C8EFFF] hover:text-[#C8EFFF] transition-all rounded-lg">
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5 text-cyan-300" />
          </ListItemPrefix>
          Покупки
          <ListItemSuffix>
            <Chip
              value="14"
              size="sm"
              variant="ghost"
              color="cyan"
              className="rounded-full bg-white/20 text-cyan-100"
            />
          </ListItemSuffix>
        </ListItem>
        
        {/* --- Accordion 1 --- */}
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 text-cyan-200 transition-transform ${
                open === 1 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem
            className={`p-0 rounded-lg ${
              open === 1
                ? "bg-gradient-to-r from-[#7B00FF]/30 to-[#00F0FF]/20 shadow-[0_0_10px_#00ffff]"
                : "hover:bg-white/10"
            }`}
            selected={open === 1}
          >
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="border-b-0 p-3 flex items-center"
            >
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5 text-cyan-300" />
              </ListItemPrefix>
              <Typography className="mr-auto font-medium text-cyan-100">
                Товары
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1 text-cyan-200">
            <List className="p-0 text-[#C8EFFF]">
              {[
                { title: "Хозяйтсвенные товары", link: "/xozTovar" },
                { title: "Продукты", link: "/product" },
                { title: "Баночные изделия", link: "/banka" },
              ].map((item) => (
                <Link to={item.link}>
                  <ListItem
                    key={item.title}
                    className="hover:bg-white/10 hover:text-[#C8EFFF] hover:shadow-[0_0_10px_#ff00ff] transition-all"
                  >
                    <ListItemPrefix>
                      <ChevronRightIcon
                        strokeWidth={3}
                        className="h-3 w-5 text-pink-300"
                      />
                    </ListItemPrefix>
                    {item.title}
                  </ListItem>
                </Link>
              ))}
            </List>
          </AccordionBody>
        </Accordion>

        {/* --- Accordion 2 --- */}
        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 text-cyan-200 transition-transform ${
                open === 2 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem
            className={`p-0 rounded-lg ${
              open === 2
                ? "bg-gradient-to-r from-[#7B00FF]/30 to-[#00F0FF]/20 shadow-[0_0_10px_#00ffff]"
                : "hover:bg-white/10"
            }`}
            selected={open === 2}
          >
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="border-b-0 p-3 flex items-center"
            >
              <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5 text-cyan-300" />
              </ListItemPrefix>
              <Typography className="mr-auto font-medium text-cyan-100">
                Коммунальные
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1 text-cyan-200">
            <List className="p-0 text-[#C8EFFF]">
              {[
                { title: "Электроэнергия", link: "/svet" },
                { title: "Горячая вода", link: "/issiq" },
                { title: "Холодная вода", link: "/sovuq" },
                { title: "Газ", link: "/sovuq" },
                { title: "Мусор", link: "/sovuq" },
                { title: "Коммунальная оплата", link: "/sovuq" },
                { title: "Земельный налог", link: "/sovuq" },
                { title: "Налог на иммущество", link: "/sovuq" },
                { title: "Электро-зарядка", link: "/sovuq" },
              ].map((item) => (
                <Link to={item.link}>
                  <ListItem
                    key={item.title}
                    className="hover:bg-white/10 hover:text-[#C8EFFF] hover:shadow-[0_0_10px_#ff00ff] transition-all"
                  >
                    <ListItemPrefix>
                      <ChevronRightIcon
                        strokeWidth={3}
                        className="h-3 w-5 text-pink-300"
                      />
                    </ListItemPrefix>
                    {item.title}
                  </ListItem>
                </Link>
              ))}
            </List>
          </AccordionBody>
        </Accordion>

        {/* --- Accordion 3 --- */}
        <Accordion
          open={open === 3}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 text-cyan-200 transition-transform ${
                open === 2 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem
            className={`p-0 rounded-lg ${
              open === 3
                ? "bg-gradient-to-r from-[#7B00FF]/30 to-[#00F0FF]/20 shadow-[0_0_10px_#00ffff]"
                : "hover:bg-white/10"
            }`}
            selected={open === 3}
          >
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className="border-b-0 p-3 flex items-center"
            >
              <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5 text-cyan-300" />
              </ListItemPrefix>
              <Typography className="mr-auto font-medium text-cyan-100">
                Прочее Расходы
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1 text-cyan-200">
            <List className="p-0 text-[#C8EFFF]">
              {[
                { title: "Бензин", link: "/svet" },
                { title: "Авто Расходы", link: "/svet" },
                { title: "Мобильная связь", link: "/issiq" },
                { title: "Интернет", link: "/sovuq" },
                { title: "Телевидение", link: "/TV" },
                { title: "Медицинские услуги", link: "/TV" },
                { title: "Ремонтные услуги", link: "/TV" },
              ].map((item) => (
                <Link to={item.link}>
                  <ListItem
                    key={item.title}
                    className="hover:bg-white/10 hover:text-[#C8EFFF] hover:shadow-[0_0_10px_#ff00ff] transition-all"
                  >
                    <ListItemPrefix>
                      <ChevronRightIcon
                        strokeWidth={3}
                        className="h-3 w-5 text-pink-300"
                      />
                    </ListItemPrefix>
                    {item.title}
                  </ListItem>
                </Link>
              ))}
            </List>
          </AccordionBody>
        </Accordion>

       

        <ListItem className="hover:bg-white/10 text-[#C8EFFF] hover:text-[#C8EFFF] transition-all rounded-lg">
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5 text-cyan-300" />
          </ListItemPrefix>
          Формирование закупа
        </ListItem>

        <ListItem className="hover:bg-white/10 text-[#C8EFFF] hover:text-[#C8EFFF] transition-all rounded-lg">
          <ListItemPrefix>
            <LifebuoyIcon className="h-5 w-5 text-cyan-300" />
          </ListItemPrefix>
          Помощь
        </ListItem>

        <ListItem className="hover:bg-white/10 text-red-900 hover:text-red-900 transition-all rounded-lg">
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5 text-red-900" />
          </ListItemPrefix>
          Выход
        </ListItem>
      </List>
    </Card>
  );
}
