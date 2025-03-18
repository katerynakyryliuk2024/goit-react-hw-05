//import { useState } from "react";//

import Profile from "../Profile/Profile";
import userData from "../userData.json";
import FriendList from "../FriendList/FriendList";
import friends from "../friends.json";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import transactions from "../transactions.json";
import Work from "../Work/Work";

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
      />
      <>
        <p>Selected language: </p>
        <Work />
      </>

      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
