"use client";

import { memo, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import type { GitHubRepository } from "@/types";
import {
  useRepositoryLanguages,
  useRepositoryForks,
} from "@/hooks/useRepositoryDetails";
import { LanguageBadgeList } from "./LanguageBadge";
import { ForkAvatars } from "./ForkAvatars";
import { truncateString, formatNumber, formatDate } from "@/utils";

interface RepositoryCardProps {
  repository: GitHubRepository;
}

const RepositoryCard = memo(function RepositoryCard({
  repository,
}: RepositoryCardProps) {
  const [owner, repo] = repository.full_name.split("/");

  // only fetch data when card is visible
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "100px",
  });

  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  // track if card has ever been visible
  if (inView && !hasBeenVisible) {
    setHasBeenVisible(true);
  }

  // defer API calls until card is visible
  const { data: languages, isLoading: languagesLoading } =
    useRepositoryLanguages({
      owner,
      repo,
      enabled: hasBeenVisible,
    });

  const { data: forks, isLoading: forksLoading } = useRepositoryForks({
    owner,
    repo,
    enabled: hasBeenVisible && repository.forks_count > 0,
  });

  return (
    <article
      ref={ref}
      className="
        group relative overflow-hidden rounded-2xl
        bg-gradient-to-br from-slate-800/50 to-slate-900/50
        border border-slate-700/50 backdrop-blur-sm
        transition-all duration-300 ease-out
        hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/5
        hover:-translate-y-1
      "
      data-testid="repository-card"
    >
      {/* gradient overlay on hover */}
      <div
        className="
        absolute inset-0 opacity-0 group-hover:opacity-100
        bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5
        transition-opacity duration-300
      "
      />

      <div className="relative p-6">
        {/* header */}
        <div className="flex items-start gap-4 mb-4">
          {/* owner avatar */}
          <a
            href={repository.owner.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0"
          >
            <Image
              src={repository.owner.avatar_url}
              alt={`${repository.owner.login}'s avatar`}
              width={40}
              height={40}
              className="
                rounded-lg ring-2 ring-slate-700
                group-hover:ring-emerald-500/30 transition-all duration-300
              "
            />
          </a>

          {/* repo info */}
          <div className="flex-1 min-w-0">
            <a
              href={repository.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                block text-lg font-semibold text-white truncate
                hover:text-emerald-400 transition-colors duration-200
              "
            >
              <span className="text-slate-500 font-normal">{owner}/</span>
              {repo}
            </a>
            {repository.description && (
              <p className="mt-1 text-sm text-slate-400 ">
                {truncateString(repository.description)}
              </p>
            )}
          </div>

          {/* star count badge */}
          <div
            className="
            flex items-center gap-1.5 px-3 py-1.5 rounded-full
            bg-amber-500/10 text-amber-400 border border-amber-500/20
          "
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
            </svg>
            <span className="text-sm font-semibold">
              {formatNumber(repository.stargazers_count)}
            </span>
          </div>
        </div>

        {/* languages / file types */}
        <div className="mb-4 min-h-[28px]">
          {!hasBeenVisible || languagesLoading ? (
            <div className="flex gap-1.5">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-6 w-16 rounded-full bg-slate-700/50 animate-pulse"
                />
              ))}
            </div>
          ) : languages && Object.keys(languages).length > 0 ? (
            <LanguageBadgeList languages={languages} maxDisplay={5} />
          ) : repository.language ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs rounded-full bg-slate-800 text-slate-400 border border-slate-700/50">
              {repository.language}
            </span>
          ) : null}
        </div>

        {/* stats row */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-4">
          <div className="flex items-center gap-1.5" title="Forks">
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              fill="none"
              stroke="currentColor"
              data-view-component="true"
            >
              <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
            </svg>
            <span>{formatNumber(repository.forks_count)}</span>
          </div>
          <div className="flex items-center gap-1.5" title="Open Issues">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{formatNumber(repository.open_issues_count)}</span>
          </div>
          {repository.license && (
            <div className="flex items-center gap-1.5" title="License">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span>
                {repository.license.spdx_id || repository.license.key}
              </span>
            </div>
          )}
          <div className="flex items-center gap-1.5" title="Last updated">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Updated {formatDate(repository.updated_at)}</span>
          </div>
        </div>

        {/* recent forks */}
        {repository.forks_count > 0 && (
          <div className="pt-4 border-t border-slate-700/50">
            <ForkAvatars
              forks={forks || []}
              isLoading={!hasBeenVisible || forksLoading}
            />
          </div>
        )}

        {/* topics */}
        {repository.topics && repository.topics.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {repository.topics.slice(0, 5).map((topic) => (
              <a
                key={topic}
                href={`https://github.com/topics/${topic}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-2.5 py-0.5 text-xs rounded-full
                  bg-emerald-500/10 text-emerald-400 border border-emerald-500/20
                  hover:bg-emerald-500/20 transition-colors duration-200
                "
              >
                {topic}
              </a>
            ))}
            {repository.topics.length > 5 && (
              <span className="px-2.5 py-0.5 text-xs text-slate-500">
                +{repository.topics.length - 5} more
              </span>
            )}
          </div>
        )}
      </div>
    </article>
  );
});
export { RepositoryCard };
