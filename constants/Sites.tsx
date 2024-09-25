import { FontAwesome } from "@expo/vector-icons";

export const Sites = {
  home: "https://adadaeducationfoundation.com/",
  onlineTraining: "https://adadaeducationfoundation.com/seminar-courses",
  donate: "https://adadaeducationfoundation.com/scola-fundraiser-fe/campaigns",
  login: "https://adadaeducationfoundation.com/login",
};

export const INJECTEDJAVASCRIPT =
  "const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=0.99, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); ";

export const Links = [
  {
    title: "Email Us",
    url: "mailto:adadaeducationfoundation@gmail.com",
    icon: <FontAwesome name="envelope" size={24} color="#F59E0B" />,
  },
  {
    title: "Follow us on YouTube",
    url: "https://youtube.com/@adadaeducationfoundation?si=nvbmRoHkHiWlbZ3T",
    icon: <FontAwesome name="youtube-play" size={24} color="#FF0000" />,
  },
  {
    title: "Follow Us on Facebook",
    url: "https://www.facebook.com/profile.php?id=61566087039000&mibextid=ZbWKwL",
    icon: <FontAwesome name="facebook-official" size={24} color="#1877F2" />,
    color: "#1877F2",
  },
  {
    title: "Chat with Us on WhatsApp",
    url: "https://chat.whatsapp.com/JeCBXg81z1fBCTxBIm4ykq",
    icon: <FontAwesome name="whatsapp" size={24} color="#25D366" />,
  },
];
