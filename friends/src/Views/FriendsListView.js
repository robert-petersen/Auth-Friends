import React, { useEffect, useState } from "react";
import Styled from "styled-components";

import { axiosWithAuth } from "./../Utils/axiosWithAuth";

export default function FriendsListView(){
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then((res)=>{
        setFriends(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
    }, []);

  return(
    <StyledFriendsListView>
      {friends.map((friend)=>{
        return(
          <div className="friend-card">
            <h1>{friend.name}</h1>
            <p>{friend.email}</p>
            <p>{friend.age}</p>
          </div>
        );
      })}
    </StyledFriendsListView>
  );
}

const StyledFriendsListView = Styled.div`

`;