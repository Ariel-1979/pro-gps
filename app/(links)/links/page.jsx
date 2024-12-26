/* eslint-disable @next/next/no-img-element */
import {
  ExternalLink,
  MapPin,
  Mail,
  MessageCircle,
  Instagram,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-800 to-gray-900 text-white px-4 py-8">
      <div className="max-w-md mx-auto">
        {/* Header with Modern Effect */}
        <div className="relative mb-10 text-center">
          <div className="absolute inset-0 blur-3xl bg-blue-500/30 rounded-full" />
          <div className="relative">
            <img
              src="/ProGPS_Logo.png"
              alt="Pro GPS Logo"
              className="mx-auto h-[200px] w-[400px]"
            />
            <p className="text-2xl text-[--principal] font-medium mt-3">
              {process.env.NEXT_PUBLIC_LOGO_TEXT}
            </p>
          </div>
        </div>

        {/* Links with Modern Design */}
        <div className="space-y-4">
          {[
            {
              href: "https://progps.com.ar/",
              icon: <MapPin className="w-5 h-5" />,
              label: "Sitio Web",
            },
            {
              href: process.env.NEXT_PUBLIC_INSTAGRAM,
              icon: <Instagram className="w-5 h-5" />,
              label: "Instagram",
            },
            {
              href: process.env.NEXT_PUBLIC_PHONE_NUMBER,
              icon: <MessageCircle className="w-5 h-5" />,
              label: "WhatsApp - Comercial",
            },
            {
              href: process.env.NEXT_PUBLIC_EMAIL_COMERCIAL,
              icon: <Mail className="w-5 h-5" />,
              label: "Email - Comercial",
            },
            {
              href: process.env.NEXT_PUBLIC_PHONE_SOS,
              icon: <MessageCircle className="w-5 h-5" />,
              label: "WhatsApp - Asistencia Técnica",
            },
            {
              href: process.env.NEXT_PUBLIC_EMAIL_SOS,
              icon: <Mail className="w-5 h-5" />,
              label: "Email - Asistencia Técnica",
            },
          ].map((link, index) => (
            <Card
              key={index}
              className="overflow-hidden backdrop-blur-sm bg-white/10 rounded-3xl"
            >
              <CardContent className="p-0">
                <Link href={link.href}>
                  <Button
                    variant="ghost"
                    className={`w-full h-full py-3 px-6 flex items-center justify-between text-white hover:text-white hover:bg-white/20 transition-all duration-300 ${link.color}`}
                  >
                    <span className="rounded-lg">{link.icon}</span>
                    <span className="font-medium text-xl text-[--principal]">
                      {link.label}
                    </span>
                    <ExternalLink className="w-5 h-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer with Modern Touch */}
        <footer className="mt-12 text-center">
          <p className="text-sm text-white font-medium">
            &copy; {new Date().getFullYear()} ProGPS
            <span className="block text-xs text-white mt-1">
              Tecnología de última generación
            </span>
          </p>
        </footer>
      </div>
    </div>
  );
}
