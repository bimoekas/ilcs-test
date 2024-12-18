import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface FormProps {
  hasPrevious: boolean;
  hasNext: boolean;
  handleNext: () => void;
  handlePrevious: () => void;
}

const EntitasForm = ({
  hasPrevious,
  hasNext,
  handleNext,
  handlePrevious,
}: FormProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Entitas</CardTitle>
        <CardDescription>Form tambah data entitas.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-1">
            <Label htmlFor="jenis_identitas">Jenis Identitas</Label>
            <Input
              id="jenis_identitas"
              placeholder="Masukkan jenis identitas"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="nib">NIB</Label>
            <Input id="nib" placeholder="Masukkan NIB" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="nomor_identitas">Nomor Identitas</Label>
            <Input
              id="nomor_identitas"
              placeholder="Masukkan nomor identitas"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-1">
            <Label htmlFor="nik">NIK</Label>
            <Input id="nik" placeholder="Masukkan NIK" />
          </div>
          <div className="space-y-1 col-span-2">
            <Label htmlFor="nama_perusahaan">Nama Perusahaan</Label>
            <Input
              id="nama_perusahaan"
              placeholder="Masukkan nama perusahaan"
            />
          </div>
        </div>
        <div className="grid grid-cols-5 gap-4">
          <div className="space-y-1">
            <Label htmlFor="provinsi">Provinsi</Label>
            <Input id="provinsi" placeholder="Masukkan provinsi" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="kabupaten_kota">Kabupaten/Kota</Label>
            <Input id="kabupaten_kota" placeholder="Masukkan kabupaten/kota" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="kecamatan">Kecamatan</Label>
            <Input id="kecamatan" placeholder="Masukkan kecamatan" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="kode_pos">Kode Pos</Label>
            <Input id="kode_pos" placeholder="Masukkan kode pos" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="rt_rw">RT/RW</Label>
            <Input id="rt_rw" placeholder="Masukkan rt/rw" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-1">
            <Label htmlFor="nomor_telepon">Nomor Telepon</Label>
            <Input id="nomor_telepon" placeholder="Masukkan nomor telepon" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Masukkan email" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="status">Status</Label>
            <Input id="status" placeholder="Masukkan status" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-center justify-center">
        <div className="mt-8 space-x-2 w-full items-center justify-between flex flex-row">
          <Button
            className="px-10"
            variant="outline"
            onClick={handlePrevious}
            disabled={!hasPrevious}
          >
            <ChevronLeft />
            Sebelumnya
          </Button>
          <Button
            className="px-10"
            variant="outline"
            onClick={handleNext}
            disabled={!hasNext}
          >
            Selanjutnya
            <ChevronRight />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default EntitasForm;
