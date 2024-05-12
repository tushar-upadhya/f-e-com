import { Alert, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

const AlertMessage = ({ message, type }: { message: any; type: any }) => {
  return (
    <Alert
      className={`rounded-none ${
        type === "error" ? "bg-accent text-white" : "bg-green-500 text-white"
      }`}
    >
      <div className="flex items-center gap-2">
        <div className="text-xl w-[44px] flex justify-center items-center">
          <Info />
        </div>
        <AlertTitle className="text-white flex-1 leading-snug text-sm ">
          {message}
        </AlertTitle>
      </div>
    </Alert>
  );
};

export default AlertMessage;
