import React from "react";

interface ChallengeCardProps {
  title: string;
  description: string;
}

export const ChallengeCard: React.FC<ChallengeCardProps> = ({
  title,
  description,
}) => {
  return (
    <div className="retro-card hover:scale-[1.02] transition-transform duration-200 min-w-[300px]">
      <h2 className="text-2xl font-bold mb-3 text-[var(--retro-text)]">
        {title}
      </h2>
      <p className="text-[var(--retro-text)] opacity-80">{description}</p>
    </div>
  );
};

export default ChallengeCard;
