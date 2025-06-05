// components/ServiceDropdown.jsx
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Check, ChevronDown } from "lucide-react";

const servicesDropdown = [
  { label: "EPC" },
  { label: "Commercial Solutions" },
  { label: "Solar Rooftop Project" },
  { label: "Government Approval" },
  { label: "O & M" },
];

export default function ServiceDropdown({ selectedService, setSelectedService }) {
  return (
    <div className="w-full">
      <Listbox value={selectedService} onChange={setSelectedService}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-default rounded-xl bg-gray-100 py-2 pl-4 pr-10 text-left border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0A9642] text-sm">
            <span className="block truncate">{selectedService.label}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </span>
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-xl bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {servicesDropdown.map((item, index) => (
                <Listbox.Option
                  key={index}
                  value={item}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                      active ? "bg-orange-100 text-orange-900" : "text-gray-800"
                    }`
                  }
                >
                  {({ selected }) => (
                    <>
                      <span className={`block truncate ${selected ? "font-semibold" : "font-normal"}`}>
                        {item.label}
                      </span>
                      {selected ? (
                        <span className="absolute left-2 top-2.5 text-green-600">
                          <Check size={16} />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
