import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from "../config/database"

interface PungutanAttributes {
  id: string;
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

interface PungutanCreationAttributes extends Optional<PungutanAttributes, "id"> { }

class Pungutan
  extends Model<PungutanAttributes, PungutanCreationAttributes>
  implements Pungutan {
  public id!: string;
  public header_id!: string;
  public incoterms!: string;
  public valuta!: string;
  public kurs!: number;
  public nilai!: number;
  public biaya_tambahan!: number;
  public biaya_pengurangan!: number;
  public voluntary_declaration!: number;
  public nilai_fob!: number;
  public bayar_asuransi_di!: string;
  public nilai_asuransi!: number;
  public freight!: number;
  public cif!: number
  public cif_rp!: number;
  public bruto!: number;
  public netto!: number;
  public flag_kontainer!: string
}

Pungutan.init(
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
    incoterms: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    valuta: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    kurs: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    nilai: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    biaya_tambahan: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    biaya_pengurangan: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    voluntary_declaration: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    nilai_fob: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    bayar_asuransi_di: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nilai_asuransi: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    freight: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    cif: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    cif_rp: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    bruto: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    netto: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    flag_kontainer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
  tableName: 'pungutan',
  sequelize,
  timestamps: true,
}
)

export default Pungutan