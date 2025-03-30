import React from "react";
import { ExternalLink, Code2, Blocks, Gem, ArrowUpRight } from "lucide-react";
import { arcus_img, aurum_img } from "../assets";
import { projects } from "../constants";

function Projects() {
  return (
    <div className=" text-white relative">
      <div className="px-3 py-16 md:px-16">
        <h1 className="text-5xl font-bold text-gradient mb-3">Our Projects</h1>
        <p className="mt-4 text-white/70 text-lg md:text-xl max-w-2xl">
          Pushing the boundaries of technology with innovative solutions that
          shape the future.
        </p>
      </div>

      <div className="px-3 md:px-16 pb-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((Project) => (
            <div
              key={Project.id}
              className="group relative bg-zinc-900 rounded-2xl overflow-hidden hover:bg-zinc-800 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={Project.image}
                  alt={Project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400">
                    <Project.icon className="w-6 h-6" />
                    <span className="ml-2">{Project.category}</span>
                  </span>
                  <ExternalLink className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                  {Project.title}
                </h3>
                <p className="text-blue-400 text-sm leading-relaxed">
                  {Project.description}
                </p>

                {/* Hover Effect Button */}
                <div className="mt-6 flex items-center text-sm text-blue-400 font-medium">
                  <span>View Project</span>
                  <ArrowUpRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img
        src="/imgs/projects/proj-bg.png"
        alt=""
        className="absolute top-0 left-0 w-full h-full opacity-40"
      />
    </div>
  );
}

export default Projects;
