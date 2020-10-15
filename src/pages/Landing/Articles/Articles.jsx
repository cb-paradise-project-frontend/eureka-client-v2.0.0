import React from "react";
import ArticleCard from "./ArticleCard";
import styles from "./Articles.module.scss";

function Articles(props){
  const { data } = props;
  return (
    <React.Fragment>
    <div className={styles.article}>
    <div className={styles.wrapper}>
    <div className={styles.title}>Articles, stories and more</div>
      <div className={styles.article_container}>
        {data.map((data, index) => {
          return (
            <ArticleCard
              key={data.id}
              articleImg={data.articleImg}
              articleTitle={data.articleTitle}
              articleContent={data.articleContent}
            />
          );
        })}
      </div>
      <button className={styles.articleButton}>Visit our blog</button>
    </div>
    </div>
      
    </React.Fragment>
    
  );

}

export default Articles;
