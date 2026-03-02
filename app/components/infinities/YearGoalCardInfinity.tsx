"use client";
import { useEffect, useState, useCallback, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { GolListAction, YearGol } from "@/app/actions/gols";
import YearGoalCard from "../YearGoalCard";

interface Props {
  postsi: YearGol[];
  nextPage: string | null;
}

const YearGoalCardInfinity = ({ postsi, nextPage }: Props) => {
  const [posts, setPosts] = useState<YearGol[]>(postsi);
  const [currentNextPage, setCurrentNextPage] = useState(nextPage);
  const [isLoading, setIsLoading] = useState(false);

  const loadingRef = useRef(false);

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "100px",
  });

  const loadMorePosts = useCallback(async () => {
    if (!currentNextPage || isLoading || loadingRef.current) return;

    setIsLoading(true);
    loadingRef.current = true;

    try {
      console.log("Fetching URL:", currentNextPage);
      const response = await GolListAction(currentNextPage);

      if (response?.data) {
        const newPosts = response.data.results || [];
        console.log(newPosts);
        const nextUrl = response.data.next || null;

        console.log("Received Next URL:", nextUrl);

        setPosts((prev) => [...prev, ...newPosts]);
        setCurrentNextPage(nextUrl);
      }
    } catch (error) {
      console.error("Error loading posts:", error);
    } finally {
      setIsLoading(false);
      loadingRef.current = false;
    }
  }, [currentNextPage, isLoading]);

  useEffect(() => {
    if (inView && !loadingRef.current) {
      loadMorePosts();
    }
  }, [inView, loadMorePosts]);

  return (
    <>
      <div className="row justify-content-center">
        {posts.map((post, index) => (
          // Using index + id to ensure unique keys if IDs repeat
          <YearGoalCard key={`${post.id}-${index}`} year={post} />
        ))}
      </div>

      {currentNextPage && (
        <div className="row">
          <div className="col-lg-12 text-center">
            {/* This span triggers the load */}
            <div ref={ref} style={{ padding: "20px" }}>
              {isLoading ? (
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Carregando...</span>
                </div>
              ) : (
                <span className="other-link">Ver mais</span>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default YearGoalCardInfinity;
