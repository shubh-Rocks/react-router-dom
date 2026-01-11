import React from "react";
import { useParams } from "react-router-dom";

const CoursesDetail = () => {
  const params = useParams();

  return (
    <div className="text-black font-bold flex items-center h-screen justify-center text-5xl">
      <h1 className="underline capitalize"> {params.id}Courses Detail Page</h1>
    </div>
  );
};

export default CoursesDetail;
