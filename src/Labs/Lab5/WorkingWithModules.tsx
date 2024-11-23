import React, { useState } from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
  const [module, setModule] = useState({
    id: "CS5610",
    name: "Full Stack Web Development",
    description:
      "An in-depth course on web development using modern tools and technologies.",
  });

  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

  return (
    <div id="wd-working-with-module" className="container mt-4">
      <h3 className="mb-4">Working With Module</h3>

      {/* Module Editing Section */}
      <section className="mb-4">
        <h4 className="mb-3">Modifying Module Properties</h4>

        {/* Update Module Name */}
        <div className="form-group mb-3">
          <label htmlFor="wd-module-name" className="form-label">Module Name</label>
          <input
            className="form-control w-75 mb-2"
            id="wd-module-name"
            defaultValue={module.name}
            onChange={(e) => setModule({ ...module, name: e.target.value })}
            placeholder="Enter Module Name"
          />
          <a
            id="wd-update-module-name"
            className="btn btn-primary"
            href={`${MODULE_API_URL}/name/${module.name}`}
          >
            Update Module Name
          </a>
        </div>

        <hr />

        {/* Update Module Description */}
        <div className="form-group mb-3">
          <label htmlFor="wd-module-description" className="form-label">Module Description</label>
          <input
            className="form-control w-75 mb-2"
            id="wd-module-description"
            defaultValue={module.description}
            onChange={(e) => setModule({ ...module, description: e.target.value })}
            placeholder="Enter Module Description"
          />
          <a
            id="wd-update-module-description"
            className="btn btn-primary"
            href={`${MODULE_API_URL}/description/${module.description}`}
          >
            Update Module Description
          </a>
        </div>
      </section>

      <hr />

      {/* Retrieve Module Section */}
      <section className="mb-4">
        <h4 className="mb-3">Retrieving Module Information</h4>

        {/* Retrieve Entire Module */}
        <div className="mb-3">
          <a
            id="wd-retrieve-module"
            className="btn btn-secondary"
            href={`${REMOTE_SERVER}/lab5/module`}
          >
            Get Module
          </a>
        </div>

        {/* Retrieve Module Name */}
        <div>
          <a
            id="wd-retrieve-module-title"
            className="btn btn-secondary"
            href={`${REMOTE_SERVER}/lab5/module/name`}
          >
            Get Module Name
          </a>
        </div>
      </section>
    </div>
  );
}
