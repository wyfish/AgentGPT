import type { PropsWithChildren } from "react";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";
import clsx from "clsx";

type BadgeProps = PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement>>;

const BannerBadge = ({ children, className, ...props }: BadgeProps) => {
  return (
    <a
      className={clsx(
        "group pr-3 transition-colors hover:bg-purple-300/10",
        "relative flex w-max cursor-pointer items-center gap-2 rounded-full",
        "border border-purple-300 p-1 pl-2 text-sm text-white",
        "animate-border-pulse",
        "bg-gradient-to-t from-purple-500/20 via-transparent to-transparent"
      )}
      {...props}
    >
      <IoSparkles className="mx-1" />
      <span>{children}</span>
      <FaChevronRight
        size={10}
        className={clsx(
          "font-thin ",
          "transition-transform duration-300",
          "text-gray-400 group-hover:translate-x-1"
        )}
      />
    </a>
  );
};

export default BannerBadge;
