import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ForgotPasswordDialog } from "./ForgotPasswordDialog";

export const ForgotPasswordButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="button"
        variant="link"
        onClick={() => setOpen(true)}
        className="text-sm text-dashboard-muted hover:text-dashboard-text"
      >
        Forgot Password?
      </Button>
      <ForgotPasswordDialog open={open} onOpenChange={setOpen} />
    </>
  );
};