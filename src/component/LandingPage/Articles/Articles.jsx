import React from "react";
import { ArticleCard } from "./ArticleCard/ArticleCard";
import styles from "./Articles.module.scss";

class Articles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [1, 2, 3],
    };
  }

  render() {
    const { data, dataFromState } = this.state;

    return (
      <div className={styles.article}>
        <div className={styles.title}>Articles, stories and more</div>
        <div className={styles.article_container}>
          {data.map((singleDate, index) => (
            <ArticleCard key={index} import={dataFromState} />
          ))}
        </div>

        <button className={styles.articleButton}>Visit our blog</button>
      </div>
    );
  }
}

export default Articles;
