"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  Association,
  AssociationsListAction,
} from "../../actions/associations";
import AssociationCard from "./../AssociationCard";

interface Props {
  associations: Association[];
  nextPage: string | null;
}

const AssociationCardsInfinity = ({
  associations: initialAssociations,
  nextPage,
}: Props) => {
  const [associations, setAssociations] =
    useState<Association[]>(initialAssociations);
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
      const response = await AssociationsListAction(currentNextPage);

      if (response?.data) {
        const newPosts = response.data.results || [];
        console.log(newPosts);
        const nextUrl = response.data.next || null;

        console.log("Received Next URL:", nextUrl);

        setAssociations((prev) => [...prev, ...newPosts]);
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
        {associations.map((post, index) => (
          // Using index + id to ensure unique keys if IDs repeat
          <AssociationCard key={`${post.id}-${index}`} association={post} />
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

export default AssociationCardsInfinity;
