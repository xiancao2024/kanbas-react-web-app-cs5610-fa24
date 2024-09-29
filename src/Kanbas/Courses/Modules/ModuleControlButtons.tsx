import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs"; // Import BsPlus icon
import GreenCheckmark from "./GreenCheckmark";

export default function ModuleControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <BsPlus className="fs-4 me-2" /> {/* Added BsPlus icon with some margin */}
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
