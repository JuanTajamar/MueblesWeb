import type { Mesa } from "../models/Mesa";

const PRODUCTOS_DB: Mesa[] = [
  {
    nombre: "Mesa de Centro Damero",
    descripcion: "Mesa en caliza sierra Elvira y caliza Blanca Paloma piezas de 10x10x2 cm grosor acabado apomazado 160x80x40 h.",
    precio: "1768€",
    imagen: "/images/mesa_centro.jpeg"
  },
  {
    nombre: "Mesa Salón Travertino",
    descripcion: "Mesa salón en travertino envejecido tapa de 270x120x4 cm grosor cantos redondeados- base forma orgánica de 190x50x69h.",
    precio: "6746€",
    imagen: "/images/mesa_salon_travertino.jpeg"
  },
  {
    nombre: "Mesa Velador",
    descripcion: "Mesa velador en travertino apomazado/ resonado: tapa de 120x120 x 3 cm grosor cantos redondeados- base forma octogonal de 73 cm h.",
    precio: "2019€",
    imagen: "/images/mesa_velador.jpeg"
  },
  {
    nombre: "Tapas Mesas Travertino",
    descripcion: "Ud tapas mesa en travertino apomazado/ resinado de 50-35 o 30 diámetro x 4 cm grosor canto redondeado.",
    precio: "580€/ud",
    imagen: "/images/tapas_mesas_travertino.jpeg"
  }
];

export const getProducts = (): Mesa[] => {
  return PRODUCTOS_DB;
};