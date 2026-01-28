import { Request, Response } from 'express';
import { productsDB } from '../database/database.js';
import type { CreateMesaDto, UpdateMesaDto } from '../models/Mesa.js';
import type { ApiResponse } from '../models/ApiResponse.js';

// GET /api/products - Obtener todos los productos
export const getAllProducts = (req: Request, res: Response) => {
  try {
    const products = productsDB.getAllProducts();
    const response: ApiResponse<typeof products> = {
      success: true,
      data: products,
      message: 'Productos obtenidos correctamente'
    };
    res.json(response);
  } catch (error) {
    const response: ApiResponse<null> = {
      success: false,
      error: error instanceof Error ? error.message : 'Error desconocido'
    };
    res.status(500).json(response);
  }
};

// GET /api/products/:id - Obtener un producto por ID
export const getProductById = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = productsDB.getProductById(id);

    if (!product) {
      const response: ApiResponse<null> = {
        success: false,
        error: 'Producto no encontrado'
      };
      return res.status(404).json(response);
    }

    const response: ApiResponse<typeof product> = {
      success: true,
      data: product
    };
    res.json(response);
  } catch (error) {
    const response: ApiResponse<null> = {
      success: false,
      error: error instanceof Error ? error.message : 'Error desconocido'
    };
    res.status(500).json(response);
  }
};

// POST /api/products - Crear un nuevo producto
export const createProduct = (req: Request, res: Response) => {
  try {
    const productData: CreateMesaDto = req.body;

    // Validación básica
    if (!productData.nombre || !productData.descripcion || !productData.precio) {
      const response: ApiResponse<null> = {
        success: false,
        error: 'Faltan campos obligatorios: nombre, descripcion, precio'
      };
      return res.status(400).json(response);
    }

    const newProduct = productsDB.createProduct(productData);
    const response: ApiResponse<typeof newProduct> = {
      success: true,
      data: newProduct,
      message: 'Producto creado correctamente'
    };
    res.status(201).json(response);
  } catch (error) {
    const response: ApiResponse<null> = {
      success: false,
      error: error instanceof Error ? error.message : 'Error desconocido'
    };
    res.status(500).json(response);
  }
};

// PUT /api/products/:id - Actualizar un producto
export const updateProduct = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updates: UpdateMesaDto = req.body;

    const updatedProduct = productsDB.updateProduct(id, updates);

    if (!updatedProduct) {
      const response: ApiResponse<null> = {
        success: false,
        error: 'Producto no encontrado'
      };
      return res.status(404).json(response);
    }

    const response: ApiResponse<typeof updatedProduct> = {
      success: true,
      data: updatedProduct,
      message: 'Producto actualizado correctamente'
    };
    res.json(response);
  } catch (error) {
    const response: ApiResponse<null> = {
      success: false,
      error: error instanceof Error ? error.message : 'Error desconocido'
    };
    res.status(500).json(response);
  }
};

// DELETE /api/products/:id - Eliminar un producto
export const deleteProduct = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = productsDB.deleteProduct(id);

    if (!deleted) {
      const response: ApiResponse<null> = {
        success: false,
        error: 'Producto no encontrado'
      };
      return res.status(404).json(response);
    }

    const response: ApiResponse<null> = {
      success: true,
      message: 'Producto eliminado correctamente'
    };
    res.json(response);
  } catch (error) {
    const response: ApiResponse<null> = {
      success: false,
      error: error instanceof Error ? error.message : 'Error desconocido'
    };
    res.status(500).json(response);
  }
};
