import React from "react";

import Home from "./Home";
import TaskCategories from "./TaskCategories";
import OtherJobs from "./OtherJobs";
import MeetTasker from "./MeetTasker";
import ThingsToKnow from "./ThingsToKnow";
import Articles from "./Articles";
import TopCategories from "./TopCategories";
import Footer from "./Footer";

function Landing() {
  return (
    <>
      <Home />
      <TaskCategories />
      <OtherJobs />
      <TopCategories />
      <MeetTasker />
      <ThingsToKnow />
      <Articles />
      <Footer />
    </>
  );
}

export default Landing;
