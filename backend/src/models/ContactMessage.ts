// Modelo de mensaje de contacto
export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: Date;
  isRead?: boolean;
}

// DTO para crear un mensaje de contacto
export interface CreateContactMessageDto {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
