import React from "react";
import { register, remove } from "src/modules/member";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "src/modules";

import Member from "src/components/Member";

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
