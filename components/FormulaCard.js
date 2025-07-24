"use client";

import Link from "next/link";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import styles from "@/styles/FormulaCard.module.css";

export default function FormulaCard({ formula, onDelete }) {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this formula?")) {
      onDelete(formula._id);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className={styles["formula-card-container"]}>
      <div className={styles["formula-card"]}>
        <div className={styles["formula-card-header"]}>
          <h3 className={styles["formula-title"]}>{formula.title}</h3>
          <span className={styles["formula-category"]}>{formula.category}</span>
        </div>

        <div className={styles["formula-display"]}>
          <BlockMath math={formula.expression} />
        </div>

        <p className={styles["formula-description"]}>{formula.description}</p>

        <div className={styles["formula-card-footer"]}>
          <span className={styles["formula-date"]}>
            Created: {formatDate(formula.createdAt)}
          </span>

          <div className={styles["formula-actions"]}>
            <Link href={`/view/${formula._id}`} className={styles["view-btn"]}>
              View
            </Link>
            <Link href={`/edit/${formula._id}`} className={styles["edit-btn"]}>
              Edit
            </Link>
            <button onClick={handleDelete} className={styles["delete-btn"]}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
