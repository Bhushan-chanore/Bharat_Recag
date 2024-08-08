import React, { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import log from "../../Images/recaglogo.png";
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
  Speech,
  FileBox,
} from 'lucide-react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const navigation = [
  { href: "/dashboard", icon: Home, name: "Dashboard" },
  { href: "/Dataset", icon: LayoutDashboard, name: "Dataset" },
  { href: "/model", icon: Component, name: "Model" },
  { href: "/code", icon: FileCode2, name: "Code" },
  { href: "/competition", icon: Laptop, name: "Competition" },
  { href: "/courses", icon: BookMarked, name: "Courses" },
  { href: "/discussions", icon: Users, name: "Discussions" },
  { href: "/rankings", icon: Radio, name: "Rankings" },
  { href: "/documentation", icon: FileText, name: "Documentation" },
  { href: "/blog", icon: Newspaper, name: "Blog" },
  { href: "/host-competition", icon: ScreenShare, name: "Host Competition" },
  { href: "/interview", icon: Speech, name: "Interview" },
  { href: "/host-model", icon: FileBox, name: "Host Model", comingSoon: true },
  { href: "/privacy", icon: GlobeLock, name: "Privacy" },
  { href: "/team", icon: Anvil, name: "Team" }
];

const Mobilemenu = () => {
  return (
    <div className="block sm:hidden">
      <Disclosure as="nav" className="bg-darkblue-100">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <a href='/'>
                      <img
                        className="h-8 w-auto"
                        src={log}
                        alt="Your Company"
                      />
                    </a>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                          {item.comingSoon && (
                            <span className="ml-2 text-xs font-medium px-2 rounded-md"
                              style={{
                                background: 'linear-gradient(to right, #a1c4fd, #c2e9fb)',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                              }}>
                              Coming Soon
                            </span>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
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
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/dashboard"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                    {item.comingSoon && (
                      <span className="ml-2 text-xs font-medium px-2 rounded-md"
                        style={{
                          background: 'linear-gradient(to right, #a1c4fd, #c2e9fb)',
                          WebkitBackgroundClip: 'text',
                          color: 'transparent',
                        }}>
                        Coming Soon
                      </span>
                    )}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Mobilemenu;
