import { Earth, FileText, Github, Youtube } from "lucide-react";
export const projects = [
    {
      id: 1,
      name: "Advanced Safety and Control for AVs",
      image: "/projectsLogo/advanced_safety.png",
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
      tech: ["Hj-Reachability", "Dynamic Programming", "Matlab", "Python", "helperOc", "CVXPY","Casadi"]
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
      tech: ["R0S2", "ROS", "Blazepose", "Unitree Go1", "Turtlebot4", "Python", "Person Following", "Reinforcemet Learning"]
    },
    
    {
    id: 3,
      name: "Safe Multi-Agent Control",
      image: "/projectsLogo/safe-multi-agent.png",
      description: "This project aimed at making existing robotic solutions not only safe but also anthropomorphic. By jointly learning multi-agent control policy and Control Barrier Functions(CBFs)-based safety filters, safety was ensured in multi-agent settings while effectively accounting for uncertainty. Parallelly in a standard highway environment, it was shown that by using LLMs for reward shaping, standard DQN agents can be made to take actions that resemble actual human drivers",
      firstLink: "https://github.com/prachitgupta/multi-agent-control",
      firstName:"Github",
      firstIcon: Github,
      secondLink: "/reports/SafeMultiagentcontrol.pdf",
      secondName: "Report",
      secondIcon: FileText,
      tech: ["CBFs", "RL", "Multi-Agent Systems", "Reward shaping", "LLMs", "Neural networks", "Pytorch", "Python"]
    } ,

    {
      id: 4,
      name: "Unmanned Aerial Systems Challenge 2023",
      image: "projectsLogo/uas.png",
      description: "Played a leading role in the design and development of a 7kg drone for relief operations, which is capable of a 20+ minute flight and can carry a 6kg payload. Our team ranked 6th globally in the annual UAS challenge and won three awards in the following categories: Design, Scrutineering, and Advancement.",
      firstLink: "https://github.com/prachitgupta/Unmaned-Aerial-Systems",
      firstName:"Github",
      firstIcon: Github,
      secondLink: "https://drive.google.com/file/d/1C3rolvvV2CWDQvpjDuZrBEqoUA5R9XaV/view?usp=sharing",
      secondName:"Final Run Video",
      secondIcon: Youtube,
      thirdName: "Design and Development Report",
      thirdIcon: FileText,
      thirdLink: "/reports/Design and Development report.pdf",
      tech: ["Python", "Mavros", "Ardupilot", "Lua", "Gazebo", "UAVs", "Solidworks"]
    },
    {
      id: 5,
        name: "IARC Mission 9",
        image: "projectsLogo/IARC.png",
        description: "Our team stood first in the simulation round and got a special mention in the hardware challenge for IARC Mission 9, a problem statement declared to be unsolvable at its release.     Besides simulation and overseeing the execution of autonomous missions, I was majorly involved in engineering a custom-built replacement and gripper mechanism to execute the mission tasks as highlighted in problem statement.",
        firstLink: "https://youtu.be/Fl70FG0QKSU?si=3PNQC6i5vcLXi5Uq",
        firstName:"Mission Simulation",
        firstIcon: Youtube,
        secondLink: "https://www.youtube.com/watch?v=VfRIcAEMAtk",
        secondName: "Mission Implementation",
        secondIcon: Youtube,
        thirdName: "Results",
        thirdIcon: FileText,
        thirdLink: "http://www.aerialroboticscompetition.org/simulation_challenge.php",
        tech: ["ROS", "Ardupilot", "UAVs", "Arduino", "Eagle", "Manufacturing"]
      },

      {
        id: 6,
          name: "Team Aerove",
          image: "projectsLogo/Team_Aerove.png",
          description: "Team Aerove at UMIC is dedicated to nurturing technical startups and cultivating entrepreneurial spirit among IIT Bombay students. Currently serving as a Technical Advisor, I previously held the position of Senior Avionics Engineer, where I played a pivotal role in technical competitions and UAV-focused research.",
          firstLink: "https://github.com/prachitgupta/Unmaned-Aerial-Systems",
          firstName:"Github",
          firstIcon: Github,
          secondLink: "/reports/SafeMultiagentcontrol.pdf",
          secondName: "Report",
          secondIcon: FileText,
          tech: ["Python", "ROS", "Multi-Agent Systems"]
        }
      // {
      //   id: 7,
      //     name: "Soft Robotic Gripper",
      //     image: "projectsLogo/soft-robotic.png",
      //     description: "Designed and developed a compliant two-finger soft robotic gripper, optimized for adaptive handling of delicate items. Integrated into a 3-DOF robotic arm using servo motors, this project showcased the gripper's ability to safely handle varied shapes and textures, emphasizing its potential   in manufacturing with focus on human-centric environments.",
      //     firstLink: "https://github.com/prachitgupta/multi-agent-control",
      //     firstName:"Github",
      //     firstIcon: Github,
      //     secondLink: "/reports/SafeMultiagentcontrol.pdf",
      //     secondName: "Report",
      //     secondIcon: FileText,
      //     tech: ["Python", "ROS", "Multi-Agent Systems"]
      //   }
  ];