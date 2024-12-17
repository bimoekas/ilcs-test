import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from "../config/database"

interface BaseEntity {
  id: number;
  name: string;
}

interface EntitasAttributes {
  id: string;
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

interface EntitasCreationAttributes extends Optional<EntitasAttributes, "id"> { }

class Entitas
  extends Model<EntitasAttributes, EntitasCreationAttributes>
  implements Entitas {
  public id!: string;
  public header_id!: string;
  public jenis_pemberitahuan!: string;
  public jenis_identitas!: string;
  public nib!: number;
  public nomor_identitas!: number;
  public nik!: number;
  public nama_perusahaan!: string;
  public provinsi_id!: number;
  public provinsi_name!: string;
  public kabupaten_kota_id!: number;
  public kabupaten_kota_name!: string;
  public kecamatan_id!: number;
  public kecamatan_name!: string;
  public desa_kelurahan_id!: number;
  public desa_kelurahan_name!: string;
  public kode_pos!: number;
  public rt!: number;
  public rw!: number;
  public nomor_telepon!: string;
  public email!: string;
  public status!: string;
}

Entitas.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    header_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    jenis_pemberitahuan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jenis_identitas: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nib: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    nomor_identitas: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    nik: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    nama_perusahaan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    provinsi_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    provinsi_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    kabupaten_kota_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    kabupaten_kota_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    kecamatan_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    kecamatan_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    desa_kelurahan_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    desa_kelurahan_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    kode_pos: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rt: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rw: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nomor_telepon: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'entitas',
    sequelize,
    timestamps: true,
  }
)

export default Entitas