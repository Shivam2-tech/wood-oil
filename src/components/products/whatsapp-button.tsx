"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/constants";

interface WhatsAppButtonProps {
  message: string;
  label?: string;
  className?: string;
  size?: "default" | "sm" | "lg";
}

export function WhatsAppButton({
  message,
  label = "Buy on WhatsApp",
  className,
  size = "default",
}: WhatsAppButtonProps) {
  return (
    <Button
      variant="whatsapp"
      size={size}
      className={className}
      asChild
    >
      <a
        href={buildWhatsAppUrl(message)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle className="h-4 w-4" />
        {label}
      </a>
    </Button>
  );
}
