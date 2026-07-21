"use client";

import {
  AnimatePresence,
  motion,
  type MotionValue,
  type SpringOptions,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import Link from "next/link";
import {
  Children,
  cloneElement,
  Fragment,
  isValidElement,
  type ReactElement,
  type ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export type DockItemData = {
  icon: ReactNode;
  label: string;
  href?: string;
  onClick?: () => void;
  active?: boolean;
  separatorBefore?: boolean;
  className?: string;
};

type DockProps = {
  items: DockItemData[];
  className?: string;
  distance?: number;
  panelHeight?: number;
  baseItemSize?: number;
  dockHeight?: number;
  magnification?: number;
  spring?: SpringOptions;
};

type DockItemProps = DockItemData & {
  mouseX: MotionValue<number>;
  spring: SpringOptions;
  distance: number;
  baseItemSize: number;
  magnification: number;
};

function DockItem({
  icon,
  label,
  href,
  onClick,
  active = false,
  className = "",
  mouseX,
  spring,
  distance,
  baseItemSize,
  magnification,
}: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(mouseX, (value) => {
    const rect = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: baseItemSize,
    };

    return value - rect.x - rect.width / 2;
  });

  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize],
  );
  const size = useSpring(targetSize, spring);

  const interactiveClassName =
    "flex h-full w-full items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))]";

  const content = Children.map(icon, (child) =>
    isValidElement(child)
      ? cloneElement(child as ReactElement<{ "aria-hidden"?: boolean }>, {
          "aria-hidden": true,
        })
      : child,
  );

  return (
    <motion.div
      ref={ref}
      style={{ width: size, height: size }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      className={`relative shrink-0 rounded-full border shadow-lg transition-colors duration-200 ${
        active
          ? "border-[hsl(var(--primary)/0.65)] bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] shadow-[hsl(var(--primary)/0.3)]"
          : "border-[hsl(var(--border))] bg-[hsl(var(--card)/0.9)] text-[hsl(var(--muted-foreground))] hover:border-[hsl(var(--primary)/0.45)] hover:text-[hsl(var(--foreground))]"
      } ${className}`}
    >
      {href ? (
        <Link
          href={href}
          aria-label={label}
          aria-current={active ? "page" : undefined}
          className={interactiveClassName}
        >
          {content}
        </Link>
      ) : (
        <button
          type="button"
          onClick={onClick}
          aria-label={label}
          className={interactiveClassName}
        >
          {content}
        </button>
      )}

      <DockLabel isHovered={isHovered}>{label}</DockLabel>
      {active && (
        <span
          aria-hidden="true"
          className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[hsl(var(--primary))] shadow-[0_0_8px_hsl(var(--primary))]"
        />
      )}
    </motion.div>
  );
}

function DockLabel({
  children,
  isHovered,
}: {
  children: ReactNode;
  isHovered: MotionValue<number>;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(
    () => isHovered.on("change", (latest) => setIsVisible(latest === 1)),
    [isHovered],
  );

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.span
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: -8 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.16 }}
          className="pointer-events-none absolute -top-8 left-1/2 w-fit -translate-x-1/2 whitespace-nowrap rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card)/0.96)] px-2 py-1 text-[11px] font-medium text-[hsl(var(--foreground))] shadow-xl backdrop-blur-xl"
          role="tooltip"
        >
          {children}
        </motion.span>
      )}
    </AnimatePresence>
  );
}

export default function Dock({
  items,
  className = "",
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 68,
  distance = 150,
  panelHeight = 64,
  dockHeight = 116,
  baseItemSize = 46,
}: DockProps) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);
  const maxHeight = useMemo(
    () => Math.max(dockHeight, magnification + magnification / 2 + 4),
    [dockHeight, magnification],
  );
  const heightRow = useTransform(isHovered, [0, 1], [panelHeight, maxHeight]);
  const height = useSpring(heightRow, spring);

  return (
    <motion.nav
      style={{ height, scrollbarWidth: "none" }}
      className="fixed inset-x-0 bottom-2 z-50 flex items-end justify-center px-3 sm:bottom-5"
      aria-label="Primary navigation"
    >
      <motion.div
        onMouseMove={({ pageX }) => {
          isHovered.set(1);
          mouseX.set(pageX);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        className={`flex w-fit max-w-full items-end gap-1.5 rounded-2xl border border-[hsl(var(--border)/0.85)] bg-[hsl(var(--background)/0.72)] px-2.5 pb-2 pt-2 rounded-lg shadow-2xl shadow-black/25 backdrop-blur-xl supports-[backdrop-filter]:bg-[hsl(var(--background)/0.62)] sm:gap-2 sm:px-3 ${className}`}
        style={{ height: panelHeight }}
      >
        {items.map((item) => (
          <Fragment key={item.href ?? item.label}>
            {item.separatorBefore && (
              <span
                aria-hidden="true"
                className="mx-0.5 h-7 w-px shrink-0 self-center rounded-full bg-[linear-gradient(180deg,transparent,hsl(var(--foreground)/0.28),transparent)]"
              />
            )}
            <DockItem
              {...item}
              mouseX={mouseX}
              spring={spring}
              distance={distance}
              magnification={magnification}
              baseItemSize={baseItemSize}
            />
          </Fragment>
        ))}
      </motion.div>
    </motion.nav>
  );
}
