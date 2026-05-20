import Img1 from "../resources/images/jhcimg4.jpg";
import Img2 from "../resources/images/jhcimg3.jpg";
import Img3 from "../resources/images/jhcimg2.webp";
import Img4 from "../resources/images/jhcimg1.webp";
import BackgroundLessImage from "../resources/images/BackgroundlessImage.png";
import BackgroundLessImage2 from "../resources/images/bgless4.png";

export const serviceRows = [
  {
    image: Img1,
    alt: "Skilled care",
    tag: "Clinical care",
    groups: [
      {
        title: "Skilled nurse",
        bullets: [
          "Injection",
          "Wound care",
          "Tube feeding",
          "Bowel regimen",
          "Catheter care",
          "Nutritional instructions",
          "Respiratory / tracheostomy",
          "Medication administration and education",
        ],
      },
      {
        title: "Non-skilled",
        bullets: [
          "Home-health aid",
          "Bathing",
          "Dressing",
          "Personal linen change",
          "Light house duties",
        ],
      },
    ],
  },
  {
    image: Img2,
    alt: "Therapy support",
    tag: "Therapy support",
    groups: [
      {
        title: "Physical Therapy",
        bullets: [
          "Reforming optimal level of functioning",
          "Gait training",
          "Range of motion",
          "Muscle strengthening",
        ],
      },
      {
        title: "Occupational Therapy",
        bullets: [
          "Improving fine motor skill",
          "Independence with daily living",
          "Adequate use of equipment",
        ],
      },
    ],
  },
  {
    image: Img3,
    alt: "Communication and support",
    tag: "Support services",
    groups: [
      {
        title: "Speech Therapy",
        bullets: [
          "Swallowing disorders",
          "Delayed or post-illness speech support",
        ],
      },
      {
        title: "Healthcare Social Worker",
        bullets: [
          "Help in need of assistance",
          "Care planning support",
        ],
      },
    ],
  },
  {
    image: Img4,
    alt: "Practical support",
    tag: "Practical support",
    groups: [
      {
        title: "Medical Supply Equipment",
        bullets: [
          "Walker and wheelchair support",
          "Hospital bed coordination",
          "Wound care supplies",
          "Foley catheter and breathing equipment",
        ],
      },
      {
        title: "Transportation to doctor's visit",
        bullets: [
          "Safe appointment transportation",
          "Easy scheduling for visits",
        ],
      },
    ],
  },
  {
    image: BackgroundLessImage2,
    alt: "Home support",
    tag: "Home support",
    groups: [
      {
        title: "Home health and CNA",
        bullets: [
          "Daily personal support",
          "Home care assistance",
        ],
      },
      {
        title: "MSW",
        bullets: [
          "Social work support",
          "Family guidance and coordination",
        ],
      },
    ],
  },
  {
    image: BackgroundLessImage,
    alt: "Specialty care",
    tag: "Specialty care",
    groups: [
      {
        title: "Hospice care",
        bullets: [
          "Comfort-focused end-of-life support",
          "Family-centered care",
        ],
      },
      {
        title: "Pediatrics consult",
        bullets: [
          "Pediatric guidance",
          "Support for child-focused care planning",
        ],
      },
    ],
  },
];
