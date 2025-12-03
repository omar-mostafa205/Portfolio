"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(link);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "hidden md:flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-[#22233a] rounded-full bg-gradient-to-r from-[#161A31] to-[#06091F] shadow-[inset_0_0_8px_rgba(255,255,255,0.05)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            onClick={(e) => handleSmoothScroll(e, navItem.link)}
            className={cn(
              "relative text-white items-center flex space-x-1 hover:text-[#ccabff] transition-colors"
            )}
          >
            <span className="text-sm">{navItem.name}</span>
          </a>
        ))}
        <button className="border text-sm font-medium relative border-purple-500 text-white px-4 py-2 rounded-full hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] transition-all">
          <span>My Resume</span>
        </button>
      </motion.div>

      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "md:hidden flex fixed top-4 right-4 z-[5000]",
          className
        )}
      >
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="border border-[#22233a] rounded-full bg-gradient-to-r from-[#161A31] to-[#06091F] shadow-[inset_0_0_8px_rgba(255,255,255,0.05)] p-3 text-white hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] transition-all"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </motion.div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-[4999]"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && visible && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-20 right-4 z-[5000] border border-[#22233a] rounded-2xl bg-gradient-to-br from-[#161A31] to-[#06091F] shadow-[inset_0_0_8px_rgba(255,255,255,0.05)] p-4 min-w-[200px]"
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((navItem: any, idx: number) => (
                <a
                  key={`mobile-link=${idx}`}
                  href={navItem.link}
                  onClick={(e) => handleSmoothScroll(e, navItem.link)}
                  className="text-white hover:text-[#ccabff] transition-colors py-2 px-3 rounded-lg hover:bg-white/5"
                >
                  {navItem.name}
                </a>
              ))}
              <button className="border text-sm font-medium border-purple-500 text-white px-4 py-2 rounded-full hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] transition-all mt-2">
                <span>My Resume</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  );
};