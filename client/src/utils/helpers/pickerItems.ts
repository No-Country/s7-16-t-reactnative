export interface itemList {
  id: number;
  nombre: string;
}

export const documentTypes: itemList[] = [
  { id: 1, nombre: "DNI-Argentina" },
  { id: 2, nombre: "CURP-México" },
  { id: 3, nombre: "RUT-Chile" },
  { id: 4, nombre: "CI-Uruguay" },
  { id: 5, nombre: "DPI-Guatemala" },
  { id: 6, nombre: "CPF-Brasil" },
  { id: 7, nombre: "INE-Honduras" },
  { id: 8, nombre: "DUI-El Salvador" },
  { id: 9, nombre: "IFE-México" },
  { id: 10, nombre: "DNI-Perú" },
];

export const genres: itemList[] = [
  { id: 1, nombre: "Masculino" },
  { id: 2, nombre: "Femenino" },
  { id: 3, nombre: "No binario" },
];
