"use client";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  FolderKanban,
  GanttChart,
  CalendarDays,
  CopyPlus,
  PieChart,
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

import { UserNav } from "./user-nav";
import { Button } from "./ui/button";

const navigation = [
  { name: "Backlog", href: "#", icon: FolderKanban, current: true },
  { name: "Sprints", href: "#", icon: GanttChart, current: false },
  { name: "Calendar", href: "#", icon: CalendarDays, current: false },
  { name: "Templates", href: "#", icon: CopyPlus, current: false },
  { name: "Reports", href: "#", icon: PieChart, current: false },
];
const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];

// A utility for conditionally applying class names based on certain conditions or states
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard({ children }: { children: any }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expanded, setExpanded] = useState(true);

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <X className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                    <div className="flex h-16 shrink-0 items-center">
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? "bg-gray-50 text-indigo-600"
                                      : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                  )}
                                >
                                  <item.icon
                                    className={classNames(
                                      item.current
                                        ? "text-indigo-600"
                                        : "text-gray-400 group-hover:text-indigo-600",
                                      "h-6 w-6 shrink-0"
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          <div className="text-xs font-semibold leading-6 text-gray-400">
                            Your teams
                          </div>
                          <ul role="list" className="-mx-2 mt-2 space-y-1">
                            {teams.map((team) => (
                              <li key={team.name}>
                                <a
                                  href={team.href}
                                  className={classNames(
                                    team.current
                                      ? "bg-gray-50 text-indigo-600"
                                      : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                  )}
                                >
                                  <span
                                    className={classNames(
                                      team.current
                                        ? "text-indigo-600 border-indigo-600"
                                        : "text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600",
                                      "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white"
                                    )}
                                  >
                                    {team.initial}
                                  </span>
                                  <span className="truncate">{team.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div
          className={classNames(
            expanded ? "lg:w-72" : "lg:w-20",
            "hidden relative transition-all lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:flex-col"
          )}
        >
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div
            className={`flex grow flex-col gap-y-5 lg:z-51 overflow-y-auto border-r border-gray-200  bg-white px-6`}
          >
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full absolute top-[35px] right-[-35px] transform -translate-x-1/2 hover:bg-slate-950 hover:text-white"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? (
                <ChevronLeft className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </Button>
            <div
              className={classNames(
                expanded ? "text-lg" : "text-sm",
                "flex font-extrabold h-16 shrink-0 items-center"
              )}
            >
              TiFlow
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold",
                            item.current
                              ? "bg-slate-950 text-slate-100"
                              : "text-slate-950",
                            expanded ? "ml-0" : "ml-1",
                            !item.current &&
                              "hover:text-slate-100 hover:bg-slate-950"
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? "text-slate-100"
                                : "text-slate-950 group-hover:text-slate-100",
                              "h-6 w-6 shrink-0"
                            )}
                            aria-hidden="true"
                          />

                          <span
                            className={`overflow-hidden transition-all ${
                              expanded ? "w-52" : "w-0"
                            }`}
                          >
                            {item.name}
                          </span>
                          {!expanded && (
                            <div
                              className={`
          absolute left-full rounded-md px-2 py-1 ml-2
          bg-slate-950 text-slate-100 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
                            >
                              {item.name}
                            </div>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>

                <li className="-mx-6 mt-auto">
                  <a
                    href="#"
                    className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                  >
                    <UserNav />
                    <span className="sr-only">Your profile</span>

                    <span
                      className={`overflow-hidden transition-all ${
                        expanded ? "w-52" : "w-0"
                      }`}
                    >
                      Salym
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">
            Backlog
          </div>
          <UserNav />
        </div>

        <main
          className={classNames(
            expanded ? "lg:pl-72" : "lg:pl-20",
            "transition-all py-10"
          )}
        >
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  );
}
