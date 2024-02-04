import { icon1, icon2, icon3, one, two, three, arrow, ff1, ff2, ff3 } from "../assets";

export const navLinks = [
	{
	  id: "home",
	  title: "Home",
	},
	{
	  id: "about",
	  title: "About",
	},
	{
	  id: "support",
	  title: "Support",
	},
	{
	  id: "faq",
	  title: "FAQ",
	},
];

export const steps = [
	{
	  id: "step-1",
	  icon: icon1,
	  number: one,
	  next: arrow,
	  title: "Upload Hazy/ Smoky File",
	  content:
		'To submit smoky vedios or photographs, click the "Dehaze" option or browse from your files. HezeXpert will remove the smoke and haze from the file',
	},
	{
	  id: "step-2",
	  icon: icon2,
	  number: two,
	  next: arrow,
	  title: "Dehaze/Desmoke",
	  content:
		"Without any manual work, HazeXpert Software will automatically Dehaze/Desmoke any uploaded video or image using AI.",
	},
	{
	  id: "step-3",
	  icon: icon3,
	  number: three,
	  next: arrow,
	  title: "Download File",
	  content:
		"After being dehaze/desmoke, you may download the appropriate image or vedio to your local device using HazeXpert.",
	},
  ];

  export const features = [
	{
	  id: "feature-1",
	  icon: ff1,
	  title: "Firefighting and rescue",
	  content:
		"Dehazing algorithms can be applied to images and videos captured by firefighters or drones to improve visibility in smoke-filled environments. This can help firefighters locate victims, assess the extent of the fire, and navigate more safely.",
	},
	{
	  id: "feature-2",
	  icon: ff2,
	  title: "Enhancing the quality of outdoor images and videos",
	  content:
		"Dehaze can be used to improve the visibility of objects in outdoor images and videos that have been obscured by haze, fog, or smoke. This can be useful for applications such as security surveillance, traffic monitoring, and autonomous vehicles.",
	},
	{
	  id: "feature-3",
	  icon: ff3,
	  title: "Remote Monitoring Of Wildfires",
	  content:
		"Dehazing can be used to improve the clarity of satellite and aerial images of wildfires, which can help firefighters and emergency responders to track the spread of the fire and allocate resources more effectively.",
	},
  ];