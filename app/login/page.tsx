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
    <main className="bg-black flex-grow flex items-center justify-center bg-login">
      <div className="flex flex-col items-center justify-center max-w-screen-md ">
        <Card className="min-w-[350px] border-2  border-[--principal] bg-black">
          <CardHeader>
            <CardTitle className="text-[--principal] text-center text-2xl">
              Iniciar Sesión
            </CardTitle>
            <CardDescription className="text-center text-white">
              Ingrese su usuario y contraseña
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email" className="text-[--principal]">
                    Usuario
                  </Label>
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
                  <Label htmlFor="password" className="text-[--principal]">
                    Contraseña
                  </Label>
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
              className="bg-[#fffd70] hover:bg-[#e6e460] text-black"
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
      </div>
    </main>
  );
}
