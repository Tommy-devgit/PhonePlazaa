import { type ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="bg-white w-full text-white min-h-screen flex flex-col">
      {children}
    </div>
  );
}
