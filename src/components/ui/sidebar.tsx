"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { ChevronLeft, Menu } from "lucide-react";

import { cn } from "@/src/lib/utils";
import { Button } from "@/src/components/ui/button";

const SidebarContext = React.createContext<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isOpen: true,
  setIsOpen: () => {},
});

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="grid md:grid-cols-[auto_1fr] overflow-hidden">
        {children}
      </div>
    </SidebarContext.Provider>
  );
}

export function Sidebar({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { isOpen } = React.useContext(SidebarContext);

  return (
    <aside
      className={cn(
        "group relative flex h-screen w-full flex-col border-r bg-background transition-all duration-300 ease-in-out",
        isOpen ? "md:w-64" : "md:w-16",
        className,
      )}
      {...props}
    >
      {children}
    </aside>
  );
}

export function SidebarHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { isOpen } = React.useContext(SidebarContext);

  return (
    <header
      className={cn(
        "flex h-16 shrink-0 items-center gap-2 border-b px-4",
        isOpen ? "justify-between" : "justify-center",
        className,
      )}
      {...props}
    >
      {isOpen ? children : null}
    </header>
  );
}

export function SidebarContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex-1 overflow-auto py-2", className)} {...props}>
      {children}
    </div>
  );
}

export function SidebarGroup({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("px-2 space-y-1", className)} {...props}>
      {children}
    </div>
  );
}

export function SidebarMenu({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("space-y-1", className)} {...props}>
      {children}
    </div>
  );
}

export function SidebarMenuItem({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  );
}

const sidebarMenuButtonVariants = cva(
  "flex items-center gap-2 rounded-md px-3 py-2 w-full text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "",
        ghost: "",
      },
      size: {
        default: "",
        sm: "px-2 py-1",
        lg: "px-3 py-2.5 text-base",
      },
      isActive: {
        true: "bg-accent text-accent-foreground",
        false: "transparent",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      isActive: false,
    },
  },
);

export interface SidebarMenuButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof sidebarMenuButtonVariants> {
  asChild?: boolean;
}

export const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  SidebarMenuButtonProps
>(({ className, variant, size, isActive, asChild = false, ...props }, ref) => {
  const { isOpen } = React.useContext(SidebarContext);
  const Comp = asChild ? React.Fragment : "button";
  const childProps = asChild
    ? {
        className: cn(
          sidebarMenuButtonVariants({ variant, size, isActive, className }),
          !isOpen && "justify-center px-0",
        ),
      }
    : {
        className: cn(
          sidebarMenuButtonVariants({ variant, size, isActive, className }),
          !isOpen && "justify-center px-0",
        ),
        ref,
        ...props,
      };

  return <Comp {...childProps} />;
});
SidebarMenuButton.displayName = "SidebarMenuButton";

export function SidebarMenuSub({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { isOpen } = React.useContext(SidebarContext);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={cn("pl-6 space-y-1", className)} {...props}>
      {children}
    </div>
  );
}

export function SidebarMenuSubItem({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  );
}

const sidebarMenuSubButtonVariants = cva(
  "flex items-center gap-2 rounded-md px-3 py-2 w-full text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "",
        ghost: "",
      },
      size: {
        default: "",
        sm: "px-2 py-1",
        lg: "px-3 py-2.5 text-base",
      },
      isActive: {
        true: "bg-accent text-accent-foreground font-medium",
        false: "transparent",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      isActive: false,
    },
  },
);

export interface SidebarMenuSubButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof sidebarMenuSubButtonVariants> {
  asChild?: boolean;
}

export const SidebarMenuSubButton = React.forwardRef<
  HTMLButtonElement,
  SidebarMenuSubButtonProps
>(({ className, variant, size, isActive, asChild = false, ...props }, ref) => {
  const Comp = asChild ? React.Fragment : "button";
  const childProps = asChild
    ? {
        className: cn(
          sidebarMenuSubButtonVariants({ variant, size, isActive, className }),
        ),
      }
    : {
        className: cn(
          sidebarMenuSubButtonVariants({ variant, size, isActive, className }),
        ),
        ref,
        ...props,
      };

  return <Comp {...childProps} />;
});
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";

export function SidebarRail({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { isOpen, setIsOpen } = React.useContext(SidebarContext);

  return (
    <div
      className={cn(
        "absolute right-0 top-0 h-full w-1 translate-x-1/2 cursor-ew-resize bg-transparent transition-all duration-300 ease-in-out hover:bg-accent",
        className,
      )}
      onDoubleClick={() => setIsOpen(!isOpen)}
      {...props}
    />
  );
}

export function SidebarTrigger({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { isOpen, setIsOpen } = React.useContext(SidebarContext);

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn("h-9 w-9", className)}
      onClick={() => setIsOpen(!isOpen)}
      {...props}
    >
      {isOpen ? (
        <ChevronLeft className="h-4 w-4" />
      ) : (
        <Menu className="h-4 w-4" />
      )}
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
}

export function SidebarInset({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex h-screen flex-col overflow-auto", className)}
      {...props}
    >
      {children}
    </div>
  );
}
