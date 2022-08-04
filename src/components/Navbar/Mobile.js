import React, { Fragment, useState } from "react";
import MenuIcon from "remixicon-react/Menu3LineIcon";
import CloseIcon from "remixicon-react/CloseFillIcon";
import ArrowBack from "remixicon-react/ArrowLeftSLineIcon";
import { Menu, Transition } from "@headlessui/react";
import { ServicesDropdown } from "./constants";

const Mobile = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [showServices, setShowServices] = useState(false);

  return (
    <div className="mobile">
      <div className="flex justify-between w-full">
        <div className="mobile__logo">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
            alt="MVX Logo"
            className="desktop__logo--img"
          />
        </div>

        <button
          type="button"
          className="ml-auto mobile__hamburger"
          aria-expanded="false"
          onClick={() => setIsShowing(true)}
        >
          <MenuIcon />
        </button>
      </div>

      {/* Backdrop */}
      <Transition
        as={Fragment}
        show={showServices || isShowing}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div
          className="fixed top-0 left-0 h-screen min-h-screen w-screen bg-transparent backdrop-blur-sm backdrop-invert=[80%]  z-10"
          role="button"
          aria-pressed="false"
          tabIndex="0"
          onClick={() => {
            setShowServices(false);
            setIsShowing(false);
          }}
        />
      </Transition>

      {/* Links */}
      <Transition
        as={Fragment}
        show={isShowing}
        enter="transition duration-300"
        enterFrom="translate-y-4"
        enterTo="translate-y-0"
        leave="transition ease-in-out duration-500"
        leaveFrom="opacity-100 visible"
        leaveTo="opacity-0 z-0 invisible"
      >
        <nav className="mobile__nav">
          <div className="flex justify-between w-full">
            <div className="mobile__logo">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
                alt="MVX Logo"
                className="desktop__logo--img"
              />
            </div>

            <button
              type="button"
              className="ml-auto mobile__close"
              aria-expanded="false"
              onClick={() => setIsShowing(false)}
            >
              <CloseIcon />
            </button>
          </div>
          <hr className="my-4 md:min-w-full" />
          <ul className="mobile__nav__links">
            <li className="text-sm mb-5">
              <button> About</button>
            </li>
            <li className="text-sm mb-5">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button onClick={() => setShowServices(true)}>
                    Services
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  show={showServices}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="fixed top-0 left-0 mt-2 w-full focus:outline-none px-3 pr-4 xs:pr-8 py-9 pt-3 bg-white">
                    <div>
                      <div className="w-full px-5 mb-8">
                        <button
                          type="button"
                          className="flex items-center"
                          aria-expanded="false"
                          onClick={() => setShowServices(false)}
                        >
                          <ArrowBack />
                          <span className="text-lg font-montSemiBold ml-2">
                            Services
                          </span>
                        </button>
                        <hr className="my-4 w-screen absolute left-0 border-neutral-300" />
                      </div>
                      {ServicesDropdown.map((item) => (
                        <Menu.Item key={item.title}>
                          {({ active }) => (
                            <div
                              className={`${
                                active ? item.bg : "bg-transparent"
                              } flex items-center cursor-pointer py-3 px-5 pr-2 rounded-lg mb-1 last:mb-0`}
                            >
                              <img
                                src={process.env.PUBLIC_URL + item.icon}
                                alt="Freight Forwarding"
                              />

                              <div className="ml-5">
                                <h3 className="text-[15px] font-montSemiBold">
                                  {item.title}
                                </h3>
                                <p className="text-xs font-montLight">
                                  {item.info}
                                </p>
                              </div>
                            </div>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
            <li className="text-sm mb-5">
              <button> Resources</button>
            </li>
            <li className="text-sm mb-5">
              <button> Partners</button>
            </li>
            <li className="text-sm mb-5">
              <button>Speak to us</button>
            </li>
            <li className="text-sm mb-5">
              <button
                type="button"
                className="mobile__button mobile__button--signin mr-4"
              >
                Sign in
              </button>
            </li>
            <li className="text-sm mb-5">
              <button
                type="button"
                className="mobile__button mobile__button--signup"
              >
                Sign up
              </button>
            </li>
          </ul>
        </nav>
      </Transition>
    </div>
  );
};

export default Mobile;
