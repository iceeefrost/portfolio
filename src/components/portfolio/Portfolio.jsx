import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/28542950/pexels-photo-28542950/free-photo-of-african-penguins-on-a-beach-in-south-africa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Lectus mauris habitasse et elit erat sodales porta. Purus vestibulum et vestibulum dictum nascetur sem.",
  },
  {
    id: 2,
    title: "Next.js Blog",
    img: "https://videos.pexels.com/video-files/28182218/12321064_1920_1080_25fps.mp4",
    desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Lectus mauris habitasse et elit erat sodales porta. Purus vestibulum et vestibulum dictum nascetur sem.",
  },
  {
    id: 3,
    title: "Vanilla JS App",
    img: "https://images.pexels.com/photos/28542950/pexels-photo-28542950/free-photo-of-african-penguins-on-a-beach-in-south-africa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Lectus mauris habitasse et elit erat sodales porta. Purus vestibulum et vestibulum dictum nascetur sem.",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/20849769/pexels-photo-20849769/free-photo-of-philippine-postal-corporation.jpeg",
    desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Lectus mauris habitasse et elit erat sodales porta. Purus vestibulum et vestibulum dictum nascetur sem.",
  },
];

const Single = ({ item }) => {
  return <section>{item.title}</section>;
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => {
        return <Single item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Portfolio;
