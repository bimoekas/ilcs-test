import { ChevronLeft, ChevronRight, Equal, Minus, Plus } from "lucide-react";
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
  handlePrevious: () => void;
}

const PungutanForm = ({ hasNext, hasPrevious, handlePrevious }: FormProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pungutan</CardTitle>
        <CardDescription>Form tambah data pungutan.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-1">
            <Label htmlFor="incoterms">Incoterms</Label>
            <Input id="incoterms" placeholder="Masukkan incoterms" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="valuta">Valuta</Label>
            <Input id="valuta" placeholder="Masukkan valuta" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="kurs">Kurs</Label>
            <Input id="kurs" placeholder="Masukkan kurs" />
          </div>
        </div>
        <div className="flex flex-row h-full items-center justify-between space-x-4 align-middle">
          <div className="space-y-1 w-full">
            <Label htmlFor="nilai">Nilai</Label>
            <Input id="nilai" placeholder="Masukkan nilai" />
          </div>
          <div className="h-full relative top-3.5">
            <Plus className="w-5 h-5" />
          </div>
          <div className="space-y-1 w-full">
            <Label htmlFor="biaya_tambahan">Biaya Tambahan</Label>
            <Input id="biaya_tambahan" placeholder="Masukkan biaya tambahan" />
          </div>
          <div className="h-full relative top-3.5">
            <Minus className="w-5 h-5" />
          </div>
          <div className="space-y-1 w-full">
            <Label htmlFor="biaya_pengurang">Biaya Pengurang</Label>
            <Input
              id="biaya_pengurang"
              placeholder="Masukkan biaya pengurang"
            />
          </div>
          <div className="h-full relative top-3.5">
            <Plus className="w-5 h-5" />
          </div>
          <div className="space-y-1 w-full">
            <Label htmlFor="voluntary_declaration">Voluntary Declaration</Label>
            <Input
              id="voluntary_declaration"
              placeholder="Masukkan voluntary declaration"
            />
          </div>
          <div className="h-full relative top-3.5">
            <Equal className="w-5 h-5" />
          </div>
          <div className="space-y-1 w-full">
            <Label htmlFor="nilai_fob">Nilai FOB</Label>
            <Input id="nilai_fob" placeholder="Masukkan nilai FOB" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-1 w-full">
            <Label htmlFor="bayar_asuransi_di">Asuransi Bayar di</Label>
            <Input
              id="bayar_asuransi_di"
              placeholder="Masukkan lokasi pembayaran asuransi"
            />
          </div>
          <div className="space-y-1 w-full">
            <Label htmlFor="asuransi">Asuransi</Label>
            <Input id="asuransi" placeholder="Masukkan asuransi" />
          </div>
          <div className="space-y-1 w-full">
            <Label htmlFor="freight">Freight</Label>
            <Input id="freight" placeholder="Masukkan freight" />
          </div>
        </div>
        <div className="grid grid-cols-5 gap-4">
          <div className="space-y-1 w-full">
            <Label htmlFor="cif">CIF</Label>
            <Input id="cif" placeholder="Masukkan CIF" />
          </div>
          <div className="space-y-1 w-full">
            <Label htmlFor="cif_rp">CIF Rp</Label>
            <Input id="cif_rp" placeholder="Masukkan nominal CIF" />
          </div>
          <div className="space-y-1 w-full">
            <Label htmlFor="bruto">Bruto</Label>
            <Input id="bruto" placeholder="Masukkan bruto" />
          </div>
          <div className="space-y-1 w-full">
            <Label htmlFor="netto">Netto</Label>
            <Input id="netto" placeholder="Masukkan netto" />
          </div>
          <div className="space-y-1 w-full">
            <Label htmlFor="flag_kontainer">Flag Kontainer</Label>
            <Input id="flag_kontainer" placeholder="Masukkan flag kontainer" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-center justify-center">
        <div className="space-x-2">
          <Button className="px-10 bg-yellow-500">Kelengkapan Data</Button>
          <Button className="px-10">Simpan</Button>
        </div>
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
          <Button className="px-10" variant="outline" disabled={!hasNext}>
            Selanjutnya
            <ChevronRight />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PungutanForm;
