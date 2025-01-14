export const projects = [
    {
      id: 1,
      name: "Advanced Safety and Control for AVs",
      image: "/projectsLogo/first.png",
      description: "We formulate the overtaking maneuver as a multi-stage optimization problem and show that by integrating safety assurance within the model predictive controller-based trajectory planner, the vehicle is able to overtake a slow-moving leading vehicle while accounting for worst case, careless actions by the human driver and minimally deviates from planned trajectory while doing so.",
      github: "https://github.com/prachitgupta/Safe-control-Systems-for-AVs",
      otherLink: "/reports/advancedSafety.pdf",
      other: "Report",
      tech: ["ROS", "Python", "OpenCV", "SLAM"]
    },
    {
      id: 2,
      name: "Safewalk Robotics",
      image: "/projectsLogo/second.png",
      description: "Developed and tested robotic platforms designed for the Safewalk program, aimed at enhancing community safety through advanced robotic assistance. Implemented dynamic object following, leveraging ROS and skeletal detection on Turtlebot4 and Unitree GO1 platforms. Additionally, using a hybrid SL-RL framework attempted to make it robust to occlusions and varying conditions in outdoor settings",
      github: "https://github.com/prachitgupta/Person-follower",
      otherLink: "https://mithrilab.com/people/",
      other: "Machine Intelligence and HRI lab",
      tech: ["C++", "ROS", "Arduino", "Control Systems"]
    },
    {
      id: 3,
      name: "Safe Multi-agent control",
      image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=800",
      description: "This project aimed at making existing robotic solutions not only safe but also anthropomorphic. By jointly learning multi-agent control policy and CBF-based safety filters, safety was ensured in multi-agent settings while effectively accounting for uncertainty. Parallelly in a standard highway environment, it was shown that by using LLMs for reward shaping, standard DQN agents can be made to take actions that resemble actual human drivers",
      github: "https://github.com/prachitgupta/multi-agent-control",
      otherLink: "/reports/SafeMultiagentcontrol.pdf",
      other: "Report",
      tech: ["Python", "ROS", "Multi-Agent Systems"]
    },
    {
      id: 4,
      name: "Safe Multi-agent control",
      image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=800",
      description: "This project aimed at making existing robotic solutions not only safe but also anthropomorphic. By jointly learning multi-agent control policy and CBF-based safety filters, safety was ensured in multi-agent settings while effectively accounting for uncertainty. Parallelly in a standard highway environment, it was shown that by using LLMs for reward shaping, standard DQN agents can be made to take actions that resemble actual human drivers",
      github: "https://github.com/prachitgupta/multi-agent-control",
      otherLink: "/reports/SafeMultiagentcontrol.pdf",
      other: "Report",
      tech: ["Python", "ROS", "Multi-Agent Systems"]
    }
  ];