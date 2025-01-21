import { Earth, FileText, Github, Youtube } from "lucide-react";
export const projects = [
    {
      id: 1,
      name: "Advanced Safety and Control for AVs",
      image: "/projectsLogo/first.png",
      description: "We formulate the overtaking maneuver as a multi-stage optimization problem and show that by integrating safety assurance within the model predictive controller-based trajectory planner, the vehicle is able to overtake a slow-moving leading vehicle while accounting for worst case, careless actions by the human driver and minimally deviates from planned trajectory while doing so.",
      firstLink: "https://github.com/prachitgupta/Safe-control-Systems-for-AVs",
      firstName:"Github",
      firstIcon: Github,
      secondLink: "/reports/advancedSafety.pdf",
      secondName: "Report",
      secondIcon:FileText,
      thirdLink: "/reports/advancedSafety.pdf",
      thirdName: "Presentation",
      thirdIcon:Youtube,
      tech: ["ROS", "Python", "OpenCV", "SLAM"]
    },
    {
      id: 2,
      name: "Safewalk Robotics",
      image: "/projectsLogo/second.png",
      description: "Developed and tested robotic platforms designed for the Safewalk program, aimed at enhancing community safety through advanced robotic assistance. Implemented dynamic object following, leveraging ROS and skeletal detection on Turtlebot4 and Unitree GO1 platforms. Additionally, using a hybrid SL-RL framework attempted to make it robust to occlusions and varying conditions in outdoor settings",
      firstLink: "https://github.com/prachitgupta/Person-follower",
      firstName:"Github",
      firstIcon: Github,
      secondLink: "https://mithrilab.com/people/",
      secondName: "Machine Intelligence and HRI lab",
      secondIcon:FileText,
      tech: ["C++", "ROS", "Arduino", "Control Systems"]
    },
    
    {
    id: 3,
      name: "Safe Multi-agent control",
      image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=800",
      description: "This project aimed at making existing robotic solutions not only safe but also anthropomorphic. By jointly learning multi-agent control policy and CBF-based safety filters, safety was ensured in multi-agent settings while effectively accounting for uncertainty. Parallelly in a standard highway environment, it was shown that by using LLMs for reward shaping, standard DQN agents can be made to take actions that resemble actual human drivers",
      firstLink: "https://github.com/prachitgupta/multi-agent-control",
      firstName:"Github",
      firstIcon: Github,
      secondLink: "/reports/SafeMultiagentcontrol.pdf",
      secondName: "Report",
      secondIcon: FileText,
      tech: ["Python", "ROS", "Multi-Agent Systems"]
    } ,

    {
      id: 4,
      name: "Unmanned Aerial Systems Challenge 2023",
      image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=800",
      description: "Played a leading role in the design and development of a 7kg drone for relief operations, which is capable of a 20+ minute flight and can carry a 6kg payload. Our team ranked 6th globally in the annual UAS challenge and won three awards in the following categories: Design, Scrutineering, and Advancement.",
      firstLink: "https://drive.google.com/file/d/1C3rolvvV2CWDQvpjDuZrBEqoUA5R9XaV/view?usp=sharing",
      firstName:"Final Run Video",
      firstIcon: Youtube,
      secondLink: "/reports/SafeMultiagentcontrol.pdf",
      secondName: "Design and Development Report",
      secondIcon: FileText,
      thirdLink: "https://www.imeche.org/docs/default-source/1-oscar/challenges/uas-challenge/uas-2023/uasc-2023-final-scores.pdf?sfvrsn=2",
      thirdName: "Results",
      thirdIcon: FileText,
      tech: ["Python", "Mavros", "Ardupilot", ""]
    },
    {
      id: 6,
        name: "Safe Multi-agent control",
        image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=800",
        description: "This project aimed at making existing robotic solutions not only safe but also anthropomorphic. By jointly learning multi-agent control policy and CBF-based safety filters, safety was ensured in multi-agent settings while effectively accounting for uncertainty. Parallelly in a standard highway environment, it was shown that by using LLMs for reward shaping, standard DQN agents can be made to take actions that resemble actual human drivers",
        firstLink: "https://github.com/prachitgupta/multi-agent-control",
        firstName:"Github",
        firstIcon: Github,
        secondLink: "/reports/SafeMultiagentcontrol.pdf",
        secondName: "Report",
        secondIcon: FileText,
        tech: ["Python", "ROS", "Multi-Agent Systems"]
      },

      {
        id: 7,
          name: "Safe Multi-agent control",
          image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=800",
          description: "This project aimed at making existing robotic solutions not only safe but also anthropomorphic. By jointly learning multi-agent control policy and CBF-based safety filters, safety was ensured in multi-agent settings while effectively accounting for uncertainty. Parallelly in a standard highway environment, it was shown that by using LLMs for reward shaping, standard DQN agents can be made to take actions that resemble actual human drivers",
          firstLink: "https://github.com/prachitgupta/multi-agent-control",
          firstName:"Github",
          firstIcon: Github,
          secondLink: "/reports/SafeMultiagentcontrol.pdf",
          secondName: "Report",
          secondIcon: FileText,
          tech: ["Python", "ROS", "Multi-Agent Systems"]
        }
  ];