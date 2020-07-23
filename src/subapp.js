import React from "react";

const SubApp = ({ ninjaprop }) => {
  const ninjaHtmlList = ninjaprop.map((ninja) => {
    const { name, age, belt, id } = ninja;
    if (age > 20) {
      return (
        <div className="ninja" key={id}>
          <div>Name : {name}</div>
          <div>Age : {age}</div>
          <div>Belt : {belt}</div>
          <hr />
        </div>
      );
    } else return null;
  });
  return (
    <div className="NinjaList">
      <hr />
      {ninjaHtmlList}
    </div>
  );
};
export default SubApp;
