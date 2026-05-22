import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


// 1. tampil semua speaker
export const getAllSpeakers = async (req: Request, res: Response) => {
  try {
    const speakers = await prisma.speaker.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json(speakers);

  } catch (error) {
    res.status(500).json({
      message: "Gagal mengambil data speaker",
      error,
    });
  }
};


// 2. tambah speaker
export const createSpeaker = async (req: Request, res: Response) => {
  try {
    const { name, role, image } = req.body;

    const newSpeaker = await prisma.speaker.create({
      data: {
        name,
        role,
        image,
      },
    });

    res.status(201).json({
      message: "Speaker berhasil ditambahkan",
      data: newSpeaker,
    });

  } catch (error) {
    res.status(500).json({
      message: "Gagal membuat speaker",
      error,
    });
  }
};


// 3. tampil speaker berdasarkan id
export const speakerById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const speaker = await prisma.speaker.findUnique({
      where: {
        id: Number(id),
      },
    });

    res.json(speaker);

  } catch (error) {
    res.status(500).json({
      message: "Gagal mengambil speaker",
      error,
    });
  }
};


// 4. update speaker
export const updateSpeaker = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const speaker = await prisma.speaker.update({
      where: {
        id: Number(id),
      },
      data: req.body,
    });

    res.json(speaker);

  } catch (error) {
    res.status(500).json({
      message: "Gagal update speaker",
      error,
    });
  }
};


// 5. hapus speaker
export const deleteSpeaker = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await prisma.speaker.delete({
      where: {
        id: Number(id),
      },
    });

    res.json({
      message: "Berhasil hapus speaker",
    });

  } catch (error) {
    res.status(500).json({
      message: "Gagal hapus speaker",
      error,
    });
  }
};