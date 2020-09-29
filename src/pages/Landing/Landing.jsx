import React from "react";

import Home from "./Home";
import TaskCategories from "./TaskCategories";
import OtherJobs from "./OtherJobs";
import MeetTasker from "./MeetTasker";
import ThingsToKnow from "./ThingsToKnow";
import Articles from "./Articles";
import TopCategories from "./TopCategories";
import Footer from "./Footer";

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        article:
        [
          {
            id: 1,
            articleImg: require("../../assets/garden-party.png"),
            articleTitle: "How to paint your kitchen cabinets",
            articleContent:
              "Looking to refresh the kitchen? It’s easier than you think…",
          },
          {
            id: 2,
            articleImg: require("../../assets/beautiful-backyard.png"),
            articleTitle: "Bedroom plants for your room",
            articleContent:
              "Create your own lush, indoor jungle with plenty of potted greens!",
          },
          {
           id: 3,
            articleImg: require("../../assets/bedroom-plant.png"),
            articleTitle: "35 Dreamy boho bedroom ideas",
            articleContent:
              "Take your bedroom from basic to bohemian with these fabulous colourful ideas!",
          },
        ],

        tasker: [
          {
            img: {
              taskerImg: require("../../assets/tasker-samantha.png"),
            },
            profile: {
              name: "Samantha",
              spec: "Specialities: assembly, pet care, gardening",
              details:
                "Returning to the workforce as a single mum, Sam had to find something that could be flexible and cover the cost of childcare.",
              stars: "4.9 stars from 185 review",
              reviews:
                "Very nice and caring in trying circumstances! Thanks again",
              viewer: "---Tim S.",
            },
          },
          {
            img: {
              taskerImg: require("../../assets/tasker-Emily.png"),
            },
            profile: {
              name: "Emily",
              spec: "Specialities: delivery, cleaning, packing",
              details:
                "In-between jobs, Emily was looking for a way to earn some extra cash... Maybe even using her clown school skills!",
              stars: "5 stars from 6 reviews",
              reviews:
                "She was an absolute lifesaver. Quick, friendly and super efficient!",
              viewer: "---Myles B.",
            },
          },
          {
            img: {
              taskerImg: require("../../assets/tasker-Brandon.png"),
            },
            profile: {
              name: "Brandan",
              spec:
                "She was an absolute lifesaver. Quick, friendly and super efficient!",
              details:
                "A sparky by trade, Brendon jumped onboard when he went back to studying. Here's how Airtasker fit in with his busy lifestyle...",
              stars: "5 stars from 6 reviews",
              reviews:
                "Nice work and will use Brendon again if any other lighting task",
              viewer: "---Steven Z.",
            },
          },
        ],

      
    };
  }

  render() {
    return (
      <>
      <Home />
      <TaskCategories />
      <OtherJobs />
      <TopCategories />
      <MeetTasker data={this.state.tasker}/>
      <ThingsToKnow />
      <Articles data={this.state.article}/>
      <Footer />
    </>
    );
  }
}

export default Landing;
