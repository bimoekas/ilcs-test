// ============================================= //
// ================ Form Values ================ //
// ============================================= //

export interface UtamaFormValues {
  header_id: string;
  nomor_pengajuan: string;
  tanggal_pengajuan: Date;
  nomor_pendaftaran: string;
  tanggal_pendaftaran: Date;
  kantor_pabean: string;
  kode_skep_fasilitas: string;
  jenis_pib: string;
  jenis_impor: string;
  cara_pembayaran: string;
  transaksi: string;
}

export interface EntitasFormValues {
  header_id: string;
  jenis_pemberitahuan: string;
  jenis_identitas: string;
  nib: number;
  nomor_identitas: number;
  nik: number;
  nama_perusahaan: string;
  provinsi_id: number;
  provinsi_name: string;
  kabupaten_kota_id: number;
  kabupaten_kota_name: string;
  kecamatan_id: number;
  kecamatan_name: string;
  desa_kelurahan_id: number;
  desa_kelurahan_name: string;
  kode_pos: number;
  rt: number;
  rw: number;
  nomor_telepon: string;
  email: string;
  status: string;
}

export interface PungutanFormValues {
  header_id: string;
  incoterms: string;
  valuta: string;
  kurs: number;
  nilai: number;
  biaya_tambahan: number;
  biaya_pengurangan: number;
  voluntary_declaration: number;
  nilai_fob: number;
  bayar_asuransi_di: string;
  nilai_asuransi: number;
  freight: number;
  cif: number
  cif_rp: number;
  bruto: number;
  netto: number;
  flag_kontainer: string
}