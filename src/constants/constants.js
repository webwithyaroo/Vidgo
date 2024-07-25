export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

import banner from "../assets/images/banner.png";
import menuBar from "../assets/images/List.png";
import logo from "../assets/images/logo.svg";
import playBtn from "../assets/images/playButton.svg";
import times from "../assets/images/cross.png";
import ArrowRight from "../assets/images/Arrow.svg";
import ArrowLeft from "../assets/images/ArrowLeft.svg";
import cardOne from "../assets/images/cardOne.svg";
import cardTwo from "../assets/images/cardTwo.svg";
import cardThree from "../assets/images/cardThree.svg";
import cardFour from "../assets/images/cardFour.svg";
import imageOne from "../assets/images/featureOne.jpg";
import imageTwo from "../assets/images/featureTwo.png";
import imageThree from "../assets/images/featureThree.png";
import bagIcon from "../assets/images/bagIcon.png";
import cloudRec from "../assets/images/cloudRec.png";
import controlIcon from "../assets/images/controlIcon.png";
import group from "../assets/images/group.png";
import meetIcon from "../assets/images/meetIcon.png";
import shareIcon from "../assets/images/shareIcon.png";
import teleCast from "../assets/images/teleCast.png";

import plus from "../assets/images/plus.png";
export {
  plus,
  bagIcon,
  cloudRec,
  group,
  controlIcon,
  meetIcon,
  shareIcon,
  teleCast,
  banner,
  menuBar,
  logo,
  playBtn,
  times,
  ArrowLeft,
  ArrowRight,
  cardFour,
  cardOne,
  cardThree,
  cardTwo,
  imageOne,
  imageTwo,
  imageThree,
};

import Icon from "../Components/Icon";

export { Icon };

export const listOne = [
  {
    IconUrl: group,
    bigText: "Business messaging",
    smallText:
      "Chat, start meetings or join them with a click from within your conversation.",
  },
  {
    IconUrl: bagIcon,
    bigText: "Your own own online meeting space",
    smallText:
      "Invite attendees to a meeting in a room just for you with a custom link.",
  },
  {
    IconUrl: meetIcon,
    bigText: "Join with your phone",
    smallText:
      "You can dial into our meeting from your phone and be part of the discussion while traveling.",
  },
];

export const listTwo = [
  {
    IconUrl: shareIcon,
    bigText: "Sharing a screen",
    smallText:
      "Share your desktop, smartphone or tablet screen with everyone to facilitate teamwork.",
  },
  {
    IconUrl: controlIcon,
    bigText: "Presenter control ",
    smallText:
      "Invite attendees to a meeting in a room just for you with a custom link.",
  },
];

export const listThree = [
  {
    IconUrl: cloudRec,
    bigText: "Cloud recording",
    smallText:
      "Share or revisit your meetings later using video and audio recordings.",
  },
  {
    IconUrl: teleCast,
    bigText: "Meeting transcriptions",
    smallText: "Record meetings and share them easily with others.",
  },
  {
    IconUrl: meetIcon,
    bigText: "Join with your phone",
    smallText:
      "You can dial into our meeting from your phone and be part of the discussion while traveling.",
  },
];
export const card = [
  {
    largeText: "No downloads",
    IconUrl: cardThree,
    text: "Join or launch meetings and webinars right from your browser, on any device...",
  },
  {
    largeText: "Mobile Apps",
    IconUrl: cardFour,
    text: "You can start meetings from anywhere you are, and you can join meetings...",
  },
  {
    largeText: "Recording",
    IconUrl: cardThree,
    text: "Review the meetings or webinars you attend through the recordings...",
  },
  {
    largeText: "Secure sessions",
    IconUrl: cardFour,
    text: "To ensure that your meetings are secure, we've integrated security features...",
  },
];

// Section Imports
import Home from "../sectionFolder/Home";
import FeaturesSection from "../sectionFolder/FeaturesSection";
import Testimonials from "../sectionFolder/Testimonials";
import SecondFeatureSection from "../sectionFolder/SecondFeatureSection";
import FAQ from "../sectionFolder/FAQ";
export { Home, FeaturesSection, SecondFeatureSection, Testimonials, FAQ };

//Testimonial lists
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
import image5 from "../assets/images/image5.png";
import image6 from "../assets/images/image6.png";
import image7 from "../assets/images/image7.png";
import image8 from "../assets/images/image8.png";

export const testimonialLists = [
  {
    img: image1,
    name: "Julian Wan",
    handle: "@Julian",
    text: " We have used this tool for our Market integration as [an] Event Partner. Our client hosts all the events on the Vidgo platform and it sends the event ...",
  },
  {
    img: image2,
    name: "Chanvre Québec",
    handle: "@Chanvre",
    text: " We mostly recommend Vidgo because of the integration with various marketing automation tools. That makes life easy for the marketer to get the webinar data very...",
  },
  {
    img: image3,
    name: "Ian dooley",
    handle: "@Ian dooley",
    text: " Vidgo is being used as an  essential tool in the last 4 years for the company. We use it for all departments  helped us to create more engagement with our clients....",
  },
  {
    img: image4,
    name: "Joseph Gonzalez",
    handle: "@Gonzalez",
    text: " We've used Vidgo for a number of years to help us with our webinar needs. We've run everything from small, 20 person internal team webinars, to upwards of 1,000 people....",
  },
  {
    img: image5,
    name: "Rayul",
    handle: "@rayul",
    text: " Our association uses for almost all our online webinars, which can be between 2-5 per month. Most of the programs are generated in the U.S., but we also us...",
  },
  {
    img: image6,
    name: "Cibelly Roberta",
    handle: "@roberta",
    text: " Vidgo is used by HR for announcements when they roll out new policies or need to engage the wider firm i.e quarterly CEO to connect where CEO shares.....",
  },
  {
    img: image7,
    name: "Dave Nash",
    handle: "@dave Nash",
    text: " Our Marketing department, Product Management, and Sales department use Vidgo to present to our customers and prospects every month about our new and existing...",
  },
  {
    img: image8,
    name: "Charlie Green",
    handle: "@charlie Green",
    text: " Vidgo is one of the many platforms I have used throughout many contracts with different healthcare organizations. ....",
  },
];

export const questions = [
  {
    title: "Do you need an account to use Vidgo?",
    text: "A Vidgo account is not required if you are strictly joining Vidgo Meetings as a participant. If someone invites you to their meeting, you can join as a participant without creating an account.",
  },
  {
    title: "How do I sign up for Vidgo?",
    text: "A Vidgo account is not required if you are strictly joining Vidgo Meetings as a participant. If someone invites you to their meeting, you can join as a participant without creating an account.",
  },
  {
    title: "How do I join computer/device audio?",
    text: "A Vidgo account is not required if you are strictly joining Vidgo Meetings as a participant. If someone invites you to their meeting, you can join as a participant without creating an account.",
  },
  {
    title: "How much does Vidgo cost?",
    text: "A Vidgo account is not required if you are strictly joining Vidgo Meetings as a participant. If someone invites you to their meeting, you can join as a participant without creating an account.",
  },
];
//   export const footerLinks = [
//     {
//       title: "Products",
//       links: [
//         { name: "Air Force 1", link: "/" },
//         { name: "Air Max 1", link: "/" },
//         { name: "Air Jordan 1", link: "/" },
//         { name: "Air Force 2", link: "/" },
//         { name: "Nike Waffle Racer", link: "/" },
