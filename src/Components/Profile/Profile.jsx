const Profile = ({ user, handleSignOut }) => {
  return (
    <div className="dropdown text-white  dropdown-end ">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user.photoURL} alt="" />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content text-black mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <button className="btn btn-sm btn-ghost">{user.displayName}</button>
        </li>

        <li>
          <button onClick={handleSignOut} className="btn btn-sm btn-ghost">
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
