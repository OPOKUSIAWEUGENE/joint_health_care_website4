import styles from "./layout.module.css";
import Footercards from "./Footercomponents/Footercards";
import Footerparagraph from "./Footercomponents/footerparagraph";
import Electricity from "./Headercomponents/electricity";
import Footeraddress from "./Footercomponents/footeraddress";
import Logo from "../resources/thalassa_holdings.png";
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerUpper}>
        <div className={styles.logoFrame}>
          <img alt="logo" src={Logo} />
      
        </div>
        <div class={styles.socialmedia}>
          <a href="#" class="facebook">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="#" class="twitter">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="#" class="google">
            <i class="fa fa-instagram"></i>
          </a>
          <a href="#" class="linkedin">
            <i class="fa fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className={styles.footerLower}>
        <Footercards title={"Aims and Objectives"}>
          <div className={styles.aboutus}>
      
            <div className={styles.footerdescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Phasellus nec iaculis mauris, vitae
              feugiat tortor. Cras tincidunt, nulla in vulputate blandit, justo
              felis pretium arcu. Integer posuere erat a ante venenatis dapibus
              posuere velit aliquet. Donec sed odio dui, sit amet vehicula
              libero.
            </div>
          </div>
        </Footercards>
        <Footercards title={"Our Services"}>
          <div className={styles.footercolumns}>
            <div className={styles.columndivisions}>
              <Footerparagraph>
                <Electricity
                  height={15}
                  width={35}
                  fill={"rgb(175, 180, 189)"}
                />
                Lorem ipsum dolor
              </Footerparagraph>

              <Footerparagraph>
                <Electricity
                  height={15}
                  width={35}
                  fill={"rgb(175, 180, 189)"}
                />
                Sit amet consectetur
              </Footerparagraph>

              <Footerparagraph>
                <Electricity
                  height={15}
                  width={35}
                  fill={"rgb(175, 180, 189)"}
                />
                Adipiscing elit sed
              </Footerparagraph>

              <Footerparagraph>
                <Electricity
                  height={15}
                  width={35}
                  fill={"rgb(175, 180, 189)"}
                />
                Do eiusmod tempor
              </Footerparagraph>
            </div>
            <div className={styles.columndivisions}>
              <Footerparagraph>
                <Electricity
                  height={15}
                  width={35}
                  fill={"rgb(175, 180, 189)"}
                />
                Lorem ipsum dolor
              </Footerparagraph>

              <Footerparagraph>
                <Electricity
                  height={15}
                  width={35}
                  fill={"rgb(175, 180, 189)"}
                />
                Sit amet consectetur
              </Footerparagraph>

              <Footerparagraph>
                <Electricity
                  height={15}
                  width={35}
                  fill={"rgb(175, 180, 189)"}
                />
                Adipiscing elit sed
              </Footerparagraph>

              <Footerparagraph>
                <Electricity
                  height={15}
                  width={35}
                  fill={"rgb(175, 180, 189)"}
                />
                Do eiusmod tempor
              </Footerparagraph>
            </div>
          </div>
        </Footercards>

        <Footercards title={"Our Info"}>
          <div className={styles.footercolumns_infos}>
            <div className={styles.footer_infos}>
              <div className={styles.textBundle}>
                <Footeraddress>
                  <strong>Phone number:</strong>
                </Footeraddress>
                <Footeraddress> (code) 233 000 0000</Footeraddress>
              </div>
              <div className={styles.textBundle}>
                <Footeraddress>
                  <strong>Fax number:</strong>
                </Footeraddress>
                <Footeraddress> (code) 233 000 0000</Footeraddress>
              </div>
              <div className={styles.textBundle}>
                <Footeraddress>
                  <strong>After Office Hours:</strong>
                </Footeraddress>
                <Footeraddress> (code) 233 000 0000</Footeraddress>
              </div>
            </div>
            <div className={styles.footer_infos}>
              <div className={styles.textBundle}>
                <Footeraddress>
                  <strong>Location:</strong>
                </Footeraddress>
                <Footeraddress>6430 Port and Harbor </Footeraddress>
                <Footeraddress>GH 00 00</Footeraddress>
              </div>
              <div className={styles.textBundle}>
                <Footeraddress>
                  <span style={{ fontSize: 15, color: "rgb(167, 224, 244)" }}>
                    <strong>24 hour service</strong>
                  </span>
                </Footeraddress>
              </div>
            </div>
          </div>
        </Footercards>
      </div>
      <div className={styles.footerSub}>
        <span>
          Copyright 2025{" "}
          <span style={{ color: "rgb(57, 140, 185)" }}>
            Thelessa Holdings
          </span>{" "}
          All Rights Reserved{" "}
        </span>
        <span>
          <a>Privacy Policy</a>
        </span>
      </div>
    </div>
  );
}
