import CustomWebview from "@/components/navigation/CustomWebview";
import { Sites } from "@/constants/Sites";

export default function LoginScreen() {
  return <CustomWebview uri={Sites.login} />;
}
