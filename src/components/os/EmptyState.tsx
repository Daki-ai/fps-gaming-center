import { Info } from "lucide-react";

interface EmptyStateProps {
  message?: string;
}

const EmptyState = ({ message }: EmptyStateProps) => {
  const text = message || "No major update today. Check FPS Academy for today's training focus.";

  return (
    <div className="bg-black/40 border border-white/10 rounded-2xl p-8 backdrop-blur-md text-center">
      <Info className="w-8 h-8 text-cyan-400/60 mx-auto mb-3" />
      <p className="text-sm text-gray-400">{text}</p>
    </div>
  );
};

export default EmptyState;