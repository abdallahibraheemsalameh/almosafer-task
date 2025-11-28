"use client";

import { memo } from "react";
import Image from "next/image";
import type { GitHubUser } from "@/types";

interface UserCardProps {
  user: GitHubUser;
}

const UserCard = memo(function UserCard({ user }: UserCardProps) {
  return (
    <article
      className="
        group relative overflow-hidden rounded-2xl
        bg-gradient-to-br from-slate-800/50 to-slate-900/50
        border border-slate-700/50 backdrop-blur-sm
        transition-all duration-300 ease-out
        hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/5
        hover:-translate-y-1
      "
      data-testid="user-card"
    >
      {/* gradient overlay on hover */}
      <div
        className="
        absolute inset-0 opacity-0 group-hover:opacity-100
        bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5
        transition-opacity duration-300
      "
      />

      <div className="relative p-6 flex items-center gap-5">
        {/* avatar */}
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative shrink-0"
        >
          <div
            className="
            relative w-16 h-16 rounded-full overflow-hidden
            ring-2 ring-slate-700 group-hover:ring-emerald-500/50
            transition-all duration-300
          "
          >
            <Image
              src={user.avatar_url}
              alt={`${user.login}'s avatar`}
              fill
              className="object-cover"
              sizes="64px"
            />
          </div>
          {/* online-like indicator */}
          <span
            className="
            absolute -bottom-0.5 -right-0.5 w-4 h-4
            bg-emerald-500 rounded-full border-2 border-slate-900
            opacity-0 group-hover:opacity-100 transition-opacity duration-300
          "
          />
        </a>

        {/* user info */}
        <div className="flex-1 min-w-0">
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              block text-lg font-semibold text-white truncate
              hover:text-emerald-400 transition-colors duration-200
            "
          >
            {user.login}
          </a>
          <span
            className="
            inline-flex items-center gap-1.5 mt-1.5
            px-2.5 py-0.5 text-xs font-medium rounded-full
            bg-slate-800 text-slate-400 border border-slate-700/50
          "
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 16 16">
              {user.type === "Organization" ? (
                <path d="M1.75 16A1.75 1.75 0 010 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 00.25-.25V8.285a.25.25 0 00-.111-.208l-1.055-.703a.749.749 0 11.832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0114.25 16h-3.5a.75.75 0 01-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 01-.75-.75V14h-1v1.25a.75.75 0 01-.75.75h-3z" />
              ) : (
                <path d="M10.561 8.073a6.005 6.005 0 013.432 5.142.75.75 0 11-1.498.07 4.5 4.5 0 00-8.99 0 .75.75 0 01-1.498-.07 6.004 6.004 0 013.431-5.142 3.999 3.999 0 115.123 0zM10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              )}
            </svg>
            {user.type}
          </span>
        </div>

        {/* profile link */}
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center gap-2 px-4 py-2 rounded-xl
            text-sm font-medium text-slate-300
            bg-slate-800/80 border border-slate-700/50
            transition-all duration-200
            hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/30
            focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500
          "
        >
          <span className="hidden sm:inline">View Profile</span>
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
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </article>
  );
});
export { UserCard };
