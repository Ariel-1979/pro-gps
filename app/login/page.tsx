"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { X } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Basic validation
    if (!email || !password) {
      setError("Por favor, complete todos los campos.");
      setIsLoading(false);
      return;
    }

    // Here you would typically make an API call to your authentication service
    try {
      // Simulating an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // For demonstration purposes, we'll just log the credentials
      console.log("Login attempt with:", { email, password });

      // Reset form and show success (you'd typically redirect or update app state here)
      setEmail("");
      setPassword("");
      alert("Inicio de sesión exitoso!");
    } catch (err) {
      setError("Error al iniciar sesión. Por favor, intente nuevamente.");
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto border-2 border-[#fffd70] dark:border-[#fffd70]">
      <CardHeader>
        <CardTitle className="text-[#fffd70] dark:text-[#fffd70] text-center text-2xl">
          Iniciar Sesión
        </CardTitle>
        <CardDescription className="text-center text-white">
          Ingrese sus credenciales para acceder a su cuenta.
        </CardDescription>
      </CardHeader>
      <Separator className="mb-6 text-white" />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                id="email"
                type="email"
                placeholder="nombre@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          {error && (
            <Alert variant="destructive" className="mt-4">
              <AlertDescription className="flex items-center">
                <X className="h-4 w-4 mr-2" />
                {error}
              </AlertDescription>
            </Alert>
          )}
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          className="border-[#fffd70] text-[#fffd70] hover:bg-[#fffd70] hover:text-black"
        >
          Cancelar
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={isLoading}
          className="bg-[#fffd70] hover:bg-[#e6e460] text-black"
        >
          {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
        </Button>
      </CardFooter>
    </Card>
  );
}
