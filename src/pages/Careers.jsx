import React from "react";
import { Briefcase, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { positions } from "../constants";

function Careers() {
  return (
    <div className="w-full md:w-1/2">
      {/* Header */}
      <h1 className="text-4xl font-bold text-gradient mb-3">Careers</h1>

      {/* Open Positions */}
      <div className=" pb-16">
        <div className="space-y-6">
          {positions.map((position) => (
            <div
              key={position.id}
              className="group bg-zinc-900 rounded-2xl p-6 hover:bg-zinc-800 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-500 transition-colors">
                      {position.title}
                    </h3>
                    {position.level && (
                      <span className="px-2 py-1 text-xs font-medium bg-blue-400/10 text-blue-400 rounded-full">
                        {position.level}
                      </span>
                    )}
                  </div>
                  <div className="space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
                    <span className="inline-flex items-center">
                      <Briefcase className="w-4 h-4 mr-2" />
                      {position.department}
                    </span>
                    <span className="inline-flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {position.location}
                    </span>
                    <span className="inline-flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {position.type}
                    </span>
                  </div>
                  <p className="mt-4 text-gray-400">{position.description}</p>
                </div>
                <button className="mt-4 md:mt-0 inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                  More
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Careers;
