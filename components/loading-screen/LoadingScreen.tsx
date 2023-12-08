import { SpinnerCircular } from "spinners-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";

const LoadingScreen = () => {
  return (
    <Dialog defaultOpen={true}>
      <DialogContent>
        <SpinnerCircular />
      </DialogContent>
    </Dialog>
  )
}

export default LoadingScreen
