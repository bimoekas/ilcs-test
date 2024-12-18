import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from "../config/database"

interface UtamaAttributes {
  id: string;
  header_id: string;
  nomor_pengajuan: string;
  tanggal_pengajuan: Date;
  nomor_pendaftaran: string;
  tanggal_pendaftaran: string;
  kantor_pabean: string;
  kode_skep_fasilitas: string;
  jenis_pib: string;
  jenis_impor: string;
  cara_pembayaran: string;
  transaksi: string;
}

interface UtamaCreationAttributes extends Optional<UtamaAttributes, "id"> { }

class Utama
  extends Model<UtamaAttributes, UtamaCreationAttributes>
  implements Utama {
  public id!: string;
  public header_id!: string;
  public nomor_pengajuan!: string;
  public tanggal_pengajuan!: Date;
  public nomor_pendaftaran!: string;
  public tanggal_pendaftaran!: string;
  public kantor_pabean!: string;
  public kode_skep_fasilitas!: string;
  public jenis_pib!: string;
  public jenis_impor!: string;
  public cara_pembayaran!: string;
  public transaksi!: string;
}

Utama.init(
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
    nomor_pengajuan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tanggal_pengajuan: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    nomor_pendaftaran: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tanggal_pendaftaran: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    kantor_pabean: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    kode_skep_fasilitas: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jenis_pib: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jenis_impor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cara_pembayaran: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    transaksi: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
  tableName: 'utama',
  sequelize,
  timestamps: true,
}
)

export default Utama