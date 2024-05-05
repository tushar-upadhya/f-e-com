import { Alert, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

const AlertMessage = ({ message, type }: { message: any; type: any }) => {
  return (
    <Alert
      className={`rounded-none ${
        type === "error" ? "bg-accent text-white" : "bg-green-500 text-white"
      }`}
    >
      <AlertTitle className="text-white">{message}</AlertTitle>
    </Alert>
  );
};

export default AlertMessage;
