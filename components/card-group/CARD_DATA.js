import {
  Truck,
  Shield,
  PhoneCall,
  BarChart,
  Bell,
  Database,
} from "lucide-react";
export const ICON_STYLE = "h-10 w-10 text-blue-600";

export const CARDS_DATA = [
  {
    key: "1",
    title: "Rastreo en Tiempo Real",
    description:
      "Sigue tus vehículos en tiempo real con actualizaciones cada 30 segundos.",
    icon: <Truck className={`${ICON_STYLE}`} />,
  },
  {
    key: "2",
    title: "Seguridad Avanzada",
    description:
      "Protege tu flota con alertas de seguridad y geovallas personalizables.",
    icon: <Shield className={`${ICON_STYLE}`} />,
  },
  {
    key: "3",
    title: "Soporte 24/7",
    description:
      "Nuestro equipo de soporte está disponible las 24 horas, los 7 días de la semana.",
    icon: <PhoneCall className={`${ICON_STYLE}`} />,
  },
  {
    key: "4",
    title: "Análisis de Datos",
    description:
      "Reportes detallados y análisis de rendimiento de tu flota vehicular.",
    icon: <BarChart className={`${ICON_STYLE}`} />,
  },
  {
    key: "5",
    title: "Alertas Instantáneas",
    description:
      "Recibe notificaciones inmediatas sobre eventos importantes de tus vehículos.",
    icon: <Bell className={`${ICON_STYLE}`} />,
  },
  {
    key: "6",
    title: "Historial Completo",
    description: "Accede al historial completo de rutas y eventos de tu flota.",
    icon: <Database className={`${ICON_STYLE}`} />,
  },
];
