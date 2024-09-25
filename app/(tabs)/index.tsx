import CustomWebview from "@/components/navigation/CustomWebview";
import { Sites } from "@/constants/Sites";

export default function HomeScreen() {
  return <CustomWebview uri={Sites.home} />;
}
