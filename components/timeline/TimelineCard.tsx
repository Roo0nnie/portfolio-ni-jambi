"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, MapPin } from "lucide-react";

export interface TimelineEvent {
  id: string;
  time: string;
  title: string;
  location?: string;
  description: string;
  tag?: string;
}

interface TimelineCardProps {
  event: TimelineEvent;
  index: number;
  isLast?: boolean;
}

export function TimelineCard({ event, index, isLast = false }: TimelineCardProps) {
  return (
    <div className="relative flex gap-6 sm:gap-8 group">
      {/* Line and marker */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="w-10 h-10 rounded-full bg-[#580a0b] dark:bg-[#1a1515] border-2 border-[#d4af37] flex items-center justify-center text-[#f3e5ab] shadow-md z-10 group-hover:scale-110 transition-transform duration-300"
        >
          <span className="font-serif font-bold text-sm">{index + 1}</span>
        </motion.div>
        
        {!isLast && (
          <div className="w-0.5 grow bg-gradient-to-b from-[#d4af37] via-gray-200 dark:via-gray-800 to-[#d4af37] my-2" />
        )}
      </div>

      {/* Content Box */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="grow pb-8"
      >
        <div className="bg-white dark:bg-[#1a1515] rounded-xl p-5 sm:p-6 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300">
          
          {/* Header metadata row */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#7b1113] dark:text-[#d4af37]">
              <Clock className="w-3.5 h-3.5 shrink-0" />
              <span>{event.time}</span>
            </div>

            {event.tag && (
              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                {event.tag}
              </span>
            )}
          </div>

          {/* Title */}
          <h4 className="font-serif font-bold text-lg text-gray-900 dark:text-white mb-2">
            {event.title}
          </h4>

          {/* Location */}
          {event.location && (
            <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 mb-3">
              <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
              <span>{event.location}</span>
            </div>
          )}

          {/* Description */}
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-sans">
            {event.description}
          </p>

        </div>
      </motion.div>
    </div>
  );
}
