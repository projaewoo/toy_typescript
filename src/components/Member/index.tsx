import React, { useState } from "react";

type MemberType = {
  members: {
    id: string;
  }[];
  onRegister: (id: string) => void;
  onRemove: (id: string) => void;
};

const Member = ({ members, onRegister, onRemove }: MemberType) => {
  const [addId, setAddId] = useState<string>("");

  return (
    <>
      <div>
        {members.map((member) => (
          <div>
            <span key={member.id}>{member.id}</span>
            <button onClick={() => onRemove(member.id)}>-</button>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={addId}
        placeholder="추가할 id"
        onChange={(e) => setAddId(e.target.value)}
      />
      <button
        onClick={() => {
          onRegister(addId);
          setAddId("");
        }}
      >
        +
      </button>
    </>
  );
};

export default Member;
