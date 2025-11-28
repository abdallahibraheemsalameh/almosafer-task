"use client";

import Image from "next/image";
import type { GitHubFork } from "@/types";

interface ForkAvatarsProps {
  forks: GitHubFork[];
  isLoading?: boolean;
}

const ForkAvatars = ({ forks, isLoading = false }: ForkAvatarsProps) => {
  if (isLoading) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-xs text-slate-500">Recent forks:</span>
        <div className="flex -space-x-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-7 h-7 rounded-full bg-slate-700 animate-pulse border-2 border-slate-900"
            />
          ))}
        </div>
      </div>
    );
  }

  if (!forks || forks.length === 0) {
    return null;
  }

  return (
    <div className="flex items-center gap-2" data-testid="fork-avatars">
      <span className="text-xs text-slate-500">Recent forks:</span>
      <div className="flex -space-x-2">
        {forks.map((fork) => (
          <a
            key={fork.id}
            href={fork.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              relative group/avatar transition-transform duration-200
              hover:z-10 hover:scale-110
            "
            title={`${fork.owner.login}'s fork`}
          >
            <Image
              src={fork.owner.avatar_url}
              alt={`${fork.owner.login}'s avatar`}
              width={28}
              height={28}
              className="
                rounded-full border-2 border-slate-900
                ring-0 ring-emerald-500/0 transition-all duration-200
                group-hover/avatar:ring-2 group-hover/avatar:ring-emerald-500/50
              "
            />
            {/* tooltip */}
            <span
              className="
                absolute left-full top-1/2 -translate-y-1/2 ml-2
                px-2 py-1 text-xs text-white bg-slate-800 rounded-md
                opacity-0 invisible group-hover/avatar:opacity-100 group-hover/avatar:visible
                transition-all duration-200 whitespace-nowrap z-20
                border border-slate-700
              "
            >
              {fork.owner.login}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};
export { ForkAvatars };
