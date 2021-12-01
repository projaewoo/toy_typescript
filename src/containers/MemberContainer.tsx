import React from "react";
import { register, remove } from "modules/member";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "modules";

import Member from "components/Member";

type ContainerType = {
  members: {
    id: string;
  }[];
  register: (id: string) => void;
  remove: (id: string) => void;
};

const MemberContainer = ({ members, register, remove }: ContainerType) => {
  return <Member members={members} onRegister={register} onRemove={remove} />;
};

export default connect(
  ({ member }: RootState) => ({
    members: member.members,
  }),
  {
    register,
    remove,
  }
)(MemberContainer);
