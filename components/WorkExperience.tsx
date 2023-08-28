import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Experience } from "../typings";
import { useWindowSize } from "@uidotdev/usehooks";
import { setExperienceCardWidth } from "../sanity";

type Props = { experiences: Experience[] };

export default function WorkExperience({ experiences }: Props) {
  const dimensions = useWindowSize();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left px-2 pt-20 justify-evenly mx-auto items-center"
    >
      <h3 className="section-title">Experience</h3>
      <Carousel
        showArrows
        swipeScrollTolerance={20}
        autoFocus
        centerMode
        className="w-full max-w-7xl  overflow-hidden"
        centerSlidePercentage={
          dimensions?.width !== null
            ? setExperienceCardWidth(dimensions.width)
            : undefined
        }
        showStatus={false}
        showThumbs={false}
        showIndicators
        preventMovementUntilSwipeScrollTolerance
      >
        {experiences?.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </Carousel>
    </motion.div>
  );
}
