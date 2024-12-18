import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { UtamaFormValues } from "@/types/form";

import { Autocomplete } from "./Autocomplete";
import { DatePicker } from "./DatePicker";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import axios from "axios";

interface FormProps {
  hasPrevious: boolean;
  hasNext: boolean;
  handleNext: () => void;
}

const UtamaForm = ({ hasNext, hasPrevious, handleNext }: FormProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<UtamaFormValues>({
    defaultValues: {
      header_id: "b83d4415-59fa-5f71-bf61-05e587a244b6",
      nomor_pengajuan: "3ec0ffb9-3571-5f49-a87a-44bfefa278d1",
      nomor_pendaftaran: "440e1430-8bc3-5205-b717-4ffea6af8d6a",
      tanggal_pengajuan: new Date(),
      tanggal_pendaftaran: new Date(),
      kantor_pabean: "KPU Bea Cukai",
      kode_skep_fasilitas: "SK-FA-001",
      jenis_pib: "Tambah",
      jenis_impor: "Impor Untuk Dipakai",
      cara_pembayaran: "Transfer Bank",
      transaksi: "B2B",
    },
  });

  const onSubmit = async (data: UtamaFormValues) => {
    try {
      setIsLoading(true);

      const res = await axios.post(`http://localhost:3001/api/utama`, data, {
        headers: {
          "content-type": "application/json",
        },
      });

      if (res.status === 200) {
        handleNext();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const kantorPabean = ["Ethan Salazar", "Isabella Briggs", "Charles Drake"];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Utama</CardTitle>
        <CardDescription>Form tambah data utama.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-4 gap-4">
              <div className="space-y-1">
                <FormField
                  control={form.control}
                  name="nomor_pengajuan"
                  render={({ field: { onChange, value } }) => (
                    <FormItem>
                      <FormLabel>Nomor Pengajuan</FormLabel>
                      <FormControl>
                        <Input
                          id="nomor_pengajuan"
                          type="text"
                          placeholder="Masukkan nomor pengajuan"
                          value={value}
                          onChange={(e) => onChange(e.target.value)}
                          disabled
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-1">
                <FormField
                  control={form.control}
                  name="tanggal_pengajuan"
                  render={({ field: { onChange, value } }) => (
                    <FormItem>
                      <FormLabel>Tanggal Pengajuan</FormLabel>
                      <FormControl>
                        <DatePicker
                          placeholder="Pilih Tanggal"
                          selectedDate={value}
                          formatDate="dd MMMM yyyy"
                          onSelect={(e) => onChange(e)}
                          disabled={true}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-1">
                <FormField
                  control={form.control}
                  name="nomor_pendaftaran"
                  render={({ field: { onChange, value } }) => (
                    <FormItem>
                      <FormLabel>Nomor Pendaftaran</FormLabel>
                      <FormControl>
                        <Input
                          id="nomor_pendaftaran"
                          type="text"
                          placeholder="Masukkan nomor pendaftaran"
                          value={value}
                          onChange={(e) => onChange(e.target.value)}
                          disabled
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-1">
                <FormField
                  control={form.control}
                  name="tanggal_pendaftaran"
                  render={({ field: { onChange, value } }) => (
                    <FormItem>
                      <FormLabel>Tanggal Pendaftaran</FormLabel>
                      <FormControl>
                        <DatePicker
                          placeholder="Pilih Tanggal"
                          selectedDate={value}
                          formatDate="dd MMMM yyyy"
                          onSelect={(e) => onChange(e)}
                          disabled={true}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-1">
                <FormField
                  control={form.control}
                  name="kantor_pabean"
                  render={({ field: { onChange, value } }) => (
                    <FormItem>
                      <FormLabel>Kantor Pabean</FormLabel>
                      <FormControl>
                        <Autocomplete
                          options={kantorPabean}
                          value={value}
                          onSelect={(e) => onChange(e)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-1">
                <FormField
                  control={form.control}
                  name="kode_skep_fasilitas"
                  render={({ field: { onChange, value } }) => (
                    <FormItem>
                      <FormLabel>SKEP Fasilitas</FormLabel>
                      <FormControl>
                        <Autocomplete
                          options={[]}
                          value={value}
                          onSelect={(e) => onChange(e)}
                          disabled={true}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-1">
                <FormField
                  control={form.control}
                  name="jenis_pib"
                  render={({ field: { onChange, value } }) => (
                    <FormItem>
                      <FormLabel>Jenis PIB</FormLabel>
                      <FormControl>
                        <Autocomplete
                          options={[]}
                          value={value}
                          onSelect={(e) => onChange(e)}
                          disabled={true}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-1">
                <FormField
                  control={form.control}
                  name="jenis_impor"
                  render={({ field: { onChange, value } }) => (
                    <FormItem>
                      <FormLabel>Jenis Impor</FormLabel>
                      <FormControl>
                        <Autocomplete
                          options={[]}
                          value={value}
                          onSelect={(e) => onChange(e)}
                          disabled={true}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-1">
                <FormField
                  control={form.control}
                  name="cara_pembayaran"
                  render={({ field: { onChange, value } }) => (
                    <FormItem>
                      <FormLabel>Cara Pembayaran</FormLabel>
                      <FormControl>
                        <Autocomplete
                          options={[]}
                          value={value}
                          onSelect={(e) => onChange(e)}
                          disabled={true}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-1">
                <FormField
                  control={form.control}
                  name="transaksi"
                  render={({ field: { onChange, value } }) => (
                    <FormItem>
                      <FormLabel>Transaksi</FormLabel>
                      <FormControl>
                        <Autocomplete
                          options={[]}
                          value={value}
                          onSelect={(e) => onChange(e)}
                          disabled={true}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="mt-8 space-x-2 w-full items-center justify-between flex flex-row">
              <Button
                className="px-10"
                type="button"
                variant="outline"
                disabled={!hasPrevious}
              >
                <ChevronLeft />
                Sebelumnya
              </Button>
              <Button
                className="px-10"
                variant="outline"
                type="submit"
                disabled={!hasNext}
              >
                Selanjutnya
                <ChevronRight />
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default UtamaForm;
