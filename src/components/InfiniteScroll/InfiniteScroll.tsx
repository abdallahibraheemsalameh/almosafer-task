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
  const prevInView = useRef(false);

  const { ref: inViewRef, inView } = useInView({
    threshold,
    rootMargin: INTERSECTION_ROOT_MARGIN,
  });

  useEffect(() => {
    if (!isLoading) {
      hasTriggered.current = false;
    }
  }, [isLoading]);

  useEffect(() => {
    hasTriggered.current = false;
    // set prevInView to current inView to prevent immediate triggering if already scrolled to bottom
    prevInView.current = inView;
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only want to run this effect when onLoadMore changes
  }, [onLoadMore]);

  useEffect(() => {
    const justCameIntoView = inView && !prevInView.current;
    prevInView.current = inView;

    if (justCameIntoView && hasMore && !isLoading && !hasTriggered.current) {
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
