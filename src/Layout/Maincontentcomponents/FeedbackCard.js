import { useState } from "react";
import styles from "../layout.module.css";

export default function FeedbackCard() {
  const afterFeedback = (
    <div className={styles.feedbackSuccess}>
      <div className={styles.feedbackSuccessBadge}>
        <i className="fa fa-check" aria-hidden="true"></i>
      </div>
      <div className={styles.feedbackSuccessTitle}>Thanks for sharing</div>
      <div className={styles.feedbackSuccessText}>
        Your feedback helps us keep care thoughtful and responsive.
      </div>
    </div>
  );

  const feedbackForm = (
    <form className={styles.feedbackTab} onSubmit={handleSubmit}>
      <div className={styles.feedbackHero}>
        <div className={styles.feedbackBadge}>
          <i className="fa fa-star" aria-hidden="true"></i>
          <span>Quick feedback</span>
        </div>
        <div className={styles.feedbackHeroRow}>
          <div>
            <div className={styles.feedbackTitle}>Rate your visit</div>
            <div className={styles.feedbackCopy}>
              Share how the care, communication, and follow-up felt.
            </div>
          </div>
          <div className={styles.feedbackScorePill}>
            <span className={styles.feedbackScoreValue}>4.9</span>
            <span className={styles.feedbackScoreLabel}>avg. rating</span>
          </div>
        </div>
      </div>

      <div className={styles.rating}>
        <div className={styles.rateContent}>
          <div className={styles.rate}>
            <input type="radio" id="star5" name="rate" value="5" />
            <label htmlFor="star5" title="5 stars">
              5
            </label>
            <input type="radio" id="star4" name="rate" value="4" />
            <label htmlFor="star4" title="4 stars">
              4
            </label>
            <input type="radio" id="star3" name="rate" value="3" />
            <label htmlFor="star3" title="3 stars">
              3
            </label>
            <input type="radio" id="star2" name="rate" value="2" />
            <label htmlFor="star2" title="2 stars">
              2
            </label>
            <input type="radio" id="star1" name="rate" value="1" />
            <label htmlFor="star1" title="1 star">
              1
            </label>
          </div>
        </div>
      </div>

      <div className={styles.comments}>
        <label className={styles.commentTitle} htmlFor="feedback-comments">
          Add a note
        </label>
        <div className={styles.commentForm}>
          <textarea
            id="feedback-comments"
            required
            name="comments"
            placeholder="Tell us what went well, or where we can improve."
          />
          <button type="submit" className={styles.applicationButton}>
            Submit feedback
          </button>
        </div>
      </div>
    </form>
  );

  const [feedbackTab, setFeedbackTab] = useState(feedbackForm);

  async function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    const requestOptions = {
      method: "POST",
      body: data,
    };

    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}add-comment`,
      requestOptions
    );

    await response.json();

    if (response.ok) {
      setFeedbackTab(afterFeedback);
    } else {
      alert("application not sent. please try sending the application again");
    }
  }

  return feedbackTab;
}
