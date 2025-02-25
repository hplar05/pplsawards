import Image from "next/image";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Popup({ isOpen, onClose }: PopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg relative max-w-md w-full">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
        <Image
          src="/popup.jpg"
          alt="Welcome to Philippine Public Service Leadership Awards"
          width={600}
          height={600}
          className="w-full h-full rounded-md "
        />
      </div>
    </div>
  );
}
