import { Button } from "@/components/ui/button";
import Link from "next/link";

type TSectorCardProps = {
  sector: {
    title: string;
    description: string;
  };
};

const SectorCard = ({ sector }: TSectorCardProps) => {
  const { title, description } = sector;

  return (
    <div className="flex flex-col items-center justify-start gap-3 rounded-xl bg-white p-5">
      <h1 className="text-center font-bold">{title}</h1>
      <p className="text-center text-sm">{description}</p>

      <div className="mt-auto flex items-center justify-center">
        <Link href="#">
          <Button
            className="border-primary-bridge text-primary-bridge"
            variant="outline"
          >
            View More
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SectorCard;
