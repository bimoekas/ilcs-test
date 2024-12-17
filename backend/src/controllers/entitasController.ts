import { Request, Response } from 'express';
import Entitas from '../models/entitasModel';

export const getEntitas = async (_req: Request, res: Response): Promise<void> => {
  try {
    const entitas = await Entitas.findAll()

    res.status(200).json({
      code: "01",
      message: "Success",
      status: true,
      data: entitas,
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

export const createEntitas = async (req: Request, res: Response): Promise<void> => {
  const {
    header_id,
    jenis_pemberitahuan,
    jenis_identitas,
    nib,
    nomor_identitas,
    nik,
    nama_perusahaan,
    provinsi_id,
    provinsi_name,
    kabupaten_kota_id,
    kabupaten_kota_name,
    kecamatan_id,
    kecamatan_name,
    desa_kelurahan_id,
    desa_kelurahan_name,
    kode_pos,
    rt,
    rw,
    nomor_telepon,
    email,
    status,
  } = req.body;

  try {
    if (
      !header_id ||
      !jenis_pemberitahuan ||
      !jenis_identitas ||
      !nib ||
      !nomor_identitas ||
      !nik ||
      !nama_perusahaan ||
      !provinsi_id ||
      !provinsi_name ||
      !kabupaten_kota_id ||
      !kabupaten_kota_name ||
      !kecamatan_id ||
      !kecamatan_name ||
      !desa_kelurahan_id ||
      !desa_kelurahan_name ||
      !kode_pos ||
      !rt ||
      !rw ||
      !nomor_telepon ||
      !email ||
      !status
    ) {
      res.status(400).json({
        code: "02",
        message: "Validasi gagal, harap isi kolom yang kosong!",
        status: false,
        data: {},
      });
      return;
    }

    const entitas = await Entitas.create({
      header_id,
      jenis_pemberitahuan,
      jenis_identitas,
      nib,
      nomor_identitas,
      nik,
      nama_perusahaan,
      provinsi_id,
      provinsi_name,
      kabupaten_kota_id,
      kabupaten_kota_name,
      kecamatan_id,
      kecamatan_name,
      desa_kelurahan_id,
      desa_kelurahan_name,
      kode_pos,
      rt,
      rw,
      nomor_telepon,
      email,
      status,
    });

    res.status(200).json({
      code: "01",
      message: "Success",
      status: true,
      data: entitas,
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
