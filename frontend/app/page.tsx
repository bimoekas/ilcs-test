import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Hotel } from "lucide-react";
import Image from "next/image";

export default function Home() {
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
              <Hotel width={80} height={80} className="text-primary" />
            </div>
            <Label>Transportasi</Label>
          </div>
          <div className="space-y-2 flex flex-col items-center">
            <div className="py-4 px-1 bg-primary/5 rounded-full">
              <Hotel width={80} height={80} className="text-primary" />
            </div>
            <Label>Dokumen</Label>
          </div>
          <div className="space-y-2 flex flex-col items-center">
            <div className="py-4 px-1 bg-primary/5 rounded-full">
              <Hotel width={80} height={80} className="text-primary" />
            </div>
            <Label>Komoditi</Label>
          </div>
          <div className="space-y-2 flex flex-col items-center">
            <div className="py-4 px-1 bg-primary/5 rounded-full">
              <Hotel width={80} height={80} className="text-primary" />
            </div>
            <Label>Layanan</Label>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <Label className="text-primary text-xl font-semibold">
          Data Pemberitahuan
        </Label>
        <Tabs defaultValue="account" className="">
          <TabsList className="grid w-fit grid-cols-3">
            <TabsTrigger value="utama">Data Utama</TabsTrigger>
            <TabsTrigger value="entitas">Data Entitas</TabsTrigger>
            <TabsTrigger value="pungutan">Data Pungutan</TabsTrigger>
          </TabsList>
          <TabsContent value="utama">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                  Make changes to your account here. Click save when you're
                  done.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="Pedro Duarte" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue="@peduarte" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="entitas">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you'll be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="pungutan">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you'll be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </Card>
  );
}
