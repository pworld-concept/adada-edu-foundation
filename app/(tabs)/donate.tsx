import CustomWebview from "@/components/navigation/CustomWebview";
import { Sites } from "@/constants/Sites";

export default function DonateScreen() {
  return <CustomWebview uri={Sites.donate} />;
}
