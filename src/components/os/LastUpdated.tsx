import { Clock } from "lucide-react";

interface LastUpdatedProps {
  date: string;
  source?: string;
}

const LastUpdated = ({ date, source }: LastUpdatedProps) => {
  const formatted = new Date(date).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });

  return (
    <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-gray-500">
      <Clock className="w-3 h-3" />
      <span>Updated: {formatted}</span>
      {source && (
        <>
          <span className="text-gray-700">|</span>
          <span className="text-gray-500">Source: {source}</span>
        </>
      )}
    </div>
  );
};

export default LastUpdated;