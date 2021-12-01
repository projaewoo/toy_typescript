import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "modules";
import { getUsersStart } from "modules/users/actions";

const Users = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(getUsersStart());
  }, [dispatch]);

  // TODO. dependency에서 dispatch 빼보기

  const { loading, data } = state;

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      {data?.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default Users;
