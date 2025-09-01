'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

const products = [
  { name: 'Phones', description: 'Check out our latest phones', href: '/products', icon: ChartPieIcon },
  { name: 'Accessories', description: 'Phone cases, chargers, and more', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Repairs', description: 'Fast and reliable service', href: '#', icon: FingerPrintIcon },
]

const callsToAction = [
  { name: 'Contact Us', href: '/contact', icon: PhoneIcon },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-secondary text-light items-center rounded-b-full mt-auto fixed w-full">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="flex gap-2">
            <span className="text-2xl font-bold">Phone<span className='text-primary'>Plazaa</span></span>
            {/* <img
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=red&shade=600"
              alt="PhonePlazaa Logo"
              className="h-8 w-auto"
            /> */}
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-light"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop menu */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-light hover:text-primary">
              Products
              <ChevronDownIcon className="h-5 w-5 text-accent" aria-hidden="true" />
            </PopoverButton>
            <PopoverPanel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-2xl bg-secondary shadow-lg">
              <div className="p-4">
                {products.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group flex items-center gap-x-4 rounded-lg p-3 hover:bg-accent/20"
                  >
                    <item.icon className="h-6 w-6 text-light group-hover:text-primary" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-light">{item.name}</p>
                      <p className="text-accent text-sm">{item.description}</p>
                    </div>
                  </a>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-accent/30 bg-accent/10">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-light hover:text-primary"
                  >
                    <item.icon className="h-5 w-5 text-accent" aria-hidden="true" />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          
          <div className="flex gap-6">
            <Link to="/" className="text-sm font-semibold text-light hover:text-primary">
              Home
            </Link>
            <Link to="/services" className="text-sm font-semibold text-light hover:text-primary">
              Services
            </Link>
            <Link to="/about" className="text-sm font-semibold text-light hover:text-primary">
              About
            </Link>
            <Link to="/contact" className="text-sm font-semibold text-light hover:text-primary">
              Contact
            </Link>
          </div>
        </PopoverGroup>

        {/* Desktop contact */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
          <a href="/contact" className="text-sm font-semibold text-black bg-primary w-fit p-2 rounded-2xl hover:brightness-110 transition">
            Contact Us
          </a>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-secondary p-6 sm:max-w-sm sm:ring-1 sm:ring-accent/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">PhonePlazaa</span>
              <img
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=red&shade=600"
                alt="PhonePlazaa Logo"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-light"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-accent/20">
              <div className="space-y-2 py-6">
                {[...products, ...callsToAction].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-lg py-2 px-3 text-light font-semibold hover:text-primary hover:bg-accent/20"
                  >
                    {item.name}
                  </a>
                ))}
                <a href="/services" className="block rounded-lg py-2 px-3 text-light font-semibold hover:text-primary hover:bg-accent/20">
                  Services
                </a>
                <a href="/about" className="block rounded-lg py-2 px-3 text-light font-semibold hover:text-primary hover:bg-accent/20">
                  About
                </a>
                <a href="/contact" className="block rounded-lg py-2 px-3 text-light font-semibold hover:text-primary hover:bg-accent/20">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
