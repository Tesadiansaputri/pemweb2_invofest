import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


// 1. menampilkan semua category
export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await prisma.category.findMany({
      orderBy: {
        id: "asc",
      },
    });

    res.json(categories);

  } catch (error) {
    res.status(500).json({
      message: "Gagal mengambil data category",
      error,
    });
  }
};


// 2. menambahkan category
export const createCategory = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    const newCategory = await prisma.category.create({
      data: {
        name,
      },
    });

    res.status(201).json({
      message: "Category berhasil ditambahkan",
      data: newCategory,
    });

  } catch (error) {
    res.status(500).json({
      message: "Gagal membuat category",
      error,
    });
  }
};


// 3. menampilkan category berdasarkan id
export const categoryById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const category = await prisma.category.findUnique({
      where: {
        id: Number(id),
      },
    });

    res.json(category);

  } catch (error) {
    res.status(500).json({
      message: "Gagal mengambil category",
      error,
    });
  }
};


// 4. update category
export const updateCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const category = await prisma.category.update({
      where: {
        id: Number(id),
      },
      data: req.body,
    });

    res.json(category);

  } catch (error) {
    res.status(500).json({
      message: "Gagal update category",
      error,
    });
  }
};


// 5. hapus category
export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await prisma.category.delete({
      where: {
        id: Number(id),
      },
    });

    res.json({
      message: "Berhasil hapus category",
    });

  } catch (error) {
    res.status(500).json({
      message: "Gagal hapus category",
      error,
    });
  }
};