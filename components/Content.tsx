import React, { useState } from "react";
export const Content = () => {
  return (
    <div className="mb-12">
      <div className="absolute top-0 grid min-w-full min-h-screen grid-cols-2 pt-16 overflow-hidden">
        <MapBox/>
        <div className=" before:empty-content before:absolute before:bg-diagonals-pattern before:bg-40px before:w-full before:h-full"></div>
      </div>
      <div className="container flex min-h-screen mx-auto ">
        <div className="grid min-w-full grid-cols-2">
          <div></div>
          <ContentBox />
        </div>
      </div>
    </div>
  );
};

export const MapBox = () => {
  return (
    <div className="h-full bg-blue-50">
        <p>mapa</p>
    </div>
  );
};

export const ContentBox = () => {
  return (
    <>
      <div className="relative w-full max-h-screen pt-16 pl-20 overflow-y-scroll no-scrollbar">
          <Filters />
          <Blocks />
      </div>
    </>
  );
};

export const Blocks = () => {
  return (
    <div className="pb-10">
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
    </div>
  );
};

export const Block = () => {
  return <div className="w-full h-32 mb-2 bg-yellow"></div>;
};

export const Filters = () => {
  return (
    <div className="py-5">
      <p className="">Propiedades</p>
      <p>Nuñes</p>
      <div className="flex items-center justify-between">
        <div>
          <p>Filtrar</p>
        </div>
        <div className="flex">
          <p>Comprar</p>
          <p>Alquilar</p>
        </div>
      </div>
      <div className="flex items-center justify-between pt-2 mt-2 border-t">
        <p>21 de 162 propiedades</p>
        <p>Ordenar por precio</p>
      </div>
    </div>
  );
};
