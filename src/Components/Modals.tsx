import FollowerModal from "../Modals/FollowerModal/FollowerModal";
import FollowingModal from "../Modals/FollowingModal/FollowingModal";
import HomeSearchModal from "../Modals/HomeSearch/HomeSearchModal";
import PhotoModal from "../Modals/PhotoModal/PhotoModal";

export default function Modals({modal, setModal, user, userItem, users, filterUsers}:any){

  //@ts-ignore
  if(modal === 'photo') return <PhotoModal modal = {modal} setModal = {setModal} userItem = {userItem}/>
  
  //@ts-ignore
  if(modal === 'homeSearch') return <HomeSearchModal users = {users} modal = {modal} setModal = {setModal} filterUsers = {filterUsers} />
  
  //@ts-ignore
  if(modal === 'followers') return <FollowerModal modal = {modal} setModal = {setModal} user = {user} userItem = {userItem} />
  
  //@ts-ignore
  if(modal === 'following') return <FollowingModal modal = {modal} setModal = {setModal} user = {user} userItem = {userItem} />
  
  else return null;

}