import { Request, Response } from 'express';

import Utama from '../models/utamaModel';

export const getUtama = async (_req: Request, res: Response): Promise<void> => {
  try {
    const utama = await Utama.findAll()

    res.status(200).json({
      code: "01",
      message: "Success",
      status: true,
      data: utama,
    });
  } catch (error: any) {
    res.status(500).json({
      code: "03",
      message: error.message,
      status: false,
      data: {},
    });
  }
}

export const createUtama = async (req: Request, res: Response): Promise<void> => {
  const {
    header_id,
    nomor_pengajuan,
    tanggal_pengajuan,
    nomor_pendaftaran,
    tanggal_pendaftaran,
    kantor_pabean,
    kode_skep_fasilitas,
    jenis_pib,
    jenis_impor,
    cara_pembayaran,
    transaksi,
  } = req.body;

  try {
    if (
      !header_id ||
      !nomor_pengajuan ||
      !tanggal_pengajuan ||
      !nomor_pendaftaran ||
      !tanggal_pendaftaran ||
      !kantor_pabean ||
      !kode_skep_fasilitas ||
      !jenis_pib ||
      !jenis_impor ||
      !cara_pembayaran ||
      !transaksi
    ) {
      res.status(400).json({
        code: "02",
        message: "Validasi gagal, harap isi kolom yang kosong!",
        status: false,
        data: {},
      });
      return;
    }

    const utama = await Utama.create({
      header_id,
      nomor_pengajuan,
      tanggal_pengajuan,
      nomor_pendaftaran,
      tanggal_pendaftaran,
      kantor_pabean,
      kode_skep_fasilitas,
      jenis_pib,
      jenis_impor,
      cara_pembayaran,
      transaksi,
    });

    res.status(200).json({
      code: "01",
      message: "Success",
      status: true,
      data: utama,
    });
  } catch (error: any) {
    res.status(500).json({
      code: "03",
      message: error.message,
      status: false,
      data: {},
    });
  }
};
