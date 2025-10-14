import React from "react";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="font-work-sans">
      dashboard navbar
      {children}
    </main>
  );
};

export default Layout;
