import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Project = ({ project, animation }) => {
  const { id, tasks, name, description, timeCount } = project || {};
  return (
    <div
      data-aos={animation}
      data-aos-easing="linear"
      data-aos-duration="1800"
      className="flex flex-col rounded-md bg-red-50 shadow-xl p-5"
    >
      <h2 className=" text-xl font-bold">{name}</h2>
      <div className="flex-grow flex flex-col gap-2 p-4">
        <p className=" flex-grow">{description.slice(0, 100)}...</p>
        <p>Time spent: {timeCount}hrs</p>
        <div>
          <p>Tasks:</p>
          {tasks?.map((task, index) => (
            <p key={task}>
              {index + 1} {task}
            </p>
          ))}
        </div>

        <div className="flex justify-end gap-3">
          <Link className=" hover:scale-110" to={`/service/${id}`}>
            <FaEdit size={26} />
          </Link>
          <button className=" hover:scale-110">
            <FaTrashAlt size={26} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
