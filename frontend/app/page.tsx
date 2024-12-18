"use client";

import {
  ClipboardPenLine,
  HandPlatter,
  Hotel,
  Luggage,
  Plane,
} from "lucide-react";
import { useState } from "react";

import EntitasForm from "@/components/EntitasForm";
import PungutanForm from "@/components/PungutanForm";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UtamaForm from "@/components/UtamaForm";

export default function Home() {
  const [tabValue, setTabValue] = useState<string>("utama");

  const handleNext = () => {
    if (tabValue === "utama") {
      return setTabValue("entitas");
    }

    if (tabValue === "entitas") {
      return setTabValue("pungutan");
    }
  };

  const handlePrevious = () => {
    if (tabValue === "entitas") {
      return setTabValue("utama");
    }

    if (tabValue === "pungutan") {
      return setTabValue("entitas");
    }
  };

  return (
    <Card className="p-8">
      <section>
        <div className="flex flex-row items-center justify-center space-x-10">
          <div className="space-y-2 flex flex-col items-center">
            <div className="py-4 px-1 bg-primary/5 rounded-full">
              <Hotel width={80} height={80} className="text-primary" />
            </div>
            <Label>Pemberitahuan</Label>
          </div>
          <div className="space-y-2 flex flex-col items-center">
            <div className="py-4 px-1 bg-primary/5 rounded-full">
              <Plane width={80} height={80} className="text-primary" />
            </div>
            <Label>Transportasi</Label>
          </div>
          <div className="space-y-2 flex flex-col items-center">
            <div className="py-4 px-1 bg-primary/5 rounded-full">
              <ClipboardPenLine
                width={80}
                height={80}
                className="text-primary"
              />
            </div>
            <Label>Dokumen</Label>
          </div>
          <div className="space-y-2 flex flex-col items-center">
            <div className="py-4 px-1 bg-primary/5 rounded-full">
              <Luggage width={80} height={80} className="text-primary" />
            </div>
            <Label>Komoditi</Label>
          </div>
          <div className="space-y-2 flex flex-col items-center">
            <div className="py-4 px-1 bg-primary/5 rounded-full">
              <HandPlatter width={80} height={80} className="text-primary" />
            </div>
            <Label>Layanan</Label>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <Label className="text-primary text-xl font-semibold">
          Data Pemberitahuan
        </Label>
        <Tabs value={tabValue} className="mt-8">
          <TabsList className="grid w-fit grid-cols-3">
            <TabsTrigger value="utama" onClick={() => setTabValue("utama")}>
              Data Utama
            </TabsTrigger>
            <TabsTrigger value="entitas" onClick={() => setTabValue("entitas")}>
              Data Entitas
            </TabsTrigger>
            <TabsTrigger
              value="pungutan"
              onClick={() => setTabValue("pungutan")}
            >
              Data Pungutan
            </TabsTrigger>
          </TabsList>
          <TabsContent value="utama">
            <UtamaForm
              hasNext={true}
              hasPrevious={false}
              handleNext={handleNext}
            />
          </TabsContent>
          <TabsContent value="entitas">
            <EntitasForm
              hasNext={true}
              hasPrevious={true}
              handleNext={handleNext}
              handlePrevious={handlePrevious}
            />
          </TabsContent>
          <TabsContent value="pungutan">
            <PungutanForm
              hasNext={false}
              hasPrevious={true}
              handlePrevious={handlePrevious}
            />
          </TabsContent>
        </Tabs>
      </section>
    </Card>
  );
}
