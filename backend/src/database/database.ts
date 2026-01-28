import { v4 as uuidv4 } from 'uuid';
import type { Mesa } from '../models/Mesa.js';
import type { ContactMessage } from '../models/ContactMessage.js';

// Base de datos en memoria para productos
class ProductsDatabase {
  private products: Mesa[] = [
    {
      id: uuidv4(),
      nombre: "Mesa de Centro Damero",
      descripcion: "Mesa en caliza sierra Elvira y caliza Blanca Paloma piezas de 10x10x2 cm grosor acabado apomazado 160x80x40 h.",
      precio: "1768€",
      imagen: "/images/mesa_centro.jpeg",
      stock: 5,
      categoria: "Mesa de Centro",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: uuidv4(),
      nombre: "Mesa Salón Travertino",
      descripcion: "Mesa salón en travertino envejecido tapa de 270x120x4 cm grosor cantos redondeados- base forma orgánica de 190x50x69h.",
      precio: "6746€",
      imagen: "/images/mesa_salon_travertino.jpeg",
      stock: 3,
      categoria: "Mesa de Salón",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: uuidv4(),
      nombre: "Mesa Velador",
      descripcion: "Mesa velador en travertino apomazado/ resonado: tapa de 120x120 x 3 cm grosor cantos redondeados- base forma octogonal de 73 cm h.",
      precio: "2019€",
      imagen: "/images/mesa_velador.jpeg",
      stock: 8,
      categoria: "Mesa Velador",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: uuidv4(),
      nombre: "Tapas Mesas Travertino",
      descripcion: "Ud tapas mesa en travertino apomazado/ resinado de 50-35 o 30 diámetro x 4 cm grosor canto redondeado.",
      precio: "580€/ud",
      imagen: "/images/tapas_mesas_travertino.jpeg",
      stock: 15,
      categoria: "Accesorios",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];

  getAllProducts(): Mesa[] {
    return this.products;
  }

  getProductById(id: string): Mesa | undefined {
    return this.products.find(p => p.id === id);
  }

  createProduct(product: Omit<Mesa, 'id' | 'createdAt' | 'updatedAt'>): Mesa {
    const newProduct: Mesa = {
      ...product,
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.products.push(newProduct);
    return newProduct;
  }

  updateProduct(id: string, updates: Partial<Mesa>): Mesa | undefined {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) return undefined;

    this.products[index] = {
      ...this.products[index],
      ...updates,
      id: this.products[index].id, // Mantener el ID original
      createdAt: this.products[index].createdAt, // Mantener fecha de creación
      updatedAt: new Date()
    };
    return this.products[index];
  }

  deleteProduct(id: string): boolean {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) return false;
    this.products.splice(index, 1);
    return true;
  }
}

// Base de datos en memoria para mensajes de contacto
class ContactMessagesDatabase {
  private messages: ContactMessage[] = [];

  getAllMessages(): ContactMessage[] {
    return this.messages.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  getMessageById(id: string): ContactMessage | undefined {
    return this.messages.find(m => m.id === id);
  }

  createMessage(message: Omit<ContactMessage, 'id' | 'createdAt' | 'isRead'>): ContactMessage {
    const newMessage: ContactMessage = {
      ...message,
      id: uuidv4(),
      createdAt: new Date(),
      isRead: false
    };
    this.messages.push(newMessage);
    return newMessage;
  }

  markAsRead(id: string): ContactMessage | undefined {
    const message = this.messages.find(m => m.id === id);
    if (!message) return undefined;
    message.isRead = true;
    return message;
  }

  deleteMessage(id: string): boolean {
    const index = this.messages.findIndex(m => m.id === id);
    if (index === -1) return false;
    this.messages.splice(index, 1);
    return true;
  }
}

// Instancias singleton
export const productsDB = new ProductsDatabase();
export const contactMessagesDB = new ContactMessagesDatabase();
