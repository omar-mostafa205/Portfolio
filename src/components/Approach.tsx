import React from "react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { ArrowRight } from "lucide-react";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="text-5xl font-bold flex items-center justify-start text-white mb-12 ml-30 ">
        My <span className="text-white ml-2">approach</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-6">
        <div className="relative inline-flex overflow-hidden rounded-[2.5rem] p-[1px] max-w-sm w-full">
          <span
            className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
           bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
          /> 
          <CardSpotlight className="w-full p-8 lg:h-[28rem] relative flex flex-col justify-between rounded-[41px]">
            <div>
              <AceternityIcon order="Phase 1" />
              <h3 className="text-2xl font-semibold relative z-20 mt-8 text-white mb-4">
                Planning & Strategy
              </h3>
              <p className="text-gray-400 relative z-20 text-base leading-relaxed">
                We'll collaborate to map out your website's goals, target audience, 
                and key functionalities. We'll discuss things like site structure, 
                navigation, and content requirements.
              </p>
            </div>
            <button className="flex items-center gap-2 text-white font-semibold mt-8 uppercase text-sm tracking-wider hover:gap-3 transition-all">
              Explore More
              <ArrowRight className="w-4 h-4" />
            </button>
          </CardSpotlight>
        </div>

        <div className="relative inline-flex overflow-hidden rounded-[2.5rem] p-[1px] max-w-sm w-full">
          <span
            className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
           bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
          />
          <CardSpotlight className="w-full p-8 lg:h-[28rem] relative flex flex-col justify-between rounded-[41px]">
            <div>
              <AceternityIcon order="Phase 2" />
              <h3 className="text-2xl font-semibold relative z-20 mt-8 text-white mb-4">
                Development & Progress Update
              </h3>
              <p className="text-gray-400 relative z-20 text-base leading-relaxed">
                Once we agree on the plan, I cue my lofi playlist and dive into
                coding. From initial sketches to polished code, I keep you updated
                every step of the way.
              </p>
            </div>
            <button className="flex items-center gap-2 text-white font-semibold mt-8 uppercase text-sm tracking-wider hover:gap-3 transition-all">
              Explore More
              <ArrowRight className="w-4 h-4" />
            </button>
          </CardSpotlight>
        </div>

        <div className="relative inline-flex overflow-hidden rounded-[2.5rem] p-[1px] max-w-sm w-full">
          <span
            className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
           bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
          />
          <CardSpotlight className="w-full p-8 lg:h-[28rem] relative flex flex-col justify-between rounded-[41px] ">
            <div>
              <AceternityIcon order="Phase 3" />
              <h3 className="text-2xl font-semibold relative z-20 mt-8 text-white mb-4">
                Launch
              </h3>
              <p className="text-gray-400 relative z-20 text-base leading-relaxed">
                This is where the magic happens! Based on the approved design, 
                I'll translate everything into functional code, building your website
                from the ground up.
              </p>
            </div>
            <button className="flex items-center gap-2 text-white font-semibold mt-8 uppercase text-sm tracking-wider hover:gap-3 transition-all">
              Explore More
              <ArrowRight className="w-4 h-4" />
            </button>
          </CardSpotlight>
        </div>
      </div>
    </section>
  );
};

export default Approach;

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div className="inline-flex">
      <div className="relative inline-flex overflow-hidden rounded-2xl p-[1px]">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-2xl bg-slate-950 px-6 py-3 text-white backdrop-blur-3xl font-bold text-lg"
        >
          {order}
        </span>
      </div>
    </div>
  );
};