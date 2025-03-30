import React from "react";
import { services_ } from "../constants";
import { layout } from "../styles/style";
import { services_sphere } from "../assets";

function App() {
  return (
    <div className={`${layout.section}  `}>
      <div className="max-w-full mx-auto relative">
        <div className="text-center mb-20 ">
          <h1 className="text-5xl font-bold text-gradient mb-3">
            Our Services
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            Empowering businesses with cutting-edge technology and expert
            guidance
          </p>
        </div>

        <img
          src={services_sphere}
          className="max-w-3xl mx-auto absolute top-20 left-1/2 -translate-x-1/2"
          alt=""
        />
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full">
          {services_.map((service, index) => {
            const Icon = service.icon;
            return (
              <li key={index} className="relative group">
                <div
                  className="bg-gray-800/50 backdrop-blur-md rounded-lg p-5 h-full transform transition-all duration-300 
                  hover:-translate-y-1 hover:bg-gray-750 relative overflow-hidden border border-gray-700/50"
                >
                  {/* Accent Border */}
                  <div
                    className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 
                    transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"
                  />

                  {/* Content */}
                  <div className="relative">
                    <div className="flex items-center mb-3">
                      <div
                        className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center
                        group-hover:bg-purple-500/10 transition-colors duration-300"
                      >
                        <Icon className="w-5 h-5 text-blue-400 group-hover:text-purple-400 transition-colors duration-300" />
                      </div>
                      <div className="ml-3">
                        <span className="text-gray-500 font-mono text-xs">
                          0{index + 1}
                        </span>
                        <h3 className="text-base font-medium text-white">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
