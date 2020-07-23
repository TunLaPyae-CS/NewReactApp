import React from "react";

const SubApp = ({ ninjaprop , deleteNinja}) => {
  
//*ninjaClass is being converted to HTML  
  const ninjaHtmlList = ninjaprop.map((ninja) => {
    const { name, age, belt, id } = ninja;
    return age > 20 ? (
      <div className="ninja" key={id}>
        <div>Name : {name}</div>
        <div>Age : {age}</div>
        <div>Belt : {belt}</div>
        <button onClick={()=>{deleteNinja(id)}}>Delete</button>
        <hr />
      </div>
    ) : null;
  });

  //* This is actually what gets returned
  return (
    <div className="NinjaList">
      <hr />
      {ninjaHtmlList}
    </div>
  );
};
export default SubApp;
