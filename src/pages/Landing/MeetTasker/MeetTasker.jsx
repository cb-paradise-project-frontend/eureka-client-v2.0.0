import React from "react";

import TaskerSection from "./TaskerSection";

import TaskerDisplay from "./TaskerDisplay";

import styles from "./MeetTasker.module.scss";

class MeetTasker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          img: {
            taskerImg: require("../../../assets/tasker-samantha.png"),
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
            taskerImg: require("../../../assets/tasker-Emily.png"),
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
            taskerImg: require("../../../assets/tasker-Brandon.png"),
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
    const { data } = this.state;

    return (
      <div className={styles.tasker}>
        <TaskerDisplay />
        <h2>Samantha Emily Brendan</h2>
        {data.map((singleData, index) => (
          <TaskerSection key={index} data={singleData} />
        ))}
        <button className={styles.taskerButton}>Become a Tasker</button>
      </div>
    );
  }
}

export default MeetTasker;
