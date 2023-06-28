"use client";

import {
  SiTypescript,
  SiGithub,
  SiOpensourceinitiative,
  SiBuildkite,
} from "react-icons/si";

import { ArrowRightIcon } from "@chakra-ui/icons";
import { FaProductHunt, FaWpbeginner } from "react-icons/fa";
import {MdTextIncrease} from 'react-icons/md'

{
  /* The Home Section*/
}

export const homes = [
  {
    title: "Pre-Build Production Ready Components!",
    description:
      "Accelerate your development process with our collection of pre-built, production-ready components. Say goodbye to reinventing the wheel and focus on building the core features of your application.",
  },
];

export const features = [
  {
    title: "Production-Ready",
    icon: FaProductHunt,
    color: "messenger",
  },
  {
    title: "Customizablity",
    icon: SiBuildkite,
    color: "teal",
  },
  {
    title: "Free and Open-Source",
    icon: SiOpensourceinitiative,
    color: "purple",
  },
  {
    title: "Built-in TypeScript",
    icon: SiTypescript,
    color: "blue",
  },
   {
    title: "Beginner Friendly",
    icon: FaWpbeginner,
    color: "green",
  },
   {
    title: "Ease of Use",
    icon:  MdTextIncrease,
    color: "red",
  },
  
];

export const homebuttons = [
  {
    id: 1,
    link: "/overview",
    title: "Get Started",
    label: "OverView",
    color: "blackAlpha",
    icon: ArrowRightIcon,
  },
  {
    id: 2,
    link: "https://github.com",
    title: "Want To Contribute🖤",
    label: "GitHub Repository",
    color: "gray",
    icon: SiGithub,
  },
];


