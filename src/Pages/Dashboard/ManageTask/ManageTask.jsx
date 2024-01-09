import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Project from "./Project";

const ManageTask = () => {
  const { user } = useContext(AuthContext);

  const allProjects = useLoaderData();
  console.log(allProjects);
  const projects = allProjects?.filter((pro) => pro.email === user?.email);
  console.log(projects);
  const totalTime = projects.reduce(
    (accumulator, task) => accumulator + task?.timeCount,
    0
  );
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center gap-20 text-lg md:text-xl font-semibold mb-10">
        <p>Total Project: {projects.length}</p>
        <p>Total Time Spent: {totalTime}hrs</p>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {projects?.map((project) => (
          <Project
            key={project.id}
            project={project}
            animation={project.id % 2 === 0 ? "zoom-in-up" : "zoom-in-down"}
          ></Project>
        ))}
      </div>
    </div>
  );
};

export default ManageTask;
