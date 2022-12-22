export interface ExperienceEntry {
  organization: string;
  dateString: string;
  buttonText: string;
  location: string;
  role: string;
  bullets: string[];
}

export const EXPERIENCES: ExperienceEntry[] = [
  {
    organization: "M&T Bank",
    dateString: "Aug 2020",
    buttonText: "M&T",
    location: "Buffalo, NY",
    role: "Software Engineer",
    bullets: ["Did things", "And also stuff"],
  },
  {
    organization: "Travelers Insurance",
    dateString: "June 2019 - Aug 2019",
    buttonText: "Travelers",
    location: "Hartford, CT",
    role: "Technology Intern",
    bullets: [
      `Compiled technical documentation in Confluence for over 100 assets created by teams in the Digital Enablement line of business`,
      `Worked with team of interns to present business case for using AI to improve internal help desk ticket submission process`,
    ],
  },
  {
    organization: "University of Notre Dame Dept. of  Computer Science",
    dateString: "Aug 2017 - Dec 2017",
    buttonText: "Notre Dame TA",
    location: "Notre Dame, IN",
    role: "Teaching Assistant",
    bullets: [
      `Held office hours and graded assignments for an introductory Python course for 40 students`,
      `Graded writing assignments for 70 students in an computing-based entrepreneurship course`,
    ],
  },
  {
    organization: "Kyndi, Inc.",
    dateString: "Jan 2018 -- May 2018",
    buttonText: "Kyndi",
    location: "San Mateo, CA",
    role: "Product Management Intern",
    bullets: [
      `Used Agile methodologies to plan and manage development of a PDF table extraction product`,
      `Wrote internal press releases for feature and product updates`,
    ],
  },
  {
    organization: "Notre Dame Dept. of Engineering and Science Computing",
    dateString: "Aug 2016  -- Apr 2017",
    buttonText: "Notre Dame IT",
    location: "Notre Dame, IN",
    role: "Cluster Assistant",
    bullets: [
      `Assisted in the management of the computing cluster for the Notre Dame College of Engineering`,
      `Maintained installations of relevant software in 6 computer labs serving thousands of students`,
    ],
  },
];
