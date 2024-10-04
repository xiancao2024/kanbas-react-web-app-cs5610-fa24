import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { IoSearch } from "react-icons/io5";
export default function AssignmentControls() {
  return (
    <div
      id="wd-modules-controls"
      className="text-nowrap d-flex justify-content-between align-items-end">
      <form className="d-flex me-3 align-items-center">
        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">
            <IoSearch />
          </span>
          <input
            className="form-control"
            type="search"
            placeholder="Search..."
            aria-label="Search"
            aria-describedby="basic-addon1"
          />
        </div>
      </form>
      <div>
        <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1">
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Assignment
        </button>
        <button
          id="wd-add-module-btn"
          className="btn btn-lg btn-secondary me-4">
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Group
        </button>
      </div>
    </div>
  );
}
