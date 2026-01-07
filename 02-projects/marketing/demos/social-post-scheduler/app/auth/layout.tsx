import React from "react";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="font-work-sans">
      auth navbar
      {children}
    </main>
  );
};

export default Layout;
