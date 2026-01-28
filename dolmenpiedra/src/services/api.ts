// Configuración de la API
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

// Interfaz de respuesta de la API
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// Función genérica para hacer peticiones
async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });

    const data: ApiResponse<T> = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || `Error ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

// Funciones para productos
export const productsApi = {
  // Obtener todos los productos
  getAll: async () => {
    return apiFetch<Mesa[]>('/products');
  },

  // Obtener un producto por ID
  getById: async (id: string) => {
    return apiFetch<Mesa>(`/products/${id}`);
  },

  // Crear un nuevo producto
  create: async (product: CreateMesaDto) => {
    return apiFetch<Mesa>('/products', {
      method: 'POST',
      body: JSON.stringify(product),
    });
  },

  // Actualizar un producto
  update: async (id: string, updates: UpdateMesaDto) => {
    return apiFetch<Mesa>(`/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  },

  // Eliminar un producto
  delete: async (id: string) => {
    return apiFetch<null>(`/products/${id}`, {
      method: 'DELETE',
    });
  },
};

// Funciones para contacto
export const contactApi = {
  // Enviar mensaje de contacto
  send: async (message: ContactFormData) => {
    return apiFetch<ContactMessage>('/contact', {
      method: 'POST',
      body: JSON.stringify(message),
    });
  },

  // Obtener todos los mensajes (admin)
  getAll: async () => {
    return apiFetch<ContactMessage[]>('/contact');
  },

  // Obtener un mensaje por ID
  getById: async (id: string) => {
    return apiFetch<ContactMessage>(`/contact/${id}`);
  },

  // Marcar mensaje como leído
  markAsRead: async (id: string) => {
    return apiFetch<ContactMessage>(`/contact/${id}/read`, {
      method: 'PATCH',
    });
  },

  // Eliminar mensaje
  delete: async (id: string) => {
    return apiFetch<null>(`/contact/${id}`, {
      method: 'DELETE',
    });
  },
};

// Función de salud
export const healthCheck = async () => {
  return apiFetch<{ message: string; timestamp: string }>('/health');
};

// Tipos adicionales para el frontend
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

export interface CreateMesaDto {
  nombre: string;
  descripcion: string;
  precio: string;
  imagen: string;
  stock?: number;
  categoria?: string;
}

export interface UpdateMesaDto {
  nombre?: string;
  descripcion?: string;
  precio?: string;
  imagen?: string;
  stock?: number;
  categoria?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface ContactMessage extends ContactFormData {
  id: string;
  createdAt: Date;
  isRead?: boolean;
}
