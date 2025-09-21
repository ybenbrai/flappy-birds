"use client";

import { useGameConfig } from "@/contexts/GameConfigContext";

interface BackgroundProps {
  gameWidth: number;
  gameHeight: number;
}

export default function Background({ gameWidth, gameHeight }: BackgroundProps) {
  const { config } = useGameConfig();

  return (
    <div
      className="absolute inset-0 w-full h-full"
      style={{
        background: `linear-gradient(to bottom, ${config.visual.skyGradientStart}, ${config.visual.skyGradientEnd})`,
      }}
    >
      {/* Clouds */}
      <div
        className="absolute top-10 left-20 w-16 h-8 rounded-full"
        style={{
          backgroundColor: config.visual.cloudColor,
          opacity: config.visual.cloudOpacity,
        }}
      ></div>
      <div
        className="absolute top-8 left-24 w-12 h-6 rounded-full"
        style={{
          backgroundColor: config.visual.cloudColor,
          opacity: config.visual.cloudOpacity,
        }}
      ></div>
      <div
        className="absolute top-12 left-28 w-8 h-4 rounded-full"
        style={{
          backgroundColor: config.visual.cloudColor,
          opacity: config.visual.cloudOpacity,
        }}
      ></div>

      <div
        className="absolute top-20 right-32 w-20 h-10 rounded-full"
        style={{
          backgroundColor: config.visual.cloudColor,
          opacity: config.visual.cloudOpacity,
        }}
      ></div>
      <div
        className="absolute top-18 right-36 w-16 h-8 rounded-full"
        style={{
          backgroundColor: config.visual.cloudColor,
          opacity: config.visual.cloudOpacity,
        }}
      ></div>
      <div
        className="absolute top-22 right-40 w-12 h-6 rounded-full"
        style={{
          backgroundColor: config.visual.cloudColor,
          opacity: config.visual.cloudOpacity,
        }}
      ></div>

      <div
        className="absolute top-40 left-60 w-14 h-7 rounded-full"
        style={{
          backgroundColor: config.visual.cloudColor,
          opacity: config.visual.cloudOpacity,
        }}
      ></div>
      <div
        className="absolute top-38 left-64 w-10 h-5 rounded-full"
        style={{
          backgroundColor: config.visual.cloudColor,
          opacity: config.visual.cloudOpacity,
        }}
      ></div>
      <div
        className="absolute top-42 left-68 w-6 h-3 rounded-full"
        style={{
          backgroundColor: config.visual.cloudColor,
          opacity: config.visual.cloudOpacity,
        }}
      ></div>
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{ backgroundColor: config.visual.groundColor }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-8"
          style={{ backgroundColor: config.visual.pipeBorderColor }}
        ></div>
        <div className="absolute top-2 left-4 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-8 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-12 w-3 h-3 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-16 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-20 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-24 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-28 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-32 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-36 w-3 h-3 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-40 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-44 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-48 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-52 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-56 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-60 w-3 h-3 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-64 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-68 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-72 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-76 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-80 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-84 w-3 h-3 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-88 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-92 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-96 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-100 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-104 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-108 w-3 h-3 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-112 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-116 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-120 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-124 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-128 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-132 w-3 h-3 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-136 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-140 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-144 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-148 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-152 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-156 w-3 h-3 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-160 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-164 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-168 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-172 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-176 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-180 w-3 h-3 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-184 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-188 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-192 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-196 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-200 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-204 w-3 h-3 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-208 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-212 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-216 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-220 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-224 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-228 w-3 h-3 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-232 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-236 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-240 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-244 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-248 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-252 w-3 h-3 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-256 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-260 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-264 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-268 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-272 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-276 w-3 h-3 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-280 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-284 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-288 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-292 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-296 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-300 w-3 h-3 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-304 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-308 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-312 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-316 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-320 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-324 w-3 h-3 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-328 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-332 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-336 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-340 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-344 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-348 w-3 h-3 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-352 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-356 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-360 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-364 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-368 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-372 w-3 h-3 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-376 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-380 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-384 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-388 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-392 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-396 w-3 h-3 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-400 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-404 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-408 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-412 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-416 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-420 w-3 h-3 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-424 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-428 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-432 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-436 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-440 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-444 w-3 h-3 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-448 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-452 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-456 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-460 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-464 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-468 w-3 h-3 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-472 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-476 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-480 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-484 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-488 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-492 w-3 h-3 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-496 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-500 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-504 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-508 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-512 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-516 w-3 h-3 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-520 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-524 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-528 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-532 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-536 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-540 w-3 h-3 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-544 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-548 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-552 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-556 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-560 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-564 w-3 h-3 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-568 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-572 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-576 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-580 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-584 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-588 w-3 h-3 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-592 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-596 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-600 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-604 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-608 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-612 w-3 h-3 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-616 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-620 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-624 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-628 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-632 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-636 w-3 h-3 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-640 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-644 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-648 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-652 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-656 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-660 w-3 h-3 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-664 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-668 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-672 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-676 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-680 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-684 w-3 h-3 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-688 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-692 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-696 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-700 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-704 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-708 w-3 h-3 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-712 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-716 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-720 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-724 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-728 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-732 w-3 h-3 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-736 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-740 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-744 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-748 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-752 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-756 w-3 h-3 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-760 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-764 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-768 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-772 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-776 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-780 w-3 h-3 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-784 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-788 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-792 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-796 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-800 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-804 w-3 h-3 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-808 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-812 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-816 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-820 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-824 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-828 w-3 h-3 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-832 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-836 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-840 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-844 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-848 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-852 w-3 h-3 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-856 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-860 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-864 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-868 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-872 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-876 w-3 h-3 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-880 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-884 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-888 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-892 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-896 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-900 w-3 h-3 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-904 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-908 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-912 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-916 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-920 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-924 w-3 h-3 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-928 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-932 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-936 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-940 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-944 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-948 w-3 h-3 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-952 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-956 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-960 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-964 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-968 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-972 w-3 h-3 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-976 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-980 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-4 left-984 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-2 left-988 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="absolute top-3 left-992 w-1 h-1 bg-green-700 rounded-full"></div>
        <div className="absolute top-1 left-996 w-3 h-3 bg-green-700 rounded-full"></div>
      </div>
    </div>
  );
}
