import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useContext } from "@radix-ui/react-dialog"
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Email from "@/assets/Icon/email.svg";
import Phone from "@/assets/Icon/phone.svg";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function MobMenu({ Menus }) {
  const [clicked, setClicked] = useState(null);
  const [open, setOpen] = useState(false)
  const navigate = useNavigate();
  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };

  const handlerMenuClick = (href: string) => {
    console.log('href', href)
    if (href) {
      setOpen(false);
      navigate(href);
    }

  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="w-[1.375rem] h-[0.875rem]" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-full bg-blueSsecondary backdrop-blur text-white"
      >
        <div className="flex flex-col justify-between h-full py-10 pb-20">
          <ul >
            {Menus.map(({ name, subMenu, href }, i) => {
              const isClicked = clicked === i;
              const hasSubMenu = subMenu?.length;
              return (
                <li key={name}>
                  <div

                    className="flex w-full pb-5 justify-between text-[1.375rem]  hover:text-taxSecondary"
                    onClick={() => {
                      setClicked(isClicked ? null : i)
                      handlerMenuClick(href)
                    }}
                  >
                    {name}
                    {hasSubMenu && (
                      <ChevronDown
                        className={`ml-2 ${isClicked ? "rotate-180" : ""
                          } transition-transform`}
                      />
                    )}
                  </div>
                  {hasSubMenu && (
                    <motion.ul
                      initial="exit"
                      animate={isClicked ? "enter" : "exit"}
                      variants={subMenuDrawer}
                      className={`${isClicked ? "border-t-2 border-b-2" : ""
                        } border-[#4E555F]`}
                    >
                      {subMenu.map(({ name, icon: Icon, href }) => (
                        <li
                          key={name}
                          onClick={() => handlerMenuClick(href)}
                          className="py-4 flex-center text-white hover:text-taxSecondary  gap-x-2 cursor-pointer text-[1.375rem]"
                        >
                          {name}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="flex flex-col gap-y-5">
            <div className="flex">
              <div className="border-2 border-taxSecondary w-[4.125rem] h-[4.125rem] flex items-center justify-center rounded-full">
                <img
                  src={Phone}
                  alt=""
                  className="w-[1.0625rem] h-[1.0625rem]"
                />
              </div>
              <div className="flex flex-col justify-center ml-3">
                <span className="text-[1.125rem] text-taxSecondary leading-6">
                  联系电话：
                </span>
                <span className="leading-7 text-[1.375rem]">911-987654321</span>
              </div>
            </div>
            <div className="flex">
              <div className="border-2 border-taxSecondary w-[4.125rem] h-[4.125rem] flex items-center justify-center rounded-full">
                <img
                  src={Email}
                  alt=""
                  className="w-[1.0625rem] h-[1.0625rem]"
                />
              </div>
              <div className="flex flex-col justify-center ml-3">
                <span className="text-[1.125rem] text-taxSecondary leading-6">
                  邮箱：
                </span>
                <span className="leading-7 text-[1.375rem]">
                  yourmail@mail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
