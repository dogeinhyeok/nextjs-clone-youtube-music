import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const UserAvatar = ({ size = "sm" }: { size?: "sm" | "lg" }) => {
  return (
    <Avatar className={cn("sm", size === "lg" && "w-[56px] h-[56px]")}>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
