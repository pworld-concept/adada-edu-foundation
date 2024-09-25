import CustomWebview from "@/components/navigation/CustomWebview";
import { Sites } from "@/constants/Sites";

export default function OnlineTrainingScreen() {
  return <CustomWebview uri={Sites.onlineTraining} />;
}
