// Modelo de producto (Mesa)
export interface Mesa {
  id: string;
  nombre: string;
  descripcion: string;
  precio: string;
  imagen: string;
  stock?: number;
  categoria?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// DTO para crear un producto
export interface CreateMesaDto {
  nombre: string;
  descripcion: string;
  precio: string;
  imagen: string;
  stock?: number;
  categoria?: string;
}

// DTO para actualizar un producto
export interface UpdateMesaDto {
  nombre?: string;
  descripcion?: string;
  precio?: string;
  imagen?: string;
  stock?: number;
  categoria?: string;
}
