"use client";

import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

interface InfiniteScrollProps {
  onLoadMore: () => void;
  hasMore: boolean;
  isLoading: boolean;
  children: React.ReactNode;
  threshold?: number;
}

const InfiniteScroll = ({
  onLoadMore,
  hasMore,
  isLoading,
  children,
  threshold = 0.5,
}: InfiniteScrollProps) => {
  const hasTriggered = useRef(false);

  const { ref: inViewRef, inView } = useInView({
    threshold,
    rootMargin: "100px",
  });

  useEffect(() => {
    // reset trigger flag when loading completes
    if (!isLoading) {
      hasTriggered.current = false;
    }
  }, [isLoading]);

  useEffect(() => {
    // only trigger if in view, has more items, not loading, and hasn't triggered yet
    if (inView && hasMore && !isLoading && !hasTriggered.current) {
      hasTriggered.current = true;
      onLoadMore();
    }
  }, [inView, hasMore, isLoading, onLoadMore]);

  return (
    <div>
      {children}
      {/* sentinel element for intersection observer */}
      <div
        ref={inViewRef}
        className="h-4"
        aria-hidden="true"
        data-testid="infinite-scroll-sentinel"
      />
    </div>
  );
};
export { InfiniteScroll };
