import { useUser } from "@clerk/nextjs";


const UserAvatar = () => {
  const { user } = useUser();

  return (
    <div>user-avatar</div>
  )
}

export default UserAvatar;