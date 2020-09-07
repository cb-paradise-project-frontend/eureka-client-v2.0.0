import React from "react";
import ArticleCard from "./ArticleCard";
import styles from "./Articles.module.scss";

class Articles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          id: 1,
          articleImg: require("../../../assets/garden-party.png"),
          articleTitle: "How to paint your kitchen cabinets",
          articleContent:
            "Looking to refresh the kitchen? It’s easier than you think…",
        },
        {
          id: 2,
          articleImg: require("../../../assets/beautiful-backyard.png"),
          articleTitle: "Bedroom plants for your room",
          articleContent:
            "Create your own lush, indoor jungle with plenty of potted greens!",
        },
        {
          id: 3,
          articleImg: require("../../../assets/bedroom-plant.png"),
          articleTitle: "35 Dreamy boho bedroom ideas",
          articleContent:
            "Take your bedroom from basic to bohemian with these fabulous colourful ideas!",
        },
      ],
    };
  }

  render() {
    const { data } = this.state;

    return (
      <div className={styles.article}>
        <div className={styles.title}>Articles, stories and more</div>
        <div className={styles.article_container}>
          {data.map((article, index) => {
            return (
              <ArticleCard
                key={article.id}
                articleImg={article.articleImg}
                articleTitle={article.articleTitle}
                articleContent={article.articleContent}
              />
            );
          })}
        </div>
        <button className={styles.articleButton}>Visit our blog</button>
      </div>
    );
  }
}

export default Articles;
