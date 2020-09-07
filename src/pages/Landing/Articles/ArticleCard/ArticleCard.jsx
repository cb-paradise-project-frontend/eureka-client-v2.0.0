import React from "react";

import styles from "./ArticleCard.module.scss";

function ArticleCard({ articleImg, articleTitle, articleContent }) {
  return (
    <div>
      <div className={styles.ArticleCard}>
        <img
          src={articleImg}
          alt="articleImgName"
          className={styles.articleImg}
        ></img>
        <div className={styles.articleTitle}>{articleTitle}</div>
        <div className={styles.articleContent}>{articleContent}</div>
        <a
          href="https://support.airtasker.com/hc/en-au/categories/200049939-Payments"
          className={styles.readMore}
        >
          Read more
        </a>
      </div>
    </div>
  );
}

export default ArticleCard;
