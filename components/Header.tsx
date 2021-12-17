import React from "react";

export const Header = () => {
  return (
    <div className="fixed top-0 z-50 flex w-full h-16 bg-red">
      <div className="container flex items-center justify-between mx-auto">
        <p>Inicio</p>
        <p>Fin</p>
      </div>
    </div>
  );
};
