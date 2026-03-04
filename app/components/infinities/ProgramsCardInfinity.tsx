"use client";
import { Spot, SpotsListAction } from "@/app/actions/programs";
import FsLightbox from "fslightbox-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import ProgramArea from "../ProgramArea";

interface Props {
  initialData: Spot[];
  nextPage: string | null;
}

const ProgramsCardInfinity = ({ initialData, nextPage }: Props) => {
  const [currentStatus, setCurrentStatus] = useState(false);
  const [link, setLink] = useState("");

  const [allData, setAllData] = useState<Spot[]>(initialData);
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
      const response = await SpotsListAction(currentNextPage);

      if (response?.data) {
        const newPosts = response.data.results || [];
        console.log(newPosts);
        const nextUrl = response.data.next || null;

        console.log("Received Next URL:", nextUrl);

        setAllData((prev) => [...prev, ...newPosts]);
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
      <FsLightbox sources={[link]} toggler={currentStatus} />

      <section className="video-are ptb-100 pb-0">
        <div className="container">
          <div className="row">
            {allData.map((post, index) => (
              // Using index + id to ensure unique keys if IDs repeat
              <ProgramArea
                key={`${post.id}-${index}`}
                setLink={setLink}
                currentStatus={currentStatus}
                setCurrentStatus={setCurrentStatus}
                data={post}
                defaultPicture={"/images/about/cacau7.jpg"}
              />
            ))}
          </div>
        </div>
      </section>

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

export default ProgramsCardInfinity;
