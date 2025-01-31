"use client";
import React, { useEffect, useState } from "react";
import ClientComment from "../_components/ClientComment";
import { AnimationControls, motion } from "motion/react";
import { ClientsData } from "../_lib/Data";

type ClientsCommentsRowProps = {
  ref: React.RefObject<HTMLDivElement | null>;
  commentRef: React.RefObject<HTMLDivElement | null>;
  controls: AnimationControls;
};

export default function ClientsCommentsRow({
  ref,
  commentRef,
  controls,
}: ClientsCommentsRowProps) {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    return window.removeEventListener("resize", () =>
      setWindowWidth(window.innerWidth),
    );
  }, []);

  return (
    <>
      <div className="relative">
        <div className="h-[450px] w-[100vw] overflow-hidden">
          <motion.div
            className="relative right-0 flex w-fit items-center gap-8"
            initial={{ left: "-200px", opacity: 0 }}
            whileInView={{ left: 0, opacity: 1 }}
            animate={controls}
            transition={{ duration: 0.35, ease: "linear" }}
            viewport={{ amount: windowWidth > 1024 ? 0.45 : 0 }}
            ref={ref}
            dir="ltr"
          >
            {ClientsData?.map((client, idx) => (
              <ClientComment
                key={idx}
                description={client.description}
                name={client.name}
                jopTitle={client.jopTitle}
                rate={client.rate}
                country={client.country}
                project={client.project}
                image={client.image}
                commentRef={commentRef}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
