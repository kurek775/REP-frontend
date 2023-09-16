import React from "react";
import userServices from "../../api/services/userService";
interface MockPageProps {}
const MockPage: React.FC<MockPageProps> = () => {
  userServices.get(2).then((res) => {
    console.log(res.data);
  });

  return (
    <div>
      <h1>Mock Page</h1>
    </div>
  );
};

export default MockPage;
