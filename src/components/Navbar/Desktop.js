import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ServicesDropdown } from "./constants";

const Desktop = () => {
  return (
    <div className="desktop">
      {/* Logo */}
      <div className="desktop__logo">
        <img
          src={process.env.PUBLIC_URL + "/assets/images/logo-tm.png"}
          alt="MVX Logo"
          className="desktop__logo--img"
        />
      </div>

      {/* Navigation Links */}
      <ul className="desktop__nav">
        <li className="desktop__links">
          <button>About</button>
        </li>
        <li className="desktop__links">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button>Services</Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute left-0 mt-2 w-[450px] origin-top-right  rounded-[20px] bg-white shadow-md focus:outline-none px-3 py-9">
                <div>
                  {ServicesDropdown.map((item) => (
                    <Menu.Item key={item.title}>
                      {({ active }) => (
                        <div
                          className={`${
                            active ? item.bg : "bg-transparent"
                          } flex items-center cursor-pointer py-3 px-5 pr-2 rounded-lg mb-4 last:mb-0`}
                        >
                          <img
                            src={process.env.PUBLIC_URL + item.icon}
                            alt="Freight Forwarding"
                          />

                          <div className="ml-5">
                            <h3 className="text-base font-montSemiBold">
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
        <li className="desktop__links">
          <button>Resources</button>
        </li>
        <li className="desktop__links">
          <button>Partners</button>
        </li>
        <li className="desktop__links">
          <button>Speak to us</button>
        </li>
      </ul>

      {/* Auth Buttons */}
      <div>
        <button
          type="button"
          className="desktop__button desktop__button--signin mr-4"
        >
          Sign in
        </button>
        <button
          type="button"
          className="desktop__button desktop__button--signup"
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Desktop;
