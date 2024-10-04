import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";

export default function ModuleControlButtons() {
    return (
        <div className="float-end d-flex align-items-center">
            <div className="border border-dark rounded-pill px-3 py-1 me-2">
                40% of Total
            </div>
            <BsPlus className="fs-4 me-2" />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}