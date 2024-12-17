import { Request, Response } from 'express';

import Pungutan from '../models/pungutanModel';

export const getPungutan = async (_req: Request, res: Response): Promise<void> => {
  try {
    const pungutan = await Pungutan.findAll()

    res.status(200).json({
      code: "01",
      message: "Success",
      status: true,
      data: pungutan,
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

export const createPungutan = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const {
    header_id,
    incoterms,
    valuta,
    kurs,
    nilai,
    biaya_tambahan,
    biaya_pengurangan,
    voluntary_declaration,
    bayar_asuransi_di,
    nilai_asuransi,
    freight,
    bruto,
    netto,
    flag_kontainer,
    nilai_fob,
    cif,
    cif_rp,
  } = req.body;

  try {
    if (
      !header_id ||
      !kurs ||
      !nilai ||
      !biaya_tambahan ||
      !biaya_pengurangan ||
      !voluntary_declaration ||
      !nilai_asuransi ||
      !freight ||
      !nilai_fob ||
      !cif ||
      !cif_rp
    ) {
      res.status(400).json({
        code: "02",
        message: "Validasi gagal, harap isi kolom yang kosong!",
        status: false,
        data: {},
      });

      return
    }


    const pungutan = await Pungutan.create({
      header_id,
      incoterms,
      valuta,
      kurs,
      nilai,
      biaya_tambahan,
      biaya_pengurangan,
      voluntary_declaration,
      bayar_asuransi_di,
      nilai_asuransi,
      freight,
      bruto,
      netto,
      flag_kontainer,
      nilai_fob,
      cif,
      cif_rp,
    });

    res.status(200).json({
      code: '01',
      message: "Success",
      status: true,
      data: pungutan,
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