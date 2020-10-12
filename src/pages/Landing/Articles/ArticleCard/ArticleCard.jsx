import React from "react";

import styles from "./ArticleCard.module.scss";

function ArticleCard({ articleImg, articleTitle, articleContent }) {
  return (
    <div>
      <div className={styles.article_card}>
      <div className={styles.img_container}>
      <img
          src={articleImg}
          alt="articleImgName"
          className={styles.article_img}
        ></img>
      </div>
        
        <div className={styles.article_title}>{articleTitle}</div>
        <div className={styles.article_content}>{articleContent}</div>
        <a
          href="https://support.airtasker.com/hc/en-au/categories/200049939-Payments"
          className={styles.read_more}
        >
          Read more
        </a>
      </div>
    </div>
  );
}

export default ArticleCard;
