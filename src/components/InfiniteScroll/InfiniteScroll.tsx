"use client";

import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Box from "@mui/material/Box";
import { INTERSECTION_ROOT_MARGIN } from "@/lib/constants";
import { styles } from "./InfiniteScroll.styles";

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
    rootMargin: INTERSECTION_ROOT_MARGIN,
  });

  useEffect(() => {
    if (!isLoading) {
      hasTriggered.current = false;
    }
  }, [isLoading]);

  // reset the trigger when onLoadMore or hasMore changes (e.g., when search type changes)
  useEffect(() => {
    hasTriggered.current = false;
  }, [onLoadMore, hasMore]);

  useEffect(() => {
    if (inView && hasMore && !isLoading && !hasTriggered.current) {
      hasTriggered.current = true;
      onLoadMore();
    }
  }, [inView, hasMore, isLoading, onLoadMore]);

  return (
    <Box>
      {children}
      <Box
        ref={inViewRef}
        sx={styles.sentinel}
        aria-hidden="true"
        data-testid="infinite-scroll-sentinel"
      />
    </Box>
  );
};

export { InfiniteScroll };
