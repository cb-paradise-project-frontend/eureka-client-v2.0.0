import React from "react";

import Home from "./Home";
import TaskCategories from "./TaskCategories";
import OtherJobs from "./OtherJobs";
import MeetTasker from "./MeetTasker";
import Articles from "./Articles";
import Footer from "./Footer";
import { getTasksByCategory } from "../../apis";
import { CategoryProvider } from "../categoryContext/categoryContext";


class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        article:
        [
          {
            id: 1,
            articleImg: require("../../assets/article-bedroom.png"),
            articleTitle: "40 Wonderfully white bedroom ideas",
            articleContent:
              "Gone are the days of boring, stuffy white bedrooms. Infuse light and life into your space with pops of colour and boho touches.",
          },
          {
            id: 2,
            articleImg: require("../../assets/article-bedroom-black.png"),
            articleTitle: "35+ Black and white bedroom ideas",
            articleContent:
              "Renovating your bedroom? You simply can’t go wrong with this classic colour pairing.",
          },
          {
            id: 3,
             articleImg: require("../../assets/article-curtain.png"),
             articleTitle: "35 Modern bedroom curtain ideas",
             articleContent:
               "It’s time to ditch the old musty curtains and frame your windows with something beautiful.",
           },
           {
            id: 4,
             articleImg: require("../../assets/article-farmhouse.png"),
             articleTitle: "45+ Farmhouse bedroom ideas",
             articleContent:
               "Snug, cosy and timeless, farmhouse bedrooms have an enduring appeal.",
           },
        ],

        feature: [
          {
            img:{
              featureImg: require("../../assets/secure-payments.png"),

            },
            content: {
              subhead:"Secure Payments",
              describe:"We hold task payments secure with our PCI-DSS compliant Airtasker Pay – so tasks can be completed knowing payment is there when you're done.",
            },
          },

          {
            img:{
              featureImg: require("../../assets/top-rated-insurance.png"),

            },
            content: {
              subhead:"Top rated insurance",
              describe:"Insurance is there to ease any worries - making sure the Tasker has liability insurance from CGU while performing most task activities. T&C's apply.",
            },
          },

          {
            img:{
              featureImg: require("../../assets/verified-badges.png"),

            },
            content: {
              subhead:"Verified badges",
              describe:"Badges give members a bit more verified info when deciding who to work with on a task. Each badge has certain requirements that must be met and verified before they’re shown on the member's profile.",
            },
          },

          {
            img:{
              featureImg: require("../../assets/here-if-you-need-us.png"),

            },
            content: {
              subhead:"Here if you need us",
              describe:"Our comprehensive Help Centre and dedicated Airtasker Support are on hand 24/7 to help with any questions, queries or issues you might have.",
            },
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

  categoryTasks = async() => {
    const Pickup = await getTasksByCategory('Pickup');
    const Removal = await getTasksByCategory('Removal');
    const Clean = await getTasksByCategory('Clean');

    const tasksList = {
      Pickup: Pickup.filter(task => task.status === 'OPEN'),
      Removal: Removal.filter(task => task.status === 'OPEN'),
      Clean: Clean.filter(task => task.status === 'OPEN'),
    } 
    this.setState({tasksList});
  } 

  componentDidMount() { 
    this.categoryTasks();
  }

  render() {

    return (
      <CategoryProvider
        value={this.state.tasksList}
      >
      <Home />
      <TaskCategories />
      <OtherJobs />
      <Articles data={this.state.article}/>
      <MeetTasker data={this.state.tasker}/>
      <Footer />
    </CategoryProvider>
    );
  }
}

export default Landing;