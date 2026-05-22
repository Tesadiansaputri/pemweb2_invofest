import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


// 1. menampilkan semua data event
export const getAllEvents = async (req: Request, res: Response) => {
  try {
    const events = await prisma.event.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json(events);
  } catch (error) {
    res.status(500).json({
      message: "Gagal mengambil data",
      error,
    });
  }
};


// 2. menambahkan data event
export const createEvent = async (req: Request, res: Response) => {
  try {
    const { name, categoryId, location, dateEvent, description } = req.body;

    const newEvent = await prisma.event.create({
      data: {
        name,
        categoryId,
        location,
        dateEvent: new Date(dateEvent),
        description,
      },
    });

    res.status(201).json({
      message: "Data event berhasil disimpan",
      data: newEvent,
    });

  } catch (error) {
    res.status(500).json({
      message: "Gagal membuat event",
      error,
    });
  }
};


// 3. menampilkan data berdasarkan id
export const eventById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const event = await prisma.event.findUnique({
      where: {
        id: Number(id),
      },
    });

    res.json(event);
  } catch (error) {
    res.status(500).json({
      message: "Gagal mengambil data",
      error,
    });
  }
};


// 4. update data berdasarkan id
export const updateById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const event = await prisma.event.update({
      where: {
        id: Number(id),
      },
      data: req.body,
    });

    res.json(event);
  } catch (error) {
    res.status(500).json({
      message: "Gagal update data",
      error,
    });
  }
};


// 5. hapus data berdasarkan id
export const deleteById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await prisma.event.delete({
      where: {
        id: Number(id),
      },
    });

    res.json({
      message: "Berhasil hapus event",
    });

  } catch (error) {
    res.status(500).json({
      message: "Gagal menghapus data",
      error,
    });
  }
};