import React from "react";

import Navigation from "./Navigation";
import Home from "./Home";
import TaskCategories from "./TaskCategories";
import OtherJobs from "./OtherJobs";
import MeetTasker from "./MeetTasker";
import ThingsToKnow from "./ThingsToKnow";
import Articles from "./Articles";
import TopCategories from "./TopCategories";
import Footer from "./Footer";

function LandingPage() {
  return (
    <>
      <Navigation />
      <Home />
      <TaskCategories />
      <OtherJobs />
      <MeetTasker />
      <ThingsToKnow />
      <Articles />
      <TopCategories />
      <Footer />
    </>
  );
}

export default LandingPage;
