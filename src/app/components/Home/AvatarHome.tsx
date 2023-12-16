import { Avatar, AvatarImage } from "@/components/ui/avatar";

// No finished (want to add Discord statu and activity)
function AvatarHome() {
    return (
      <div className="max-sm:justify-center sm:justify-end shrink-0 flex items-center mx-auto w-1/2">
        <Avatar className="-mt-28 h-44 w-44 rounded-lg border-white transform transition-all hover:scale-110 hover:blur-sm hover:brightness-50">
          <AvatarImage src="avatar.png" alt="Avatar"/>
        </Avatar>
      </div>
    );
  }

export { AvatarHome }