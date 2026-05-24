import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Layout/layout.module.css"
import swal from 'sweetalert';
  
export default function Application(){
  const navigate=useNavigate();

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  
    
    
    async function handleSubmit(event) {
      event.preventDefault();

      try {
        const data = new FormData(event.target);
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}add-applicant`, {
          method: 'POST',
          body: data
        });

        if (response.ok) {
          navigate('/sent-application');
          return;
        }

        alert('Application not sent. Please try sending the application again.');
      } catch (error) {
        swal("Failed", "Something went wrong while sending the application.", "error");
      }
    }

    return (
      <div className={styles.applicationPage}>
        <div className={styles.applicationPageInner}>
          <section className={styles.applicationPageHero}>
            <span className={styles.applicationPageEyebrow}>Career application</span>
            <h1 className={styles.applicationPageTitle}>Apply to join the Joint Health Care team</h1>
            <p className={styles.applicationPageCopy}>
              Share your background, preferred role, and availability. The form is organized to make
              it easy to complete on desktop or mobile.
            </p>
            <div className={styles.applicationPagePills}>
              <span className={styles.applicationPagePill}>RN, LVN/LPN, CNA, Aide</span>
              <span className={styles.applicationPagePill}>Therapy and social work roles</span>
              <span className={styles.applicationPagePill}>PDF CV required</span>
            </div>
          </section>

          <section className={styles.applicationPageFormShell}>
            <div className={styles.applicationPageFormHeader}>
              <span>Application form</span>
              <button type="button" className={styles.applicationPageBackButton} onClick={() => navigate('/')}>
                Back to home
              </button>
            </div>
            <form className={styles.applicationPageForm} onSubmit={handleSubmit} encType="multipart/form-data">
              <div className={styles.applicationPageSection}>
                <div className={styles.applicationPageSectionTitle}>Personal details</div>
                <div className={styles.applicationPageGrid}>
                  <div className={styles.applicationField}>
                    <label htmlFor="firstname">First name</label>
                    <input required id="firstname" name="firstname" type="text" />
                  </div>
                  <div className={styles.applicationField}>
                    <label htmlFor="lastname">Last name</label>
                    <input required id="lastname" name="lastname" type="text" />
                  </div>
                  <div className={styles.applicationField}>
                    <label htmlFor="email">Email address</label>
                    <input required id="email" name="email" type="email" />
                  </div>
                  <div className={styles.applicationField}>
                    <label htmlFor="phone">Phone number</label>
                    <input required id="phone" name="phone" type="text" />
                  </div>
                  <div className={`${styles.applicationField} ${styles.applicationSpanTwo}`}>
                    <label htmlFor="address">Home address</label>
                    <input required id="address" name="address" type="text" />
                  </div>
                  <div className={`${styles.applicationField} ${styles.applicationSpanTwo}`}>
                    <label htmlFor="state_city_region">State, city, or region</label>
                    <input required id="state_city_region" name="state_city_region" type="text" />
                  </div>
                </div>
              </div>

              <div className={styles.applicationPageSection}>
                <div className={styles.applicationPageSectionTitle}>Role details</div>
                <div className={styles.applicationPageGrid}>
                  <div className={styles.applicationField}>
                    <label htmlFor="above_10yrs">Are you above 18 years?</label>
                    <select id="above_10yrs" name="above_10yrs" required>
                      <option value="">Select an option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className={styles.applicationField}>
                    <label htmlFor="position">Job position</label>
                    <select id="position" name="position" required>
                      <option value="">Select a role</option>
                      <option value="RN">RN</option>
                      <option value="LVN">LVN</option>
                      <option value="AIDE">AIDE</option>
                      <option value="HOME HEALTH AIDE">HOME HEALTH AIDE</option>
                      <option value="PT">PT</option>
                      <option value="OT">OT</option>
                      <option value="MSW">MSW</option>
                    </select>
                  </div>
                  <div className={styles.applicationField}>
                    <label htmlFor="type">Job type</label>
                    <select id="type" name="type" required>
                      <option value="">Select a schedule</option>
                      <option value="Full Time">Full Time</option>
                      <option value="Part Time">Part Time</option>
                      <option value="Weekend">Weekend</option>
                      <option value="Week Days">Week Days</option>
                    </select>
                  </div>
                  <div className={styles.applicationField}>
                    <label htmlFor="citizen">Work authorization</label>
                    <select id="citizen" name="citizen" required>
                      <option value="">Select an option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className={styles.applicationField}>
                    <label htmlFor="adequate_transportation">Reliable transportation?</label>
                    <select id="adequate_transportation" name="adequate_transportation" required>
                      <option value="">Select an option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className={styles.applicationField}>
                    <label htmlFor="salary_expectation">Salary expectation</label>
                    <input required id="salary_expectation" name="salary_expectation" type="number" />
                  </div>
                  <div className={styles.applicationField}>
                    <label htmlFor="date_available">Date available</label>
                    <input required id="date_available" name="date_available" type="date" />
                  </div>
                </div>
              </div>

              <div className={styles.applicationPageSection}>
                <div className={styles.applicationPageSectionTitle}>Education and documents</div>
                <div className={styles.applicationPageGrid}>
                  <div className={styles.applicationField}>
                    <label htmlFor="high_school_name">High school name</label>
                    <input required id="high_school_name" name="high_school_name" type="text" />
                  </div>
                  <div className={styles.applicationField}>
                    <label htmlFor="high_school_level">High school level</label>
                    <select id="high_school_level" name="high_school_level" required>
                      <option value="">Select a level</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </select>
                  </div>
                  <div className={styles.applicationField}>
                    <label htmlFor="college_name">College name</label>
                    <input required id="college_name" name="college_name" type="text" />
                  </div>
                  <div className={styles.applicationField}>
                    <label htmlFor="college_level">College level</label>
                    <select id="college_level" name="college_level" required>
                      <option value="">Select a level</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                  <div className={styles.applicationField}>
                    <label htmlFor="professional_licence">Professional licence</label>
                    <input required id="professional_licence" name="professional_licence" type="text" />
                  </div>
                  <div className={`${styles.applicationField} ${styles.applicationSpanTwo}`}>
                    <label htmlFor="language">Languages spoken other than English</label>
                    <textarea required id="language" name="language" />
                  </div>
                  <div className={`${styles.applicationField} ${styles.applicationSpanTwo}`}>
                    <label htmlFor="skills">Other skills relevant to the role</label>
                    <textarea required id="skills" name="skills" />
                  </div>
                  <div className={`${styles.applicationField} ${styles.applicationSpanTwo}`}>
                    <label htmlFor="cv">Upload CV (PDF)</label>
                    <input required id="cv" name="cv" type="file" accept="application/pdf" />
                  </div>
                </div>
              </div>

              <div className={styles.applicationPageButtonRow}>
                <button className={styles.applicationButton} disabled>
                  Submit application
                </button>
                <div className={styles.applicationPageSupportText}>
                  Please make sure your CV is attached before submitting.
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    );
}
