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

        JobsCards: [
          {
            id:"Moving home",
            tabDescription : "Got a few boxes to shift, an apartment or entire house? Get your home moved just the way you want, by whom you want, when you want. Let Airtasker shoulder the load.",
            title : "DELVERY",
            description : "Deliver 1,000 letterbox flyers in Kellyville",
            price : "$50",
            rate : "5 Stars",
          },
          {
            id:"Starting a business",
            tabDescription : "Taking a big leap and need some expert advice or assistance? Airtasker can help you get some cracking marketing collateral, admin muscle or a few extra hands to help ease the burden.",
            title : "DESIGN" ,
            description : "Logo designer for photography business",
            price : "$88",
            rate : "5 Stars" ,
          }, 
          {
            id:"Fixing stuff",
            tabDescription : "Do you have a hole in the wall that needs plugging? Perhaps a TV that needs mounting? Or maybe you have that perfect shade of green, but no time to paint? Get a Tasker to help.",
            title : "HANDYMAN / TRADIES" ,
            description : "Help assemble a flat pack." ,
            price : "$30" ,
            rate : "5 Stars" ,
          },
          {
            id : "Hosting a party",
            tabDescription : "Got something to celebrate and the guest list all ready, but need everything else? Let Airtasker help you find the best bartenders, party planners, photographers and entertainment in the land." ,
            title : "CATERING" ,
            description : "Help With A Launch Party -- This Thursday" ,
            price : "$100" ,
            rate : "5 Stars" ,
          },
          {
            id : "Something different" ,
            tabDescription : "Want something done but feel like it’s too random? Whether it’s getting rescued from a spider or help building a bobsled - you can get nearly anything done through Airtasker." ,
            title : "CHEF" ,
            description : "Teach me your family pasta sauce recipe" ,
            price : "$575" ,
            rate : "5 Stars" ,
          }

        ],

      
    };
  }

  render() {
    console.log(456, this.state.JobsCards)
    return (
      <>

      <Home />
      <TaskCategories />
      <OtherJobs data={this.state.JobsCards}/>
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
