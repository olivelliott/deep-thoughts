import React from "react";
import { Link } from "react-router-dom";

const ThoughtList = ({ thoughts, title }) => {
  if (!thoughts.length) {
    return <h3>No Thoughts Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {thoughts &&
        thoughts.map(({ _id, username, createdAt, reactionCount, thoughtText }) => (
          <div key={_id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {username}
              </Link>
              {""}
              thought on {createdAt}
            </p>
            <div className="card-body">
              <Link to={`/thought/${_id}`}>
                <p>{thoughtText}</p>
                <p className="mb-0">
                  Reactions: {reactionCount} || Click to{" "}
                  {reactionCount ? "see" : "start"} the discussion!
                </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ThoughtList;
